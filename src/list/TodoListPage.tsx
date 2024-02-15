import { useEffect } from "react";
import { useRecoilValue } from "recoil";

import { useGetTodos } from "@api/todo";

import { calendarAtomFamily } from "@atoms/calendarAtom";
import { typeListAtom } from "@atoms/todoAtom";

import { setArrayToPath } from "@utils/datepiacker";

import { PageLayout } from "@components";
import { DatePicker } from "@/common/calendar";

import ListTab from "./tab";
import ListBody from "./body";
import ListModal from "./modal";

import { mkListByType } from "./helpers/list";
import { TYPE_STR } from "./helpers/constant";

const TodoListPage = () => {
  const selectedDate = useRecoilValue(calendarAtomFamily("todoList"));

  const currentType = useRecoilValue(typeListAtom);

  const { data, refetch } = useGetTodos(setArrayToPath(selectedDate));
  const list = mkListByType(data, currentType);

  useEffect(() => {
    refetch();
    console.log("hi");
  }, [selectedDate]);

  return (
    <PageLayout css={{ gap: "10px" }}>
      <DatePicker />
      <ListTab>
        {TYPE_STR.map((type) => {
          return <ListTab.Item key={`${type}_key`} type={type} checked={type === currentType} />;
        })}
      </ListTab>
      <ListBody>
        {list.map((item) => {
          return <ListBody.Item item={item} />;
        })}
      </ListBody>
      <ListModal />
    </PageLayout>
  );
};

export default TodoListPage;
