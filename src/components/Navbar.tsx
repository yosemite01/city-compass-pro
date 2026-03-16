import { motion } from "framer-motion";
import { Globe, Wallet } from "lucide-react";

const Navbar = () => {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: [0.2, 0.8, 0.2, 1] }}
      className="fixed top-0 left-0 right-0 z-50 glass px-6 py-3"
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Globe className="w-5 h-5 text-primary" />
          <span className="text-heading text-foreground">OrbitCity</span>
        </div>
        <div className="hidden sm:flex items-center gap-6">
          <a href="#" className="text-body text-muted-foreground hover:text-foreground transition-colors">Explore</a>
          <a href="#" className="text-body text-muted-foreground hover:text-foreground transition-colors">Hubs</a>
          <a href="#" className="text-body text-muted-foreground hover:text-foreground transition-colors">Events</a>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/10 text-primary text-sm font-medium hover:bg-primary/20 transition-colors duration-200">
          <Wallet className="w-4 h-4" />
          <span className="hidden sm:inline">Connect Wallet</span>
        </button>
      </div>
    </motion.nav>
  );
};

export default Navbar;
