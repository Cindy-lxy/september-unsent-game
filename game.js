'use strict';

const KEY = 'september-unsent-v3';
const CHAPTER_COUNT = 3;

const $ = id => document.getElementById(id);
const el = (tag, cls, text) => {
  const node = document.createElement(tag);
  if (cls) node.className = cls;
  if (text !== undefined) node.textContent = text;
  return node;
};
const button = (text, cls, fn) => {
  const b = el('button', cls, text);
  b.type = 'button';
  b.onclick = fn;
  return b;
};
const person = id => STORY.characters.find(c => c.id === id);
const openingFor = c => [{npc:c.hello,reply:STORY.guide.hello},{npc:c.intro,reply:c.ack},...(c.opening || [])];
const totalClues = () => Object.keys(STORY.clues).length;
const chapterIds = ch => STORY.chapters[ch].entries.map(e => e.clue);
const clueChapter = id => STORY.chapters.findIndex(ch => ch.entries.some(e => e.clue === id));
const firstEntryForPerson = who => {
  for (let ch = 0; ch < STORY.chapters.length; ch++) {
    const entry = STORY.chapters[ch].entries.find(e => e.who === who);
    if (entry) return { ch, clue: entry.clue };
  }
  return { ch: 0, clue: STORY.chapters[0].entries[0].clue };
};
const fresh = () => ({
  version: 3,
  storyOrder: 2,
  ch: 0,
  viewCh: 0,
  tab: 'chat',
  who: 'lin',
  entryClue: STORY.chapters[0].entries[0].clue,
  collected: [],
  answers: {},
  intros: {},
  pending: null,
  ending: null,
  endings: [],
  guideSeen: false,
  diarySchema: 1,
  legacyDiaries: [],
  recalls: {},
  reading: {},
  rabbit: false,
  intel: ['r00'],
  intelSelected: 'r00',
  intelReplies: {},
  intelEventSchema: 1,
  intelDelivered: ['r00'],
  intelObserved: ['r00'],
  epilogue: null
});

let storageOK = true;
let state = fresh();
let typeToken = 0;
let activeTypeToken = 0;
let typeTimers = [];

function typingDelay(text) {
  return Math.min(1900, Math.max(520, Math.ceil((text || '').length / 2) * 55));
}
function clearTypingTimers() {
  typeTimers.forEach(clearTimeout);
  typeTimers = [];
}
function beginTyping(typing) {
  clearTypingTimers();
  activeTypeToken = ++typeToken;
  const token = activeTypeToken;
  const messages = Array.isArray(typing.messages) ? typing.messages : [typing.messages];
  state.typing = { ...typing, messages: messages.slice(), token, revealed: 0 };
  let elapsed = 0;
  state.typing.messages.forEach((text, i) => {
    elapsed += typingDelay(text);
    typeTimers.push(setTimeout(() => {
      if (!state.typing || state.typing.token !== token) return;
      state.typing.revealed = i + 1;
      render();
      if (!state.typing || state.typing.token !== token) return;
      if (i === state.typing.messages.length - 1) {
        const done = state.typing.onDone;
        state.typing = null;
        activeTypeToken = 0;
        if (done) done();
        save();
        render();
      }
    }, elapsed));
  });
  render();
}

