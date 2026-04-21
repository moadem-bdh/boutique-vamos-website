// ---- Types ----------------------------------------------------------
export type Lang = "en" | "fr";
type T = { en: string; fr: string };

// ---- Hero Section ----------------------------------------------------------
export const heroData = {
  subtitle: {
    en: "Champion's look",
    fr: "Le look du champion",
  } as T,
  description: {
    en: "Show your love for the game and wear your team's colors with pride through our authentic football jerseys. Whether you're cheering from the stands or watching at home, our exclusive collections let you support your favorite players in unmatched style and comfort.",
    fr: "Montrez votre amour pour le jeu et portez les couleurs de votre équipe avec fierté grâce à nos maillots de football authentiques. Que vous encouragiez depuis les tribunes ou que vous regardiez à la maison, nos collections exclusives vous permettent de soutenir vos joueurs préférés avec un style et un confort inégalés.",
  } as T,
  iconItems: [
    {
      id: 1,
      img: "/assets/global.svg",
      title: { en: "Online Store", fr: "Boutique en ligne" } as T,
    },
    {
      id: 2,
      img: "/assets/box.svg",
      title: { en: "Home Delivery", fr: "Livraison à domicile" } as T,
    },
    {
      id: 3,
      img: "/assets/diamon.svg",
      title: { en: "High Quality", fr: "Haute qualité" } as T,
    },
    {
      id: 4,
      img: "/assets/wallet.svg",
      title: { en: "Cash on Delivery", fr: "Paiement à la livraison" } as T,
    },
  ],
};

// ---- About Section ----------------------------------------------------------
export const aboutData = {
  description: {
    en: "Boutique Vamos blends football culture with modern street style. From iconic club jerseys to casual essentials and statement outerwear, our collection is made for fans who wear the game beyond the pitch. Whether you're repping your national team, styling a classic club kit, or elevating your everyday look, we deliver football fashion with confidence and character.",
    fr: "Boutique Vamos allie la culture du football au style urbain moderne. Des maillots de clubs emblématiques aux essentiels décontractés et aux vêtements d'extérieur tendance, notre collection est faite pour les fans qui portent le jeu au-delà du terrain. Que vous représentiez votre équipe nationale, portiez un maillot classique ou rehaussiez votre style quotidien, nous livrons la mode football avec confiance et caractère.",
  } as T,
  socialMediaTitle: {
    en: "Social Media",
    fr: "Réseaux sociaux",
  } as T,
  cards: [
    {
      bgUrl: "/assets/brazil-Image.png",
      heading: {
        en: "National Team Jerseys",
        fr: "Maillots d'équipes nationales",
      } as T,
      subheading: {
        en: "Show your country's colors with pride.",
        fr: "Affichez les couleurs de votre pays avec fierté.",
      } as T,
    },
    {
      bgUrl: "/assets/real-image.png",
      heading: {
        en: "Club Jerseys",
        fr: "Maillots de clubs",
      } as T,
      subheading: {
        en: "Wear the teams you love.",
        fr: "Portez les équipes que vous aimez.",
      } as T,
    },
    {
      bgUrl: "/assets/joging-image.png",
      heading: {
        en: "Everyday Basics",
        fr: "Les essentiels du quotidien",
      } as T,
      subheading: {
        en: "Comfortable t-shirts, sweatpants, and simple pieces you can wear anytime.",
        fr: "T-shirts confortables, joggings et pièces simples à porter à tout moment.",
      } as T,
    },
    {
      bgUrl: "/assets/leather-image.png",
      heading: {
        en: "Streetwear Collection",
        fr: "Collection Streetwear",
      } as T,
      subheading: {
        en: "Bold jackets and layered outfits inspired by modern football culture.",
        fr: "Vestes audacieuses et tenues superposées inspirées de la culture football moderne.",
      } as T,
    },
  ],
};

// ---- Our Services Section ----------------------------------------------------------
export const servicesData = {
  serviceDescription: {
    en: "Our store is the right place for every sports fan. We offer real jerseys, sports shoes, and tracksuits from trusted teams and brands. All our products are chosen for quality, comfort, and style, perfect for training, playing, or daily wear. We make shopping easy with safe payments, fast worldwide delivery.with safe payments, fast worldwide delivery.",
    fr: "Notre boutique est l'endroit idéal pour chaque fan de sport. Nous proposons de vrais maillots, des chaussures de sport et des survêtements de marques et équipes de confiance. Tous nos produits sont choisis pour leur qualité, leur confort et leur style, parfaits pour l'entraînement, le jeu ou le quotidien. Nous facilitons vos achats avec des paiements sécurisés et une livraison rapide dans tout le pays.",
  } as T,
  card1Text: {
    en: "Shop official club and national team jerseys. Custom printing with your name & number available.",
    fr: "Achetez des maillots officiels de clubs et d'équipes nationales. Impression personnalisée avec votre nom et numéro disponible.",
  } as T,
  card1Cta: {
    en: "Visit Instagram and Order",
    fr: "Visitez Instagram et commandez",
  } as T,
  card3Text: {
    en: "Shop official club and national team jerseys. Custom printing with your name & number available.",
    fr: "Achetez des maillots officiels de clubs et d'équipes nationales. Impression personnalisée avec votre nom et numéro disponible.",
  } as T,
  card3Sub: {
    en: "Shop official club and national team jerseys.",
    fr: "Achetez des maillots officiels de clubs et d'équipes nationales.",
  } as T,
  card4Text: {
    en: "Shop official club and national team jerseys. Custom printing with your name & number available.",
    fr: "Achetez des maillots officiels de clubs et d'équipes nationales. Impression personnalisée avec votre nom et numéro disponible.",
  } as T,
};

