import { useEffect, useState } from 'react';
import { Building2, CheckCircle2, Hammer, Mail, Menu, Paintbrush, Phone, Snowflake, Users, Wrench, X, Zap, Hotel, HeartPulse, ShoppingBag, Factory } from 'lucide-react';

const azul = '#1a365d';
const celeste = '#4299e1';
const amarillo = '#f2b51d';

const nav = [
  ['Quiénes somos', 'quienes-somos'],
  ['Especialidades', 'especialidades'],
  ['Sectores', 'sectores'],
  ['Clientes', 'clientes'],
  ['Contacto', 'contacto'],
];

const sectores = [
  ['Bodegas', Building2],
  ['Hotelería', Hotel],
  ['Salud', HeartPulse],
  ['Industrias', Factory],
  ['Retail & centros comerciales', ShoppingBag],
] as const;

const rubros = [
  ['Obra civil', Building2, ['Albañilería General.', 'Construcción en Seco.', 'Pavimentos y pisos.', 'Revestimientos y acabados.']],
  ['Pintura', Paintbrush, ['Pintura Civil de Medianas y Grandes Superficies.', 'Revestimientos Plásticos y Texturados.', 'Epoxis y Poliuretánicos.', 'Señalizaciones.']],
  ['Instalaciones', Zap, ['Electricidad de media y baja tensión.', 'Montaje y mantenimiento de tableros.', 'Sistemas y medición de puesta a tierra.', 'Plomería general.']],
  ['Carpintería', Wrench, ['Fabricación y restauración de aberturas y mobiliario.', 'Construcción y mantenimiento de pérgolas y decks.']],
  ['Refrigeración', Snowflake, ['Instalación y mantenimiento de aire acondicionado.', 'Refrigeración central, roof-top, inverter, piso techo.', 'Mantenimiento de sistemas frigoríficos.']],
  ['Herrería', Hammer, ['Estructuras Metálicas a Medida.', 'Acero Inoxidable.', 'Soldaduras especializadas.', 'Rejas, puertas y portones.']],
] as const;

const clientes = ['Salentein', 'Rosell Boher', 'Trivento', 'Talca', 'Yaguar', 'Chandon', 'Norton', 'SMN Argentina', 'Renacer', 'Luigi Bosca', 'Halliburton', 'Park Hyatt', 'Neverland', 'Coca-Cola', 'Unilever'];

function go(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
}