try {
  let raw = localStorage.getItem(KEY);
  let fromV2 = false;
  if (!raw) {
    raw = localStorage.getItem('september-unsent-v2');
    fromV2 = !!raw;
  }
  if (raw) {
    const saved = JSON.parse(raw);
    const versionOK = saved.version === 3 || (fromV2 && saved.version === 2);
    if (
      versionOK &&
      Number.isInteger(saved.ch) && saved.ch >= 0 && saved.ch < CHAPTER_COUNT &&
      Array.isArray(saved.collected) &&
      saved.answers && typeof saved.answers === 'object' && !Array.isArray(saved.answers)
    ) {
      const reordered = saved.storyOrder !== 2;
      state = { ...fresh(), ...saved };
      state.collected = [...new Set(state.collected.filter(k => STORY.clues[k]))];
      state.answers = Object.fromEntries(
        Object.entries(saved.answers).filter(([k, v]) => state.collected.includes(k) && (v === 0 || v === 1))
      );
      state.ch = Math.min(saved.ch, CHAPTER_COUNT - 1);
      if (reordered) {
        state.ch = 0;
        while (state.ch < CHAPTER_COUNT - 1 && chapterIds(state.ch).every(k => state.answers[k] !== undefined)) state.ch++;
      }
      state.viewCh = Math.min(CHAPTER_COUNT - 1, Math.max(0, Number(state.viewCh) || 0));
      state.who = person(state.who) ? state.who : 'lin';
      if (!STORY.chapters[state.viewCh].entries.some(e => e.clue === state.entryClue)) {
        state.entryClue = STORY.chapters[state.viewCh].entries[0].clue;
      }
      state.tab = (STORY.ui.nav.some(n => n[0] === state.tab) || (state.tab === 'epilogue' && STORY.endings[saved.ending])) ? state.tab : 'diary';
      state.pending = state.collected.includes(state.pending) && state.answers[state.pending] === undefined
        ? state.pending
        : null;
      state.ending = STORY.endings[state.ending] ? state.ending : null;
      state.endings = Array.isArray(state.endings) ? state.endings.filter(e => STORY.endings[e]) : [];
      state.typing = null;
      state.legacyDiaries = reordered
        ? [...new Set([...state.collected, ...(Array.isArray(saved.legacyDiaries) ? saved.legacyDiaries.filter(k => STORY.clues[k]) : [])])]
        : saved.diarySchema === 1 && Array.isArray(saved.legacyDiaries)
          ? saved.legacyDiaries.filter(k => STORY.clues[k])
          : state.collected.slice();
      state.diarySchema = 1;
      state.storyOrder = 2;
      if (!archiveAvailable(state.viewCh)) {
        state.viewCh = state.ch;
        state.entryClue = STORY.chapters[state.ch].entries[0].clue;
      }
      state.recalls = {};
      for (const ch of [1, 2]) for (const c of STORY.characters) {
        const key = ch + ':' + c.id;
        const value = reordered && ch === 1 ? undefined : saved.recalls && saved.recalls[key];
        if (Number.isInteger(value) && value >= 0 && value <= STORY.recalls[ch][c.id].length) state.recalls[key] = value;
      }
      state.reading = saved.reading && typeof saved.reading === 'object' && !Array.isArray(saved.reading) ? saved.reading : {};
      state.rabbit = saved.rabbit === true;
      state.intel = Array.isArray(saved.intel) ? [...new Set(saved.intel.filter(id => (STORY.intel || []).some(x => x.id === id)))] : [];
      state.intelSelected = (STORY.intel || []).some(x => x.id === saved.intelSelected) ? saved.intelSelected : null;
      state.intelReplies = Object.fromEntries(((STORY.intel || []).filter(x => saved.intelReplies && saved.intelReplies[x.id] === true)).map(x => [x.id, true]));
      state.intelEventSchema = saved.intelEventSchema === 1 ? 1 : 0;
      state.intelDelivered = Array.isArray(saved.intelDelivered) ? [...new Set(saved.intelDelivered.filter(id => STORY.intel.some(x => x.id === id)))] : ['r00'];
      state.intelObserved = Array.isArray(saved.intelObserved) ? [...new Set(saved.intelObserved.filter(id => STORY.intel.some(x => x.id === id)))] : ['r00'];
      state.version = 3;
      state.guideSeen = fromV2 ? false : saved.guideSeen !== false;
      if (fromV2) state.intros = {};
      state.intros = {};
      if (saved.intros && typeof saved.intros === 'object' && !Array.isArray(saved.intros)) {
        STORY.characters.forEach(c => {
          const stage = Number(saved.intros[c.id]);
          if (Number.isInteger(stage) && stage >= 1 && stage <= openingFor(c).length) {
            state.intros[c.id] = reordered ? (state.ending ? openingFor(c).length : Math.min(stage, 2)) : stage;
          }
        });
      }
      if (reordered && !state.ending) {
        state.tab = 'chat';
        state.viewCh = state.ch;
        if (state.pending && clueChapter(state.pending) > state.ch) state.pending = null;
        const next = STORY.chapters[state.ch].entries.find(e => e.who === state.who && state.answers[e.clue] === undefined)
          || STORY.chapters[state.ch].entries.find(e => state.answers[e.clue] === undefined)
          || STORY.chapters[state.ch].entries[0];
        state.entryClue = next.clue;
        state.who = next.who;
      }
    }
  }
} catch (e) {
  state = fresh();
}

function save() {
  try {
    const { typing, ...saved } = state;
    localStorage.setItem(KEY, JSON.stringify(saved));
  } catch (e) {
    storageOK = false;
  }
  $('saveLabel').textContent = storageOK ? '本机自动存档' : '本次会话游玩 · 存档不可用';
}

let toastTimer;
function toast(text) {
  $('toast').hidden = false;
  $('toast').textContent = text;
  $('toast').classList.add('visible');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => $('toast').classList.remove('visible'), 3000);
}
function hideToast() {
  clearTimeout(toastTimer);
  $('toast').classList.remove('visible');
  $('toast').hidden = true;
}

function dialog(title, paragraphs, actions) {
  const box = $('modalBody');
  box.replaceChildren();
  box.append(el('div', 'eyebrow', 'SEPTEMBER ARCHIVE'), el('h2', '', title));
  paragraphs.forEach(t => box.append(el('p', '', t)));
  if (actions) actions.forEach(a => box.append(button(a.text, 'dialog-choice', a.fn)));
  if (!$('modal').open) { $('modal').showModal(); $('modal').scrollTop = 0; }
}

let guideStep = 0;
function showGuide() {
  if (!state.intel.includes('r00')) state.intel.push('r00');
  save();
  const box = $('modalBody');
  const step = STORY.guide.steps[guideStep];
  const last = guideStep === STORY.guide.steps.length - 1;
  box.replaceChildren();

  const hero = el('div', 'guide-hero');
  const img = el('img', 'rabbit-guide');
  img.src = $('rabbitPortrait').currentSrc || $('rabbitPortrait').src;
  img.alt = STORY.guide.name;
  const who = el('div');
  who.append(el('div', 'eyebrow', 'RABBIT GUIDE · 简短说明'), el('h2', '', STORY.guide.name));
  hero.append(img, who);
  box.append(hero);

  const dots = el('div', 'guide-dots');
  STORY.guide.steps.forEach((_, i) => dots.append(el('span', i === guideStep ? 'on' : '')));
  box.append(dots, el('h3', 'guide-title', step.title));
  step.body.forEach(t => box.append(el('p', 'guide-p', t)));

  const actions = el('div', 'guide-actions');
  if (last) {
    actions.append(button(step.next, 'primary guide-next', () => {
      state.guideSeen = true;
      state.tab = 'chat';
      state.who = 'lin';
      state.rabbit = false;
      $('modal').close();
      save();
      render();
      focusContent();
    }));
  } else {
    actions.append(button(step.next, 'primary guide-next', () => {
      guideStep++;
      showGuide();
    }));
  }
  box.append(actions);

  const minor = el('div', 'guide-minor');
  minor.append(button('跳过引导', 'text-button', () => {
    state.guideSeen = true;
    $('modal').close();
    save();
    render();
    focusContent();
  }));
  minor.append(button('重新开始本轮故事', 'text-button', () => $('restart').click()));
  box.append(minor);

  if (!$('modal').open) { $('modal').showModal(); $('modal').scrollTop = 0; }
}

