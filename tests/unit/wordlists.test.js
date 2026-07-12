const {
  VG_TOPICS,
  VG_TOPIC_LIST,
  vgGetSelectedTopic,
  vgSetSelectedTopic,
  vgGetTopic,
  vgExtractWordsFromSentence,
  vgGetWordsFromTopic,
  vgGetCategorizedWords,
  vgLoadCustomTopics,
  vgSaveCustomTopics,
  vgCreateCustomTopic,
  vgDeleteCustomTopic,
  vgAddPhraseToTopic,
  vgRemovePhraseFromTopic,
  vgGetAllTopics,
} = require('../../games/shared/wordlists');

// ============================================================
//  ACTUAL TESTS
// ============================================================

beforeEach(() => {
  localStorage.clear();
  delete window.VG;
});

describe('Built-in topics', () => {
  test('VG_TOPIC_LIST contains all built-in topics', () => {
    expect(VG_TOPIC_LIST.length).toBe(Object.keys(VG_TOPICS).length);
  });

  test('every built-in topic has required shape', () => {
    VG_TOPIC_LIST.forEach(topic => {
      expect(topic.id).toBeTruthy();
      expect(topic.name).toBeTruthy();
      expect(Array.isArray(topic.sentences)).toBe(true);
      expect(topic.sentences.length).toBeGreaterThan(0);
    });
  });
});

describe('vgLoadCustomTopics / vgSaveCustomTopics', () => {
  test('returns empty array when nothing stored', () => {
    expect(vgLoadCustomTopics()).toEqual([]);
  });

  test('saves and loads topics correctly', () => {
    const topics = [{ id: 'custom_1', name: 'Test', emoji: '📝', sentences: [] }];
    vgSaveCustomTopics(topics);
    expect(vgLoadCustomTopics()).toEqual(topics);
  });

  test('returns empty array when storage has invalid JSON', () => {
    localStorage.setItem('vg_custom_topics_v1', '{not valid json');
    expect(vgLoadCustomTopics()).toEqual([]);
  });
});

describe('vgCreateCustomTopic', () => {
  test('creates a topic with given name and emoji', () => {
    const topic = vgCreateCustomTopic('My Words', '🎯');
    expect(topic.name).toBe('My Words');
    expect(topic.emoji).toBe('🎯');
    expect(topic.id).toMatch(/^custom_/);
    expect(topic.sentences).toEqual([]);
  });

  test('defaults name and emoji when omitted', () => {
    const topic = vgCreateCustomTopic();
    expect(topic.name).toBe('My List');
    expect(topic.emoji).toBe('📝');
  });

  test('persists the new topic to storage', () => {
    const topic = vgCreateCustomTopic('Persisted', '✅');
    const loaded = vgLoadCustomTopics();
    expect(loaded.some(t => t.id === topic.id)).toBe(true);
  });

  test('multiple created topics get unique ids', () => {
    const spy = jest.spyOn(Date, 'now')
      .mockReturnValueOnce(1000)
      .mockReturnValueOnce(2000);
    const t1 = vgCreateCustomTopic('A');
    const t2 = vgCreateCustomTopic('B');
    expect(t1.id).not.toBe(t2.id);
    spy.mockRestore();
  });
});

describe('vgDeleteCustomTopic', () => {
  test('removes the matching topic and keeps others', () => {
    const spy = jest.spyOn(Date, 'now')
      .mockReturnValueOnce(1000)
      .mockReturnValueOnce(2000);
    const t1 = vgCreateCustomTopic('Keep');
    const t2 = vgCreateCustomTopic('Delete');
    spy.mockRestore();
    vgDeleteCustomTopic(t2.id);
    const loaded = vgLoadCustomTopics();
    expect(loaded.some(t => t.id === t1.id)).toBe(true);
    expect(loaded.some(t => t.id === t2.id)).toBe(false);
  });

  test('does nothing if topic id does not exist', () => {
    const t1 = vgCreateCustomTopic('Solo');
    vgDeleteCustomTopic('nonexistent_id');
    expect(vgLoadCustomTopics().length).toBe(1);
    expect(vgLoadCustomTopics()[0].id).toBe(t1.id);
  });
});