function Logo() {
  return (
    <div className="inline-flex items-center gap-3">
      <svg viewBox="0 0 100 70" className="h-10 w-14" aria-hidden="true">
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
  return <span className="mb-4 block text-[10px] font-black uppercase tracking-[0.36em] text-[#3b82f6]">{children}</span>;
}

export default function App() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <main className="min-h-screen bg-white text-slate-900 selection:bg-blue-100">
      <header className="fixed left-0 right-0 top-0 z-50 bg-white shadow-sm">
        <div className="mx-auto flex h-[74px] max-w-7xl items-center justify-between px-5 lg:px-10">
          <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="text-left">
            <Logo />
          </button>
          <nav className="hidden items-center gap-5 lg:flex">
            {nav.map(([label, id], index) => (
              <button key={id} onClick={() => go(id)} className="text-[12px] font-black uppercase tracking-[0.18em] text-[#1a365d] transition-colors hover:text-[#3b82f6]">
                {label}{index < nav.length - 1 && <span className="ml-5 text-slate-300">|</span>}
              </button>
            ))}
          </nav>
          <button onClick={() => go('contacto')} className="hidden rounded-full bg-[#0f7da5] px-7 py-3 text-[11px] font-black uppercase tracking-[0.18em] text-white lg:inline-flex">
            Solicitar asesoramiento
          </button>
          <button onClick={() => setOpen(true)} className="text-[#1a365d] lg:hidden" aria-label="Abrir menú"><Menu size={30} /></button>
        </div>
      </header>

      {open && <div className="fixed inset-0 z-[60] bg-white p-8 lg:hidden">
        <div className="mb-10 flex items-center justify-between"><Logo /><button onClick={() => setOpen(false)} aria-label="Cerrar menú"><X size={32} /></button></div>
        <div className="flex flex-col gap-7">{nav.map(([label, id]) => <button key={id} onClick={() => { setOpen(false); go(id); }} className="border-b pb-4 text-left text-lg font-black uppercase tracking-[0.18em] text-[#1a365d]">{label}</button>)}</div>
      </div>}

      <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#0a192f] pt-[74px] text-center">
        <img src="https://images.unsplash.com/photo-1581092160607-ee22731c9c0f?auto=format&fit=crop&q=80&w=2200" alt="Mantenimiento edilicio profesional" className="absolute inset-0 h-full w-full object-cover grayscale opacity-55" />
        <div className="absolute inset-0 bg-[#061523]/70" />
        <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        <div className="relative z-10 mx-auto w-full max-w-6xl px-6 pb-36 pt-20 lg:px-10">
          <h1 className="mx-auto max-w-5xl text-5xl font-black uppercase leading-[0.97] tracking-[-0.06em] text-white sm:text-6xl md:text-7xl lg:text-[88px]">
            Tus instalaciones en <span className="text-[#3b82f6]">buenas manos.</span>
          </h1>
          <p className="mx-auto mt-7 max-w-3xl text-lg font-light leading-relaxed text-white/85 sm:text-xl">
            Desde una obra puntual hasta el mantenimiento diario. Siempre con la misma dedicación y compromiso.
          </p>
          <button onClick={() => go('contacto')} className="mt-9 rounded-md bg-[#f2b51d] px-10 py-4 text-[12px] font-black uppercase tracking-[0.18em] text-white shadow-lg">
            Contacto directo
          </button>
        </div>
        <div id="sectores" className="absolute bottom-[-46px] left-1/2 z-20 w-full max-w-5xl -translate-x-1/2 px-6">
          <div className="grid gap-3 md:grid-cols-5">
            {sectores.map(([label, Icon]) => (
              <button key={label} onClick={() => go('especialidades')} className="flex h-[92px] flex-col items-center justify-center bg-white px-3 text-center shadow-xl transition-transform hover:-translate-y-1">
                <Icon size={28} className="mb-3 text-[#0f7da5]" />
                <span className="text-[11px] font-black uppercase tracking-[0.12em] text-[#1a365d]">{label}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-16 pt-24 text-center">
        <div className="mx-auto max-w-4xl px-6">
          <p className="text-xl font-black leading-snug text-[#0f4f6f] sm:text-2xl">
            Cuidamos cada detalle de tus instalaciones para que funcionen de forma óptima, con un servicio confiable y adaptado a las necesidades de tu empresa.
          </p>
        </div>
      </section>

      <section className="bg-[#0f7da5] py-20 text-white">
        <div className="mx-auto grid max-w-5xl gap-10 px-6 text-center md:grid-cols-3">
          <div><div className="text-5xl font-black">+4</div><div className="mt-2 text-[13px] font-black uppercase tracking-wide text-[#f2d35b]">Años de trayectoria</div></div>
          <div><div className="text-5xl font-black">+5</div><div className="mt-2 text-[13px] font-black uppercase tracking-wide text-[#f2d35b]">Sectores atendidos</div></div>
          <div><div className="text-5xl font-black">360°</div><div className="mt-2 text-[13px] font-black uppercase tracking-wide text-[#f2d35b]">Mantenimiento integral</div></div>
        </div>
      </section>

      <section id="quienes-somos" className="bg-white py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-2 lg:gap-20 lg:px-10">
          <div>
            <Kicker>Trayectoria institucional</Kicker>
            <h2 className="text-4xl font-black uppercase leading-none tracking-[-0.05em] text-[#1a365d] sm:text-5xl lg:text-6xl">Quiénes somos</h2>
            <div className="mt-9 space-y-6 text-lg font-light leading-relaxed text-slate-600">
              <p><strong className="font-black text-slate-900">AALTO MANTENIMIENTO</strong> surge en el año 2020 como respuesta a la creciente demanda de soluciones integrales de mantenimiento edilicio en empresas B2B de sectores como bodegas, hoteles, industrias y centros comerciales.</p>
              <p>Desde entonces nos responsabilizamos por el cuidado integral de sus espacios permitiendo a su empresa concentrar recursos y esfuerzos en el desarrollo del negocio, con la tranquilidad de contar con el apoyo de un equipo profesional, eficaz y eficiente que le garantizan resultados confiables y sostenibles.</p>
              <p className="font-semibold text-[#1a365d]">Con AALTO MANTENIMIENTO sus instalaciones están en buenas manos.</p>
            </div>
          </div>
          <div className="overflow-hidden bg-slate-100 shadow-sm">
            <img src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=1200" alt="Equipo técnico" className="h-[430px] w-full object-cover grayscale" />
            <div className="bg-[#1a365d] p-7 text-white">
              <p className="text-[10px] font-black uppercase tracking-[0.32em] text-white/70">Lo que nos hace diferentes</p>
              <p className="mt-3 text-xl font-light leading-relaxed">Ofrecemos soluciones a medida que resuelven tus necesidades y potencian el éxito de tu empresa.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="especialidades" className="bg-slate-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="mb-16 text-center">
            <Kicker>Servicios para empresas</Kicker>
            <h2 className="text-4xl font-black uppercase leading-none tracking-[-0.05em] text-[#1a365d] sm:text-6xl">Especialidades</h2>
          </div>
          <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2">
            <div className="border bg-white p-10 text-center shadow-sm">
              <Building2 className="mx-auto mb-6 text-[#1a365d]" size={34} />
              <h3 className="text-2xl font-black uppercase text-[#1a365d]">Mantenimiento Edilicio</h3>
              <p className="mx-auto mt-5 max-w-md font-light leading-relaxed text-slate-600">Ejecución de tareas de mantenimiento programado según las necesidades de cada organización.</p>
            </div>
            <div className="bg-[#1a365d] p-10 text-center text-white shadow-sm">
              <Users className="mx-auto mb-6 text-white" size={34} />
              <h3 className="text-2xl font-black uppercase">Personal Externo (Outsourcing)</h3>
              <p className="mx-auto mt-5 max-w-md font-light leading-relaxed text-white/70">Provisión de técnicos especializados integrados a la operación del cliente.</p>
            </div>
          </div>
          <div className="mt-16 grid gap-4 md:grid-cols-3 lg:grid-cols-6">
            {rubros.map(([titulo, Icon]) => (
              <div key={titulo} className="flex h-28 flex-col justify-center bg-white p-5 shadow-sm">
                <Icon size={22} className="mb-4 text-[#3b82f6]" />
                <h3 className="text-[12px] font-black uppercase tracking-[0.16em] text-[#1a365d]">{titulo}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="clientes" className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="mb-14 text-center">
            <Kicker>Nuestros clientes</Kicker>
            <h2 className="text-4xl font-black uppercase leading-none tracking-[-0.05em] text-[#1a365d] sm:text-5xl">Empresas que confían en AALTO</h2>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
            {clientes.map(c => <div key={c} className="flex h-24 items-center justify-center border bg-white p-4 text-center text-xs font-black uppercase tracking-widest text-slate-500 shadow-sm grayscale">{c}</div>)}
          </div>
        </div>
      </section>

      <section id="contacto" className="bg-[#0a192f] py-24 text-white sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:px-10">
          <div>
            <Kicker>Contacto directo</Kicker>
            <h2 className="text-4xl font-black uppercase leading-none tracking-[-0.05em] text-white sm:text-5xl">Solicitá asesoramiento</h2>
            <p className="mt-8 max-w-xl text-lg font-light leading-relaxed text-white/70">Contanos qué tipo de mantenimiento, personal externo o intervención técnica necesita tu empresa.</p>
            <div className="mt-10 space-y-5 text-white/80">
              <a href="tel:+542614715133" className="flex items-center gap-4"><Phone size={20} className="text-[#3b82f6]" />+54 261 471 5133</a>
              <a href="mailto:aalto.mza@gmail.com" className="flex items-center gap-4"><Mail size={20} className="text-[#3b82f6]" />aalto.mza@gmail.com</a>
            </div>
          </div>
          <form onSubmit={e => e.preventDefault()} className="bg-white p-7 text-slate-900 shadow-xl">
            <input className="mb-4 w-full border p-4" placeholder="Nombre y empresa" />
            <input className="mb-4 w-full border p-4" placeholder="Teléfono / Email" />
            <textarea className="mb-4 min-h-32 w-full border p-4" placeholder="Mensaje" />
            <button className="w-full bg-[#1a365d] py-5 text-[11px] font-black uppercase tracking-[0.28em] text-white">Enviar consulta</button>
          </form>
        </div>
      </section>

      <footer className="bg-white py-10 text-[#1a365d]">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-8 px-6 lg:flex-row lg:items-center lg:justify-between lg:px-10">
          <Logo />
          <div className="grid gap-3 text-sm font-light md:grid-cols-3"><span>aalto.mza@gmail.com</span><span>+54 261 471 5133</span><span>aaltomantenimiento.com.ar</span></div>
        </div>
      </footer>
    </main>
  );
}
