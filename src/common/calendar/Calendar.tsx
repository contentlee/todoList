import { useState } from "react";
import { createPortal } from "react-dom";

import DateCalendar from "./date";
import MonthCalendar from "./month";
import { CalendarLayout } from "./layout";

interface Props {
  selected: number[];
  selectDate: (date: number[]) => void;
  toggleOpened: () => void;
}

const Calendar = ({ selected, selectDate, toggleOpened }: Props) => {
  // calendar 타입 : 일 선택, 월 선택
  const [calendarType, setCalendarType] = useState<"date" | "month">("date");
  // 선택된 연도, 달
  const [view, setView] = useState<number[]>(selected);

  const changeDate = (date: number[]) => {
    selectDate(date);
  };

  const changeMonth = (value: number[]) => {
    setView(value);
  };

  const changeType = (type: "date" | "month") => {
    setCalendarType(type);
  };

  return createPortal(
    <CalendarLayout toggleOpened={toggleOpened}>
      {calendarType === "date" ? (
        <DateCalendar
          view={view}
          selected={selected}
          changeDate={changeDate}
          changeMonth={changeMonth}
          changeType={changeType}
        />
      ) : (
        <MonthCalendar view={view} selected={selected} changeMonth={changeMonth} changeType={changeType} />
      )}
    </CalendarLayout>,
    document.body,
    "calendar"
  );
};

export default Calendar;
