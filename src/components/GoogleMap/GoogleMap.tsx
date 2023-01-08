import { Status, Wrapper } from "@googlemaps/react-wrapper";
import Map from "../Map";

const render = (status: Status) => {
  if (status === Status.FAILURE) {
    return <p>failed</p>;
  }
  return <p>loading...</p>;
};

interface GoogleMapProps {
  center: google.maps.LatLngLiteral;
  zoom: number;
  apiKey: string;
}

export default function GoogleMap({
  apiKey,
  zoom,
  center,
}: GoogleMapProps) {
  return (
    <div className="h-full w-full">
      <Wrapper apiKey={apiKey} render={render}>
        <Map
          className="grow h-full"
          center={center}
          zoom={zoom}
          minZoom={2}
          maxZoom={18}
          fullscreenControl={false}
          streetViewControl={false}
          mapTypeControl={false}
          zoomControl={false}
          clickableIcons={false}
        />
      </Wrapper>
    </div>
  );
}
