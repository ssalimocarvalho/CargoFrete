
import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Search, Zap, Database } from 'lucide-react';
import { useLanguage } from '../App';
import { TRANSLATIONS } from '../constants';

const ServicesCircle: React.FC = () => {
  const { lang } = useLanguage();
  const t = TRANSLATIONS[lang].servicesGrid;

  const items = [
    { icon: Globe, bg: 'bg-cargo-accent', color: 'text-white' },
    { icon: Search, bg: 'bg-cargo-blue', color: 'text-white' },
    { icon: Zap, bg: 'bg-[#1a4a6e]', color: 'text-white' },
    { icon: Database, bg: 'bg-[#2ecc71]', color: 'text-white' },
  ];

  return (
    <section className="py-24 bg-slate-50" id="services">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <span className="text-cargo-accent font-black text-[10px] uppercase tracking-[0.3em] mb-4 block">{t.tag}</span>
          <h2 className="text-3xl lg:text-4xl font-black text-slate-900 uppercase tracking-tight">{t.title}</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.items.map((item, idx) => {
            const config = items[idx];
            return (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`${config.bg} p-12 text-center flex flex-col items-center group hover:-translate-y-2 transition-all duration-300 shadow-xl`}
              >
                <div className="w-20 h-20 border-2 border-white/20 rounded-full flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                  <config.icon size={40} className="text-white" />
                </div>
                <h3 className="text-lg font-black text-white mb-4 uppercase tracking-wider">{item.title}</h3>
                <p className="text-white/70 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesCircle;
