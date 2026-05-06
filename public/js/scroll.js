(() => {
  document.addEventListener('DOMContentLoaded', () => {
    const items = Array.from(document.querySelectorAll('.project-item'));
    const hero = document.querySelector('.hero');
    const projects = document.querySelector('#projects'); // ✅ NEW
    const heroImage = document.querySelector('.hero-image');
    const heroText = document.querySelector('.hero-text');

    if (!items.length && !hero) return;

    // ----------------------------
    // Focus Manager State
    // ----------------------------
    let currentFocused = null;

    function setFocus(next) {
      if (currentFocused === next) return;

      if (currentFocused) {
        currentFocused.classList.remove('in-focus');
        const oldVid = currentFocused.querySelector('video');
        if (oldVid) {
          try { oldVid.pause(); } catch (e) { }
        }
      }

      currentFocused = next;

      if (!currentFocused) return;

      currentFocused.classList.add('in-focus');
      const vid = currentFocused.querySelector('video');
      if (vid) {
        try {
          vid.muted = true;
          vid.currentTime = 0;
          const p = vid.play();
          if (p && p.catch) p.catch(() => { });
        } catch (e) { }
      }
    }

    // ----------------------------
    // Z-index setup
    // ----------------------------
    items.forEach((it, idx) => {
      it.style.zIndex = String(100 + idx);
      const sticky = it.querySelector('.project-media-sticky');
      if (sticky) sticky.style.zIndex = String(1000 + idx);
    });

    // ----------------------------
    // MAIN SCROLL LOOP
    // ----------------------------
    window.addEventListener('scroll', () => {
      const scrolled = window.scrollY;
      const viewportCenter = scrolled + window.innerHeight / 2;

      // ----------------------------
      // 🌑 BACKGROUND FADE (NEW)
      // ----------------------------
      if (hero && projects) {
        const start = hero.offsetTop;
        const end = projects.offsetTop;

        const t = Math.min(Math.max((scrolled - start) / (end - start || 1), 0), 1);

        // smooth easing (makes it feel premium)
        const eased = t * t * (3 - 2 * t);

        document.body.classList.toggle('bg-black', eased > 0.5);
      }

      // hero parallax
      if (heroImage) {
        heroImage.style.transform = `translateY(${scrolled * 0.03}px)`;
      }

      if (heroText) {
        heroText.style.transform = `translateY(${Math.min(scrolled * 0.18, 160)}px)`;
      }

      let nearest = null;
      let nearestDist = Infinity;

      items.forEach(it => {
        const rect = it.getBoundingClientRect();
        const elCenter = scrolled + rect.top + rect.height / 2;
        const dist = Math.abs(elCenter - viewportCenter);

        const offset = Math.max(
          Math.min((elCenter - viewportCenter) * -0.05, 40),
          -40
        );

        const media = it.querySelector('.project-media');
        if (media) media.style.transform = `translateY(${offset}px)`;

        if (dist < nearestDist) {
          nearestDist = dist;
          nearest = it;
        }
      });

      if (nearest && nearestDist < window.innerHeight * 0.5) {
        setFocus(nearest);
      } else {
        setFocus(null);
      }

    }, { passive: true });

    // ----------------------------
    // Stack reveal animation
    // ----------------------------
    function updateStackReveal() {
      const vh = window.innerHeight;
      const center = vh / 2;

      items.forEach((it, idx) => {
        const rect = it.getBoundingClientRect();
        const media = it.querySelector('.project-media');
        const sticky = it.querySelector('.project-media-sticky');

        const elCenter = rect.top + rect.height / 2;
        const dist = elCenter - center;

        const translate = Math.max(Math.min(-dist * 0.06, 80), -80);

        if (sticky) sticky.style.transform = `translateY(${translate}px)`;
        if (media) media.style.transform = `translateY(${translate * 0.45}px)`;

        const visibility = Math.max(0, Math.min(1, 1 - Math.abs(dist) / (vh * 0.9)));
        it.style.opacity = String(visibility);
        it.style.pointerEvents = visibility < 0.05 ? 'none' : 'auto';

        if (sticky) sticky.style.zIndex = String(1000 + idx);
      });
    }

    // ----------------------------
    // Hero reveal
    // ----------------------------
    const heroImageEl = document.querySelector('.hero-image');

    function updateReveal() {
      if (!heroImageEl || !hero) return;

      const scroll = window.scrollY;

      const start = hero.offsetTop + hero.offsetHeight - window.innerHeight * 0.8;
      const end = hero.offsetTop + hero.offsetHeight;

      const t = Math.min(Math.max((scroll - start) / (end - start || 1), 0), 1);

      heroImageEl.style.clipPath = `inset(0 0 ${t * 100}% 0)`;

      if (t >= 0.995) {
        heroImageEl.style.opacity = '0';
        setTimeout(() => {
          try { heroImageEl.style.display = 'none'; } catch (e) { }
        }, 320);
      } else {
        heroImageEl.style.opacity = '1';
        heroImageEl.style.display = 'block';
      }
    }

    // init
    updateReveal();
    updateStackReveal();

    window.addEventListener('scroll', updateReveal, { passive: true });
    window.addEventListener('scroll', updateStackReveal, { passive: true });
    window.addEventListener('resize', updateReveal);
    window.addEventListener('resize', updateStackReveal);
  });
})();