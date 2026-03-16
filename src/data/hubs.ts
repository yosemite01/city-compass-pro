import hubCowork from "@/assets/hub-cowork.jpg";
import hubRooftop from "@/assets/hub-rooftop.jpg";
import hubGallery from "@/assets/hub-gallery.jpg";
import hubCafe from "@/assets/hub-cafe.jpg";
import hubHotel from "@/assets/hub-hotel.jpg";
import hubGym from "@/assets/hub-gym.jpg";

export interface Hub {
  slug: string;
  name: string;
  category: string;
  city: string;
  rating: number;
  visitors: string;
  distance: string;
  verified: boolean;
  image: string;
  lat: number;
  lng: number;
  description: string;
  address: string;
  phone: string;
  hours: string;
  services: string[];
  reviews: { user: string; rating: number; text: string; date: string }[];
}

export const hubs: Hub[] = [
  {
    slug: "neuwork-berlin",
    name: "NeuWork Berlin",
    category: "Coworking",
    city: "Berlin",
    rating: 4.8,
    visitors: "1.2k/mo",
    distance: "0.4 km",
    verified: true,
    image: hubCowork,
    lat: 52.52,
    lng: 13.405,
    description: "A cutting-edge coworking space in the heart of Berlin. NeuWork blends industrial design with high-speed connectivity and a vibrant community of digital nomads, startups, and freelancers.",
    address: "Friedrichstraße 123, 10117 Berlin",
    phone: "+49 30 1234567",
    hours: "Mon–Fri 7:00–22:00 · Sat–Sun 9:00–18:00",
    services: ["High-Speed WiFi", "Private Offices", "Meeting Rooms", "Event Space", "Coffee Bar", "Locker Storage"],
    reviews: [
      { user: "Alex M.", rating: 5, text: "Perfect workspace. The community events are fantastic and the espresso machine is world-class.", date: "2026-02-14" },
      { user: "Sara K.", rating: 4, text: "Great vibe but can get crowded during peak hours. Love the rooftop terrace.", date: "2026-01-28" },
      { user: "James T.", rating: 5, text: "Best coworking space I've used across 20+ cities. Highly recommended.", date: "2025-12-05" },
    ],
  },
  {
    slug: "skyline-terrace",
    name: "Skyline Terrace",
    category: "Nightlife",
    city: "Dubai",
    rating: 4.6,
    visitors: "3.8k/mo",
    distance: "2.1 km",
    verified: true,
    image: hubRooftop,
    lat: 25.2048,
    lng: 55.2708,
    description: "Dubai's premier rooftop lounge offering panoramic views of the skyline. Featuring craft cocktails, international DJs, and an unmatched atmosphere every night.",
    address: "Marina Walk Tower 7, Floor 42, Dubai Marina",
    phone: "+971 4 555 6789",
    hours: "Daily 18:00–03:00",
    services: ["VIP Lounge", "Live DJs", "Craft Cocktails", "Private Events", "Bottle Service", "Valet Parking"],
    reviews: [
      { user: "Priya S.", rating: 5, text: "The views are breathtaking. Best sunset spot in Dubai, period.", date: "2026-03-01" },
      { user: "Omar F.", rating: 4, text: "Great vibe on weekends. Cocktails are pricey but worth it.", date: "2026-02-10" },
    ],
  },
  {
    slug: "forma-gallery",
    name: "Forma Gallery",
    category: "Art & Culture",
    city: "Tokyo",
    rating: 4.9,
    visitors: "890/mo",
    distance: "1.3 km",
    verified: false,
    image: hubGallery,
    lat: 35.6762,
    lng: 139.6503,
    description: "An avant-garde gallery in Shibuya showcasing emerging artists from across Asia. Forma bridges traditional Japanese aesthetics with digital art and immersive installations.",
    address: "4-8-15 Shibuya, Tokyo 150-0002",
    phone: "+81 3 9876 5432",
    hours: "Tue–Sun 11:00–20:00 · Closed Monday",
    services: ["Exhibitions", "Artist Residency", "Workshops", "Gift Shop", "Guided Tours", "Café"],
    reviews: [
      { user: "Yuki N.", rating: 5, text: "One of the most inspiring galleries in Tokyo. The digital art installations are mind-blowing.", date: "2026-03-10" },
      { user: "Chris D.", rating: 5, text: "Hidden gem. The curation is exceptional and the staff is incredibly knowledgeable.", date: "2026-02-22" },
    ],
  },
  {
    slug: "slow-pour",
    name: "Slow Pour",
    category: "Café",
    city: "Lisbon",
    rating: 4.7,
    visitors: "640/mo",
    distance: "0.8 km",
    verified: true,
    image: hubCafe,
    lat: 38.7223,
    lng: -9.1393,
    description: "A specialty coffee house in Lisbon's Alfama district. Slow Pour sources single-origin beans and serves them in a beautifully restored 18th-century building.",
    address: "Rua da Saudade 42, 1100-432 Lisboa",
    phone: "+351 21 987 6543",
    hours: "Daily 8:00–19:00",
    services: ["Specialty Coffee", "Pastries", "WiFi", "Outdoor Seating", "Coffee Workshops", "Bean Retail"],
    reviews: [
      { user: "Maria L.", rating: 5, text: "The best flat white I've had outside of Melbourne. The building is stunning.", date: "2026-01-15" },
      { user: "Tom B.", rating: 4, text: "Lovely atmosphere and great coffee. Can be hard to find a seat on weekends.", date: "2026-02-08" },
    ],
  },
  {
    slug: "the-obsidian",
    name: "The Obsidian",
    category: "Hotel",
    city: "London",
    rating: 4.5,
    visitors: "2.1k/mo",
    distance: "3.2 km",
    verified: true,
    image: hubHotel,
    lat: 51.5074,
    lng: -0.1278,
    description: "A boutique hotel in Shoreditch combining minimalist luxury with tech-forward amenities. Each room features smart controls, curated art, and floor-to-ceiling windows.",
    address: "88 Curtain Road, London EC2A 3AA",
    phone: "+44 20 7946 0958",
    hours: "24/7 Reception",
    services: ["Smart Rooms", "Rooftop Bar", "Spa", "Co-Working Lounge", "Concierge", "EV Charging"],
    reviews: [
      { user: "Emma W.", rating: 5, text: "Stunning design hotel. The rooftop bar alone is worth the visit.", date: "2026-03-05" },
      { user: "David R.", rating: 4, text: "Great location and beautiful rooms. Breakfast could be better.", date: "2026-01-20" },
    ],
  },
  {
    slug: "forge-athletics",
    name: "Forge Athletics",
    category: "Fitness",
    city: "NYC",
    rating: 4.4,
    visitors: "1.6k/mo",
    distance: "1.1 km",
    verified: false,
    image: hubGym,
    lat: 40.7128,
    lng: -74.006,
    description: "A high-performance gym in Manhattan's Meatpacking District. Forge combines Olympic lifting platforms, recovery suites, and personalized coaching in an industrial-chic space.",
    address: "401 W 14th St, New York, NY 10014",
    phone: "+1 212-555-0199",
    hours: "Mon–Fri 5:00–23:00 · Sat–Sun 7:00–21:00",
    services: ["Personal Training", "Olympic Lifting", "Recovery Suite", "Sauna", "Nutrition Coaching", "Group Classes"],
    reviews: [
      { user: "Mike J.", rating: 5, text: "Best equipped gym in NYC. The coaches really know their stuff.", date: "2026-02-28" },
      { user: "Lisa P.", rating: 4, text: "Love the atmosphere and equipment. Membership is on the pricey side.", date: "2026-01-12" },
    ],
  },
];
