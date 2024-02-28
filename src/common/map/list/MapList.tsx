import { MouseEvent, ReactNode } from "react";

import MapListEmpty from "./empty";
import MapListItem from "./item";
import { Place } from "../type";
import MapListTitle from "./title";

const Empty = () => {
  return <MapListEmpty />;
};

interface ItemProps {
  place: Place;
  selectPlace: (place: Place) => void;
}

const Item = ({ place, selectPlace }: ItemProps) => {
  const handleClickItem = (e: MouseEvent) => {
    e.preventDefault();
    selectPlace(place);
  };
  return (
    <MapListItem>
      <MapListItem.Title name={place.name} handleClickItem={handleClickItem} />
      <MapListItem.Delete id={place.id} />
    </MapListItem>
  );
};

interface Props {
  children: ReactNode;
}

const MapList = ({ children }: Props) => {
  return (
    <div
      css={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        marginTop: "8px",
        paddingBottom: "24px",
        gap: "10px",
        WebkitScrollSnapType: "y",
      }}
    >
      {children}
    </div>
  );
};

MapList.Title = MapListTitle;
MapList.Item = Item;
MapList.Empty = Empty;

export default MapList;