function help() {
  guideStep = 0;
  showGuide();
}

$('help').onclick = help;
$('helpMobile').onclick = help;
$('help').textContent = '🐰';
$('helpMobile').textContent = '🐰';
$('help').title = '问问九月兔';
$('helpMobile').title = '问问九月兔';
$('helpMobile').setAttribute('aria-label', '问问九月兔');
$('rabbitHelp').onclick = () => openIntel();
$('closeModal').onclick = () => $('modal').close();
$('restart').onclick = () => dialog(
  '重新翻开这个九月？',
  ['本轮线索和对话会清空，已抵达的结局将保留。'],
  [{
    text: '确认重新开始',
    fn: () => {
      const endings = state.endings;
      clearTypingTimers();
      activeTypeToken = 0;
      state = fresh();
      state.endings = endings;
      $('modal').close();
      save();
      render();
    }
  }]
);
document.querySelector('.brand').onclick = e => {
  e.preventDefault();
  state.tab = 'diary';
  save();
  render();
};

function avatar(c) {
  const a = el('span', 'avatar', c.initial);
  a.style.setProperty('--person', c.color);
  return a;
}
function focusContent() {
  // On phones, place the chat reply area just above the fixed bottom nav so the first
  // actionable choice is visible without hunting below the cover. Other views anchor to main.
  if (window.matchMedia('(max-width:600px)').matches && state.tab === 'chat' && !state.rabbit) {
    const composer = document.querySelector('.composer');
    const rail = document.querySelector('.rail');
    if (composer && rail) {
      const gap = 12;
      const targetBottom = rail.getBoundingClientRect().top - gap;
      const desiredY = window.scrollY + composer.getBoundingClientRect().bottom - targetBottom;
      window.scrollTo(0, Math.max(0, desiredY));
      return;
    }
  }
  $('main').scrollIntoView({block: 'start'});
}
function setTab(tab) {
  state.tab = tab;
  save();
  render();
  focusContent();
}
function completed(ch) {
  return STORY.chapters[ch].entries.every(e => state.answers[e.clue] !== undefined);
}
function ownEntries(who) {
  return STORY.chapters.flatMap(ch => ch.entries).filter(e => e.who === who);
}
function previousEntry(entry) {
  const all = ownEntries(entry.who);
  return all[all.indexOf(entry) - 1];
}
function archiveAvailable(ch) {
  return ch <= state.ch || STORY.chapters[ch].entries.some(e => state.legacyDiaries.includes(e.clue));
}
function entryUnlocked(entry) {
  const ch = clueChapter(entry.clue);
  if (state.legacyDiaries.includes(entry.clue)) return true;
  if (ch > state.ch) return false;
  if (state.collected.includes(entry.clue)) return true;
  if ((state.intros[entry.who] || 0) < openingFor(person(entry.who)).length) return false;
  const prev = previousEntry(entry);
  if (prev && state.answers[prev.clue] === undefined) return false;
  if (ch > 0 && (state.recalls[ch + ':' + entry.who] ?? -1) < STORY.recalls[ch][entry.who].length) return false;
  const tp = state.typing;
  if (tp && ((tp.kind === 'opening' && tp.who === entry.who) ||
      (tp.kind === 'recall' && tp.key === ch + ':' + entry.who) ||
      (tp.kind === 'after' && prev && tp.clue === prev.clue))) return false;
  return true;
}
function recallReady(ch, who) {
  if (ch < 1 || ch > state.ch || (state.intros[who] || 0) < openingFor(person(who)).length) return false;
  return STORY.chapters[ch - 1].entries.filter(e => e.who === who).every(e => state.answers[e.clue] !== undefined);
}
function goChat(who) {
  if (state.typing && who !== state.who) {
    clearTypingTimers(); activeTypeToken = 0; state.typing = null;
  }
  state.who = who; state.rabbit = false; state.tab = 'chat'; render();
  focusContent();
}
function openDiary(entry) {
  state.entryClue = entry.clue; state.viewCh = clueChapter(entry.clue); state.tab = 'diary'; render();
  focusContent();
}
function announceDiary(who) {
  const next = ownEntries(who).find(e => entryUnlocked(e) && !state.collected.includes(e.clue));
  toast(next ? person(who).name + ' 发来一篇新日记 · 可在聊天中打开' : '回应已记录' + (completed(state.ch) ? ' · 本章已完成' : ''));
}
function answersInChapter(ch) {
  return STORY.chapters[ch].entries.filter(e => state.answers[e.clue] !== undefined && !(state.typing && state.typing.kind === 'after' && state.typing.clue === e.clue)).length;
}
function eligibleIntel() {
  return state.intelDelivered.map(id => STORY.intel.find(x => x.id === id)).filter(Boolean);
}
function unreadIntel() {
  return eligibleIntel().filter(x => !state.intel.includes(x.id));
}
function lockedHint(entry) {
  const c = person(entry.who);
  if (clueChapter(entry.clue) > state.ch) return '先核对完当前章节的经过，再翻到更早的关系和回忆。';
  if ((state.intros[c.id] || 0) < openingFor(c).length) return '先与' + c.name + '打个招呼，聊清九月十六日当天的经历，再解锁这一页。';
  const prev = previousEntry(entry);
  if (prev && state.answers[prev.clue] === undefined) return '先读完已收到的上一页，再和' + c.name + '聊完对应话题。';
  return '继续与' + c.name + '聊聊这一章的近况，等待对方发来新的回忆。';
}
function render() {
  normalizeEpilogue();
  if (!(state.tab === 'chat' && state.rabbit)) stopIntelTyping();
  syncEventIntel();
  const chapter = STORY.chapters[state.ch];
  const ids = chapterIds(state.ch);
  const found = ids.filter(k => state.collected.includes(k)).length;
  const done = ids.filter(k => state.answers[k] !== undefined).length;

  $('navigation').replaceChildren();
  STORY.ui.nav.forEach(([key, icon, label]) => {
    const b = button('', 'nav-item ' + ((state.tab === key || (state.tab === 'epilogue' && key === 'diary')) ? 'active' : ''), () => setTab(key));
    b.append(el('span', 'nav-icon', icon), el('span', 'nav-text', label));
    b.setAttribute('aria-label', label);
    if (key === 'chat') {
      const count = state.collected.filter(k => state.answers[k] === undefined).length + unreadIntel().length;
      if (count) b.append(el('b', 'badge', String(count)));
    }
    $('navigation').append(b);
  });

  $('chapterTag').textContent = 'CHAPTER 0' + (state.ch + 1);
  $('chapterTitle').textContent = chapter.title;
  $('chapterProgress').textContent = '0' + (state.ch + 1) + ' / 04';
  $('taskText').textContent = chapter.objective;
  $('progressFill').style.width = (done / ids.length * 100) + '%';
  const rabbitHint = $('rabbitHint');
  const rabbitUnread = unreadIntel().length;
  if (rabbitHint) rabbitHint.textContent = rabbitUnread ? '转来 ' + rabbitUnread + ' 则新的校园消息' : '消息已收好，有新风声我再发你';
  $('rabbitHelp').textContent = rabbitUnread ? '打开新消息 ↗' : '消息存档 ↗';
  $('stats').replaceChildren();
  [['发现线索', found + ' / ' + ids.length], ['完成追问', done + ' / ' + ids.length]].forEach(([label, value]) => {
    const d = el('div');
    d.append(el('strong', '', value), el('span', '', label));
    $('stats').append(d);
  });

  const next = $('nextArea');
  next.replaceChildren();
  if (state.ending) {
    next.append(button('第四章 · 后来的日子 →', 'primary', () => openEpilogue()));
    next.append(button('查看本轮结局 →', 'text-button', () => showEnding()));
  } else if (completed(state.ch)) {
    if (state.ch < CHAPTER_COUNT - 1) {
      next.append(button('打开下一章 →', 'primary', () => {
        state.ch++;
        state.viewCh = state.ch;
        state.tab = 'chat';
        state.rabbit = false;
        state.entryClue = STORY.chapters[state.ch].entries[0].clue;
        state.who = STORY.chapters[state.ch].entries[0].who;
        save();
        render();
        toast(unreadIntel().length ? '新章节已打开 · 九月兔转来了新的校园消息' : '新章节已打开 · 先去对话里和他们继续聊聊');
      }));
    } else {
      next.append(button('整理这段九月 →', 'primary', finish));
    }
  } else {
    next.append(el('p', 'gate-note', '聊完本章 ' + ids.length + ' 条线索后，下一页才会打开。'));
  }

  $('main').replaceChildren();
  renderIntelAlert();
  if (state.tab === 'diary') renderDiary();
  if (state.tab === 'chat') renderChat();
  if (state.tab === 'clues') renderClues();
  if (state.tab === 'people') renderPeople();
  if (state.tab === 'epilogue') renderEpilogue();
  save();
  if (!state.guideSeen) {
    state.guideSeen = true;
    guideStep = 0;
    save();
    showGuide();
  }
}