describe('vgAddPhraseToTopic', () => {
  test('adds a phrase with trimmed text and default alts', () => {
    const topic = vgCreateCustomTopic('Phrases');
    const ok = vgAddPhraseToTopic(topic.id, '  Hello There  ', 'привет');
    expect(ok).toBe(true);
    const loaded = vgLoadCustomTopics().find(t => t.id === topic.id);
    expect(loaded.sentences.length).toBe(1);
    expect(loaded.sentences[0].text).toBe('Hello There');
    expect(loaded.sentences[0].ru).toBe('привет');
    expect(loaded.sentences[0].alts).toEqual(['hello there']);
  });

  test('returns false for empty text', () => {
    const topic = vgCreateCustomTopic('Empty');
    expect(vgAddPhraseToTopic(topic.id, '   ', 'x')).toBe(false);
  });

  test('returns false if topic does not exist', () => {
    expect(vgAddPhraseToTopic('missing_id', 'hello', 'привет')).toBe(false);
  });
});

describe('vgRemovePhraseFromTopic', () => {
  test('removes phrase at given index', () => {
    const topic = vgCreateCustomTopic('Removable');
    vgAddPhraseToTopic(topic.id, 'first', '1');
    vgAddPhraseToTopic(topic.id, 'second', '2');
    vgRemovePhraseFromTopic(topic.id, 0);
    const loaded = vgLoadCustomTopics().find(t => t.id === topic.id);
    expect(loaded.sentences.length).toBe(1);
    expect(loaded.sentences[0].text).toBe('second');
  });

  test('returns false if topic does not exist', () => {
    expect(vgRemovePhraseFromTopic('missing_id', 0)).toBe(false);
  });
});

describe('vgGetAllTopics', () => {
  test('includes built-in topics plus custom topics', () => {
    const before = vgGetAllTopics().length;
    vgCreateCustomTopic('Extra');
    const after = vgGetAllTopics().length;
    expect(after).toBe(before + 1);
    expect(VG_TOPIC_LIST.every(t => vgGetAllTopics().some(a => a.id === t.id))).toBe(true);
  });
});

describe('vgGetTopic', () => {
  test('returns a built-in topic by id', () => {
    expect(vgGetTopic('animals').id).toBe('animals');
  });

  test('returns a custom topic by id', () => {
    const topic = vgCreateCustomTopic('Findable');
    expect(vgGetTopic(topic.id).id).toBe(topic.id);
  });

  test('falls back to fantasy for unknown id', () => {
    expect(vgGetTopic('does_not_exist').id).toBe('fantasy');
  });
});

describe('vgExtractWordsFromSentence', () => {
  test('filters filler words and pairs remaining EN/RU words', () => {
    const result = vgExtractWordsFromSentence({ text: 'the cat sleeps all day', ru: 'кот спит весь день' });
    expect(result.every(w => w.word !== 'the')).toBe(true);
    expect(result.length).toBeGreaterThan(0);
    result.forEach(w => {
      expect(typeof w.word).toBe('string');
      expect(typeof w.ru).toBe('string');
    });
  });

  test('handles sentence with no ru gracefully', () => {
    const result = vgExtractWordsFromSentence({ text: 'hello world', ru: '' });
    expect(result).toEqual([]); // len = min(cleanEn, cleanRu=0) = 0
  });
});

describe('vgGetWordsFromTopic', () => {
  test('builds a deduplicated word pool from a topic', () => {
    const words = vgGetWordsFromTopic('fantasy');
    expect(words.length).toBeGreaterThan(0);
    const seen = new Set();
    words.forEach(w => {
      expect(seen.has(w.word)).toBe(false);
      seen.add(w.word);
    });
  });

  test('returns empty array for a topic with no sentences', () => {
    const topic = vgCreateCustomTopic('NoSentences');
    expect(vgGetWordsFromTopic(topic.id)).toEqual([]);
  });
});

describe('vgGetCategorizedWords', () => {
  test('splits words into attack/defend/heal covering the full word pool', () => {
    const { attack, defend, heal } = vgGetCategorizedWords('animals');
    const total = attack.length + defend.length + heal.length;
    expect(total).toBe(vgGetWordsFromTopic('animals').length);
  });
});

describe('vgGetSelectedTopic / vgSetSelectedTopic', () => {
  test('defaults to fantasy when no VG storage is present', () => {
    expect(vgGetSelectedTopic()).toBe('fantasy');
  });

  test('saves and reads back a valid topic id via mocked VG storage', () => {
    let stored = null;
    window.VG = {
      saveWordList: (ns, key, val) => { stored = val; },
      getWordList: (ns, key) => stored,
    };
    vgSetSelectedTopic('animals');
    expect(vgGetSelectedTopic()).toBe('animals');
  });

  test('ignores an invalid topic id', () => {
    let stored = null;
    window.VG = {
      saveWordList: (ns, key, val) => { stored = val; },
      getWordList: (ns, key) => stored,
    };
    vgSetSelectedTopic('not_a_real_topic');
    expect(stored).toBeNull();
    expect(vgGetSelectedTopic()).toBe('fantasy');
  });
});
