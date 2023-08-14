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
      }}
    >
      {children}
    </div>
  );
};

export default CalendarBody;
