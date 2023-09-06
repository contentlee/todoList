interface Props {
  children?: React.ReactNode;
}

const ListContent = ({ children }: Props) => {
  return (
    <div
      css={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        marginTop: "8px",
        paddingBottom: "24px",
        gap: "10px",
        overflow: "auto",
        WebkitScrollSnapType: "y",
      }}
    >
      {children}
    </div>
  );
};

export default ListContent;