function head(title, sub) {
  const h = el('div', 'view-heading');
  h.append(el('h3', '', title), el('span', '', sub));
  return h;
}

function renderDiary() {
  const main = $('main');
  const received = STORY.chapters.flatMap(ch => ch.entries).filter(entryUnlocked).length;
  main.append(head('人物日记', '已收到 ' + (received + epilogueCount()) + ' / 28 篇 · 先聊当天，再翻旧事与结局'));

  const tabs = el('div', 'archive-tabs');
  STORY.chapters.forEach((ch, i) => {
    const b = button((!archiveAvailable(i) ? '⌑ ' : '') + '0' + (i + 1) + ' ' + ch.title, i === state.viewCh ? 'selected' : '', () => {
      state.viewCh = i;
      if (!STORY.chapters[i].entries.some(e => e.clue === state.entryClue)) {
        state.entryClue = STORY.chapters[i].entries[0].clue;
      }
      save();
      render();
    });
    b.disabled = !archiveAvailable(i);
    tabs.append(b);
  });
  appendEpilogueTab(tabs);
  main.append(tabs);

  const chapter = STORY.chapters[state.viewCh];
  const layout = el('div', 'diary-layout');
  const list = el('div', 'diary-list');
  chapter.entries.forEach((entry, index) => {
    const c = person(entry.who);
    const unlocked = entryUnlocked(entry);
    const b = button('', 'diary-card ' + (!unlocked ? 'diary-locked ' : '') + (state.entryClue === entry.clue ? 'selected' : ''), () => {
      state.entryClue = entry.clue;
      save();
      render();
    });
    b.dataset.entry = entry.clue;
    b.dataset.person = c.id;
    const row = el('div', 'person-row');
    row.append(avatar(c), el('strong', '', c.name));
    b.append(
      el('span', 'entry-number', String(index + 1).padStart(2, '0')),
      row,
      el('div', 'entry-title', unlocked ? entry.title : '尚未收到 · 第' + (ownEntries(c.id).indexOf(entry) + 1) + '页'),
      el('span', 'entry-date', unlocked ? entry.date.slice(0, 14) : '随聊天逐步解锁')
    );
    b.dataset.locked = String(!unlocked);
    if (!unlocked) b.append(el('span', 'read-dot', '⌑ 回忆暂未开启'));
    else if (state.collected.includes(entry.clue)) b.append(el('span', 'read-dot', '✓ 线索已收录'));
    else b.append(el('span', 'read-dot unread', '○ 新收到 · 等待阅读'));
    list.append(b);
  });
  layout.append(list);

  const entry = chapter.entries.find(e => e.clue === state.entryClue) || chapter.entries[0];
  const c = person(entry.who);
  const paper = el('article', 'paper');
  if (!entryUnlocked(entry)) {
    paper.classList.add('locked-paper');
    paper.append(el('div', 'eyebrow', c.name + ' / 尚未寄来的私人手记'), el('div', 'lock-symbol', '⌑'),
      el('h2', '', '这一页，还没有打开'), el('p', 'lock-copy', lockedHint(entry)),
      el('p', 'lock-copy secondary', '每一篇都从对话中慢慢浮现。现在不会显示标题、正文或线索。'));
    const prev = previousEntry(entry);
    if (prev && entryUnlocked(prev) && !state.collected.includes(prev.clue)) {
      paper.append(button('先读已收到的上一页 →', 'primary', () => openDiary(prev)));
    } else {
      paper.append(button('去和' + c.name + '聊聊 →', 'primary', () => goChat(c.id)));
    }
    layout.append(paper); main.append(layout); return;
  }
  const top = el('div', 'paper-top');
  top.append(el('span', '', c.name + ' / 私人手记'), el('span', '', entry.weather + ' · ' + entry.date));
  paper.append(top, el('h2', '', entry.title));
  paper.append(el('p', 'reading-meta', entry.wordCount + ' 字 · 私人记录与后记 · 可滚动阅读'));
  const reader = el('div', 'reading-body');
  reader.tabIndex = 0;
  reader.setAttribute('aria-label', c.name + '的长篇日记正文');
  reader.append(el('div', 'memory-heading', entry.recallCaption));
  entry.text.forEach((text, paragraphIndex) => {
    if (paragraphIndex === entry.recollectionAt) reader.append(el('h3', 'memory-heading', '后来补记'));
    const p = el('p', 'diary-text');
    const re = /\{(c\d+)\|([^}]+)\}/g;
    let start = 0;
    let m;
    while ((m = re.exec(text)) !== null) {
      p.append(document.createTextNode(text.slice(start, m.index)));
      const id = m[1];
      const found = state.collected.includes(id);
      const b = button(m[2], 'clue-fragment ' + (found ? 'collected' : ''), () => collect(id));
      b.dataset.clue = id;
      b.setAttribute('aria-label', (found ? '查看线索：' : '收集线索：') + STORY.clues[id].label);
      p.append(b);
      start = re.lastIndex;
    }
    p.append(document.createTextNode(text.slice(start)));
    reader.append(p);
  });
  paper.append(reader);
  reader.addEventListener('scroll', () => {
    state.reading[entry.clue] = reader.scrollTop;
    save();
  }, { passive: true });
  requestAnimationFrame(() => {
    const savedPosition = Number(state.reading[entry.clue]) || 0;
    if (savedPosition > 0 && savedPosition <= reader.scrollHeight - reader.clientHeight) reader.scrollTop = savedPosition;
  });

  const bottom = el('div', 'paper-bottom');
  bottom.append(el('span', '', state.collected.includes(entry.clue)
    ? '✓ 这页的线索已记入手帐'
    : '⌕ 点击带虚线的文字，收录可追问的线索'));
  if (state.collected.includes(entry.clue)) {
    bottom.append(button('去问问' + c.name + ' →', 'text-button', () => {
      state.tab = 'chat';
      state.who = c.id;
      state.rabbit = false;
      save();
      render();
    }));
  }
  paper.append(bottom);
  const previousPages = STORY.chapters.reduce((sum, ch, i) => sum + (i < state.viewCh ? ch.entries.length : 0), 0);
  const globalPage = previousPages + chapter.entries.indexOf(entry) + 1;
  paper.append(el('div', 'page-number', '— ' + String(globalPage).padStart(2, '0') + ' —'));
  layout.append(paper);
  main.append(layout);
}