// ---- Delivery Section ----------------------------------------------------------
export const deliveryData = {
  description: {
    en: "We are proud to offer fast and reliable delivery to all 58 wilayas across the country. No matter where you live, you can shop with confidence knowing your order will reach you quickly and safely.",
    fr: "Nous sommes fiers d'offrir une livraison rapide et fiable vers les 58 wilayas du pays. Où que vous viviez, vous pouvez acheter en toute confiance sachant que votre commande vous parviendra rapidement et en toute sécurité.",
  } as T,
  seeAllButton: {
    en: "See All",
    fr: "Voir tout",
  } as T,
  cardLabels: {
    homeDelivery: { en: "Home Delivery", fr: "Livraison à domicile" } as T,
    stopDesk: { en: "Stop Desk", fr: "Point relais" } as T,
    deliveryTime: { en: "Delivered in 28 to 48 h", fr: "Livré en 28 à 48 h" } as T,
    getLocation: { en: "Get location of the desk", fr: "Obtenir l'emplacement du point relais" } as T,
  },
};

// ---- FAQ Section ----------------------------------------------------------
export const faqData = {
  items: [
    {
      question: {
        en: "Do you offer Cash on Delivery ?",
        fr: "Proposez-vous le paiement à la livraison ?",
      } as T,
      answer: {
        en: "Yes, cash on delivery is available in all supported wilayas.",
        fr: "Oui, le paiement à la livraison est disponible dans toutes les wilayas desservies.",
      } as T,
    },
    {
      question: {
        en: "How long does delivery take?",
        fr: "Combien de temps prend la livraison ?",
      } as T,
      answer: {
        en: "Delivery usually takes between 28 and 48 hours.",
        fr: "La livraison prend généralement entre 28 et 48 heures.",
      } as T,
    },
    {
      question: {
        en: "Can I return or exchange my jersey if it doesn't fit?",
        fr: "Puis-je retourner ou échanger mon maillot s'il ne me va pas ?",
      } as T,
      answer: {
        en: "Yes, returns and exchanges are possible based on our return policy.",
        fr: "Oui, les retours et échanges sont possibles selon notre politique de retour.",
      } as T,
    },
    {
      question: {
        en: "Do you have a shop?",
        fr: "Avez-vous une boutique ?",
      } as T,
      answer: {
        en: "Yes, we have a physical shop and we also ship across Algeria.",
        fr: "Oui, nous avons une boutique physique et nous livrons également dans toute l'Algérie.",
      } as T,
    },
    {
      question: {
        en: "Do you deliver to all 58 wilayas?",
        fr: "Livrez-vous dans les 58 wilayas ?",
      } as T,
      answer: {
        en: "Yes, we deliver to all 58 wilayas nationwide.",
        fr: "Oui, nous livrons dans les 58 wilayas à travers le pays.",
      } as T,
    },
  ],
};

// ---- NavBar ----------------------------------------------------------
export const navData = {
  items: [
    { en: "Home", fr: "Accueil" } as T,
    { en: "About", fr: "À propos" } as T,
    { en: "Our Service", fr: "Nos services" } as T,
    { en: "Delivery", fr: "Livraison" } as T,
    { en: "FAQ", fr: "FAQ" } as T,
    { en: "Contact", fr: "Contact" } as T,
  ],
};

// ---- Footer ----------------------------------------------------------
export const footerData = {
  sectionLinks: [
    { label: { en: "Home", fr: "Accueil" } as T, href: "#" },
    { label: { en: "About Us", fr: "À propos" } as T, href: "#" },
    { label: { en: "Our service", fr: "Nos services" } as T, href: "#" },
    { label: { en: "Delivery", fr: "Livraison" } as T, href: "#" },
    { label: { en: "FAQ", fr: "FAQ" } as T, href: "#" },
    { label: { en: "Contact Us", fr: "Contactez-nous" } as T, href: "#" },
  ],
  sectionsTitle: { en: "Sections", fr: "Sections" } as T,
  contactTitle: { en: "Contact Us on", fr: "Contactez-nous sur" } as T,
  messageLabel: { en: "Or send a message", fr: "Ou envoyez un message" } as T,
  messagePlaceholder: { en: "Enter your message", fr: "Entrez votre message" } as T,
  submitButton: { en: "Submit", fr: "Envoyer" } as T,
};
