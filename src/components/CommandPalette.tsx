import { useEffect, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Building2, Coffee, Landmark, Music, ShoppingBag, BookOpen, Dumbbell, Utensils, MapPin,
} from "lucide-react";
import { hubs } from "@/data/hubs";

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

const CommandPalette = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((o) => !o);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const handleSelect = useCallback(
    (hubSlug: string) => {
      setOpen(false);
      navigate(`/hub/${hubSlug}`);
    },
    [navigate]
  );

  return (
    <>
      <div onClick={() => setOpen(true)} className="contents">
        {/* Trigger is handled by SearchBar click */}
      </div>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Search hubs, locations, categories..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Hubs">
            {hubs.map((hub) => (
              <CommandItem
                key={hub.slug}
                onSelect={() => handleSelect(hub.slug)}
                className="flex items-center gap-3 cursor-pointer"
              >
                <MapPin className="w-4 h-4 text-primary" />
                <div className="flex flex-col">
                  <span className="text-sm text-foreground">{hub.name}</span>
                  <span className="text-xs text-muted-foreground">
                    {hub.category} · {hub.city}
                  </span>
                </div>
              </CommandItem>
            ))}
          </CommandGroup>
          <CommandGroup heading="Categories">
            {categories.map((cat) => (
              <CommandItem key={cat.name} className="flex items-center gap-3">
                <cat.icon className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm text-foreground">{cat.name}</span>
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
};

export { CommandPalette, type CommandPalette };
export default CommandPalette;
