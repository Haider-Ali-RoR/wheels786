/**
 * Centralized site content & configuration for 786 Transport.
 *
 * The site is bilingual: French (default) and English. Language-neutral
 * business facts live in `company`; everything with words lives in the
 * per-locale `en` / `fr` bundles below and is selected at runtime via the
 * `useContent()` hook (see src/i18n/LanguageContext.tsx).
 *
 * Edit business details, fleet, pricing, routes, and FAQ here — they
 * propagate across the whole site, in both languages.
 */

export type Lang = "fr" | "en";

/** Language-neutral business facts (never translated). */
export const company = {
  name: "786 Transport",
  shortName: "786",
  // --- Contact ---
  phoneDisplay: "+33 6 50 98 23 88",
  phoneRaw: "+33650982388",
  whatsappRaw: "33650982388",
  email: "786transport.rs@gmail.com",
  address: "5 Cité de la Courtille — Rue des Maraudes, 93200 Saint-Denis, France",
  rating: 4.7,
  reviewCount: "23K",
  // --- Legal (SAS) ---
  legalName: "786 Transport SAS",
  siren: "814 062 121",
  vat: "FR12814062121",
};

/**
 * The full shape of one locale's content bundle. Both `en` and `fr` must
 * satisfy this so components can rely on identical keys regardless of language.
 */
export type ContentBundle = {
  companyText: { tagline: string; description: string; hours: string };
  navLinks: { label: string; href: string }[];
  services: { icon: string; title: string; text: string }[];
  fleet: {
    name: string;
    tier: string;
    image: string;
    seats: number;
    luggage: number;
    priceFrom: number;
    rateMultiplier: number;
    hourly: number;
    badge: string;
    text: string;
    features: string[];
  }[];
  features: { icon: string; title: string; text: string }[];
  stats: { value: string; label: string }[];
  routes: { from: string; to: string; duration: string; popular: boolean }[];
  coverage: string[];
  faqs: { q: string; a: string }[];
  bookingLocations: string[];
};

// ---------------------------------------------------------------------------
// ENGLISH
// ---------------------------------------------------------------------------

