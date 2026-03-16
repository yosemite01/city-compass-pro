import { MapPin, Star, Users } from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

interface HubCardProps {
  slug: string;
  name: string;
  category: string;
  city: string;
  rating: number;
  visitors: string;
  distance: string;
  verified: boolean;
  image: string;
}

const HubCard = ({ slug, name, category, city, rating, visitors, distance, verified, image }: HubCardProps) => {
  const navigate = useNavigate();

  return (
    <motion.div
      whileHover={{ y: -2 }}
      transition={{ duration: 0.2, ease: [0.2, 0.8, 0.2, 1] }}
      onClick={() => navigate(`/hub/${slug}`)}
      className="card-surface cursor-pointer group overflow-hidden h-full"
    >
      <div className="relative h-36 -mx-4 -mt-4 mb-3 overflow-hidden rounded-t-xl">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card/90 to-transparent" />
        {verified && (
          <span className="absolute top-2 right-2 px-2 py-0.5 rounded-md bg-primary/20 text-primary text-label flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse-glow" />
            Verified
          </span>
        )}
      </div>

      <div className="space-y-2">
        <div>
          <p className="text-label text-muted-foreground mb-1">{category}</p>
          <h3 className="text-heading text-foreground">{name}</h3>
        </div>

        <div className="grid grid-cols-2 gap-2 pt-2">
          <div className="flex items-center gap-1.5 text-body text-muted-foreground">
            <MapPin className="w-3 h-3" />
            <span className="text-mono text-xs tabular">{distance}</span>
          </div>
          <div className="flex items-center gap-1.5 text-body text-muted-foreground">
            <Star className="w-3 h-3 text-amber-400" />
            <span className="text-mono text-xs tabular">{rating.toFixed(1)}</span>
          </div>
          <div className="flex items-center gap-1.5 text-body text-muted-foreground col-span-2">
            <Users className="w-3 h-3" />
            <span className="text-mono text-xs tabular">{visitors}</span>
            <span className="text-label ml-1">{city}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default HubCard;
