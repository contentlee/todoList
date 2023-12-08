import { palette } from "@utils/palette";

interface Props {
  description: string[];
  values: number[];
}

const BarChart = ({ description, values }: Props) => {
  return (
    <div
      css={{
        display: "flex",
        width: "100%",
        height: "30px",
      }}
    >
      {values.map((value, i) => {
        return (
          <div
            key={i}
            css={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              justifyContent: "end",
              width: `${value}%`,
              height: "100%",
              overflow: "visible",
              transition: ".5s",
              "&:hover": {
                transform: "scale(110%)",

                "span:first-child": {
                  display: "inline",
                },
              },
            }}
          >
            <span
              css={{
                display: "none",
                position: "absolute",
                top: 0,
                right: 0,
                color: COLOR[i],
                fontSize: "14px",
                overflow: "visible",
                whiteSpace: "nowrap",
              }}
            >
              {description && description[i]}
            </span>
            <div
              css={{
                width: " 100%",
                height: "50%",
                background: COLOR[i],
                transform: "scale(100%)",
                transition: ".5s",
              }}
            ></div>
          </div>
        );
      })}
    </div>
  );
};

const COLOR = [palette.gray100, palette.green, palette.purple, palette.red, palette.blue, palette.yellow];

export default BarChart;
