(() => {
  'use strict';
  // Progressive enhancement only: the document remains fully visible without JavaScript.
  const sections = document.querySelectorAll('.content-section');
  if (!('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  sections.forEach((section) => section.classList.add('js-ready'));
})();
