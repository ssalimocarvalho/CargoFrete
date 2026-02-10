
import React from 'react';
import { LOGO_URL, TRANSLATIONS } from '../constants';
import { Facebook, Twitter, Instagram, Linkedin, Youtube, Mail, Phone, MapPin, Send } from 'lucide-react';
import { useLanguage } from '../App';

const Footer: React.FC = () => {
  const { lang } = useLanguage();
  const t = TRANSLATIONS[lang].footer;

  return (
    <footer className="bg-[#3a3a3a] pt-24 pb-12 text-white">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          <div>
            <div className="bg-white p-4 rounded-sm inline-block mb-10">
              <img src={LOGO_URL} alt="CargoFrete" className="h-8" />
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-10">
              Sua porta de entrada logística em Moçambique. Mais de 40 anos de excelência operacional e compromisso com o cliente.
            </p>
            <div className="flex gap-4">
              {[Facebook, Linkedin, Instagram, Youtube].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center text-white/50 hover:bg-cargo-accent hover:text-white hover:border-cargo-accent transition-all">
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xs font-black text-white mb-10 uppercase tracking-[0.3em] border-l-4 border-cargo-accent pl-4">{t.getInTouch}</h4>
            <ul className="space-y-6 text-slate-400 text-xs font-bold uppercase tracking-wider">
              <li className="flex items-start gap-4">
                <MapPin size={18} className="text-cargo-accent shrink-0" />
                <span>Pemba, Cabo Delgado, Moçambique</span>
              </li>
              <li className="flex items-center gap-4">
                <Phone size={18} className="text-cargo-accent shrink-0" />
                <span>+258 84 371 9441</span>
              </li>
              <li className="flex items-center gap-4">
                <Mail size={18} className="text-cargo-accent shrink-0" />
                <span>info@cargofrete.co.mz</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-black text-white mb-10 uppercase tracking-[0.3em] border-l-4 border-cargo-accent pl-4">{t.quickLinks}</h4>
            <ul className="space-y-4 text-slate-400 text-xs font-bold uppercase tracking-wider">
              <li><a href="#about" className="hover:text-cargo-accent transition-colors">Introduce</a></li>
              <li><a href="#services" className="hover:text-cargo-accent transition-colors">Service</a></li>
              <li><a href="#fleet" className="hover:text-cargo-accent transition-colors">Fleet</a></li>
              <li><a href="#contact" className="hover:text-cargo-accent transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-cargo-accent transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-black text-white mb-10 uppercase tracking-[0.3em] border-l-4 border-cargo-accent pl-4">{t.newsletter}</h4>
            <p className="text-slate-400 text-sm mb-6">{t.newsDesc}</p>
            <div className="relative">
              <input type="email" placeholder={t.emailPlaceholder} className="w-full bg-white/5 border border-white/10 py-4 px-6 outline-none focus:border-cargo-accent transition-all text-sm" />
              <button className="absolute right-2 top-2 bottom-2 bg-cargo-accent px-4 flex items-center justify-center hover:bg-white hover:text-cargo-blue transition-all">
                <Send size={16} />
              </button>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/10 text-center text-[10px] font-black text-slate-500 uppercase tracking-[0.4em]">
          <p>{t.rights}</p>
          <p className="mt-4">{t.dev}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