const en: ContentBundle = {
  companyText: {
    tagline: "Premium Private Chauffeur & VTC in Paris",
    description:
      "Specialized in high-end passenger transport across Paris, Île-de-France, and all of Europe. Professional drivers, a modern Mercedes fleet, fixed all-inclusive prices, available 24/7.",
    hours: "24/7 — 7 days a week",
  },

  navLinks: [
    { label: "Home", href: "#home" },
    { label: "Services", href: "#services" },
    { label: "Fleet", href: "#fleet" },
    { label: "Reviews", href: "#reviews" },
    { label: "FAQ", href: "#faq" },
  ],

  services: [
    {
      icon: "plane",
      title: "Airport Transfers",
      text: "Private chauffeur to and from CDG, Orly, Beauvais & Le Bourget. Real-time flight tracking, meet & greet at arrivals, and fixed prices — tolls and parking included.",
    },
    {
      icon: "clock",
      title: "Hourly Hire (As Directed)",
      text: "Keep your driver by the hour for meetings, shopping, or multiple stops. Transparent hourly pricing and total flexibility — you stay in control.",
    },
    {
      icon: "briefcase",
      title: "City-to-City Business Travel",
      text: "Seamless executive journeys between Paris and destinations like Versailles, Disneyland, Reims and beyond. Discreet, punctual, and comfortable.",
    },
    {
      icon: "champagne",
      title: "Events & Occasions",
      text: "Weddings, galas, nights out, and special events. Arrive in style with a dedicated chauffeur at your service throughout the evening.",
    },
    {
      icon: "road",
      title: "Long Distance & Europe",
      text: "Door-to-door intercity and cross-Europe travel in a premium Mercedes — a relaxed alternative to crowded trains and flights.",
    },
    {
      icon: "camera",
      title: "Paris Tours",
      text: "Discover Paris and its landmarks with a private chauffeur. Custom itineraries at your own pace, in full comfort.",
    },
  ],

  fleet: [
    {
      name: "Mercedes-Benz E-Class",
      tier: "Business",
      image: "eclass",
      seats: 4,
      luggage: 3,
      priceFrom: 90,
      rateMultiplier: 1,
      hourly: 60,
      badge: "Most Popular",
      text: "Our signature executive sedan — refined, quiet, and impeccably maintained. The ideal choice for airport transfers and business travel.",
      features: ["Leather interior", "Climate control", "Bottled water", "Phone chargers"],
    },
    {
      name: "Mercedes-Benz V-Class",
      tier: "Van",
      image: "vclass",
      seats: 7,
      luggage: 7,
      priceFrom: 130,
      rateMultiplier: 1.3,
      hourly: 80,
      badge: "",
      text: "Spacious luxury van for families and groups. Travel together in comfort with plenty of room for passengers and luggage.",
      features: ["Up to 7 seats", "Generous luggage space", "Individual seating", "Child seats on request"],
    },
    {
      name: "Mercedes-Benz S-Class",
      tier: "First Class",
      image: "sclass",
      seats: 3,
      luggage: 3,
      priceFrom: 160,
      rateMultiplier: 1.6,
      hourly: 110,
      badge: "Premium",
      text: "The pinnacle of comfort and prestige. Our flagship limousine for VIPs and those who expect nothing but the very best.",
      features: ["Premium leather", "Extra legroom", "Ambient lighting", "Wi-Fi on request"],
    },
  ],

  features: [
    {
      icon: "tag",
      title: "Fixed, All-Inclusive Prices",
      text: "The price you're quoted is the price you pay — tolls and parking included. No surge pricing, no meters, no hidden fees.",
    },
    {
      icon: "plane",
      title: "Real-Time Flight Tracking",
      text: "We monitor your flight and adjust your pickup automatically, with free wait time if you land late.",
    },
    {
      icon: "check",
      title: "Flexible Cancellation",
      text: "Cancel at least 12 hours before pickup and get a 100% refund. Cancellations made within 12 hours of pickup are non-refundable.",
    },
    {
      icon: "shield",
      title: "Professional Drivers",
      text: "Licensed, experienced, and discreet chauffeurs who know Paris and the region inside out.",
    },
    {
      icon: "users",
      title: "Meet & Greet",
      text: "Your driver greets you in the arrivals hall with a name sign and helps with your luggage.",
    },
    {
      icon: "clock",
      title: "Available 24/7",
      text: "Day or night, weekday or weekend, we're ready whenever you need to travel.",
    },
  ],

  stats: [
    { value: "10+", label: "Years Experience" },
    { value: "25K+", label: "Rides Completed" },
    { value: "4.7★", label: "Average Rating" },
    { value: "24/7", label: "Availability" },
  ],

  routes: [
    { from: "Orly Airport", to: "Paris", duration: "~30 min", popular: true },
    { from: "CDG Airport", to: "Paris", duration: "~45 min", popular: true },
    { from: "Paris", to: "Versailles", duration: "~40 min", popular: false },
    { from: "CDG Airport", to: "Disneyland Paris", duration: "~45 min", popular: true },
    { from: "Orly Airport", to: "Disneyland Paris", duration: "~50 min", popular: false },
    { from: "CDG Airport", to: "Versailles", duration: "~60 min", popular: false },
    { from: "Beauvais Airport", to: "Paris", duration: "~1h15", popular: false },
    { from: "Paris", to: "Disneyland Paris", duration: "~45 min", popular: false },
    { from: "Paris", to: "Reims", duration: "~1h45", popular: false },
  ],

  coverage: [
    "Paris (all arrondissements)",
    "Charles de Gaulle (CDG)",
    "Orly Airport",
    "Beauvais Airport",
    "Disneyland Paris",
    "Versailles",
    "Île-de-France",
    "All of France & Europe",
  ],

  faqs: [
    {
      q: "How long does the journey from CDG to central Paris take?",
      a: "Typically 40–55 minutes depending on traffic and your exact destination. Your driver chooses the fastest route on the day.",
    },
    {
      q: "What happens if my flight is delayed?",
      a: "We track your flight in real time and adjust your pickup automatically — at no extra cost. You'll never be charged for a delay outside your control.",
    },
    {
      q: "Are your prices really all-inclusive?",
      a: "Yes. Your quoted fare includes tolls, parking, taxes, and meet & greet. There are no meters, no surge pricing, and no hidden surcharges.",
    },
    {
      q: "Where will my driver meet me at the airport?",
      a: "Your chauffeur waits in the arrivals hall with a name sign and helps you with your luggage to the vehicle. We cover all terminals at CDG, Orly, Beauvais and Le Bourget.",
    },
    {
      q: "Can I request a child seat?",
      a: "Absolutely. Child and booster seats are available on request — just mention it when you book, especially when travelling with babies or young children.",
    },
    {
      q: "How do I pay, and can I cancel?",
      a: "We accept card and cash. Cancel at least 12 hours before pickup for a 100% refund; cancellations made within 12 hours of pickup are non-refundable.",
    },
  ],

  bookingLocations: [
    "Paris (City Center)",
    "CDG Airport",
    "Orly Airport",
    "Beauvais Airport",
    "Le Bourget Airport",
    "Disneyland Paris",
    "Versailles",
    "Other (specify in notes)",
  ],
};

