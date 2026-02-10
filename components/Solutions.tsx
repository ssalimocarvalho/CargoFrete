
import React from 'react';
import { motion } from 'framer-motion';
import { SECTORS_LIST, TRANSLATIONS } from '../constants';
import { CheckCircle2, Factory } from 'lucide-react';
import { useLanguage } from '../App';

const Solutions: React.FC = () => {
  const { lang } = useLanguage();
  const t = TRANSLATIONS[lang].solutions;
  const sectors = SECTORS_LIST[lang];

  return (
    <section className="py-32 bg-cargo-blue text-white overflow-hidden relative" id="sectors">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 -skew-x-12 translate-x-1/4"></div>
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 text-cargo-accent mb-6">
              <Factory size={20} />
              <span className="font-black tracking-widest text-[10px] uppercase">{t.tag}</span>
            </div>
            
            <h2 className="text-4xl lg:text-6xl font-black font-logo mb-10 leading-tight uppercase">
              {t.title} <br />
              <span className="text-cargo-accent">{t.accent}</span>
            </h2>
            
            <div className="grid sm:grid-cols-1 gap-4">
              {sectors.map((sector, i) => (
                <motion.div 
                  key={sector}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group flex items-center justify-between p-5 border border-white/10 bg-white/5 hover:bg-white/10 hover:border-cargo-accent transition-all cursor-default"
                >
                  <div className="flex items-center gap-4">
                    <CheckCircle2 className="text-cargo-accent shrink-0" size={20} />
                    <span className="text-lg font-bold uppercase tracking-tight">{sector}</span>
                  </div>
                  <div className="w-12 h-[1px] bg-white/20 group-hover:w-20 group-hover:bg-cargo-accent transition-all duration-500"></div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="p-2 border-2 border-white/10 relative group overflow-hidden rounded-sm">
              <img 
                src="https://images.unsplash.com/photo-1519003722824-194d4455a60c?q=80&w=1200" 
                alt="Industrial Logistics" 
                className="w-full h-[500px] object-cover group-hover:scale-105 transition-all duration-700"
              />
              {/* Lighter overlay to ensure visibility on the dark section background */}
              <div className="absolute inset-0 bg-cargo-blue/20 group-hover:bg-transparent transition-all"></div>
            </div>
            
            {/* Callout box */}
            <div className="absolute -bottom-10 -right-10 bg-white text-cargo-blue p-10 hidden xl:block shadow-2xl border-r-8 border-cargo-accent">
              <div className="text-[10px] font-black uppercase tracking-widest mb-2 text-cargo-accent">{t.callout}</div>
              <div className="text-4xl font-black font-logo">{t.days}</div>
              <div className="text-[10px] font-bold uppercase opacity-50">{t.notice}</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
