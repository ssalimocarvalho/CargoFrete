
import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';
import { useLanguage } from '../App';
import { TRANSLATIONS } from '../constants';

const ContactForm: React.FC = () => {
  const { lang } = useLanguage();
  const t = TRANSLATIONS[lang].contact;

  return (
    <section className="py-24 bg-slate-400" id="contact">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-white"
          >
            <h2 className="text-4xl lg:text-6xl font-bold mb-10 leading-tight uppercase tracking-tighter">
              {t.title}
            </h2>
            <div className="space-y-10">
              <div className="flex items-start gap-6">
                <div className="bg-cargo-blue p-4 text-white">
                   <Phone size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold uppercase mb-1">{t.phone}</h4>
                  <p className="text-white/80">+258 84 371 9441</p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="bg-cargo-blue p-4 text-white">
                   <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold uppercase mb-1">{t.email}</h4>
                  <p className="text-white/80">management@cargofrete.co.mz</p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="bg-cargo-blue p-4 text-white">
                   <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold uppercase mb-1">{t.office}</h4>
                  <p className="text-white/80">Pemba – Cabo Delgado – Moçambique</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-12 rounded-sm shadow-2xl"
          >
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <input type="text" placeholder={t.form.fname} className="w-full bg-slate-50 border border-slate-200 px-6 py-4 outline-none focus:border-cargo-accent transition-all" required />
                <input type="text" placeholder={t.form.lname} className="w-full bg-slate-50 border border-slate-200 px-6 py-4 outline-none focus:border-cargo-accent transition-all" required />
              </div>
              <input type="email" placeholder={t.form.email} className="w-full bg-slate-50 border border-slate-200 px-6 py-4 outline-none focus:border-cargo-accent transition-all" required />
              <input type="text" placeholder={t.form.subject} className="w-full bg-slate-50 border border-slate-200 px-6 py-4 outline-none focus:border-cargo-accent transition-all" required />
              <textarea placeholder={t.form.message} rows={4} className="w-full bg-slate-50 border border-slate-200 px-6 py-4 outline-none focus:border-cargo-accent transition-all" required></textarea>
              <button className="bg-cargo-blue text-white w-full py-5 rounded-sm font-bold text-lg uppercase tracking-widest hover:bg-cargo-accent transition-all">
                {t.form.submit}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
