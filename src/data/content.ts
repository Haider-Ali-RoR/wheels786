/**
 * Centralized site content & configuration for 786 Transport.
 * Edit business details, fleet, pricing, routes, and FAQ here —
 * they propagate across the whole site.
 */

export const company = {
  name: "786 Transport",
  shortName: "786",
  tagline: "Premium Private Chauffeur & VTC in Paris",
  description:
    "Specialized in high-end passenger transport across Paris, Île-de-France, and all of Europe. Professional drivers, a modern Mercedes fleet, fixed all-inclusive prices, available 24/7.",
  // --- Contact ---
  phoneDisplay: "+33 6 50 98 23 88",
  phoneRaw: "+33650982388",
  whatsappRaw: "33650982388",
  email: "786transport.rs@gmail.com",
  address: "5 Cité de la Courtille — Rue des Maraudes, 93200 Saint-Denis, France",
  rating: 4.7,
  reviewCount: "13K",
  hours: "24/7 — 7 days a week",
  // --- Legal (SAS) ---
  legalName: "786 Transport SAS",
  siren: "814 062 121",
  vat: "FR12814062121",
};

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Fleet", href: "#fleet" },
  { label: "Reviews", href: "#reviews" },
  { label: "FAQ", href: "#faq" },
];

export const services = [
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
];

/**
 * Fleet classes. `image` maps to an imported asset in Fleet.tsx.
 * `priceFrom` is the lowest transfer price (in €) for that class.
 */
export const fleet = [
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
];

/** Guarantees / why-choose-us (shown in the Why Us section). */
export const features = [
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
];

export const stats = [
  { value: "10+", label: "Years Experience" },
  { value: "15K+", label: "Rides Completed" },
  { value: "4.7★", label: "Average Rating" },
  { value: "24/7", label: "Availability" },
];

/** Popular travel points / routes shown in the "Travel Points" section. */
export const routes = [
  { from: "Orly Airport", to: "Paris", duration: "~30 min", popular: true },
  { from: "CDG Airport", to: "Paris", duration: "~45 min", popular: true },
  { from: "Paris", to: "Versailles", duration: "~40 min", popular: false },
  { from: "CDG Airport", to: "Disneyland Paris", duration: "~45 min", popular: true },
  { from: "Orly Airport", to: "Disneyland Paris", duration: "~50 min", popular: false },
  { from: "CDG Airport", to: "Versailles", duration: "~60 min", popular: false },
  { from: "Beauvais Airport", to: "Paris", duration: "~1h15", popular: false },
  { from: "Paris", to: "Disneyland Paris", duration: "~45 min", popular: false },
  { from: "Paris", to: "Reims", duration: "~1h45", popular: false },
];

export const testimonials = [
  {
    name: "Sophie L.",
    role: "Business Traveller",
    text: "Always on time, spotless car, and a very professional driver. My go-to for airport transfers in Paris.",
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
    role: "Corporate Client",
    text: "We use 786 Transport for all our executive travel. Reliable, discreet, and consistently excellent service.",
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
    role: "Family Trip",
    text: "Travelled to Disneyland with two small kids. Child seats were fitted and ready, and the V-Class swallowed all our luggage. Stress-free from door to door.",
    rating: 5,
  },
  {
    name: "Marta G.",
    role: "Tourist · Madrid",
    text: "Day trip to Versailles was flawless. Our driver dropped us right at the gates and picked us up exactly on time. Highly recommend for sightseeing.",
    rating: 5,
  },
  {
    name: "Oliver W.",
    role: "Executive",
    text: "Ran a two-day investor roadshow across Paris with 786. Punctual for every meeting and the car was a quiet place to take calls. Faultless.",
    rating: 5,
  },
  {
    name: "Yuki T.",
    role: "Tourist · Tokyo",
    text: "The driver spoke clearly, helped with our bags and even recommended a wonderful restaurant. We felt genuinely looked after in a new city.",
    rating: 5,
  },
  {
    name: "Claire D.",
    role: "Wedding Client",
    text: "Booked as our wedding car and it was pristine — ribbons, polished paint, the lot. Arrived early and the chauffeur was a true gentleman.",
    rating: 5,
  },
  {
    name: "Michael R.",
    role: "Business Traveller",
    text: "Orly to La Défense in the morning rush and I still made my 9am. The driver knew every shortcut. Booking took under a minute.",
    rating: 5,
  },
  {
    name: "Fatima A.",
    role: "Group Travel · Dubai",
    text: "Six of us plus a mountain of shopping — the V-Class handled it easily. Comfortable, cool and spotless. Will book again next trip.",
    rating: 5,
  },
  {
    name: "Lucas M.",
    role: "Day Tour",
    text: "Full-day excursion to the Champagne region. Our chauffeur was patient at every stop and got us home safely after the tastings. Brilliant day out.",
    rating: 5,
  },
  {
    name: "Emma S.",
    role: "Solo Traveller",
    text: "Late-night pickup from the airport and I felt completely safe the whole way. Tracked my ride, friendly driver, fair fixed price. Thank you!",
    rating: 5,
  },
  {
    name: "Andreas H.",
    role: "Corporate · Frankfurt",
    text: "We handle a lot of executive travel and 786 is now our Paris standard. Always punctual, clean invoicing, and the drivers are true professionals.",
    rating: 4,
  },
  {
    name: "Priya N.",
    role: "Tourist · Mumbai",
    text: "Spent the day shopping around the Champs-Élysées and the driver waited patiently at every store. Kind, professional and never rushed us.",
    rating: 5,
  },
];

export const coverage = [
  "Paris (all arrondissements)",
  "Charles de Gaulle (CDG)",
  "Orly Airport",
  "Beauvais Airport",
  "Disneyland Paris",
  "Versailles",
  "Île-de-France",
  "All of France & Europe",
];

export const faqs = [
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
];

/** Locations offered in the booking widget dropdowns. */
export const bookingLocations = [
  "Paris (City Center)",
  "CDG Airport",
  "Orly Airport",
  "Beauvais Airport",
  "Le Bourget Airport",
  "Disneyland Paris",
  "Versailles",
  "Other (specify in notes)",
];

/** Vehicle class options for the booking widget (derived from the fleet). */
export const vehicleClasses = fleet.map(
  (v) => `${v.name} (${v.tier}) — up to ${v.seats} pax`
);
