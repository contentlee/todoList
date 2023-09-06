import { useEffect } from "react";
import { useNavigate } from "react-router";

import { useRecoilState, useResetRecoilState } from "recoil";
import { calendarAtomFamily } from "@atoms/calendarAtom";
import { addTodo, listAtom } from "@atoms/todoAtom";
import FormContainer from "./FormContainer";

const AddTodoContainer = () => {
  const navigate = useNavigate();

  const [_, setStore] = useRecoilState(listAtom);
  const resetDate = useResetRecoilState(calendarAtomFamily("form"));

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const target = (idx: number) => e.currentTarget[idx] as HTMLInputElement;
    if (!target(0).value) return (target(0).placeholder = "제목이 입력되지 않았습니다!");
    const todo = {
      id: `${Math.random()}`,
      date: target(1).value,
      title: target(0).value,
      content: target(4).value,
      place: {
        marker: "A",
        name: "우리집",
        lat: 37.5115557,
        lng: 127.0595261,
      },
      category: target(3).value,
      isCompleted: false,
      isHeld: false,
      writeDate: "2022-01-03 T13:00:00",
      editDate: "2022-01-03 T13:00:00",
    };

    setStore(addTodo(todo));
    navigate("/");
  };

  const handleClickReturn = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/");
  };

  useEffect(() => {
    resetDate();
  }, []);

  return <FormContainer handleSubmit={handleSubmit} handleClickReturn={handleClickReturn}></FormContainer>;
};

export default AddTodoContainer;
