import React, { useContext } from "react";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { GlobalContext } from "../GlobalContext";

const Map: React.FC = () => {
  const { data } = useContext(GlobalContext);

  // Ensure lat and lng are numbers and assign default values if they are not present.
  const lat: number = data?.location.lat ?? 0;
  const lng: number = data?.location.lng ?? 0;

  // Explicitly type position as [number, number]
  const position: [number, number] = [lat, lng];
  return (
    <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
