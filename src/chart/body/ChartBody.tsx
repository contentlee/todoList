import { useEffect, useState } from "react";

import { palette } from "@utils/palette";
import { makeDate } from "@utils/datepiacker";
import { ChartResponse } from "@utils/types/user";

import { useGetChartAll } from "@api/user";

import ChartBodyLayout from "./layout";
import BarChart from "./bar";
import TextChart from "./text";
import ErrorCard from "@/common/error";

const ChartBody = () => {
  const today = makeDate(new Date());

  const [chart, setChart] = useState<ChartResponse>();

  const { data, refetch } = useGetChartAll();

  useEffect(() => {
    if (data) setChart(data);
  }, [data]);

  if (!chart)
    return (
      <ChartBodyLayout>
        <ErrorCard refetch={refetch} />
      </ChartBodyLayout>
    );

  return (
    <ChartBodyLayout>
      <BarChart chart={chart} />
      <div
        css={{
          display: "flex",
          flexDirection: "column",
          padding: "16px 0",
          border: `1px solid ${palette.gray600}`,
          gap: "8px",
          boxSizing: "border-box",
        }}
      >
        <TextChart title={`연간통계 (${today[0]}년)`} chart={chart.y} />
        <TextChart title={`월간통계 (${today[1]}월)`} chart={chart.m} />
        <TextChart title={`일간통계 (${today[2]}일)`} chart={chart.d} />
      </div>
    </ChartBodyLayout>
  );
};

export default ChartBody;
