import { useEffect, useState } from 'react';
import { Building2, CheckCircle2, Hammer, Mail, Menu, Paintbrush, Phone, Snowflake, Users, Wrench, X, Zap } from 'lucide-react';

const azul = '#1a365d';
const celeste = '#4299e1';

const nav = [
  ['Quiénes somos', 'quienes-somos'],
  ['Especialidades', 'especialidades'],
  ['Outsourcing', 'outsourcing'],
  ['Clientes', 'clientes'],
  ['Contacto', 'contacto'],
];

const rubros = [
  ['Obra civil', Building2, ['Albañilería General.', 'Construcción en Seco.', 'Pavimentos y pisos.', 'Revestimientos y acabados.']],
  ['Pintura', Paintbrush, ['Pintura Civil de Medianas y Grandes Superficies.', 'Revestimientos Plásticos y Texturados.', 'Epoxis y Poliuretánicos.', 'Señalizaciones.']],
  ['Herrería', Hammer, ['Estructuras Metálicas a Medida.', 'Acero Inoxidable.', 'Soldaduras especializadas.', 'Rejas, puertas y portones.']],
  ['Instalaciones', Zap, ['Electricidad de media y baja tensión.', 'Montaje y mantenimiento de tableros.', 'Sistemas y medición de puesta a tierra.', 'Plomería general.']],
  ['Carpintería', Wrench, ['Fabricación y restauración de aberturas y mobiliario.', 'Construcción y mantenimiento de pérgolas y decks.']],
  ['Refrigeración', Snowflake, ['Instalación y mantenimiento de aire acondicionado.', 'Refrigeración central, roof-top, inverter, piso techo.', 'Mantenimiento de sistemas frigoríficos.']],
] as const;

const valores = [
  ['Compromiso', 'Cumplimos con lo que prometemos priorizando la satisfacción de nuestros clientes en cada proyecto.'],
  ['Calidad', 'Aplicamos altos estándares en cada servicio asegurando resultados que perduren en el tiempo.'],
  ['Innovación', 'Buscamos constantemente nuevas soluciones para anticiparnos a las necesidades de nuestros clientes.'],
  ['Cercanía', 'Mantenemos una comunicación constante y personalizada para responder ágilmente a las necesidades particulares de nuestros clientes.'],
  ['Eficiencia', 'Gestionamos recursos de manera inteligente para entregar soluciones efectivas y oportunas.'],
];

const clientes = ['Salentein', 'Rosell Boher', 'Trivento', 'Talca', 'Yaguar', 'Chandon', 'Norton', 'SMN Argentina', 'Renacer', 'Luigi Bosca', 'Halliburton', 'Park Hyatt', 'Neverland', 'Coca-Cola', 'Unilever'];

function go(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
}

function Logo({ whiteBox = false }: { whiteBox?: boolean }) {
  return (
    <div className={`inline-flex items-center gap-3 ${whiteBox ? 'bg-white px-4 py-3 shadow-xl' : ''}`}>
      <svg viewBox="0 0 100 70" className="h-11 w-16" aria-hidden="true">
        <path d="M35 5 L5 65 L22 65 L44 20 L55 45 L65 35 L50 5 Z" fill={azul} />
        <path d="M50 5 L65 35 L75 25 L95 65 L78 65 L65 40 L55 60 L45 50 L50 5 Z" fill={celeste} />
      </svg>
      <div className="leading-none">
        <div className="text-3xl font-black tracking-[-0.08em] text-slate-950">aalto</div>
        <div className="mt-1 text-[8px] font-black uppercase tracking-[0.42em] text-slate-500">Mantenimiento</div>
      </div>
    </div>
  );
}

function Kicker({ children }: { children: string }) {
  return <span className="mb-5 block text-[10px] font-black uppercase tracking-[0.42em] text-[#3b82f6]">{children}</span>;
}

export default function App() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <main className="min-h-screen bg-white text-slate-900 scroll-smooth selection:bg-blue-100">
      <nav className={`fixed left-0 right-0 top-0 z-50 transition-all ${scrolled ? 'bg-white/95 py-3 shadow-sm backdrop-blur' : 'bg-transparent py-6'}`}>
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 lg:px-10">
          <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="text-left"><Logo whiteBox={!scrolled} /></button>
          <div className="hidden items-center gap-8 lg:flex">
            {nav.map(([label, id]) => <button key={id} onClick={() => go(id)} className={`text-[11px] font-black uppercase tracking-[0.24em] ${scrolled ? 'text-[#1a365d]' : 'text-white'}`}>{label}</button>)}
            <button onClick={() => go('contacto')} className="bg-white px-7 py-3 text-[11px] font-black uppercase tracking-[0.24em] text-[#1a365d]">Contacto</button>
          </div>
          <button onClick={() => setOpen(true)} className={`lg:hidden ${scrolled ? 'text-[#1a365d]' : 'text-white'}`}><Menu /></button>
        </div>
      </nav>

      {open && <div className="fixed inset-0 z-[60] bg-white p-8 lg:hidden">
        <div className="mb-10 flex items-center justify-between"><Logo /><button onClick={() => setOpen(false)}><X size={32} /></button></div>
        <div className="flex flex-col gap-7">{nav.map(([label, id]) => <button key={id} onClick={() => { setOpen(false); go(id); }} className="border-b pb-4 text-left text-lg font-black uppercase tracking-[0.18em] text-[#1a365d]">{label}</button>)}</div>
      </div>}

      <section className="relative flex min-h-screen items-center overflow-hidden bg-[#0a192f] py-28">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a192f] via-[#0a192f]/90 to-[#0a192f]/40" />
        <img src="https://images.unsplash.com/photo-1581092160607-ee22731c9c0f?auto=format&fit=crop&q=80&w=2000" alt="Mantenimiento edilicio profesional" className="absolute inset-0 h-full w-full object-cover grayscale opacity-45 mix-blend-luminosity" />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 lg:px-10">
          <p className="mb-7 inline-flex border border-white/20 bg-white/10 px-4 py-2 text-[10px] font-black uppercase tracking-[0.35em] text-white/80">Mantenimiento edilicio integral</p>
          <h1 className="max-w-5xl text-4xl font-black uppercase leading-[0.96] tracking-[-0.07em] text-white sm:text-6xl md:text-7xl lg:text-8xl">Tus instalaciones en <span className="text-[#3b82f6]">buenas manos</span></h1>
          <p className="mt-9 max-w-3xl text-lg font-light leading-relaxed text-white/75 sm:text-xl md:text-2xl">Desde una obra puntual hasta el mantenimiento diario. Siempre con la misma dedicación y compromiso.</p>
          <div className="mt-12 flex flex-col gap-4 sm:flex-row"><button onClick={() => go('especialidades')} className="bg-[#3b82f6] px-10 py-5 text-[11px] font-black uppercase tracking-[0.28em] text-white">Ver especialidades</button><button onClick={() => go('contacto')} className="border border-white/30 px-10 py-5 text-[11px] font-black uppercase tracking-[0.28em] text-white">Contacto directo</button></div>
        </div>
      </section>

      <section className="bg-[#1a365d] py-11 text-white"><div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 md:grid-cols-4 lg:px-10">{['Bodegas', 'Hoteles', 'Industrias', 'Centros comerciales'].map(s => <div key={s} className="border-l border-white/15 pl-5"><p className="text-[9px] font-black uppercase tracking-[0.34em] text-white/40">Sector</p><p className="mt-2 text-sm font-black uppercase tracking-widest">{s}</p></div>)}</div></section>

      <section id="quienes-somos" className="bg-white py-24 sm:py-32 lg:py-40"><div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-2 lg:gap-20 lg:px-10"><div><Kicker>Trayectoria institucional</Kicker><h2 className="text-4xl font-black uppercase leading-none tracking-[-0.06em] text-[#1a365d] sm:text-5xl lg:text-7xl">Quiénes somos</h2><div className="mt-10 space-y-7 text-lg font-light leading-relaxed text-slate-600"><p><strong className="font-black text-slate-900">AALTO MANTENIMIENTO</strong> surge en el año 2020 como respuesta a la creciente demanda de soluciones integrales de mantenimiento edilicio en empresas B2B de sectores como bodegas, hoteles, industrias y centros comerciales.</p><p>Desde entonces nos responsabilizamos por el cuidado integral de sus espacios permitiendo a su empresa concentrar recursos y esfuerzos en el desarrollo del negocio, con la tranquilidad de contar con el apoyo de un equipo profesional, eficaz y eficiente que le garantizan resultados confiables y sostenibles.</p><p className="font-semibold text-[#1a365d]">Con AALTO MANTENIMIENTO sus instalaciones están en buenas manos.</p></div></div><div className="space-y-8"><div className="overflow-hidden bg-slate-100"><img src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=1200" alt="Equipo técnico" className="h-[430px] w-full object-cover grayscale" /><div className="bg-gradient-to-r from-[#1a365d] to-[#4299e1] p-7 text-white"><p className="text-[10px] font-black uppercase tracking-[0.36em] text-white/70">Lo que nos hace diferentes</p><p className="mt-3 text-xl font-light leading-relaxed">Ofrecemos soluciones a medida que resuelven tus necesidades y potencian el éxito de tu empresa.</p></div></div><div className="border-l-4 border-[#3b82f6] bg-slate-50 p-8"><h3 className="text-sm font-black uppercase tracking-[0.28em] text-[#1a365d]">Política</h3><p className="mt-5 text-base font-light leading-relaxed text-slate-600">Proveemos soluciones de mantenimiento edilicio con altos estándares de calidad, priorizando seguridad, eficiencia y mejora continua, garantizando la satisfacción de nuestros clientes y el cumplimiento normativo vigente.</p></div></div></div></section>

      <section className="bg-slate-50 py-24 sm:py-32"><div className="mx-auto max-w-7xl px-6 lg:px-10"><Kicker>Identidad institucional</Kicker><h2 className="mb-14 text-4xl font-black uppercase leading-none tracking-[-0.05em] text-[#1a365d] sm:text-5xl">Misión, visión y valores</h2><div className="grid gap-6 lg:grid-cols-3"><div className="border bg-white p-8"><h3 className="text-2xl font-black uppercase text-[#1a365d]">Misión</h3><p className="mt-5 text-sm font-light leading-relaxed text-slate-600">Impulsar el crecimiento empresarial de nuestros clientes transformando el mantenimiento edilicio en una ventaja competitiva, cuidando cada espacio como propio y respaldando su operación para que puedan enfocarse plenamente en su negocio.</p></div><div className="border bg-white p-8"><h3 className="text-2xl font-black uppercase text-[#1a365d]">Visión</h3><p className="mt-5 text-sm font-light leading-relaxed text-slate-600">Ser reconocidos a nivel nacional como el aliado estratégico en mantenimiento edilicio, expandiendo nuestra cobertura y desarrollando soluciones que anticipen las necesidades futuras de nuestros clientes.</p></div><div className="border bg-white p-8"><h3 className="text-2xl font-black uppercase text-[#1a365d]">Valores</h3><div className="mt-5 space-y-4">{valores.map(([t, d]) => <p key={t} className="text-sm font-light leading-relaxed text-slate-600"><span className="font-black text-slate-800">{t}:</span> {d}</p>)}</div></div></div></div></section>

      <section id="especialidades" className="bg-white py-24 sm:py-32 lg:py-40"><div className="mx-auto max-w-7xl px-6 lg:px-10"><div className="mb-16 text-center"><Kicker>Servicios para empresas</Kicker><h2 className="text-4xl font-black uppercase leading-none tracking-[-0.06em] text-[#1a365d] sm:text-6xl lg:text-7xl">Especialidades</h2></div><div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2"><div className="border p-10 text-center"><h3 className="text-2xl font-black uppercase text-[#1a365d]">Mantenimiento Edilicio</h3><p className="mx-auto mt-5 max-w-md font-light leading-relaxed text-slate-600">Ejecución de tareas de mantenimiento programado según las necesidades de cada organización.</p></div><div className="bg-[#1a365d] p-10 text-center text-white"><h3 className="text-2xl font-black uppercase">Personal Externo (Outsourcing)</h3><p className="mx-auto mt-5 max-w-md font-light leading-relaxed text-white/70">Provisión de técnicos especializados integrados a la operación del cliente.</p></div></div><div className="mx-auto mt-14 max-w-4xl border-l-4 border-[#3b82f6] bg-slate-50 p-8 text-center"><p className="text-xl font-light leading-relaxed text-slate-700">Cuidamos cada detalle de tus instalaciones para que funcionen de forma óptima, con un servicio confiable y adaptado a las necesidades de tu empresa.</p></div><div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">{rubros.map(([titulo, Icon, items]) => <div key={titulo} className="border bg-white p-7 shadow-sm"><div className="mb-6 flex items-center gap-4"><div className="flex h-12 w-12 items-center justify-center bg-[#1a365d] text-white"><Icon size={24} /></div><h3 className="text-xl font-black uppercase text-[#1a365d]">{titulo}</h3></div><ul className="space-y-3">{items.map(item => <li key={item} className="flex gap-3 text-sm font-light leading-relaxed text-slate-600"><CheckCircle2 size={16} className="mt-0.5 shrink-0 text-[#3b82f6]" />{item}</li>)}</ul></div>)}</div></div></section>

      <section id="outsourcing" className="bg-slate-50 py-24 sm:py-32"><div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:px-10"><div><Kicker>Personal externo</Kicker><h2 className="text-4xl font-black uppercase leading-none tracking-[-0.05em] text-[#1a365d] sm:text-5xl">Outsourcing técnico</h2><p className="mt-8 text-lg font-light leading-relaxed text-slate-600">Ponemos a tu disposición técnicos calificados que se integran a la cultura y estándares de tu empresa, brindando soluciones precisas y confiables.</p></div><div className="grid gap-6 sm:grid-cols-3"><div className="bg-white p-7"><Users className="mb-5 text-[#1a365d]" /><h3 className="font-black uppercase text-[#1a365d]">Técnicos calificados</h3></div><div className="bg-white p-7"><Wrench className="mb-5 text-[#1a365d]" /><h3 className="font-black uppercase text-[#1a365d]">Soporte operativo</h3></div><div className="bg-white p-7"><Building2 className="mb-5 text-[#1a365d]" /><h3 className="font-black uppercase text-[#1a365d]">Empresas B2B</h3></div></div></div></section>

      <section id="clientes" className="bg-white py-24 sm:py-32"><div className="mx-auto max-w-7xl px-6 lg:px-10"><div className="mb-14 text-center"><Kicker>Nuestros clientes</Kicker><h2 className="text-4xl font-black uppercase leading-none tracking-[-0.05em] text-[#1a365d] sm:text-5xl">Empresas que confían</h2></div><div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">{clientes.map(c => <div key={c} className="flex h-24 items-center justify-center border bg-white p-4 text-center text-xs font-black uppercase tracking-widest text-slate-500 shadow-sm">{c}</div>)}</div></div></section>

      <section id="contacto" className="bg-[#0a192f] py-24 text-white sm:py-32"><div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:px-10"><div><Kicker>Contacto directo</Kicker><h2 className="text-4xl font-black uppercase leading-none tracking-[-0.05em] text-white sm:text-5xl">Solicitá asesoramiento</h2><p className="mt-8 max-w-xl text-lg font-light leading-relaxed text-white/70">Contanos qué tipo de mantenimiento, personal externo o intervención técnica necesita tu empresa.</p><div className="mt-10 space-y-5 text-white/80"><a href="tel:+542614715133" className="flex items-center gap-4"><Phone size={20} className="text-[#3b82f6]" />+54 261 471 5133</a><a href="mailto:aalto.mza@gmail.com" className="flex items-center gap-4"><Mail size={20} className="text-[#3b82f6]" />aalto.mza@gmail.com</a></div></div><form onSubmit={e => e.preventDefault()} className="bg-white p-7 text-slate-900"><input className="mb-4 w-full border p-4" placeholder="Nombre y empresa" /><input className="mb-4 w-full border p-4" placeholder="Teléfono / Email" /><textarea className="mb-4 min-h-32 w-full border p-4" placeholder="Mensaje" /><button className="w-full bg-[#1a365d] py-5 text-[11px] font-black uppercase tracking-[0.28em] text-white">Enviar consulta</button></form></div></section>

      <footer className="bg-gradient-to-r from-[#1a365d] to-[#4299e1] py-10 text-white"><div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 lg:flex-row lg:items-center lg:justify-between lg:px-10"><Logo whiteBox /><div className="grid gap-3 text-sm font-light text-white/90 md:grid-cols-3"><span>aalto.mza@gmail.com</span><span>+54 261 471 5133</span><span>aaltomantenimiento.com.ar</span></div></div></footer>
    </main>
  );
}
