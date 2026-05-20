import { useEffect, useState } from 'react';
import { Building2, Briefcase, CheckCircle2, ChevronRight, Construction, Factory, FileUp, Globe, Hammer, Hotel, Mail, Menu, Phone, Send, ShoppingBag, Snowflake, Users, Wrench, X, Zap } from 'lucide-react';

const azul = '#1a365d';
const celeste = '#4299e1';
const contactEmail = 'info@aaltomantenimiento.com.ar';
const phone = '+54 261 471 5133';

const nav = [
  ['Quiénes somos', 'quienes-somos'],
  ['Especialidades', 'especialidades'],
  ['Outsourcing', 'outsourcing'],
  ['Clientes', 'clientes'],
  ['Enviar CV', 'contacto'],
  ['Contacto', 'contacto'],
] as const;

const sectores = [
  ['Bodegas', Building2],
  ['Hotelería', Hotel],
  ['Industrias', Factory],
  ['Retail & centros comerciales', ShoppingBag],
] as const;

const rubros = [
  {
    titulo: 'Obra civil',
    Icon: Building2,
    items: ['Albañilería general.', 'Construcción en seco.', 'Pavimentos y pisos.', 'Revestimientos y acabados.'],
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=85&w=1500',
  },
  {
    titulo: 'Pintura',
    Icon: Hammer,
    items: ['Pintura civil de medianas y grandes superficies.', 'Revestimientos plásticos y texturados.', 'Epoxis y poliuretánicos.', 'Señalizaciones.'],
    image: 'https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&q=85&w=1500',
  },
  {
    titulo: 'Instalaciones',
    Icon: Zap,
    items: ['Electricidad de media y baja tensión.', 'Montaje y mantenimiento de tableros.', 'Sistemas y medición de puesta a tierra.', 'Plomería general.'],
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&q=85&w=1500',
  },
  {
    titulo: 'Carpintería',
    Icon: Wrench,
    items: ['Fabricación y restauración de aberturas y mobiliario.', 'Construcción y mantenimiento de pérgolas y decks.'],
    image: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&q=85&w=1500',
  },
  {
    titulo: 'Refrigeración',
    Icon: Snowflake,
    items: ['Instalación y mantenimiento de aire acondicionado.', 'Refrigeración central, roof-top, inverter y piso techo.', 'Mantenimiento de sistemas frigoríficos.'],
    image: 'https://images.unsplash.com/photo-1632910393733-749607610ed7?auto=format&fit=crop&q=85&w=1500',
  },
  {
    titulo: 'Herrería',
    Icon: Hammer,
    items: ['Estructuras metálicas a medida.', 'Acero inoxidable.', 'Soldaduras especializadas.', 'Rejas, puertas y portones.'],
    image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=85&w=1500',
  },
] as const;

const clientes = [
  { name: 'Coca Cola', logo: '/coca-cola.png?v=20260520' },
  { name: 'Halliburton', logo: '/Halliburton.png?v=20260520' },
  { name: 'Unilever', logo: '/unilever.png?v=20260520' },
  { name: 'Hotel Park Hyatt Mendoza', logo: '/ParkHyattBlackLogo-640.webp?v=20260520' },
] as const;

function go(id: string) {
  const element = document.getElementById(id);
  if (!element) return;
  const offset = window.matchMedia('(max-width: 768px)').matches ? 74 : 92;
  const top = element.getBoundingClientRect().top + window.scrollY - offset;
  window.scrollTo({ top: Math.max(0, top), behavior: 'smooth' });
}

function Logo({ compact = false, dark = false }: { compact?: boolean; dark?: boolean }) {
  return (
    <div className="inline-flex items-center gap-3 md:gap-4">
      <svg viewBox="0 0 100 70" className={`${compact ? 'h-10 w-14' : 'h-14 w-20 lg:h-18 lg:w-28'} shrink-0`} aria-hidden="true">
        <path d="M35 5 L5 65 L22 65 L44 20 L55 45 L65 35 L50 5 Z" fill={azul} />
        <path d="M50 5 L65 35 L75 25 L95 65 L78 65 L65 40 L55 60 L45 50 L50 5 Z" fill={celeste} />
      </svg>
      <div className="leading-none">
        <div className={`${compact ? 'text-3xl' : 'text-4xl lg:text-5xl'} font-black tracking-[-0.08em] ${dark ? 'text-slate-950' : 'text-white'}`}>aalto</div>
        <div className={`${compact ? 'text-[8px]' : 'text-[10px]'} mt-1 font-black uppercase tracking-[0.42em] ${dark ? 'text-slate-500' : 'text-white/80'}`}>Mantenimiento</div>
      </div>
    </div>
  );
}

