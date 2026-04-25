// ---- Types ----------------------------------------------------------
export type Lang = "en" | "fr";
export type T = { en: string; fr: string };

// ---- Hero Section ----------------------------------------------------------
export const heroData: {
  subtitle: T;
  description: T;
  iconItems: { id: number; img: string; title: T }[];
} = {
  subtitle: {
    en: "Champion's look",
    fr: "Le look du champion",
  },
  description: {
    en: "Show your love for the game and wear your team's colors with pride through our authentic football jerseys. Whether you're cheering from the stands or watching at home, our exclusive collections let you support your favorite players in unmatched style and comfort.",
    fr: "Montrez votre amour pour le jeu et portez les couleurs de votre équipe avec fierté grâce à nos maillots de football authentiques. Que vous encouragiez depuis les tribunes ou que vous regardiez à la maison, nos collections exclusives vous permettent de soutenir vos joueurs préférés avec un style et un confort inégalés.",
  },
  iconItems: [
    {
      id: 1,
      img: "/assets/global.svg",
      title: { en: "Online Store", fr: "Boutique en ligne" },
    },
    {
      id: 2,
      img: "/assets/box.svg",
      title: { en: "Home Delivery", fr: "Livraison à domicile" },
    },
    {
      id: 3,
      img: "/assets/diamon.svg",
      title: { en: "High Quality", fr: "Haute qualité" },
    },
    {
      id: 4,
      img: "/assets/wallet.svg",
      title: { en: "Cash on Delivery", fr: "Paiement à la livraison" },
    },
  ],
};

// ---- About Section ----------------------------------------------------------
export const aboutData: {
  description: T;
  socialMediaTitle: T;
  cards: { bgUrl: string; heading: T; subheading: T }[];
} = {
  description: {
    en: "Boutique Vamos blends football culture with modern street style. From iconic club jerseys to casual essentials and statement outerwear, our collection is made for fans who wear the game beyond the pitch. Whether you're repping your national team, styling a classic club kit, or elevating your everyday look, we deliver football fashion with confidence and character.",
    fr: "Boutique Vamos allie la culture du football au style urbain moderne. Des maillots de clubs emblématiques aux essentiels décontractés et aux vêtements d'extérieur tendance, notre collection est faite pour les fans qui portent le jeu au-delà du terrain. Que vous représentiez votre équipe nationale, portiez un maillot classique ou rehaussiez votre style quotidien, nous livrons la mode football avec confiance et caractère.",
  },
  socialMediaTitle: {
    en: "Social Media",
    fr: "Réseaux sociaux",
  },
  cards: [
    {
      bgUrl: "/assets/brazil-Image.png",
      heading: {
        en: "National Team Jerseys",
        fr: "Maillots d'équipes nationales",
      },
      subheading: {
        en: "Show your country's colors with pride.",
        fr: "Affichez les couleurs de votre pays avec fierté.",
      },
    },
    {
      bgUrl: "/assets/real-image.png",
      heading: {
        en: "Club Jerseys",
        fr: "Maillots de clubs",
      },
      subheading: {
        en: "Wear the teams you love.",
        fr: "Portez les équipes que vous aimez.",
      },
    },
    {
      bgUrl: "/assets/joging-image.png",
      heading: {
        en: "Everyday Basics",
        fr: "Les essentiels du quotidien",
      },
      subheading: {
        en: "Comfortable t-shirts, sweatpants, and simple pieces you can wear anytime.",
        fr: "T-shirts confortables, joggings et pièces simples à porter à tout moment.",
      },
    },
    {
      bgUrl: "/assets/leather-image.png",
      heading: {
        en: "Streetwear Collection",
        fr: "Collection Streetwear",
      },
      subheading: {
        en: "Bold jackets and layered outfits inspired by modern football culture.",
        fr: "Vestes audacieuses et tenues superposées inspirées de la culture football moderne.",
      },
    },
  ],
};

// ---- Our Services Section ----------------------------------------------------------
export const servicesData: {
  serviceDescription: T;
  card1Text: T;
  card1Cta: T;
  card3Text: T;
  card3Sub: T;
  card4Text: T;
} = {
  serviceDescription: {
    en: "Our store is the right place for every sports fan. We offer real jerseys, sports shoes, and tracksuits from trusted teams and brands. All our products are chosen for quality, comfort, and style, perfect for training, playing, or daily wear. We make shopping easy with safe payments, fast worldwide delivery.with safe payments, fast worldwide delivery.",
    fr: "Notre boutique est l'endroit idéal pour chaque fan de sport. Nous proposons de vrais maillots, des chaussures de sport et des survêtements de marques et équipes de confiance. Tous nos produits sont choisis pour leur qualité, leur confort et leur style, parfaits pour l'entraînement, le jeu ou le quotidien. Nous facilitons vos achats avec des paiements sécurisés et une livraison rapide dans tout le pays.",
  },
  card1Text: {
    en: "Shop official club and national team jerseys. Custom printing with your name & number available.",
    fr: "Achetez des maillots officiels de clubs et d'équipes nationales. Impression personnalisée avec votre nom et numéro disponible.",
  },
  card1Cta: {
    en: "Visit Instagram and Order",
    fr: "Visitez Instagram et commandez",
  },
  card3Text: {
    en: "Shop official club and national team jerseys. Custom printing with your name & number available.",
    fr: "Achetez des maillots officiels de clubs et d'équipes nationales. Impression personnalisée avec votre nom et numéro disponible.",
  },
  card3Sub: {
    en: "Shop official club and national team jerseys.",
    fr: "Achetez des maillots officiels de clubs et d'équipes nationales.",
  },
  card4Text: {
    en: "Shop official club and national team jerseys. Custom printing with your name & number available.",
    fr: "Achetez des maillots officiels de clubs et d'équipes nationales. Impression personnalisée avec votre nom et numéro disponible.",
  },
};

