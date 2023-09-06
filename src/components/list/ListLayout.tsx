interface Props {
  type?: "todo" | "complete" | "hold";
  children?: React.ReactNode;
}

const ListLayout = ({ children }: Props) => {
  return (
    <div
      css={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        minWidth: "100%",
        overflow: "auto",
        boxSizing: "border-box",
      }}
    >
      {children}
    </div>
  );
};

export default ListLayout;
