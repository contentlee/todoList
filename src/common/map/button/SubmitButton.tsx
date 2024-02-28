import { MouseEvent } from "react";

import { ResPlace } from "@utils/types/place";

import { Button } from "@components";

interface Props {
  selected?: ResPlace;
  selectPlace: (place?: ResPlace) => void;
  closeModal: () => void;
}
const SubmitButton = ({ selected, selectPlace, closeModal }: Props) => {
  const handleClickSetMap = (e: MouseEvent) => {
    e.preventDefault();
    if (selected) selectPlace(selected);
    closeModal;
  };
  return <Button onClick={handleClickSetMap}>확인</Button>;
};

export default SubmitButton;
