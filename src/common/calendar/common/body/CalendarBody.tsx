interface Props {
  children?: React.ReactNode;
}

const CalendarBody = ({ children }: Props) => {
  return (
    <div
      css={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        width: "280px",
      }}
    >
      {children}
    </div>
  );
};

export default CalendarBody;