// ---- Delivery Section ----------------------------------------------------------
export const deliveryData: {
  description: T;
  seeAllButton: T;
  goBackHome: T;
  cardLabels: {
    homeDelivery: T;
    stopDesk: T;
    deliveryTime: T;
    getLocation: T;
  };
} = {
  description: {
    en: "We are proud to offer fast and reliable delivery to all 58 wilayas across the country. No matter where you live, you can shop with confidence knowing your order will reach you quickly and safely.",
    fr: "Nous sommes fiers d'offrir une livraison rapide et fiable vers les 58 wilayas du pays. Où que vous viviez, vous pouvez acheter en toute confiance sachant que votre commande vous parviendra rapidement et en toute sécurité.",
  },
  seeAllButton: {
    en: "See All",
    fr: "Voir tout",
  },
  goBackHome: {
    en: "Back to home",
    fr: "Retour à l'accueil",
  },
  cardLabels: {
    homeDelivery: { en: "Home Delivery", fr: "Livraison à domicile" },
    stopDesk: { en: "Stop Desk", fr: "Point relais" },
    deliveryTime: { en: "Delivered in 28 to 48 h", fr: "Livré en 28 à 48 h" },
    getLocation: { en: "Get location of the desk", fr: "Obtenir l'emplacement du point relais" },
  },
};

// ---- FAQ Section ----------------------------------------------------------
export const faqData: {
  items: { question: T; answer: T }[];
} = {
  items: [
    {
      question: {
        en: "Do you offer Cash on Delivery ?",
        fr: "Proposez-vous le paiement à la livraison ?",
      },
      answer: {
        en: "Yes, cash on delivery is available in all supported wilayas.",
        fr: "Oui, le paiement à la livraison est disponible dans toutes les wilayas desservies.",
      },
    },
    {
      question: {
        en: "How long does delivery take?",
        fr: "Combien de temps prend la livraison ?",
      },
      answer: {
        en: "Delivery usually takes between 28 and 48 hours.",
        fr: "La livraison prend généralement entre 28 et 48 heures.",
      },
    },
    {
      question: {
        en: "Can I return or exchange my jersey if it doesn't fit?",
        fr: "Puis-je retourner ou échanger mon maillot s'il ne me va pas ?",
      },
      answer: {
        en: "Yes, returns and exchanges are possible based on our return policy.",
        fr: "Oui, les retours et échanges sont possibles selon notre politique de retour.",
      },
    },
    {
      question: {
        en: "Do you have a shop?",
        fr: "Avez-vous une boutique ?",
      },
      answer: {
        en: "Yes, we have a physical shop and we also ship across Algeria.",
        fr: "Oui, nous avons une boutique physique et nous livrons également dans toute l'Algérie.",
      },
    },
    {
      question: {
        en: "Do you deliver to all 58 wilayas?",
        fr: "Livrez-vous dans les 58 wilayas ?",
      },
      answer: {
        en: "Yes, we deliver to all 58 wilayas nationwide.",
        fr: "Oui, nous livrons dans les 58 wilayas à travers le pays.",
      },
    },
  ],
};

// ---- NavBar ----------------------------------------------------------
export const navData: {
  items: (T & { href: string })[];
} = {
  items: [
    { en: "Home",        fr: "Accueil",      href: "/#hero" },
    { en: "About",       fr: "À propos",     href: "/#about" },
    { en: "Our Service", fr: "Nos services", href: "/#services" },
    { en: "Delivery",    fr: "Livraison",    href: "/#delivery" },
    { en: "FAQ",         fr: "FAQ",          href: "/#faq" },
    { en: "Contact",     fr: "Contact",      href: "/#contact" },
  ],
};

// ---- Footer ----------------------------------------------------------
export const footerData: {
  sectionLinks: { label: T; href: string }[];
  sectionsTitle: T;
  contactTitle: T;
  messageLabel: T;
  messagePlaceholder: T;
  submitButton: T;
} = {
  sectionLinks: [
    { label: { en: "Home", fr: "Accueil" }, href: "/#hero" },
    { label: { en: "About Us", fr: "À propos" }, href: "/#about" },
    { label: { en: "Our service", fr: "Nos services" }, href: "/#service" },
    { label: { en: "Delivery", fr: "Livraison" }, href: "/#delivery" },
    { label: { en: "FAQ", fr: "FAQ" }, href: "/#faq" },
    { label: { en: "Contact Us", fr: "Contactez-nous" }, href: "/#contact" },
  ],
  sectionsTitle: { en: "Sections", fr: "Sections" },
  contactTitle: { en: "Contact Us on", fr: "Contactez-nous sur" },
  messageLabel: { en: "Or send a message", fr: "Ou envoyez un message" },
  messagePlaceholder: { en: "Enter your message", fr: "Entrez votre message" },
  submitButton: { en: "Submit", fr: "Envoyer" },
};
