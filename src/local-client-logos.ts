const localClientLogos = [
  { name: 'Coca Cola', src: 'https://logo.clearbit.com/coca-cola.com' },
  { name: 'Halliburton', src: 'https://logo.clearbit.com/halliburton.com' },
  { name: 'Unilever', src: '/unilever.png' },
  { name: 'Hotel Park Hyatt Mendoza', src: 'https://logo.clearbit.com/hyatt.com' },
  { name: 'Bodega Salentein', src: '/R.png' },
  { name: 'Hotel Rosell Boher Lodge', src: 'https://logo.clearbit.com/rosellboher.com' },
  { name: 'Bodega Cheval des Andes', src: 'https://logo.clearbit.com/chevaldesandes.com' },
  { name: 'Supermercado Mayorista Yaguar', src: '/yaguar.png' },
  { name: 'Bodega Chandon', src: 'https://logo.clearbit.com/chandon.com' },
  { name: 'Neverland', src: 'https://logo.clearbit.com/neverland.com.ar' },
  { name: 'Levis', src: 'https://logo.clearbit.com/levi.com' },
  { name: 'Bodega Fecovita', src: 'https://logo.clearbit.com/fecovita.com' },
  { name: 'Bodega Luigi Bosca', src: '/Logo-Luigi-Bosca-Baja.jpg' },
  { name: 'Bodega Renacer', src: '/bodega_renacer.png' },
  { name: 'Famiq', src: 'https://logo.clearbit.com/famiq.com.ar' },
];

function buildClientLogoCard(client: { name: string; src: string }, index: number) {
  return '<div class="brand-marquee-card aalto-local-logo-card" data-logo-index="' + index + '"><img src="' + client.src + '" alt="' + client.name + '" loading="eager" onerror="this.classList.add(\'aalto-logo-failed\'); this.style.display=\'none\'; if(this.nextElementSibling){this.nextElementSibling.style.display=\'flex\';}" /><span>' + client.name + '</span></div>';
}

function applyLocalClientLogos() {
  const section = document.querySelector<HTMLElement>('#clientes');
  if (!section) return;
  const track = section.querySelector<HTMLElement>('.overflow-hidden > div');
  if (!track) return;

  track.classList.add('brand-marquee-track');
  const repeated = [...localClientLogos, ...localClientLogos];
  const nextMarkup = repeated.map(buildClientLogoCard).join('');

  if (track.dataset.logoOrder === 'matias-final' && track.innerHTML === nextMarkup) return;

  track.innerHTML = nextMarkup;
  track.dataset.localLogosApplied = 'true';
  track.dataset.logoOrder = 'matias-final';
}

function initLocalClientLogos() {
  applyLocalClientLogos();
  window.setTimeout(applyLocalClientLogos, 250);
  window.setTimeout(applyLocalClientLogos, 750);
  window.setTimeout(applyLocalClientLogos, 1500);
  window.setTimeout(applyLocalClientLogos, 2600);

  const observer = new MutationObserver(() => applyLocalClientLogos());
  observer.observe(document.body, { childList: true, subtree: true });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initLocalClientLogos, { once: true });
} else {
  initLocalClientLogos();
}