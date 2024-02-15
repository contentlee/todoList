import { useEffect, useState } from "react";

import { useGetChartAll } from "@api/user";

import { PageLayout } from "@components";
import { ErrorCard } from "@/common/state";

import ChartHead from "./head";
import ChartBody from "./body";

import { ChartResponse } from "@utils/types/user";

const UserChartPage = () => {
  const [chart, setChart] = useState<ChartResponse>();

  const { data, refetch } = useGetChartAll();

  useEffect(() => {
    if (data) {
      setChart(data);
    }
  }, [data]);
  return (
    <PageLayout css={{ gap: "10px" }}>
      <ChartHead>
        <ChartHead.Title />
        <ChartHead.Back />
      </ChartHead>
      <ChartBody>
        {chart && <ChartBody.Bar chart={chart} />}
        {chart && <ChartBody.Text chart={chart} />}
        {!chart && <ErrorCard refetch={refetch} />}
      </ChartBody>
    </PageLayout>
  );
};

export default UserChartPage;
