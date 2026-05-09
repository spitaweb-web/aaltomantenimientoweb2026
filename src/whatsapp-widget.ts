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
      <span class="aalto-whatsapp-icon">☏</span>
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
