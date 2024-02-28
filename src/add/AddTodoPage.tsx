import AddTodoTitle from "./head";
import AddTodoBody from "./body";
import { PageLayout } from "@components";

const AddTodoPage = () => {
  return (
    <PageLayout css={{ gap: "10px" }}>
      <AddTodoTitle />
      <AddTodoBody />
    </PageLayout>
  );
};

export default AddTodoPage;
