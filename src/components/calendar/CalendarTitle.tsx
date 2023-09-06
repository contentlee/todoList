import { palette } from "@utils/palette";

interface Props {
  handleOnClick?: (e: React.MouseEvent) => void;
  children?: React.ReactNode;
}

const CalendarTitle = ({ handleOnClick, children }: Props) => {
  return (
    <span
      css={{
        fontSize: "16px",
        fontWeight: 700,
        color: palette.gray400,

        cursor: "pointer",
      }}
      onClick={handleOnClick}
    >
      {children}
    </span>
  );
};

export default CalendarTitle;
