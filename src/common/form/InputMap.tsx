import { useEffect } from "react";
import { createPortal } from "react-dom";
import { useRecoilState, useResetRecoilState } from "recoil";

import NavIcon from "@assets/share_location_icon.svg";

import { placeAtomFamily } from "@atoms/mapAtom";
import { modalAtom, toggleMapAction } from "@atoms/modalAtom";

import { Icon, Input } from "@components";
import { MapModal } from "@/map";
import { Place } from "@utils/types/place";

interface Props {
  value?: Place;
}

const InputMap = ({ value }: Props) => {
  const [{ isOpened, type }, setModal] = useRecoilState(modalAtom);
  const [place, setPlace] = useRecoilState(placeAtomFamily("form"));
  const resetPlace = useResetRecoilState(placeAtomFamily("form"));

  const handleToggleMap = (e: React.MouseEvent) => {
    e.preventDefault();
    setModal(toggleMapAction);
  };

  const setSelectPlace = (place: Place) => {
    setPlace(place);
  };

  useEffect(() => {
    if (value) setPlace(value);
    else resetPlace();
  }, []);

  return (
    <Input data-id="place-name" value={place.name} label="장소" readOnly handleOnClick={handleToggleMap}>
      <input data-id="place-lat" css={{ display: "none" }} value={place.lat} />
      <input data-id="place-lng" css={{ display: "none" }} value={place.lng} />
      <Icon src={NavIcon} alt="nav" />

      {isOpened &&
        type === "map" &&
        createPortal(<MapModal id="form" place={place} setSelectPlace={setSelectPlace} />, document.body, "map-form")}
    </Input>
  );
};

export default InputMap;
