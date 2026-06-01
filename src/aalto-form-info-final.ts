const AALTO_FORM_TARGET = 'https://formsubmit.co/info@aaltomantenimiento.com.ar';

function patchAaltoContactForm() {
  if (typeof document === 'undefined') return;

  const forms = Array.from(document.querySelectorAll('form'));

  forms.forEach((form) => {
    const action = form.getAttribute('action') ?? '';
    const isContactForm = action.includes('formsubmit.co') || form.closest('#contacto');

    if (!isContactForm) return;

    form.setAttribute('action', AALTO_FORM_TARGET);
    form.setAttribute('method', 'POST');
    form.setAttribute('enctype', 'multipart/form-data');

    const nextInput = form.querySelector<HTMLInputElement>('input[name="_next"]');
    if (nextInput) nextInput.value = 'https://aaltomantenimiento.com.ar/#contacto';

    const subjectInput = form.querySelector<HTMLInputElement>('input[name="_subject"]');
    if (subjectInput) subjectInput.value = 'Nuevo contacto / CV desde la web de AALTO';
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

  const observer = new MutationObserver(() => patchAaltoContactForm());
  observer.observe(document.documentElement, { childList: true, subtree: true });
}

export {};
