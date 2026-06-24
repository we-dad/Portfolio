
  // Space Journey: build a wavy route through the gold stars, then hop a
  // small ship from stop to stop along it.
  (function () {
    const route = document.querySelector('.space-route');
    if (!route) return;
    const svg = route.querySelector('.route-svg');
    const pathEl = route.querySelector('.route-path');
    const ship = route.querySelector('.route-ship');
    const stars = Array.from(route.querySelectorAll('.tl-star'));
    if (!svg || !pathEl || !ship || stars.length < 2) return;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let rafId = null;
    let generation = 0;

    function easeInOut(t) { return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2; }

    function build() {
      const rect = route.getBoundingClientRect();
      svg.setAttribute('width', rect.width);
      svg.setAttribute('height', rect.height);
      svg.setAttribute('viewBox', `0 0 ${rect.width} ${rect.height}`);

      const points = stars.map(s => {
        const r = s.getBoundingClientRect();
        return { x: r.left + r.width / 2 - rect.left, y: r.top + r.height / 2 - rect.top };
      });

      let d = `M ${points[0].x} ${points[0].y}`;
      const checkpoints = [0];
      let cumulative = 0;

      for (let i = 0; i < points.length - 1; i++) {
        const p0 = points[i], p1 = points[i + 1];
        const midY = (p0.y + p1.y) / 2;
        const bulge = (i % 2 === 0) ? 36 : -36;
        const c1x = p0.x + bulge, c1y = midY - (p1.y - p0.y) / 4;
        const c2x = p1.x + bulge, c2y = midY + (p1.y - p0.y) / 4;
        d += ` C ${c1x} ${c1y}, ${c2x} ${c2y}, ${p1.x} ${p1.y}`;

        const seg = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        seg.setAttribute('d', `M ${p0.x} ${p0.y} C ${c1x} ${c1y}, ${c2x} ${c2y}, ${p1.x} ${p1.y}`);
        svg.appendChild(seg);
        cumulative += seg.getTotalLength();
        svg.removeChild(seg);
        checkpoints.push(cumulative);
      }

      pathEl.setAttribute('d', d);
      return checkpoints;
    }

    function placeShipAt(len) {
      const pt = pathEl.getPointAtLength(len);
      ship.style.transform = `translate(${pt.x - 6}px, ${pt.y - 6}px)`;
    }

    function start() {
      generation++;
      const myGen = generation;
      if (rafId) cancelAnimationFrame(rafId);

      const checkpoints = build();
      if (checkpoints.length < 2) return;

      if (reduceMotion) {
        placeShipAt(checkpoints[checkpoints.length - 1]);
        ship.classList.add('is-visible');
        return;
      }

      ship.classList.remove('is-visible');

      function travel(index) {
        if (generation !== myGen) return;

        if (index >= checkpoints.length - 1) {
          setTimeout(() => {
            if (generation !== myGen) return;
            ship.classList.remove('is-visible');
            setTimeout(() => {
              if (generation !== myGen) return;
              placeShipAt(checkpoints[0]);
              requestAnimationFrame(() => { if (generation === myGen) ship.classList.add('is-visible'); });
              travel(0);
            }, 600);
          }, 1500);
          return;
        }

        const from = checkpoints[index], to = checkpoints[index + 1];
        const duration = 1100;
        const t0 = performance.now();
        ship.classList.add('is-visible');

        function frame(now) {
          if (generation !== myGen) return;
          const t = Math.min(1, (now - t0) / duration);
          placeShipAt(from + (to - from) * easeInOut(t));
          if (t < 1) {
            rafId = requestAnimationFrame(frame);
          } else {
            setTimeout(() => travel(index + 1), 650);
          }
        }
        rafId = requestAnimationFrame(frame);
      }

      placeShipAt(checkpoints[0]);
      requestAnimationFrame(() => { if (generation === myGen) ship.classList.add('is-visible'); });
      travel(0);
    }

    start();
    window.addEventListener('load', start);
    let resizeTimer = null;
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(start, 250);
    });
  })();
