import { useEffect, useState } from 'react';
import {
  Building2,
  CheckCircle2,
  ChevronRight,
  Factory,
  FileUp,
  Hammer,
  Hotel,
  Mail,
  Menu,
  Phone,
  ShoppingBag,
  Snowflake,
  Users,
  Wrench,
  X,
  Zap,
} from 'lucide-react';

const azul = '#1a365d';
const celeste = '#4299e1';
const contactEmail = 'info@aaltomantenimiento.com.ar';
const phone = '+54 261 471 5133';
const whatsappHref = 'https://wa.me/542614715133';

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
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=85&w=1500',
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
    image: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&q=85&w=1500',
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
    image: 'https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&q=85&w=1500',
  },
  {
    titulo: 'Herrería',
    Icon: Hammer,
    items: ['Estructuras metálicas a medida.', 'Acero inoxidable.', 'Soldaduras especializadas.', 'Rejas, puertas y portones.'],
    image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=85&w=1500',
  },
] as const;

type AaltoClient = {
  name: string;
  alt: string;
  srcs: string[];
  className?: string;
};

const aaltoClients: AaltoClient[] = [
  {
    name: 'Coca-Cola',
    alt: 'Coca-Cola',
    srcs: ['/coca-cola.png', '/coca-cola.webp', '/coca-cola.jpg', '/01-coca-cola.svg'],
    className: 'brand-coca',
  },
  {
    name: 'Halliburton',
    alt: 'Halliburton',
    srcs: ['/Halliburton.png', '/halliburton.png', '/02-halliburton.svg'],
  },
  {
    name: 'Unilever',
    alt: 'Unilever',
    srcs: ['/unilever.png', '/Unilever.png', '/03-unilever.svg'],
    className: 'brand-unilever',
  },
  {
    name: 'Hotel Park Hyatt Mendoza',
    alt: 'Hotel Park Hyatt Mendoza',
    srcs: ['/ParkHyattBlackLogo-640.webp', '/ParkHyattBlackLogo-640w.webp', '/park-hyatt-mendoza.png', '/04-park-hyatt-mendoza.svg'],
  },
  {
    name: 'Bodega Salentein',
    alt: 'Bodega Salentein',
    srcs: ['/bodega-salentein.png', '/salentein.png', '/Salentein.png', '/portillo.png'],
  },
  {
    name: 'Hotel Rosell Boher Lodge',
    alt: 'Hotel Rosell Boher Lodge',
    srcs: ['/hotel-rosell-boher-lodge.png', '/rosell-boher.png', '/rosell-boher-lodge.png', '/R.png'],
  },
  {
    name: 'Bodega Cheval des Andes',
    alt: 'Bodega Cheval des Andes',
    srcs: ['/bodega-cheval-des-andes.png', '/cheval-des-andes.png', '/cheval.png', '/achaval.jpeg'],
  },
  {
    name: 'Supermercado Mayorista Yaguar',
    alt: 'Supermercado Mayorista Yaguar',
    srcs: ['/yaguar.png', '/Yaguar.png', '/mayorista-yaguar.png'],
  },
  {
    name: 'Bodega Chandon',
    alt: 'Bodega Chandon',
    srcs: ['/bodega-chandon.png', '/chandon.png', '/Chandon.png'],
  },
  {
    name: 'Neverland',
    alt: 'Neverland',
    srcs: ['/neverland.webp', '/neverland.png', '/Neverland.png'],
  },
  {
    name: "Levi's",
    alt: "Levi's",
    srcs: ['/levis.jpg', '/levis.png', '/levis.webp', '/Levis.png'],
  },
  {
    name: 'Bodega Fecovita',
    alt: 'Bodega Fecovita',
    srcs: ['/fecovita.webp', '/fecovita.png', '/Fecovita.png'],
  },
  {
    name: 'Bodega Luigi Bosca',
    alt: 'Bodega Luigi Bosca',
    srcs: ['/Logo-Luigi-Bosca-Baja.jpg', '/luigi-bosca.png', '/Luigi-Bosca.png'],
  },
  {
    name: 'Bodega Renacer',
    alt: 'Bodega Renacer',
    srcs: ['/bodega_renacer.png', '/bodega-renacer.png', '/renacer.png'],
  },
  {
    name: 'Famiq',
    alt: 'Famiq',
    srcs: ['/famiq.png', '/famiq.jpg', '/Famiq.png'],
  },
];

