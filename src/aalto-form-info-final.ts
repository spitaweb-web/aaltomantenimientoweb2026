const AALTO_FORM_TARGET = 'https://formsubmit.co/info@aaltomantenimiento.com.ar';
const DEFAULT_FILE_LABEL = 'Adjuntar archivo / CV';

function ensureHidden(form: HTMLFormElement, name: string, value: string) {
  let input = form.querySelector<HTMLInputElement>(`input[name="${name}"]`);

  if (!input) {
    input = document.createElement('input');
    input.type = 'hidden';
    input.name = name;
    form.prepend(input);
  }

  input.value = value;
}

function normalizeFileInput(form: HTMLFormElement) {
  const fileInput = form.querySelector<HTMLInputElement>('input[type="file"]');
  if (!fileInput) return;

  fileInput.name = 'attachment';
  fileInput.setAttribute('accept', '.pdf,.doc,.docx,.jpg,.jpeg,.png');

  const label = fileInput.closest('label');
  if (!label) return;

  label.setAttribute('data-file-ready', fileInput.files?.length ? 'true' : 'false');

  const existing = label.querySelector<HTMLElement>('[data-aalto-file-name]');
  const fileName = fileInput.files?.[0]?.name;

  if (fileName) {
    if (existing) {
      existing.textContent = fileName;
    } else {
      const span = document.createElement('span');
      span.setAttribute('data-aalto-file-name', 'true');
      span.textContent = fileName;
      span.style.display = 'block';
      span.style.maxWidth = '100%';
      span.style.overflow = 'hidden';
      span.style.textOverflow = 'ellipsis';
      span.style.whiteSpace = 'nowrap';
      label.appendChild(span);
    }
  } else if (existing) {
    existing.remove();
  }

  if (!fileInput.dataset.aaltoFileListener) {
    fileInput.dataset.aaltoFileListener = 'true';
    fileInput.addEventListener('change', () => normalizeFileInput(form));
  }
}

function patchAaltoContactForm() {
  if (typeof document === 'undefined') return;

  const forms = Array.from(document.querySelectorAll<HTMLFormElement>('form'));

  forms.forEach((form) => {
    const action = form.getAttribute('action') ?? '';
    const isContactForm = action.includes('formsubmit.co') || Boolean(form.closest('#contacto'));

    if (!isContactForm) return;

    form.setAttribute('action', AALTO_FORM_TARGET);
    form.setAttribute('method', 'POST');
    form.setAttribute('enctype', 'multipart/form-data');
    form.setAttribute('accept-charset', 'UTF-8');

    ensureHidden(form, '_subject', 'Nuevo contacto / CV desde la web de AALTO');
    ensureHidden(form, '_template', 'table');
    ensureHidden(form, '_captcha', 'false');
    ensureHidden(form, '_next', 'https://aaltomantenimiento.com.ar/#contacto');

    normalizeFileInput(form);
  });
}

if (typeof window !== 'undefined') {
  patchAaltoContactForm();
  window.addEventListener('DOMContentLoaded', patchAaltoContactForm);
  window.addEventListener('load', patchAaltoContactForm);

  window.setTimeout(patchAaltoContactForm, 0);
  window.setTimeout(patchAaltoContactForm, 400);
  window.setTimeout(patchAaltoContactForm, 1200);

  document.addEventListener(
    'submit',
    () => {
      patchAaltoContactForm();
    },
    true,
  );

  document.addEventListener(
    'change',
    (event) => {
      const target = event.target;
      if (!(target instanceof HTMLInputElement) || target.type !== 'file') return;
      const form = target.closest('form');
      if (form) normalizeFileInput(form);
    },
    true,
  );

  const observer = new MutationObserver(() => patchAaltoContactForm());
  observer.observe(document.documentElement, { childList: true, subtree: true });
}

export {};
