
  // Boot screen: a short loading sequence before the page reveals itself.
  (function () {
    const boot = document.getElementById('boot-screen');
    if (!boot) return;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) { boot.remove(); return; }

    const fill = document.getElementById('boot-fill');
    const pct = document.getElementById('boot-pct');
    let p = 0;
    const id = setInterval(() => {
      p += Math.random() * 18 + 7;
      if (p >= 100) p = 100;
      fill.style.width = p + '%';
      pct.textContent = Math.round(p) + '%';
      if (p >= 100) {
        clearInterval(id);
        setTimeout(() => {
          boot.classList.add('is-done');
          setTimeout(() => boot.remove(), 650);
        }, 200);
      }
    }, 130);
  })();
