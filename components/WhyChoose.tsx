
import React from 'react';
import { motion } from 'framer-motion';
import { Map, Zap, Users, Globe } from 'lucide-react';
import { useLanguage } from '../App';
import { TRANSLATIONS } from '../constants';

const WhyChoose: React.FC = () => {
  const { lang } = useLanguage();
  const t = TRANSLATIONS[lang].whyChoose;
  
  const icons = [Map, Zap, Users, Globe];

  return (
    <section className="py-24 bg-white" id="why-choose">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-20">
          <h2 className="text-3xl lg:text-5xl font-black text-cargo-blue font-logo uppercase mb-6">{t.title}</h2>
          <div className="w-20 h-1.5 bg-cargo-accent mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {t.items.map((point, i) => {
            const Icon = icons[i];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center group"
              >
                <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-cargo-accent transition-colors duration-500">
                  <Icon size={32} className="text-cargo-blue group-hover:text-white transition-colors" />
                </div>
                <h4 className="text-lg font-black uppercase text-cargo-blue mb-3">{point.title}</h4>
                <p className="text-slate-500 text-sm leading-relaxed">{point.text}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
