import { motion } from "framer-motion";
import {
  Coffee, Building2, Landmark, Music, ShoppingBag, BookOpen, Dumbbell, Utensils
} from "lucide-react";

const categories = [
  { name: "Coworking", icon: Building2 },
  { name: "Cafés", icon: Coffee },
  { name: "Attractions", icon: Landmark },
  { name: "Nightlife", icon: Music },
  { name: "Shopping", icon: ShoppingBag },
  { name: "Libraries", icon: BookOpen },
  { name: "Fitness", icon: Dumbbell },
  { name: "Dining", icon: Utensils },
];

const CategoryGrid = () => {
  return (
    <div className="grid grid-cols-4 sm:grid-cols-8 gap-3">
      {categories.map((cat, i) => (
        <motion.button
          key={cat.name}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.2, ease: [0.2, 0.8, 0.2, 1], delay: 0.6 + i * 0.05 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.96 }}
          className="flex flex-col items-center gap-2 p-3 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors duration-200 cursor-pointer group"
        >
          <cat.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors duration-200" />
          <span className="text-label">{cat.name}</span>
        </motion.button>
      ))}
    </div>
  );
};

export default CategoryGrid;
