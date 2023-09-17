import { useEffect, useState } from "react";
import { useRecoilState, useResetRecoilState } from "recoil";

import ArrowIcon from "@assets/arrow_icon.svg";

import { DAY_OF_WEEK } from "@utils/constant";
import { makeDate, makeDateList, makeDay, setArrayToText, setDateProps } from "@utils/datepiacker";

import { calendarAtomFamily } from "@atoms/calendarAtom";
import { modalAtom } from "@atoms/stateAtom";

import { Icon } from "@components/common";
import {
  DateComponent,
  DayComponent,
  CalendarLayout,
  MonthComponent,
  CalendarHead,
  CalendarTitle,
  CalendarBody,
} from "@components/calendar";

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
        <>
          <CalendarHead>
            <Icon
              src={ArrowIcon}
              css={{
                transform: "rotate(180deg)",
              }}
              onClick={(e) => handleClickArrow(e, -1)}
            ></Icon>
            <CalendarTitle handleOnClick={handleClickTitle}>{setArrayToText(month)}</CalendarTitle>
            <Icon src={ArrowIcon} onClick={(e) => handleClickArrow(e, 1)}></Icon>
          </CalendarHead>
          <CalendarBody>
            {DAY_OF_WEEK.map((day) => {
              return <DayComponent key={day}>{day}</DayComponent>;
            })}

            {dateList.map((dates, i) => {
              return dates.map((date) => {
                // 현재 설정된 달 표기의 경우
                if (i === 1) {
                  const [state, type] = setDateProps([...month, date], day, [
                    selected.year,
                    selected.month,
                    selected.day,
                  ]);
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
          <CalendarHead>
            <Icon
              src={ArrowIcon}
              css={{
                transform: "rotate(180deg)",
              }}
              onClick={(e) => handleClickArrow(e, -12)}
            ></Icon>
            <CalendarTitle>{month[0]}</CalendarTitle>
            <Icon src={ArrowIcon} onClick={(e) => handleClickArrow(e, 12)}></Icon>
          </CalendarHead>

          <CalendarBody>
            {Array.from({ length: 12 }, (_, i) => i + 1).map((m, i) => {
              const state = year === month[0] && m === month[1] ? "selected" : "basic";
              return (
                <MonthComponent key={i} state={state} onClick={(e) => handleClickMonth(e, m)}>
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
