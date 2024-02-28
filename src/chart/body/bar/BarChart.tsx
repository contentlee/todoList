import BarChartLayout from "./BarLayout";
import BarTitle from "./BarTitle";
import BarContent from "./BarContent";
import BarItem from "./item";

import { ChartResponse } from "@utils/types/user";
import { BAR } from "@/chart/helpers/constants";

interface ItemProps {
  index: number;
  width: number;
}
const Item = ({ index, width }: ItemProps) => {
  return (
    <BarItem width={width}>
      <BarItem.Bar index={index} />
      <BarItem.Tooltip index={index} />
    </BarItem>
  );
};

interface Props {
  chart: ChartResponse;
}
const BarChart = ({ chart }: Props) => {
  return (
    <BarChartLayout>
      <BarTitle count={chart.total_length} />
      <BarContent>
        {BAR.map((key, i) => {
          return <Item index={i} width={chart[key]} />;
        })}
      </BarContent>
    </BarChartLayout>
  );
};

export default BarChart;
