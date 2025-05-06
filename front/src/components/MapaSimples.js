import React, { useState, useEffect } from 'react'; // Importe useState e useEffect
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
    iconUrl: markerIcon,
    shadowUrl: markerShadow
});

L.Marker.prototype.options.icon = DefaultIcon;

function MapaSimples({ center, zoom }) {
  const [map, setMap] = useState(null); // Exemplo de useState (se você precisar acessar a instância do mapa)
  const [markerPosition, setMarkerPosition] = useState(center); // Exemplo de useState para a posição do marcador

  useEffect(() => {
    if (map && center) {
      map.setView(center, zoom);
      setMarkerPosition(center);
    }
  }, [map, center, zoom]);

  return (
    <MapContainer
      ref={setMap} // Use ref para acessar a instância do mapa
      center={center || { lat: 0, lng: 0 }} // Centro padrão caso 'center' seja nulo
      zoom={zoom || 10} // Zoom padrão caso 'zoom' seja nulo
      style={{ height: '200px', width: '100%' }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {markerPosition && (
        <Marker position={markerPosition}>
          <Popup>Localização</Popup>
        </Marker>
      )}
    </MapContainer>
  );
}

export default MapaSimples;