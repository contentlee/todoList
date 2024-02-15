interface Props {
  name: string;
}
const CategoryItemTitle = ({ name }: Props) => {
  return (
    <div
      css={{
        flex: "1",
        display: "flex",
        alignItems: "center",
        height: "100%",
        fontSize: "12px",
        fontWeight: "700",
      }}
    >
      {name}
    </div>
  );
};

export default CategoryItemTitle;
