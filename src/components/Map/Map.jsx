import React, { useEffect } from "react";
import dynamic from "next/dynamic";
import "leaflet/dist/leaflet.css";

const LeafletMap = dynamic(() => import("leaflet"), { ssr: false });

const MapComponent = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const L = require("leaflet");

      const map = L.map("map").setView([21.5937, 82.9629], 4.5);

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 19,
        attribution:
          '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      }).addTo(map);

      const myIcon = L.icon({
        iconUrl: "/image.png",
        iconSize: [28, 40],
        iconAnchor: [22, 94],
        popupAnchor: [-3, -76],
        shadowSize: [68, 95],
        shadowAnchor: [22, 94],
      });

      const markers = [
        { coordinates: [51.505, -0.09], popupText: "Marker 1" },
        { coordinates: [51.51, -0.1], popupText: "Marker 2" },
        { coordinates: [51.515, -0.095], popupText: "Marker 3" },
      ];

      markers.forEach((marker) => {
        L.marker(marker.coordinates, { icon: myIcon })
          .addTo(map)
          .bindPopup(marker.popupText);
      });

      return () => {
        map.remove();
      };
    }
  }, []);

  return <div id="map" style={{ height: "750px", width: "700px" }} className="mx-auto"></div>;
};

export default MapComponent;
