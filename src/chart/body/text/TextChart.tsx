import TextTitle from "./TextTitle";
import TextContent from "./TextContent";
import TextItem from "./item/TextItem";
import TextChartLayout from "./TextChartLayout";

import { CHART_TYPE, TEXT } from "@/chart/helpers/constants";
import { ChartResponse } from "@utils/types/user";

interface ItemProps {
  description: string;
  value: number;
}

const Item = ({ description, value }: ItemProps) => {
  return (
    <TextItem>
      <TextItem.Description description={description} />
      <TextItem.Value value={value} />
    </TextItem>
  );
};

interface Props {
  title: string;
  chart: ChartResponse["y"] | ChartResponse["m"] | ChartResponse["d"];
}

const TextChart = ({ title, chart }: Props) => {
  return (
    <TextChartLayout>
      <TextTitle title={title} />
      <TextContent>
        {TEXT.map((key, i) => {
          return <Item value={chart[key]} description={CHART_TYPE[i]} />;
        })}
      </TextContent>
    </TextChartLayout>
  );
};

export default TextChart;