function Kicker({ children }: { children: string }) {
  return <span className="mb-4 block text-[10px] font-black uppercase tracking-[0.36em] text-[#3b82f6]">{children}</span>;
}

function ClientLogo({ logo, name }: { logo: string; name: string }) {
  const [failed, setFailed] = useState(false);
  return (
    <div className="flex h-28 md:h-36 items-center justify-center px-4">
      {!failed ? (
        <img src={logo} alt={name} onError={() => setFailed(true)} className="block max-h-20 md:max-h-24 w-full max-w-[280px] object-contain mix-blend-multiply opacity-95" />
      ) : (
        <span className="text-center text-sm md:text-base font-black uppercase tracking-[0.18em] text-[#1a365d]">{name}</span>
      )}
    </div>
  );
}

export default function App() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener('scroll', onScroll);
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <main className="min-h-screen bg-white text-slate-900 selection:bg-blue-100">
      <header className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-sm' : 'bg-transparent'}`}>
        <div className="mx-auto flex h-[82px] max-w-7xl items-center justify-between px-5 lg:px-10">
          <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="text-left">
            <Logo dark={scrolled} />
          </button>
          <nav className="hidden items-center gap-5 xl:gap-7 lg:flex">
            {nav.map(([label, id]) => (
              <button key={label} onClick={() => go(id)} className={`text-[11px] font-black uppercase tracking-[0.16em] transition-colors hover:text-[#3b82f6] ${scrolled ? 'text-[#1a365d]' : 'text-white'}`}>
                {label}
              </button>
            ))}
          </nav>
          <button onClick={() => setOpen(true)} className={`${scrolled ? 'text-[#1a365d]' : 'text-white'} lg:hidden`} aria-label="Abrir menú"><Menu size={32} /></button>
        </div>
      </header>

      {open && (
        <div className="fixed inset-0 z-[60] bg-white p-8 lg:hidden">
          <div className="mb-10 flex items-center justify-between"><Logo compact dark /><button onClick={() => setOpen(false)} aria-label="Cerrar menú"><X size={32} /></button></div>
          <div className="flex flex-col gap-7">
            {nav.map(([label, id]) => (
              <button key={label} onClick={() => { setOpen(false); go(id); }} className="border-b border-slate-100 pb-4 text-left text-lg font-black uppercase tracking-[0.16em] text-[#1a365d]">{label}</button>
            ))}
          </div>
        </div>
      )}

      <section className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-[#0a192f] pt-[82px]">
        <img src="/aalto-mantenimiento.webp?v=20260520" alt="Mantenimiento edilicio profesional" className="absolute inset-0 h-full w-full object-cover opacity-100" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#061523]/78 via-[#061523]/44 to-[#061523]/8" />
        <div className="absolute inset-0 bg-[#3b82f6]/10 mix-blend-screen" />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-10 pt-16 text-center lg:px-10 lg:pl-16 lg:text-left">
          <h1 className="max-w-6xl text-5xl font-black uppercase leading-[0.9] tracking-[-0.065em] text-white sm:text-7xl md:text-8xl lg:text-[112px] xl:text-[128px]">
            Cuidamos su <br /><span className="text-[#3b82f6]">infraestructura.</span>
          </h1>
          <p className="mt-6 max-w-5xl text-lg font-light leading-relaxed text-white/90 sm:text-2xl lg:text-[25px]">
            Mantenimiento, personal externo y soluciones técnicas para empresas que necesitan continuidad operativa, respuesta profesional y control en cada intervención.
          </p>
          <div className="mt-7 flex flex-col gap-4 sm:flex-row lg:justify-start justify-center">
            <button onClick={() => go('especialidades')} className="bg-[#3b82f6] px-9 py-4 text-[12px] font-black uppercase tracking-[0.22em] text-white shadow-lg transition hover:bg-[#2b6cb0]">Ver servicios</button>
            <button onClick={() => go('contacto')} className="border border-white/35 px-9 py-4 text-[12px] font-black uppercase tracking-[0.22em] text-white transition hover:bg-white hover:text-[#1a365d]">Enviar consulta / CV</button>
          </div>
          <div className="mt-8 grid max-w-5xl grid-cols-2 gap-3 lg:grid-cols-4">
            {sectores.map(([label, Icon]) => (
              <button key={label} onClick={() => go('especialidades')} className="border border-white/15 bg-white/10 px-4 py-4 text-left backdrop-blur-md transition hover:bg-white/15">
                <Icon className="mb-3 text-[#3b82f6]" size={20} />
                <span className="block text-[11px] font-black uppercase tracking-[0.18em] text-white">{label}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section id="quienes-somos" className="py-16 md:py-20 lg:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2 lg:px-10">
          <div>
            <Kicker>Quiénes somos</Kicker>
            <h2 className="max-w-3xl text-4xl font-black uppercase leading-[0.92] tracking-[-0.055em] text-[#1a365d] md:text-6xl">Cuidamos cada detalle de tus instalaciones</h2>
            <p className="mt-6 max-w-2xl text-lg font-light leading-relaxed text-slate-600">Para que funcionen de forma óptima, con un servicio confiable y profesional adaptado a las necesidades de tu empresa.</p>
          </div>
          <div className="aspect-[4/3] overflow-hidden bg-slate-100"><img src="https://images.unsplash.com/photo-1560250056-07ba64664864?auto=format&fit=crop&q=85&w=1500" alt="Equipo corporativo" className="h-full w-full object-cover" /></div>
        </div>
      </section>

      <section id="especialidades" className="bg-slate-50 py-16 md:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="mb-12 text-center"><Kicker>Nuestras especialidades</Kicker><h2 className="text-4xl font-black uppercase tracking-[-0.05em] text-[#1a365d] md:text-6xl">Especialidades</h2></div>
          <div className="mx-auto mb-16 grid max-w-4xl grid-cols-1 overflow-hidden border border-slate-200 bg-white md:grid-cols-2">
            <div className="p-9 text-center"><Construction className="mx-auto mb-5 text-[#1a365d]" size={34} /><h3 className="mb-4 text-lg font-black uppercase tracking-[0.06em] text-[#1a365d]">Mantenimiento edilicio</h3><p className="mx-auto max-w-sm text-sm leading-relaxed text-slate-500">Ejecución de tareas de mantenimiento programado, preventivo y correctivo según las necesidades de cada organización.</p></div>
            <div className="bg-[#1a365d] p-9 text-center text-white"><Users className="mx-auto mb-5" size={34} /><h3 className="mb-4 text-lg font-black uppercase tracking-[0.06em]">Personal externo / outsourcing</h3><p className="mx-auto mb-6 max-w-sm text-sm leading-relaxed text-white/70">Provisión de técnicos especializados integrados a la operación del cliente.</p><button onClick={() => go('outsourcing')} className="bg-white px-7 py-3 text-[11px] font-black uppercase tracking-[0.2em] text-[#1a365d] transition hover:bg-[#3b82f6] hover:text-white">Saber más</button></div>
          </div>
          <div className="mb-10 text-center"><Kicker>Detalle de servicios</Kicker><h3 className="text-3xl font-black uppercase tracking-[-0.04em] text-[#1a365d] md:text-5xl">Detalle de servicios</h3></div>
          <div className="grid gap-0 overflow-hidden bg-white lg:grid-cols-2">
            {rubros.map((rubro, index) => {
              const Icon = rubro.Icon;
              const textBlock = <div className="flex min-h-[320px] flex-col justify-center p-8 lg:p-12"><Icon className="mb-4 text-[#3b82f6]" size={28} /><h4 className="mb-5 text-2xl font-black tracking-[-0.04em] text-[#1a365d]">{rubro.titulo}</h4><ul className="space-y-2 text-sm text-slate-600">{rubro.items.map((item) => <li key={item} className="flex gap-2"><CheckCircle2 className="mt-0.5 shrink-0 text-[#3b82f6]" size={14} />{item}</li>)}</ul></div>;
              const imageBlock = <div className="min-h-[320px] overflow-hidden bg-slate-100"><img src={rubro.image} alt={rubro.titulo} className="h-full min-h-[320px] w-full object-cover" /></div>;
              return <div key={rubro.titulo} className="contents">{index % 2 === 0 ? <>{textBlock}{imageBlock}</> : <>{imageBlock}{textBlock}</>}</div>;
            })}
          </div>
        </div>
      </section>

      <section id="outsourcing" className="py-16 md:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10"><Kicker>Personal externo</Kicker><h2 className="mb-5 text-4xl font-black uppercase leading-[0.92] tracking-[-0.055em] text-[#1a365d] md:text-6xl">Outsourcing técnico</h2><p className="mb-10 max-w-3xl text-lg font-light leading-relaxed text-slate-600">Una solución para empresas que necesitan sumar personal técnico sin desordenar su operación ni perder control de calidad.</p><div className="grid gap-6 lg:grid-cols-3">{[{ title: 'Integración operativa', text: 'Perfiles técnicos alineados a normas, horarios y dinámica interna.', icon: Users }, { title: 'Un solo interlocutor', text: 'Coordinación centralizada para seguimiento, reemplazos y reportes.', icon: Briefcase }, { title: 'Control y continuidad', text: 'Supervisión, cumplimiento y respuesta ordenada.', icon: CheckCircle2 }].map((item) => { const Icon = item.icon; return <div key={item.title} className="border border-slate-100 bg-white p-7 shadow-sm"><Icon className="mb-5 text-[#3b82f6]" size={28} /><h3 className="mb-3 text-lg font-black uppercase tracking-[0.04em] text-[#1a365d]">{item.title}</h3><p className="text-sm leading-relaxed text-slate-500">{item.text}</p></div>; })}</div></div>
      </section>

      <section id="clientes" className="bg-white py-16 md:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 text-center lg:px-10"><Kicker>Empresas clientes</Kicker><h2 className="mb-12 text-4xl font-black uppercase tracking-[-0.05em] text-[#1a365d] md:text-6xl">Empresas que confían en Aalto</h2><div className="mx-auto grid max-w-6xl grid-cols-2 items-center gap-x-10 gap-y-6 lg:grid-cols-4">{clientes.map((cliente) => <ClientLogo key={cliente.name} logo={cliente.logo} name={cliente.name} />)}</div></div>
      </section>

      <section id="contacto" className="bg-slate-950 py-16 text-white md:py-20 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:px-10"><div><Kicker>Contacto laboral</Kicker><h2 className="mb-6 text-4xl font-black uppercase leading-[0.92] tracking-[-0.055em] md:text-6xl">Hablemos de tu proyecto</h2><p className="max-w-xl text-lg font-light leading-relaxed text-white/60">Decinos qué servicio necesitás o envianos tu CV. El formulario permite adjuntar archivos para postulaciones o requerimientos técnicos.</p><div className="mt-8 space-y-3 text-sm text-white/80"><p><Phone className="mr-2 inline text-[#3b82f6]" size={16} />{phone}</p><p><Mail className="mr-2 inline text-[#3b82f6]" size={16} />{contactEmail}</p><p><Globe className="mr-2 inline text-[#3b82f6]" size={16} />aaltomantenimiento.com.ar</p></div></div><form onSubmit={(e) => e.preventDefault()} className="bg-white p-7 text-slate-900 shadow-2xl md:p-10"><div className="grid gap-5"><input placeholder="Nombre y empresa" className="border-b border-slate-200 py-4 outline-none focus:border-[#3b82f6]" /><input placeholder="Email o teléfono" className="border-b border-slate-200 py-4 outline-none focus:border-[#3b82f6]" /><textarea placeholder="Mensaje" rows={4} className="resize-none border-b border-slate-200 py-4 outline-none focus:border-[#3b82f6]" /><label className="flex cursor-pointer items-center justify-center gap-3 border border-dashed border-slate-300 p-4 text-sm font-bold text-slate-500 hover:border-[#3b82f6]"><FileUp size={18} />Adjuntar archivo / CV<input type="file" accept=".pdf,.doc,.docx,.jpg,.jpeg,.png" className="hidden" /></label><button className="flex items-center justify-center gap-3 bg-[#1a365d] px-8 py-5 text-[11px] font-black uppercase tracking-[0.26em] text-white hover:bg-[#3b82f6]"><Send size={16} />Enviar consulta</button></div></form></div>
      </section>

      <footer className="bg-white py-10"><div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 lg:flex-row lg:items-center lg:justify-between lg:px-10"><Logo compact dark /><div className="flex flex-col gap-2 text-sm font-bold text-[#1a365d] lg:text-right"><span>{phone}</span><span>{contactEmail}</span><span>aaltomantenimiento.com.ar</span></div></div></footer>
    </main>
  );
}
