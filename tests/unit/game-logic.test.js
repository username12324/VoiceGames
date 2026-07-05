const {
  levenshtein,
  fuzzScore,
  phraseMatches,
  rarityPoints,
  pickFish,
  findMatches
} = require('../../games/shared/utils');

// ============================================================
//  ACTUAL TESTS
// ============================================================

describe('Levenshtein distance', () => {
  test('identical strings', () => {
    expect(levenshtein('cat', 'cat')).toBe(0);
  });
  test('one insertion', () => {
    expect(levenshtein('cat', 'cart')).toBe(1);
  });
  test('one deletion', () => {
    expect(levenshtein('cart', 'cat')).toBe(1);
  });
  test('one substitution', () => {
    expect(levenshtein('cat', 'bat')).toBe(1);
  });
  test('case insensitivity', () => {
    expect(levenshtein('Cat', 'cat')).toBe(0);
  });
});

describe('fuzzScore', () => {
  test('exact match', () => {
    expect(fuzzScore('hello', 'hello')).toBe(1);
  });
  test('similar words', () => {
    expect(fuzzScore('helo', 'hello')).toBeGreaterThan(0.7);
    expect(fuzzScore('helo', 'hello')).toBeLessThan(1);
  });
  test('completely different', () => {
    expect(fuzzScore('abc', 'xyz')).toBe(0);
  });
});

describe('phraseMatches', () => {
  const phrase = {
    text: 'reel it in',
    alts: ['reel it in', 'reel in now', 'pull it in']
  };
  test('exact match', () => {
    expect(phraseMatches(['reel it in'], phrase)).toBe(true);
  });
  test('close match', () => {
    expect(phraseMatches(['reel it'], phrase)).toBe(true);
  });
  test('partial match with content words', () => {
    // 'reel' and 'in' both appear (with fuzzy matching)
    expect(phraseMatches(['reel in'], phrase)).toBe(true);
  });
  test('no match', () => {
    expect(phraseMatches(['hello world'], phrase)).toBe(false);
  });
});

describe('rarityPoints', () => {
  test('common', () => expect(rarityPoints('common')).toBe(10));
  test('uncommon', () => expect(rarityPoints('uncommon')).toBe(25));
  test('rare', () => expect(rarityPoints('rare')).toBe(50));
  test('epic', () => expect(rarityPoints('epic')).toBe(100));
  test('legendary', () => expect(rarityPoints('legendary')).toBe(250));
  test('unknown rarity defaults to 10', () => {
    expect(rarityPoints('mythical')).toBe(10);
  });
});

describe('pickFish weighted random', () => {
  const fishDB = [
    { id: 'a', weight: 1 },
    { id: 'b', weight: 1 },
    { id: 'c', weight: 8 }
  ];
  test('returns a fish from the list', () => {
    const result = pickFish(fishDB);
    expect(fishDB).toContainEqual(result);
  });
  test('distribution leans toward higher weight', () => {
    const originalRandom = Math.random;
    Math.random = jest.fn(() => 0.9);
    const result = pickFish(fishDB);
    expect(result.id).toBe('c');
    Math.random = originalRandom;
  });
});

describe('findMatches in Spell Match-3 board', () => {
  test('detects horizontal match of 3', () => {
    const board = [
      [0, 0, 0, -1, -1, -1, -1],
      [-1, -1, -1, -1, -1, -1, -1],
      [-1, -1, -1, -1, -1, -1, -1],
      [-1, -1, -1, -1, -1, -1, -1],
      [-1, -1, -1, -1, -1, -1, -1],
      [-1, -1, -1, -1, -1, -1, -1],
      [-1, -1, -1, -1, -1, -1, -1]
    ];
    const matches = findMatches(board);
    expect(matches).toHaveLength(3);
    expect(matches).toContainEqual({ r: 0, c: 0 });
    expect(matches).toContainEqual({ r: 0, c: 1 });
    expect(matches).toContainEqual({ r: 0, c: 2 });
  });

  test('detects vertical match of 3', () => {
    const board = [
      [0, -1, -1, -1, -1, -1, -1],
      [0, -1, -1, -1, -1, -1, -1],
      [0, -1, -1, -1, -1, -1, -1],
      [-1, -1, -1, -1, -1, -1, -1],
      [-1, -1, -1, -1, -1, -1, -1],
      [-1, -1, -1, -1, -1, -1, -1],
      [-1, -1, -1, -1, -1, -1, -1]
    ];
    const matches = findMatches(board);
    expect(matches).toHaveLength(3);
    expect(matches).toContainEqual({ r: 0, c: 0 });
    expect(matches).toContainEqual({ r: 1, c: 0 });
    expect(matches).toContainEqual({ r: 2, c: 0 });
  });

  test('returns empty array when no matches', () => {
    const board = [
      [0, 1, 2, -1, -1, -1, -1],
      [-1, -1, -1, -1, -1, -1, -1],
      [-1, -1, -1, -1, -1, -1, -1],
      [-1, -1, -1, -1, -1, -1, -1],
      [-1, -1, -1, -1, -1, -1, -1],
      [-1, -1, -1, -1, -1, -1, -1],
      [-1, -1, -1, -1, -1, -1, -1]
    ];
    const matches = findMatches(board);
    expect(matches).toHaveLength(0);
  });
});
