import { Position, ResPlace } from "@utils/types/place";

import MapForm from "./form";
import MapList from "./list";
import MapView from "./view";
import MapSetButton from "./button";
import { palette } from "@utils/palette";
import { useState } from "react";

interface FormProps {
  places: ResPlace[];
  selected?: ResPlace;
  selectPlace: (place?: ResPlace) => void;
  refetch: () => void;
}
const Form = ({ places, selected, selectPlace, refetch }: FormProps) => {
  const [center, setCenter] = useState<Position>({ lat: 0, lng: 0 });

  const selectCenter = (lat: number, lng: number) => {
    setCenter({ lat, lng });
  };
  return (
    <MapForm refetch={refetch} selectPlace={selectPlace}>
      <MapForm.Title />
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
  );
};

interface ListProps {
  places?: ResPlace[];
  selectPlace: (place?: ResPlace) => void;
}
const List = ({ places, selectPlace }: ListProps) => {
  return (
    <MapList>
      <MapList.Title />
      {!places ? (
        <MapList.Empty />
      ) : (
        places.map((place) => {
          return <MapList.Item key={place.id} place={place} selectPlace={selectPlace} />;
        })
      )}
    </MapList>
  );
};

interface ButtonProps {
  selected?: ResPlace;
  selectPlace: (place?: ResPlace) => void;
  closeModal: () => void;
}
const Button = ({ selected, selectPlace, closeModal }: ButtonProps) => {
  return (
    <MapSetButton>
      <MapSetButton.Submit selected={selected} selectPlace={selectPlace} closeModal={closeModal} />
      <MapSetButton.Cancel closeModal={closeModal} />
    </MapSetButton>
  );
};

interface Props {
  children: React.ReactNode;
}
const Map = ({ children }: Props) => {
  return (
    <div
      css={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        minWidth: "280px",
        maxWidth: "320px",
        marginTop: "8px",
        padding: "20px",
        paddingBottom: "24px",
        gap: "10px",
        border: "1px solid " + palette.gray100,
        backgroundColor: palette.white,
        WebkitScrollSnapType: "y",
      }}
    >
      {children}
    </div>
  );
};

Map.View = MapView;
Map.Form = Form;
Map.List = List;
Map.Button = Button;

export default Map;