function collect(id) {
  const entry = STORY.chapters.flatMap(ch => ch.entries).find(e => e.clue === id);
  if (!entry || !entryUnlocked(entry)) { toast('这页日记还没有收到，先去和对方聊聊'); return; }
  if (!state.collected.includes(id)) {
    state.collected.push(id);
    save();
    render();
    toast('新线索「' + STORY.clues[id].label + '」已收录 · 可前往对话');
  } else {
    toast('这条线索已收录，去对话中追问吧');
  }
}

function renderChat() {
  const main = $('main');
  main.append(head('他们的另一面', '所有聊天均为剧情模拟 · 你的回复会被记住'));

  const tabs = el('div', 'contact-tabs');
  STORY.characters.forEach(c => {
    const b = button('', 'contact ' + (!state.rabbit && state.who === c.id ? 'selected' : ''), () => {
      if (c.id !== state.who && state.typing) {
        clearTypingTimers();
        activeTypeToken = 0;
        state.typing = null;
      }
      state.who = c.id;
      state.rabbit = false;
      save();
      render();
    });
    b.dataset.contact = c.id;
    b.append(avatar(c), el('span', '', c.name));
    tabs.append(b);
  });
  const rabbitContact = button('', 'contact rabbit-contact ' + (state.rabbit ? 'selected' : ''), () => openIntel());
  rabbitContact.dataset.contact = 'rabbit';
  rabbitContact.append(rabbitAvatar(), el('span', '', '九月兔'));
  const rabbitUnread = unreadIntel().length;
  if (rabbitUnread) rabbitContact.append(el('b', 'badge rabbit-badge', String(rabbitUnread)));
  tabs.append(rabbitContact);
  main.append(tabs);

  if (state.rabbit) return renderRabbitChat(main);

  const c = person(state.who);
  const panel = el('section', 'chat-panel');
  const header = el('div', 'chat-header');
  header.append(avatar(c), el('strong', '', c.name), el('span', '', '异地 · 文字私信'));
  panel.append(header);

  const log = el('div', 'chat-log');
  const stage = state.intros[c.id] || 0;
  const opening = openingFor(c);
  const tp = state.typing;
  const openingTyping = tp && tp.kind === 'opening' && tp.who === c.id;
  log.append(el('div', 'chat-date', '首次私信 · 先聊九月十六日当天'));

  const donePairs = openingTyping ? stage - 1 : stage;
  opening.forEach((round, i) => {
    if (i < donePairs) {
      bubble(log, round.npc, false, c);
      bubble(log, round.reply, true, c);
    }
  });
  if (stage < opening.length && !openingTyping) bubble(log, opening[stage].npc, false, c);
  if (openingTyping) {
    bubble(log, opening[stage - 1].npc, false, c);
    bubble(log, opening[stage - 1].reply, true, c);
    if (stage >= opening.length) log.append(el('div', 'chat-date', '09 / 16 · 当天的记录'));
    typingBubble(log, c);
  }
  if (stage >= opening.length && !openingTyping) {
    bubble(log, c.welcome, false, c);
    log.append(el('div', 'chat-date', '09 / 16 · 当天的记录'));
  }

  const visibleIds = Object.keys(STORY.clues)
    .filter(k => stage >= opening.length && STORY.clues[k].who === c.id && (state.answers[k] !== undefined || state.pending === k));
  if (stage >= opening.length && !openingTyping) for (let ch = 0; ch <= state.ch; ch++) {
    const chapterEntries = STORY.chapters[ch].entries.filter(e => e.who === c.id);
    if (ch > 0 && recallReady(ch, c.id)) {
      const lines = STORY.recalls[ch][c.id];
      const key = ch + ':' + c.id;
      const rstage = state.recalls[key] || 0;
      const playing = tp && tp.kind === 'recall' && tp.key === key;
      log.append(el('div', 'chat-date', '第 0' + (ch + 1) + ' 章 · ' + STORY.chapters[ch].title));
      const done = playing ? rstage - 1 : rstage;
      lines.slice(0, done).forEach(round => {
        bubble(log, round.npc, false, c); bubble(log, round.reply, true, c);
      });
      if (playing) {
        bubble(log, lines[rstage - 1].npc, false, c);
        bubble(log, lines[rstage - 1].reply, true, c);
        typingBubble(log, c);
      } else if (rstage < lines.length) {
        bubble(log, lines[rstage].npc, false, c);
      } else {
        bubble(log, chapterEntries[0].diaryNotice, false, c);
      }
    }
    for (const entry of chapterEntries) {
      const k = entry.clue;
      if (entryUnlocked(entry)) {
        const receipt = button('', 'received-diary', () => openDiary(entry));
        receipt.dataset.diary = k;
        receipt.append(el('span', 'receipt-label', c.name + ' 发来私人手记'),
          el('strong', '', '▤ ' + entry.title),
          el('span', '', entry.wordCount + ' 字 · ' + (state.collected.includes(k) ? '再次翻阅 ↗' : '打开新收到的日记 ↗')));
        log.append(receipt);
      }
      if (!visibleIds.includes(k)) continue;
      const clue = STORY.clues[k];
      const replyTyping = tp && tp.kind === 'reply' && tp.clue === k;
      const afterTyping = tp && tp.kind === 'after' && tp.clue === k;
      log.append(el('div', 'chat-date', '话题 · ' + clue.label));
      bubble(log, clue.question, true, c);
      const replyMessages = Array.isArray(clue.reply) ? clue.reply : [clue.reply];
      const replyCount = replyTyping ? tp.revealed : replyMessages.length;
      replyMessages.slice(0, replyCount).forEach(t => bubble(log, t, false, c));
      if (replyTyping && tp.revealed < tp.messages.length) typingBubble(log, c);
      if (state.answers[k] !== undefined) {
        bubble(log, clue.choice[state.answers[k]], true, c);
        const afterMessages = Array.isArray(clue.after[state.answers[k]]) ? clue.after[state.answers[k]] : [clue.after[state.answers[k]]];
        if (afterTyping) {
          afterMessages.slice(0, tp.revealed).forEach(t => bubble(log, t, false, c));
          if (tp.revealed < tp.messages.length) typingBubble(log, c);
        } else if (!replyTyping) afterMessages.forEach(t => bubble(log, t, false, c));
      }
    }
  }
  panel.append(log);

  const composer = el('div', 'composer');
  if (openingTyping) {
    composer.append(el('p', 'empty-small', c.name + ' 正在输入…'));
    panel.append(composer);
    main.append(panel);
    requestAnimationFrame(() => { log.scrollTop = log.scrollHeight; });
    return;
  }
  if (stage < opening.length) {
    composer.append(el('div', 'composer-label', '点击下方选项，回复 ' + c.name));
    const intro = button(opening[stage].reply, 'reply-choice intro-action', () => {
      const nextStage = stage + 1;
      const incoming = nextStage < opening.length ? opening[nextStage].npc : c.welcome;
      state.intros[c.id] = nextStage;
      beginTyping({ kind: 'opening', who: c.id, messages: [incoming], onDone: () => {
        if (nextStage === opening.length) announceDiary(c.id);
      } });
    });
    intro.dataset.introStage = String(stage + 1);
    composer.append(intro);
    panel.append(composer);
    main.append(panel);
    requestAnimationFrame(() => { log.scrollTop = log.scrollHeight; });
    return;
  }
  const replyTypingNow = tp && tp.kind === 'reply' && STORY.clues[tp.clue] && STORY.clues[tp.clue].who === c.id;
  const afterTypingNow = tp && tp.kind === 'after' && STORY.clues[tp.clue] && STORY.clues[tp.clue].who === c.id;
  const recallTypingNow = tp && tp.kind === 'recall' && tp.key && tp.key.split(':')[1] === c.id;
  if (recallTypingNow) {
    composer.append(el('p', 'empty-small', c.name + ' 正在输入…'));
    panel.append(composer); main.append(panel); requestAnimationFrame(() => { log.scrollTop = log.scrollHeight; }); return;
  }
  for (let ch = 1; ch <= 2; ch++) {
    const key = ch + ':' + c.id;
    if (!tp && !state.pending && recallReady(ch, c.id) && (state.recalls[key] || 0) < STORY.recalls[String(ch)][c.id].length) {
      composer.append(el('div', 'composer-label', STORY.chapters[ch].title + ' · 先和' + c.name + '继续聊聊'));
      const lines = STORY.recalls[String(ch)][c.id];
      const stageRecall = state.recalls[key] || 0;
      const b = button(lines[stageRecall].reply, 'reply-choice recall-action', () => {
        const nextStage = stageRecall + 1;
        const notice = nextStage >= lines.length ? (STORY.chapters[ch].entries.find(e => e.who === c.id).diaryNotice || c.welcome) : lines[nextStage].npc;
        state.recalls[key] = nextStage;
        beginTyping({ kind: 'recall', key, messages: [notice], onDone: () => announceDiary(c.id) });
      });
      b.dataset.recall = key;
      composer.append(b);
      panel.append(composer); main.append(panel); requestAnimationFrame(() => { log.scrollTop = log.scrollHeight; }); return;
    }
  }
  if ((state.pending && STORY.clues[state.pending].who === c.id && !replyTypingNow) || afterTypingNow) {
    if (afterTypingNow) {
      composer.append(el('p', 'empty-small', c.name + ' 正在输入…'));
    } else {
      const id = state.pending;
      composer.append(el('div', 'composer-label', '选择回应 · 这句话会影响你们的信任'));
      STORY.clues[id].choice.forEach((text, i) => {
        const b = button(text, 'reply-choice', () => {
          const ai = i;
          state.answers[id] = ai;
          state.pending = null;
          beginTyping({
            kind: 'after', clue: id, messages: STORY.clues[id].after[ai],
            onDone: () => announceDiary(c.id)
          });
        });
        b.dataset.answer = i;
        composer.append(b);
      });
    }
  } else if (replyTypingNow) {
    composer.append(el('p', 'empty-small', c.name + ' 正在输入…'));
  } else {
    composer.append(el('div', 'composer-label', '选择一条线索，向 ' + c.name + ' 追问'));
    const available = state.collected
      .filter(k => STORY.clues[k].who === c.id && state.answers[k] === undefined && clueChapter(k) <= state.ch)
      .sort((a, b) => STORY.chapters.flatMap(ch => ch.entries).findIndex(e => e.clue === a) - STORY.chapters.flatMap(ch => ch.entries).findIndex(e => e.clue === b));
    if (available.length) {
      available.forEach(id => {
        const b = button('⌕ ' + STORY.clues[id].label + ' ↗', 'topic-button', () => ask(id));
        b.dataset.topic = id;
        composer.append(b);
      });
    } else {
      const unread = ownEntries(c.id).find(e => entryUnlocked(e) && !state.collected.includes(e.clue));
      composer.append(el('p', 'empty-small', unread
        ? '有一篇刚收到的日记，读完再接着聊吧。'
        : '这段话先聊到这里。也听听其他人记得什么，下一章再继续。'));
      composer.append(button(unread ? '打开刚收到的日记 →' : '回到日记手帐 →', 'text-button', () => {
        const target = unread || ownEntries(c.id).filter(entryUnlocked).at(-1) || ownEntries(c.id)[0];
        openDiary(target);
      }));
    }
    if (state.pending) composer.append(el('p', 'pending-note', '你与' + person(STORY.clues[state.pending].who).name + '的对话还在等待回应。'));
  }
  panel.append(composer);
  main.append(panel);
  requestAnimationFrame(() => { log.scrollTop = log.scrollHeight; });
}

