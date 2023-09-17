import { useNavigate, useParams } from "react-router-dom";
import { useMutation, useQuery } from "react-query";
import { useRecoilState, useRecoilValue } from "recoil";

import { editTodo, getTodo } from "@api/todo";

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

  const { data, isError, isSuccess, refetch } = useQuery(["todo", "getItem"], () => getTodo(date!, id!));

  const { mutate } = useMutation(editTodo);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const target = (idx: number) => e.currentTarget[idx] as HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;

    if (!target(0).value) return setAlert({ isOpened: true, type: "warning", children: "제목이 입력되지 않았습니다." });

    const obj1 = {
      date: target(2).value,
      title: target(0).value,
      content: target(5).value,
      place: {
        marker: "A",
        name,
        lat,
        lng,
      },
      category: target(4).value,
    };
    const obj2 = {
      ...data,
    };
    obj2["date"] = setDateToText((obj2 as any)["date"]);

    const [_, req] = compareObjects(obj1, obj2);

    if (Object.keys(req).length !== 0) {
      mutate(
        { id: id!, todo: req },
        {
          onSuccess: () => {
            navigate("/");
            setAlert({ isOpened: true, type: "success", children: "데이터 수정에 성공하였습니다." });
          },
          onError: () => {
            setAlert({ isOpened: true, type: "error", children: "데이터 수정에 실패하였습니다." });
          },
        }
      );
    } else {
      navigate("/");
    }
  };

  if (isError) return <ErrorContainer refetch={refetch}></ErrorContainer>;
  if (isSuccess) return <FormContainer todo={data} handleSubmit={handleSubmit}></FormContainer>;
};

export default EditTodoContainer;
