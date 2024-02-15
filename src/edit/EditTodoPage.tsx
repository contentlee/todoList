import { PageLayout } from "@components";

import EditTodoTitle from "./head";
import EditTodoBody from "./body";

const EditTodoPage = () => {
  return (
    <PageLayout css={{ gap: "10px" }}>
      <EditTodoTitle />
      <EditTodoBody />
    </PageLayout>
  );
};

export default EditTodoPage;
