function initMobileHeaderController() {
  const header = document.querySelector<HTMLElement>('header');
  if (!header || header.dataset.mobileHeaderController === 'true') return;

  header.dataset.mobileHeaderController = 'true';
  header.style.transition = 'transform 320ms cubic-bezier(.2,.8,.2,1), box-shadow 220ms ease, background 220ms ease';
  header.style.willChange = 'transform';

  let lastY = window.scrollY;
  let ticking = false;
  let lockedOpenUntil = 0;

  const isMobile = () => window.matchMedia('(max-width: 767px)').matches;
  const isMenuOpen = () => Boolean(document.querySelector('.fixed.inset-0.z-\\[60\\]'));

  const showHeader = () => {
    header.style.transform = 'translate3d(0,0,0)';
  };

  const hideHeader = () => {
    header.style.transform = 'translate3d(0,-110%,0)';
  };

  const update = () => {
    const y = window.scrollY;
    const delta = y - lastY;
    const scrollingDown = delta > 4;
    const scrollingUp = delta < -4;
    const canHide = isMobile() && y > 96 && !isMenuOpen() && performance.now() > lockedOpenUntil;

    if (!isMobile()) {
      showHeader();
    } else if (y < 32 || scrollingUp || isMenuOpen()) {
      showHeader();
    } else if (canHide && scrollingDown) {
      hideHeader();
    }

    header.classList.toggle('aalto-header-scrolled', y > 30);
    lastY = y;
    ticking = false;
  };

  window.addEventListener('scroll', () => {
    if (ticking) return;
    ticking = true;
    window.requestAnimationFrame(update);
  }, { passive: true });

  window.addEventListener('resize', () => {
    lockedOpenUntil = performance.now() + 400;
    showHeader();
    update();
  }, { passive: true });

  document.addEventListener('click', (event) => {
    const target = event.target as HTMLElement | null;
    if (target?.closest('header')) {
      lockedOpenUntil = performance.now() + 900;
      showHeader();
    }
  }, { passive: true });

  update();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initMobileHeaderController, { once: true });
} else {
  initMobileHeaderController();
}
