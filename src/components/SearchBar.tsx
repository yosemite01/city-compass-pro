import { Search } from "lucide-react";
import { motion } from "framer-motion";

const SearchBar = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: [0.2, 0.8, 0.2, 1], delay: 0.3 }}
      className="glass px-4 py-3 flex items-center gap-3 w-full max-w-xl mx-auto cursor-pointer group"
    >
      <Search className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors duration-200" />
      <span className="text-body text-muted-foreground flex-1">
        Search hubs, locations, experiences...
      </span>
      <kbd className="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 rounded-sm bg-secondary text-label">
        ⌘K
      </kbd>
    </motion.div>
  );
};

export default SearchBar;
