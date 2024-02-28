import ArrowButton from "./ArrowButton";
import CalendarTitle from "./CalendarTitle";

interface Props {
  children?: React.ReactNode;
}

const CalendarHead = ({ children }: Props) => {
  return (
    <div
      css={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
      }}
    >
      {children}
    </div>
  );
};

CalendarHead.Title = CalendarTitle;
CalendarHead.Arrow = ArrowButton;

export default CalendarHead;
