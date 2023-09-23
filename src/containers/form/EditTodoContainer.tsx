import { useNavigate, useParams } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";

import { useEditTodo, useGetTodo } from "@api/todo";

import { alertAtom } from "@atoms/stateAtom";
import { placeAtomFamily } from "@atoms/mapAtom";

import { setDateToText } from "@utils/datepiacker";
import { compareObjects } from "@utils/comparison";

import FormContainer from "./FormContainer";
import { ErrorContainer } from "@containers/common";

const EditTodoContainer = () => {
  const navigate = useNavigate();
  const { date, id } = useParams();

  const [__, setAlert] = useRecoilState(alertAtom);

  const { name, lat, lng } = useRecoilValue(placeAtomFamily("form"));

  const { data, isError, isSuccess, refetch } = useGetTodo(date!, id!);

  const { mutate } = useEditTodo(() => navigate("/"));

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const target = (idx: number) => e.currentTarget[idx] as HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;

    if (!target(0).value) return setAlert({ isOpened: true, type: "warning", children: "제목이 입력되지 않았습니다." });

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
    const obj2 = {
      ...data,
    };
    obj2["date"] = setDateToText((obj2 as any)["date"]);

    const [_, req] = compareObjects(obj1, obj2);

    if (Object.keys(req).length !== 0) {
      mutate({ id: id!, todo: req });
    } else {
      navigate("/");
    }
  };

  if (isError) return <ErrorContainer refetch={refetch}></ErrorContainer>;
  if (isSuccess) return <FormContainer todo={data} handleSubmit={handleSubmit}></FormContainer>;
};

export default EditTodoContainer;