// ---------------------------------------------------------------------------
// FRENCH (default language)
// ---------------------------------------------------------------------------

const fr: ContentBundle = {
  companyText: {
    tagline: "Chauffeur privé haut de gamme & VTC à Paris",
    description:
      "Spécialiste du transport de passagers haut de gamme à Paris, en Île-de-France et dans toute l'Europe. Chauffeurs professionnels, flotte Mercedes récente, tarifs fixes tout compris, disponibles 24h/24.",
    hours: "24h/24 — 7j/7",
  },

  navLinks: [
    { label: "Accueil", href: "#home" },
    { label: "Services", href: "#services" },
    { label: "Flotte", href: "#fleet" },
    { label: "Avis", href: "#reviews" },
    { label: "FAQ", href: "#faq" },
  ],

  services: [
    {
      icon: "plane",
      title: "Transferts aéroport",
      text: "Chauffeur privé depuis et vers CDG, Orly, Beauvais & Le Bourget. Suivi des vols en temps réel, accueil personnalisé aux arrivées et tarifs fixes — péages et parking inclus.",
    },
    {
      icon: "clock",
      title: "Mise à disposition (à l'heure)",
      text: "Gardez votre chauffeur à l'heure pour vos rendez-vous, vos achats ou vos multiples arrêts. Tarification horaire transparente et flexibilité totale — vous gardez le contrôle.",
    },
    {
      icon: "briefcase",
      title: "Déplacements d'affaires longue distance",
      text: "Des trajets exécutifs sans souci entre Paris et des destinations comme Versailles, Disneyland, Reims et au-delà. Discret, ponctuel et confortable.",
    },
    {
      icon: "champagne",
      title: "Événements & occasions",
      text: "Mariages, galas, soirées et événements spéciaux. Arrivez avec élégance grâce à un chauffeur dédié à votre service toute la soirée.",
    },
    {
      icon: "road",
      title: "Longue distance & Europe",
      text: "Trajets interurbains et à travers l'Europe, de porte à porte, dans une Mercedes haut de gamme — une alternative sereine aux trains et vols bondés.",
    },
    {
      icon: "camera",
      title: "Visites de Paris",
      text: "Découvrez Paris et ses monuments avec un chauffeur privé. Itinéraires sur mesure, à votre rythme et en tout confort.",
    },
  ],

  fleet: [
    {
      name: "Mercedes-Benz Classe E",
      tier: "Business",
      image: "eclass",
      seats: 4,
      luggage: 3,
      priceFrom: 90,
      rateMultiplier: 1,
      hourly: 60,
      badge: "La plus demandée",
      text: "Notre berline exécutive emblématique — raffinée, silencieuse et impeccablement entretenue. Le choix idéal pour les transferts aéroport et les déplacements d'affaires.",
      features: ["Intérieur cuir", "Climatisation", "Eau en bouteille", "Chargeurs de téléphone"],
    },
    {
      name: "Mercedes-Benz Classe V",
      tier: "Van",
      image: "vclass",
      seats: 7,
      luggage: 7,
      priceFrom: 130,
      rateMultiplier: 1.3,
      hourly: 80,
      badge: "",
      text: "Van de luxe spacieux pour familles et groupes. Voyagez ensemble en tout confort, avec de la place en abondance pour les passagers et les bagages.",
      features: ["Jusqu'à 7 places", "Grand espace bagages", "Sièges individuels", "Sièges enfant sur demande"],
    },
    {
      name: "Mercedes-Benz Classe S",
      tier: "Première classe",
      image: "sclass",
      seats: 3,
      luggage: 3,
      priceFrom: 160,
      rateMultiplier: 1.6,
      hourly: 110,
      badge: "Premium",
      text: "Le summum du confort et du prestige. Notre limousine d'exception pour les VIP et tous ceux qui n'attendent rien de moins que l'excellence.",
      features: ["Cuir premium", "Espace jambes généreux", "Éclairage d'ambiance", "Wi-Fi sur demande"],
    },
  ],

  features: [
    {
      icon: "tag",
      title: "Tarifs fixes, tout compris",
      text: "Le prix annoncé est le prix que vous payez — péages et parking inclus. Pas de majoration, pas de compteur, aucuns frais cachés.",
    },
    {
      icon: "plane",
      title: "Suivi des vols en temps réel",
      text: "Nous suivons votre vol et ajustons automatiquement votre prise en charge, avec temps d'attente offert si vous atterrissez en retard.",
    },
    {
      icon: "check",
      title: "Annulation flexible",
      text: "Annulez au moins 12 heures avant la prise en charge pour un remboursement à 100 %. Les annulations dans les 12 heures précédant la prise en charge ne sont pas remboursables.",
    },
    {
      icon: "shield",
      title: "Chauffeurs professionnels",
      text: "Des chauffeurs agréés, expérimentés et discrets, qui connaissent Paris et sa région sur le bout des doigts.",
    },
    {
      icon: "users",
      title: "Accueil personnalisé",
      text: "Votre chauffeur vous accueille dans le hall des arrivées avec une pancarte à votre nom et vous aide avec vos bagages.",
    },
    {
      icon: "clock",
      title: "Disponible 24h/24",
      text: "De jour comme de nuit, en semaine comme le week-end, nous sommes prêts dès que vous avez besoin de vous déplacer.",
    },
  ],

  stats: [
    { value: "10+", label: "Ans d'expérience" },
    { value: "25K+", label: "Trajets réalisés" },
    { value: "4.7★", label: "Note moyenne" },
    { value: "24/7", label: "Disponibilité" },
  ],

  routes: [
    { from: "Aéroport d'Orly", to: "Paris", duration: "~30 min", popular: true },
    { from: "Aéroport CDG", to: "Paris", duration: "~45 min", popular: true },
    { from: "Paris", to: "Versailles", duration: "~40 min", popular: false },
    { from: "Aéroport CDG", to: "Disneyland Paris", duration: "~45 min", popular: true },
    { from: "Aéroport d'Orly", to: "Disneyland Paris", duration: "~50 min", popular: false },
    { from: "Aéroport CDG", to: "Versailles", duration: "~60 min", popular: false },
    { from: "Aéroport de Beauvais", to: "Paris", duration: "~1h15", popular: false },
    { from: "Paris", to: "Disneyland Paris", duration: "~45 min", popular: false },
    { from: "Paris", to: "Reims", duration: "~1h45", popular: false },
  ],

  coverage: [
    "Paris (tous les arrondissements)",
    "Charles de Gaulle (CDG)",
    "Aéroport d'Orly",
    "Aéroport de Beauvais",
    "Disneyland Paris",
    "Versailles",
    "Île-de-France",
    "Toute la France & l'Europe",
  ],

  faqs: [
    {
      q: "Combien de temps dure le trajet de CDG au centre de Paris ?",
      a: "En général 40 à 55 minutes selon le trafic et votre destination exacte. Votre chauffeur choisit l'itinéraire le plus rapide le jour même.",
    },
    {
      q: "Que se passe-t-il si mon vol est retardé ?",
      a: "Nous suivons votre vol en temps réel et ajustons automatiquement votre prise en charge — sans frais supplémentaires. Vous ne serez jamais facturé pour un retard indépendant de votre volonté.",
    },
    {
      q: "Vos tarifs sont-ils vraiment tout compris ?",
      a: "Oui. Le tarif annoncé comprend les péages, le parking, les taxes et l'accueil personnalisé. Pas de compteur, pas de majoration et aucun supplément caché.",
    },
    {
      q: "Où mon chauffeur m'attendra-t-il à l'aéroport ?",
      a: "Votre chauffeur vous attend dans le hall des arrivées avec une pancarte à votre nom et vous aide à porter vos bagages jusqu'au véhicule. Nous couvrons tous les terminaux de CDG, Orly, Beauvais et Le Bourget.",
    },
    {
      q: "Puis-je demander un siège enfant ?",
      a: "Bien sûr. Sièges enfant et rehausseurs sont disponibles sur demande — précisez-le simplement lors de votre réservation, surtout si vous voyagez avec des bébés ou de jeunes enfants.",
    },
    {
      q: "Comment payer, et puis-je annuler ?",
      a: "Nous acceptons la carte et les espèces. Annulez au moins 12 heures avant la prise en charge pour un remboursement à 100 % ; les annulations dans les 12 heures précédant la prise en charge ne sont pas remboursables.",
    },
  ],

  bookingLocations: [
    "Paris (centre-ville)",
    "Aéroport CDG",
    "Aéroport d'Orly",
    "Aéroport de Beauvais",
    "Aéroport du Bourget",
    "Disneyland Paris",
    "Versailles",
    "Autre (préciser dans les notes)",
  ],
};

