interface Props {
  color: string;
  description: string;
}

const BarTooltip = ({ color, description }: Props) => {
  return (
    <span
      css={{
        display: "none",
        position: "absolute",
        top: 0,
        right: 0,
        color: color,
        fontSize: "14px",
        overflow: "visible",
        whiteSpace: "nowrap",
      }}
    >
      {description}
    </span>
  );
};

export default BarTooltip;
