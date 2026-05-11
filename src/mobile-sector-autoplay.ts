function initMobileSectorAutoplay() {
  const track = document.querySelector<HTMLElement>('.sectores-track');
  if (!track || track.dataset.autoplayReady === 'true') return;
  track.dataset.autoplayReady = 'true';

  let direction = 1;
  let raf = 0;
  let last = performance.now();
  let paused = false;

  const isMobile = () => window.matchMedia('(max-width: 767px)').matches;

  const step = (now: number) => {
    const delta = now - last;
    last = now;

    if (isMobile() && !paused && track.scrollWidth > track.clientWidth) {
      const speed = 0.018;
      track.scrollLeft += direction * delta * speed;

      if (track.scrollLeft + track.clientWidth >= track.scrollWidth - 2) direction = -1;
      if (track.scrollLeft <= 2) direction = 1;
    }

    raf = window.requestAnimationFrame(step);
  };

  const pause = () => { paused = true; };
  const resume = () => { window.setTimeout(() => { paused = false; }, 1800); };

  track.addEventListener('touchstart', pause, { passive: true });
  track.addEventListener('touchend', resume, { passive: true });
  track.addEventListener('pointerenter', pause);
  track.addEventListener('pointerleave', resume);

  raf = window.requestAnimationFrame(step);

  window.addEventListener('beforeunload', () => window.cancelAnimationFrame(raf));
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initMobileSectorAutoplay, { once: true });
} else {
  initMobileSectorAutoplay();
}
