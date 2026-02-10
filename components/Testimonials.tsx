
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '../App';
import { TRANSLATIONS } from '../constants';

const Testimonials: React.FC = () => {
  const { lang } = useLanguage();
  const t = TRANSLATIONS[lang].testimonials;
  const [activePage, setActivePage] = useState(0);

  const itemsPerPage = 2;
  const totalPages = Math.ceil(t.data.length / itemsPerPage);

  const handleNext = () => setActivePage((prev) => (prev + 1) % totalPages);
  const handlePrev = () => setActivePage((prev) => (prev - 1 + totalPages) % totalPages);

  return (
    <section className="py-32 bg-white overflow-hidden" id="testimonials">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-4">
             <h3 className="text-cargo-accent font-bold uppercase tracking-widest text-[10px] mb-4">{t.tag}</h3>
             <h2 className="text-4xl lg:text-6xl font-bold text-slate-900 mb-8 leading-tight uppercase tracking-tighter">{t.title}</h2>
             <p className="text-slate-500 mb-10 text-lg">{t.desc}</p>
             <div className="flex gap-4">
                <button onClick={handlePrev} className="p-4 border border-slate-200 rounded-full hover:bg-cargo-blue hover:text-white transition-all">
                  <ChevronLeft size={20} />
                </button>
                <button onClick={handleNext} className="p-4 border border-slate-200 rounded-full hover:bg-cargo-blue hover:text-white transition-all">
                  <ChevronRight size={20} />
                </button>
             </div>
          </div>
          
          <div className="lg:col-span-8">
            <div className="relative h-[480px]">
              <AnimatePresence mode="wait">
                <motion.div 
                  key={`${lang}-${activePage}`}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="grid md:grid-cols-2 gap-8 absolute inset-0"
                >
                  {t.data.slice(activePage * itemsPerPage, (activePage + 1) * itemsPerPage).map((item, i) => (
                    <div 
                      key={i}
                      className="bg-slate-50 p-10 rounded-sm border-b-4 border-cargo-accent shadow-sm flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex gap-1 mb-8 text-cargo-accent">
                          {[...Array(5)].map((_, j) => <Star key={j} size={16} fill="currentColor" />)}
                        </div>
                        <p className="text-slate-700 italic mb-10 leading-relaxed text-lg font-light">"{item.text}"</p>
                      </div>
                      <div className="flex items-center gap-5 border-t border-slate-200 pt-8">
                        <div className="w-12 h-12 bg-cargo-blue/10 rounded-full flex items-center justify-center text-cargo-blue font-bold text-lg">
                          {item.name.charAt(0)}
                        </div>
                        <div>
                          <h4 className="font-bold text-slate-900 text-base">{item.name}</h4>
                          <p className="text-[10px] text-cargo-accent uppercase font-bold tracking-[0.2em]">{item.title}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>
            
            <div className="flex justify-center mt-12 gap-3">
              {[...Array(totalPages)].map((_, i) => (
                <button 
                  key={i} 
                  onClick={() => setActivePage(i)}
                  className={`h-1.5 transition-all duration-300 rounded-full ${activePage === i ? 'w-10 bg-cargo-blue' : 'w-3 bg-slate-200 hover:bg-slate-300'}`}
                  aria-label={`Go to page ${i + 1}`}
                ></button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
