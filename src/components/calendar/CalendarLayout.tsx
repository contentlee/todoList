import { palette } from "../../utils/palette";

interface Props {
  children?: React.ReactNode;
}

const CalendarLayout = ({ children }: Props) => {
  return (
    <div
      css={{
        position: "absolute",
        top: "20px",

        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "40px 20px",
        minWidth: "300px",

        border: "1px solid " + palette.gray50,
        backgroundColor: palette.white,
        gap: "20px",
        userSelect: "none",
      }}
    >
      {children}
    </div>
  );
};

export default CalendarLayout;
