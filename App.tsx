
import React, { createContext, useState, useContext } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ServicesCircle from './components/Segments';
import AboutSplit from './components/About';
import StatsBar from './components/Stats';
import ServiceDetail from './components/ServiceDetail';
import Testimonials from './components/Testimonials';
import ContactForm from './components/Newsletter';
import Footer from './components/Footer';
import WhyChoose from './components/WhyChoose';
import Solutions from './components/Solutions';
import InfoLongSection from './components/Warehousing';
import Fleet from './components/Fleet';

type Language = 'pt' | 'en';

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
}

export const LanguageContext = createContext<LanguageContextType>({
  lang: 'pt',
  setLang: () => {}
});

export const useLanguage = () => useContext(LanguageContext);

function App() {
  const [lang, setLang] = useState<Language>('pt');

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      <div className="min-h-screen selection:bg-cargo-accent selection:text-white bg-white flex flex-col">
        <Header />
        <main className="flex-grow">
          <Hero />
          <ServicesCircle />
          <StatsBar />
          <WhyChoose />
          <AboutSplit />
          <Fleet />
          <ServiceDetail />
          <Solutions />
          <InfoLongSection />
          <Testimonials />
          <ContactForm />
        </main>
        <Footer />
        
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 z-50 bg-cargo-blue p-3.5 rounded-full shadow-2xl text-white hover:bg-cargo-accent transition-all group active:scale-90"
          aria-label="Voltar ao topo"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
            <path d="m18 15-6-6-6 6"/>
          </svg>
        </button>
      </div>
    </LanguageContext.Provider>
  );
}

export default App;