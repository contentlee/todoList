import { useEffect, useState } from "react";

import { useGetPlaces } from "@api/place";
import { ResPlace } from "@utils/types/place";

import NavIcon from "@assets/share_location_icon.svg";

import { Icon, Input, Modal } from "@components";
import Map from "../map";

interface Props {
  value?: ResPlace;
}

const InputMap = ({ value }: Props) => {
  const { data, refetch } = useGetPlaces();

  const [isOpened, setOpened] = useState(false);

  const [places, setPlaces] = useState<ResPlace[]>([]);
  const [selected, setSelected] = useState<ResPlace | undefined>();

  const toggleOpened = () => {
    setOpened((b) => !b);
  };

  const selectPlace = (place?: ResPlace) => {
    setSelected(place);
  };

  useEffect(() => {
    if (data) setPlaces(data?.places);
    if (value) setSelected(value);
  }, []);

  return (
    <div>
      <Input data-id="place-name" value={selected?.name} label="장소" readOnly handleOnClick={toggleOpened}>
        <input data-id="place-lat" css={{ display: "none" }} value={selected?.lat} />
        <input data-id="place-lng" css={{ display: "none" }} value={selected?.lng} />
        <Icon src={NavIcon} alt="nav" />
      </Input>
      <Modal isOpened={isOpened} closeModal={toggleOpened}>
        <Map>
          <Map.Form places={places} selected={selected} selectPlace={selectPlace} refetch={refetch} />
          <Map.Button selected={selected} selectPlace={selectPlace} closeModal={toggleOpened} />
        </Map>
      </Modal>
    </div>
  );
};

export default InputMap;
