import { palette } from "@utils/palette";

interface Props {
  children?: React.ReactNode;
}

const CalendarLayout = ({ children }: Props) => {
  return (
    <div
      css={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "40px 20px",
        minWidth: "280px",
        maxWidth: "320px",

        border: "1px solid " + palette.gray100,
        backgroundColor: palette.white,
        gap: "20px",
        userSelect: "none",

        overflow: "hidden",
      }}
    >
      {children}
    </div>
  );
};

export default CalendarLayout;
