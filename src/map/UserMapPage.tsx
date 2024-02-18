import { useEffect, useState } from "react";

import { useGetPlaces } from "@api/place";

import { PageLayout } from "@components";

import MapHeader from "./header";
import MapBody from "./body";
import MapList from "./list";
import MapForm from "./form";

import { Place, ResPlace } from "@utils/types/place";

const UserMapPage = () => {
  const { data, refetch } = useGetPlaces();

  const [places, setPlaces] = useState<ResPlace[]>([]);
  const [selected, setSelected] = useState<ResPlace | undefined>();

  const selectPlace = (place?: ResPlace) => {
    setSelected(place);
  };

  useEffect(() => {
    if (data) setPlaces(data?.places);
  }, []);

  return (
    <PageLayout css={{ gap: "10px" }}>
      <MapHeader>
        <MapHeader.Title />
        <MapHeader.Return />
      </MapHeader>
      <MapBody>
        <MapForm refetch={refetch} selectPlace={selectPlace}>
          <MapForm.Title />
          <MapForm.View places={places} selected={selected} selectPlace={selectPlace} />
          <MapForm.Name name={selected?.name} />
          <MapForm.Select places={places} selectPlace={selectPlace} />
          <MapForm.Register />
          <MapForm.Reset />
        </MapForm>
        <MapList>
          <MapList.Title />
          {!places && <MapList.Empty />}
          {places.map((place) => {
            return <MapList.Item key={place.id} place={place} selectPlace={selectPlace} />;
          })}
        </MapList>
      </MapBody>
    </PageLayout>
  );
};

export default UserMapPage;
