import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import "leaflet/dist/leaflet.css";
import axios from "axios";
import ResponsiveLayout from "../layout/ResponsiveLayout";

const LeafletMap = dynamic(() => import("leaflet"), { ssr: false });

const MapComponent = () => {
  const [loading, setLoading] = useState(false);
  const [selectedBloodGroup, setSelectedBloodGroup] = useState("A+");

  const [filteredData, setFilterdData] = useState({
    "A+": [],
    "A-": [],
    "B+": [],
    "B-": [],
    "AB+": [],
    "AB-": [],
    "O+": [],
    "O-": [],
  });
  useEffect(() => {
    const fetchCoordinates = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          process.env.NEXT_PUBLIC_SERVER_URL + `/users/map`
        );
        setLoading(false);
        // console.log(response.data);
        let initalData = {
          "A+": [],
          "A-": [],
          "B+": [],
          "B-": [],
          "AB+": [],
          "AB-": [],
          "O+": [],
          "O-": [],
        };
        response.data.forEach((item) => {
          initalData[item.bloodGroup].push(item);
        });
        setFilterdData(initalData);
        // console.log(filteredData);
      } catch (error) {
        setLoading(false);
        console.error("Error fetching data:", error);
      }
    };
    fetchCoordinates();
  }, []);

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
        iconAnchor: [12, 40],
        popupAnchor: [-3, -76],
        shadowSize: [68, 95],
        shadowAnchor: [22, 94],
      });

      let markers = [
        { coordinates: [51.505, -0.09], popupText: "Marker 1" },
        { coordinates: [51.51, -0.1], popupText: "Marker 2" },
        { coordinates: [25.4484, 78.5685], popupText: "Marker 3" },
        { coordinates: [26.8756, 80.9115], popupText: "Marker 4" },
      ];

      if (filteredData[selectedBloodGroup].length > 0) {
        filteredData[selectedBloodGroup].forEach((item) => {
          markers.push({
            coordinates: [item.latitude, item.longitude],
            popupText: `${item.id} ${item.bloodGroup}`,
          });
        });
      }
      console.log(selectedBloodGroup);
      console.log(filteredData);
      console.log(filteredData[selectedBloodGroup]);
      console.log(markers);

      markers.forEach((marker) => {
        L.marker(marker.coordinates, { icon: myIcon })
          .addTo(map)
          .bindPopup(marker.popupText);
      });

      return () => {
        map.remove();
      };
    }
  }, [filteredData, selectedBloodGroup]);

  const handleBloodGroupChange = (event) => {
    const bloodGroup = event.target.value;
    setSelectedBloodGroup(bloodGroup);
  };

  return (
    <ResponsiveLayout>
      <div className="flex flex-row h-screen">
        <div className="flex-[2] map-gradient flex justify-center">
          <div className="bg-gray-600 rounded-md p-2 m-2 max-h-10">
            <label className="text-white" htmlFor="bloodGroup">
              Select Blood Group:
            </label>
            <select
              className="ml-2 rounded sm bg-[#6a0c399c] p-1 text-gray-200"
              id="bloodGroup"
              value={selectedBloodGroup}
              onChange={handleBloodGroupChange}
            >
              <option value="A+">A+</option>
              <option value="A-">A-</option>
              <option value="B+">B+</option>
              <option value="B-">B-</option>
              <option value="AB+">AB+</option>
              <option value="AB-">AB-</option>
              <option value="O+">O+</option>
              <option value="O-">O-</option>
            </select>
          </div>
        </div>
        <div
          className="flex-[3] mx-auto border-gray-600 border-8"
          id="map"
          style={{ height: "750px", width: "700px" }}
        ></div>
      </div>
    </ResponsiveLayout>
  );
};

export default MapComponent;
