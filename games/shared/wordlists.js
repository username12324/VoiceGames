// games/shared/wordlists.js
// ══════════════════════════════════════════════
// TOPIC-BASED WORD LISTS — shared across games
// ══════════════════════════════════════════════
// Each topic provides:
//   - words: { attack: [{word, ru}], defend: [...], heal: [...] }  → used by Heroes
//   - sentences: [{ text, ru, alts }]                                → used by Voice Angler & Spell Match-3
//
// Games read the currently selected topic via VG.getSelectedTopic()
// and fall back to 'fantasy' (their original built-in content) if none is set.

const VG_TOPICS = {

  fantasy: {
    id: 'fantasy',
    name: 'Fantasy',
    emoji: '⚔️',
    words: {
      attack: [
        { word: 'fire', ru: 'огонь' },
        { word: 'lightning', ru: 'молния' },
        { word: 'meteor', ru: 'метеор' },
        { word: 'blast', ru: 'взрыв' },
        { word: 'strike', ru: 'удар' },
        { word: 'arrow', ru: 'стрела' },
        { word: 'bomb', ru: 'бомба' },
        { word: 'freeze', ru: 'заморозить' },
        { word: 'storm', ru: 'буря' },
        { word: 'thunder', ru: 'гром' },
      ],
      defend: [
        { word: 'shield', ru: 'щит' },
        { word: 'fortress', ru: 'крепость' },
        { word: 'aegis', ru: 'эгида' },
        { word: 'guard', ru: 'охрана' },
        { word: 'block', ru: 'блок' },
        { word: 'barrier', ru: 'барьер' },
        { word: 'armor', ru: 'броня' },
        { word: 'wall', ru: 'стена' },
        { word: 'ward', ru: 'защита' },
        { word: 'dodge', ru: 'уклонение' },
      ],
      heal: [
        { word: 'restore', ru: 'восстановить' },
        { word: 'rejuvenate', ru: 'омолодить' },
        { word: 'mend', ru: 'починить' },
        { word: 'cure', ru: 'лечить' },
        { word: 'revive', ru: 'оживить' },
        { word: 'heal', ru: 'исцелить' },
        { word: 'recover', ru: 'восстановиться' },
        { word: 'renew', ru: 'обновить' },
        { word: 'cleanse', ru: 'очистить' },
        { word: 'soothe', ru: 'успокоить' },
      ],
    },
    sentences: [
      { text: 'cast the spell', ru: 'произнести заклинание', alts: ['cast the spell', 'cast a spell', 'cast this spell', 'cast spell'] },
      { text: 'fire ball strike', ru: 'удар огненным шаром', alts: ['fire ball strike', 'fireball strike', 'fire ball', 'fireball'] },
      { text: 'ice wall rise', ru: 'ледяная стена поднимается', alts: ['ice wall rise', 'ice wall', 'rise ice wall'] },
      { text: 'heal my wounds', ru: 'исцели мои раны', alts: ['heal my wounds', 'heal wounds', 'heal me now'] },
      { text: 'shield of light', ru: 'щит света', alts: ['shield of light', 'shield light', 'light shield'] },
      { text: 'thunder strike now', ru: 'удар грома сейчас', alts: ['thunder strike now', 'thunder strike', 'thunder now'] },
      { text: 'open the gate', ru: 'открой ворота', alts: ['open the gate', 'open gate', 'gate open now'] },
      { text: 'freeze the enemy', ru: 'заморозь врага', alts: ['freeze the enemy', 'freeze enemy', 'freeze them now'] },
      { text: 'summon the dragon', ru: 'призови дракона', alts: ['summon the dragon', 'summon dragon', 'call the dragon'] },
      { text: 'magic is real', ru: 'магия реальна', alts: ['magic is real', 'magic real', 'real magic now'] },
    ],
  },

  animals: {
    id: 'animals',
    name: 'Animals',
    emoji: '🐾',
    words: {
      attack: [
        { word: 'bite', ru: 'укус' },
        { word: 'claw', ru: 'коготь' },
        { word: 'pounce', ru: 'прыжок' },
        { word: 'roar', ru: 'рычание' },
        { word: 'sting', ru: 'жало' },
        { word: 'charge', ru: 'атака' },
        { word: 'peck', ru: 'клевать' },
        { word: 'kick', ru: 'удар копытом' },
        { word: 'snap', ru: 'щёлкнуть' },
        { word: 'growl', ru: 'рычать' },
      ],
      defend: [
        { word: 'shell', ru: 'панцирь' },
        { word: 'burrow', ru: 'нора' },
        { word: 'camouflage', ru: 'маскировка' },
        { word: 'flee', ru: 'бежать' },
        { word: 'herd', ru: 'стадо' },
        { word: 'nest', ru: 'гнездо' },
        { word: 'hide', ru: 'прятаться' },
        { word: 'fur', ru: 'мех' },
        { word: 'scales', ru: 'чешуя' },
        { word: 'quills', ru: 'иглы' },
      ],
      heal: [
        { word: 'rest', ru: 'отдых' },
        { word: 'nurse', ru: 'кормить' },
        { word: 'lick', ru: 'лизать' },
        { word: 'sleep', ru: 'сон' },
        { word: 'graze', ru: 'пастись' },
        { word: 'groom', ru: 'ухаживать' },
        { word: 'shelter', ru: 'убежище' },
        { word: 'warmth', ru: 'тепло' },
        { word: 'feed', ru: 'кормить' },
        { word: 'nuzzle', ru: 'тереться носом' },
      ],
    },
    sentences: [
      { text: 'the lion roars', ru: 'лев рычит', alts: ['the lion roars', 'lion roars', 'the lion roar'] },
      { text: 'a bird can fly', ru: 'птица может летать', alts: ['a bird can fly', 'bird can fly', 'birds can fly'] },
      { text: 'the dog runs fast', ru: 'собака бежит быстро', alts: ['the dog runs fast', 'dog runs fast', 'the dog run fast'] },
      { text: 'fish swim in water', ru: 'рыбы плавают в воде', alts: ['fish swim in water', 'fish swims in water', 'fish swim water'] },
      { text: 'the cat sleeps all day', ru: 'кот спит весь день', alts: ['the cat sleeps all day', 'cat sleeps all day', 'the cat sleep all day'] },
      { text: 'elephants are very big', ru: 'слоны очень большие', alts: ['elephants are very big', 'elephant is very big', 'elephants very big'] },
      { text: 'the snake has no legs', ru: 'у змеи нет ног', alts: ['the snake has no legs', 'snake has no legs', 'snakes have no legs'] },
      { text: 'monkeys climb the trees', ru: 'обезьяны лазают по деревьям', alts: ['monkeys climb the trees', 'monkey climbs the trees', 'monkeys climb trees'] },
      { text: 'the bear eats honey', ru: 'медведь ест мёд', alts: ['the bear eats honey', 'bear eats honey', 'the bear eat honey'] },
      { text: 'wolves hunt in packs', ru: 'волки охотятся стаями', alts: ['wolves hunt in packs', 'wolf hunts in packs', 'wolves hunt packs'] },
    ],
  },

  food: {
    id: 'food',
    name: 'Food',
    emoji: '🍕',
    words: {
      attack: [
        { word: 'chop', ru: 'рубить' },
        { word: 'slice', ru: 'резать' },
        { word: 'crush', ru: 'давить' },
        { word: 'grate', ru: 'тереть' },
        { word: 'squeeze', ru: 'выжимать' },
        { word: 'peel', ru: 'чистить' },
        { word: 'mash', ru: 'мять' },
        { word: 'blend', ru: 'смешивать' },
        { word: 'grind', ru: 'молоть' },
        { word: 'stir', ru: 'мешать' },
      ],
      defend: [
        { word: 'wrap', ru: 'обёртка' },
        { word: 'seal', ru: 'запечатать' },
        { word: 'cover', ru: 'накрыть' },
        { word: 'freeze', ru: 'заморозить' },
        { word: 'preserve', ru: 'сохранить' },
        { word: 'jar', ru: 'банка' },
        { word: 'box', ru: 'коробка' },
        { word: 'chill', ru: 'охладить' },
        { word: 'store', ru: 'хранить' },
        { word: 'pack', ru: 'упаковать' },
      ],
      heal: [
        { word: 'bake', ru: 'печь' },
        { word: 'boil', ru: 'варить' },
        { word: 'steam', ru: 'парить' },
        { word: 'roast', ru: 'жарить' },
        { word: 'simmer', ru: 'тушить' },
        { word: 'toast', ru: 'поджарить' },
        { word: 'grill', ru: 'жарить на гриле' },
        { word: 'warm', ru: 'разогреть' },
        { word: 'season', ru: 'приправить' },
        { word: 'sweeten', ru: 'подсластить' },
      ],
    },
    sentences: [
      { text: 'I like pizza', ru: 'я люблю пиццу', alts: ['i like pizza', 'i love pizza', 'like pizza'] },
      { text: 'the soup is hot', ru: 'суп горячий', alts: ['the soup is hot', 'soup is hot', 'the soup hot'] },
      { text: 'she bakes a cake', ru: 'она печёт торт', alts: ['she bakes a cake', 'she bake a cake', 'she bakes cake'] },
      { text: 'we eat breakfast together', ru: 'мы завтракаем вместе', alts: ['we eat breakfast together', 'we eat breakfast', 'eat breakfast together'] },
      { text: 'the apple is red', ru: 'яблоко красное', alts: ['the apple is red', 'apple is red', 'the apple red'] },
      { text: 'he drinks orange juice', ru: 'он пьёт апельсиновый сок', alts: ['he drinks orange juice', 'he drink orange juice', 'drinks orange juice'] },
      { text: 'this bread is fresh', ru: 'этот хлеб свежий', alts: ['this bread is fresh', 'bread is fresh', 'this bread fresh'] },
      { text: 'they cook dinner tonight', ru: 'они готовят ужин сегодня', alts: ['they cook dinner tonight', 'they cook dinner', 'cook dinner tonight'] },
      { text: 'the cheese smells strong', ru: 'сыр сильно пахнет', alts: ['the cheese smells strong', 'cheese smells strong', 'the cheese smell strong'] },
      { text: 'my mom makes cookies', ru: 'моя мама печёт печенье', alts: ['my mom makes cookies', 'mom makes cookies', 'my mom make cookies'] },
    ],
  },

  space: {
    id: 'space',
    name: 'Space',
    emoji: '🚀',
    words: {
      attack: [
        { word: 'launch', ru: 'запуск' },
        { word: 'blast', ru: 'взрыв' },
        { word: 'thrust', ru: 'тяга' },
        { word: 'collide', ru: 'столкнуться' },
        { word: 'ignite', ru: 'зажечь' },
        { word: 'orbit', ru: 'орбита' },
        { word: 'crash', ru: 'авария' },
        { word: 'burn', ru: 'гореть' },
        { word: 'eject', ru: 'катапультировать' },
        { word: 'spin', ru: 'вращение' },
      ],
      defend: [
        { word: 'shield', ru: 'щит' },
        { word: 'suit', ru: 'скафандр' },
        { word: 'dock', ru: 'стыковка' },
        { word: 'seal', ru: 'герметик' },
        { word: 'hatch', ru: 'люк' },
        { word: 'capsule', ru: 'капсула' },
        { word: 'shelter', ru: 'укрытие' },
        { word: 'hull', ru: 'корпус' },
        { word: 'armor', ru: 'броня' },
        { word: 'barrier', ru: 'барьер' },
      ],
      heal: [
        { word: 'repair', ru: 'ремонт' },
        { word: 'refuel', ru: 'дозаправка' },
        { word: 'recharge', ru: 'подзарядка' },
        { word: 'restore', ru: 'восстановить' },
        { word: 'reboot', ru: 'перезагрузка' },
        { word: 'fix', ru: 'починить' },
        { word: 'patch', ru: 'заплатка' },
        { word: 'oxygen', ru: 'кислород' },
        { word: 'recover', ru: 'восстановиться' },
        { word: 'stabilize', ru: 'стабилизировать' },
      ],
    },
    sentences: [
      { text: 'the rocket flies high', ru: 'ракета летит высоко', alts: ['the rocket flies high', 'rocket flies high', 'the rocket fly high'] },
      { text: 'stars shine at night', ru: 'звёзды светят ночью', alts: ['stars shine at night', 'star shines at night', 'stars shine night'] },
      { text: 'the moon is round', ru: 'луна круглая', alts: ['the moon is round', 'moon is round', 'the moon round'] },
      { text: 'astronauts float in space', ru: 'астронавты парят в космосе', alts: ['astronauts float in space', 'astronaut floats in space', 'astronauts float space'] },
      { text: 'the sun is very hot', ru: 'солнце очень горячее', alts: ['the sun is very hot', 'sun is very hot', 'the sun very hot'] },
      { text: 'we see many planets', ru: 'мы видим много планет', alts: ['we see many planets', 'we see planets', 'see many planets'] },
      { text: 'the ship lands on mars', ru: 'корабль садится на марс', alts: ['the ship lands on mars', 'ship lands on mars', 'the ship land on mars'] },
      { text: 'comets travel very fast', ru: 'кометы летят очень быстро', alts: ['comets travel very fast', 'comet travels very fast', 'comets travel fast'] },
      { text: 'the galaxy is huge', ru: 'галактика огромна', alts: ['the galaxy is huge', 'galaxy is huge', 'the galaxy huge'] },
      { text: 'satellites orbit the earth', ru: 'спутники вращаются вокруг земли', alts: ['satellites orbit the earth', 'satellite orbits the earth', 'satellites orbit earth'] },
    ],
  },

};

const VG_TOPIC_LIST = Object.values(VG_TOPICS);

// ── Topic selection persistence (uses VG shared storage) ──────
function vgGetSelectedTopic() {
    if (window.VG && typeof window.VG.getWordList === 'function') {
        const saved = window.VG.getWordList('_global', 'selectedTopic');
        if (saved && saved[0] && VG_TOPICS[saved[0]]) return saved[0];
    }
    return 'fantasy';
}

function vgSetSelectedTopic(topicId) {
    if (!VG_TOPICS[topicId]) return;
    if (window.VG && typeof window.VG.saveWordList === 'function') {
        window.VG.saveWordList('_global', 'selectedTopic', [topicId]);
    }
}

function vgGetTopic(topicId) {
    return VG_TOPICS[topicId] || VG_TOPICS.fantasy;
}

// Export for Node (Jest) and browser
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { VG_TOPICS, VG_TOPIC_LIST, vgGetSelectedTopic, vgSetSelectedTopic, vgGetTopic };
}
