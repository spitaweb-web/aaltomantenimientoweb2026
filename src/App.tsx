/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useState } from 'react';
import {
  Briefcase,
  CheckCircle2,
  ChevronRight,
  Construction,
  FileUp,
  Globe,
  Hammer,
  Mail,
  Menu,
  Phone,
  Send,
  Thermometer,
  Users,
  X,
  Zap,
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

type LogoProps = {
  className?: string;
  scrolled?: boolean;
  isWhite?: boolean;
  size?: 'sm' | 'md' | 'lg';
};

const Logo = ({ className = '', scrolled = false, isWhite = false, size = 'md' }: LogoProps) => {
  const symbolSize = size === 'sm' ? 'w-10 md:w-12' : size === 'md' ? 'w-14 md:w-20' : 'w-24 md:w-32';
  const titleSize = size === 'sm' ? 'text-2xl md:text-3xl' : size === 'md' ? 'text-3xl md:text-4xl' : 'text-5xl md:text-7xl';
  const subSize = size === 'sm' ? 'text-[7px] md:text-[8px]' : size === 'md' ? 'text-[9px] md:text-[11px]' : 'text-[13px] md:text-[15px]';

  const darkBlue = '#1a365d';
  const lightBlue = '#4299e1';
  const subColor = isWhite ? 'text-white/90' : scrolled ? 'text-slate-600' : 'text-white/90';
  const aaltoColor = isWhite ? 'text-white' : scrolled ? 'text-[#111827]' : 'text-white';

  return (
    <div className={`flex items-center ${className}`}>
      <div className={`${symbolSize} h-auto mr-4 shrink-0`}>
        <svg viewBox="0 0 100 70" className="w-full h-full" aria-hidden="true">
          <path d="M35 5 L5 65 L22 65 L44 20 L55 45 L65 35 L50 5 Z" fill={isWhite ? 'white' : darkBlue} />
          <path
            d="M50 5 L65 35 L75 25 L95 65 L78 65 L65 40 L55 60 L45 50 L50 5 Z"
            fill={isWhite ? 'white' : lightBlue}
            opacity={isWhite ? 0.82 : 1}
          />
        </svg>
      </div>
      <div className="flex flex-col">
        <span className={`${titleSize} font-bold leading-none tracking-tighter ${aaltoColor}`}>aalto</span>
        <span className={`${subSize} font-bold tracking-[0.42em] ${subColor} mt-1 uppercase`}>Mantenimiento</span>
      </div>
    </div>
  );
};

const clientLogos = [
  { name: 'Coca Cola', domain: 'coca-cola.com' },
  { name: 'Halliburton', domain: 'halliburton.com' },
  { name: 'Unilever', domain: 'unilever.com' },
  { name: 'Hotel Park Hyatt Mendoza', domain: 'hyatt.com' },
  { name: 'Bodega Salentein', domain: 'bodegasalentein.com' },
  { name: 'Hotel Rosell Boher Lodge', domain: 'rosellboher.com' },
  { name: 'Bodega Cheval des Andes', domain: 'chevaldesandes.com' },
  { name: 'Supermercado Mayorista Yaguar', domain: 'yaguar.com.ar' },
  { name: 'Bodega Chandon', domain: 'chandon.com.ar' },
  { name: 'Neverland', domain: 'neverland.com.ar' },
  { name: 'Levis', domain: 'levi.com' },
  { name: 'Bodega Fecovita', domain: 'fecovita.com' },
  { name: 'Bodega Luigi Bosca', domain: 'luigibosca.com' },
  { name: 'Bodega Renacer', domain: 'bodegarenacer.com.ar' },
  { name: 'Famiq', domain: 'famiq.com.ar' },
];

const specialities = [
  {
    title: 'Obra Civil',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=1400',
    desc: 'Intervenciones edilicias, terminaciones, reparación y mantenimiento de infraestructura.',
    icon: Construction,
  },
  {
    title: 'Instalaciones',
    image: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&q=80&w=1400',
    desc: 'Soporte técnico para instalaciones eléctricas, tableros, iluminación y mantenimiento general.',
    icon: Zap,
  },
  {
    title: 'Carpintería',
    image: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&q=80&w=1400',
    desc: 'Mobiliario, aberturas, ajustes y soluciones de carpintería técnica para empresas.',
    icon: Hammer,
  },
  {
    title: 'Refrigeración',
    image: 'https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&q=80&w=1400',
    desc: 'Mantenimiento de climatización, refrigeración y sistemas críticos de temperatura.',
    icon: Thermometer,
  },
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen((current) => !current);

  const navLinks = [
    { name: 'Nosotros', href: '#nosotros' },
    { name: 'Servicios', href: '#servicios' },
    { name: 'Outsourcing', href: '#outsourcing' },
    { name: 'Clientes', href: '#clientes' },
    { name: 'Enviar CV', href: '#contacto' },
    { name: 'Contacto', href: '#contacto' },
  ];

  const contactInfo = {
    email: 'aalto.mza@gmail.com',
    phone: '+54 261 471 5133',
    domain: 'aaltomantenimiento.com.ar',
  };

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-blue-100 scroll-smooth">
      <nav
        className={`fixed top-0 left-0 right-0 z-[80] transition-all duration-500 ${
          scrolled ? 'py-3 bg-white shadow-md border-b border-slate-100' : 'py-5 lg:py-7 bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-12 flex justify-between items-center">
          <button className="cursor-pointer scale-95 sm:scale-100 origin-left" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <Logo scrolled={scrolled} />
          </button>

          <div className="hidden lg:flex items-center gap-8 xl:gap-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-[11px] font-bold uppercase tracking-[0.24em] transition-all hover:text-[#3b82f6] ${
                  scrolled ? 'text-[#1a365d]' : 'text-white'
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          <button onClick={toggleMenu} className={`lg:hidden p-2 transition-colors ${scrolled ? 'text-[#1a365d]' : 'text-white'}`}>
            <Menu size={30} />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={toggleMenu}
              className="fixed inset-0 bg-slate-900/80 backdrop-blur-md z-[90]"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-full max-w-sm bg-white z-[100] flex flex-col shadow-2xl"
            >
              <div className="p-8 flex justify-between items-center border-b border-slate-100">
                <Logo scrolled size="sm" />
                <button onClick={toggleMenu} className="p-2 text-[#1a365d]">
                  <X size={32} />
                </button>
              </div>
              <div className="flex-1 py-10 px-10 flex flex-col gap-8">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={toggleMenu}
                    className="text-base font-bold text-[#1a365d] uppercase tracking-[0.2em] border-b border-slate-100 pb-4 hover:text-[#3b82f6] transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <section className="relative min-h-screen w-full flex items-center bg-[#071529] overflow-hidden pt-28 pb-10">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-[#071529]/95 via-[#071529]/72 to-[#071529]/18 z-10" />
          <img
            src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=85&w=2200"
            alt="Infraestructura corporativa"
            className="absolute inset-0 w-full h-full object-cover opacity-75"
            referrerPolicy="no-referrer"
          />
        </div>

        <div className="container mx-auto px-6 lg:px-12 relative z-30 grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-8 max-w-6xl">
            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9 }}
              className="text-5xl sm:text-7xl md:text-8xl xl:text-[8.5rem] font-bold text-white leading-[0.9] tracking-tighter uppercase mb-8"
            >
              Cuidamos su <br className="hidden sm:block" /> infraestructura.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.15 }}
              className="text-xl md:text-2xl text-white/80 font-light leading-relaxed max-w-4xl mb-10"
            >
              Mantenimiento, personal externo y soluciones técnicas para empresas que necesitan continuidad operativa, respuesta profesional y control en cada intervención.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.25 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a href="#servicios" className="px-10 py-5 bg-[#3b82f6] text-white font-bold uppercase tracking-[0.28em] text-[11px] text-center hover:bg-[#2b6cb0] transition-all">
                Ver servicios
              </a>
              <a href="#contacto" className="px-10 py-5 border border-white/35 text-white font-bold uppercase tracking-[0.28em] text-[11px] text-center hover:bg-white hover:text-[#1a365d] transition-all">
                Enviar consulta / CV
              </a>
            </motion.div>
          </div>

          <div className="lg:col-span-4 grid gap-4 md:grid-cols-2 lg:grid-cols-1 lg:self-end">
            {['Bodegas', 'Hoteles', 'Industrias', 'Centros comerciales'].map((sector) => (
              <div key={sector} className="bg-white/10 backdrop-blur-md border border-white/15 px-6 py-5">
                <p className="text-[9px] text-white/45 uppercase tracking-[0.35em] font-bold mb-2">Sector</p>
                <p className="text-white font-bold uppercase tracking-widest text-sm">{sector}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="nosotros" className="py-20 md:py-28 lg:py-36 bg-white overflow-hidden">
        <div className="container mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <div className="space-y-8">
            <span className="text-[#3b82f6] font-bold uppercase tracking-[0.38em] text-[11px]">Trayectoria institucional</span>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-[#1a365d] uppercase tracking-tighter leading-none">
              Servicio técnico <br /> con presencia.
            </h2>
            <div className="space-y-5 text-slate-600 leading-relaxed text-lg md:text-xl font-light max-w-2xl">
              <p>
                <strong className="text-slate-900 font-bold">AALTO Mantenimiento</strong> acompaña a organizaciones que necesitan sostener su infraestructura sin perder foco operativo.
              </p>
              <p>
                Trabajamos con una lógica simple: diagnóstico claro, ejecución ordenada y seguimiento responsable. Menos fricción, más continuidad.
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/5] bg-slate-100 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1560250056-07ba64664864?auto=format&fit=crop&q=80&w=1400"
                alt="Equipo corporativo de mantenimiento"
                className="w-full h-full object-cover grayscale-[20%] brightness-95"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="servicios" className="py-20 md:py-28 lg:py-36 bg-slate-50">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-16 md:mb-20">
            <span className="text-[#3b82f6] font-bold uppercase tracking-[0.38em] text-[11px] mb-5 block">Especialidades</span>
            <h2 className="text-4xl md:text-6xl font-bold text-[#1a365d] uppercase tracking-tighter">Servicios especializados</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto mb-20">
            <div className="bg-white border border-slate-100 p-8 md:p-14 flex flex-col items-center text-center shadow-sm">
              <div className="w-20 h-20 rounded-full bg-[#1a365d] flex items-center justify-center mb-8">
                <Construction size={38} className="text-white" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-[#1a365d] uppercase tracking-tighter mb-6">Mantenimiento edilicio</h3>
              <p className="text-slate-500 font-light leading-relaxed text-base md:text-lg max-w-md">
                Gestión preventiva y correctiva para edificios, plantas, hoteles, bodegas, comercios e infraestructura corporativa.
              </p>
            </div>

            <div className="bg-[#1a365d] p-8 md:p-14 flex flex-col items-center text-center shadow-xl">
              <div className="w-20 h-20 rounded-full bg-white/10 flex items-center justify-center mb-8">
                <Users size={38} className="text-white" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white uppercase tracking-tighter mb-6">Personal externo / outsourcing</h3>
              <p className="text-white/70 font-light leading-relaxed text-base md:text-lg max-w-md mb-8">
                Provisión de perfiles técnicos para integrarse a su operación con supervisión, criterio y continuidad.
              </p>
              <a href="#outsourcing" className="px-8 py-4 bg-white text-[#1a365d] font-bold uppercase tracking-[0.3em] text-[11px] hover:bg-[#3b82f6] hover:text-white transition-all">
                Saber más
              </a>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {specialities.map((item) => {
              const Icon = item.icon;
              return (
                <article key={item.title} className="bg-white border border-slate-100 overflow-hidden shadow-sm group">
                  <div className="aspect-[4/3] overflow-hidden bg-slate-200">
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
                  </div>
                  <div className="p-6 space-y-4">
                    <Icon size={24} className="text-[#3b82f6]" />
                    <h4 className="text-lg font-bold text-[#1a365d] uppercase tracking-tight">{item.title}</h4>
                    <p className="text-sm text-slate-500 leading-relaxed font-light">{item.desc}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="outsourcing" className="py-20 md:py-28 lg:py-36 bg-white border-b border-slate-100">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mb-16">
            <span className="text-[#3b82f6] font-bold uppercase tracking-[0.38em] text-[11px] mb-5 block">Unidad de personal externo</span>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-[#1a365d] uppercase tracking-tighter leading-none mb-8">Outsourcing técnico</h2>
            <p className="text-xl md:text-2xl text-slate-600 font-light leading-relaxed">
              Una solución para empresas que necesitan sumar personal técnico sin desordenar su operación ni perder control de calidad.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {[
              { title: 'Integración operativa', text: 'Perfiles técnicos alineados a las normas, horarios y dinámica interna de cada empresa.', icon: Users },
              { title: 'Un solo interlocutor', text: 'Coordinación centralizada para simplificar seguimiento, reemplazos y reportes.', icon: Briefcase },
              { title: 'Control y continuidad', text: 'Supervisión, cumplimiento y respuesta ordenada para reducir fricción interna.', icon: CheckCircle2 },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="p-8 bg-slate-50 border border-slate-100 space-y-5">
                  <div className="w-12 h-12 bg-[#1a365d] flex items-center justify-center">
                    <Icon size={24} className="text-white" />
                  </div>
                  <h4 className="text-lg font-bold text-[#1a365d] uppercase tracking-tight">{item.title}</h4>
                  <p className="text-sm text-slate-500 leading-relaxed font-light">{item.text}</p>
                </div>
              );
            })}
          </div>

          <div className="bg-[#1a365d] p-8 md:p-14 text-white flex flex-col lg:flex-row justify-between gap-10 items-start lg:items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold uppercase tracking-tight mb-4">¿Necesita sumar personal técnico?</h3>
              <p className="text-white/70 font-light max-w-2xl">Coordinamos perfiles, condiciones y alcance operativo según el requerimiento de su empresa.</p>
            </div>
            <a href="#contacto" className="px-8 py-5 bg-[#3b82f6] text-white font-bold uppercase tracking-[0.3em] text-[11px] hover:bg-white hover:text-[#1a365d] transition-all flex items-center gap-3">
              Consultar <ChevronRight size={16} />
            </a>
          </div>
        </div>
      </section>

      <section id="clientes" className="py-20 md:py-28 lg:py-36 bg-white overflow-hidden">
        <div className="container mx-auto px-6 lg:px-12 mb-14">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-[#3b82f6] font-bold uppercase tracking-[0.38em] text-[11px] mb-5 block">Clientes y referencias</span>
            <h2 className="text-3xl md:text-5xl font-bold text-[#1a365d] uppercase tracking-tighter">Empresas que confían en Aalto</h2>
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-y-0 left-0 w-24 md:w-40 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-24 md:w-40 bg-gradient-to-l from-white to-transparent z-10" />
          <div className="flex overflow-hidden">
            <div className="flex gap-16 md:gap-24 items-center animate-marquee-slow" style={{ width: 'fit-content' }}>
              {[...clientLogos, ...clientLogos].map((client, idx) => (
                <div key={`${client.name}-${idx}`} className="w-[230px] h-[130px] flex items-center justify-center grayscale opacity-55 hover:opacity-100 hover:grayscale-0 transition-all duration-700 shrink-0">
                  <img
                    src={`https://logo.clearbit.com/${client.domain}`}
                    alt={client.name}
                    className="max-h-20 max-w-[190px] object-contain"
                    referrerPolicy="no-referrer"
                    onError={(event) => {
                      const target = event.target as HTMLImageElement;
                      target.style.display = 'none';
                      const parent = target.parentElement;
                      if (parent && !parent.querySelector('.fallback-text')) {
                        const text = document.createElement('span');
                        text.className = 'fallback-text text-[13px] font-bold text-slate-400 uppercase tracking-[0.25em] text-center leading-relaxed';
                        text.innerText = client.name;
                        parent.appendChild(text);
                      }
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contacto" className="py-20 md:py-28 lg:py-36 bg-slate-900 text-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-start">
            <div className="space-y-10">
              <div className="space-y-6">
                <span className="text-[#3b82f6] font-bold uppercase tracking-[0.5em] text-[11px]">Contacto</span>
                <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold uppercase tracking-tighter">Hablemos de tu proyecto</h2>
                <p className="text-white/60 text-lg md:text-xl font-light leading-relaxed max-w-2xl">
                  Decinos qué servicio o solución necesita tu empresa y nuestro equipo te va a asesorar. ¿Querés sumarte a AALTO equipo? Adjuntá tu currículum y conocé nuestras oportunidades laborales.
                </p>
              </div>

              <div className="grid sm:grid-cols-3 gap-6">
                {[
                  { label: 'Mail', value: contactInfo.email, icon: Mail },
                  { label: 'Teléfono', value: contactInfo.phone, icon: Phone },
                  { label: 'Web', value: contactInfo.domain, icon: Globe },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.label} className="bg-white/5 p-6 border border-white/10">
                      <Icon size={22} className="text-[#3b82f6] mb-5" />
                      <p className="text-[10px] font-bold text-white/35 uppercase tracking-widest mb-2">{item.label}</p>
                      <p className="text-sm font-medium break-words">{item.value}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="bg-white p-7 md:p-12 lg:p-14 shadow-2xl">
              <h3 className="text-2xl font-bold text-[#1a365d] uppercase tracking-tight mb-9">Enviar requerimiento / CV</h3>
              <form className="space-y-7" onSubmit={(event) => event.preventDefault()}>
                <div className="grid sm:grid-cols-2 gap-7">
                  <div className="space-y-2">
                    <label className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">Nombre completo</label>
                    <input type="text" className="w-full px-0 py-4 bg-transparent border-b border-slate-200 text-slate-900 focus:outline-none focus:border-[#3b82f6] transition-colors" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">Empresa / Organización</label>
                    <input type="text" className="w-full px-0 py-4 bg-transparent border-b border-slate-200 text-slate-900 focus:outline-none focus:border-[#3b82f6] transition-colors" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">Email de contacto</label>
                  <input type="email" className="w-full px-0 py-4 bg-transparent border-b border-slate-200 text-slate-900 focus:outline-none focus:border-[#3b82f6] transition-colors" />
                </div>
                <div className="space-y-2">
                  <label className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">Mensaje / consulta</label>
                  <textarea rows={4} className="w-full px-0 py-4 bg-transparent border-b border-slate-200 text-slate-900 focus:outline-none focus:border-[#3b82f6] transition-colors resize-none" />
                </div>
                <label className="flex items-center gap-4 p-5 border border-dashed border-slate-300 text-slate-500 hover:border-[#3b82f6] hover:text-[#1a365d] transition-colors cursor-pointer">
                  <FileUp size={22} className="shrink-0" />
                  <span className="text-sm font-medium">Adjuntar archivo / CV</span>
                  <input type="file" accept=".pdf,.doc,.docx,.jpg,.jpeg,.png" className="hidden" />
                </label>
                <button className="w-full py-6 bg-[#1a365d] text-white text-[11px] font-bold uppercase tracking-[0.35em] hover:bg-[#3b82f6] transition-all flex items-center justify-center gap-4">
                  <Send size={16} />
                  Enviar mensaje
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-white py-16 border-t border-slate-100">
        <div className="container mx-auto px-6 lg:px-12 grid md:grid-cols-3 gap-10 items-center">
          <div className="md:col-span-1">
            <Logo scrolled size="md" />
          </div>
          <div className="md:col-span-2 grid sm:grid-cols-3 gap-8 text-left md:text-right">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-slate-400 mb-2">Teléfono</p>
              <p className="text-lg font-bold text-[#1a365d]">{contactInfo.phone}</p>
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-slate-400 mb-2">Mail</p>
              <p className="text-lg font-bold text-[#1a365d] break-words">{contactInfo.email}</p>
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-slate-400 mb-2">Web</p>
              <p className="text-lg font-bold text-[#1a365d] break-words">{contactInfo.domain}</p>
            </div>
          </div>
        </div>
        <div className="container mx-auto px-6 lg:px-12 mt-12 pt-8 border-t border-slate-100 flex flex-col sm:flex-row justify-between gap-4">
          <p className="text-[10px] text-slate-400 font-bold uppercase tracking-[0.4em]">© {new Date().getFullYear()} Aalto Mantenimiento.</p>
          <p className="text-[10px] text-slate-400 font-bold uppercase tracking-[0.4em]">Mantenimiento · Outsourcing · Infraestructura</p>
        </div>
      </footer>

      <style>{`
        @keyframes marquee-slow {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee-slow {
          animation: marquee-slow 68s linear infinite;
        }
      `}</style>
    </div>
  );
}
