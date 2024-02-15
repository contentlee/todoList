import { PageLayout } from "@components";

import AddTodoTitle from "./head";
import AddTodoBody from "./body";

const AddTodoPage = () => {
  return (
    <PageLayout css={{ gap: "10px" }}>
      <AddTodoTitle />
      <AddTodoBody />
    </PageLayout>
  );
};

export default AddTodoPage;
