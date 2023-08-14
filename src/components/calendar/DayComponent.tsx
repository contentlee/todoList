import { palette } from "../../utils/palette";

interface Props {
  children: React.ReactNode;
  size?: "small" | "medium";
}

const DayComponent = ({ children, size = "medium" }: Props) => {
  return (
    <div
      css={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "14px",
        color: palette.gray500,
        ...SIZE_VARIANTS[size],
      }}
    >
      {children}
    </div>
  );
};

const SIZE_VARIANTS = {
  small: {},
  medium: {
    width: "40px",
    height: "40px",
  },
};

export default DayComponent;
