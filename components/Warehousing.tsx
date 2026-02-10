
import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../App';
import { TRANSLATIONS } from '../constants';

const InfoLongSection: React.FC = () => {
  const { lang } = useLanguage();
  const t = TRANSLATIONS[lang].info;

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 aspect-[3/4] bg-slate-200 overflow-hidden"
          >
            <img 
              src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1000" 
              alt="Logistics Yard" 
              className="w-full h-full object-cover"
            />
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <h3 className="text-cargo-accent text-lg font-medium mb-4 uppercase tracking-widest">{t.tag}</h3>
            <h2 className="text-4xl lg:text-6xl font-bold text-slate-900 mb-8 uppercase leading-tight">
              {t.title}
            </h2>
            <div className="space-y-6 text-slate-600 leading-relaxed text-lg mb-10">
              <p>{t.p1}</p>
              <p>{t.p2}</p>
              <p>{t.p3}</p>
            </div>
            <button className="bg-cargo-blue text-white px-10 py-3 rounded-sm font-bold uppercase tracking-widest hover:bg-cargo-accent transition-all">
              {t.cta}
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default InfoLongSection;
