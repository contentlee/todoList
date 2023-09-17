import { TYPE_STR } from "@utils/constant";

import { ListContainer, ListTabContainer } from "@containers/list";
import { DatePicker } from "@containers/calendar";
import { PageLayout } from "@components/common";

const TodoListPage = () => {
  return (
    <PageLayout css={{ gap: "10px" }}>
      <DatePicker id="todoList"></DatePicker>
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
    </PageLayout>
  );
};

export default TodoListPage;
