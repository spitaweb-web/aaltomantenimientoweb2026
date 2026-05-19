function initMobileHeaderController() {
  const header = document.querySelector<HTMLElement>('header');
  if (!header || header.dataset.mobileHeaderController === 'true') return;

  header.dataset.mobileHeaderController = 'true';
  header.style.transition = 'transform 360ms cubic-bezier(.16,1,.3,1), height 260ms cubic-bezier(.16,1,.3,1), box-shadow 260ms ease, background-color 260ms ease, backdrop-filter 260ms ease';
  header.style.willChange = 'transform, height, background-color';

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
    const scrolled = y > 24;
    const canHideMobile = isMobile() && y > 118 && !isMenuOpen() && performance.now() > lockedOpenUntil;

    header.classList.toggle('aalto-header-scrolled', scrolled);

    if (scrolled) {
      header.style.backgroundColor = 'rgba(255,255,255,0.94)';
      header.style.backdropFilter = 'blur(14px)';
      header.style.boxShadow = '0 18px 48px rgba(15,23,42,0.10)';
    } else {
      header.style.backgroundColor = 'rgba(255,255,255,1)';
      header.style.backdropFilter = 'blur(0px)';
      header.style.boxShadow = '0 1px 10px rgba(15,23,42,0.06)';
    }

    if (!isMobile()) {
      showHeader();
    } else if (y < 32 || scrollingUp || isMenuOpen()) {
      showHeader();
    } else if (canHideMobile && scrollingDown) {
      hideHeader();
    }

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