const contactEmail = 'info@aaltomantenimiento.com.ar';
const whatsappPhone = '542614715133';
const whatsappMessage = encodeURIComponent('Hola, quiero solicitar asesoramiento para mantenimiento edilicio.');
const realLogoPath = '/aalto-logo.png';

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

function createLogoSvg() {
  const ns = 'http://www.w3.org/2000/svg';
  const svg = document.createElementNS(ns, 'svg');
  svg.setAttribute('viewBox', '0 0 92 58');
  svg.setAttribute('aria-hidden', 'true');

  const outer = document.createElementNS(ns, 'path');
  outer.setAttribute('d', 'M29 6 6 52h13L34 21l10 18 10-10L42 6H29Z');
  outer.setAttribute('fill', '#1a365d');

  const inner = document.createElementNS(ns, 'path');
  inner.setAttribute('d', 'M42 6 54 29l10-10 22 33H72L55 28 44 47 33 36 42 6Z');
  inner.setAttribute('fill', '#4299e1');

  svg.append(outer, inner);
  return svg;
}

function mountFallbackLogo(target: HTMLElement) {
  target.innerHTML = '';
  const svg = createLogoSvg();
  const text = document.createElement('div');
  text.className = 'aalto-real-logo-text';
  text.innerHTML = '<strong>aalto</strong><span>MANTENIMIENTO</span>';
  target.append(svg, text);
}

function mountImageLogo(target: HTMLElement) {
  target.innerHTML = '';
  target.classList.add('aalto-real-logo-image-mode');
  const img = document.createElement('img');
  img.src = realLogoPath;
  img.alt = 'AALTO Mantenimiento';
  img.className = 'aalto-real-logo-img';
  img.onerror = () => {
    target.classList.remove('aalto-real-logo-image-mode');
    mountFallbackLogo(target);
  };
  target.appendChild(img);
}

function replaceAaltoLogo() {
  const targets = [
    document.querySelector<HTMLElement>('header button:first-child .inline-flex'),
    document.querySelector<HTMLElement>('footer .inline-flex'),
  ].filter(Boolean) as HTMLElement[];

  targets.forEach((target) => {
    if (target.dataset.realLogoReady === 'true') return;
    target.dataset.realLogoReady = 'true';
    target.classList.add('aalto-real-logo');
    mountImageLogo(target);
  });
}

function setupFormSubmit() {
  const form = document.querySelector<HTMLFormElement>('#contacto form');
  if (!form || form.dataset.submitReady === 'true') return;
  form.dataset.submitReady = 'true';

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

  let status = form.querySelector<HTMLElement>('.aalto-form-status');
  if (!status) {
    status = document.createElement('p');
    status.className = 'aalto-form-status';
    form.appendChild(status);
  }

  const button = form.querySelector<HTMLButtonElement>('button[type="submit"], button');
  const defaultButtonText = button?.textContent || 'Enviar consulta';

  form.addEventListener('submit', async (event) => {
    event.preventDefault();

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const formData = new FormData(form);
    formData.append('_subject', 'Nueva consulta desde AALTO Mantenimiento');
    formData.append('_captcha', 'false');
    formData.append('_template', 'table');

    if (button) {
      button.disabled = true;
      button.textContent = 'Enviando...';
    }
    status!.textContent = 'Enviando consulta...';
    status!.className = 'aalto-form-status is-sending';

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${contactEmail}`, {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' },
      });

      if (!response.ok) throw new Error('No se pudo enviar');

      form.reset();
      status!.textContent = 'Consulta enviada. Te vamos a responder a la brevedad.';
      status!.className = 'aalto-form-status is-success';

      window.setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 900);
    } catch {
      status!.textContent = 'No se pudo enviar desde la web. Probá por WhatsApp o por email directo.';
      status!.className = 'aalto-form-status is-error';
    } finally {
      if (button) {
        button.disabled = false;
        button.textContent = defaultButtonText;
      }
    }
  });
}

function initFinalBehavior() {
  replaceAaltoLogo();
  setRefrigerationImage();
  simplifyWhatsapp();
  setupFormSubmit();
  window.setTimeout(replaceAaltoLogo, 350);
  window.setTimeout(setRefrigerationImage, 500);
  window.setTimeout(simplifyWhatsapp, 600);
  window.setTimeout(setupFormSubmit, 700);
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initFinalBehavior, { once: true });
} else {
  initFinalBehavior();
}