function bubble(log, text, self, c) {
  const wrap = el('div', 'message ' + (self ? 'self' : ''));
  wrap.append(el('small', '', self ? '你' : c.name), el('p', '', text));
  log.append(wrap);
}

function typingBubble(log, c) {
  const wrap = el('div', 'message typing');
  wrap.append(el('small', '', c.name));
  const p = el('p', 'typing-dots');
  [0, 1, 2].forEach(i => p.append(el('i', '', '.')));
  wrap.append(p);
  log.append(wrap);
}

function ask(id) {
  if (state.typing) {
    toast('等对方发完这几句，再继续聊吧');
    return;
  }
  if (state.ending) {
    toast('本轮已结束，重开后可以重新选择。');
    return;
  }
  if (state.pending) {
    state.who = STORY.clues[state.pending].who;
    save();
    render();
    toast('先回应当前话题，再开启下一条线索');
    return;
  }
  if (!state.collected.includes(id)) {
    toast(STORY.ui.wrong);
    return;
  }
  const entry = STORY.chapters.flatMap(ch => ch.entries).find(e => e.clue === id);
  if (entry && clueChapter(id) > state.ch) {
    toast('这页可以回看；新话题先按当前章节的顺序核对。');
    return;
  }
  if (!entry || !entryUnlocked(entry) || (state.intros[entry.who] || 0) < openingFor(person(entry.who)).length) {
    goChat(STORY.clues[id].who); toast('先完成这一段私信，再继续追问'); return;
  }
  state.pending = id;
  state.rabbit = false;
  state.who = STORY.clues[id].who;
  beginTyping({ kind: 'reply', clue: id, messages: STORY.clues[id].reply });
}

