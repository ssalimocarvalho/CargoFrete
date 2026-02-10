
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Globe, Phone, Mail, Clock } from 'lucide-react';
import { LOGO_URL, TRANSLATIONS } from '../constants';
import { useLanguage } from '../App';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { lang, setLang } = useLanguage();
  const t = TRANSLATIONS[lang].nav;
  const top = TRANSLATIONS[lang].topBar;

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t.home, href: '#home' },
    { name: t.about, href: '#about' },
    { name: t.services, href: '#services' },
    { name: lang === 'pt' ? 'Frota' : 'Fleet', href: '#fleet' },
    { name: t.contact, href: '#contact' },
  ];

  return (
    <>
      {/* Top Bar */}
      <div className="bg-cargo-blue text-white py-2 px-6 lg:px-12 hidden md:block border-b border-white/10">
        <div className="container mx-auto flex justify-between items-center text-[10px] font-medium tracking-wider uppercase">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2"><Clock size={12} className="text-cargo-accent" /> {top.schedule}</span>
            <span className="flex items-center gap-2"><Phone size={12} className="text-cargo-accent" /> {top.hotline}</span>
          </div>
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2"><Mail size={12} className="text-cargo-accent" /> {top.support}</span>
            <div className="flex items-center gap-2 border-l border-white/20 pl-6">
              <button onClick={() => setLang('pt')} className={`${lang === 'pt' ? 'text-cargo-accent' : 'text-white/60'}`}>PT</button>
              <span>/</span>
              <button onClick={() => setLang('en')} className={`${lang === 'en' ? 'text-cargo-accent' : 'text-white/60'}`}>EN</button>
            </div>
          </div>
        </div>
      </div>

      <header className={`fixed top-0 md:top-[34px] left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-white/90 backdrop-blur-sm py-4'}`}>
        <nav className="container mx-auto px-6 lg:px-12 flex items-center justify-between">
          <a href="#home" className="flex-shrink-0">
            <img src={LOGO_URL} alt="CargoFrete" className="h-8 lg:h-10 transition-all duration-300" />
          </a>
          
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="text-[13px] font-bold text-slate-700 hover:text-cargo-accent transition-colors uppercase tracking-tight">
                {link.name}
              </a>
            ))}
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-cargo-accent text-white px-6 py-2 rounded-full font-bold text-[11px] hover:bg-cargo-blue transition-all flex items-center gap-2 shadow-lg shadow-cargo-accent/20"
            >
              <Phone size={14} /> {t.quote}
            </button>
          </div>

          <button className="lg:hidden text-cargo-blue" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </nav>
        
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="absolute top-full left-0 right-0 bg-white shadow-2xl lg:hidden p-8 border-t border-slate-100">
            <div className="flex flex-col space-y-6">
              {navLinks.map((link) => (
                <a key={link.name} href={link.href} className="text-lg font-bold text-slate-800 uppercase" onClick={() => setIsMobileMenuOpen(false)}>{link.name}</a>
              ))}
              <div className="pt-6 border-t border-slate-100 flex gap-4">
                 <button onClick={() => setLang('pt')} className={`px-4 py-2 text-xs font-bold rounded ${lang === 'pt' ? 'bg-cargo-blue text-white' : 'bg-slate-100'}`}>PT</button>
                 <button onClick={() => setLang('en')} className={`px-4 py-2 text-xs font-bold rounded ${lang === 'en' ? 'bg-cargo-blue text-white' : 'bg-slate-100'}`}>EN</button>
              </div>
            </div>
          </motion.div>
        )}
      </header>
    </>
  );
};

export default Header;