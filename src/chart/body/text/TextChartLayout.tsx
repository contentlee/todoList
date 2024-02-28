import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const TextChartLayout = ({ children }: Props) => {
  return <div>{children}</div>;
};

export default TextChartLayout;
