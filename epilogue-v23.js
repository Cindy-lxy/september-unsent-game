'use strict';

function normalizeEpilogue() {
  const old = state.epilogue;
  const same = old && typeof old === 'object' && old.ending === state.ending;
  const value = same ? old : {};
  const clean = {ending: state.ending, who: person(value.who) ? value.who : 'lin', mode: value.mode === 'diary' ? 'diary' : 'chat', introSeen: {}, choices: {}, pending: {}, read: [], positions: {}};
  for (const c of STORY.characters) {
    const rounds = STORY.epilogue.people[c.id].rounds;
    const picks = Array.isArray(value.choices?.[c.id]) ? value.choices[c.id].slice(0, rounds.length) : [];
    clean.choices[c.id] = [];
    for (const pick of picks) { if (pick !== 0 && pick !== 1) break; clean.choices[c.id].push(pick); }
    clean.introSeen[c.id] = value.introSeen?.[c.id] === true || clean.choices[c.id].length > 0;
    const pending = value.pending?.[c.id];
    if (pending && pending.round === clean.choices[c.id].length && pending.round < rounds.length && (pending.choice === 0 || pending.choice === 1)) clean.pending[c.id] = {round: pending.round, choice: pending.choice};
    if (Array.isArray(value.read) && value.read.includes(c.id) && clean.choices[c.id].length === rounds.length) clean.read.push(c.id);
    clean.positions[c.id] = Math.max(0, Number(value.positions?.[c.id]) || 0);
  }
  state.epilogue = clean;
  if (!state.ending && state.tab === 'epilogue') state.tab = 'chat';
  const tp = state.typing;
  if (tp && ['epilogueIntro', 'epilogueStep'].includes(tp.kind) && (state.tab !== 'epilogue' || clean.mode !== 'chat' || clean.who !== tp.who)) {
    clearTypingTimers(); activeTypeToken = 0; state.typing = null;
  }
}
function epilogueDone(who) {
  return !!state.ending && (state.epilogue?.choices?.[who]?.length || 0) === STORY.epilogue.people[who].rounds.length;
}
function epilogueCount() { return STORY.characters.filter(c => epilogueDone(c.id)).length; }
function openEpilogue(who, mode = 'chat') {
  if (!state.ending) { toast(tr('先完成第三章的结局选择，再读他们后来的故事')); return; }
  if (state.typing && !['epilogueIntro', 'epilogueStep'].includes(state.typing.kind)) { toast(tr('等这几句消息发完，再去看后来的日子')); return; }
  normalizeEpilogue(); hideToast();
  if (person(who)) state.epilogue.who = who;
  state.epilogue.mode = mode;
  state.tab = 'epilogue'; state.rabbit = false;
  render(); $('main').scrollIntoView({block: 'start'});
}
function appendEpilogueTab(tabs, selected = false) {
  const b = button((state.ending ? '' : '⌑ ') + '04 ' + STORY.epilogue.title, selected ? 'selected' : '', () => openEpilogue(undefined, 'diary'));
  b.dataset.epilogueTab = 'true'; b.disabled = !state.ending;
  tabs.append(b);
}
function startEpilogueDelivery(who) {
  const data = STORY.epilogue.people[who], variant = data.variants[state.ending];
  if (!state.epilogue.introSeen[who]) {
    beginTyping({kind: 'epilogueIntro', who, messages: [...variant.intro, ...data.rounds[0].npc], onDone: () => {state.epilogue.introSeen[who] = true;}});
    return true;
  }
  const pending = state.epilogue.pending[who];
  if (!pending) return false;
  const round = data.rounds[pending.round];
  const following = data.rounds[pending.round + 1]?.npc || [];
  beginTyping({kind: 'epilogueStep', who, messages: [...round.responses[pending.choice], ...following], onDone: () => {
    state.epilogue.choices[who].push(pending.choice);
    delete state.epilogue.pending[who];
  }});
  return true;
}
function renderEpilogue() {
  if (!state.ending) return;
  const e = state.epilogue, c = person(e.who), data = STORY.epilogue.people[c.id], variant = data.variants[state.ending];
  if (e.mode === 'chat' && !state.typing && startEpilogueDelivery(c.id)) return;
  const main = $('main');
  $('chapterTag').textContent = 'CHAPTER 04';
  $('chapterTitle').textContent = STORY.epilogue.title;
  $('chapterProgress').textContent = '04 / 04';
  $('taskText').textContent = STORY.epilogue.objective;
  $('progressFill').style.width = ((epilogueCount() + e.read.length) / 8 * 100) + '%';
  $('stats').replaceChildren();
  [[tr('最后的私信'), epilogueCount() + ' / 4'], [tr('结局日记'), e.read.length + ' / 4']].forEach(([label, value]) => {
    const d = el('div');d.append(el('strong', '', value),el('span','',label));$('stats').append(d);
  });
  main.append(head(tr('第四章 · 后来的日子'), STORY.endings[state.ending].tag + tr(' · 四个人各自的后续')));
  const tabs = el('div', 'archive-tabs epilogue-archive');
  STORY.chapters.forEach((ch, i) => tabs.append(button('0' + (i+1) + ' ' + ch.title, '', () => {
    state.viewCh = i;state.entryClue = ch.entries[0].clue;setTab('diary');
  })));
  appendEpilogueTab(tabs, true);main.append(tabs);
  const contacts = el('div', 'contact-tabs epilogue-contacts');
  STORY.characters.forEach(p => {
    const b = button('', 'contact ' + (p.id === c.id ? 'selected' : ''), () => openEpilogue(p.id, e.mode));
    b.dataset.epiloguePerson = p.id;
    b.append(avatar(p), el('span', '', p.name), el('small', 'epilogue-status', e.read.includes(p.id) ? tr('已读结局') : epilogueDone(p.id) ? tr('新日记') : tr('最后的私信')));
    contacts.append(b);
  });
  main.append(contacts);
  const modes = el('div', 'epilogue-modes');
  [['chat',tr('最后的私信')],['diary',epilogueDone(c.id)?tr('结局日记'):tr('⌑ 结局日记')]].forEach(([mode,label]) => {
    const b=button(label,e.mode===mode?'selected':'',()=>openEpilogue(c.id,mode));b.dataset.epilogueMode=mode;modes.append(b);
  });
  main.append(modes);
  if(e.mode==='chat')renderEpilogueChat(main,c,data,variant);
  else renderEpilogueDiary(main,c,data,variant);
  if(epilogueCount()===4 && e.read.length===4){
    const done=el('section','epilogue-complete');done.dataset.epilogueComplete='true';
    done.append(el('div','eyebrow','SEPTEMBER, UNTIL NEXT TIME'),el('h3','',tr('下次上线见')),el('p','',STORY.epilogue.completion));main.append(done);
  }
}
function renderEpilogueChat(main,c,data,variant){
  const e=state.epilogue,choices=e.choices[c.id],tp=state.typing;
  const pending=e.pending[c.id];
  const intro=tp?.kind==='epilogueIntro'&&tp.who===c.id;
  const step=tp?.kind==='epilogueStep'&&tp.who===c.id;
  const panel=el('section','chat-panel epilogue-panel');
  const header=el('div','chat-header');header.append(avatar(c),el('strong','',c.name),el('span','',tr('异地 · 只聊近况，不再追问线索')));panel.append(header);
  const log=el('div','chat-log epilogue-log');log.tabIndex=0;log.setAttribute('aria-label',c.name+tr('的最后私信'));
  log.append(el('div','chat-date',STORY.epilogue.date));
  if(intro){
    tp.messages.slice(0,tp.revealed).forEach(t=>bubble(log,t,false,c));
    if(tp.revealed<tp.messages.length)typingBubble(log,c);
  }else{
    variant.intro.forEach(t=>bubble(log,t,false,c));data.rounds[0].npc.forEach(t=>bubble(log,t,false,c));
    choices.forEach((pick,i)=>{
      const r=data.rounds[i];bubble(log,r.choices[pick],true,c);r.responses[pick].forEach(t=>bubble(log,t,false,c));
      (data.rounds[i+1]?.npc||[]).forEach(t=>bubble(log,t,false,c));
    });
    if(step&&pending){
      bubble(log,data.rounds[pending.round].choices[pending.choice],true,c);
      tp.messages.slice(0,tp.revealed).forEach(t=>bubble(log,t,false,c));
      if(tp.revealed<tp.messages.length)typingBubble(log,c);
    }
  }
  panel.append(log);
  const composer=el('div','composer');
  if(intro||step)composer.append(el('p','empty-small',c.name+tr(' 正在输入…')));
  else if(epilogueDone(c.id)){
    const received=button('', 'received-diary',()=>openEpilogue(c.id,'diary'));received.dataset.epilogueDiary=c.id;
    received.append(el('span','receipt-label',tr('这次聊天之后 · ')+c.name+tr(' 的新日记')),el('strong','','▤ '+data.title),el('span','',variant.wordCount+tr(' 字 · ')+(e.read.includes(c.id)?tr('再次翻阅 ↗'):tr('打开新日记 ↗'))));
    composer.append(el('p','empty-small',tr('最后几句话留在了聊天框里。后来，生活又往前走了一点。')),received);
    composer.append(button(tr('再听听另一位的近况 →'),'text-button',()=>openEpilogue(nextEpiloguePerson(c.id),'chat')));
  }else{
    composer.append(el('div','composer-label',tr('回复 ')+c.name+' · '+(choices.length+1)+' / '+data.rounds.length));
    data.rounds[choices.length].choices.forEach((text,choice)=>{
      const b=button(text,'reply-choice',()=>{
        if(state.typing)return;
        state.epilogue.pending[c.id]={round:choices.length,choice};save();render();
      });b.dataset.epilogueChoice=String(choice);composer.append(b);
    });
  }
  panel.append(composer);main.append(panel);
  requestAnimationFrame(()=>{log.scrollTop=log.scrollHeight;});
}
function nextEpiloguePerson(who){
  const ids=STORY.characters.map(c=>c.id),start=ids.indexOf(who);
  for(let n=1;n<=ids.length;n++){const id=ids[(start+n)%ids.length];if(!state.epilogue.read.includes(id))return id;}
  return ids[(start+1)%ids.length];
}
function renderEpilogueDiary(main,c,data,variant){
  const paper=el('article','paper epilogue-paper');
  if(!epilogueDone(c.id)){
    paper.classList.add('locked-paper');paper.append(el('div','eyebrow','CHAPTER 04 · '+c.name),el('div','lock-symbol','⌑'),el('h2','',tr('这一页，写在告别之后')),el('p','lock-copy',tr('先和')+c.name+tr('聊完最后一段私信，再翻开这篇新的日记。')),button(tr('继续最后的私信 →'),'primary',()=>openEpilogue(c.id,'chat')));
    paper.dataset.epilogueLocked=c.id;main.append(paper);return;
  }
  const top=el('div','paper-top');top.append(el('span','',c.name+tr(' / 私人手记')),el('span','',data.weather+' · '+data.date));
  paper.append(top,el('h2','',data.title),el('p','reading-meta',variant.wordCount+tr(' 字 · 聊天之后写下的生活 · 私人记录')));
  const reader=el('div','reading-body epilogue-reader');reader.tabIndex=0;reader.setAttribute('aria-label',c.name+tr('的结局日记'));reader.dataset.epilogueReader=c.id;
  variant.text.forEach(text=>reader.append(el('p','diary-text',text)));paper.append(reader);
  const bottom=el('div','paper-bottom');
  const label=el('span','',state.epilogue.read.includes(c.id)?tr('✓ 这篇结局日记已读'):tr('读到页末，收好这一篇日记'));bottom.append(label);
  const mark=button(state.epilogue.read.includes(c.id)?tr('✓ 已读完这篇日记'):tr('收好这篇结局日记 ✓'),'primary',()=>{
    if(!epilogueDone(c.id))return;
    if(!state.epilogue.read.includes(c.id))state.epilogue.read.push(c.id);save();render();
  });mark.dataset.epilogueRead=c.id;bottom.append(mark);
  const update=()=>{mark.disabled=state.epilogue.read.includes(c.id)||reader.scrollTop+reader.clientHeight<reader.scrollHeight-24;};
  reader.addEventListener('scroll',()=>{state.epilogue.positions[c.id]=reader.scrollTop;update();save();},{passive:true});
  bottom.append(button(tr('回看和')+c.name+tr('的最后私信 →'),'text-button',()=>openEpilogue(c.id,'chat')));
  if(state.epilogue.read.includes(c.id))bottom.append(button(tr('继续看其他人的结局 →'),'text-button',()=>openEpilogue(nextEpiloguePerson(c.id),'chat')));
  paper.append(bottom,el('div','page-number','— '+(25+STORY.characters.findIndex(p=>p.id===c.id))+' —'));main.append(paper);
  requestAnimationFrame(()=>{reader.scrollTop=state.epilogue.positions[c.id]||0;update();});
}
function finish() {
  if (!completed(2)) return;
  dialog(STORY.ui.finalQuestion, [tr('事件原因不会随着选择改变。你选择的，是如何对待他们的心事。')],
    STORY.ui.finalChoices.map((text, i) => ({text, fn: () => {
      const score=Object.values(state.answers).filter(v=>v===0).length;
      const id=i===2||score<10?'distance':i===1||score<18?'quiet':'open';
      state.ending=id;if(!state.endings.includes(id))state.endings.push(id);
      save();render();showEnding();
    }})));
}
function showEnding(id=state.ending){
  if(!STORY.endings[id])return;
  const end=STORY.endings[id];
  const actions=id===state.ending?[{text:tr('进入第四章 · ')+STORY.epilogue.title+' →',fn:()=>{$('modal').close();openEpilogue();}}]:undefined;
  dialog(end.title,[end.tag,...end.body,tr('已收藏此结局。第四章里，四个人还想各自和你聊一会儿；聊完后，可以读到他们新写的结局日记。')],actions);
}
