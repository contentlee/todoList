import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { useRecoilState, useRecoilValue } from "recoil";

import { useEditTodo, useGetTodo } from "@api/todo";

import { placeAtomFamily } from "@atoms/mapAtom";
import { alertAtom } from "@atoms/alertAtom";

import { compareObjects } from "@utils/comparison";
import { setDateToText } from "@utils/datepiacker";

import { ResTodo } from "@utils/types/todo";

import Form from "@/common/form";

const EditTodoBody = () => {
  const navigate = useNavigate();

  const { date, id } = useParams();
  const [_, setAlert] = useRecoilState(alertAtom);

  const { data } = useGetTodo(date!, id!);
  const [todo, setTodo] = useState<ResTodo>();

  const { mutate } = useEditTodo(() => navigate("/"));

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const target = (idx: number) => e.currentTarget[idx] as HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;
    if (!target(0).value) return setAlert({ isOpened: true, type: "warning", children: "제목이 입력되지 않았습니다." });

    const { name, lat, lng } = useRecoilValue(placeAtomFamily("form"));

    const obj1 = {
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
    };
    const obj2 = todo!;
    obj2["date"] = setDateToText(obj2["date"]);

    const [_, req] = compareObjects(obj1, obj2);

    if (Object.keys(req).length !== 0) {
      mutate({ id: id!, todo: req });
    } else {
      navigate("/");
    }
  };

  useEffect(() => {
    if (data) setTodo(data);
  }, []);

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Title title={todo?.title} />
      <Form.Date value={todo?.date} />
      <Form.Map value={todo?.place} />
      <Form.Category value={todo?.category} />
      <Form.ButtonLayout>
        <Form.Reset />
        <Form.Submit />
      </Form.ButtonLayout>
    </Form>
  );
};

export default EditTodoBody;
