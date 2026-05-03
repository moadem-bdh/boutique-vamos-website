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
    getLocation: {
      en: "Get location of the desk",
      fr: "Obtenir l'emplacement du point relais",
    },
  },
};

export const wilayas = [
  {
    id: 1,
    name: { en: "Adrar", ar: "أدرار" },
    price: { home: "1100", stopDesk: "850" },
    maps: "https://maps.app.goo.gl/XG8P5yn7k9xp2MVh8",
  },
  {
    id: 2,
    name: { en: "Chlef", ar: "الشلف" },
    price: { home: "700", stopDesk: "400" },
    maps: "https://maps.app.goo.gl/mkn4J7rmHDNCb2kNA",
  },
  {
    id: 3,
    name: { en: "Laghouat", ar: "الأغواط" },
    price: { home: "800", stopDesk: "450" },
    maps: "https://maps.app.goo.gl/eXXfYcWFs7Tj3U1o6",
  },
  {
    id: 4,
    name: { en: "Oum El Bouaghi", ar: "أم البواقي" },
    price: { home: "700", stopDesk: "450" },
    maps: "https://maps.app.goo.gl/mnygK5DkhvYe6Gi79",
  },
  {
    id: 5,
    name: { en: "Batna", ar: "باتنة" },
    price: { home: "700", stopDesk: "400" },
    maps: "https://maps.app.goo.gl/Ce9EStPRvhjyvT7T7",
  },
  {
    id: 6,
    name: { en: "Béjaïa", ar: "بجاية" },
    price: { home: "700", stopDesk: "400" },
    maps: "https://maps.app.goo.gl/grh58Gfe7X3rXhDd7",
  },
  {
    id: 7,
    name: { en: "Biskra", ar: "بسكرة" },
    price: { home: "700", stopDesk: "450" },
    maps: "https://maps.app.goo.gl/cZncQXHXdGfoiyQi7",
  },
  {
    id: 8,
    name: { en: "Béchar", ar: "بشار" },
    price: { home: "1000", stopDesk: "750" },
    maps: "https://maps.app.goo.gl/2H41H8UbR3tsR7Cg9",
  },
  {
    id: 9,
    name: { en: "Blida", ar: "البليدة" },
    price: { home: "500", stopDesk: "300" },
    maps: "https://maps.app.goo.gl/dGcHwhJwJK7FG5ur6",
  },
  {
    id: 10,
    name: { en: "Bouira", ar: "البويرة" },
    price: { home: "700", stopDesk: "400" },
    maps: "https://maps.app.goo.gl/oFhWf7KxMzEngZWi6",
  },
  {
    id: 11,
    name: { en: "Tamanrasset", ar: "تمنراست" },
    price: { home: "1100", stopDesk: "900" },
    maps: "https://maps.app.goo.gl/ijZcgnPkrR3sHJ796",
  },
  {
    id: 12,
    name: { en: "Tébessa", ar: "تبسة" },
    price: { home: "800", stopDesk: "450" },
    maps: "https://maps.app.goo.gl/XscBidbLuWEmoCxV8",
  },
  {
    id: 13,
    name: { en: "Tlemcen", ar: "تلمسان" },
    price: { home: "700", stopDesk: "450" },
    maps: "https://maps.app.goo.gl/cYvUxxKqES1kuDaJ7",
  },
  {
    id: 14,
    name: { en: "Tiaret", ar: "تيارت" },
    price: { home: "700", stopDesk: "400" },
    maps: "https://maps.app.goo.gl/WXbNNLT4frkzxr7S8",
  },
  {
    id: 15,
    name: { en: "Tizi Ouzou", ar: "تيزي وزو" },
    price: { home: "700", stopDesk: "400" },
    maps: "https://maps.app.goo.gl/H6koW8zGGU8by1Mb9",
  },
  {
    id: 16,
    name: { en: "Alger", ar: "الجزائر العاصمة" },
    price: { home: "400 - 500", stopDesk: "250" },
    maps: [
      {
        label: { en: "Ain Naadja", ar: "عين النعجة" },
        url: "https://maps.app.goo.gl/99RDCNEjBAToLqTF6",
      },
      {
        label: { en: "Chéraga", ar: "الشراقة" },
        url: "https://maps.app.goo.gl/52hZivMd9Q2oMAZP7",
      },
    ],
  },
  {
    id: 17,
    name: { en: "Djelfa", ar: "الجلفة" },
    price: { home: "750", stopDesk: "450" },
    maps: "https://maps.app.goo.gl/S1kY6qU1MKbUmEKHA",
  },
  {
    id: 18,
    name: { en: "Jijel", ar: "جيجل" },
    price: { home: "700", stopDesk: "400" },
    maps: "https://maps.app.goo.gl/9YpusezggYmhbNik7",
  },
  {
    id: 19,
    name: { en: "Sétif", ar: "سطيف" },
    price: { home: "700", stopDesk: "350" },
    maps: [
      {
        label: { en: "Sétif", ar: "سطيف" },
        url: "https://maps.app.goo.gl/1SD9xAVAy7kJCXJu6",
      },
      {
        label: { en: "El Eulma", ar: "العلمة" },
        url: "https://maps.app.goo.gl/ZrwJQ6S7toAtTmig8",
      },
    ],
  },
  {
    id: 20,
    name: { en: "Saïda", ar: "سعيدة" },
    price: { home: "700", stopDesk: "550" },
    maps: "https://maps.app.goo.gl/xKxaHViAvdtcyzJ27",
  },
  {
    id: 21,
    name: { en: "Skikda", ar: "سكيكدة" },
    price: { home: "700", stopDesk: "350" },
    maps: "https://maps.app.goo.gl/48Xq2jbBj9ffaqD28",
  },
  {
    id: 22,
    name: { en: "Sidi Bel Abbès", ar: "سيدي بلعباس" },
    price: { home: "700", stopDesk: "400" },
    maps: "https://maps.app.goo.gl/SfZYXgpRgTJgwV2dA",
  },
  {
    id: 23,
    name: { en: "Annaba", ar: "عنابة" },
    price: { home: "700", stopDesk: "450" },
    maps: "https://maps.app.goo.gl/LeJvFbEtfprj5FZAA",
  },
  {
    id: 24,
    name: { en: "Guelma", ar: "قالمة" },
    price: { home: "700", stopDesk: "500" },
    maps: "https://maps.app.goo.gl/HKhqWwFKQ5wfYQaT7",
  },
  {
    id: 25,
    name: { en: "Constantine", ar: "قسنطينة" },
    price: { home: "700", stopDesk: "400" },
    maps: "https://maps.app.goo.gl/nNZyXqaqW2gJHWaP8",
  },
  {
    id: 26,
    name: { en: "Médéa", ar: "المدية" },
    price: { home: "600", stopDesk: "300" },
    maps: "https://g.co/kgs/RC6MZ43",
  },
  {
    id: 27,
    name: { en: "Mostaganem", ar: "مستغانم" },
    price: { home: "700", stopDesk: "400" },
    maps: "https://maps.app.goo.gl/muckSAHTrs2W7g7W8",
  },
  {
    id: 28,
    name: { en: "M'Sila", ar: "المسيلة" },
    price: { home: "700", stopDesk: "350" },
    maps: "https://maps.app.goo.gl/ktuwwFganUX4ZW2P6",
  },
  {
    id: 29,
    name: { en: "Mascara", ar: "معسكر" },
    price: { home: "700", stopDesk: "450" },
    maps: "https://maps.app.goo.gl/1iokJ5EUfxsJGR7S6",
  },
  {
    id: 30,
    name: { en: "Ouargla", ar: "ورقلة" },
    price: { home: "800", stopDesk: "500" },
    maps: "https://maps.app.goo.gl/7j9cFoPJTCcKZYdb7",
  },
  {
    id: 31,
    name: { en: "Oran", ar: "وهران" },
    price: { home: "700", stopDesk: "400" },
    maps: "https://goo.gl/maps/CStcvHFXjqbRW4n69",
  },
  {
    id: 32,
    name: { en: "El Bayadh", ar: "البيض" },
    price: { home: "900", stopDesk: "500" },
    maps: "https://maps.app.goo.gl/naiP64nQXfDPpXEe6",
  },
  {
    id: 33,
    name: { en: "Illizi", ar: "اليزي" },
    price: { home: "1200", stopDesk: "1100" },
    maps: "https://maps.app.goo.gl/r3Cbw4MnPwEV1oQA6",
  },
  {
    id: 34,
    name: { en: "Bordj Bou Arréridj", ar: "برج بوعريريج" },
    price: { home: "700", stopDesk: "350" },
    maps: "https://maps.app.goo.gl/VUs8wsyez6a58uyB9",
  },
  {
    id: 35,
    name: { en: "Boumerdès", ar: "بومرداس" },
    price: { home: "600", stopDesk: "300" },
    maps: "https://maps.app.goo.gl/xxgwUkqomz59Ceyd8",
  },
  {
    id: 36,
    name: { en: "El Tarf", ar: "الطارف" },
    price: { home: "700", stopDesk: "450" },
    maps: "https://maps.app.goo.gl/h1d4bQ1fDQ45wV2E9",
  },
  {
    id: 37,
    name: { en: "Tindouf", ar: "تندوف" },
    price: { home: "1300", stopDesk: "850" },
    maps: "https://maps.app.goo.gl/SJxqEu3ryX8dsJdK6",
  },
  {
    id: 38,
    name: { en: "Tissemsilt", ar: "تسمسيلت" },
    price: { home: "700", stopDesk: "400" },
    maps: "https://maps.app.goo.gl/Fjamg9cdS1Y5emHV9",
  },
  {
    id: 39,
    name: { en: "El Oued", ar: "الوادي" },
    price: { home: "700", stopDesk: "550" },
    maps: "https://maps.app.goo.gl/kRqn1yTman9oV4CPA",
  },
  {
    id: 40,
    name: { en: "Khenchela", ar: "خنشلة" },
    price: { home: "700", stopDesk: "450" },
    maps: "https://goo.gl/maps/4yEWshy949Ls12pA8",
  },
  {
    id: 41,
    name: { en: "Souk Ahras", ar: "سوق اهراس" },
    price: { home: "700", stopDesk: "400" },
    maps: "https://maps.app.goo.gl/Xe7iUYktPuU3RFAJA",
  },
  {
    id: 42,
    name: { en: "Tipaza", ar: "تيبازة" },
    price: { home: "600", stopDesk: "400" },
    maps: "https://maps.app.goo.gl/g5LswiaL3KKo7hJ38",
  },
  {
    id: 43,
    name: { en: "Mila", ar: "ميلة" },
    price: { home: "700", stopDesk: "400" },
    maps: "https://maps.app.goo.gl/CByxrw1WgvkbXCL38",
  },
  {
    id: 44,
    name: { en: "Aïn Defla", ar: "عين الدفلى" },
    price: { home: "700", stopDesk: "400" },
    maps: "https://maps.app.goo.gl/cPrteUVe5pgyhFzQ8",
  },
  {
    id: 45,
    name: { en: "Naâma", ar: "النعامة" },
    price: { home: "900", stopDesk: "650" },
    maps: "https://maps.app.goo.gl/ges5SkRW8g7LnejYA",
  },
  {
    id: 46,
    name: { en: "Aïn Témouchent", ar: "عين تموشنت" },
    price: { home: "700", stopDesk: "450" },
    maps: "https://maps.app.goo.gl/uxgfxDTsVRuxj1Wr8",
  },
  {
    id: 47,
    name: { en: "Ghardaïa", ar: "غرداية" },
    price: { home: "800", stopDesk: "450" },
    maps: "https://maps.app.goo.gl/6JwcJi9q9u5ES2oA6",
  },
  {
    id: 48,
    name: { en: "Relizane", ar: "غليزان" },
    price: { home: "700", stopDesk: "400" },
    maps: "https://maps.app.goo.gl/otpHg5uFaKhdAVYH6",
  },
  {
    id: 49,
    name: { en: "Timimoun", ar: "تميمون" },
    price: { home: "1000", stopDesk: "750" },
    maps: "https://maps.app.goo.gl/9M2pEWAjDHAaUrKF8",
  },
  {
    id: 51,
    name: { en: "Ouled Djellal", ar: "اولاد جلال" },
    price: { home: "800", stopDesk: "600" },
    maps: "https://www.google.com/maps/place/C3P9%2BHGC+H%C3%B4tel+Transit,+Ouled+Djellal",
  },
  {
    id: 52,
    name: { en: "Beni Abbès", ar: "بني عباس" },
    price: { home: "1200", stopDesk: "700" },
    maps: "https://goo.gl/maps/rCxc9J3jwhSotbuB6",
  },
  {
    id: 53,
    name: { en: "In Salah", ar: "عين صالح" },
    price: { home: "1000", stopDesk: "1000" },
    maps: "https://maps.app.goo.gl/E8boeiuC6jKRZr3f9",
  },
  {
    id: 55,
    name: { en: "Touggourt", ar: "تقرت" },
    price: { home: "800", stopDesk: "550" },
    maps: "https://maps.app.goo.gl/pEqpj6dobLV9MLDw9",
  },
  {
    id: 57,
    name: { en: "El M'Ghair", ar: "المغير" },
    price: { home: "800", stopDesk: "0" },
    maps: null,
  },
  {
    id: 58,
    name: { en: "El Meniaa", ar: "المنيعة" },
    price: { home: "1000", stopDesk: "700" },
    maps: "https://maps.app.goo.gl/JN34ACNxT1jq1JZGA",
  },
];

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
    { en: "Home", fr: "Accueil", href: "#hero" },
    { en: "About", fr: "À propos", href: "#about" },
    { en: "Our Service", fr: "Nos services", href: "#services" },
    { en: "Delivery", fr: "Livraison", href: "#delivery" },
    { en: "FAQ", fr: "FAQ", href: "#faq" },
    { en: "Contact", fr: "Contact", href: "#contact" },
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
