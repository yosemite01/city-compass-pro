import { useRef, useMemo, useState, useCallback } from "react";
import { Canvas, useFrame, extend } from "@react-three/fiber";
import { OrbitControls, Html, Stars } from "@react-three/drei";
import * as THREE from "three";
import { hubs } from "@/data/hubs";
import { useNavigate } from "react-router-dom";

// Convert lat/lng to 3D sphere position
function latLngToVector3(lat: number, lng: number, radius: number): THREE.Vector3 {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lng + 180) * (Math.PI / 180);
  const x = -(radius * Math.sin(phi) * Math.cos(theta));
  const z = radius * Math.sin(phi) * Math.sin(theta);
  const y = radius * Math.cos(phi);
  return new THREE.Vector3(x, y, z);
}

function Globe() {
  const globeRef = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (globeRef.current) {
      globeRef.current.rotation.y += 0.001;
    }
  });

  return (
    <mesh ref={globeRef}>
      <sphereGeometry args={[2, 64, 64]} />
      <meshStandardMaterial
        color="#0a1628"
        emissive="#0d2847"
        emissiveIntensity={0.3}
        roughness={0.8}
        metalness={0.2}
        wireframe={false}
      />
      {/* Wireframe overlay */}
      <mesh>
        <sphereGeometry args={[2.005, 32, 32]} />
        <meshBasicMaterial color="#1e3a5f" wireframe transparent opacity={0.15} />
      </mesh>
      {/* Glow ring */}
      <mesh>
        <sphereGeometry args={[2.02, 64, 64]} />
        <meshBasicMaterial color="#3b82f6" transparent opacity={0.04} />
      </mesh>
    </mesh>
  );
}

function HubMarker({ hub, onSelect }: { hub: typeof hubs[0]; onSelect: (slug: string) => void }) {
  const [hovered, setHovered] = useState(false);
  const position = useMemo(() => latLngToVector3(hub.lat, hub.lng, 2.08), [hub.lat, hub.lng]);
  const markerRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (markerRef.current) {
      const scale = hovered ? 1.8 : 1 + Math.sin(state.clock.elapsedTime * 2 + hub.lat) * 0.15;
      markerRef.current.scale.setScalar(scale);
    }
  });

  return (
    <group position={position}>
      <mesh
        ref={markerRef}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        onClick={(e) => {
          e.stopPropagation();
          onSelect(hub.slug);
        }}
      >
        <sphereGeometry args={[0.04, 16, 16]} />
        <meshBasicMaterial color={hovered ? "#60a5fa" : "#3b82f6"} />
      </mesh>
      {/* Pulse ring */}
      <mesh rotation={[0, 0, 0]}>
        <ringGeometry args={[0.05, 0.07, 32]} />
        <meshBasicMaterial color="#3b82f6" transparent opacity={0.3} side={THREE.DoubleSide} />
      </mesh>
      {hovered && (
        <Html distanceFactor={6} style={{ pointerEvents: "none" }}>
          <div className="bg-card/95 backdrop-blur-md border border-border rounded-lg px-3 py-2 min-w-[160px] shadow-xl">
            <p className="text-sm font-medium text-foreground whitespace-nowrap">{hub.name}</p>
            <p className="text-xs text-muted-foreground whitespace-nowrap">
              {hub.category} · {hub.city}
            </p>
            <p className="text-xs text-muted-foreground mt-1">⭐ {hub.rating}</p>
          </div>
        </Html>
      )}
    </group>
  );
}

function ConnectionLines() {
  const lines = useMemo(() => {
    const result: THREE.Vector3[][] = [];
    for (let i = 0; i < hubs.length; i++) {
      for (let j = i + 1; j < hubs.length; j++) {
        const start = latLngToVector3(hubs[i].lat, hubs[i].lng, 2.08);
        const end = latLngToVector3(hubs[j].lat, hubs[j].lng, 2.08);
        // Create arc through midpoint above the surface
        const mid = new THREE.Vector3().addVectors(start, end).multiplyScalar(0.5);
        mid.normalize().multiplyScalar(2.4);
        const curve = new THREE.QuadraticBezierCurve3(start, mid, end);
        result.push(curve.getPoints(30));
      }
    }
    return result;
  }, []);

  return (
    <>
      {lines.map((points, i) => {
        const geometry = new THREE.BufferGeometry().setFromPoints(points);
        return (
          <line key={i} geometry={geometry}>
            <lineBasicMaterial color="#3b82f6" transparent opacity={0.08} />
          </line>
        );
      })}
    </>
  );
}

const MapExplorer = () => {
  const navigate = useNavigate();

  const handleSelect = useCallback(
    (slug: string) => {
      navigate(`/hub/${slug}`);
    },
    [navigate]
  );

  return (
    <div className="w-full h-[500px] md:h-[600px] rounded-xl overflow-hidden border border-border relative bg-background">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.3} />
        <directionalLight position={[5, 3, 5]} intensity={0.8} color="#a0c4ff" />
        <pointLight position={[-5, -3, -5]} intensity={0.3} color="#3b82f6" />

        <Stars radius={50} depth={40} count={1500} factor={3} saturation={0} fade speed={0.5} />

        <Globe />
        <ConnectionLines />
        {hubs.map((hub) => (
          <HubMarker key={hub.slug} hub={hub} onSelect={handleSelect} />
        ))}

        <OrbitControls
          enableZoom
          enablePan={false}
          minDistance={3}
          maxDistance={8}
          autoRotate
          autoRotateSpeed={0.3}
          enableDamping
          dampingFactor={0.05}
        />
      </Canvas>

      {/* Overlay label */}
      <div className="absolute bottom-4 left-4 text-label text-primary flex items-center gap-2">
        <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse-glow" />
        Interactive 3D · Drag to rotate
      </div>
    </div>
  );
};

export default MapExplorer;
