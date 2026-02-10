
import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../App';
import { TRANSLATIONS } from '../constants';

const StatsBar: React.FC = () => {
  const { lang } = useLanguage();
  const t = TRANSLATIONS[lang].stats;

  const stats = [
    { value: "09", label: t.warehouses },
    { value: "5000", label: t.covered },
    { value: "35000", label: t.open },
    { value: "40+", label: t.years },
  ];

  return (
    <section className="bg-cargo-blue py-16">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
          {stats.map((stat, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <div className="text-4xl lg:text-6xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-xs lg:text-sm font-medium text-slate-400 uppercase tracking-[0.2em]">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsBar;
