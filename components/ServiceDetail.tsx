
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../App';
import { TRANSLATIONS } from '../constants';
import { ChevronRight, FileText, CheckCircle } from 'lucide-react';

const ServiceDetail: React.FC = () => {
  const { lang } = useLanguage();
  const t = TRANSLATIONS[lang].serviceDetail;
  const [active, setActive] = useState(0);

  return (
    <section className="py-24 bg-white" id="service-detail">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-16">
          {/* Sidebar */}
          <div className="lg:col-span-3 space-y-8">
            <div className="bg-slate-50 rounded-sm overflow-hidden border border-slate-100 shadow-sm">
              <div className="bg-cargo-blue p-6 text-white font-black uppercase text-sm tracking-widest">
                {t.sidebarTitle}
              </div>
              <div className="flex flex-col">
                {t.menu.map((item, i) => (
                  <button 
                    key={i}
                    onClick={() => setActive(i)}
                    className={`flex items-center justify-between p-5 text-left text-xs font-bold uppercase transition-all border-b border-slate-100 last:border-0 ${active === i ? 'bg-cargo-accent text-white' : 'hover:bg-slate-100 text-slate-500'}`}
                  >
                    {item} <ChevronRight size={14} />
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-cargo-accent p-8 text-white rounded-sm shadow-xl shadow-cargo-accent/20">
              <FileText size={32} className="mb-4" />
              <h4 className="text-lg font-black uppercase mb-2">{t.brochureTitle}</h4>
              <p className="text-xs text-white/70 mb-6">CargoFreteService.PDF 2.1 MB</p>
              <button className="bg-white text-cargo-accent w-full py-3 text-xs font-black uppercase tracking-widest hover:bg-cargo-blue hover:text-white transition-all">
                {t.download}
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="lg:col-span-9">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
              >
                <h2 className="text-3xl font-black text-slate-900 uppercase tracking-tight mb-8 border-l-4 border-cargo-accent pl-6">{t.menu[active]}</h2>
                <p className="text-slate-600 text-lg leading-relaxed mb-10">{t.desc}</p>
                
                <div className="grid md:grid-cols-2 gap-12 mb-16">
                  <div className="aspect-video bg-slate-100 rounded-sm overflow-hidden shadow-lg">
                    <img 
                      src={active === 0 ? "https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=1200" : "https://images.unsplash.com/photo-1494412651409-8963ce7935a7?q=80&w=1200"} 
                      className="w-full h-full object-cover" 
                      alt="Service" 
                    />
                  </div>
                  <div>
                    <h4 className="text-xl font-black text-slate-900 uppercase mb-6">{t.benefit}</h4>
                    <p className="text-slate-500 mb-8">{t.benefitDesc}</p>
                    <ul className="space-y-4">
                      {[1, 2, 3].map(i => (
                        <li key={i} className="flex items-center gap-4 group">
                          <div className="w-10 h-10 bg-slate-50 border border-slate-100 flex items-center justify-center text-cargo-accent group-hover:bg-cargo-accent group-hover:text-white transition-all">
                            <CheckCircle size={18} />
                          </div>
                          <span className="text-sm font-bold text-slate-700 uppercase">{t.inspection} {i}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceDetail;
