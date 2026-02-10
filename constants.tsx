
import { ServiceSegment, StatItem } from './types';

export const COMPANY_NAME = "Cargo Frete";
export const LOGO_URL = "https://i.postimg.cc/30FRYwSX/Parceiros-11.png";

export const SECTORS_LIST = {
  pt: ["Mineração e Energia", "Agricultura e Pesca", "Construção Civil", "Ajuda Humanitária"],
  en: ["Mining & Energy", "Agriculture & Fishing", "Construction", "Humanitarian Aid"]
};

export const TRANSLATIONS = {
  pt: {
    topBar: {
      schedule: "SEG - SEX: 08:00 - 17:30",
      hotline: "Hotline: +258 84 371 9441",
      support: "Suporte: info@cargofrete.co.mz"
    },
    nav: {
      home: "Início",
      about: "Sobre",
      services: "Serviços",
      news: "Notícias",
      contact: "Contacto",
      quote: "Ligue-nos Agora"
    },
    hero: {
      welcome: "Bem-vindo à",
      title: "Soluções Logísticas Confiáveis Para o Seu Negócio.",
      desc: "Sua porta de entrada logística em Moçambique e África Oriental. Especialistas em Shipping e Project Cargo.",
      cta: "Explorar Serviços",
      contact: "Contacte-nos",
      booking: {
        title: "Booking & Rastreio",
        send: "Enviar Carga",
        track: "Rastrear Item",
        submit: "SUBMETER",
        name: "Nome",
        fname: "Primeiro Nome",
        email: "Email",
        mobile: "Telemóvel",
        phone: "Telefone"
      }
    },
    stats: {
      title: "Volume de ordens e mercadorias no último ano",
      subtitle: "NÓS SOMOS OS MELHORES",
      desc: "A Cargo Frete coloca sempre a experiência do cliente em primeiro lugar, garantindo responsabilidade total.",
      sea: "Cargas via Mar",
      air: "Cargas via Ar",
      inland: "Cargas Terrestres",
      cta: "Contacte Agora",
      counters: [
        { val: "12,100", label: "Ordens", desc: "Sempre buscando a satisfação total." },
        { val: "4,000", label: "Toneladas", desc: "Eficiência em larga escala." },
        { val: "1,100", label: "Clientes Satisfeitos", desc: "Parceria de longo prazo." }
      ]
    },
    servicesGrid: {
      tag: "NOSSO SERVIÇO",
      title: "O QUE PODEMOS FAZER POR VOCÊ",
      items: [
        { title: "Mundial", desc: "Alcance global em todos os continentes." },
        { title: "Rastreio", desc: "Monitoramento em tempo real 24/7." },
        { title: "Rápido e Seguro", desc: "Pontualidade e integridade garantida." },
        { title: "Armazenagem", desc: "Espaço estratégico para sua carga." }
      ]
    },
    serviceDetail: {
      sidebarTitle: "Nossos Serviços",
      brochureTitle: "Nossas Brochuras",
      download: "Descarregar",
      menu: ["Transporte Aéreo", "Transporte Marítimo", "Transporte Ferroviário", "Transporte Rodoviário"],
      title: "Transporte Aéreo",
      desc: "Acreditamos na entrega de um serviço inigualável. Com décadas de experiência, ganhamos reputação pela precisão e confiabilidade.",
      benefit: "Como se beneficiar",
      benefitDesc: "Fornecemos soluções eficientes com compromisso à excelência e satisfação do cliente.",
      inspection: "Inspeção de Carga"
    },
    about: {
      tag: "40 Anos de Excelência",
      title: "Referência em Shipping no Norte de Moçambique",
      p1: "A Cargo Frete é a referência máxima no mercado de shipping brokerage no Norte de Moçambique.",
      p2: "Garantimos que sua carga chegue ao destino com segurança, seja via mar, terra ou ar.",
      cta: "Saber Mais"
    },
    fleet: {
      vessel: { title: "Chartering", text: "Agência para navios de linha e tramp." },
      crane: { title: "Guindastes", text: "Capacidade para cargas superdimensionadas." },
      truck: { title: "Transporte", text: "Soluções terrestres e transfronteiriças." }
    },
    solutions: {
      tag: "Soluções para Indústrias",
      title: "Logística Integrada para",
      accent: "Setores Estratégicos",
      callout: "Disponibilidade",
      days: "24/7",
      notice: "Operações Ininterruptas"
    },
    testimonials: {
      tag: "Depoimentos",
      title: "O que dizem os nossos clientes",
      desc: "Confiança construída através de décadas de serviço de excelência em Moçambique.",
      data: [
        { text: "A Cargo Frete tem sido um parceiro vital para nossas operações de mineração em Tete. Eficiência absoluta.", name: "António Silva", title: "Gestor Logístico" },
        { text: "A precisão no manuseio de carga de projeto é o que os diferencia no mercado moçambicano.", name: "Maria Santos", title: "Diretora de Operações" },
        { text: "Excelente suporte ao cliente e monitoramento constante. Recomendo fortemente.", name: "João Pereira", title: "Importador" },
        { text: "Serviço de despacho aduaneiro rápido e sem complicações em Pemba.", name: "Lucia Mondlane", title: "Empresária" }
      ]
    },
    info: {
      tag: "Armazenagem Estratégica",
      title: "Gestão Eficiente de Inventário",
      p1: "Nossas instalações de armazenamento em pontos estratégicos de Moçambique garantem a segurança e integridade da sua carga.",
      p2: "Oferecemos soluções personalizadas para diversos tipos de mercadorias, desde produtos perecíveis até equipamentos pesados.",
      p3: "Com sistemas modernos de gestão, garantimos visibilidade total do seu estoque em tempo real.",
      cta: "Consulte Disponibilidade"
    },
    whyChoose: {
      title: "Porquê escolher a Cargo Frete?",
      items: [
        { title: "Cobertura Regional", text: "Presença forte em todo o Norte de Moçambique e conexões na África Oriental." },
        { title: "Agilidade", text: "Processos simplificados para garantir o menor tempo de trânsito possível." },
        { title: "Experiência", text: "Mais de 40 anos de conhecimento profundo do mercado local e internacional." },
        { title: "Segurança", text: "Protocolos rigorosos para garantir que sua carga chegue intacta ao destino." }
      ]
    },
    contact: {
      tag: "Fale Connosco",
      title: "Informação de Contacto",
      phone: "Suporte 24/7",
      email: "Enviar Email",
      office: "Localização",
      form: {
        title: "Booking & Rastreio",
        name: "Nome",
        fname: "Primeiro Nome",
        phoneLabel: "Número de Telefone",
        emailLabel: "Email",
        descLabel: "Descrição",
        note: "Nota",
        refresh: "Limpar",
        submit: "Submeter"
      }
    },
    footer: {
      company: "Empresa",
      support: "Suporte",
      getInTouch: "Contacto",
      newsletter: "Newsletter",
      newsDesc: "Inscreva-se para receber as últimas notícias do sector.",
      quickLinks: "Links Rápidos",
      emailPlaceholder: "Seu Email",
      rights: "© 2025 Cargo Frete Logística S.A. Todos os direitos reservados.",
      dev: "Desenvolvido com excelência pela equipa Digital Cargo Frete",
      links: ["Sobre", "Serviços", "Frota", "Privacidade"]
    }
  },
  en: {
    topBar: {
      schedule: "MON - FRI: 08:00 AM - 05:30 PM",
      hotline: "Hotline: +258 84 371 9441",
      support: "Support: info@cargofrete.co.mz"
    },
    nav: {
      home: "Home",
      about: "Introduce",
      services: "Service",
      news: "News",
      contact: "Contact",
      quote: "Call Us Now"
    },
    hero: {
      welcome: "Welcome to",
      title: "Reliable Logistics Solutions For Your Business.",
      desc: "Your logistics gateway in Mozambique and East Africa. Shipping and Project Cargo specialists.",
      cta: "Explore Services",
      contact: "Contact Us",
      booking: {
        title: "Booking & Tracking",
        send: "Send Shipment",
        track: "Track Item",
        submit: "SUBMIT",
        name: "Name",
        fname: "First Name",
        email: "Email",
        mobile: "Mobile",
        phone: "Phone"
      }
    },
    stats: {
      title: "Number of orders and goods in the past year",
      subtitle: "WE ARE THE BEST",
      desc: "Cargo Frete always puts the customer's experience first, ensuring total responsibility.",
      sea: "Goods from Sea",
      air: "Goods from Air",
      inland: "Goods from Inland",
      cta: "Contact Now",
      counters: [
        { val: "12,100", label: "Order", desc: "Always striving for best experience." },
        { val: "4,000", label: "Ton of goods", desc: "Efficiency at scale." },
        { val: "1,100", label: "Satisfied clients", desc: "Long term partnerships." }
      ]
    },
    servicesGrid: {
      tag: "OUR SERVICE",
      title: "WHAT WE CAN DO FOR YOU",
      items: [
        { title: "Worldwide", desc: "Global reach across all continents." },
        { title: "Tracking", desc: "Real-time 24/7 monitoring." },
        { title: "Fast and Reliable", desc: "Guaranteed punctuality and integrity." },
        { title: "Storage", desc: "Strategic space for your cargo." }
      ]
    },
    serviceDetail: {
      sidebarTitle: "Our Services",
      brochureTitle: "Our Brochures",
      download: "Download",
      menu: ["Air Transport", "Ocean Transport", "Railway Transport", "Road Transport"],
      title: "Air Transport",
      desc: "We believe in delivering unparalleled service. With decades of experience, we have earned a reputation for precision and reliability.",
      benefit: "How to benefit",
      benefitDesc: "Providing efficient and reliable transport solutions with a commitment to excellence.",
      inspection: "Cargo Inspection"
    },
    about: {
      tag: "40 Years of Excellence",
      title: "Shipping Benchmark in Northern Mozambique",
      p1: "Cargo Frete is the ultimate reference in the shipping brokerage market in Northern Mozambique.",
      p2: "We ensure your cargo reaches its destination safely, whether by sea, land, or air.",
      cta: "Learn More"
    },
    fleet: {
      vessel: { title: "Chartering", text: "Liner and tramp agency services." },
      crane: { title: "Heavy Cranes", text: "Capacity for oversized project cargo." },
      truck: { title: "Transport", text: "Inland and cross-border haulage solutions." }
    },
    solutions: {
      tag: "Industry Solutions",
      title: "Integrated Logistics for",
      accent: "Strategic Sectors",
      callout: "Availability",
      days: "24/7",
      notice: "Uninterrupted Operations"
    },
    testimonials: {
      tag: "Testimonials",
      title: "What our clients say",
      desc: "Trust built through decades of excellent service in Mozambique.",
      data: [
        { text: "Cargo Frete has been a vital partner for our mining operations in Tete. Absolute efficiency.", name: "António Silva", title: "Logistics Manager" },
        { text: "The precision in handling project cargo is what sets them apart in the Mozambican market.", name: "Maria Santos", title: "Operations Director" },
        { text: "Excellent customer support and constant monitoring. Highly recommend.", name: "João Pereira", title: "Importer" },
        { text: "Fast and hassle-free customs clearance service in Pemba.", name: "Lucia Mondlane", title: "Entrepreneur" }
      ]
    },
    info: {
      tag: "Strategic Warehousing",
      title: "Efficient Inventory Management",
      p1: "Our storage facilities in strategic points across Mozambique ensure the safety and integrity of your cargo.",
      p2: "Oferecemos soluções personalizadas para diversos tipos de mercadorias, desde produtos perecíveis até equipamentos pesados.",
      p3: "With modern management systems, we guarantee full visibility of your stock in real-time.",
      cta: "Check Availability"
    },
    whyChoose: {
      title: "Why choose Cargo Frete?",
      items: [
        { title: "Regional Coverage", text: "Strong presence throughout Northern Mozambique and East Africa connections." },
        { title: "Agility", text: "Streamlined processes to ensure the lowest possible transit time." },
        { title: "Experience", text: "Over 40 years of deep local and international market knowledge." },
        { title: "Security", text: "Rigorous protocols to ensure your cargo arrives intact at its destination." }
      ]
    },
    contact: {
      tag: "Get In Touch",
      title: "Contact Information",
      phone: "24/7 Support",
      email: "Send Email",
      office: "Location",
      form: {
        title: "Booking & Tracking",
        name: "Name",
        fname: "First Name",
        phoneLabel: "Phone Number",
        emailLabel: "Email",
        descLabel: "Description",
        note: "Note",
        refresh: "Refresh",
        submit: "Submit"
      }
    },
    footer: {
      company: "Company",
      support: "Support",
      getInTouch: "Contact Us",
      newsletter: "Newsletter",
      newsDesc: "Sign up to receive the latest sector news.",
      quickLinks: "Quick Links",
      emailPlaceholder: "Your Email",
      rights: "© 2025 Cargo Frete Logística S.A. All rights reserved.",
      dev: "Developed with excellence by Cargo Frete Digital Team",
      links: ["About Us", "Services", "Fleet", "Privacy Policy"]
    }
  }
};