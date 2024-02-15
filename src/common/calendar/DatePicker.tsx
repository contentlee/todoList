import { useState } from "react";
import { createPortal } from "react-dom";
import { useRecoilState } from "recoil";

import { modalAtom } from "@atoms/modalAtom";

import { makeDate } from "@utils/datepiacker";

import { Calendar } from ".";
import { DateInputComponent } from "./common";
import { DatePickerLayout } from "./layout";

interface Props {
  date?: number[];
}

const TODAY = makeDate(new Date());

const DatePicker = ({ date = TODAY }: Props) => {
  const [selected, setSelected] = useState(date);
  const selectDate = (date: number[]) => {
    setSelected(date);
  };

  const [{ isOpened, type }, setModal] = useRecoilState(modalAtom);
  const handleClickInput = (e: React.MouseEvent) => {
    e.preventDefault();
    setModal({ isOpened: true, type: "calendar" });
  };

  return (
    <DatePickerLayout>
      <DateInputComponent date={selected} size="small" onClick={handleClickInput} />
      {isOpened &&
        type === "calendar" &&
        createPortal(<Calendar selected={selected} selectDate={selectDate} />, document.body)}
    </DatePickerLayout>
  );
};

export default DatePicker;
