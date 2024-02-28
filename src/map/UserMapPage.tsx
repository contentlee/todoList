import { useEffect, useState } from "react";

import { useGetPlaces } from "@api/place";
import { ResPlace } from "@utils/types/place";

import MapHeader from "./header";
import Map from "@/common/map";
import { PageLayout } from "@components";

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
      <Map>
        <Map.Form places={places} selected={selected} selectPlace={selectPlace} refetch={refetch} />
        <Map.List places={places} selectPlace={selectPlace} />
      </Map>
    </PageLayout>
  );
};

export default UserMapPage;
