import { palette } from "@utils/palette";

interface Props {
  value: number;
}

const Value = ({ value }: Props) => {
  return (
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
  );
};

export default Value;
