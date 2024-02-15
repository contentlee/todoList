import { MouseEvent } from "react";
import { useResetRecoilState } from "recoil";

import { modalAtom } from "@atoms/modalAtom";

import { Place } from "@utils/types/place";

import { Button } from "@components";

interface Props {
  selected?: Place;
  setSelectPlace: (place: Place) => void;
}
const SetMapButton = ({ selected, setSelectPlace }: Props) => {
  const resetModal = useResetRecoilState(modalAtom);

  const handleClickSetMap = (e: MouseEvent) => {
    e.preventDefault();
    if (selected) setSelectPlace(selected);
    resetModal();
  };
  return <Button onClick={handleClickSetMap}>확인</Button>;
};

export default SetMapButton;
