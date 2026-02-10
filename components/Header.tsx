
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Globe } from 'lucide-react';
import { LOGO_URL, TRANSLATIONS } from '../constants';
import { useLanguage } from '../App';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { lang, setLang } = useLanguage();
  const t = TRANSLATIONS[lang].nav;

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t.home, href: '#home' },
    { name: t.about, href: '#about' },
    { name: t.services, href: '#services' },
    { name: t.fleet, href: '#fleet' },
    { name: t.contact, href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-2' : 'bg-white py-2.5'}`}>
      <nav className="container mx-auto px-6 lg:px-12 flex items-center justify-between">
        <a href="#home" onClick={(e) => handleNavClick(e, '#home')} className="flex-shrink-0">
          <img src={LOGO_URL} alt="CargoFrete" className="h-7 lg:h-8 transition-all duration-300" />
        </a>
        
        <div className="hidden lg:flex items-center space-x-5">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-[12px] font-bold text-slate-600 hover:text-cargo-accent transition-colors uppercase tracking-tight"
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="hidden lg:flex items-center space-x-4">
          {/* Language Switcher */}
          <div className="flex items-center gap-1 border-r border-slate-200 pr-4 mr-1">
            <Globe size={13} className="text-cargo-accent" />
            <button 
              onClick={() => setLang('pt')} 
              className={`text-[10px] font-black transition-colors ${lang === 'pt' ? 'text-cargo-accent' : 'text-slate-400 hover:text-cargo-blue'}`}
            >
              PT
            </button>
            <span className="text-slate-200 text-[10px]">/</span>
            <button 
              onClick={() => setLang('en')} 
              className={`text-[10px] font-black transition-colors ${lang === 'en' ? 'text-cargo-accent' : 'text-slate-400 hover:text-cargo-blue'}`}
            >
              EN
            </button>
          </div>

          <button 
            className="bg-cargo-blue text-white px-4 py-1.5 rounded-sm font-bold text-[10px] hover:bg-cargo-accent transition-all uppercase tracking-widest"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            {t.quote}
          </button>
        </div>

        <button className="lg:hidden text-cargo-blue" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>
      
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 right-0 bg-white shadow-xl lg:hidden p-6 border-t border-slate-100"
        >
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-sm font-bold text-slate-800 uppercase" 
                onClick={(e) => handleNavClick(e, link.href)}
              >
                {link.name}
              </a>
            ))}
            <div className="flex items-center gap-4 py-3 border-y border-slate-100">
               <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Idioma:</span>
               <button onClick={() => { setLang('pt'); setIsMobileMenuOpen(false); }} className={`px-4 py-1.5 text-[10px] font-bold rounded ${lang === 'pt' ? 'bg-cargo-accent text-white' : 'bg-slate-100'}`}>PT</button>
               <button onClick={() => { setLang('en'); setIsMobileMenuOpen(false); }} className={`px-4 py-1.5 text-[10px] font-bold rounded ${lang === 'en' ? 'bg-cargo-accent text-white' : 'bg-slate-100'}`}>EN</button>
            </div>
            <button className="bg-cargo-blue text-white w-full py-4 rounded-sm font-bold uppercase text-[10px] tracking-widest">{t.quote}</button>
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Header;
