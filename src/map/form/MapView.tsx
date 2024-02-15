import { useEffect, useState } from "react";
import { Map } from "@components";

import { Place, Position } from "@utils/types/place";

interface Props {
  places: Place[];
  selected?: Place;
  selectPlace: (place: Place) => void;
}

const MapView = ({ places, selected, selectPlace }: Props) => {
  const [center, setCenter] = useState<Position>({ lat: 0, lng: 0 });

  const handleClickPosition = (e: google.maps.MapMouseEvent) => {
    const position = e.latLng;
    if (position) setCenter({ lat: position.lat(), lng: position.lng() });
  };

  const handleClickMarker = (e: google.maps.MapMouseEvent) => {
    const position = e.latLng;
    if (position) {
      const lat = position.lat();
      const lng = position.lng();
      const idx = places.findIndex((place) => {
        return place.lat === lat && place.lng === lng;
      });
      selectPlace(places[idx]);
    }
  };

  useEffect(() => {
    if (!selected) {
      window.navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => {
        setCenter({ lat: latitude, lng: longitude });
      });
    } else {
      setCenter({ lat: selected.lat, lng: selected.lng });
    }
  }, [selected]);

  return (
    <div
      css={{
        width: "100%",
        height: "320px",
      }}
    >
      <input name="lat" value={center.lat} css={{ display: "none" }} />
      <input name="lng" value={center.lng} css={{ display: "none" }} />
      <Map
        center={center}
        places={places}
        selected={selected}
        handleClickPosition={handleClickPosition}
        handleClickMarker={handleClickMarker}
      />
    </div>
  );
};

export default MapView;
