'use strict';

function intelEventReady(item) {
  const trigger = item.trigger || {};
  if (trigger.background) return true;
  if (item.ch > state.ch) return false;
  if (trigger.answer) return state.answers[trigger.answer] !== undefined;
  if (trigger.opening) return (state.intros[trigger.opening] || 0) >= openingFor(person(trigger.opening)).length;
  if (trigger.chapter !== undefined) return state.ch >= trigger.chapter;
  if (trigger.request) return state.intelReplies[trigger.request] === true;
  if (trigger.ending) return !!state.ending;
  return false;
}

function syncEventIntel() {
  // Only settled conversations can trigger a message, never an arbitrary reply count.
  if (state.typing) return;
  const ready = STORY.intel.filter(intelEventReady).map(x => x.id);
  if (state.intelEventSchema !== 1) {
    // Preserve already-read material; do not flood returning players with old events.
    state.intel = [...new Set(['r00', ...state.intel])];
    state.intelDelivered = state.intel.slice();
    state.intelObserved = [...new Set(['r00', ...ready, ...state.intel])];
    state.intelEventSchema = 1;
    if (!state.intelDelivered.includes(state.intelSelected)) state.intelSelected = 'r00';
    return;
  }
  if (!state.intelDelivered.includes('r00')) state.intelDelivered.unshift('r00');
  const newlyRelated = ready.filter(id => !state.intelObserved.includes(id));
  state.intelObserved = [...new Set([...state.intelObserved, ...ready])];
  // Real story beats have distinct triggers. For imported jumps, send only one relevant item.
  const next = newlyRelated.filter(id => !state.intelDelivered.includes(id)).pop();
  if (next) state.intelDelivered.push(next);
}

function rabbitAvatar() {
  const image = el('img', 'rabbit-tab-avatar');
  image.src = $('rabbitPortrait').currentSrc || $('rabbitPortrait').src;
  image.alt = '九月兔';
  return image;
}

function stopIntelTyping() {
  if (state.typing && ['intelArrival', 'intelReply'].includes(state.typing.kind)) {
    clearTypingTimers(); activeTypeToken = 0; state.typing = null;
  }
}

function openIntel(id) {
  if (state.typing && !['intelArrival', 'intelReply'].includes(state.typing.kind)) {
    toast('等对方这几句发完，再看九月兔的消息');
    return;
  }
  stopIntelTyping();
  hideToast();
  const items = eligibleIntel();
  const target = items.find(x => x.id === id) || unreadIntel()[0] || items[items.length - 1];
  if (!target) return;
  state.intelSelected = target.id;
  state.tab = 'chat'; state.rabbit = true;
  render();
  $('main').scrollIntoView({block: 'start'});
}

function renderIntelAlert() {
  const unread = unreadIntel();
  if (!unread.length || (state.tab === 'chat' && state.rabbit)) return;
  const alert = button('', 'intel-alert', () => openIntel());
  alert.append(rabbitAvatar(), el('span', '', '九月兔转来：' + unread[unread.length - 1].title), el('b', '', unread.length + ' 条未读 ↗'));
  alert.setAttribute('aria-label', '查看九月兔新消息');
  $('main').append(alert);
}

