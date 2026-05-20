import { useEffect, useState } from 'react';
import { Briefcase, CheckCircle2, ChevronRight, Construction, FileUp, Globe, Hammer, Mail, Menu, Phone, Send, Thermometer, Users, X, Zap } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

type LogoProps = { scrolled?: boolean; size?: 'sm' | 'md' | 'lg'; className?: string };
type ClientLogo = { name: string; alt: string; srcs: string[] };

const contactInfo = {
  email: 'aalto.mza@gmail.com',
  phone: '+54 261 471 5133',
  domain: 'aaltomantenimiento.com.ar',
};

const navLinks = [
  { name: 'Nosotros', href: '#nosotros' },
  { name: 'Especialidades', href: '#servicios' },
  { name: 'Outsourcing', href: '#outsourcing' },
  { name: 'Enviar CV', href: '#contacto' },
  { name: 'Contacto', href: '#contacto' },
];

const sectors = ['Bodegas', 'Hoteles', 'Industrias', 'Centros comerciales'];

const clientLogos: ClientLogo[] = [
  { name: 'Coca Cola', alt: 'Logo Coca Cola', srcs: ['/coca-cola.png?v=20260520', '/01-coca-cola.svg?v=20260520', '/01-coca-cola.png?v=20260520', '/01-coca-cola.webp?v=20260520'] },
  { name: 'Halliburton', alt: 'Logo Halliburton', srcs: ['/Halliburton.png?v=20260520', '/02-halliburton.svg?v=20260520', '/02-halliburton.png?v=20260520', '/02-halliburton.webp?v=20260520'] },
  { name: 'Unilever', alt: 'Logo Unilever', srcs: ['/unilever.png?v=20260520', '/03-unilever.svg?v=20260520', '/03-unilever.png?v=20260520', '/03-unilever.webp?v=20260520'] },
  { name: 'Hotel Park Hyatt Mendoza', alt: 'Logo Hotel Park Hyatt Mendoza', srcs: ['/ParkHyattBlackLogo-640.webp?v=20260520', '/04-park-hyatt-mendoza.svg?v=20260520', '/04-park-hyatt-mendoza.png?v=20260520', '/04-park-hyatt-mendoza.webp?v=20260520'] },
];

