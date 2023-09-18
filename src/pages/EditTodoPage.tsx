import { EditTodoContainer } from "@containers/form";

import { PageLayout, SubText, Title } from "@components/common";

const EditTodoPage = () => {
  return (
    <PageLayout css={{ gap: "10px" }}>
      <Title>
        할 일 수정 <SubText>계획한 일을 수정해보세요.</SubText>
      </Title>
      <EditTodoContainer></EditTodoContainer>
    </PageLayout>
  );
};

export default EditTodoPage;
