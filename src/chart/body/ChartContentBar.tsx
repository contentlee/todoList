import { BAR } from "../helpers/constants";

import BarChart from "../bar";

import { ChartResponse } from "@utils/types/user";

interface Props {
  chart: ChartResponse;
}

const ChartContentBar = ({ chart }: Props) => {
  return (
    <BarChart>
      <BarChart.Title count={chart.total_length} />
      <BarChart.Content>
        {BAR.map((key, i) => {
          return <BarChart.Item index={i} value={chart[key]} />;
        })}
      </BarChart.Content>
    </BarChart>
  );
};

export default ChartContentBar;
