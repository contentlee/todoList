import { useEffect } from "react";
import { useNavigate } from "react-router";
import { useMutation } from "react-query";
import { useRecoilState, useRecoilValue } from "recoil";
import { produce } from "immer";

import { createTodo } from "@api/todo";

import { calendarAtomFamily, setCalendarAction } from "@atoms/calendarAtom";
import { alertAtom } from "@atoms/stateAtom";
import { placeAtomFamily } from "@atoms/mapAtom";

import FormContainer from "./FormContainer";

const AddTodoContainer = () => {
  const navigate = useNavigate();

  // 현재 보여지는 폼 형식에 할당된 날짜
  const [_, setDate] = useRecoilState(calendarAtomFamily("form"));
  const ListDate = useRecoilValue(calendarAtomFamily("todoList"));

  const { name, lat, lng } = useRecoilValue(placeAtomFamily("form"));

  const [__, setAlert] = useRecoilState(alertAtom);

  const { mutate } = useMutation(createTodo);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const target = (idx: number) => e.currentTarget[idx] as HTMLInputElement;
    if (!target(0).value) return setAlert({ isOpened: true, type: "warning", children: "제목이 입력되지 않았습니다." });
    const todo = {
      date: target(1).value,
      title: target(0).value,
      content: target(5).value,
      place: {
        marker: "A",
        name,
        lat,
        lng,
      },
      category: target(4).value,
      is_completed: false,
      is_held: false,
    };

    mutate(todo, {
      onSuccess: () => {
        navigate("/");
        setAlert({ isOpened: true, type: "success", children: "데이터 생성에 성공하였습니다." });
      },
      onError: () => {
        setAlert({ isOpened: true, type: "error", children: "데이터 생성에 실패하였습니다." });
      },
    });
  };

  useEffect(() => {
    setDate(setCalendarAction(ListDate));
  }, []);

  return <FormContainer handleSubmit={handleSubmit}></FormContainer>;
};

export default AddTodoContainer;