function renderClues() {
  const main = $('main');
  main.append(head('线索手帐', state.collected.length + ' / ' + totalClues() + ' 条已发现 · ' + Object.keys(state.answers).length + ' 条已交流'));
  const all = el('div', 'clue-grid');
  for (let ch = 0; ch <= state.ch; ch++) {
    STORY.chapters[ch].entries.forEach(e => {
      const clue = STORY.clues[e.clue];
      const found = state.collected.includes(e.clue);
      const done = state.answers[e.clue] !== undefined;
      const card = el('div', 'clue-card ' + (!found ? 'locked' : ''));
      card.append(
        el('span', 'eyebrow', 'CHAPTER 0' + (ch + 1) + ' · ' + person(e.who).name),
        el('h3', '', found ? clue.label : '尚未发现的线索'),
        el('p', '', found ? clue.question : entryUnlocked(e) ? '返回《' + e.title + '》，留意字里行间的细节。' : lockedHint(e))
      );
      card.append(button(done ? '✓ 已交流 · 回看' : found ? '带着线索去对话 ↗' : '翻开这页日记 →', 'text-button', () => {
        state.who = e.who;
        state.viewCh = ch;
        state.entryClue = e.clue;
        state.tab = found ? 'chat' : 'diary';
        state.rabbit = false;
        save();
        render();
      }));
      all.append(card);
    });
  }
  main.append(all);

  const note = el('div', 'evidence-note');
  note.append(
    el('strong', '', '提醒：不要把猜测当作事实'),
    el('p', '', '单条日记是主观视角。时间、原始录音与检修记录需要相互印证；感情中的误会不等于事件原因。')
  );
  main.append(note);
}

