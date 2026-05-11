const contactEmail = 'info@aaltomantenimiento.com.ar';
const whatsappPhone = '542614715133';
const whatsappMessage = encodeURIComponent('Hola, quiero solicitar asesoramiento para mantenimiento edilicio.');

function setRefrigerationImage() {
  const rows = Array.from(document.querySelectorAll<HTMLElement>('article.service-row'));
  const refrigeration = rows.find((row) => row.textContent?.toLowerCase().includes('refrigeración'));
  const img = refrigeration?.querySelector<HTMLImageElement>('img');
  if (!img) return;
  img.src = '/refrigeracion-industrial.svg';
  img.alt = 'Sistema industrial de refrigeración';
  img.onerror = null;
}

function simplifyWhatsapp() {
  const widget = document.getElementById('aalto-whatsapp-widget');
  if (!widget || widget.dataset.singleActionReady === 'true') return;
  widget.dataset.singleActionReady = 'true';

  const panel = widget.querySelector<HTMLElement>('.aalto-whatsapp-panel');
  if (panel) panel.remove();

  const button = widget.querySelector<HTMLButtonElement>('.aalto-whatsapp-button');
  if (!button) return;
  const svg = button.querySelector('.aalto-whatsapp-icon')?.outerHTML || 'WhatsApp';
  button.innerHTML = `${svg}<span>WhatsApp</span>`;
  button.onclick = () => {
    window.open(`https://wa.me/${whatsappPhone}?text=${whatsappMessage}`, '_blank', 'noopener,noreferrer');
  };
}

function setupFormSubmit() {
  const form = document.querySelector<HTMLFormElement>('#contacto form');
  if (!form || form.dataset.submitReady === 'true') return;
  form.dataset.submitReady = 'true';
  form.action = `https://formsubmit.co/${contactEmail}`;
  form.method = 'POST';

  const fields = form.querySelectorAll<HTMLInputElement | HTMLTextAreaElement>('input, textarea');
  const [name, contact, message] = Array.from(fields);

  if (name) {
    name.name = 'nombre_empresa';
    name.required = true;
    name.minLength = 2;
  }
  if (contact) {
    contact.name = 'telefono_email';
    contact.required = true;
    contact.minLength = 5;
  }
  if (message) {
    message.name = 'mensaje';
    message.required = true;
    message.minLength = 10;
  }

  const hiddenFields: Array<[string, string]> = [
    ['_subject', 'Nueva consulta desde AALTO Mantenimiento'],
    ['_captcha', 'false'],
    ['_template', 'table'],
  ];

  hiddenFields.forEach(([nameAttr, value]) => {
    if (form.querySelector(`input[name="${nameAttr}"]`)) return;
    const input = document.createElement('input');
    input.type = 'hidden';
    input.name = nameAttr;
    input.value = value;
    form.appendChild(input);
  });

  form.addEventListener('submit', (event) => {
    if (!form.checkValidity()) {
      event.preventDefault();
      form.reportValidity();
      return;
    }
  });
}

function initFinalBehavior() {
  setRefrigerationImage();
  simplifyWhatsapp();
  setupFormSubmit();
  window.setTimeout(setRefrigerationImage, 500);
  window.setTimeout(simplifyWhatsapp, 600);
  window.setTimeout(setupFormSubmit, 700);
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initFinalBehavior, { once: true });
} else {
  initFinalBehavior();
}
