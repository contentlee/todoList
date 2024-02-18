import { Icon, Input } from "@components";

import CalendarIcon from "@assets/calendar_icon.svg";
import { setArrayToText } from "@utils/datepiacker";
import { MouseEvent } from "react";

interface Props {
  selected: number[];
  toggleOpened: () => void;
}

const FormDateInput = ({ selected, toggleOpened }: Props) => {
  const handleClickInput = (e: MouseEvent) => {
    e.preventDefault();
    toggleOpened();
  };
  return (
    <Input label="날짜" value={setArrayToText(selected)} readOnly handleOnClick={handleClickInput}>
      <Icon src={CalendarIcon} alt="calendar" />
    </Input>
  );
};

export default FormDateInput;
