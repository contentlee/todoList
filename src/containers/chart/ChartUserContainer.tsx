import { useState, useEffect } from "react";

import { ChartResponse, useGetChartAll } from "@api/user";

import { palette } from "@utils/palette";

import { ListLayout } from "@components/list";
import { ErrorContainer } from "@containers/common";
import { BarChart, TextChart } from "@components/chart";

const ChartUserContainer = () => {
  const [chart, setChart] = useState<ChartResponse>();

  const { data, refetch } = useGetChartAll();

  const today = new Date();

  useEffect(() => {
    if (data) {
      setChart(data);
    }
  }, [data]);

  return (
    <ListLayout>
      {chart ? (
        <div
          css={{
            display: "flex",
            flexDirection: "column",
            gap: "8px",
            width: "100%",
            margin: "8px 0",
            overflow: "hidden",
          }}
        >
          <div
            css={{
              display: "flex",
              flexDirection: "column",
              padding: "16px",
              border: `1px solid ${palette.gray600}`,
              gap: "8px",
              boxSizing: "border-box",
            }}
          >
            <div
              css={{ display: "flex", alignItems: "start", justifyContent: "space-between", color: palette.gray600 }}
            >
              <span>등록된 할 일은 총</span>
              <div>
                <span css={{ fontSize: "32px", fontWeight: "700" }}>{chart.total_length}</span>
                <span> 건</span>
              </div>
            </div>
            <BarChart
              description={CHART_TYPE}
              values={[chart.average_uncompleted, chart.average_completed, chart.average_held]}
            ></BarChart>
          </div>
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
            <TextChart
              title={`연간통계 (${today.getFullYear()}년)`}
              description={CHART_TYPE}
              values={[chart.y.total_uncompleted, chart.y.total_completed, chart.y.total_held]}
            ></TextChart>
            <TextChart
              title={`월간통계 (${today.getMonth() + 1}월)`}
              description={CHART_TYPE}
              values={[chart.m.total_uncompleted, chart.m.total_completed, chart.m.total_held]}
            ></TextChart>
            <TextChart
              title={`일간통계 (${today.getDate()}일)`}
              description={CHART_TYPE}
              values={[chart.d.total_uncompleted, chart.d.total_completed, chart.d.total_held]}
            ></TextChart>
          </div>
        </div>
      ) : (
        <ErrorContainer refetch={refetch}></ErrorContainer>
      )}
    </ListLayout>
  );
};

const CHART_TYPE = ["미완료된 할 일", "완료된 할 일", "보류된 할 일"];

export default ChartUserContainer;
