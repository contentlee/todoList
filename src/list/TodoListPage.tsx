import { useState } from "react";
import { useNavigate, useParams } from "react-router";

import DatePicker from "@/common/datepicker";

import ListTab from "./tab";
import ListBody from "./body";

import { TodoState } from "@utils/types/todo";
import { setArrayToPath, setPathToArray } from "@utils/datepiacker";
import { PageLayout } from "@components";

const TodoListPage = () => {
  const navigate = useNavigate();
  const { date } = useParams();

  const handleClickDate = (date: number[]) => {
    navigate(`/${setArrayToPath(date)}`);
  };

  const [selectedType, setSelectedType] = useState<TodoState>("todo");
  const handleClickType = (type: TodoState) => {
    setSelectedType(type);
  };

  return (
    <PageLayout css={{ gap: "10px" }}>
      <DatePicker selectedDate={setPathToArray(date!)} handleClickDate={handleClickDate} />
      <ListTab selectedType={selectedType} handleClickType={handleClickType} />
      <ListBody selectedDate={date!} selectedType={selectedType} />
    </PageLayout>
  );
};

export default TodoListPage;
