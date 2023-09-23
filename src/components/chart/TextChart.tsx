import { palette } from "@utils/palette";

interface Props {
  title: string;
  description: string[];
  values: number[];
}

const TextChart = ({ title, description, values }: Props) => {
  return (
    <div>
      <div
        css={{
          display: "flex",
          paddingLeft: "16px",
          fontSize: "12px",
          color: palette.gray200,
        }}
      >
        {title}
      </div>

      <div
        css={{
          display: "flex",
          justifyContent: "space-around",
          width: "100%",
          margin: "16px 0",
        }}
      >
        {values.map((value, i) => {
          return (
            <div
              css={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div
                css={{
                  color: palette.gray600,
                  fontSize: "14px",
                  fontWeight: "400",
                }}
              >
                {description[i]}
              </div>
              <div
                css={{
                  display: "flex",
                  alignItems: "baseline",
                }}
              >
                <div
                  css={{
                    color: palette.gray600,
                    fontSize: "24px",
                    fontWeight: "600",
                  }}
                >
                  {value}
                </div>
                <div
                  css={{
                    color: palette.gray600,
                  }}
                >
                  건
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TextChart;
