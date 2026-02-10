
import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, RefreshCw } from 'lucide-react';
import { useLanguage } from '../App';
import { TRANSLATIONS } from '../constants';

const ContactForm: React.FC = () => {
  const { lang } = useLanguage();
  const t = TRANSLATIONS[lang].contact;

  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden" id="contact">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <span className="text-cargo-accent font-black text-[10px] tracking-widest uppercase mb-4 block">{t.tag}</span>
          <h2 className="text-3xl lg:text-4xl font-black text-slate-900 uppercase tracking-tight">{t.title}</h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {[
            { icon: MapPin, title: t.office, val: "4821 Ridge Top Cir, Pemba, Cabo Delgado, MZ" },
            { icon: Phone, title: t.phone, val: "+258 84 371 9441" },
            { icon: Mail, title: t.email, val: "info@cargofrete.co.mz" }
          ].map((item, i) => (
            <div key={i} className="bg-white p-12 text-center border border-slate-100 shadow-sm hover:shadow-xl transition-all group">
              <div className="w-16 h-16 bg-cargo-accent rounded-full flex items-center justify-center mx-auto mb-6 text-white group-hover:scale-110 transition-transform">
                <item.icon size={28} />
              </div>
              <h4 className="text-lg font-black uppercase mb-2 text-slate-900">{item.title}</h4>
              <p className="text-sm text-slate-500 whitespace-pre-line">{item.val}</p>
            </div>
          ))}
        </div>

        <div className="bg-white shadow-2xl rounded-sm overflow-hidden grid lg:grid-cols-12 items-stretch">
          <div className="lg:col-span-5 bg-cargo-blue p-0">
             <img src="https://images.unsplash.com/photo-1621905252507-b35482cd74b4?q=80&w=1200" className="w-full h-full object-cover" alt="Contact" />
          </div>
          <div className="lg:col-span-7 p-12">
            <h3 className="text-2xl font-black text-slate-900 uppercase mb-8 border-b border-slate-100 pb-6">{t.form.title}</h3>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{t.form.name}</label>
                  <input type="text" placeholder={t.form.fname} className="w-full border-b border-slate-200 py-3 outline-none focus:border-cargo-accent transition-all text-sm" required />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{t.form.phoneLabel}</label>
                  <input type="text" placeholder="+258 ..." className="w-full border-b border-slate-200 py-3 outline-none focus:border-cargo-accent transition-all text-sm" required />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{t.form.emailLabel}</label>
                <input type="email" placeholder={t.form.emailLabel} className="w-full border-b border-slate-200 py-3 outline-none focus:border-cargo-accent transition-all text-sm" required />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{t.form.descLabel}</label>
                <textarea placeholder={t.form.note} rows={2} className="w-full border-b border-slate-200 py-3 outline-none focus:border-cargo-accent transition-all text-sm" required></textarea>
              </div>
              <div className="flex gap-4 pt-6">
                <button type="reset" className="flex-1 border border-slate-200 text-slate-400 py-4 font-black text-xs uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-slate-50 transition-all">
                  <RefreshCw size={14} /> {t.form.refresh}
                </button>
                <button type="submit" className="flex-[2] bg-cargo-accent text-white py-4 font-black text-xs uppercase tracking-widest hover:bg-cargo-blue transition-all shadow-lg shadow-cargo-accent/20">
                  {t.form.submit}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
