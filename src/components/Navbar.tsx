import React, { useState, useEffect } from 'react';
import { MidiCamLogo } from './MidiCamLogo';
import { Download, Sparkles, Menu, X } from 'lucide-react';

interface NavbarProps {
  onScrollToOffer: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onScrollToOffer }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Como Receber Acesso', href: '#como-recebe-acesso' },
    { name: 'Como Funciona', href: '#como-funciona' },
    { name: 'Depoimentos', href: '#depoimentos' },
    { name: 'Oferta Especial', href: '#oferta' },
    { name: 'O Desenvolvedor', href: '#biografia' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <header
      id="navbar-root"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#09090b]/85 backdrop-blur-xl border-b border-[#27272a]/80 shadow-[0_4px_30px_rgba(0,0,0,0.5)] py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand / Logo */}
          <a
            id="brand-logo-link"
            href="#"
            className="flex items-center gap-3.5 group focus:outline-none"
          >
            <div className="transition-transform duration-300 group-hover:scale-105">
              <MidiCamLogo size={38} showGlow={false} activeRec={true} />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-xl tracking-tight text-white flex items-center gap-1.5">
                MIDI Cam
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#00f2c3] animate-pulse" />
              </span>
              <span className="text-[10px] tracking-widest uppercase text-zinc-400 font-medium">
                Official Studio
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav id="desktop-nav-links" className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-zinc-300 hover:text-[#00f2c3] transition-colors relative py-1 group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#00f2c3] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* CTA Right Side */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              id="nav-cta-buy-btn"
              onClick={onScrollToOffer}
              className="relative group overflow-hidden px-5 py-2.5 rounded-full font-bold text-xs tracking-wide uppercase transition-all duration-300 active:scale-95 shadow-[0_0_20px_rgba(0,242,195,0.25)] hover:shadow-[0_0_30px_rgba(0,242,195,0.45)] bg-[#00f2c3] text-[#09090b] hover:bg-[#00f2c3]/90 flex items-center gap-2 cursor-pointer"
            >
              <Download className="w-4 h-4" />
              <span>Ver Oferta (R$ 24,90)</span>
            </button>
          </div>

          {/* Mobile Hamburger & Quick CTA */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              id="nav-mobile-checkout-btn"
              onClick={onScrollToOffer}
              className="h-9 px-3.5 rounded-full text-xs font-bold bg-[#00f2c3] text-[#09090b] hover:bg-[#15fbd0] transition-all flex items-center justify-center active:scale-95 shadow-sm cursor-pointer"
            >
              R$ 24,90
            </button>
            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-10 h-10 flex items-center justify-center rounded-xl bg-zinc-900/80 border border-zinc-800 text-zinc-300 hover:text-white transition-colors cursor-pointer"
              aria-label="Alternar Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-white" /> : <Menu className="w-5 h-5 text-zinc-300" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div
            id="mobile-nav-menu"
            className="md:hidden mt-3 p-4 rounded-2xl bg-[#0e1017]/95 backdrop-blur-2xl border border-zinc-800/90 shadow-[0_20px_50px_rgba(0,0,0,0.85)] flex flex-col gap-1 animate-in fade-in slide-in-from-top-2 duration-200"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium text-zinc-200 hover:text-[#00f2c3] py-2.5 px-3 rounded-xl hover:bg-zinc-900/60 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-2 mt-1 border-t border-zinc-800/80">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onScrollToOffer();
                }}
                className="w-full py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider bg-[#00f2c3] text-[#09090b] hover:bg-[#15fbd0] shadow-[0_0_20px_rgba(0,242,195,0.3)] flex items-center justify-center gap-2 cursor-pointer active:scale-95"
              >
                <Download className="w-4 h-4" />
                <span>Ver Oferta Especial (R$ 24,90)</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
