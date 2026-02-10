
import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../App';
import { TRANSLATIONS } from '../constants';

const Fleet: React.FC = () => {
  const { lang } = useLanguage();
  const t = TRANSLATIONS[lang].fleet;

  const cards = [
    {
      img: "https://images.unsplash.com/photo-1494412651409-8963ce7935a7?q=80&w=1200",
      title: t.vessel.title,
      text: t.vessel.text
    },
    {
      img: "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?q=80&w=1200",
      title: t.crane.title,
      text: t.crane.text
    },
    {
      img: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=1200",
      title: t.truck.title,
      text: t.truck.text
    }
  ];

  return (
    <section className="py-24 bg-white" id="fleet">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <span className="text-cargo-accent font-black text-[10px] uppercase tracking-[0.3em] mb-4 block">Capacidade Logística</span>
          <h2 className="text-3xl lg:text-4xl font-black text-slate-900 uppercase tracking-tight">Nossa Frota & Equipamento</h2>
          <div className="w-12 h-1 bg-cargo-accent mx-auto mt-6"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {cards.map((card, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="bg-slate-50 overflow-hidden group border border-slate-100 hover:border-cargo-accent/30 transition-all duration-500"
            >
              <div className="aspect-[4/3] bg-slate-200 overflow-hidden relative">
                <img 
                  src={card.img} 
                  alt={card.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                />
                <div className="absolute inset-0 bg-cargo-blue/10 group-hover:bg-transparent transition-all duration-500"></div>
              </div>
              <div className="p-8">
                <h4 className="text-xl font-black text-cargo-blue mb-4 uppercase tracking-tighter font-logo">{card.title}</h4>
                <p className="text-slate-500 text-sm leading-relaxed">{card.text}</p>
                <div className="mt-6 w-0 group-hover:w-full h-[2px] bg-cargo-accent transition-all duration-500"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Fleet;