import { Spinner } from "@nextui-org/react";
import { GoogleMap, useLoadScript } from "@react-google-maps/api";
import Loader from "./Loader";

const Map = () => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!,
  });

  // Static lat and lng
  const center = { lat: 42.35067410924562, lng: -71.1053776461294 };

  if (loadError) return <div>Error loading Google Maps</div>;
  if (!isLoaded) return <Loader className={"h-full"} />;

  return (
    <GoogleMap
      zoom={18}
      center={center}
      mapContainerClassName="map"
      mapContainerStyle={{ width: "100%", height: "75%", margin: "auto" }}
    />
  );
};

export default Map;
