import { useState } from "react";

import DatePickerLayout from "./layout";
import DatePickerInput from "./input";
import Calendar from "../calendar";
import Modal from "../components/Modal";

interface Props {
  selectedDate: number[];
  handleClickDate: (date: number[]) => void;
}

const DatePicker = ({ selectedDate, handleClickDate }: Props) => {
  const [isOpened, setOpened] = useState(false);
  const toggleOpened = () => {
    setOpened((b) => !b);
  };

  const selectDate = (date: number[]) => {
    handleClickDate(date);
    setOpened((b) => !b);
  };

  return (
    <DatePickerLayout>
      <DatePickerInput date={selectedDate} size="small" toggleOpened={toggleOpened} />
      <Modal id="calendar" isOpened={isOpened} closeModal={toggleOpened}>
        <Calendar selected={selectedDate} selectDate={selectDate} toggleOpened={toggleOpened} />
      </Modal>
    </DatePickerLayout>
  );
};

export default DatePicker;
