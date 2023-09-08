import { useState, HTMLAttributes } from "react";
import { createPortal } from "react-dom";
import { useRecoilValue } from "recoil";

import { DateInputComponent } from "@components/calendar";
import { calendarAtomFamily } from "@atoms/calendarAtom";
import { Calendar } from ".";
import { Back } from "@components/common";

interface Props extends HTMLAttributes<HTMLDivElement> {
  id: string;
  pickerSize?: "small" | "regular" | "large";
  calendarSize?: "small" | "regular" | "large";
}

// Calendar 생성에만 관여하고, 내부의 값을 조정하지 않음
const DatePicker = ({ id, pickerSize = "small", calendarSize = "regular", ...props }: Props) => {
  const { year, month, day } = useRecoilValue(calendarAtomFamily(id));
  const [isOpened, setOpened] = useState(false);

  const handleClickInput = (e: React.MouseEvent) => {
    setOpened(!isOpened);
  };

  const handleCloseCalendar = () => {
    setOpened(!isOpened);
  };

  return (
    <div
      css={{
        zIndex: "10",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
      }}
    >
      <DateInputComponent
        date={[year, month, day]}
        size={pickerSize}
        onClick={handleClickInput}
        {...props}
      ></DateInputComponent>
      {isOpened && <Calendar id={id} size={calendarSize} onCloseCalendar={handleCloseCalendar}></Calendar>}
      {isOpened && createPortal(<Back onClick={handleCloseCalendar}></Back>, document.body)}
    </div>
  );
};

export default DatePicker;
