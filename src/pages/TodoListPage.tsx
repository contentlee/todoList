import { TYPE_STR } from "@utils/constant";

import { ListContainer, ListTabContainer } from "@containers/list";
import { DatePicker } from "@containers/calendar";

const TodoListPage = () => {
  return (
    <>
      <DatePicker id="todoList" pickerSize="regular"></DatePicker>
      <div
        css={{
          display: "flex",
          justifyContent: "center",
          gap: "4px",
          margin: "4px",
        }}
      >
        {TYPE_STR.map((val) => {
          return <ListTabContainer key={val} id={val} type={val} name="list"></ListTabContainer>;
        })}
      </div>
      <ListContainer></ListContainer>
    </>
  );
};

export default TodoListPage;
