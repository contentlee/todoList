import { useState } from "react";
import { DateInputComponent } from "../components";
import Calendar from "./Calendar";
import { makeDate } from "../utils/datepiacker";

interface Props {
  date?: number[];
}

const now = makeDate(new Date());

const DatePicker = ({ date = now }: Props) => {
  const [toggle, setToggle] = useState(false);

  const handleClickInput = (e: React.MouseEvent) => {
    setToggle(!toggle);
  };

  const handleClickDate = (date: number[]) => {
    setToggle(!toggle);
  };

  return (
    <div
      css={{
        zIndex: "10",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <DateInputComponent date={date} onClick={handleClickInput}></DateInputComponent>
      {toggle && <Calendar date={date} onChangeDate={handleClickDate}></Calendar>}
    </div>
  );
};

export default DatePicker;
