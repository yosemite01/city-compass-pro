import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import SearchBar from "@/components/SearchBar";
import StatsBar from "@/components/StatsBar";
import CategoryGrid from "@/components/CategoryGrid";
import HubCard from "@/components/HubCard";
import heroCity from "@/assets/hero-city.jpg";
import hubCowork from "@/assets/hub-cowork.jpg";
import hubRooftop from "@/assets/hub-rooftop.jpg";
import hubGallery from "@/assets/hub-gallery.jpg";
import hubCafe from "@/assets/hub-cafe.jpg";
import hubHotel from "@/assets/hub-hotel.jpg";
import hubGym from "@/assets/hub-gym.jpg";

const hubs = [
  { name: "NeuWork Berlin", category: "Coworking", city: "Berlin", rating: 4.8, visitors: "1.2k/mo", distance: "0.4 km", verified: true, image: hubCowork },
  { name: "Skyline Terrace", category: "Nightlife", city: "Dubai", rating: 4.6, visitors: "3.8k/mo", distance: "2.1 km", verified: true, image: hubRooftop },
  { name: "Forma Gallery", category: "Art & Culture", city: "Tokyo", rating: 4.9, visitors: "890/mo", distance: "1.3 km", verified: false, image: hubGallery },
  { name: "Slow Pour", category: "Café", city: "Lisbon", rating: 4.7, visitors: "640/mo", distance: "0.8 km", verified: true, image: hubCafe },
  { name: "The Obsidian", category: "Hotel", city: "London", rating: 4.5, visitors: "2.1k/mo", distance: "3.2 km", verified: true, image: hubHotel },
  { name: "Forge Athletics", category: "Fitness", city: "NYC", rating: 4.4, visitors: "1.6k/mo", distance: "1.1 km", verified: false, image: hubGym },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <img
          src={heroCity}
          alt="OrbitCity digital cityscape"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
        
        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto space-y-6">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, ease: [0.2, 0.8, 0.2, 1] }}
            className="text-label text-primary"
          >
            Decentralized City Discovery Protocol
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: [0.2, 0.8, 0.2, 1], delay: 0.1 }}
            className="text-display text-foreground sm:text-5xl md:text-6xl"
          >
            Discover the<br />
            <span className="text-primary">Programmable City</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="text-body text-muted-foreground max-w-lg mx-auto"
          >
            Explore hubs, locations, and experiences across 142 cities.
            Powered by Stellar smart contracts.
          </motion.p>
          <SearchBar />
        </div>
      </section>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 space-y-10 pb-20">
        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.4 }}
          className="-mt-8 relative z-10"
        >
          <StatsBar />
        </motion.div>

        {/* Categories */}
        <section className="space-y-4">
          <h2 className="text-heading text-foreground">Browse Categories</h2>
          <CategoryGrid />
        </section>

        {/* Featured Hubs */}
        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-heading text-foreground">Featured Hubs</h2>
            <span className="text-label text-primary cursor-pointer hover:underline">View All</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {hubs.map((hub, i) => (
              <motion.div
                key={hub.name}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, ease: [0.2, 0.8, 0.2, 1], delay: 0.5 + i * 0.08 }}
              >
                <HubCard {...hub} />
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="card-surface text-center py-12 space-y-4">
          <h2 className="text-display text-foreground text-2xl sm:text-3xl">List Your Location</h2>
          <p className="text-body text-muted-foreground max-w-md mx-auto">
            Join the decentralized city network. Register your hub and reach explorers worldwide.
          </p>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.96 }}
            className="px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium text-sm transition-colors duration-200"
          >
            Register a Hub
          </motion.button>
        </section>
      </div>
    </div>
  );
};

export default Index;
