import { PageLayout } from "@components/common";
import { ChartUserContainer, ChartUserHead } from "@containers/chart";

const UserChartPage = () => {
  return (
    <PageLayout css={{ gap: "10px" }}>
      <ChartUserHead></ChartUserHead>
      <ChartUserContainer></ChartUserContainer>
    </PageLayout>
  );
};

export default UserChartPage;
