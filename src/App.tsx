/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { 
  Heart, 
  Target, 
  HandHelping, 
  Settings, 
  Users, 
  Mail, 
  Phone, 
  Globe, 
  Linkedin, 
  X, 
  Menu, 
  Paintbrush, 
  Zap, 
  Thermometer, 
  Hammer, 
  Construction, 
  Wrench, 
  ShieldCheck, 
  ChevronRight,
  Send,
  CheckCircle2,
  Briefcase
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const Logo = ({ className = "", scrolled = false, isWhite = false, size = "md" }: { className?: string, scrolled?: boolean, isWhite?: boolean, size?: "sm" | "md" | "lg" }) => {
  const symbolSize = size === "sm" ? "w-8 md:w-10" : size === "md" ? "w-10 md:w-14" : "w-20 md:w-28";
  const titleSize = size === "sm" ? "text-xl md:text-2xl" : size === "md" ? "text-2xl md:text-3xl" : "text-4xl md:text-6xl";
  const subSize = size === "sm" ? "text-[6px] md:text-[7px]" : size === "md" ? "text-[8px] md:text-[10px]" : "text-[12px] md:text-[14px]";
  
  const darkBlue = "#1a365d";
  const lightBlue = "#4299e1";
  
  const subColor = isWhite ? "text-white/90" : scrolled ? "text-slate-600" : "text-white/90";
  const aaltoColor = isWhite ? "text-white" : scrolled ? "text-black" : "text-white";

  return (
    <div className={`flex items-center ${className}`}>
      <div className={`${symbolSize} h-auto mr-4 shrink-0`}>
        <svg viewBox="0 0 100 70" className="w-full h-full">
          <path 
            d="M35 5 L5 65 L22 65 L44 20 L55 45 L65 35 L50 5 Z" 
            fill={isWhite ? "white" : darkBlue} 
          />
          <path 
            d="M50 5 L65 35 L75 25 L95 65 L78 65 L65 40 L55 60 L45 50 L50 5 Z" 
            fill={isWhite ? "white" : lightBlue} 
            opacity={isWhite ? 0.8 : 1}
          />
        </svg>
      </div>
      <div className="flex flex-col">
        <span className={`${titleSize} font-bold leading-none tracking-tighter ${aaltoColor}`}>aalto</span>
        <span className={`${subSize} font-bold tracking-[0.45em] ${subColor} mt-1 uppercase`}>Mantenimiento</span>
      </div>
    </div>
  );
};

export default function App() {
  const [activeModal, setActiveModal] = useState<string | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openModal = (service: string) => setActiveModal(service);
  const closeModal = () => setActiveModal(null);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navLinks = [
    { name: 'Nosotros', href: '#nosotros' },
    { name: 'Servicios', href: '#servicios' },
    { name: 'Outsourcing', href: '#outsourcing' },
    { name: 'Misión', href: '#mision' },
    { name: 'Clientes', href: '#clientes' },
    { name: 'Contacto', href: '#contacto' },
  ];

  const contactInfo = {
    email: 'aalto.mza@gmail.com',
    phone: '+54 261 471 5133',
    domain: 'aaltomantenimiento.com.ar'
  };

  const clients = [
    { name: 'Salentein', domain: 'bodegasalentein.com' },
    { name: 'Rosell Boher', domain: 'rosellboher.com' },
    { name: 'Trivento', domain: 'trivento.com' },
    { name: 'Talca', domain: 'talca.com.ar' },
    { name: 'Yaguar', domain: 'yaguar.com.ar' },
    { name: 'Chandon', domain: 'chandon.com.ar' },
    { name: 'Norton', domain: 'norton.com.ar' },
    { name: 'SMN', domain: 'smn.gob.ar' },
    { name: 'Renacer', domain: 'bodegarenacer.com.ar' },
    { name: 'Luigi Bosca', domain: 'luigibosca.com' },
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-blue-100 scroll-smooth">
      {/* Navigation */}
      <nav 
        className={`fixed top-0 left-0 right-0 z-[80] transition-all duration-500 ${
          scrolled ? 'py-3 md:py-4 bg-white shadow-md border-b border-slate-100' : 'py-5 lg:py-8 bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-12 flex justify-between items-center">
          <div 
            className="cursor-pointer scale-90 sm:scale-100 origin-left"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <Logo scrolled={scrolled} />
          </div>

          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-[11px] font-bold uppercase tracking-[0.25em] transition-all hover:text-[#3b82f6] ${scrolled ? 'text-[#1a365d]' : 'text-white'}`}
              >
                {link.name}
              </a>
            ))}
            <button
              onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
              className={`px-8 py-3 rounded-none text-[11px] font-bold uppercase tracking-[0.25em] transition-all border ${
                scrolled 
                  ? 'bg-[#1a365d] text-white border-[#1a365d] hover:bg-[#2b6cb0]' 
                  : 'bg-white text-[#1a365d] border-white hover:bg-transparent hover:text-white'
              }`}
            >
              Contacto
            </button>
          </div>

          <button 
            onClick={toggleMenu}
            className={`lg:hidden p-2 transition-colors ${scrolled ? 'text-[#1a365d]' : 'text-white'}`}
          >
            <Menu size={28} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
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
                <Logo scrolled={true} size="sm" />
                <button onClick={toggleMenu} className="p-2 text-[#1a365d]">
                  <X size={32} />
                </button>
              </div>
              <div className="flex-1 py-12 px-10 flex flex-col gap-10">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={toggleMenu}
                    className="text-lg font-bold text-[#1a365d] uppercase tracking-[0.2em] border-b border-slate-50 pb-4 hover:text-[#3b82f6] transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
              <div className="p-10 border-t border-slate-100">
                <button 
                  onClick={() => { toggleMenu(); document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' }); }}
                  className="w-full py-5 bg-[#1a365d] text-white text-[11px] font-bold uppercase tracking-[0.3em] hover:bg-[#2b6cb0] transition-all"
                >
                  Solicitar Asesoramiento
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="relative min-h-screen w-full flex items-center bg-[#0a192f] overflow-hidden py-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a192f] via-[#0a192f]/90 to-transparent z-10" />
          <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000" 
            alt="Arquitectura Corporativa" 
            className="absolute inset-0 w-full h-full object-cover grayscale opacity-40 mix-blend-luminosity"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 z-20 opacity-[0.05]" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        </div>

        <div className="container mx-auto px-6 lg:px-12 relative z-30">
          <div className="max-w-5xl">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-bold text-white leading-[0.95] tracking-tighter mb-8 sm:mb-12 uppercase"
            >
              Excelencia <br />
              <span className="text-[#3b82f6]">Operativa.</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="text-lg sm:text-xl md:text-2xl text-white/70 font-light mb-12 sm:mb-16 max-w-3xl leading-relaxed"
            >
              Soluciones integrales de mantenimiento para bodegas, hoteles, industrias y centros comerciales. Garantizamos la continuidad y el valor de su infraestructura.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 sm:gap-8"
            >
              <button
                onClick={() => document.getElementById('servicios')?.scrollIntoView({ behavior: 'smooth' })}
                className="w-full sm:w-auto px-10 sm:px-12 py-4 sm:py-5 bg-[#3b82f6] text-white font-bold uppercase tracking-[0.3em] text-[10px] sm:text-[11px] transition-all hover:bg-[#2b6cb0]"
              >
                Nuestros Servicios
              </button>
              <button
                onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
                className="w-full sm:w-auto px-10 sm:px-12 py-4 sm:py-5 border border-white/30 text-white font-bold uppercase tracking-[0.3em] text-[10px] sm:text-[11px] transition-all hover:bg-white hover:text-[#1a365d]"
              >
                Contacto Directo
              </button>
            </motion.div>
          </div>
        </div>

        <div className="absolute right-12 bottom-12 z-30 hidden xl:block">
          <div className="flex flex-col items-end gap-4">
            <span className="text-[11px] text-white/20 uppercase tracking-[0.5em] font-bold rotate-180 [writing-mode:vertical-lr]">Aalto Mantenimiento Corporativo</span>
            <div className="w-px h-32 bg-white/10" />
          </div>
        </div>
      </section>

      {/* Sectores de Actuación */}
      <section className="py-12 md:py-16 bg-[#1a365d] text-white border-b border-white/5">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {[
              { label: 'Sector', title: 'Bodegas' },
              { label: 'Sector', title: 'Hotelería' },
              { label: 'Sector', title: 'Industrias' },
              { label: 'Sector', title: 'Retail & Centros' }
            ].map((sector, idx) => (
              <div key={idx} className="space-y-2 border-l border-white/10 pl-6">
                <p className="text-[9px] font-bold uppercase tracking-[0.4em] text-white/40">{sector.label}</p>
                <p className="text-sm md:text-base font-bold uppercase tracking-widest">{sector.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nosotros */}
      <section id="nosotros" className="py-20 sm:py-32 lg:py-48 bg-white overflow-hidden">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            <div className="space-y-8 md:space-y-12">
              <div className="space-y-4 md:space-y-6">
                <span className="text-[#3b82f6] font-bold uppercase tracking-[0.4em] text-[10px] md:text-[11px]">Trayectoria Institucional</span>
                <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold text-[#1a365d] uppercase tracking-tighter leading-none">
                  Compromiso <br /> Profesional.
                </h2>
              </div>
              <div className="space-y-6 md:space-y-8 text-slate-600 leading-relaxed text-lg md:text-xl font-light">
                <p>
                  <strong className="text-slate-900 font-bold">AALTO MANTENIMIENTO</strong> nace en 2020 como una respuesta técnica especializada para sectores que exigen máxima operatividad.
                </p>
                <p>
                  Nos responsabilizamos por el cuidado integral de sus activos, permitiendo que su organización concentre sus recursos en el desarrollo del negocio, con la seguridad de contar con un soporte profesional y eficiente.
                </p>
                <div className="pt-8 md:pt-10 border-t border-slate-100">
                  <div className="grid grid-cols-2 gap-6 md:gap-10">
                    <div>
                      <p className="text-2xl md:text-3xl font-bold text-[#1a365d] mb-1">4+</p>
                      <p className="text-[9px] md:text-[11px] font-bold text-slate-400 uppercase tracking-widest">Años de Excelencia</p>
                    </div>
                    <div>
                      <p className="text-2xl md:text-3xl font-bold text-[#1a365d] mb-1">100%</p>
                      <p className="text-[9px] md:text-[11px] font-bold text-slate-400 uppercase tracking-widest">Disponibilidad Técnica</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square md:aspect-[4/5] bg-slate-100 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=1200" 
                  alt="Técnico Especializado" 
                  className="w-full h-full object-cover grayscale brightness-75 hover:grayscale-0 transition-all duration-1000"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 md:-bottom-10 md:-left-10 bg-[#1a365d] p-8 md:p-12 hidden sm:block max-w-xs shadow-2xl">
                <p className="text-white text-base md:text-lg font-light leading-relaxed">
                  "Garantizamos resultados confiables y sostenibles en cada intervención técnica."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Servicios */}
      <section id="servicios" className="py-20 lg:py-48 bg-slate-50">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-16 md:mb-32">
            <span className="text-[#3b82f6] font-bold uppercase tracking-[0.4em] text-[10px] md:text-[11px] mb-4 md:mb-6 block">Unidades de Negocio</span>
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold text-[#1a365d] uppercase tracking-tighter">Servicios Especializados</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto">
            <div className="group bg-white border border-slate-100 p-8 md:p-16 flex flex-col items-center text-center hover:shadow-2xl transition-all duration-500">
              <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full bg-[#1a365d] flex items-center justify-center mb-8 md:mb-10 group-hover:bg-[#3b82f6] transition-colors">
                <Construction size={28} className="text-white sm:hidden" />
                <Construction size={32} className="text-white hidden sm:block md:hidden" />
                <Construction size={40} className="text-white hidden md:block" />
              </div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#1a365d] uppercase tracking-tighter mb-6 md:mb-8">Mantenimiento <br /> Edilicio</h3>
              <p className="text-slate-500 font-light mb-8 md:mb-12 leading-relaxed text-sm md:text-base">
                Gestión integral preventiva y correctiva para infraestructuras corporativas e industriales.
              </p>
              <button 
                onClick={() => openModal('mantenimiento')}
                className="mt-auto w-full sm:w-auto px-8 md:px-10 py-4 border-2 border-[#1a365d] text-[#1a365d] font-bold uppercase tracking-[0.3em] text-[10px] md:text-[11px] hover:bg-[#1a365d] hover:text-white transition-all"
              >
                Ver Detalles Técnicos
              </button>
            </div>

            <div className="group bg-[#1a365d] p-8 md:p-16 flex flex-col items-center text-center hover:shadow-2xl transition-all duration-500">
              <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full bg-white/10 flex items-center justify-center mb-8 md:mb-10 group-hover:bg-[#3b82f6] transition-colors">
                <Users size={28} className="text-white sm:hidden" />
                <Users size={32} className="text-white hidden sm:block md:hidden" />
                <Users size={40} className="text-white hidden md:block" />
              </div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white uppercase tracking-tighter mb-6 md:mb-8">Personal Externo <br /> (Outsourcing)</h3>
              <p className="text-white/60 font-light mb-8 md:mb-12 leading-relaxed text-sm md:text-base">
                Provisión de técnicos calificados integrados a sus estándares operativos.
              </p>
              <button 
                onClick={() => document.getElementById('outsourcing')?.scrollIntoView({ behavior: 'smooth' })}
                className="mt-auto w-full sm:w-auto px-8 md:px-10 py-4 bg-white text-[#1a365d] font-bold uppercase tracking-[0.3em] text-[10px] md:text-[11px] hover:bg-[#3b82f6] hover:text-white transition-all"
              >
                Conocer la Unidad
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Outsourcing */}
      <section id="outsourcing" className="py-20 lg:py-48 bg-white border-b border-slate-100">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mb-16 md:mb-24">
            <span className="text-[#3b82f6] font-bold uppercase tracking-[0.4em] text-[10px] md:text-[11px] mb-4 md:mb-6 block">Unidad de Soluciones Externas</span>
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold text-[#1a365d] uppercase tracking-tighter leading-none mb-8 md:mb-12">
              Outsourcing <br /> Estratégico.
            </h2>
            <p className="text-xl md:text-2xl text-slate-600 font-light leading-relaxed">
              Nuestra unidad de Outsourcing permite a las organizaciones delegar la gestión técnica en expertos, garantizando la continuidad operativa bajo sus propios estándares de calidad y cultura empresarial.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 md:gap-12 mb-20 md:mb-32">
            <div className="space-y-6 p-8 bg-slate-50 border border-slate-100">
              <div className="w-12 h-12 bg-[#1a365d] flex items-center justify-center">
                <Users size={24} className="text-white" />
              </div>
              <h4 className="text-lg font-bold text-[#1a365d] uppercase tracking-tight">Integración Operativa</h4>
              <p className="text-sm text-slate-500 leading-relaxed font-light">
                Personal externo que se integra plenamente a la cultura y normas de su empresa, actuando como una extensión natural de su equipo de trabajo.
              </p>
            </div>
            <div className="space-y-6 p-8 bg-slate-50 border border-slate-100">
              <div className="w-12 h-12 bg-[#1a365d] flex items-center justify-center">
                <HandHelping size={24} className="text-white" />
              </div>
              <h4 className="text-lg font-bold text-[#1a365d] uppercase tracking-tight">Un solo interlocutor</h4>
              <p className="text-sm text-slate-500 leading-relaxed font-light">
                Centralizamos la comunicación y el seguimiento técnico. Un único punto de contacto para simplificar la gestión y el reporte de novedades.
              </p>
            </div>
            <div className="space-y-6 p-8 bg-slate-50 border border-slate-100">
              <div className="w-12 h-12 bg-[#1a365d] flex items-center justify-center">
                <CheckCircle2 size={24} className="text-white" />
              </div>
              <h4 className="text-lg font-bold text-[#1a365d] uppercase tracking-tight">Alivio de Gestión</h4>
              <p className="text-sm text-slate-500 leading-relaxed font-light">
                Nos encargamos del reclutamiento, la capacitación y el cumplimiento normativo (ART, EPP), permitiendo que usted se enfoque en su Core Business.
              </p>
            </div>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 lg:gap-24 items-start">
            <div className="lg:col-span-5 space-y-8 md:space-y-12">
              <div className="space-y-6 md:space-y-8">
                <h3 className="text-2xl md:text-3xl font-bold text-[#1a365d] uppercase tracking-tight">Propuesta de Valor</h3>
                <p className="text-slate-600 font-light leading-relaxed">
                  Buscamos ser el soporte invisible pero fundamental que garantiza que su infraestructura nunca sea un obstáculo para la productividad.
                </p>
              </div>
              
              <div className="space-y-4 md:space-y-6">
                <h4 className="text-[10px] md:text-[11px] font-bold text-[#1a365d] uppercase tracking-[0.3em]">Pilares del Servicio</h4>
                <div className="space-y-3 md:space-y-4">
                  {[
                    'Soluciones precisas y confiables',
                    'Orden y seguimiento sistemático',
                    'Respaldo técnico permanente',
                    'Adaptación a procesos internos',
                    'Eficiencia en el uso de recursos'
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3 md:gap-4">
                      <CheckCircle2 size={16} className="text-[#3b82f6] shrink-0 mt-0.5" />
                      <span className="text-sm text-slate-600 font-medium leading-tight">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="bg-[#1a365d] p-8 md:p-16 text-white">
                <h4 className="text-xl md:text-2xl font-bold uppercase tracking-tight mb-8 md:mb-12">Perfiles Técnicos Disponibles</h4>
                <div className="grid sm:grid-cols-2 gap-8 md:gap-12">
                  {[
                    { title: 'Técnicos Electricistas', desc: 'Mantenimiento de tableros y sistemas de potencia.' },
                    { title: 'Oficiales de Obra Civil', desc: 'Construcción en seco y terminaciones técnicas.' },
                    { title: 'Técnicos en HVAC', desc: 'Operación de sistemas de climatización central.' },
                    { title: 'Soldadores y Herreros', desc: 'Mantenimiento de estructuras y herrería industrial.' },
                    { title: 'Carpinteros Técnicos', desc: 'Mobiliario corporativo y aberturas industriales.' },
                    { title: 'Supervisores de Planta', desc: 'Coordinación de equipos y control de procesos.' }
                  ].map((perfil, i) => (
                    <div key={i} className="space-y-2">
                      <p className="text-sm font-bold uppercase tracking-wider text-[#3b82f6]">{perfil.title}</p>
                      <p className="text-xs text-white/60 font-light leading-relaxed">{perfil.desc}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-12 md:mt-20 pt-8 border-t border-white/10">
                  <p className="text-[10px] text-white/40 italic leading-relaxed">
                    * Gestión integral de seguros (ART), elementos de protección (EPP) y capacitaciones específicas por puesto.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Proceso de Integración (Timeline) */}
          <div className="mt-20 md:mt-32 pt-20 md:pt-32 border-t border-slate-100">
            <div className="text-center mb-16">
              <span className="text-[#3b82f6] font-bold uppercase tracking-[0.4em] text-[10px] md:text-[11px] mb-4 block">Metodología</span>
              <h3 className="text-2xl md:text-4xl font-bold text-[#1a365d] uppercase tracking-tight">Proceso de Integración</h3>
            </div>
            <div className="grid md:grid-cols-4 gap-12 md:gap-8 relative">
              {/* Connecting line for desktop */}
              <div className="hidden md:block absolute top-6 left-[12.5%] right-[12.5%] h-px bg-slate-200 z-0" />
              
              {[
                { step: '01', title: 'Relevamiento', desc: 'Auditoría de necesidades técnicas y definición del perfil requerido.' },
                { step: '02', title: 'Selección', desc: 'Búsqueda, validación técnica y capacitación en normativas.' },
                { step: '03', title: 'Despliegue', desc: 'Integración del personal a las instalaciones y cultura del cliente.' },
                { step: '04', title: 'Supervisión', desc: 'Auditorías periódicas, gestión de reemplazos y control de calidad.' }
              ].map((item, i) => (
                <div key={i} className="relative z-10 flex flex-col items-center text-center">
                  <div className="w-12 h-12 bg-white border-2 border-[#1a365d] rounded-full flex items-center justify-center mb-6 text-[#1a365d] font-bold text-sm">
                    {item.step}
                  </div>
                  <h4 className="text-sm font-bold text-[#1a365d] uppercase tracking-wider mb-3">{item.title}</h4>
                  <p className="text-xs text-slate-500 leading-relaxed font-light max-w-[220px]">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Outsourcing */}
          <div className="mt-20 md:mt-32 bg-[#1a365d] p-8 md:p-16 flex flex-col lg:flex-row items-center justify-between gap-10 shadow-2xl">
            <div className="space-y-4 text-center lg:text-left max-w-2xl">
              <h3 className="text-2xl md:text-3xl font-bold text-white uppercase tracking-tight">¿Necesita optimizar su estructura técnica?</h3>
              <p className="text-white/70 font-light leading-relaxed text-sm md:text-base">
                Agende una reunión con nuestros especialistas para evaluar la viabilidad de implementar una solución de outsourcing a medida de su operación.
              </p>
            </div>
            <button 
              onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
              className="shrink-0 px-8 md:px-10 py-4 md:py-5 bg-[#3b82f6] text-white font-bold uppercase tracking-[0.3em] text-[10px] md:text-[11px] hover:bg-[#2b6cb0] transition-all flex items-center justify-center gap-3 w-full lg:w-auto"
            >
              Solicitar Evaluación <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* Misión, Visión, Valores */}
      <section id="mision" className="py-12 md:py-20 bg-slate-50">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-3 gap-6 md:gap-12">
            <div className="bg-white p-6 md:p-16 shadow-sm border border-slate-100">
              <Target size={32} className="text-[#3b82f6] mb-8 md:mb-10" />
              <h3 className="text-[10px] md:text-[11px] font-bold text-[#1a365d] uppercase tracking-[0.4em] mb-6 md:mb-8">Misión</h3>
              <p className="text-sm text-slate-500 leading-relaxed font-light">
                Transformar el mantenimiento en una ventaja competitiva para nuestros clientes, cuidando cada activo con excelencia técnica y compromiso profesional.
              </p>
            </div>
            <div className="bg-white p-6 md:p-16 shadow-sm border border-slate-100">
              <Globe size={32} className="text-[#3b82f6] mb-8 md:mb-10" />
              <h3 className="text-[10px] md:text-[11px] font-bold text-[#1a365d] uppercase tracking-[0.4em] mb-6 md:mb-8">Visión</h3>
              <p className="text-sm text-slate-500 leading-relaxed font-light">
                Ser el aliado estratégico líder en gestión de infraestructuras críticas, expandiendo nuestra cobertura nacional mediante la innovación constante.
              </p>
            </div>
            <div className="bg-white p-6 md:p-16 shadow-sm border border-slate-100">
              <ShieldCheck size={32} className="text-[#3b82f6] mb-8 md:mb-10" />
              <h3 className="text-[10px] md:text-[11px] font-bold text-[#1a365d] uppercase tracking-[0.4em] mb-6 md:mb-8">Valores</h3>
              <div className="flex flex-wrap gap-x-4 md:gap-x-6 gap-y-4">
                {['Calidad', 'Compromiso', 'Innovación', 'Eficiencia', 'Seguridad'].map(v => (
                  <span key={v} className="text-[10px] md:text-[11px] font-bold text-[#1a365d] uppercase tracking-widest">{v}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Clientes */}
      <section id="clientes" className="py-20 lg:py-48 bg-white overflow-hidden">
        <div className="container mx-auto px-6 lg:px-12 mb-16 md:mb-24">
          <div className="text-center">
            <span className="text-[#3b82f6] font-bold uppercase tracking-[0.4em] text-[10px] md:text-[11px] mb-4 md:mb-6 block">Alianzas Estratégicas</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a365d] uppercase tracking-tighter">Empresas que confían en Aalto</h2>
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-white to-transparent z-10" />

          <div className="flex overflow-hidden">
            <div 
              className="flex gap-20 items-center animate-marquee-slow"
              style={{ width: 'fit-content' }}
            >
              {[...clients, ...clients].map((client, idx) => (
                <div 
                  key={`${client.name}-${idx}`} 
                  className="w-[200px] h-[100px] flex items-center justify-center grayscale opacity-40 hover:opacity-100 hover:grayscale-0 transition-all duration-700 shrink-0"
                >
                  <img 
                    src={`https://logo.clearbit.com/${client.domain}`} 
                    alt={client.name} 
                    className="max-h-12 max-w-full object-contain"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const parent = target.parentElement;
                      if (parent && !parent.querySelector('.fallback-text')) {
                        const text = document.createElement('span');
                        text.className = 'fallback-text text-[11px] font-bold text-slate-300 uppercase tracking-[0.3em]';
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

      {/* Contacto */}
      <section id="contacto" className="py-16 md:py-24 lg:py-48 bg-slate-900 text-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-32 items-start">
              <div className="space-y-10 md:space-y-20">
                <div className="space-y-6 md:space-y-8">
                  <span className="text-[#3b82f6] font-bold uppercase tracking-[0.5em] text-[10px] md:text-[11px]">Canales de Atención</span>
                  <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold uppercase tracking-tighter">Contacto <br /> Corporativo.</h2>
                  <p className="text-white/50 text-lg md:text-xl font-light leading-relaxed max-w-lg">
                    Nuestro equipo técnico está disponible para evaluar sus requerimientos y proponer soluciones a medida.
                  </p>
                </div>
                
                <div className="space-y-6 md:space-y-12">
                  <div className="flex items-start gap-4 md:gap-8">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-none bg-white/5 flex items-center justify-center shrink-0">
                      <Mail size={18} className="text-[#3b82f6] md:hidden" />
                      <Mail size={20} className="text-[#3b82f6] hidden md:block" />
                    </div>
                    <div>
                      <p className="text-[10px] md:text-[11px] font-bold text-white/30 uppercase tracking-widest mb-1 md:mb-2">Email Institucional</p>
                      <p className="text-lg md:text-xl font-medium">{contactInfo.email}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 md:gap-8">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-none bg-white/5 flex items-center justify-center shrink-0">
                      <Phone size={18} className="text-[#3b82f6] md:hidden" />
                      <Phone size={20} className="text-[#3b82f6] hidden md:block" />
                    </div>
                    <div>
                      <p className="text-[10px] md:text-[11px] font-bold text-white/30 uppercase tracking-widest mb-1 md:mb-2">Teléfono Directo</p>
                      <p className="text-lg md:text-xl font-medium">{contactInfo.phone}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 md:gap-8">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-none bg-white/5 flex items-center justify-center shrink-0">
                      <Globe size={18} className="text-[#3b82f6] md:hidden" />
                      <Globe size={20} className="text-[#3b82f6] hidden md:block" />
                    </div>
                    <div>
                      <p className="text-[10px] md:text-[11px] font-bold text-white/30 uppercase tracking-widest mb-1 md:mb-2">Presencia Web</p>
                      <p className="text-lg md:text-xl font-medium">{contactInfo.domain}</p>
                    </div>
                  </div>
                </div>
              </div>

            <div className="bg-white p-6 md:p-12 lg:p-16 shadow-2xl">
                <h3 className="text-xl md:text-2xl font-bold text-[#1a365d] uppercase tracking-tight mb-8 md:mb-12">Enviar Requerimiento</h3>
                <form className="space-y-6 md:space-y-10" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid sm:grid-cols-2 gap-6 md:grid-cols-2 md:gap-10">
                    <div className="space-y-3">
                      <label className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">Nombre Completo</label>
                      <input type="text" className="w-full px-0 py-4 bg-transparent border-b border-slate-200 text-slate-900 focus:outline-none focus:border-[#3b82f6] transition-colors" />
                    </div>
                    <div className="space-y-3">
                      <label className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">Empresa / Organización</label>
                      <input type="text" className="w-full px-0 py-4 bg-transparent border-b border-slate-200 text-slate-900 focus:outline-none focus:border-[#3b82f6] transition-colors" />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <label className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">Email de Contacto</label>
                    <input type="email" className="w-full px-0 py-4 bg-transparent border-b border-slate-200 text-slate-900 focus:outline-none focus:border-[#3b82f6] transition-colors" />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">Mensaje / Consulta Técnica</label>
                    <textarea rows={4} className="w-full px-0 py-4 bg-transparent border-b border-slate-200 text-slate-900 focus:outline-none focus:border-[#3b82f6] transition-colors resize-none"></textarea>
                  </div>
                  <button className="w-full py-6 bg-[#1a365d] text-white text-[11px] font-bold uppercase tracking-[0.4em] hover:bg-[#3b82f6] transition-all flex items-center justify-center gap-4">
                    <Send size={16} />
                    Enviar Mensaje
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-24 border-t border-slate-100">
        <div className="container mx-auto px-6 text-center">
          <div className="flex justify-center items-center mb-16">
            <Logo scrolled={true} size="md" />
          </div>
          <div className="flex justify-center gap-12 mb-16">
            <Linkedin size={22} className="text-slate-300 hover:text-[#1a365d] cursor-pointer transition-colors" />
            <Mail size={22} className="text-slate-300 hover:text-[#1a365d] cursor-pointer transition-colors" />
          </div>
          <p className="text-[10px] text-slate-300 font-bold uppercase tracking-[0.5em]">
            © {new Date().getFullYear()} Aalto Mantenimiento.
          </p>
        </div>
      </footer>

      {/* Mantenimiento Edilicio Modal */}
      <AnimatePresence>
        {activeModal === 'mantenimiento' && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
              className="absolute inset-0 bg-slate-900/90 backdrop-blur-md"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.98, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98, y: 20 }}
              className="relative w-full max-w-5xl bg-white shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
            >
              <div className="bg-[#1a365d] p-6 md:p-12 text-white flex justify-between items-center shrink-0">
                <div className="space-y-2 md:space-y-3">
                  <h3 className="text-lg md:text-2xl font-bold uppercase tracking-[0.2em]">Mantenimiento Edilicio Integral</h3>
                  <div className="w-12 md:w-16 h-1 bg-[#3b82f6]" />
                </div>
                <button onClick={closeModal} className="p-2 md:p-3 hover:bg-white/10 transition-colors">
                  <X size={24} className="md:hidden" />
                  <X size={32} className="hidden md:block" />
                </button>
              </div>

              <div className="p-6 md:p-16 overflow-y-auto">
                <div className="grid lg:grid-cols-2 gap-10 lg:gap-20">
                  <div className="space-y-8 md:space-y-12">
                    <div className="prose prose-slate max-w-none">
                      <h4 className="text-lg md:text-2xl font-bold text-[#1a365d] mb-4 md:mb-6 uppercase tracking-tight">Preventivo y Correctivo</h4>
                      <p className="text-slate-600 leading-relaxed text-sm md:text-lg font-light">
                        Nuestro servicio de mantenimiento edilicio garantiza la preservación del valor inmobiliario y la seguridad operativa de sus instalaciones.
                      </p>
                    </div>

                    <div className="space-y-10">
                      <div className="flex gap-6">
                        <div className="w-12 h-12 rounded-none bg-slate-50 flex items-center justify-center shrink-0">
                          <Construction size={24} className="text-[#3b82f6]" />
                        </div>
                        <div>
                          <h5 className="text-sm font-bold text-[#1a365d] uppercase tracking-wider mb-2">Obra Civil y Terminaciones</h5>
                          <p className="text-xs text-slate-500 leading-relaxed font-light">Albañilería técnica, construcción en seco, pintura industrial y revestimientos epóxicos.</p>
                        </div>
                      </div>
                      <div className="flex gap-6">
                        <div className="w-12 h-12 rounded-none bg-slate-50 flex items-center justify-center shrink-0">
                          <Zap size={24} className="text-[#3b82f6]" />
                        </div>
                        <div>
                          <h5 className="text-sm font-bold text-[#1a365d] uppercase tracking-wider mb-2">Instalaciones Eléctricas</h5>
                          <p className="text-xs text-slate-500 leading-relaxed font-light">Mantenimiento de tableros, iluminación LED, grupos electrógenos y montajes certificados.</p>
                        </div>
                      </div>
                      <div className="flex gap-6">
                        <div className="w-12 h-12 rounded-none bg-slate-50 flex items-center justify-center shrink-0">
                          <Thermometer size={24} className="text-[#3b82f6]" />
                        </div>
                        <div>
                          <h5 className="text-sm font-bold text-[#1a365d] uppercase tracking-wider mb-2">Climatización HVAC</h5>
                          <p className="text-xs text-slate-500 leading-relaxed font-light">Sistemas centrales, VRV, refrigeración industrial y control de temperatura crítica.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-12">
                    <div className="space-y-10">
                      <div className="flex gap-6">
                        <div className="w-12 h-12 rounded-none bg-slate-50 flex items-center justify-center shrink-0">
                          <Hammer size={24} className="text-[#3b82f6]" />
                        </div>
                        <div>
                          <h5 className="text-sm font-bold text-[#1a365d] uppercase tracking-wider mb-2">Herrería y Estructuras</h5>
                          <p className="text-xs text-slate-500 leading-relaxed font-light">Soldadura especializada, acero inoxidable, aberturas y estructuras de soporte.</p>
                        </div>
                      </div>
                      <div className="flex gap-6">
                        <div className="w-12 h-12 rounded-none bg-slate-50 flex items-center justify-center shrink-0">
                          <Briefcase size={24} className="text-[#3b82f6]" />
                        </div>
                        <div>
                          <h5 className="text-sm font-bold text-[#1a365d] uppercase tracking-wider mb-2">Carpintería y Mobiliario</h5>
                          <p className="text-xs text-slate-500 leading-relaxed font-light">Mantenimiento de aberturas de madera, mobiliario técnico y pérgolas.</p>
                        </div>
                      </div>
                      <div className="flex gap-6">
                        <div className="w-12 h-12 rounded-none bg-slate-50 flex items-center justify-center shrink-0">
                          <ShieldCheck size={24} className="text-[#3b82f6]" />
                        </div>
                        <div>
                          <h5 className="text-sm font-bold text-[#1a365d] uppercase tracking-wider mb-2">Seguridad e Higiene</h5>
                          <p className="text-xs text-slate-500 leading-relaxed font-light">Adecuación a normativas vigentes y planes de mantenimiento preventivo anual.</p>
                        </div>
                      </div>
                    </div>

                    <div className="p-10 bg-slate-50 border border-slate-100">
                      <p className="text-xs text-slate-400 italic leading-relaxed">
                        Nuestra metodología se basa en el diagnóstico preciso y la ejecución bajo estándares de calidad ISO, asegurando la mínima interferencia en su operación diaria.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <style>{`
        @keyframes marquee-slow {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee-slow {
          animation: marquee-slow 60s linear infinite;
        }
      `}</style>
    </div>
  );
}
