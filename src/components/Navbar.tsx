import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Globe, Wallet, Menu, X } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <motion.nav
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed top-0 left-0 right-0 z-50 glass px-4 md:px-8 py-3"
    >
      <div className="w-full flex items-center justify-between">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate("/")}>
          <Globe className="w-5 h-5 text-primary" />
          <span className="text-heading text-foreground">OrbitCity</span>
        </div>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-6">
          <a href="#" className="text-body text-muted-foreground hover:text-foreground transition-colors">Explore</a>
          <a href="#" className="text-body text-muted-foreground hover:text-foreground transition-colors">Hubs</a>
          <a href="#" className="text-body text-muted-foreground hover:text-foreground transition-colors">Events</a>
        </div>

        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/10 text-primary text-sm font-medium hover:bg-primary/20 transition-colors duration-200">
            <Wallet className="w-4 h-4" />
            <span className="hidden sm:inline">Connect Wallet</span>
          </button>
          <button className="md:hidden p-2" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X className="w-5 h-5 text-foreground" /> : <Menu className="w-5 h-5 text-foreground" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden"
          >
            <div className="flex flex-col gap-3 pt-4 pb-2">
              <a href="#" className="text-body text-muted-foreground hover:text-foreground transition-colors py-2">Explore</a>
              <a href="#" className="text-body text-muted-foreground hover:text-foreground transition-colors py-2">Hubs</a>
              <a href="#" className="text-body text-muted-foreground hover:text-foreground transition-colors py-2">Events</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
