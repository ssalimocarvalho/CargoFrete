
import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../App';
import { TRANSLATIONS } from '../constants';

const AboutSplit: React.FC = () => {
  const { lang } = useLanguage();
  const t = TRANSLATIONS[lang].about;

  return (
    <section className="py-24 bg-slate-50" id="about">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="aspect-square lg:aspect-video bg-slate-300 rounded-sm overflow-hidden shadow-2xl"
          >
            <img 
              src="https://images.unsplash.com/photo-1621905252507-b35482cd74b4?q=80&w=1200" 
              alt="Cargo Transportation" 
              className="w-full h-full object-cover"
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-cargo-accent font-bold uppercase tracking-widest text-sm mb-4 block">{t.tag}</span>
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-8 leading-tight uppercase tracking-tighter">
              {t.title}
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              {t.p1}
            </p>
            <p className="text-slate-600 text-lg leading-relaxed mb-10">
              {t.p2}
            </p>
            <button className="bg-cargo-blue text-white px-10 py-3 rounded-sm font-bold text-lg hover:bg-cargo-accent transition-all">
              {t.cta}
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSplit;