function renderRabbitChat(main) {
  const items = eligibleIntel();
  const item = items.find(x => x.id === state.intelSelected) || unreadIntel()[0] || items[items.length - 1];
  if (!item) return;
  state.intelSelected = item.id;
  const read = state.intel.includes(item.id);
  const tp = state.typing;
  if (!read && !tp) {
    beginTyping({kind: 'intelArrival', intel: item.id, messages: [item.lead], onDone: () => {
      if (!state.intel.includes(item.id)) state.intel.push(item.id);
    }});
    return;
  }

  const layout = el('div', 'intel-layout');
  const archive = el('section', 'intel-archive');
  archive.setAttribute('aria-label', '九月兔消息存档');
  const archiveTitle = el('div', 'intel-archive-title');
  archiveTitle.append(el('strong', '', '校园来信'), el('span', '', items.length + ' 则已收到'));
  archive.append(archiveTitle);
  const list = el('div', 'intel-list');
  items.forEach(x => {
    const unseen = !state.intel.includes(x.id);
    const card = button('', 'intel-item' + (x.id === item.id ? ' selected' : '') + (unseen ? ' unread' : ''), () => openIntel(x.id));
    card.dataset.intelItem = x.id;
    card.setAttribute('aria-pressed', String(x.id === item.id));
    card.append(el('span', 'intel-item-meta', '0' + (x.ch + 1) + ' / ' + x.status), el('strong', '', x.title), el('span', 'intel-read-state', unseen ? '● 新消息' : '已读 · 可回看'));
    list.append(card);
  });
  archive.append(list);
  layout.append(archive);

  const panel = el('section', 'chat-panel rabbit-panel');
  const header = el('div', 'chat-header');
  header.append(rabbitAvatar(), el('strong', '', '九月兔'), el('span', '', '校园消息 · 剧情内转发'));
  panel.append(header);
  const log = el('div', 'chat-log rabbit-log');
  log.setAttribute('aria-label', '九月兔转发内容');
  log.tabIndex = 0;
  const rabbit = {name: '九月兔'};
  const arrival = tp && tp.kind === 'intelArrival' && tp.intel === item.id;
  const replying = tp && tp.kind === 'intelReply' && tp.intel === item.id;
  log.append(el('div', 'chat-date', '第 0' + (item.ch + 1) + ' 章 · ' + item.source));
  if (arrival) {
    if (tp.revealed) bubble(log, item.lead, false, rabbit);
    else typingBubble(log, rabbit);
  } else {
    bubble(log, item.lead, false, rabbit);
    const documentCard = el('article', 'intel-document ' + item.kind);
    documentCard.dataset.intelCard = item.id;
    documentCard.append(el('span', 'intel-status', item.status), el('h3', '', item.title));
    item.body.forEach(text => documentCard.append(el('p', '', text)));
    documentCard.append(el('div', 'intel-source', item.source));
    log.append(documentCard);
    if (state.intelReplies[item.id] || replying) {
      bubble(log, item.question, true, rabbit);
      const lines = replying ? item.response.slice(0, tp.revealed) : item.response;
      lines.forEach(text => bubble(log, text, false, rabbit));
      if (replying && tp.revealed < item.response.length) typingBubble(log, rabbit);
    }
  }
  panel.append(log);
  const composer = el('div', 'composer rabbit-composer');
  if (arrival || replying) {
    composer.append(el('p', 'empty-small', '九月兔正在输入…'));
  } else {
    if (!state.intelReplies[item.id] && item.kind !== 'background') {
      const ask = button(item.question, 'reply-choice intel-ask', () => {
        if (state.typing) return;
        state.intelReplies[item.id] = true;
        beginTyping({kind: 'intelReply', intel: item.id, messages: item.response});
      });
      ask.dataset.intelAsk = item.id;
      composer.append(ask);
    }
    const actions = el('div', 'intel-actions');
    const pending = unreadIntel();
    const next = pending[0];
    if (next) actions.append(button('下一条未读（' + pending.length + '）→', 'text-button', () => openIntel(next.id)));
    if (item.related) {
      const who = item.related;
      const visit = button('和' + person(who).name + '聊聊 ↗', 'text-button', () => goChat(who));
      visit.dataset.intelRelated = who;
      actions.append(visit);
    }
    actions.append(button('回到人物对话 →', 'text-button', () => goChat(state.who)));
    composer.append(actions, el('p', 'intel-footnote', '聊到相关事情时，九月兔才会发来新消息。已收到的内容留在这里。'));
  }
  panel.append(composer);
  layout.append(panel);
  main.append(layout);
  requestAnimationFrame(() => {
    if (replying || state.intelReplies[item.id]) log.scrollTop = log.scrollHeight;
    const active = list.querySelector('[aria-pressed="true"]');
    if (active) {
      if (innerWidth <= 1150) list.scrollLeft = Math.max(0, active.offsetLeft - list.offsetLeft - 8);
      else list.scrollTop = Math.max(0, active.offsetTop - list.offsetTop - 8);
    }
  });
}
