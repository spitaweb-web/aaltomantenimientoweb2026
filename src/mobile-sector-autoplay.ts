function initMobileSectorAutoplay() {
  const track = document.querySelector<HTMLElement>('.sectores-track');
  if (!track || track.dataset.autoplayReady === 'true') return;
  track.dataset.autoplayReady = 'true';

  let direction = 1;
  let raf = 0;
  let last = performance.now();
  let pausedUntil = 0;
  let userActive = false;

  const isMobile = () => window.matchMedia('(max-width: 767px)').matches;
  const pauseBriefly = (ms = 1800) => { pausedUntil = performance.now() + ms; };

  const step = (now: number) => {
    const delta = now - last;
    last = now;

    if (isMobile() && !userActive && now > pausedUntil && track.scrollWidth > track.clientWidth) {
      const speedPxPerMs = 0.034; // visible, lento y controlable
      track.scrollLeft += direction * delta * speedPxPerMs;

      const maxScroll = track.scrollWidth - track.clientWidth;
      if (track.scrollLeft >= maxScroll - 3) direction = -1;
      if (track.scrollLeft <= 3) direction = 1;
    }

    raf = window.requestAnimationFrame(step);
  };

  track.addEventListener('touchstart', () => {
    userActive = true;
    pauseBriefly(2600);
  }, { passive: true });

  track.addEventListener('touchend', () => {
    userActive = false;
    pauseBriefly(1100);
  }, { passive: true });

  track.addEventListener('pointerdown', () => {
    userActive = true;
    pauseBriefly(2600);
  });

  track.addEventListener('pointerup', () => {
    userActive = false;
    pauseBriefly(1100);
  });

  track.addEventListener('pointercancel', () => {
    userActive = false;
    pauseBriefly(1100);
  });

  track.addEventListener('wheel', () => pauseBriefly(1400), { passive: true });

  raf = window.requestAnimationFrame(step);
  window.addEventListener('beforeunload', () => window.cancelAnimationFrame(raf));
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initMobileSectorAutoplay, { once: true });
} else {
  initMobileSectorAutoplay();
}
