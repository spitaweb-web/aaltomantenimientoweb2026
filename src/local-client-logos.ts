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

function createClientLogoCard(client: { name: string; src: string }, index: number) {
  const card = document.createElement('div');
  card.className = 'brand-marquee-card aalto-local-logo-card';
  card.dataset.logoIndex = String(index);

  const img = document.createElement('img');
  img.src = client.src;
  img.alt = client.name;
  img.loading = 'eager';
  img.decoding = 'async';

  const fallback = document.createElement('span');
  fallback.textContent = client.name;
  fallback.style.display = 'none';

  img.addEventListener('error', () => {
    img.classList.add('aalto-logo-failed');
    img.style.display = 'none';
    fallback.style.display = 'flex';
  });

  card.appendChild(img);
  card.appendChild(fallback);
  return card;
}

function applyLocalClientLogos() {
  const section = document.querySelector<HTMLElement>('#clientes');
  if (!section) return;

  const track = section.querySelector<HTMLElement>('.overflow-hidden > div');
  if (!track) return;

  const orderKey = localClientLogos.map((logo) => logo.name).join('|');
  if (track.dataset.logoOrder === orderKey) return;

  track.classList.add('brand-marquee-track');
  track.textContent = '';

  [...localClientLogos, ...localClientLogos].forEach((client, index) => {
    track.appendChild(createClientLogoCard(client, index));
  });

  track.dataset.localLogosApplied = 'true';
  track.dataset.logoOrder = orderKey;
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