const specialities = [
  { title: 'Obra Civil', icon: Construction, image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=82&w=1400', desc: 'Intervenciones edilicias, terminaciones, reparación y mantenimiento de infraestructura.' },
  { title: 'Instalaciones', icon: Zap, image: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&q=82&w=1400', desc: 'Soporte técnico para instalaciones eléctricas, tableros, iluminación y mantenimiento general.' },
  { title: 'Carpintería', icon: Hammer, image: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&q=82&w=1400', desc: 'Mobiliario, aberturas, ajustes y soluciones de carpintería técnica para empresas.' },
  { title: 'Refrigeración', icon: Thermometer, image: 'https://images.unsplash.com/photo-1632910393733-749607610ed7?auto=format&fit=crop&q=82&w=1400', desc: 'Mantenimiento de climatización, refrigeración y sistemas críticos de temperatura.' },
];

function Logo({ scrolled = false, size = 'md', className = '' }: LogoProps) {
  const symbolSize = size === 'sm' ? 'w-10 md:w-12' : size === 'md' ? 'w-14 md:w-20' : 'w-24 md:w-32';
  const titleSize = size === 'sm' ? 'text-2xl md:text-3xl' : size === 'md' ? 'text-3xl md:text-4xl' : 'text-5xl md:text-7xl';
  const subSize = size === 'sm' ? 'text-[7px] md:text-[8px]' : size === 'md' ? 'text-[9px] md:text-[11px]' : 'text-[13px] md:text-[15px]';
  const aaltoColor = scrolled ? 'text-[#111827]' : 'text-white';
  const subColor = scrolled ? 'text-slate-600' : 'text-white/90';

  return (
    <div className={`flex items-center ${className}`}>
      <div className={`${symbolSize} mr-3 md:mr-4 shrink-0`}>
        <svg viewBox="0 0 100 70" className="w-full h-full" aria-hidden="true">
          <path d="M35 5 L5 65 L22 65 L44 20 L55 45 L65 35 L50 5 Z" fill="#1a365d" />
          <path d="M50 5 L65 35 L75 25 L95 65 L78 65 L65 40 L55 60 L45 50 L50 5 Z" fill="#4299e1" />
        </svg>
      </div>
      <div className="flex flex-col">
        <span className={`${titleSize} font-bold leading-none tracking-tighter ${aaltoColor}`}>aalto</span>
        <span className={`${subSize} font-bold tracking-[0.42em] ${subColor} mt-1 uppercase`}>Mantenimiento</span>
      </div>
    </div>
  );
}

function ClientLogoItem({ client }: { client: ClientLogo }) {
  const [srcIndex, setSrcIndex] = useState(0);
  const src = client.srcs[srcIndex];

  return (
    <article className="h-28 md:h-36 flex items-center justify-center px-3 md:px-5">
      {src ? (
        <img
          src={src}
          alt={client.alt}
          className="block w-full max-w-[250px] md:max-w-[290px] max-h-20 md:max-h-24 object-contain mix-blend-multiply opacity-95 transition duration-300 hover:opacity-100"
          loading="lazy"
          decoding="async"
          onError={() => setSrcIndex((current) => current + 1)}
        />
      ) : (
        <span className="text-center text-base md:text-lg font-black uppercase tracking-[0.12em] text-[#1a365d] leading-tight">{client.name}</span>
      )}
    </article>
  );
}

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-blue-100 scroll-smooth">
      <nav className={`fixed top-0 left-0 right-0 z-[80] transition-all duration-500 ${scrolled ? 'py-3 bg-white shadow-md border-b border-slate-100' : 'py-4 lg:py-5 bg-transparent'}`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-12 flex justify-between items-center">
          <button className="cursor-pointer origin-left" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <Logo scrolled={scrolled} size="md" />
          </button>
          <div className="hidden lg:flex items-center gap-7 xl:gap-9">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className={`text-[11px] font-bold uppercase tracking-[0.22em] transition-all hover:text-[#3b82f6] ${scrolled ? 'text-[#1a365d]' : 'text-white'}`}>
                {link.name}
              </a>
            ))}
          </div>
          <button onClick={() => setIsMenuOpen(true)} className={`lg:hidden p-2 transition-colors ${scrolled ? 'text-[#1a365d]' : 'text-white'}`}>
            <Menu size={30} />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setIsMenuOpen(false)} className="fixed inset-0 bg-slate-900/80 backdrop-blur-md z-[90]" />
            <motion.div initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }} transition={{ type: 'spring', damping: 25, stiffness: 200 }} className="fixed top-0 right-0 bottom-0 w-full max-w-sm bg-white z-[100] flex flex-col shadow-2xl">
              <div className="p-8 flex justify-between items-center border-b border-slate-100">
                <Logo scrolled size="sm" />
                <button onClick={() => setIsMenuOpen(false)} className="p-2 text-[#1a365d]"><X size={32} /></button>
              </div>
              <div className="flex-1 py-10 px-10 flex flex-col gap-8">
                {navLinks.map((link) => (
                  <a key={link.name} href={link.href} onClick={() => setIsMenuOpen(false)} className="text-base font-bold text-[#1a365d] uppercase tracking-[0.2em] border-b border-slate-100 pb-4 hover:text-[#3b82f6] transition-colors">
                    {link.name}
                  </a>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <section className="relative min-h-screen w-full flex items-center bg-[#071529] overflow-hidden pt-28 pb-12 lg:pb-10">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-[#061528]/72 via-[#061528]/38 to-[#061528]/8 z-10" />
          <div className="absolute inset-0 bg-[#1f65d8]/10 mix-blend-screen z-20" />
          <img src="/aalto-mantenimiento.webp?v=20260520" alt="Infraestructura corporativa Aalto" className="absolute inset-0 w-full h-full object-cover opacity-100" />
        </div>
        <div className="container mx-auto px-6 lg:px-12 relative z-30">
          <div className="max-w-7xl lg:pl-8 xl:pl-14 pt-8 lg:pt-16 text-center lg:text-left">
            <motion.h1 initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }} className="text-5xl sm:text-7xl md:text-8xl xl:text-[7.4rem] 2xl:text-[8.5rem] font-bold text-white leading-[0.88] tracking-tighter uppercase mb-7 drop-shadow-[0_18px_40px_rgba(0,0,0,0.32)]">
              Cuidamos su <br className="hidden sm:block" /><span className="text-[#3b82f6]">infraestructura.</span>
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.15 }} className="text-lg md:text-xl xl:text-2xl text-white/90 font-light leading-relaxed max-w-5xl mx-auto lg:mx-0 mb-8">
              Mantenimiento, personal externo y soluciones técnicas para empresas que necesitan continuidad operativa, respuesta profesional y control en cada intervención.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.25 }} className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <a href="#servicios" className="px-10 py-5 bg-[#3b82f6] text-white font-bold uppercase tracking-[0.28em] text-[11px] text-center hover:bg-[#2b6cb0] transition-all shadow-xl shadow-blue-950/20">Ver servicios</a>
              <a href="#contacto" className="px-10 py-5 border border-white/35 text-white font-bold uppercase tracking-[0.28em] text-[11px] text-center hover:bg-white hover:text-[#1a365d] transition-all">Enviar consulta / CV</a>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.35 }} className="grid grid-cols-2 lg:grid-cols-4 gap-3 max-w-5xl mx-auto lg:mx-0">
              {sectors.map((sector) => (
                <div key={sector} className="bg-white/10 backdrop-blur-md border border-white/15 px-5 py-4 min-h-[78px] flex flex-col justify-center">
                  <p className="text-[9px] text-white/48 uppercase tracking-[0.35em] font-bold mb-2">Sector</p>
                  <p className="text-white font-bold uppercase tracking-widest text-xs md:text-sm">{sector}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <section id="nosotros" className="py-16 md:py-20 lg:py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-10 lg:gap-20 items-center">
          <div className="space-y-6">
            <span className="text-[#3b82f6] font-bold uppercase tracking-[0.38em] text-[11px]">Trayectoria institucional</span>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-[#1a365d] uppercase tracking-tighter leading-none">Servicio técnico <br /> con presencia.</h2>
            <div className="space-y-4 text-slate-600 leading-relaxed text-lg md:text-xl font-light max-w-2xl">
              <p><strong className="text-slate-900 font-bold">AALTO Mantenimiento</strong> acompaña a organizaciones que necesitan sostener su infraestructura sin perder foco operativo.</p>
              <p>Trabajamos con una lógica simple: diagnóstico claro, ejecución ordenada y seguimiento responsable. Menos fricción, más continuidad.</p>
            </div>
          </div>
          <div className="aspect-[4/5] bg-slate-100 overflow-hidden">
            <img src="https://images.unsplash.com/photo-1560250056-07ba64664864?auto=format&fit=crop&q=82&w=1400" alt="Equipo corporativo de mantenimiento" className="w-full h-full object-cover grayscale-[12%] brightness-95" />
          </div>
        </div>
      </section>

      <section id="servicios" className="py-16 md:py-20 lg:py-24 bg-slate-50">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-12 md:mb-14">
            <span className="text-[#3b82f6] font-bold uppercase tracking-[0.38em] text-[11px] mb-4 block">Especialidades</span>
            <h2 className="text-4xl md:text-6xl font-bold text-[#1a365d] uppercase tracking-tighter">Servicios especializados</h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-0 max-w-6xl mx-auto mb-16 border border-slate-200 bg-white">
            <div className="p-8 md:p-12 flex flex-col items-center text-center border-b lg:border-b-0 lg:border-r border-slate-200">
              <div className="w-20 h-20 rounded-full bg-[#1a365d] flex items-center justify-center mb-7"><Construction size={36} className="text-white" /></div>
              <h3 className="text-2xl md:text-3xl font-bold text-[#1a365d] uppercase tracking-tighter mb-5">Mantenimiento edilicio</h3>
              <p className="text-slate-500 font-light leading-relaxed text-base md:text-lg max-w-md">Gestión preventiva y correctiva para edificios, plantas, hoteles, bodegas, comercios e infraestructura corporativa.</p>
            </div>
            <div className="bg-[#1a365d] p-8 md:p-12 flex flex-col items-center text-center shadow-xl">
              <div className="w-20 h-20 rounded-full bg-white/10 flex items-center justify-center mb-7"><Users size={36} className="text-white" /></div>
              <h3 className="text-2xl md:text-3xl font-bold text-white uppercase tracking-tighter mb-5">Personal externo / outsourcing</h3>
              <p className="text-white/70 font-light leading-relaxed text-base md:text-lg max-w-md mb-7">Provisión de perfiles técnicos para integrarse a su operación con supervisión, criterio y continuidad.</p>
              <a href="#outsourcing" className="px-8 py-4 bg-white text-[#1a365d] font-bold uppercase tracking-[0.3em] text-[11px] hover:bg-[#3b82f6] hover:text-white transition-all">Saber más</a>
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {specialities.map((item) => {
              const Icon = item.icon;
              return (
                <article key={item.title} className="bg-white border border-slate-100 overflow-hidden shadow-sm group">
                  <div className="aspect-[4/3] overflow-hidden bg-slate-200"><img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" /></div>
                  <div className="p-6 space-y-4"><Icon size={24} className="text-[#3b82f6]" /><h4 className="text-lg font-bold text-[#1a365d] uppercase tracking-tight">{item.title}</h4><p className="text-sm text-slate-500 leading-relaxed font-light">{item.desc}</p></div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="outsourcing" className="py-16 md:py-20 lg:py-24 bg-white border-b border-slate-100">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mb-12"><span className="text-[#3b82f6] font-bold uppercase tracking-[0.38em] text-[11px] mb-4 block">Unidad de personal externo</span><h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-[#1a365d] uppercase tracking-tighter leading-none mb-6">Outsourcing técnico</h2><p className="text-xl md:text-2xl text-slate-600 font-light leading-relaxed">Una solución para empresas que necesitan sumar personal técnico sin desordenar su operación ni perder control de calidad.</p></div>
          <div className="grid lg:grid-cols-3 gap-6 mb-12">
            {[
              { title: 'Integración operativa', text: 'Perfiles técnicos alineados a las normas, horarios y dinámica interna de cada empresa.', icon: Users },
              { title: 'Un solo interlocutor', text: 'Coordinación centralizada para simplificar seguimiento, reemplazos y reportes.', icon: Briefcase },
              { title: 'Control y continuidad', text: 'Supervisión, cumplimiento y respuesta ordenada para reducir fricción interna.', icon: CheckCircle2 },
            ].map((item) => { const Icon = item.icon; return <div key={item.title} className="p-8 bg-slate-50 border border-slate-100 space-y-5"><div className="w-12 h-12 bg-[#1a365d] flex items-center justify-center"><Icon size={24} className="text-white" /></div><h4 className="text-lg font-bold text-[#1a365d] uppercase tracking-tight">{item.title}</h4><p className="text-sm text-slate-500 leading-relaxed font-light">{item.text}</p></div>; })}
          </div>
          <div className="bg-[#1a365d] p-8 md:p-12 text-white flex flex-col lg:flex-row justify-between gap-8 items-start lg:items-center"><div><h3 className="text-2xl md:text-3xl font-bold uppercase tracking-tight mb-4">¿Necesita sumar personal técnico?</h3><p className="text-white/70 font-light max-w-2xl">Coordinamos perfiles, condiciones y alcance operativo según el requerimiento de su empresa.</p></div><a href="#contacto" className="px-8 py-5 bg-[#3b82f6] text-white font-bold uppercase tracking-[0.3em] text-[11px] hover:bg-white hover:text-[#1a365d] transition-all flex items-center gap-3">Consultar <ChevronRight size={16} /></a></div>
        </div>
      </section>

      <section id="clientes" className="py-16 md:py-20 lg:py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-6 lg:px-12"><div className="text-center max-w-3xl mx-auto mb-10 md:mb-12"><span className="text-[#3b82f6] font-bold uppercase tracking-[0.38em] text-[11px] mb-4 block">Empresas clientes</span><h2 className="text-3xl md:text-5xl font-bold text-[#1a365d] uppercase tracking-tighter">Empresas que confían en Aalto</h2></div><div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-x-8 md:gap-x-14 gap-y-8 items-center">{clientLogos.map((client) => <ClientLogoItem key={client.name} client={client} />)}</div></div>
      </section>

      <section id="contacto" className="py-16 md:py-20 lg:py-24 bg-slate-900 text-white">
        <div className="container mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          <div className="space-y-8"><div className="space-y-5"><span className="text-[#3b82f6] font-bold uppercase tracking-[0.5em] text-[11px]">Contacto</span><h2 className="text-4xl md:text-6xl lg:text-7xl font-bold uppercase tracking-tighter">Hablemos de tu proyecto</h2><p className="text-white/60 text-lg md:text-xl font-light leading-relaxed max-w-2xl">Decinos qué servicio o solución necesita tu empresa y nuestro equipo te va a asesorar. ¿Querés sumarte a AALTO equipo? Adjuntá tu currículum y conocé nuestras oportunidades laborales.</p></div><div className="grid sm:grid-cols-3 gap-5">{[{ label: 'Mail', value: contactInfo.email, icon: Mail }, { label: 'Teléfono', value: contactInfo.phone, icon: Phone }, { label: 'Web', value: contactInfo.domain, icon: Globe }].map((item) => { const Icon = item.icon; return <div key={item.label} className="bg-white/5 p-6 border border-white/10"><Icon size={22} className="text-[#3b82f6] mb-5" /><p className="text-[10px] font-bold text-white/35 uppercase tracking-widest mb-2">{item.label}</p><p className="text-sm font-medium break-words">{item.value}</p></div>; })}</div></div>
          <div className="bg-white p-7 md:p-12 lg:p-14 shadow-2xl"><h3 className="text-2xl font-bold text-[#1a365d] uppercase tracking-tight mb-9">Enviar requerimiento / CV</h3><form className="space-y-7" onSubmit={(event) => event.preventDefault()}><div className="grid sm:grid-cols-2 gap-7"><div className="space-y-2"><label className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">Nombre completo</label><input type="text" className="w-full px-0 py-4 bg-transparent border-b border-slate-200 text-slate-900 focus:outline-none focus:border-[#3b82f6] transition-colors" /></div><div className="space-y-2"><label className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">Empresa / Organización</label><input type="text" className="w-full px-0 py-4 bg-transparent border-b border-slate-200 text-slate-900 focus:outline-none focus:border-[#3b82f6] transition-colors" /></div></div><div className="space-y-2"><label className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">Email de contacto</label><input type="email" className="w-full px-0 py-4 bg-transparent border-b border-slate-200 text-slate-900 focus:outline-none focus:border-[#3b82f6] transition-colors" /></div><div className="space-y-2"><label className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">Mensaje / consulta</label><textarea rows={4} className="w-full px-0 py-4 bg-transparent border-b border-slate-200 text-slate-900 focus:outline-none focus:border-[#3b82f6] transition-colors resize-none" /></div><label className="flex items-center gap-4 p-5 border border-dashed border-slate-300 text-slate-500 hover:border-[#3b82f6] hover:text-[#1a365d] transition-colors cursor-pointer"><FileUp size={22} className="shrink-0" /><span className="text-sm font-medium">Adjuntar archivo / CV</span><input type="file" accept=".pdf,.doc,.docx,.jpg,.jpeg,.png" className="hidden" /></label><button className="w-full py-6 bg-[#1a365d] text-white text-[11px] font-bold uppercase tracking-[0.35em] hover:bg-[#3b82f6] transition-all flex items-center justify-center gap-4"><Send size={16} />Enviar mensaje</button></form></div>
        </div>
      </section>

      <footer className="bg-white py-12 md:py-14 border-t border-slate-100"><div className="container mx-auto px-6 lg:px-12 grid lg:grid-cols-[260px_1fr] gap-10 lg:gap-16 items-center"><div><Logo scrolled size="sm" /></div><div className="grid sm:grid-cols-3 gap-8 text-left lg:text-right"><div><p className="text-[10px] font-bold uppercase tracking-[0.35em] text-slate-400 mb-2">Teléfono</p><p className="text-base md:text-lg font-bold text-[#1a365d]">{contactInfo.phone}</p></div><div><p className="text-[10px] font-bold uppercase tracking-[0.35em] text-slate-400 mb-2">Mail</p><p className="text-base md:text-lg font-bold text-[#1a365d] break-words">{contactInfo.email}</p></div><div><p className="text-[10px] font-bold uppercase tracking-[0.35em] text-slate-400 mb-2">Web</p><p className="text-base md:text-lg font-bold text-[#1a365d] break-words">{contactInfo.domain}</p></div></div></div><div className="container mx-auto px-6 lg:px-12 mt-10 pt-8 border-t border-slate-100 flex flex-col sm:flex-row justify-between gap-4"><p className="text-[10px] text-slate-400 font-bold uppercase tracking-[0.4em]">© {new Date().getFullYear()} Aalto Mantenimiento.</p><p className="text-[10px] text-slate-400 font-bold uppercase tracking-[0.4em]">Mantenimiento · Outsourcing · Infraestructura</p></div></footer>
    </div>
  );
}
