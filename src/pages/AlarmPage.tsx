import { PageLayout, SubText, Title } from "@components/common";
import { AlarmListContainer } from "@containers/alarm";

const AlarmPage = () => {
  return (
    <PageLayout
      css={{
        width: "100%",
        padding: 0,
        margin: "0",
      }}
    >
      <Title css={{ padding: "20px" }}>
        알림 <SubText>새로운 알림을 확인하세요.</SubText>
      </Title>
      <AlarmListContainer date="2023-09-12">
        <span>오늘의 할일을 무사히 끝내셨네요!</span>
      </AlarmListContainer>
      <AlarmListContainer date="2023-09-12">
        <span>오늘의 할일을 무사히 끝내셨네요!</span>
      </AlarmListContainer>
    </PageLayout>
  );
};

export default AlarmPage;
