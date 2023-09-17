import { EditTodoContainer } from "@containers/form";

import { PageLayout } from "@components/common";

const EditTodoPage = () => {
  return (
    <PageLayout css={{ gap: "10px" }}>
      <div>수정</div>
      <EditTodoContainer></EditTodoContainer>
    </PageLayout>
  );
};

export default EditTodoPage;
