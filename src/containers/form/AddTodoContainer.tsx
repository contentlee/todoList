import { useEffect } from "react";
import { useNavigate } from "react-router";
import { useMutation } from "react-query";
import { useRecoilState, useRecoilValue, useResetRecoilState } from "recoil";

import { createTodo } from "@api/todo";

import { calendarAtomFamily } from "@atoms/calendarAtom";

import FormContainer from "./FormContainer";
import { produce } from "immer";

const AddTodoContainer = () => {
  const navigate = useNavigate();

  // 현재 보여지는 폼 형식에 할당된 날짜
  const [_, setDate] = useRecoilState(calendarAtomFamily("form"));
  const { year: iYear, month: iMonth, day: iDay } = useRecoilValue(calendarAtomFamily("todoList"));

  const { mutate } = useMutation(createTodo);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const target = (idx: number) => e.currentTarget[idx] as HTMLInputElement;
    if (!target(0).value) return (target(0).placeholder = "제목이 입력되지 않았습니다!");
    const todo = {
      date: target(2).value,
      title: target(0).value,
      content: target(5).value,
      place: {
        marker: "A",
        name: "우리집",
        lat: 37.5115557,
        lng: 127.0595261,
      },
      category: target(4).value,
      is_completed: false,
      is_held: false,
    };

    mutate(todo, {
      onSuccess: () => {
        navigate("/");
      },
      onError: () => {},
    });
  };

  const handleClickReturn = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/");
  };

  useEffect(() => {
    setDate((prev) =>
      produce(prev, (draft) => {
        draft.year = iYear;
        draft.month = iMonth;
        draft.day = iDay;
        return draft;
      })
    );
  }, []);

  return <FormContainer handleSubmit={handleSubmit} handleClickReturn={handleClickReturn}></FormContainer>;
};

export default AddTodoContainer;
