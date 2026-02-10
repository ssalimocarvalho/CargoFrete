
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../App';
import { TRANSLATIONS } from '../constants';

const Hero: React.FC = () => {
  const { lang } = useLanguage();
  const t = TRANSLATIONS[lang].hero;
  
  const images = [
    "https://images.unsplash.com/photo-1541888946425-d81bb19480c5?q=80&w=2000", // Requested Crane Image
    "https://images.unsplash.com/photo-1501700493788-fa1a4fc9fe62?q=80&w=2000", // Modern Truck Highway
    "https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=2000", // Global Logistics
    "https://images.unsplash.com/photo-1494412651409-8963ce7935a7?q=80&w=2000"  // Port Infrastructure
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <section className="relative h-screen min-h-[600px] flex items-center overflow-hidden bg-cargo-blue" id="home">
      {/* Background Carousel */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImage}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 0.45, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute inset-0 w-full h-full"
          >
            <img 
              src={images[currentImage]} 
              className="w-full h-full object-cover grayscale" 
              alt="Logistics Operation" 
            />
          </motion.div>
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-r from-cargo-blue via-cargo-blue/70 to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-[24px] lg:text-[32px] font-black text-white leading-tight mb-6 uppercase tracking-tight">
              {t.title}
            </h1>
            <p className="text-base lg:text-lg text-slate-300 mb-8 max-w-xl leading-relaxed font-light">
              {t.desc}
            </p>
            <div className="flex flex-wrap gap-4">
              <button 
                className="bg-cargo-accent text-white px-6 py-3 rounded-sm font-bold text-xs hover:bg-white hover:text-cargo-blue transition-all shadow-xl uppercase tracking-widest"
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              >
                {t.cta}
              </button>
              <button 
                className="border border-white/20 text-white px-6 py-3 rounded-sm font-bold text-xs hover:bg-white/10 transition-all uppercase tracking-widest"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                {t.contact}
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-10 left-12 flex gap-3 z-20">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentImage(idx)}
            className={`h-1 transition-all duration-500 rounded-full ${currentImage === idx ? 'w-8 bg-cargo-accent' : 'w-2 bg-white/20'}`}
          ></button>
        ))}
      </div>
    </section>
  );
};

export default Hero;
