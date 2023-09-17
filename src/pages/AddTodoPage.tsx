import { AddTodoContainer } from "@containers/form";
import { PageLayout, Title } from "@components/common";

const AddTodoPage = () => {
  return (
    <PageLayout css={{ gap: "10px" }}>
      <Title>할일 추가</Title>
      <AddTodoContainer></AddTodoContainer>
    </PageLayout>
  );
};

export default AddTodoPage;
