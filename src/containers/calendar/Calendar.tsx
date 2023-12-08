import { useEffect, useState } from "react";
import { useRecoilState, useResetRecoilState } from "recoil";

import { makeDate } from "@utils/datepiacker";

import { calendarAtomFamily } from "@atoms/calendarAtom";
import { modalAtom } from "@atoms/stateAtom";

import { CalendarLayout } from "@components/calendar";

import MonthCalendar from "./MonthCalendar";
import DateCalendar from "./DateCalendar";

interface Props {
  id: string;
}

const Calendar = ({ id }: Props) => {
  // 표기되는 값의 타입
  const [calendarType, setCalendarType] = useState<"Date" | "Month">();

  // 선택된 날짜
  const [selected, setSelected] = useRecoilState(calendarAtomFamily(id));
  const resetModal = useResetRecoilState(modalAtom);

  // 선택된 연도, 달
  const [year, setYear] = useState<number>(selected.year);
  const [month, setMonth] = useState<number[]>([selected.year, selected.month]);

  const handleClickTitle = (e: React.MouseEvent) => {
    e.preventDefault();
    setCalendarType("Month");
  };

  const handleClickArrow = (e: React.MouseEvent, v: number) => {
    e.preventDefault();
    const [y, m] = makeDate(new Date(month[0], month[1] + v - 1, 1));
    if (year !== y) {
      setYear(y);
    }
    setMonth([y, m]);
  };

  const handleClickMonth = (e: React.MouseEvent, selectedMonth: number) => {
    e.preventDefault();
    setYear(month[0]);
    setMonth([month[0], selectedMonth]);
    setCalendarType("Date");
  };

  const handleClickDate = (e: React.MouseEvent, v: number) => {
    e.preventDefault();

    resetModal();
    setSelected({ year: month[0], month: month[1], day: v });
  };

  useEffect(() => {
    setCalendarType("Date");
  }, []);

  return (
    <CalendarLayout>
      {calendarType === "Date" && (
        <DateCalendar
          selected={selected}
          month={month}
          handleClickTitle={handleClickTitle}
          handleClickArrow={handleClickArrow}
          handleClickDate={handleClickDate}
        />
      )}

      {calendarType === "Month" && (
        <MonthCalendar
          year={year}
          month={month}
          handleClickArrow={handleClickArrow}
          handleClickMonth={handleClickMonth}
        />
      )}
    </CalendarLayout>
  );
};

export default Calendar;
