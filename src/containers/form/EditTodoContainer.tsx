import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useRecoilState } from "recoil";
import { useMutation, useQuery } from "react-query";
import { produce } from "immer";

import { editTodo, getTodo } from "@api/todo";

import { calendarAtomFamily } from "@atoms/calendarAtom";

import { setDateToText, setPathToArray } from "@utils/datepiacker";
import { compareObjects } from "@utils/comparison";

import FormContainer from "./FormContainer";
import { ErrorContainer } from "@containers/common";

const EditTodoContainer = () => {
  const navigate = useNavigate();
  const { date, id } = useParams();

  const [_, setDate] = useRecoilState(calendarAtomFamily("form"));
  const { data, isError, isSuccess, refetch } = useQuery(["todo", "getItem"], () => getTodo(date!, id!));

  const { mutate } = useMutation(editTodo);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const target = (idx: number) => e.currentTarget[idx] as HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;

    if (!target(0).value) return ((target(0) as HTMLInputElement).placeholder = "제목이 입력되지 않았습니다!");

    const obj1 = {
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
          },
        }
      );
    } else {
      navigate("/");
    }
  };

  const handleClickReturn = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/");
  };

  useEffect(() => {
    setDate((prev) =>
      produce(prev, (draft) => {
        const [y, m, d] = setPathToArray(date!);
        draft.year = y;
        draft.month = m;
        draft.day = d;

        return draft;
      })
    );
  }, []);

  if (isError) return <ErrorContainer refetch={refetch}></ErrorContainer>;
  if (isSuccess)
    return (
      <FormContainer todo={data} handleSubmit={handleSubmit} handleClickReturn={handleClickReturn}></FormContainer>
    );
};

export default EditTodoContainer;
