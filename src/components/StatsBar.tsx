import { motion } from "framer-motion";

const stats = [
  { label: "Active Hubs", value: "2,847" },
  { label: "Cities", value: "142" },
  { label: "Stellar TXs Today", value: "8.4k" },
  { label: "Explorers", value: "52k" },
];

const StatsBar = () => {
  return (
    <div className="glass px-6 py-4">
      <div className="flex flex-wrap justify-between gap-4">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: [0.2, 0.8, 0.2, 1], delay: 0.5 + i * 0.1 }}
            className="text-center flex-1 min-w-[100px]"
          >
            <p className="text-2xl font-medium text-foreground tabular text-mono">{stat.value}</p>
            <p className="text-label mt-1">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default StatsBar;
