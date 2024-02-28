import { CHART_TYPE, COLOR } from "@/chart/helpers/constants";

interface Props {
  index: number;
}

const BarTooltip = ({ index }: Props) => {
  return (
    <span
      css={{
        display: "none",
        position: "absolute",
        top: 0,
        right: 0,
        color: COLOR[index],
        fontSize: "14px",
        overflow: "visible",
        whiteSpace: "nowrap",
      }}
    >
      {CHART_TYPE[index]}
    </span>
  );
};

export default BarTooltip;
