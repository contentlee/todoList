import { FormEvent } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { useNavigate } from "react-router";

import { useCreateTodo } from "@api/todo";

import { placeAtomFamily } from "@atoms/mapAtom";
import { alertAtom } from "@atoms/alertAtom";

import Form from "@/common/form";

const AddTodoBody = () => {
  const navigate = useNavigate();

  // for submit
  const { mutate } = useCreateTodo(() => navigate("/"));
  const [__, setAlert] = useRecoilState(alertAtom);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const target = (idx: number) => e.currentTarget[idx] as HTMLInputElement;
    if (!target(0).value) return setAlert({ isOpened: true, type: "warning", children: "제목이 입력되지 않았습니다." });

    const { name, lat, lng } = useRecoilValue(placeAtomFamily("form"));

    const todo = {
      date: target(1).value,
      title: target(0).value,
      content: target(4).value,
      place: {
        marker: "A",
        name,
        lat,
        lng,
      },
      category: target(3).value,
      is_completed: false,
      is_held: false,
    };

    mutate(todo);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Title />
      <Form.Date />
      {/* <Form.Map />
      <Form.Category />
      <Form.ButtonLayout>
        <Form.Reset />
        <Form.Submit />
      </Form.ButtonLayout> */}
    </Form>
  );
};

export default AddTodoBody;
