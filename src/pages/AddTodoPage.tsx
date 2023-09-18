import { AddTodoContainer } from "@containers/form";
import { PageLayout, SubText, Title } from "@components/common";

const AddTodoPage = () => {
  return (
    <PageLayout css={{ gap: "10px" }}>
      <Title>
        할 일 추가 <SubText>계획한 일을 추가해보세요.</SubText>
      </Title>
      <AddTodoContainer></AddTodoContainer>
    </PageLayout>
  );
};

export default AddTodoPage;
