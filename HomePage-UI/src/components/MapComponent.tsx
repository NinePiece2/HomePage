"use client";

import { useState, useEffect } from "react";
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

export default function MapComponent({
  position,
  zoom = 14.5,
}: MapComponentProps) {
  const [isDarkMode, setIsDarkMode] = useState(() =>
    typeof window !== "undefined"
      ? window.matchMedia("(prefers-color-scheme: dark)").matches
      : true
  );

  useEffect(() => {
    const darkModeQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const handleChange = (e: MediaQueryListEvent) => setIsDarkMode(e.matches);
    darkModeQuery.addEventListener("change", handleChange);

    return () => darkModeQuery.removeEventListener("change", handleChange);
  }, []);

  const tileUrl = isDarkMode
    ? "https://services.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Base/MapServer/tile/{z}/{y}/{x}"
    : "https://services.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}";

  return (
    <div style={{ height: "100%", width: "100%" }}>
      <MapContainer
        key={`${position[0]}-${position[1]}`}
        center={position}
        zoom={zoom}
        style={{ height: "100%", width: "100%" }}
        attributionControl={false}
        zoomControl={false}
        className="z-1"
      >
        <TileLayer
          url={tileUrl}
          maxZoom={16}
          attribution="Esri, HERE, Garmin, FAO, NOAA, USGS"
        />
        <Marker position={position}>
          <Popup>Current Position</Popup>
        </Marker>
      </MapContainer>

      {/* <style jsx global>{`
        .leaflet-control-attribution {
          display: none !important;
        }
        .leaflet-control-zoom {
          display: none !important;
        }
      `}</style> */}
    </div>
  );
}