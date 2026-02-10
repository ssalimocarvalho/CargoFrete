
import { ServiceSegment, StatItem } from './types';

export const COMPANY_NAME = "CargoFrete";
export const LOGO_URL = "https://i.postimg.cc/30FRYwSX/Parceiros-11.png";

export const SECTORS_LIST = {
  pt: ["Oil & Gas", "Mineração & Minerais", "Infraestrutura & Construção", "Energia Renovável", "Indústria Pesada"],
  en: ["Oil & Gas", "Mining & Minerals", "Infrastructure & Construction", "Renewable Energy", "Heavy Industry"]
};

export const TRANSLATIONS = {
  pt: {
    nav: {
      home: "Início",
      about: "Sobre",
      services: "Serviços",
      fleet: "Frota",
      contact: "Contacto",
      quote: "Pedir Cotação"
    },
    hero: {
      title: "Soluções Logísticas Confiáveis Para o Seu Negócio.",
      desc: "Sua porta de entrada logística em Pemba, Palma e África Oriental. Especialistas em Shipping e Project Cargo com mais de 40 anos de excelência.",
      cta: "Explorar Serviços",
      contact: "Contacte-nos"
    },
    about: {
      tag: "40 Anos de Excelência",
      title: "Referência em Shipping no Norte de Moçambique",
      p1: "A CargoFrete é a referência máxima no mercado de shipping brokerage no Norte de Moçambique.",
      p2: "Garantimos que sua carga chegue ao destino com segurança, seja via mar, terra ou ar.",
      cta: "Saber Mais"
    },
    stats: {
      warehouses: "Armazéns Estratégicos",
      covered: "m² Área Coberta",
      open: "m² Pátio Aberto",
      years: "Anos de Experiência"
    },
    services: {
      sea: { title: "Frete Marítimo", text: "Operações completas de navegação e corretagem em todos os portos." },
      project: { title: "Carga de Projeto", text: "Logística para Oil & Gas e Mineração com engenharia de precisão." },
      road: { title: "Frete Rodoviário", text: "Frota própria para o corredor Pemba-Palma-Nacala." },
      cta: "Saber Mais"
    },
    solutions: {
      tag: "Verticais Industriais",
      title: "ESPECIALIZADOS EM",
      accent: "SECTORES COMPLEXOS",
      callout: "Mobilização Rápida",
      days: "7 DIAS",
      notice: "Período de Aviso Padrão"
    },
    whyChoose: {
      title: "Porquê escolher a CargoFrete?",
      items: [
        { title: "Presença Local", text: "Escritórios físicos em Pemba, Palma e Nacala com suporte 24/7." },
        { title: "Agilidade", text: "Mobilização rápida de equipamentos e desalfandegamento para projetos críticos." },
        { title: "Experiência", text: "Mais de 40 anos navegando no cenário jurídico marítimo moçambicano." },
        { title: "Alcance Regional", text: "Conectado a uma rede global através de parcerias estratégicas na África Oriental." }
      ]
    },
    testimonials: {
      tag: "Histórias de Sucesso",
      title: "O Que Dizem os Nossos Parceiros",
      desc: "Mais de 40 anos construindo confiança através da excelência operacional.",
      data: [
        { name: "John Doe", title: "Gestor de Projeto, ENI", text: "A CargoFrete transformou a eficiência da nossa cadeia de suprimentos em Moçambique." },
        { name: "Sarah Smith", title: "Líder Logística, TotalEnergies", text: "Seus serviços de chartering são inigualáveis em velocidade e profissionalismo." },
        { name: "António Meque", title: "Director de Operações", text: "Trabalhar com a CargoFrete é garantia de segurança para nossos equipamentos." },
        { name: "Linda Gove", title: "Oficial de Compras", text: "Confiáveis e transparentes. O conhecimento local faz toda a diferença." },
        { name: "David Wilson", title: "Corretor de Navios", text: "Excelentes serviços de agência protectora em todos os portos moçambicanos." },
        { name: "Maria Chilaule", title: "Logística de Mineração", text: "Suas soluções de armazenamento em Pemba são de primeira classe." }
      ]
    },
    info: {
      tag: "Provedor Global",
      title: "Infraestrutura Dedicada",
      p1: "Padrão da indústria desde a fundação.",
      p2: "Localizados no coração do corredor logístico.",
      p3: "Centros vitais para Oil & Gas.",
      cta: "Saber Mais"
    },
    fleet: {
      vessel: { title: "Chartering", text: "Agência para navios de linha e tramp." },
      crane: { title: "Guindastes", text: "Capacidade para cargas superdimensionadas." },
      truck: { title: "Transporte", text: "Soluções terrestres e transfronteiriças." }
    },
    contact: {
      title: "Fale com os Nossos Especialistas",
      phone: "Chamada Directa",
      email: "Suporte por Email",
      office: "Sede Principal",
      form: {
        fname: "Nome *",
        lname: "Apelido *",
        email: "Email *",
        subject: "Assunto *",
        message: "Mensagem *",
        submit: "Enviar Mensagem"
      }
    },
    footer: {
      company: "Empresa",
      support: "Suporte",
      getInTouch: "Contacto",
      rights: "© 2025 CargoFrete Logística S.A. Todos os direitos reservados.",
      links: ["Sobre Nós", "Serviços", "Frota", "Privacidade"]
    }
  },
  en: {
    nav: {
      home: "Home",
      about: "About",
      services: "Services",
      fleet: "Fleet",
      contact: "Contact",
      quote: "Get a Quote"
    },
    hero: {
      title: "Reliable Logistics Solutions For Your Business.",
      desc: "Your logistics gateway in Pemba, Palma, and East Africa. Shipping and Project Cargo specialists with over 40 years of excellence.",
      cta: "Explore Services",
      contact: "Contact Us"
    },
    about: {
      tag: "40 Years of Excellence",
      title: "Shipping Benchmark in Northern Mozambique",
      p1: "CargoFrete is the ultimate reference in the shipping brokerage market in Northern Mozambique.",
      p2: "We ensure your cargo reaches its destination safely, whether by sea, land, or air.",
      cta: "Learn More"
    },
    stats: {
      warehouses: "Strategic Warehouses",
      covered: "m² Covered Area",
      open: "m² Open Yard",
      years: "Years Experience"
    },
    services: {
      sea: { title: "Sea Freight", text: "Full shipping and brokerage operations in all major ports." },
      project: { title: "Project Cargo", text: "Oil & Gas and Mining logistics with precision engineering." },
      road: { title: "Road Freight", text: "Own fleet for the Pemba-Palma-Nacala corridor." },
      cta: "Learn More"
    },
    solutions: {
      tag: "Industrial Verticals",
      title: "SPECIALIZED IN",
      accent: "COMPLEX SECTORS",
      callout: "Fast Mobilization",
      days: "7 DAYS",
      notice: "Standard Notice Period"
    },
    whyChoose: {
      title: "Why Choose CargoFrete?",
      items: [
        { title: "Local Presence", text: "Physical offices in Pemba, Palma, and Nacala with 24/7 support." },
        { title: "Agility", text: "Fast equipment mobilization and customs clearance for critical projects." },
        { title: "Expertise", text: "Over 40 years navigating the Mozambican maritime legal landscape." },
        { title: "Regional Reach", text: "Connected to a global network via strategic East Africa partnerships." }
      ]
    },
    testimonials: {
      tag: "Success Stories",
      title: "What Our Partners Say",
      desc: "Over 40 years building trust through operational excellence.",
      data: [
        { name: "John Doe", title: "Project Manager, ENI", text: "CargoFrete has transformed our supply chain efficiency in Mozambique." },
        { name: "Sarah Smith", title: "Logistics Lead, TotalEnergies", text: "Their chartering services are unmatched in speed and professionalism." },
        { name: "António Meque", title: "Operations Director", text: "Working with CargoFrete is a guarantee of safety for our equipment." },
        { name: "Linda Gove", title: "Procurement Officer", text: "Reliable and transparent. Local knowledge makes all the difference." },
        { name: "David Wilson", title: "Shipping Broker", text: "Excellent protective agency services in all Mozambican ports." },
        { name: "Maria Chilaule", title: "Mining Logistics", text: "Their warehousing solutions in Pemba are top-notch." }
      ]
    },
    info: {
      tag: "Global Provider",
      title: "Dedicated Infrastructure",
      p1: "Industry standard since inception.",
      p2: "Located at the heart of the logistics corridor.",
      p3: "Vital hubs for Oil & Gas.",
      cta: "Learn More"
    },
    fleet: {
      vessel: { title: "Chartering", text: "Liner and tramp agency services." },
      crane: { title: "Heavy Cranes", text: "Capacity for oversized project cargo." },
      truck: { title: "Transport", text: "Inland and cross-border haulage solutions." }
    },
    contact: {
      title: "Get In Touch With Our Experts",
      phone: "Direct Call",
      email: "Email Support",
      office: "Head Office",
      form: {
        fname: "First Name *",
        lname: "Last Name *",
        email: "Email *",
        subject: "Subject *",
        message: "Message *",
        submit: "Send Message"
      }
    },
    footer: {
      company: "Company",
      support: "Support",
      getInTouch: "Get In Touch",
      rights: "© 2025 CargoFrete Logística S.A. All rights reserved.",
      links: ["About Us", "Services", "Fleet", "Privacy Policy"]
    }
  }
};
