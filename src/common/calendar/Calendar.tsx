import { useState } from "react";
import { useResetRecoilState } from "recoil";

import { modalAtom } from "@atoms/modalAtom";

import DateCalendar from "./date";
import MonthCalendar from "./month";

interface Props {
  selected: number[];
  selectDate: (date: number[]) => void;
}

const Calendar = ({ selected, selectDate }: Props) => {
  // modal 리셋
  const resetModal = useResetRecoilState(modalAtom);

  // calendar 타입 : 일 선택, 월 선택
  const [calendarType, setCalendarType] = useState<"date" | "month">("date");
  // 선택된 연도, 달
  const [view, setView] = useState<number[]>(selected);

  const changeDate = (date: number[]) => {
    selectDate(date);
    resetModal();
  };

  const changeMonth = (value: number[]) => {
    setView(value);
  };

  const changeType = (type: "date" | "month") => {
    setCalendarType(type);
  };

  return calendarType === "date" ? (
    <DateCalendar
      view={view}
      selected={selected}
      changeMonth={changeMonth}
      changeType={changeType}
      changeDate={changeDate}
    />
  ) : (
    <MonthCalendar view={view} selected={selected} changeMonth={changeMonth} changeType={changeType} />
  );
};

export default Calendar;
