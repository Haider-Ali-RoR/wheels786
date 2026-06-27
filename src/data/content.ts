/**
 * Centralized site content & configuration for 786 Transport.
 * Edit business details (phone, email, address) here — they propagate everywhere.
 *
 * NOTE: Contact details below are placeholders for the 786 Transport brand.
 * Replace with the real numbers/address/email before going live.
 */

export const company = {
  name: "786 Transport",
  shortName: "786",
  tagline: "Premium Private Chauffeur & VTC in Paris",
  description:
    "Specialized in high-end passenger transport across Paris, Île-de-France, and all of Europe. Professional drivers, a modern fleet, available 24/7.",
  // --- Contact ---
  phoneDisplay: "+33 6 50 98 23 88",
  phoneRaw: "+33650982388",
  whatsappRaw: "33650982388",
  email: "786transport.rs@gmail.com",
  address: "5 Cité de la Courtille — Rue des Maraudes, 93200 Saint-Denis, France",
  rating: 5,
  reviewCount: 3000,
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
  { label: "Why Us", href: "#why" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

export const services = [
  {
    icon: "plane",
    title: "Airport Transfers",
    text: "Reliable pickups and drop-offs for CDG, Orly, and Beauvais. Flight tracking, meet & greet, and fixed prices with no surprises.",
  },
  {
    icon: "briefcase",
    title: "Business Travel",
    text: "Punctual, discreet chauffeur service for executives and corporate clients. Travel in comfort while you stay productive.",
  },
  {
    icon: "road",
    title: "Long Distance",
    text: "Comfortable intercity and cross-Europe journeys. Travel door to door in a premium sedan instead of crowded trains.",
  },
  {
    icon: "champagne",
    title: "Events & Occasions",
    text: "Weddings, galas, nights out, and special events. Arrive in style with a dedicated chauffeur at your service.",
  },
  {
    icon: "clock",
    title: "Hourly Hire",
    text: "Book your driver by the hour for meetings, shopping, or multiple stops. Total flexibility for your schedule.",
  },
  {
    icon: "camera",
    title: "Paris Tours",
    text: "Discover Paris and its landmarks with a private chauffeur. Custom itineraries at your own pace, in full comfort.",
  },
];

export const fleet = [
  {
    name: "Mercedes-Benz E-Class",
    type: "Business Sedan",
    image: "front",
    seats: 3,
    luggage: 3,
    text: "Our flagship sedan — refined, quiet, and impeccably maintained. Ideal for airport transfers and business travel.",
    features: ["Leather interior", "Climate control", "Bottled water", "Phone chargers"],
  },
  {
    name: "Mercedes-Benz E-Class",
    type: "Premium Sedan",
    image: "rear",
    seats: 3,
    luggage: 3,
    text: "Travel in elegance with our E-Class 4MATIC. Discreet, spacious, and perfect for both city rides and long distances.",
    features: ["Tinted windows", "Plush seating", "Wi-Fi on request", "Quiet cabin"],
  },
];

export const features = [
  {
    icon: "shield",
    title: "Professional Drivers",
    text: "Licensed, experienced, and discreet chauffeurs who know Paris and the region inside out.",
  },
  {
    icon: "star",
    title: "Premium Fleet",
    text: "Modern, immaculately maintained Mercedes vehicles for maximum comfort and safety.",
  },
  {
    icon: "tag",
    title: "Fixed Prices",
    text: "Transparent, upfront pricing. The price you're quoted is the price you pay — no hidden fees.",
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
  { value: "5★", label: "Average Rating" },
  { value: "24/7", label: "Availability" },
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
    role: "Tourist",
    text: "Booked a day tour of Paris. The chauffeur was friendly and knowledgeable. An unforgettable experience!",
    rating: 5,
  },
  {
    name: "Amélie R.",
    role: "Corporate Client",
    text: "We use 786 Transport for all our executive travel. Reliable, discreet, and consistently excellent service.",
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

export const serviceOptions = [
  "Airport Transfer",
  "Business Travel",
  "Long Distance",
  "Event / Occasion",
  "Hourly Hire",
  "Paris Tour",
  "Other",
];
