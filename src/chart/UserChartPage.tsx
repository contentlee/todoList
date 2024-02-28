import ChartHead from "./head";
import ChartBody from "./body";
import { PageLayout } from "@components";

const UserChartPage = () => {
  return (
    <PageLayout css={{ gap: "10px" }}>
      <ChartHead />
      <ChartBody />
    </PageLayout>
  );
};

export default UserChartPage;
