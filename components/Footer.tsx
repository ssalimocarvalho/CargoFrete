
import React from 'react';
import { LOGO_URL, TRANSLATIONS } from '../constants';
import { Facebook, Twitter, Instagram, Linkedin, Youtube, Mail, Phone, MapPin, Clock } from 'lucide-react';
import { useLanguage } from '../App';

const Footer: React.FC = () => {
  const { lang } = useLanguage();
  const t = TRANSLATIONS[lang].footer;

  return (
    <footer className="bg-white pt-24 pb-12 border-t border-slate-100">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          <div>
            <img src={LOGO_URL} alt="CargoFrete" className="h-10 mb-10" />
            <div className="flex gap-4 mb-10">
              <a href="#" className="p-2 bg-slate-100 rounded-full text-slate-500 hover:bg-cargo-blue hover:text-white transition-all"><Facebook size={16} /></a>
              <a href="#" className="p-2 bg-slate-100 rounded-full text-slate-500 hover:bg-cargo-blue hover:text-white transition-all"><Linkedin size={16} /></a>
              <a href="#" className="p-2 bg-slate-100 rounded-full text-slate-500 hover:bg-cargo-blue hover:text-white transition-all"><Instagram size={16} /></a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-black text-slate-900 mb-8 uppercase tracking-widest">{t.company}</h4>
            <ul className="space-y-4 text-slate-500 font-medium text-sm">
              <li><a href="#about" className="hover:text-cargo-accent transition-colors">{t.links[0]}</a></li>
              <li><a href="#services" className="hover:text-cargo-accent transition-colors">{t.links[1]}</a></li>
              <li><a href="#fleet" className="hover:text-cargo-accent transition-colors">{t.links[2]}</a></li>
              <li><a href="#" className="hover:text-cargo-accent transition-colors">{t.links[3]}</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-black text-slate-900 mb-8 uppercase tracking-widest">{t.support}</h4>
            <ul className="space-y-4 text-slate-500 font-medium text-sm">
              <li><a href="#" className="hover:text-cargo-accent transition-colors">Help Center</a></li>
              <li><a href="#contact" className="hover:text-cargo-accent transition-colors">{t.getInTouch}</a></li>
              <li><a href="#" className="hover:text-cargo-accent transition-colors">Feedback</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-black text-slate-900 mb-8 uppercase tracking-widest">{t.getInTouch}</h4>
            <ul className="space-y-5 text-slate-500 text-sm">
              <li className="flex items-center gap-4">
                <MapPin size={18} className="text-cargo-accent" />
                <span>Pemba, Cabo Delgado, MZ</span>
              </li>
              <li className="flex items-center gap-4">
                <Phone size={18} className="text-cargo-accent" />
                <span>+258 84 371 9441</span>
              </li>
              <li className="flex items-center gap-4">
                <Mail size={18} className="text-cargo-accent" />
                <span>info@cargofrete.co.mz</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-slate-100 text-center text-xs font-bold text-slate-400 uppercase tracking-widest">
          <p>{t.rights}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
