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
  return '<div class="brand-marquee-card aalto-local-logo-card" data-logo-index="' + index + '"><img src="' + client.src + '" alt="' + client.name + '" loading="lazy" onerror="this.classList.add(\'aalto-logo-failed\'); this.style.display=\'none\'; this.nextElementSibling.style.display=\'block\';" /><span>' + client.name + '</span></div>';
}

function applyLocalClientLogos() {
  const section = document.querySelector<HTMLElement>('#clientes');
  if (!section) return;
  const track = section.querySelector<HTMLElement>('.overflow-hidden > div');
  if (!track || track.dataset.localLogosApplied === 'true') return;

  track.classList.add('brand-marquee-track');
  const repeated = [...localClientLogos, ...localClientLogos];
  track.innerHTML = repeated.map(buildClientLogoCard).join('');
  track.dataset.localLogosApplied = 'true';
}

function initLocalClientLogos() {
  applyLocalClientLogos();
  window.setTimeout(applyLocalClientLogos, 300);
  window.setTimeout(applyLocalClientLogos, 900);
  window.setTimeout(applyLocalClientLogos, 1600);
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initLocalClientLogos, { once: true });
} else {
  initLocalClientLogos();
}