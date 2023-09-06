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

export default CalendarHead;
