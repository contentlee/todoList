import { HTMLAttributes } from "react";
import { createPortal } from "react-dom";
import { useRecoilState, useRecoilValue } from "recoil";

import { DateInputComponent } from "@components/calendar";
import { calendarAtomFamily } from "@atoms/calendarAtom";
import { Calendar } from ".";
import { modalAtom } from "@atoms/stateAtom";

interface Props extends HTMLAttributes<HTMLDivElement> {
  id: string;
  pickerSize?: "small" | "regular" | "large";
}

// Calendar 생성에만 관여하고, 내부의 값을 조정하지 않음
const DatePicker = ({ id, pickerSize = "small" }: Props) => {
  const { year, month, day } = useRecoilValue(calendarAtomFamily(id));
  const [{ isOpened, type }, setModal] = useRecoilState(modalAtom);

  const handleClickInput = (e: React.MouseEvent) => {
    e.preventDefault();
    setModal({ isOpened: true, type: "calendar" });
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
      <DateInputComponent date={[year, month, day]} size={pickerSize} onClick={handleClickInput}></DateInputComponent>
      {isOpened && type === "calendar" && createPortal(<Calendar id={id}></Calendar>, document.body)}
    </div>
  );
};

export default DatePicker;
