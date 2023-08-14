import { useEffect, useState } from "react";

import {
  DateComponent,
  DayComponent,
  CalendarLayout,
  MonthComponent,
  CalendarHead,
  CalendarTitle,
  CalendarBody,
} from "../components";

import { makeDate, makeDateList, makeDay, setDateToString, setDateProps } from "../utils/datepiacker";

const day_of_week = ["일", "월", "화", "수", "목", "금", "토"];

interface Props {
  date: number[];
  onChangeMonth?: (date: number[]) => void;
  onChangeDate?: (date: number[]) => void;
}

const Calendar = ({ date, onChangeMonth = () => {}, onChangeDate = () => {} }: Props) => {
  const [calendarType, setCalendarType] = useState("Date");

  const [year, setYear] = useState<number>(date[0]);
  const [month, setMonth] = useState<number[]>([date[0], date[1]]);
  const [selected, setSelected] = useState<number[]>(date);

  // 캘린더를 통해 표기될 날짜들 리스트
  const dateList = makeDateList(month);
  // 현재 표시되는 달, 첫날의 요일
  const day = makeDay([...month, 1]);

  const handleClickTitle = (e: React.MouseEvent) => {
    e.preventDefault();
    setCalendarType("Month");
  };

  const handleClickArrow = (e: React.MouseEvent, v: number) => {
    e.preventDefault();

    const [y, m] = makeDate(new Date(month[0], month[1] + v - 1, 1));

    onChangeMonth([y, m]);

    setMonth([y, m]);
  };

  const handleClickDate = (e: React.MouseEvent, v: number) => {
    e.preventDefault();

    onChangeDate([...month, v]);

    setSelected([...month, v]);
  };

  const handleClickMonth = (e: React.MouseEvent, changedMonth: number) => {
    e.preventDefault();
    setYear(month[0]);
    setMonth([month[0], changedMonth]);
    setCalendarType("Date");
  };

  useEffect(() => {
    setCalendarType("Date");
  }, []);

  return (
    <CalendarLayout>
      {calendarType === "Date" && (
        <>
          <CalendarHead
            handleClickArrowL={(e) => handleClickArrow(e, -1)}
            handleClickArrowR={(e) => handleClickArrow(e, 1)}
          >
            <CalendarTitle handleOnClick={handleClickTitle}>{setDateToString(month)}</CalendarTitle>
          </CalendarHead>
          <CalendarBody>
            {day_of_week.map((day) => {
              return <DayComponent>{day}</DayComponent>;
            })}

            {dateList.map((dates, i) => {
              return dates.map((date) => {
                // 현재 설정된 달 표기의 경우
                if (i === 1) {
                  const [state, type] = setDateProps([...month, date], day, selected);
                  return (
                    <DateComponent
                      key={`${month[1]}${date}`}
                      state={state}
                      type={type}
                      onClick={(e) => handleClickDate(e, date)}
                    >
                      {date}
                    </DateComponent>
                  );
                }

                // 이전달 혹은 다음달 표기의 경우
                return (
                  <DateComponent key={date} type="etc">
                    {date}
                  </DateComponent>
                );
              });
            })}
          </CalendarBody>
        </>
      )}
      {calendarType === "Month" && (
        <>
          <CalendarHead
            handleClickArrowL={(e) => handleClickArrow(e, -12)}
            handleClickArrowR={(e) => handleClickArrow(e, 12)}
          >
            <CalendarTitle>{month[0]}</CalendarTitle>
          </CalendarHead>

          <CalendarBody>
            {Array.from({ length: 12 }, (_, i) => i + 1).map((m) => {
              const state = year === month[0] && m === month[1] ? "selected" : "basic";
              return (
                <MonthComponent state={state} onClick={(e) => handleClickMonth(e, m)}>
                  {m}월
                </MonthComponent>
              );
            })}
          </CalendarBody>
        </>
      )}
    </CalendarLayout>
  );
};

export default Calendar;