function renderPeople() {
  const main = $('main');
  main.append(head('人物档案', '四个人，四种没有说出口的喜欢'));
  const grid = el('div', 'people-grid');
  STORY.characters.forEach(c => {
    const card = el('article', 'person-card');
    card.append(
      avatar(c),
      el('span', 'eyebrow', c.role),
      el('h2', '', c.name),
      el('h4', '', c.tag),
      el('p', '', c.bio),
      button(state.ending ? '阅读 ' + c.name + ' 的结局日记 →' : '阅读 ' + c.name + ' 的日记 →', 'text-button', () => {
        if (state.ending) {
          openEpilogue(c.id, epilogueDone(c.id) ? 'diary' : 'chat');
          return;
        }
        const target = firstEntryForPerson(c.id);
        state.who = c.id;
        state.viewCh = target.ch;
        state.entryClue = target.clue;
        state.tab = 'diary';
        save();
        render();
      })
    );
    grid.append(card);
  });
  main.append(grid);

  const d = el('div', 'ending-shelf');
  d.append(el('h3', '', '已抵达的结局 · ' + state.endings.length + ' / ' + Object.keys(STORY.endings).length));
  state.endings.forEach(id => d.append(button(STORY.endings[id].tag + ' · ' + STORY.endings[id].title, 'text-button', () => showEnding(id))));
  main.append(d);
}

render();
