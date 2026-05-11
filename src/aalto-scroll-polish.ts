const refrigerationFallback = 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&q=80&w=1400';

function fixRefrigerationImage() {
  const serviceArticles = Array.from(document.querySelectorAll<HTMLElement>('article.service-row'));
  const refrigeration = serviceArticles.find((article) => article.textContent?.toLowerCase().includes('refrigeración'));
  const image = refrigeration?.querySelector<HTMLImageElement>('img');
  if (!image) return;

  image.src = refrigerationFallback;
  image.alt = 'Mantenimiento de refrigeración y sistemas técnicos';
  image.onerror = null;
}

function initHeaderScroll() {
  const header = document.querySelector<HTMLElement>('header');
  if (!header || header.dataset.scrollHideReady === 'true') return;

  header.dataset.scrollHideReady = 'true';
  let lastY = window.scrollY;
  let ticking = false;

  const update = () => {
    const currentY = window.scrollY;
    const goingDown = currentY > lastY;
    const pastHeroStart = currentY > 120;

    header.classList.toggle('aalto-header-hidden', goingDown && pastHeroStart);
    header.classList.toggle('aalto-header-scrolled', currentY > 30);

    lastY = currentY;
    ticking = false;
  };

  window.addEventListener('scroll', () => {
    if (ticking) return;
    ticking = true;
    window.requestAnimationFrame(update);
  }, { passive: true });
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
  initHeaderScroll();
  initRevealAnimations();
  window.setTimeout(fixRefrigerationImage, 600);
  window.setTimeout(initRevealAnimations, 700);
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initPolish, { once: true });
} else {
  initPolish();
}
