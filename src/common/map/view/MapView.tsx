import Loading from "@/common/loading";
import { LoadScriptNext, GoogleMap, MarkerF } from "@react-google-maps/api";

import { Position, ResPlace } from "@utils/types/place";

interface Props {
  center: Position;
  selected?: Position;
  places?: ResPlace[];
  handleClickPosition?: (e: google.maps.MapMouseEvent) => void;
  handleClickMarker?: (e: google.maps.MapMouseEvent) => void;
}

const MapView = ({ center, selected, places, handleClickPosition = () => {}, handleClickMarker = () => {} }: Props) => {
  return (
    <LoadScriptNext
      googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}
      id="map"
      language="KO"
      region="KO"
      version="weekly"
      loadingElement={<Loading />}
      preventGoogleFontsLoading={false}
    >
      <GoogleMap
        zoom={18}
        mapContainerClassName="map-container"
        center={center}
        clickableIcons={true}
        mapContainerStyle={{ width: "100%", height: "100%" }}
        onClick={handleClickPosition}
      >
        {selected && <MarkerF position={selected}></MarkerF>}
        {center && <MarkerF position={center}></MarkerF>}

        {places?.map(({ id, lat, lng, name }) => {
          return <MarkerF key={id} title={name} position={{ lat, lng }} onClick={handleClickMarker}></MarkerF>;
        })}
      </GoogleMap>
    </LoadScriptNext>
  );
};

export default MapView;
