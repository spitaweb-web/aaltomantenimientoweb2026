import { useEffect, useState } from 'react';
import {
  Building2,
  Factory,
  Hotel,
  HeartPulse,
  Mail,
  Menu,
  Phone,
  ShoppingBag,
  Wrench,
  Zap,
  Paintbrush,
  Hammer,
  Snowflake,
  Users,
  CheckCircle2,
  X,
} from 'lucide-react';

const azul = '#0f4f6f';
const azulOscuro = '#0b3551';
const amarillo = '#f2b51d';

const nav = [
  ['Nosotros', 'nosotros'],
  ['Servicios', 'servicios'],
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

const servicios = [
  {
    title: 'Obra civil',
    icon: Building2,
    text: 'Albañilería, construcción en seco, pisos, revestimientos, reparaciones y terminaciones edilicias.',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=1200',
  },
  {
    title: 'Instalaciones',
    icon: Zap,
    text: 'Electricidad, tableros, plomería, mantenimiento preventivo y correctivo de instalaciones críticas.',
    image: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&q=80&w=1200',
  },
  {
    title: 'Pintura y terminaciones',
    icon: Paintbrush,
    text: 'Pintura civil e industrial, revestimientos, señalización y puesta en valor de espacios corporativos.',
    image: 'https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&q=80&w=1200',
  },
  {
    title: 'Herrería y carpintería',
    icon: Hammer,
    text: 'Estructuras metálicas, soldaduras, portones, aberturas, mobiliario técnico y soluciones a medida.',
    image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=1200',
  },
  {
    title: 'Climatización',
    icon: Snowflake,
    text: 'Instalación, mantenimiento y revisión de equipos de aire acondicionado y sistemas de refrigeración.',
    image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=1200',
  },
  {
    title: 'Outsourcing técnico',
    icon: Users,
    text: 'Personal externo calificado para integrarse a la operación de empresas, industrias y centros comerciales.',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22731c9c0f?auto=format&fit=crop&q=80&w=1200',
  },
] as const;

const clientes = [
  'Salentein',
  'Rosell Boher',
  'Trivento',
  'Talca',
  'Yaguar',
  'Chandon',
  'Norton',
  'SMN',
  'Renacer',
  'Luigi Bosca',
];

function go(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
}

function Logo() {
  return (
    <div className="aalto-logo" aria-label="AALTO Mantenimiento">
      <svg viewBox="0 0 100 70" className="h-10 w-14" aria-hidden="true">
        <path d="M35 5 L5 65 L22 65 L44 20 L55 45 L65 35 L50 5 Z" fill={azulOscuro} />
        <path d="M50 5 L65 35 L75 25 L95 65 L78 65 L65 40 L55 60 L45 50 L50 5 Z" fill="#6ca6d9" />
      </svg>
      <div className="leading-none">
        <div className="text-[29px] font-black tracking-[-0.08em] text-slate-950">aalto</div>
        <div className="mt-1 text-[7px] font-black uppercase tracking-[0.42em] text-slate-500">Mantenimiento</div>
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
    <main className="min-h-screen bg-white text-slate-900">
      <header className="fixed left-0 right-0 top-0 z-50 bg-white shadow-sm">
        <div className="mx-auto flex h-[74px] max-w-7xl items-center justify-between px-5 lg:px-8">
          <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="shrink-0 text-left">
            <Logo />
          </button>

          <nav className="hidden items-center gap-7 lg:flex">
            {nav.map(([label, id], index) => (
              <button
                key={id}
                onClick={() => go(id)}
                className="text-[13px] font-semibold text-[#0b3551] transition-colors hover:text-[#0f7da5]"
              >
                {label}
                {index < nav.length - 1 && <span className="ml-7 text-slate-300">|</span>}
              </button>
            ))}
          </nav>

          <button
            onClick={() => go('contacto')}
            className="hidden rounded-full bg-[#0f7da5] px-6 py-3 text-[12px] font-bold text-white transition-colors hover:bg-[#0b3551] lg:inline-flex"
          >
            Cotizá tu proyecto
          </button>

          <button onClick={() => setOpen(true)} className="text-[#0b3551] lg:hidden" aria-label="Abrir menú">
            <Menu size={30} />
          </button>
        </div>
      </header>

      {open && (
        <div className="fixed inset-0 z-[60] bg-white p-7 lg:hidden">
          <div className="mb-10 flex items-center justify-between">
            <Logo />
            <button onClick={() => setOpen(false)} aria-label="Cerrar menú">
              <X size={32} />
            </button>
          </div>
          <div className="flex flex-col gap-6">
            {nav.map(([label, id]) => (
              <button
                key={id}
                onClick={() => {
                  setOpen(false);
                  go(id);
                }}
                className="border-b border-slate-100 pb-4 text-left text-lg font-bold text-[#0b3551]"
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      )}

      <section className="relative flex min-h-[100vh] items-center justify-center overflow-hidden pt-[74px] text-center">
        <img
          src="https://images.unsplash.com/photo-1581092160607-ee22731c9c0f?auto=format&fit=crop&q=80&w=2200"
          alt="Mantenimiento industrial y edilicio"
          className="absolute inset-0 h-full w-full object-cover grayscale"
        />
        <div className="absolute inset-0 bg-black/58" />
        <div className="relative z-10 mx-auto max-w-5xl px-6 pb-32 pt-24">
          <h1 className="text-[42px] font-black leading-[1.02] tracking-[-0.045em] text-white sm:text-6xl lg:text-[76px]">
            Soluciones integrales de mantenimiento edilicio e industrial
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-base font-semibold leading-relaxed text-white sm:text-xl">
            Mantenimiento, obras, instalaciones y soporte técnico para empresas que necesitan continuidad operativa.
          </p>
          <button
            onClick={() => go('contacto')}
            className="mt-8 rounded-md bg-[#f2b51d] px-9 py-4 text-[12px] font-black uppercase tracking-wide text-white shadow-lg transition-transform hover:-translate-y-0.5"
          >
            Cotizá tu proyecto
          </button>
        </div>

        <div className="absolute bottom-[-46px] left-1/2 z-20 w-full max-w-5xl -translate-x-1/2 px-6">
          <div className="grid gap-3 md:grid-cols-5">
            {sectores.map(([label, Icon]) => (
              <button
                key={label}
                onClick={() => go('servicios')}
                className="group flex h-[92px] flex-col items-center justify-center rounded-sm bg-white px-3 text-center shadow-xl transition-transform hover:-translate-y-1"
              >
                <Icon size={28} className="mb-3 text-[#0f7da5]" />
                <span className="text-[12px] font-black uppercase tracking-wide text-[#0b3551]">{label}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-16 pt-24 text-center">
        <div className="mx-auto max-w-4xl px-6">
          <p className="text-xl font-black leading-snug text-[#0f4f6f] sm:text-2xl">
            En AALTO Mantenimiento nos especializamos en soluciones para empresas que necesitan operar sin interrupciones.
          </p>
        </div>
      </section>

      <section className="bg-[#0f7da5] py-20 text-white">
        <div className="mx-auto grid max-w-5xl gap-10 px-6 text-center md:grid-cols-3">
          <div>
            <div className="text-5xl font-black">+4</div>
            <div className="mt-2 text-[13px] font-black uppercase tracking-wide text-[#f2d35b]">Años de trayectoria</div>
          </div>
          <div>
            <div className="text-5xl font-black">+5</div>
            <div className="mt-2 text-[13px] font-black uppercase tracking-wide text-[#f2d35b]">Sectores atendidos</div>
          </div>
          <div>
            <div className="text-5xl font-black">360°</div>
            <div className="mt-2 text-[13px] font-black uppercase tracking-wide text-[#f2d35b]">Mantenimiento integral</div>
          </div>
        </div>
      </section>

      <section id="nosotros" className="bg-white py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <h2 className="text-3xl font-black tracking-[-0.035em] text-[#0f4f6f] sm:text-5xl">Quiénes somos</h2>
            <div className="mt-7 space-y-5 text-[16px] leading-relaxed text-slate-600">
              <p>
                <strong className="font-black text-slate-900">AALTO Mantenimiento</strong> nace como respuesta a la demanda de soluciones integrales para bodegas, hoteles, industrias, centros de salud y espacios comerciales.
              </p>
              <p>
                Nos ocupamos del cuidado técnico de instalaciones y espacios de trabajo para que cada organización pueda concentrarse en su operación principal.
              </p>
              <p className="font-semibold text-[#0b3551]">
                Orden, respuesta y ejecución técnica para empresas que necesitan continuidad.
              </p>
            </div>
          </div>
          <div className="overflow-hidden rounded-sm bg-slate-100 shadow-sm">
            <img
              src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=1200"
              alt="Equipo de mantenimiento"
              className="h-[390px] w-full object-cover grayscale"
            />
          </div>
        </div>
      </section>

      <section id="servicios" className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <h2 className="text-3xl font-black tracking-[-0.035em] text-[#0f4f6f] sm:text-5xl">Servicios especializados</h2>
            <p className="mt-5 text-[17px] font-semibold leading-relaxed text-[#0f4f6f]">
              Proyecto, ejecución y mantenimiento para instalaciones edilicias, comerciales e industriales.
            </p>
          </div>

          <div className="grid gap-0 md:grid-cols-2">
            {servicios.map((servicio, index) => {
              const Icon = servicio.icon;
              const reverse = index % 2 === 1;
              return (
                <article key={servicio.title} className="grid min-h-[360px] md:grid-cols-2">
                  <div className={`${reverse ? 'md:order-2' : ''} flex flex-col justify-center bg-white p-8 lg:p-12`}>
                    <Icon size={30} className="mb-5 text-[#0f7da5]" />
                    <h3 className="text-2xl font-black tracking-[-0.03em] text-[#0f4f6f]">{servicio.title}</h3>
                    <p className="mt-5 text-sm leading-relaxed text-slate-600">{servicio.text}</p>
                    <ul className="mt-6 space-y-2 text-sm text-slate-600">
                      {['Relevamiento técnico', 'Presupuesto por proyecto', 'Ejecución y seguimiento'].map((item) => (
                        <li key={item} className="flex items-center gap-2">
                          <CheckCircle2 size={15} className="text-[#0f7da5]" /> {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <img
                    src={servicio.image}
                    alt={servicio.title}
                    className={`${reverse ? 'md:order-1' : ''} h-full min-h-[280px] w-full object-cover grayscale`}
                  />
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="clientes" className="bg-white py-24">
        <div className="mx-auto max-w-6xl px-6 text-center lg:px-8">
          <h2 className="text-3xl font-black tracking-[-0.035em] text-[#0f4f6f] sm:text-5xl">Empresas que confían en nuestro trabajo</h2>
          <div className="mt-14 grid grid-cols-2 items-center gap-6 sm:grid-cols-3 md:grid-cols-5">
            {clientes.map((cliente) => (
              <div key={cliente} className="flex h-20 items-center justify-center border border-slate-200 bg-white px-4 text-center text-[13px] font-black uppercase tracking-[0.16em] text-slate-500 grayscale">
                {cliente}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contacto" className="bg-[#f2b51d] py-24 text-white">
        <div className="mx-auto max-w-5xl px-6 text-center lg:px-8">
          <h2 className="text-4xl font-black tracking-[-0.035em] sm:text-5xl">Cotizá tu proyecto</h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm font-medium text-white/90">
            Completá el formulario o escribinos por WhatsApp. Nuestro equipo te responderá a la brevedad.
          </p>

          <form onSubmit={(e) => e.preventDefault()} className="mx-auto mt-8 max-w-3xl space-y-3">
            <input className="w-full rounded-full border-0 bg-white px-5 py-3 text-sm text-slate-900 outline-none" placeholder="Nombre y apellido" />
            <input className="w-full rounded-full border-0 bg-white px-5 py-3 text-sm text-slate-900 outline-none" placeholder="Empresa" />
            <input className="w-full rounded-full border-0 bg-white px-5 py-3 text-sm text-slate-900 outline-none" placeholder="Teléfono de contacto" />
            <textarea className="min-h-[110px] w-full rounded-2xl border-0 bg-white px-5 py-3 text-sm text-slate-900 outline-none" placeholder="Consulta / mensaje" />
            <button className="rounded-full border border-white px-10 py-3 text-sm font-bold text-white transition-colors hover:bg-white hover:text-[#0b3551]">Enviar</button>
          </form>

          <div className="mt-12 grid gap-8 text-left text-sm md:grid-cols-3">
            <div>
              <h3 className="mb-3 font-black">Información de contacto</h3>
              <a href="mailto:aalto.mza@gmail.com" className="flex items-center gap-2"><Mail size={15} /> aalto.mza@gmail.com</a>
              <a href="tel:+542614715133" className="mt-2 flex items-center gap-2"><Phone size={15} /> +54 261 471 5133</a>
            </div>
            <div>
              <h3 className="mb-3 font-black">WhatsApp</h3>
              <a href="https://wa.me/542614715133" className="flex items-center gap-2"><Phone size={15} /> +54 261 471 5133</a>
            </div>
            <div>
              <h3 className="mb-3 font-black">Zonas de alcance</h3>
              <p>Mendoza · San Juan · Córdoba · Neuquén</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-[#0b3551] py-7 text-center text-white">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-center gap-4 px-6 lg:flex-row lg:gap-8">
          {nav.map(([label, id]) => (
            <button key={id} onClick={() => go(id)} className="text-[13px] font-medium hover:text-[#f2b51d]">
              {label}
            </button>
          ))}
        </div>
        <p className="mt-5 text-xs text-white/60">AALTO Mantenimiento · Todos los derechos reservados</p>
      </footer>

      <a
        href="https://wa.me/542614715133"
        className="fixed bottom-5 right-5 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-green-500 text-white shadow-xl"
        aria-label="WhatsApp"
      >
        <Phone size={22} />
      </a>
    </main>
  );
}
