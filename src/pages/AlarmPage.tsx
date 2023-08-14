import { PageLayout } from "../components";
import AlarmListContainer from "../containers/AlarmListContainer";

const AlarmPage = () => {
  return (
    <PageLayout>
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