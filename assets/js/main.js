(() => {
  'use strict';
  // Progressive enhancement only: the document remains fully visible without JavaScript.
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reducedMotion) return;

  const timeline = document.querySelector('.timeline');
  if (timeline) {
    const dot = document.createElement('span');
    dot.className = 'timeline-progress';
    dot.setAttribute('aria-hidden', 'true');
    timeline.appendChild(dot);

    const markerTop = 8; // matches .experience:before top offset
    let ticking = false;
    const update = () => {
      const rect = timeline.getBoundingClientRect();
      const anchor = window.innerHeight * 0.35;
      const progress = Math.min(1, Math.max(0, (anchor - rect.top) / rect.height));
      dot.style.top = `${markerTop + progress * (rect.height - markerTop)}px`;
      ticking = false;
    };
    update();
    window.addEventListener(
      'scroll',
      () => {
        if (!ticking) {
          requestAnimationFrame(update);
          ticking = true;
        }
      },
      { passive: true }
    );
    window.addEventListener('resize', update);
  }

  const experiences = document.querySelectorAll('.experience');
  if (experiences.length && 'IntersectionObserver' in window) {
    const illuminate = (target) => {
      experiences.forEach((exp) => exp.classList.toggle('is-illuminated', exp === target));
    };
    const observer = new IntersectionObserver(
      (entries) => {
        const active = entries.find((entry) => entry.isIntersecting);
        if (active) illuminate(active.target);
      },
      { rootMargin: '-35% 0px -60% 0px', threshold: 0 }
    );
    experiences.forEach((exp) => observer.observe(exp));
  }
})();
