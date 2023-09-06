import { PageLayout } from "@components/common";
import { AlarmListContainer } from "@containers/alarm";

const AlarmPage = () => {
  return (
    <PageLayout
      css={{
        padding: "20px 0 64px",
      }}
    >
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
