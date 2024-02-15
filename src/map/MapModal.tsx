import { useEffect, useState } from "react";

import { useGetPlaces } from "@api/place";

import MapForm from "./form";
import MapBody from "./body";
import { Place } from "@utils/types/place";

interface Props {
  id: string;
  place?: Place;
  setSelectPlace: (place: Place) => void;
}

const MapModal = ({ id, place, setSelectPlace }: Props) => {
  const { data, refetch } = useGetPlaces();
  const [places, setPlaces] = useState<Place[]>([]);
  const [selected, setSelected] = useState<Place | undefined>();

  const selectPlace = (place?: Place) => {
    setSelected(place);
  };

  useEffect(() => {
    if (data) setPlaces(data?.places);
    if (place) setSelected(place);
  }, []);

  return (
    <MapBody>
      <MapForm refetch={refetch} selectPlace={selectPlace}>
        <MapForm.View places={places} selected={selected} selectPlace={selectPlace} />
        <MapForm.Name name={selected?.name} />
        <MapForm.Select places={places} selectPlace={selectPlace} />

        <div
          style={{
            display: "flex",
            width: "100%",
          }}
        >
          <MapForm.Register />
          <MapForm.Reset />
        </div>
      </MapForm>
      <MapBody.ButtonLayout>
        <MapBody.SetMap selected={selected} setSelectPlace={setSelectPlace} />
        <MapBody.Cancel />
      </MapBody.ButtonLayout>
    </MapBody>
  );
};

export default MapModal;
