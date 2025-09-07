"use client";

// import { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import type { LatLngTuple } from "leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png",
});

interface MapComponentProps {
  position: LatLngTuple;
  zoom?: number;
}

export default function MapComponent({ position, zoom = 13 }: MapComponentProps) {
//   const [isDarkMode, setIsDarkMode] = useState(true);

const isDarkMode = true;

//   useEffect(() => {
//     // if (typeof window === "undefined") return;

//     const darkModeQuery = window.matchMedia("(prefers-color-scheme: dark)");
//     setIsDarkMode(darkModeQuery.matches);

//     const handleChange = (e: MediaQueryListEvent) => setIsDarkMode(e.matches);
//     darkModeQuery.addEventListener("change", handleChange);

//     return () => darkModeQuery.removeEventListener("change", handleChange);
//   }, []);

  const tileUrl = isDarkMode
    ? "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
    : "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png";

  return (
    <div style={{ height: "100%", width: "100%" }}>
      <MapContainer
        key={`${position[0]}-${position[1]}`}
        center={position}
        zoom={zoom}
        style={{ height: "100%", width: "100%" }}
        attributionControl={false}
        zoomControl={false}
      >
        <TileLayer url={tileUrl} />
        <Marker position={position}>
          <Popup>Current Position</Popup>
        </Marker>
      </MapContainer>

      <style jsx global>{`
        .leaflet-control-attribution {
          display: none !important;
        }
        .leaflet-control-zoom {
          display: none !important;
        }
      `}</style>
    </div>
  );
}
