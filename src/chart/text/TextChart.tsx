import { ReactNode } from "react";

import TextTitle from "./TextTitle";
import TextContent from "./TextContent";
import TextItem from "./item/TextItem";

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
  children: ReactNode;
}

const TextChart = ({ children }: Props) => {
  return <div>{children}</div>;
};

TextChart.Title = TextTitle;
TextChart.Content = TextContent;
TextChart.Item = Item;

export default TextChart;
