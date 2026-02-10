
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
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-square lg:aspect-video bg-cargo-blue rounded-sm overflow-hidden shadow-2xl relative z-10">
              <img 
                src="https://images.unsplash.com/photo-1519003722824-192d992a6059?q=80&w=2000" 
                alt="Cargo Transportation Fleet" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-cargo-blue/10 pointer-events-none"></div>
            </div>
            {/* Elemento decorativo atrás da imagem */}
            <div className="absolute -bottom-6 -right-6 w-full h-full border-8 border-cargo-accent/20 -z-0 rounded-sm"></div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-cargo-accent font-black uppercase tracking-[0.3em] text-[10px] mb-4 block">{t.tag}</span>
            <h2 className="text-4xl lg:text-6xl font-black text-cargo-blue mb-8 leading-tight uppercase tracking-tighter font-logo">
              {t.title}
            </h2>
            <div className="space-y-6">
              <p className="text-slate-600 text-lg leading-relaxed border-l-4 border-cargo-accent pl-6 font-medium">
                {t.p1}
              </p>
              <p className="text-slate-500 text-base leading-relaxed">
                {t.p2}
              </p>
            </div>
            <div className="mt-12 flex items-center gap-6">
              <button 
                className="bg-cargo-blue text-white px-10 py-4 font-black text-xs uppercase tracking-widest hover:bg-cargo-accent transition-all shadow-xl active:scale-95"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                {t.cta}
              </button>
              <div className="hidden sm:block">
                <p className="text-3xl font-black text-cargo-blue mb-0">40+</p>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Anos de Experiência</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSplit;