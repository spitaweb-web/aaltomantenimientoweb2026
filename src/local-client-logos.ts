const localClientLogos = [
  { name: 'Luigi Bosca', src: '/Logo-Luigi-Bosca-Baja.jpg' },
  { name: 'Renacer', src: '/bodega_renacer.png' },
  { name: 'Norton', src: '/norton1.jpg' },
  { name: 'Salentein', src: '/R.png' },
  { name: 'Servicio Meteorológico Nacional', src: '/smn.png' },
  { name: 'Talca', src: '/talca.png' },
  { name: 'Unilever', src: '/unilever.png' },
  { name: 'Yaguar', src: '/yaguar.png' },
];

function buildClientLogoCard(client: { name: string; src: string }, index: number) {
  return `
    <div class="brand-marquee-card aalto-local-logo-card flex h-24 w-56 shrink-0 items-center justify-center border bg-white px-6 text-center text-xs font-black uppercase tracking-widest text-slate-500 shadow-sm" data-logo-index="${index}">
      <img src="${client.src}" alt="${client.name}" loading="lazy" />
      <span class="hidden">${client.name}</span>
    </div>
  `;
}

function applyLocalClientLogos() {
  const track = document.querySelector<HTMLElement>('#clientes .brand-marquee-track');
  if (!track || track.dataset.localLogosApplied === 'true') return;

  const doubled = [...localClientLogos, ...localClientLogos, ...localClientLogos];
  track.innerHTML = doubled.map(buildClientLogoCard).join('');
  track.dataset.localLogosApplied = 'true';
}

function initLocalClientLogos() {
  applyLocalClientLogos();

  const observer = new MutationObserver(() => applyLocalClientLogos());
  observer.observe(document.body, { childList: true, subtree: true });

  window.setTimeout(applyLocalClientLogos, 300);
  window.setTimeout(applyLocalClientLogos, 900);
  window.setTimeout(applyLocalClientLogos, 1600);
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initLocalClientLogos, { once: true });
} else {
  initLocalClientLogos();
}