/**
 * Customer reviews are intentionally NOT translated: 786 Transport serves both
 * French- and English-speaking clients, so the testimonial wall shows a mix of
 * both languages in each review's original wording, identically regardless of
 * the site's selected language.
 */
export const testimonials: {
  name: string;
  role: string;
  text: string;
  rating: number;
}[] = [
  {
    name: "Sophie L.",
    role: "Voyageuse d'affaires",
    text: "Toujours à l'heure, voiture impeccable et chauffeur très professionnel. Ma référence pour les transferts aéroport à Paris.",
    rating: 5,
  },
  {
    name: "James M.",
    role: "Tourist · London",
    text: "Booked a day tour of Paris. The chauffeur was friendly and knowledgeable. An unforgettable experience!",
    rating: 5,
  },
  {
    name: "Amélie R.",
    role: "Cliente entreprise",
    text: "Nous faisons appel à 786 Transport pour tous nos déplacements professionnels. Fiable, discret et d'une qualité de service constante.",
    rating: 5,
  },
  {
    name: "Daniel K.",
    role: "Frequent Flyer",
    text: "My flight into CDG landed two hours late and the driver was still there waiting with a smile. No extra charge, no stress. That's rare these days.",
    rating: 5,
  },
  {
    name: "Isabella F.",
    role: "Honeymoon · Milan",
    text: "We hired the S-Class for an evening drive along the Seine. Champagne cold, car immaculate, driver so discreet. The highlight of our honeymoon.",
    rating: 5,
  },
  {
    name: "Thomas B.",
    role: "Voyage en famille",
    text: "Trajet vers Disneyland avec deux jeunes enfants. Les sièges enfant étaient installés et prêts, et la Classe V a avalé tous nos bagages. Sans stress, de porte à porte.",
    rating: 5,
  },
  {
    name: "Marta G.",
    role: "Tourist · Madrid",
    text: "Day trip to Versailles was flawless. Our driver dropped us right at the gates and picked us up exactly on time. Highly recommend for sightseeing.",
    rating: 5,
  },
  {
    name: "Claire D.",
    role: "Cliente mariage",
    text: "Réservée comme voiture de mariage, elle était irréprochable — rubans, carrosserie étincelante, tout y était. Arrivé en avance et le chauffeur, un vrai gentleman.",
    rating: 5,
  },
  {
    name: "Yuki T.",
    role: "Tourist · Tokyo",
    text: "The driver spoke clearly, helped with our bags and even recommended a wonderful restaurant. We felt genuinely looked after in a new city.",
    rating: 5,
  },
  {
    name: "Fatima A.",
    role: "Voyage en groupe · Dubaï",
    text: "Six personnes et une montagne d'achats — la Classe V a tout géré sans problème. Confortable, climatisée et impeccable. Je réserverai à nouveau au prochain voyage.",
    rating: 5,
  },
  {
    name: "Michael R.",
    role: "Business Traveller",
    text: "Orly to La Défense in the morning rush and I still made my 9am. The driver knew every shortcut. Booking took under a minute.",
    rating: 5,
  },
  {
    name: "Lucas M.",
    role: "Excursion",
    text: "Excursion d'une journée en Champagne. Notre chauffeur a été patient à chaque étape et nous a ramenés en toute sécurité après les dégustations. Une superbe journée.",
    rating: 5,
  },
  {
    name: "Andreas H.",
    role: "Corporate · Frankfurt",
    text: "We handle a lot of executive travel and 786 is now our Paris standard. Always punctual, clean invoicing, and the drivers are true professionals.",
    rating: 4,
  },
  {
    name: "Emma S.",
    role: "Voyageuse en solo",
    text: "Prise en charge tard le soir à l'aéroport et je me suis sentie parfaitement en sécurité tout le long. Trajet suivi, chauffeur sympathique, tarif fixe et honnête. Merci !",
    rating: 5,
  },
  {
    name: "Oliver W.",
    role: "Executive",
    text: "Ran a two-day investor roadshow across Paris with 786. Punctual for every meeting and the car was a quiet place to take calls. Faultless.",
    rating: 5,
  },
  {
    name: "Priya N.",
    role: "Touriste · Bombay",
    text: "J'ai passé la journée à faire du shopping autour des Champs-Élysées et le chauffeur a attendu patiemment devant chaque boutique. Aimable, professionnel et jamais pressé.",
    rating: 5,
  },
];

/** All locale bundles, keyed by language code. */
export const content: Record<Lang, ContentBundle> = { en, fr };
