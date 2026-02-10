
import React from 'react';
import { motion } from 'framer-motion';
import { Anchor, Truck, ShieldCheck } from 'lucide-react';
import { useLanguage } from '../App';
import { TRANSLATIONS } from '../constants';

const ServicesCircle: React.FC = () => {
  const { lang } = useLanguage();
  const t = TRANSLATIONS[lang].services;

  const items = [
    { 
      icon: Anchor, 
      title: t.sea.title, 
      text: t.sea.text 
    },
    { 
      icon: ShieldCheck, 
      title: t.project.title, 
      text: t.project.text 
    },
    { 
      icon: Truck, 
      title: t.road.title, 
      text: t.road.text 
    },
  ];

  return (
    <section className="py-24 bg-white" id="services">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-3 gap-16">
          {items.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex flex-col items-center text-center"
            >
              <div className="w-40 h-40 bg-cargo-blue rounded-full flex items-center justify-center mb-8 shadow-xl">
                <item.icon size={64} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4 uppercase tracking-tight">{item.title}</h3>
              <p className="text-slate-600 mb-8 leading-relaxed">
                {item.text}
              </p>
              <button className="bg-cargo-accent text-white px-8 py-2.5 rounded-sm font-bold uppercase text-xs tracking-widest hover:bg-cargo-blue transition-all">
                {t.cta}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesCircle;
