import { makeDate } from "@utils/datepiacker";
import { palette } from "@utils/palette";
import { CHART_TYPE, TEXT } from "../helpers/constants";

import TextChart from "../text";

import { ChartResponse } from "@utils/types/user";

interface Props {
  chart: ChartResponse;
}

const ChartContentText = ({ chart }: Props) => {
  const today = makeDate(new Date());

  return (
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
      <TextChart>
        <TextChart.Title title={`연간통계 (${today[0]}년)`} />
        <TextChart.Content>
          {TEXT.map((key, i) => {
            return <TextChart.Item value={chart.y[key]} description={CHART_TYPE[i]} />;
          })}
        </TextChart.Content>
      </TextChart>

      <TextChart>
        <TextChart.Title title={`월간통계 (${today[1]}월)`} />
        <TextChart.Content>
          {TEXT.map((key, i) => {
            return <TextChart.Item value={chart.m[key]} description={CHART_TYPE[i]} />;
          })}
        </TextChart.Content>
      </TextChart>

      <TextChart>
        <TextChart.Title title={`일간통계 (${today[2]}일)`} />
        <TextChart.Content>
          {TEXT.map((key, i) => {
            return <TextChart.Item value={chart.d[key]} description={CHART_TYPE[i]} />;
          })}
        </TextChart.Content>
      </TextChart>
    </div>
  );
};

export default ChartContentText;