function withVersion(src: string) {
  return `${src}?v=20260522-final`;
}

function go(id: string) {
  const element = document.getElementById(id);
  if (!element) return;

  const isMobile = window.matchMedia('(max-width: 768px)').matches;
  const offset = isMobile ? 76 : 96;
  const top = element.getBoundingClientRect().top + window.scrollY - offset;

  window.scrollTo({ top: Math.max(0, top), behavior: 'smooth' });
}

function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <div className="inline-flex items-center gap-4">
      <svg viewBox="0 0 100 70" className={`${compact ? 'h-10 w-14' : 'h-14 w-20 lg:h-16 lg:w-24'} shrink-0`} aria-hidden="true">
        <path d="M35 5 L5 65 L22 65 L44 20 L55 45 L65 35 L50 5 Z" fill={azul} />
        <path d="M50 5 L65 35 L75 25 L95 65 L78 65 L65 40 L55 60 L45 50 L50 5 Z" fill={celeste} />
      </svg>
      <div className="leading-none">
        <div className={`${compact ? 'text-3xl' : 'text-4xl lg:text-5xl'} font-black tracking-[-0.08em] text-slate-950`}>aalto</div>
        <div className={`${compact ? 'text-[8px]' : 'text-[10px]'} mt-1 font-black uppercase tracking-[0.42em] text-slate-500`}>Mantenimiento</div>
      </div>
    </div>
  );
}

function Kicker({ children }: { children: string }) {
  return <span className="mb-4 block text-[10px] font-black uppercase tracking-[0.36em] text-[#3b82f6]">{children}</span>;
}

function ClientLogoVisual({ client }: { client: AaltoClient }) {
  const [srcIndex, setSrcIndex] = useState(0);
  const src = client.srcs[srcIndex];

  return (
    <article className={`aalto-client-logo-item ${client.className ?? ''}`}>
      {src ? (
        <img
          src={withVersion(src)}
          alt={client.alt}
          loading="lazy"
          decoding="async"
          className="aalto-logo-img"
          onError={() => setSrcIndex((current) => current + 1)}
        />
      ) : (
        <span className="aalto-logo-text">{client.name}</span>
      )}
    </article>
  );
}

function ClientLogoStrip() {
  const repeatedClients = [...aaltoClients, ...aaltoClients];

  return (
    <div className="aalto-clients-marquee" aria-label="Empresas clientes AALTO">
      <div className="aalto-clients-track">
        {repeatedClients.map((client, index) => (
          <ClientLogoVisual key={`${client.name}-${index}`} client={client} />
        ))}
      </div>
    </div>
  );
}

