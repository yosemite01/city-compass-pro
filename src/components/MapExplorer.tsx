import { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { hubs } from "@/data/hubs";
import { useNavigate } from "react-router-dom";

// Fix default marker icons
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png",
  iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png",
  shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png",
});

const MapExplorer = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (!mapRef.current || mapInstanceRef.current) return;

    const map = L.map(mapRef.current, {
      center: [30, 10],
      zoom: 2,
      scrollWheelZoom: true,
    });

    L.tileLayer("https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png", {
      attribution: '&copy; <a href="https://carto.com/">CARTO</a>',
    }).addTo(map);

    hubs.forEach((hub) => {
      const marker = L.marker([hub.lat, hub.lng]).addTo(map);
      marker.bindPopup(`
        <div style="min-width:180px">
          <p style="font-weight:600;margin:0 0 4px">${hub.name}</p>
          <p style="font-size:12px;color:#888;margin:0 0 4px">${hub.category} · ${hub.city}</p>
          <p style="font-size:12px;margin:0 0 6px">⭐ ${hub.rating}</p>
          <a href="/hub/${hub.slug}" style="font-size:12px;color:#3b82f6">View Details →</a>
        </div>
      `);
    });

    mapInstanceRef.current = map;

    return () => {
      map.remove();
      mapInstanceRef.current = null;
    };
  }, []);

  return (
    <div
      ref={mapRef}
      className="w-full h-[500px] md:h-[600px] rounded-xl overflow-hidden border border-border"
    />
  );
};

export default MapExplorer;
