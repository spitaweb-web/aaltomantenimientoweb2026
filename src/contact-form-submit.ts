const FORM_ENDPOINT = 'https://formsubmit.co/aalto.mza@gmail.com';
const SUCCESS_URL = 'https://aaltomantenimiento.com.ar/#contacto';

function ensureHidden(form: HTMLFormElement, name: string, value: string) {
  let input = form.querySelector<HTMLInputElement>(`input[name="${name}"]`);
  if (!input) {
    input = document.createElement('input');
    input.type = 'hidden';
    input.name = name;
    form.appendChild(input);
  }
  input.value = value;
}

function prepareAaltoContactForm() {
  const form = document.querySelector<HTMLFormElement>('#contacto form');
  if (!form || form.dataset.aaltoFormsubmitReady === 'true') return;

  form.dataset.aaltoFormsubmitReady = 'true';
  form.action = FORM_ENDPOINT;
  form.method = 'POST';
  form.enctype = 'multipart/form-data';
  form.setAttribute('accept-charset', 'UTF-8');

  const fields = Array.from(form.querySelectorAll<HTMLInputElement | HTMLTextAreaElement>('input, textarea'));
  const textInputs = fields.filter((field) => field instanceof HTMLInputElement && field.type !== 'file' && field.type !== 'hidden') as HTMLInputElement[];
  const fileInput = fields.find((field) => field instanceof HTMLInputElement && field.type === 'file') as HTMLInputElement | undefined;
  const textarea = form.querySelector<HTMLTextAreaElement>('textarea');

  if (textInputs[0]) {
    textInputs[0].name = 'nombre_y_empresa';
    textInputs[0].required = true;
    textInputs[0].setAttribute('autocomplete', 'name organization');
  }

  if (textInputs[1]) {
    textInputs[1].name = 'telefono_o_email';
    textInputs[1].required = true;
    textInputs[1].setAttribute('autocomplete', 'email tel');
  }

  if (textarea) {
    textarea.name = 'mensaje';
    textarea.required = true;
  }

  if (fileInput) {
    fileInput.name = 'attachment';
  }

  ensureHidden(form, '_subject', 'Nuevo contacto / CV desde la web de AALTO');
  ensureHidden(form, '_template', 'table');
  ensureHidden(form, '_captcha', 'false');
  ensureHidden(form, '_next', SUCCESS_URL);

  form.addEventListener('submit', (event) => {
    if (!form.checkValidity()) return;

    event.preventDefault();
    event.stopPropagation();
    event.stopImmediatePropagation();

    const button = form.querySelector<HTMLButtonElement>('button[type="submit"], button:not([type])');
    if (button) {
      button.disabled = true;
      button.textContent = 'Enviando...';
    }

    ensureHidden(form, '_subject', 'Nuevo contacto / CV desde la web de AALTO');
    ensureHidden(form, '_template', 'table');
    ensureHidden(form, '_captcha', 'false');
    ensureHidden(form, '_next', SUCCESS_URL);

    window.HTMLFormElement.prototype.submit.call(form);
  }, true);
}

function initAaltoFormSubmit() {
  prepareAaltoContactForm();
  window.setTimeout(prepareAaltoContactForm, 300);
  window.setTimeout(prepareAaltoContactForm, 900);

  const observer = new MutationObserver(() => prepareAaltoContactForm());
  observer.observe(document.body, { childList: true, subtree: true });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initAaltoFormSubmit, { once: true });
} else {
  initAaltoFormSubmit();
}
