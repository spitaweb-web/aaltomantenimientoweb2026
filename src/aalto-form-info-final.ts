const AALTO_FORM_TARGET = 'https://formsubmit.co/info@aaltomantenimiento.com.ar';
const MAX_ATTACHMENTS = 3;

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

function applyFileLimit(fileInput: HTMLInputElement) {
  const files = Array.from(fileInput.files ?? []);

  if (files.length <= MAX_ATTACHMENTS) return files;

  const selected = files.slice(0, MAX_ATTACHMENTS);

  try {
    const transfer = new DataTransfer();
    selected.forEach((file) => transfer.items.add(file));
    fileInput.files = transfer.files;
  } catch {
    fileInput.value = '';
    return [];
  }

  window.alert(`Podés adjuntar hasta ${MAX_ATTACHMENTS} archivos. Se conservaron los primeros ${MAX_ATTACHMENTS}.`);
  return selected;
}

function setLabelBase(label: HTMLLabelElement) {
  if (label.dataset.aaltoBaseReady) return;

  label.dataset.aaltoBaseReady = 'true';
  label.style.flexDirection = 'column';
  label.style.alignItems = 'center';
  label.style.justifyContent = 'center';
  label.style.gap = '8px';
  label.style.textAlign = 'center';
}

function renderAttachmentNotice(label: HTMLLabelElement, fileInput: HTMLInputElement, files: File[]) {
  let notice = label.querySelector<HTMLElement>('[data-aalto-file-notice]');

  if (!notice) {
    notice = document.createElement('div');
    notice.setAttribute('data-aalto-file-notice', 'true');
    notice.style.width = '100%';
    notice.style.maxWidth = '100%';
    notice.style.borderRadius = '10px';
    notice.style.padding = '9px 12px';
    notice.style.fontSize = '12px';
    notice.style.fontWeight = '800';
    notice.style.lineHeight = '1.25';
    notice.style.letterSpacing = '-0.01em';
    notice.style.overflow = 'hidden';
    notice.style.textOverflow = 'ellipsis';
    label.appendChild(notice);
  }

  if (!files.length) {
    label.setAttribute('data-file-ready', 'false');
    notice.textContent = `Sin archivos seleccionados. Máximo ${MAX_ATTACHMENTS} archivos.`;
    notice.style.background = '#f8fafc';
    notice.style.color = '#64748b';
    notice.style.border = '1px solid #e2e8f0';
    return;
  }

  const names = files.map((file) => file.name).join(' · ');
  const plural = files.length === 1 ? 'archivo adjuntado' : 'archivos adjuntados';

  label.setAttribute('data-file-ready', 'true');
  notice.textContent = `✓ ${files.length} ${plural}: ${names}`;
  notice.title = names;
  notice.style.background = '#ecfdf5';
  notice.style.color = '#047857';
  notice.style.border = '1px solid #a7f3d0';

  fileInput.setAttribute('aria-label', `${files.length} ${plural}: ${names}`);
}

function normalizeFileInput(form: HTMLFormElement) {
  const fileInput = form.querySelector<HTMLInputElement>('input[type="file"]');
  if (!fileInput) return;

  fileInput.name = 'attachment';
  fileInput.multiple = true;
  fileInput.setAttribute('multiple', 'multiple');
  fileInput.setAttribute('accept', '.pdf,.doc,.docx,.jpg,.jpeg,.png');

  const label = fileInput.closest('label');
  if (!label) return;

  setLabelBase(label);

  const files = applyFileLimit(fileInput);
  renderAttachmentNotice(label, fileInput, files);

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
