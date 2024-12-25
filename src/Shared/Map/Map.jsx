
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
// Fix for default marker icon issues in React
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import SectionTitle from '../../Components/SectionTitle/SectionTitle';
let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
});
L.Marker.prototype.options.icon = DefaultIcon;



const Map = () => {
    const position = [23.8103, 90.4125];

    return (
        <div>
            <SectionTitle></SectionTitle>
            <MapContainer center={position} zoom={15} style={{ height: '450px', width: '100%', }}>
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                <Marker position={position}>
                    <Popup>My Location</Popup>
                </Marker>
            </MapContainer>
        </div>

    )
}

export default Map;