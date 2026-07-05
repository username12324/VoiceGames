// games/shared/utils.js

// --- Levenshtein distance ---
function levenshtein(a, b) {
  a = a.toLowerCase().trim();
  b = b.toLowerCase().trim();
  const m = a.length, n = b.length;
  const dp = Array.from({ length: m + 1 }, (_, i) =>
    Array.from({ length: n + 1 }, (_, j) =>
      i === 0 ? j : j === 0 ? i : 0
    )
  );
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      dp[i][j] = a[i - 1] === b[j - 1]
        ? dp[i - 1][j - 1]
        : 1 + Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]);
    }
  }
  return dp[m][n];
}

// --- fuzzScore (similarity) ---
function fuzzScore(a, b) {
  if (a === b) return 1;
  if (a.includes(b) || b.includes(a)) return 0.92;
  const d = levenshtein(a, b);
  return Math.max(0, 1 - d / Math.max(a.length, b.length, 1));
}

// --- phraseMatches ---
function phraseMatches(spokenAlts, phrase) {
  for (const spoken of spokenAlts) {
    for (const alt of phrase.alts) {
      if (fuzzScore(spoken, alt) >= 0.68) return true;
    }
    const targetWords = phrase.text
      .replace(/\b(the|a|an|of|my|and)\b/g, '')
      .trim()
      .split(/\s+/)
      .filter(w => w.length > 1);
    const spokenWords = spoken.split(/\s+/);
    let hits = 0;
    for (const tw of targetWords) {
      for (const sw of spokenWords) {
        if (fuzzScore(sw, tw) >= 0.78) { hits++; break; }
      }
    }
    if (hits >= Math.max(1, Math.ceil(targetWords.length * 0.55))) return true;
  }
  return false;
}

// --- rarityPoints ---
function rarityPoints(rarity) {
  const map = {
    common: 10,
    uncommon: 25,
    rare: 50,
    epic: 100,
    legendary: 250
  };
  return map[rarity] || 10;
}

// --- pickFish (weighted random) ---
function pickFish(weightedFish) {
  const totalWeight = weightedFish.reduce((sum, f) => sum + f.weight, 0);
  let r = Math.random() * totalWeight;
  for (const fish of weightedFish) {
    r -= fish.weight;
    if (r <= 0) return fish;
  }
  return weightedFish[0];
}

// --- findMatches (Spell Match-3) ---
function findMatches(board) {
  const ROWS = board.length;
  const COLS = board[0].length;
  const hits = new Set();
  for (let r = 0; r < ROWS; r++) {
    for (let c = 0; c <= COLS - 3; c++) {
      const t = board[r][c];
      if (t < 0) continue;
      let len = 1;
      while (c + len < COLS && board[r][c + len] === t) len++;
      if (len >= 3) {
        for (let i = 0; i < len; i++) hits.add(`${r},${c + i}`);
      }
    }
  }
  for (let c = 0; c < COLS; c++) {
    for (let r = 0; r <= ROWS - 3; r++) {
      const t = board[r][c];
      if (t < 0) continue;
      let len = 1;
      while (r + len < ROWS && board[r + len][c] === t) len++;
      if (len >= 3) {
        for (let i = 0; i < len; i++) hits.add(`${r + i},${c}`);
      }
    }
  }
  return [...hits].map(s => {
    const [r, c] = s.split(',').map(Number);
    return { r, c };
  });
}

// Export for Node (Jest) and browser (via script tag)
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    levenshtein,
    fuzzScore,
    phraseMatches,
    rarityPoints,
    pickFish,
    findMatches
  };
}// ── VoiceGames Shared Storage & Score Tracking ──────────────────
// Add this to games/shared/utils.js
// Usage from any game: VG.saveScore('color-match', 120); VG.getTotalScore();

const VG_STORAGE_KEY = 'vg_progress_v1';

function vgLoadProgress() {
    try {
        const raw = localStorage.getItem(VG_STORAGE_KEY);
        if (!raw) return vgDefaultProgress();
        const parsed = JSON.parse(raw);
        // Merge with defaults in case new games were added since last save
        return { ...vgDefaultProgress(), ...parsed, games: { ...vgDefaultProgress().games, ...(parsed.games || {}) } };
    } catch (e) {
        console.warn('VG: failed to load progress, resetting.', e);
        return vgDefaultProgress();
    }
}

