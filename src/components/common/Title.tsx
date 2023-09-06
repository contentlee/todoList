interface Props {
  children: React.ReactNode;
}
const Title = ({ children }: Props) => {
  return (
    <div
      css={{
        fontSize: "18px",
      }}
    >
      {children}
    </div>
  );
};

export default Title;
