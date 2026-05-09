const logoMap: Record<string, { src: string; alt: string }> = {
  'Salentein': { src: 'https://logo.clearbit.com/bodegassalentein.com', alt: 'Salentein' },
  'Rosell Boher': { src: 'https://logo.clearbit.com/rosellboher.com', alt: 'Rosell Boher' },
  'Trivento': { src: 'https://logo.clearbit.com/trivento.com', alt: 'Trivento' },
  'Talca': { src: 'https://logo.clearbit.com/talca.com.ar', alt: 'Talca' },
  'Yaguar': { src: 'https://logo.clearbit.com/yaguar.com.ar', alt: 'Yaguar' },
  'Chandon': { src: 'https://logo.clearbit.com/chandon.com', alt: 'Chandon' },
  'Norton': { src: 'https://logo.clearbit.com/bodeganorton.com', alt: 'Norton' },
  'SMN Argentina': { src: 'https://logo.clearbit.com/smn.gob.ar', alt: 'SMN Argentina' },
  'Renacer': { src: 'https://logo.clearbit.com/bodegarenacer.com.ar', alt: 'Renacer' },
  'Luigi Bosca': { src: 'https://logo.clearbit.com/luigibosca.com', alt: 'Luigi Bosca' },
  'Halliburton': { src: 'https://logo.clearbit.com/halliburton.com', alt: 'Halliburton' },
  'Park Hyatt': { src: 'https://logo.clearbit.com/hyatt.com', alt: 'Park Hyatt' },
  'Neverland': { src: 'https://logo.clearbit.com/neverland.com.ar', alt: 'Neverland' },
  'Coca-Cola': { src: 'https://logo.clearbit.com/coca-cola.com', alt: 'Coca-Cola' },
  'Unilever': { src: 'https://logo.clearbit.com/unilever.com', alt: 'Unilever' },
};

function normalize(text: string) {
  return text.replace(/\s+/g, ' ').trim();
}

function applyBrandLogos() {
  const cards = document.querySelectorAll<HTMLElement>('.brand-marquee-card');

  cards.forEach((card) => {
    if (card.dataset.logoReady === 'true') return;

    const label = normalize(card.textContent || '');
    const logo = logoMap[label];
    if (!logo) return;

    card.dataset.logoReady = 'true';
    card.setAttribute('aria-label', logo.alt);
    card.innerHTML = '';

    const img = document.createElement('img');
    img.src = logo.src;
    img.alt = logo.alt;
    img.loading = 'lazy';
    img.decoding = 'async';
    img.className = 'aalto-brand-logo';

    const fallback = document.createElement('span');
    fallback.className = 'aalto-brand-fallback';
    fallback.textContent = logo.alt;
    fallback.hidden = true;

    img.onerror = () => {
      img.remove();
      fallback.hidden = false;
    };

    card.appendChild(img);
    card.appendChild(fallback);
  });
}

function initBrandLogos() {
  applyBrandLogos();
  window.setTimeout(applyBrandLogos, 250);
  window.setTimeout(applyBrandLogos, 900);

  const observer = new MutationObserver(() => applyBrandLogos());
  observer.observe(document.body, { childList: true, subtree: true });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initBrandLogos, { once: true });
} else {
  initBrandLogos();
}
