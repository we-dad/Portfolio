
// Language toggle: English / Arabic, with RTL switching.
// Reads text from window.I18N.en / window.I18N.ar (see lang-en.js / lang-ar.js),
// looked up by each element's data-i18n="key" attribute.
(function () {
  const btn = document.getElementById('lang-toggle');
  if (!btn) return;
  let current = 'en';

  function applyLang(lang) {
    current = lang;
    document.documentElement.lang = lang;
    document.documentElement.dir = (lang === 'ar') ? 'rtl' : 'ltr';
    document.body.classList.toggle('is-ar', lang === 'ar');

    const dict = (lang === 'ar') ? window.I18N.ar : window.I18N.en;

    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      const val = dict[key];
      if (val == null) return;
      el.textContent = val;
      if (el.hasAttribute('data-text')) el.setAttribute('data-text', val);
    });

    btn.textContent = (lang === 'ar') ? 'EN' : 'AR';

    // The Space Journey route line/ship is built from measured star
    // positions, which move when the layout mirrors for Arabic — rebuild it.
    requestAnimationFrame(() => {
      window.dispatchEvent(new Event('resize'));
    });
  }

  btn.addEventListener('click', () => applyLang(current === 'en' ? 'ar' : 'en'));
  applyLang('en');
})();
