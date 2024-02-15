import { ReactNode } from "react";

import { palette } from "@utils/palette";
import { CHART_TYPE, COLOR } from "../helpers/constants";

import BarTitle from "./BarTitle";
import BarContent from "./BarContent";
import BarItem from "./item";

interface ItemProps {
  index: number;
  value: number;
}
const Item = ({ index, value }: ItemProps) => {
  return (
    <BarItem value={value}>
      <BarItem.Bar index={index} />
      <BarItem.Tooltip color={COLOR[index]} description={CHART_TYPE[index]} />
    </BarItem>
  );
};

interface Props {
  children: ReactNode;
}
const BarChart = ({ children }: Props) => {
  return (
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
      {children}
    </div>
  );
};

BarChart.Title = BarTitle;
BarChart.Content = BarContent;
BarChart.Item = Item;

export default BarChart;
