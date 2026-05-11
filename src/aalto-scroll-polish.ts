const refrigerationFallback = '/refrigeracion-industrial.svg';

function fixRefrigerationImage() {
  const serviceArticles = Array.from(document.querySelectorAll<HTMLElement>('article.service-row'));
  const refrigeration = serviceArticles.find((article) => article.textContent?.toLowerCase().includes('refrigeración'));
  const image = refrigeration?.querySelector<HTMLImageElement>('img');
  if (!image) return;

  image.src = refrigerationFallback;
  image.alt = 'Sistema industrial de refrigeración';
  image.onerror = null;
}

function initRevealAnimations() {
  const targets = Array.from(document.querySelectorAll<HTMLElement>([
    'main > section:first-of-type h1',
    'main > section:first-of-type p',
    'main > section:first-of-type button',
    '#sectores button',
    'section h2',
    'section p',
    '.service-row',
    '#especialidades .mx-auto.grid.max-w-6xl > div',
    '#clientes .brand-marquee',
    '#contacto form',
  ].join(',')));

  targets.forEach((element, index) => {
    if (element.dataset.revealReady === 'true') return;
    element.dataset.revealReady = 'true';
    element.classList.add('aalto-reveal');
    element.style.setProperty('--aalto-delay', `${Math.min(index * 28, 220)}ms`);
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });

  targets.forEach((element) => observer.observe(element));
}

function initPolish() {
  fixRefrigerationImage();
  initRevealAnimations();
  window.setTimeout(fixRefrigerationImage, 600);
  window.setTimeout(initRevealAnimations, 700);
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initPolish, { once: true });
} else {
  initPolish();
}
