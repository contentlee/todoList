import { useNavigate } from "react-router-dom";

import FormContainer from "./FormContainer";

const EditTodoContainer = () => {
  const navigate = useNavigate();

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

    navigate("/");
  };

  const handleClickReturn = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/");
  };

  return <FormContainer handleSubmit={handleSubmit} handleClickReturn={handleClickReturn}></FormContainer>;
};

export default EditTodoContainer;
