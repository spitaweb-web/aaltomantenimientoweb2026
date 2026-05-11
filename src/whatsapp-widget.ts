function playToc() {
  try {
    const AudioContextClass = window.AudioContext || (window as typeof window & { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
    if (!AudioContextClass) return;

    const ctx = new AudioContextClass();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(520, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(300, ctx.currentTime + 0.1);

    gain.gain.setValueAtTime(0.0001, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.045, ctx.currentTime + 0.018);
    gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.12);

    osc.connect(gain);
    gain.connect(ctx.destination);
    void ctx.resume();
    osc.start();
    osc.stop(ctx.currentTime + 0.13);
  } catch {
    // Audio no crítico. Algunos navegadores bloquean sonido sin interacción.
  }
}

function initWhatsAppWidget() {
  if (document.getElementById('aalto-whatsapp-widget')) return;

  const phone = '542614715133';
  const primary = encodeURIComponent('Hola, quiero solicitar asesoramiento para mantenimiento edilicio / personal externo.');
  const technical = encodeURIComponent('Hola, quiero enviar un requerimiento técnico para mantenimiento.');
  const whatsAppSvg = `
    <svg viewBox="0 0 32 32" aria-hidden="true" focusable="false">
      <path fill="currentColor" d="M16.03 3.2A12.72 12.72 0 0 0 5.2 22.56L3.8 28.8l6.38-1.55A12.72 12.72 0 1 0 16.03 3.2Zm0 22.98c-2.03 0-3.9-.6-5.48-1.62l-.39-.25-3.78.92.82-3.7-.25-.38A10.23 10.23 0 1 1 16.03 26.18Zm5.85-7.66c-.32-.16-1.9-.94-2.2-1.05-.3-.1-.52-.16-.74.16-.22.32-.84 1.05-1.03 1.27-.19.21-.38.24-.7.08-.32-.16-1.36-.5-2.6-1.6-.96-.86-1.6-1.91-1.8-2.23-.18-.32-.02-.5.14-.65.15-.14.32-.38.48-.57.16-.19.22-.32.32-.54.11-.21.06-.4-.03-.56-.08-.16-.73-1.76-1-2.42-.27-.64-.54-.55-.74-.56h-.63c-.21 0-.56.08-.86.4-.3.32-1.13 1.1-1.13 2.68s1.16 3.11 1.32 3.33c.16.21 2.28 3.48 5.52 4.88.77.33 1.37.53 1.84.68.77.24 1.48.21 2.04.13.62-.09 1.9-.78 2.17-1.53.27-.75.27-1.4.19-1.53-.08-.14-.3-.22-.62-.38Z"/>
    </svg>
  `;

  const widget = document.createElement('div');
  widget.id = 'aalto-whatsapp-widget';
  widget.className = 'aalto-whatsapp-widget';
  widget.innerHTML = `
    <div class="aalto-whatsapp-panel" hidden>
      <div class="aalto-whatsapp-head">
        <small>Canal directo</small>
        <strong>WhatsApp AALTO</strong>
      </div>
      <div class="aalto-whatsapp-links">
        <a href="https://wa.me/${phone}?text=${primary}" target="_blank" rel="noreferrer">Solicitar asesoramiento</a>
        <a href="https://wa.me/${phone}?text=${technical}" target="_blank" rel="noreferrer">Enviar requerimiento técnico</a>
        <a href="tel:+${phone}">Llamar directo</a>
      </div>
    </div>
    <button class="aalto-whatsapp-button" type="button" aria-label="Abrir opciones de WhatsApp">
      <span class="aalto-whatsapp-icon">${whatsAppSvg}</span>
      <span>WhatsApp</span>
    </button>
  `;

  document.body.appendChild(widget);

  const button = widget.querySelector<HTMLButtonElement>('.aalto-whatsapp-button');
  const panel = widget.querySelector<HTMLElement>('.aalto-whatsapp-panel');

  window.setTimeout(() => playToc(), 900);

  button?.addEventListener('click', () => {
    if (!panel) return;
    panel.hidden = !panel.hidden;
    playToc();
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initWhatsAppWidget, { once: true });
} else {
  initWhatsAppWidget();
}
