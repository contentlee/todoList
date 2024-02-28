import EditTodoTitle from "./head";
import EditTodoBody from "./body";
import { PageLayout } from "@components";

const EditTodoPage = () => {
  return (
    <PageLayout css={{ gap: "10px" }}>
      <EditTodoTitle />
      <EditTodoBody />
    </PageLayout>
  );
};

export default EditTodoPage;