function vgDefaultProgress() {
    return {
        games: {
            'color-match': { bestScore: 0, totalScore: 0, plays: 0, lastPlayed: null },
            'voice-angler': { bestScore: 0, totalScore: 0, plays: 0, lastPlayed: null },
            'voice-magic': { bestScore: 0, totalScore: 0, plays: 0, lastPlayed: null },
            'picture-sentence': { bestScore: 0, totalScore: 0, plays: 0, lastPlayed: null },
            'spell-match3': { bestScore: 0, totalScore: 0, plays: 0, lastPlayed: null }
        },
        wordLists: {},        // { gameId: { listId: {...} } } — populated by word-list feature
        wordCounts: {},        // { topicId: { wordOrPhraseKey: count } } — how many times each word/phrase was said
        settings: {}
    };
}

function vgSaveProgress(progress) {
    try {
        localStorage.setItem(VG_STORAGE_KEY, JSON.stringify(progress));
        return true;
    } catch (e) {
        console.warn('VG: failed to save progress.', e);
        return false;
    }
}

const VG = {
    /** Record a completed play session for a game. Updates best score, total score, and play count. */
    saveScore(gameId, score) {
        const progress = vgLoadProgress();
        if (!progress.games[gameId]) {
            progress.games[gameId] = { bestScore: 0, totalScore: 0, plays: 0, lastPlayed: null };
        }
        const g = progress.games[gameId];
        g.bestScore = Math.max(g.bestScore, score);
        g.totalScore += score;
        g.plays += 1;
        g.lastPlayed = new Date().toISOString();
        vgSaveProgress(progress);
        return g;
    },

    /** Get stats for a single game: { bestScore, totalScore, plays, lastPlayed } */
    getGameStats(gameId) {
        const progress = vgLoadProgress();
        return progress.games[gameId] || { bestScore: 0, totalScore: 0, plays: 0, lastPlayed: null };
    },

    /** Get stats for every game. */
    getAllStats() {
        return vgLoadProgress().games;
    },

    /** Sum of totalScore across all games — the cross-game leaderboard number. */
    getTotalScore() {
        const games = vgLoadProgress().games;
        return Object.values(games).reduce((sum, g) => sum + g.totalScore, 0);
    },

    /** Sum of bestScore across all games — useful for a "personal best" combined stat. */
    getCombinedBestScore() {
        const games = vgLoadProgress().games;
        return Object.values(games).reduce((sum, g) => sum + g.bestScore, 0);
    },

    /** Total plays across all games. */
    getTotalPlays() {
        const games = vgLoadProgress().games;
        return Object.values(games).reduce((sum, g) => sum + g.plays, 0);
    },

    /** Word list storage — generic, works for any game. */
    saveWordList(gameId, listId, words) {
        const progress = vgLoadProgress();
        if (!progress.wordLists[gameId]) progress.wordLists[gameId] = {};
        progress.wordLists[gameId][listId] = { words, updatedAt: new Date().toISOString() };
        vgSaveProgress(progress);
    },

    getWordList(gameId, listId) {
        const progress = vgLoadProgress();
        return progress.wordLists[gameId]?.[listId]?.words || null;
    },

    getWordListIds(gameId) {
        const progress = vgLoadProgress();
        return Object.keys(progress.wordLists[gameId] || {});
    },

    deleteWordList(gameId, listId) {
        const progress = vgLoadProgress();
        if (progress.wordLists[gameId]) {
            delete progress.wordLists[gameId][listId];
            vgSaveProgress(progress);
        }
    },

    /** Record that a word/phrase from a topic was successfully said. Returns new count. */
    recordWordSaid(topicId, key) {
        const progress = vgLoadProgress();
        if (!progress.wordCounts) progress.wordCounts = {};
        if (!progress.wordCounts[topicId]) progress.wordCounts[topicId] = {};
        progress.wordCounts[topicId][key] = (progress.wordCounts[topicId][key] || 0) + 1;
        vgSaveProgress(progress);
        return progress.wordCounts[topicId][key];
    },

    /** Get the count for a single word/phrase within a topic. */
    getWordCount(topicId, key) {
        const progress = vgLoadProgress();
        return (progress.wordCounts && progress.wordCounts[topicId] && progress.wordCounts[topicId][key]) || 0;
    },

    /** Get all word/phrase counts for a topic: { key: count } */
    getWordCounts(topicId) {
        const progress = vgLoadProgress();
        return (progress.wordCounts && progress.wordCounts[topicId]) || {};
    },

    /** Wipe everything. Exposed for a "reset progress" button. */
    resetAll() {
        vgSaveProgress(vgDefaultProgress());
    }
};

// Expose globally so any game's <script> can call window.VG.saveScore(...) etc.
window.VG = VG;
