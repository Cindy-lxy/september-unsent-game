'use strict';
// Language preference is separate from story progress and ending collection.
const LANGUAGE_KEY = 'september-unsent-language';
const LANGUAGE = (() => {
  const query = new URLSearchParams(location.search).get('lang');
  if (query === 'en' || query === 'zh') return query;
  try { return localStorage.getItem(LANGUAGE_KEY) === 'en' ? 'en' : 'zh'; }
  catch (_) { return 'zh'; }
})();
const STORY = LANGUAGE === 'en' ? STORY_EN : STORY_ZH;
function tr(text) {
  return LANGUAGE === 'en' && Object.prototype.hasOwnProperty.call(UI_EN, text) ? UI_EN[text] : text;
}
function switchLanguage() {
  const next = LANGUAGE === 'en' ? 'zh' : 'en';
  // The game already recovers pending conversations on refresh; keep every choice and clue.
  if (typeof save === 'function') save();
  if (typeof storageOK !== 'undefined' && !storageOK) {
    toast(LANGUAGE === 'en' ? 'Allow browser storage before switching languages so your progress stays safe.' : '请先允许浏览器存储，再切换语言，以免丢失当前进度。');
    return;
  }
  try { localStorage.setItem(LANGUAGE_KEY, next); } catch (_) { /* The URL also carries the language choice. */ }
  const url = new URL(location.href);
  url.searchParams.set('lang', next);
  const modal = document.getElementById('modal');
  if (modal.open && modal.querySelector('.guide-title')) url.searchParams.set('guide', String(guideStep));
  else url.searchParams.delete('guide');
  // Reload restores the same state from IDs, without replaying or advancing any choice.
  location.replace(url.href);
}
function languageButton(inDialog) {
  const b = document.createElement('button');
  b.type = 'button';
  b.className = inDialog ? 'language-toggle language-toggle-dialog' : 'language-toggle';
  b.id = inDialog ? 'languageToggleDialog' : 'languageToggle';
  b.textContent = LANGUAGE === 'en' ? '中文' : 'EN';
  b.lang = LANGUAGE === 'en' ? 'zh-CN' : 'en';
  b.setAttribute('aria-label', LANGUAGE === 'en' ? '切换为中文' : 'Switch to English');
  b.title = LANGUAGE === 'en' ? '切换为中文 · 保留进度' : 'Switch to English · Keep progress';
  b.addEventListener('click', switchLanguage);
  return b;
}
function localizeStaticPage() {
  document.documentElement.lang = LANGUAGE === 'en' ? 'en' : 'zh-CN';
  document.documentElement.dataset.language = LANGUAGE;
  if (LANGUAGE === 'en') {
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    const nodes = [];
    while (walker.nextNode()) if (!/^(SCRIPT|STYLE)$/.test(walker.currentNode.parentElement?.tagName || '')) nodes.push(walker.currentNode);
    nodes.forEach(n => { n.nodeValue = tr(n.nodeValue); });
    document.querySelectorAll('[title],[alt],[aria-label]').forEach(n => {
      ['title','alt','aria-label'].forEach(a => { if (n.hasAttribute(a)) n.setAttribute(a, tr(n.getAttribute(a))); });
    });
    document.title = tr(document.title);
  }
  document.querySelector('.topbar').append(languageButton(false));
  const dialog = document.getElementById('modal');
  const tools = document.createElement('div');
  tools.className = 'dialog-language-tools';
  tools.append(languageButton(true));
  dialog.prepend(tools);
}
localizeStaticPage();
window.addEventListener('load', () => {
  const url = new URL(location.href);
  if (!url.searchParams.has('guide')) return;
  const step = Number(url.searchParams.get('guide'));
  url.searchParams.delete('guide');
  history.replaceState(null, '', url.href);
  if (Number.isInteger(step) && step >= 0 && step < STORY.guide.steps.length) {
    guideStep = step;
    showGuide();
  }
});
