
import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../App';
import { TRANSLATIONS } from '../constants';

const StatsBar: React.FC = () => {
  const { lang } = useLanguage();
  const t = TRANSLATIONS[lang].stats;

  const bars = [
    { label: t.sea, val: 95 },
    { label: t.air, val: 85 },
    { label: t.inland, val: 75 },
  ];

  return (
    <section className="bg-[#3a3a3a] py-24 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full opacity-10 pointer-events-none">
        <img src="https://images.unsplash.com/photo-1494412651409-8963ce7935a7?q=80&w=1000" className="object-cover h-full" alt="Bg" />
      </div>

      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <span className="text-cargo-accent font-black text-[10px] tracking-widest uppercase mb-4 block">{t.subtitle}</span>
            <h2 className="text-3xl lg:text-5xl font-black text-white uppercase mb-8 leading-tight">{t.title}</h2>
            <p className="text-slate-400 mb-10 leading-relaxed">{t.desc}</p>
            <button className="bg-cargo-accent text-white px-10 py-4 font-bold text-xs uppercase tracking-widest hover:bg-white hover:text-cargo-blue transition-all">
              {t.cta}
            </button>
          </div>

          <div className="space-y-8">
            {bars.map((bar, i) => (
              <div key={i}>
                <div className="flex justify-between items-center mb-3">
                  <span className="text-white font-bold text-sm uppercase tracking-wider">{bar.label}</span>
                  <span className="text-cargo-accent font-black">{bar.val}%</span>
                </div>
                <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: `${bar.val}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="h-full bg-cargo-accent"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-12 mt-24 border-t border-white/10 pt-16">
          {t.counters.map((c, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center md:text-left"
            >
              <div className="text-5xl font-black text-white mb-4">{c.val}</div>
              <h4 className="text-cargo-accent font-black uppercase tracking-widest text-sm mb-2">{c.label}</h4>
              <p className="text-slate-400 text-xs leading-relaxed max-w-xs">{c.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsBar;
