
import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../App';
import { TRANSLATIONS } from '../constants';

const ServiceCards: React.FC = () => {
  const { lang } = useLanguage();
  const t = TRANSLATIONS[lang].fleet;

  const cards = [
    {
      img: "https://images.unsplash.com/photo-1520116468816-95b69f847357?q=80&w=1200",
      title: t.vessel.title,
      text: t.vessel.text
    },
    {
      img: "https://images.unsplash.com/photo-1541888946425-d81bb19480c5?q=80&w=1200",
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
    <section className="py-24 bg-slate-50" id="fleet">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-2 rounded-sm shadow-sm group"
            >
              <div className="aspect-video bg-slate-200 overflow-hidden mb-6">
                <img src={card.img} alt={card.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="px-6 pb-8 text-center">
                <h4 className="text-xl font-bold text-slate-900 mb-4">{card.title}</h4>
                <p className="text-slate-600 mb-2">{card.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceCards;
