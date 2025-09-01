import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import tileLayer from "../util/tileLayer";

const center = [53.145595259142056, 18.131736758492064];

const points = [
  { lat: 53.145793984692396, lng: 18.131805789196278, title: "Neurocentrum" },
];

const MyMarkers = ({ data }) =>
  data.map(({ lat, lng, title }, index) => (
    <Marker key={index} position={[lat, lng]}>
      <Popup>{title}</Popup>
    </Marker>
  ));

function Lokalizacja() {
  return (
    <div className="min-h-screen flex flex-col justify-center mb-[-2vw]">
      <main className="flex-1 flex justify-center">
        <div className=" mt-10">
          <MapContainer
            className="mt-20 w-[70vw] h-[30vw] z-[-1]"
            center={center}
            zoom={17}
            scrollWheelZoom={false}
          >
            <TileLayer {...tileLayer} />
            <MyMarkers data={points} />
          </MapContainer>
        </div>
      </main>
    </div>
  );
}

export default Lokalizacja;
