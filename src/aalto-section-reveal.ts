function initAaltoSectionReveal() {
  const sections = Array.from(document.querySelectorAll<HTMLElement>('main > section'));
  if (!sections.length) return;

  sections.forEach((section) => {
    if (!section.classList.contains('aalto-section-reveal')) {
      section.classList.add('aalto-section-reveal');
    }
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('aalto-section-visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    root: null,
    threshold: 0.12,
    rootMargin: '0px 0px -8% 0px',
  });

  sections.forEach((section, index) => {
    if (index === 0) {
      section.classList.add('aalto-section-visible');
    } else {
      observer.observe(section);
    }
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initAaltoSectionReveal, { once: true });
} else {
  initAaltoSectionReveal();
}
