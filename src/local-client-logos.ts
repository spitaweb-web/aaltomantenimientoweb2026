const localClientLogos = [
  { name: 'Luigi Bosca', src: '/Logo-Luigi-Bosca-Baja.jpg' },
  { name: 'Renacer', src: '/bodega_renacer.png' },
  { name: 'Norton', src: '/norton1.jpg' },
  { name: 'Salentein', src: '/R.png' },
  { name: 'Servicio Meteorologico Nacional', src: '/smn.png' },
  { name: 'Talca', src: '/talca.png' },
  { name: 'Unilever', src: '/unilever.png' },
  { name: 'Yaguar', src: '/yaguar.png' },
];

function buildClientLogoCard(client: { name: string; src: string }, index: number) {
  return '<div class="brand-marquee-card aalto-local-logo-card" data-logo-index="' + index + '"><img src="' + client.src + '" alt="' + client.name + '" loading="lazy" /><span>' + client.name + '</span></div>';
}

function applyLocalClientLogos() {
  const section = document.querySelector<HTMLElement>('#clientes');
  if (!section) return;
  const track = section.querySelector<HTMLElement>('.overflow-hidden > div');
  if (!track || track.dataset.localLogosApplied === 'true') return;
  track.classList.add('brand-marquee-track');
  const doubled = [...localClientLogos, ...localClientLogos, ...localClientLogos];
  track.innerHTML = doubled.map(buildClientLogoCard).join('');
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