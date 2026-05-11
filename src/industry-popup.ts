const industries = [
  { title: 'Bodegas', description: 'Mantenimiento edilicio, instalaciones, pintura, herrería y soporte técnico para operación diaria.' },
  { title: 'Hotelería', description: 'Intervenciones preventivas y correctivas para espacios de atención, habitaciones y áreas comunes.' },
  { title: 'Salud', description: 'Soporte edilicio para clínicas, consultorios y espacios que requieren continuidad operativa.' },
  { title: 'Industrias', description: 'Mantenimiento general, instalaciones, obra civil y soporte técnico para plantas y naves.' },
  { title: 'Retail & centros comerciales', description: 'Respuesta ágil para locales, superficies comerciales, circulación y espacios de alto tránsito.' },
];

function ensureIndustryPopup() {
  if (document.getElementById('aalto-industries-modal')) return;

  const modal = document.createElement('div');
  modal.id = 'aalto-industries-modal';
  modal.className = 'aalto-industries-modal';
  modal.setAttribute('aria-hidden', 'true');
  modal.innerHTML = `
    <div class="aalto-industries-backdrop" data-close-industries></div>
    <div class="aalto-industries-dialog" role="dialog" aria-modal="true" aria-label="Industrias atendidas">
      <button class="aalto-industries-close" type="button" data-close-industries aria-label="Cerrar">×</button>
      <p class="aalto-industries-kicker">Sectores atendidos</p>
      <h3>Industrias donde AALTO opera</h3>
      <p class="aalto-industries-intro">Soluciones de mantenimiento edilicio y personal externo para empresas que necesitan continuidad, respuesta y orden operativo.</p>
      <div class="aalto-industries-grid">
        ${industries.map((industry) => `
          <article>
            <span>${industry.title}</span>
            <p>${industry.description}</p>
          </article>
        `).join('')}
      </div>
    </div>
  `;

  document.body.appendChild(modal);

  modal.querySelectorAll('[data-close-industries]').forEach((element) => {
    element.addEventListener('click', closeIndustryPopup);
  });

  window.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeIndustryPopup();
  });
}

function openIndustryPopup() {
  ensureIndustryPopup();
  const modal = document.getElementById('aalto-industries-modal');
  if (!modal) return;
  modal.classList.add('is-open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.classList.add('aalto-modal-open');
}

function closeIndustryPopup() {
  const modal = document.getElementById('aalto-industries-modal');
  if (!modal) return;
  modal.classList.remove('is-open');
  modal.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('aalto-modal-open');
}

function addMaintenanceMoreButton() {
  const cards = Array.from(document.querySelectorAll<HTMLElement>('#especialidades .mx-auto.grid.max-w-6xl > div'));
  const maintenanceCard = cards.find((card) => card.textContent?.toLowerCase().includes('mantenimiento edilicio'));
  if (!maintenanceCard || maintenanceCard.querySelector('.aalto-maintenance-more')) return;

  const button = document.createElement('button');
  button.type = 'button';
  button.className = 'aalto-maintenance-more aalto-cta';
  button.textContent = 'Ver más';
  button.addEventListener('click', openIndustryPopup);
  maintenanceCard.appendChild(button);
}

function initIndustryPopup() {
  ensureIndustryPopup();
  addMaintenanceMoreButton();
  window.setTimeout(addMaintenanceMoreButton, 400);
  window.setTimeout(addMaintenanceMoreButton, 1000);
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initIndustryPopup, { once: true });
} else {
  initIndustryPopup();
}
