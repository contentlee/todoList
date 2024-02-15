import { MouseEvent, useState } from "react";
import { createPortal } from "react-dom";
import { useRecoilState } from "recoil";

import CalendarIcon from "@assets/calendar_icon.svg";

import { makeDate, setArrayToText } from "@utils/datepiacker";

import { modalAtom } from "@atoms/modalAtom";

import Input from "../components/Input";
import Icon from "../components/Icon";

import { Calendar } from ".";

interface Props {
  date?: number[];
}

const TODAY = makeDate(new Date());

const InputDate = ({ date = TODAY }: Props) => {
  const [selected, setSelected] = useState(date);
  const selectDate = (date: number[]) => {
    setSelected(date);
  };

  const [modal, setModal] = useRecoilState(modalAtom);
  const handleClickInput = (e: MouseEvent) => {
    e.preventDefault();
    setModal({ isOpened: true, type: "calendar" });
  };

  return (
    <Input label="날짜" value={setArrayToText(date)} readOnly handleOnClick={handleClickInput}>
      <Icon src={CalendarIcon} alt="calendar" />
      {modal.isOpened &&
        modal.type === "calendar" &&
        createPortal(<Calendar selected={selected} selectDate={selectDate} />, document.body, "calendar")}
    </Input>
  );
};

export default InputDate;
