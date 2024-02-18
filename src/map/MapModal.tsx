import { useEffect, useState } from "react";

import { useGetPlaces } from "@api/place";

import MapForm from "./form";
import MapBody from "./body";
import { Place, ResPlace } from "@utils/types/place";

interface Props {
  id: string;
  place?: ResPlace;
  setSelectPlace: (place?: ResPlace) => void;
}

const MapModal = ({ place, setSelectPlace }: Props) => {
  const { data, refetch } = useGetPlaces();
  const [places, setPlaces] = useState<ResPlace[]>([]);
  const [selected, setSelected] = useState<ResPlace | undefined>();

  const selectPlace = (place?: ResPlace) => {
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