export default function App() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <main className="min-h-screen bg-white text-slate-900 selection:bg-blue-100">
      <header className="fixed left-0 right-0 top-0 z-50 bg-white shadow-sm">
        <div className="mx-auto flex h-[86px] max-w-7xl items-center justify-between px-5 lg:px-10">
          <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="text-left">
            <Logo />
          </button>
          <nav className="hidden items-center gap-5 xl:gap-7 lg:flex">
            {nav.map(([label, id]) => (
              <button key={label} onClick={() => go(id)} className="text-[11px] font-black uppercase tracking-[0.16em] text-[#1a365d] transition-colors hover:text-[#3b82f6]">
                {label}
              </button>
            ))}
          </nav>
          <button onClick={() => setOpen(true)} className="text-[#1a365d] lg:hidden" aria-label="Abrir menú"><Menu size={32} /></button>
        </div>
      </header>

      {open && (
        <div className="fixed inset-0 z-[60] bg-white p-8 lg:hidden">
          <div className="mb-10 flex items-center justify-between">
            <Logo compact />
            <button onClick={() => setOpen(false)} aria-label="Cerrar menú"><X size={32} /></button>
          </div>
          <div className="flex flex-col gap-7">
            {nav.map(([label, id]) => (
              <button key={label} onClick={() => { setOpen(false); go(id); }} className="border-b border-slate-100 pb-4 text-left text-lg font-black uppercase tracking-[0.16em] text-[#1a365d]">
                {label}
              </button>
            ))}
          </div>
        </div>
      )}

      <section className="relative flex min-h-screen flex-col items-center justify-center overflow-visible bg-[#0a192f] pt-[86px] text-center">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-75"
          style={{ backgroundImage: "url('/aalto-mantenimiento.webp?v=20260522')" }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#061523]/95 via-[#061523]/74 to-[#061523]/30" />

        <div className="relative z-10 mx-auto w-full max-w-6xl px-6 pb-16 pt-12 md:pb-32 md:pt-20 lg:px-10">
          <h1 className="mx-auto max-w-6xl text-5xl font-black uppercase leading-[0.92] tracking-[-0.06em] text-white sm:text-6xl md:text-8xl lg:text-[100px]">
            Cuidamos su <span className="text-[#3b82f6]">infraestructura.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-5xl text-lg font-light leading-relaxed text-white/85 sm:text-2xl">
            Mantenimiento, personal externo y soluciones técnicas para empresas que necesitan continuidad operativa, respuesta profesional y control en cada intervención.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <button onClick={() => go('especialidades')} className="bg-[#3b82f6] px-9 py-4 text-[12px] font-black uppercase tracking-[0.22em] text-white shadow-lg transition hover:bg-[#2b6cb0]">
              Ver servicios
            </button>
            <button onClick={() => go('contacto')} className="border border-white/35 px-9 py-4 text-[12px] font-black uppercase tracking-[0.22em] text-white transition hover:bg-white hover:text-[#1a365d]">
              Enviar consulta / CV
            </button>
          </div>
        </div>

        <div id="hero-sectors" className="relative z-20 mt-0 w-full px-6 md:absolute md:bottom-[-54px] md:left-0 md:right-0 md:mx-auto md:max-w-5xl md:translate-x-0">
          <div className="flex snap-x gap-3 overflow-x-auto pb-3 md:mx-auto md:grid md:grid-cols-4 md:overflow-visible md:pb-0">
            {sectores.map(([label, Icon]) => (
              <button key={label} onClick={() => go('especialidades')} className="hero-sector-card flex h-[100px] min-w-[190px] shrink-0 snap-start flex-col items-center justify-center bg-white px-4 text-center shadow-2xl transition-transform hover:-translate-y-1 md:h-[118px] md:min-w-0">
                <Icon size={30} className="mb-3 text-[#0f7da5]" />
                <span className="block text-center text-[11px] font-black uppercase tracking-[0.12em] text-[#1a365d]">{label}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-14 pt-28 text-center md:pt-44 lg:pt-52">
        <div className="mx-auto max-w-5xl px-6">
          <p className="text-2xl font-black leading-snug text-[#0f4f6f] sm:text-3xl">
            Cuidamos cada detalle de tus instalaciones para que funcionen de forma óptima, con un servicio confiable y adaptado a las necesidades de tu empresa.
          </p>
        </div>
      </section>

      <section id="quienes-somos" className="bg-white py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-2 lg:gap-20 lg:px-10">
          <div>
            <Kicker>Trayectoria institucional</Kicker>
            <h2 className="text-4xl font-black uppercase leading-none tracking-[-0.05em] text-[#1a365d] sm:text-5xl lg:text-6xl">Quiénes somos</h2>
            <div className="mt-9 space-y-6 text-lg font-light leading-relaxed text-slate-600">
              <p><strong className="font-black text-slate-900">AALTO MANTENIMIENTO</strong> surge en el año 2020 como respuesta a la creciente demanda de soluciones integrales de mantenimiento edilicio en empresas B2B de sectores como bodegas, hoteles, industrias y centros comerciales.</p>
              <p>Nos responsabilizamos por el cuidado integral de sus espacios, permitiendo a su empresa concentrar recursos y esfuerzos en el desarrollo del negocio, con la tranquilidad de contar con un equipo profesional, eficaz y eficiente.</p>
              <p className="font-semibold text-[#1a365d]">Con AALTO MANTENIMIENTO sus instalaciones están en buenas manos.</p>
            </div>
          </div>
          <div className="overflow-hidden bg-slate-100 shadow-sm">
            <img src="https://images.unsplash.com/photo-1560250056-07ba64664864?auto=format&fit=crop&q=85&w=1400" alt="Equipo corporativo AALTO" className="h-[460px] w-full object-cover" referrerPolicy="no-referrer" />
            <div className="bg-[#1a365d] p-7 text-white">
              <p className="text-[10px] font-black uppercase tracking-[0.32em] text-white/70">Lo que nos hace diferentes</p>
              <p className="mt-3 text-xl font-light leading-relaxed">Soluciones a medida que resuelven necesidades concretas y sostienen la continuidad de la operación.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="especialidades" className="bg-slate-50 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="mb-14 text-center">
            <Kicker>Servicios para empresas</Kicker>
            <h2 className="text-4xl font-black uppercase leading-none tracking-[-0.05em] text-[#1a365d] sm:text-6xl">Especialidades</h2>
          </div>
          <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2">
            <div className="border bg-white p-10 text-center shadow-sm">
              <Building2 className="mx-auto mb-6 text-[#1a365d]" size={38} />
              <h3 className="text-2xl font-black uppercase text-[#1a365d]">Mantenimiento Edilicio</h3>
              <p className="mx-auto mt-5 max-w-md font-light leading-relaxed text-slate-600">Ejecución de tareas de mantenimiento programado, preventivo y correctivo según las necesidades de cada organización.</p>
            </div>
            <div className="bg-[#1a365d] p-10 text-center text-white shadow-sm">
              <Users className="mx-auto mb-6 text-white" size={38} />
              <h3 className="text-2xl font-black uppercase">Personal Externo (Outsourcing)</h3>
              <p className="mx-auto mt-5 max-w-md font-light leading-relaxed text-white/70">Provisión de técnicos especializados integrados a la operación del cliente.</p>
              <button onClick={() => go('outsourcing')} className="mt-8 inline-flex items-center gap-3 bg-white px-7 py-4 text-[11px] font-black uppercase tracking-[0.22em] text-[#1a365d] transition hover:bg-[#3b82f6] hover:text-white">
                Saber más <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="mb-14 text-center">
            <Kicker>Servicios especializados</Kicker>
            <h2 className="text-4xl font-black uppercase leading-none tracking-[-0.05em] text-[#1a365d] sm:text-5xl">Detalle de servicios</h2>
          </div>
          <div className="space-y-0 border-y border-slate-100">
            {rubros.map(({ titulo, Icon, items, image }, index) => {
              const invert = index % 2 === 1;
              return (
                <article key={titulo} className="grid border-b border-slate-100 last:border-b-0 lg:min-h-[460px] lg:grid-cols-2">
                  <div className={`${invert ? 'lg:order-2' : ''} flex flex-col justify-center bg-white px-6 py-10 sm:px-10 sm:py-14 lg:px-14`}>
                    <div className="mb-7 flex items-center gap-4 text-[#0f7da5]">
                      <Icon size={38} strokeWidth={2.1} className="shrink-0" />
                      <h3 className="text-2xl font-black tracking-[-0.03em] text-[#0f4f6f] sm:text-4xl">{titulo}</h3>
                    </div>
                    <ul className="space-y-4">
                      {items.map((item) => (
                        <li key={item} className="flex gap-4 text-base font-medium leading-relaxed text-[#0f4f6f] sm:text-lg">
                          <CheckCircle2 size={22} className="mt-1 shrink-0 text-[#0f7da5]" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className={`${invert ? 'lg:order-1' : ''} min-h-[260px] overflow-hidden bg-slate-100 lg:min-h-[460px]`}>
                    <img src={image} alt={titulo} className="h-[260px] w-full object-cover lg:h-full lg:min-h-[460px]" referrerPolicy="no-referrer" />
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="outsourcing" className="bg-slate-50 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="max-w-4xl">
            <Kicker>Unidad de personal externo</Kicker>
            <h2 className="text-4xl font-black uppercase leading-none tracking-[-0.05em] text-[#1a365d] sm:text-6xl">Outsourcing técnico</h2>
            <p className="mt-8 text-xl font-light leading-relaxed text-slate-600">Una solución para empresas que necesitan sumar personal técnico sin desordenar su operación ni perder control de calidad.</p>
          </div>
          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {[
              ['Integración operativa', 'Perfiles alineados a normas, horarios y dinámica interna de cada empresa.'],
              ['Un solo interlocutor', 'Coordinación centralizada para seguimiento, reemplazos y reportes.'],
              ['Control y continuidad', 'Supervisión, cumplimiento y respuesta ordenada para reducir fricción interna.'],
            ].map(([title, text]) => (
              <div key={title} className="bg-white p-8 shadow-sm border border-slate-100">
                <h3 className="text-lg font-black uppercase tracking-tight text-[#1a365d]">{title}</h3>
                <p className="mt-4 text-sm font-light leading-relaxed text-slate-600">{text}</p>
              </div>
            ))}
          </div>
          <button onClick={() => go('contacto')} className="mt-12 inline-flex items-center gap-3 bg-[#1a365d] px-8 py-5 text-[11px] font-black uppercase tracking-[0.24em] text-white transition hover:bg-[#3b82f6]">
            Consultar outsourcing <ChevronRight size={16} />
          </button>
        </div>
      </section>

      <section id="clientes" className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="mb-10 text-center">
            <Kicker>Nuestros clientes</Kicker>
            <h2 className="text-4xl font-black uppercase leading-none tracking-[-0.05em] text-[#1a365d] sm:text-5xl">Empresas que confían en AALTO</h2>
          </div>
          <ClientLogoStrip />
        </div>
      </section>

      <section id="contacto" className="bg-[#0a192f] py-24 text-white sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:px-10">
          <div>
            <Kicker>Contacto directo</Kicker>
            <h2 className="text-4xl font-black uppercase leading-none tracking-[-0.05em] text-white sm:text-5xl">HABLEMOS DE TU PROYECTO</h2>
            <p className="mt-8 max-w-xl text-lg font-light leading-relaxed text-white/70">Decinos qué servicio o solución necesita tu empresa y nuestro equipo te va a asesorar. ¿Querés sumarte a AALTO equipo? Adjuntá tu currículum y conocé nuestras oportunidades laborales.</p>
            <div className="mt-10 space-y-5 text-white/85">
              <a href="tel:+542614715133" className="flex items-center gap-4"><Phone size={20} className="text-[#3b82f6]" />{phone}</a>
              <a href={`mailto:${contactEmail}`} className="flex items-center gap-4"><Mail size={20} className="text-[#3b82f6]" />{contactEmail}</a>
            </div>
          </div>
          <form onSubmit={e => e.preventDefault()} className="bg-white p-7 text-slate-900 shadow-xl">
            <input className="mb-4 w-full border border-slate-200 p-4 outline-none focus:border-[#3b82f6]" placeholder="Nombre y empresa" />
            <input className="mb-4 w-full border border-slate-200 p-4 outline-none focus:border-[#3b82f6]" placeholder="Teléfono / Email" />
            <textarea className="mb-4 min-h-32 w-full border border-slate-200 p-4 outline-none focus:border-[#3b82f6]" placeholder="Mensaje" />
            <label className="mb-4 flex cursor-pointer items-center justify-center gap-3 border border-dashed border-slate-300 p-4 text-sm font-semibold text-slate-500 transition hover:border-[#3b82f6] hover:text-[#1a365d]">
              <FileUp size={20} /> Adjuntar archivo / CV
              <input type="file" accept=".pdf,.doc,.docx,.jpg,.jpeg,.png" className="hidden" />
            </label>
            <button className="w-full bg-[#1a365d] py-5 text-[11px] font-black uppercase tracking-[0.28em] text-white transition hover:bg-[#3b82f6]">Enviar consulta</button>
          </form>
        </div>
      </section>

      <footer className="bg-white py-12 text-[#1a365d] border-t border-slate-100">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[280px_1fr] lg:px-10 items-center">
          <div>
            <Logo compact />
            <p className="mt-3 max-w-xs text-sm font-medium leading-relaxed text-slate-500">Mantenimiento edilicio, outsourcing técnico e infraestructura para empresas.</p>
          </div>
          <div className="grid gap-7 text-left sm:grid-cols-3 lg:text-right">
            <div><p className="text-[10px] font-black uppercase tracking-[0.32em] text-slate-400">Teléfono</p><p className="mt-2 text-base md:text-lg font-black">{phone}</p></div>
            <div><p className="text-[10px] font-black uppercase tracking-[0.32em] text-slate-400">Mail</p><p className="mt-2 text-base md:text-lg font-black break-words">{contactEmail}</p></div>
            <div><p className="text-[10px] font-black uppercase tracking-[0.32em] text-slate-400">Web</p><p className="mt-2 text-base md:text-lg font-black break-words">aaltomantenimiento.com.ar</p></div>
          </div>
        </div>
        <div className="mx-auto mt-10 max-w-7xl border-t border-slate-100 px-6 pt-7 text-[10px] font-black uppercase tracking-[0.35em] text-slate-400 lg:px-10">
          © {new Date().getFullYear()} Aalto Mantenimiento · Mantenimiento · Outsourcing · Infraestructura
        </div>
      </footer>

      <a href={whatsappHref} target="_blank" rel="noreferrer" aria-label="WhatsApp AALTO" className="fixed bottom-5 right-5 z-[70] inline-flex items-center gap-3 rounded-full bg-[#10b981] px-5 py-4 text-[11px] font-black uppercase tracking-[0.24em] text-white shadow-2xl transition hover:-translate-y-1 hover:bg-[#059669]">
        <svg viewBox="0 0 32 32" className="h-6 w-6 fill-current" aria-hidden="true">
          <path d="M16.03 3.2A12.7 12.7 0 0 0 5.12 22.38L3.7 28.8l6.55-1.55A12.7 12.7 0 1 0 16.03 3.2Zm0 2.35a10.34 10.34 0 0 1 8.78 15.8 10.34 10.34 0 0 1-13.96 3.62l-.46-.25-3.63.86.79-3.55-.3-.49A10.34 10.34 0 0 1 16.03 5.55Zm-4.3 5.33c-.24 0-.62.09-.95.45-.32.36-1.25 1.22-1.25 2.98s1.28 3.46 1.46 3.7c.18.24 2.48 3.96 6.1 5.38 3.02 1.18 3.64.94 4.3.88.66-.06 2.12-.86 2.42-1.7.3-.83.3-1.55.21-1.7-.09-.15-.33-.24-.69-.42-.36-.18-2.12-1.05-2.45-1.16-.33-.12-.57-.18-.81.18-.24.36-.93 1.16-1.14 1.4-.21.24-.42.27-.78.09-.36-.18-1.52-.56-2.89-1.78-1.07-.95-1.79-2.13-2-2.49-.21-.36-.02-.55.16-.73.16-.16.36-.42.54-.63.18-.21.24-.36.36-.6.12-.24.06-.45-.03-.63-.09-.18-.81-1.95-1.11-2.67-.29-.7-.59-.6-.81-.61h-.69Z" />
        </svg>
        WhatsApp
      </a>
    </main>
  );
}
