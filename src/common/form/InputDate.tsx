import { useState } from "react";

import CalendarIcon from "@assets/calendar_icon.svg";

import Calendar from "../calendar";
import { Icon, Input, Modal } from "@components";

import { makeDate, setArrayToText } from "@utils/datepiacker";

interface Props {
  value?: number[];
}

const TODAY = makeDate(new Date());

const InputDate = ({ value = TODAY }: Props) => {
  const [isOpened, setOpened] = useState<boolean>(false);
  const toggleOpened = () => {
    setOpened(!isOpened);
  };

  const [selected, setSelected] = useState(value);
  const selectDate = (date: number[]) => {
    setSelected(date);
    setOpened(false);
  };

  return (
    <div>
      <Input label="날짜" value={setArrayToText(selected)} readOnly handleOnClick={() => toggleOpened()}>
        <Icon src={CalendarIcon} alt="calendar" />
      </Input>
      <Modal isOpened={isOpened} closeModal={toggleOpened}>
        <Calendar selected={selected} selectDate={selectDate} toggleOpened={toggleOpened} />
      </Modal>
    </div>
  );
};

export default InputDate;
