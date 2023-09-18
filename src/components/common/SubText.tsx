import { palette } from "@utils/palette";

interface Props {
  children: React.ReactNode;
}

const SubText = ({ children }: Props) => {
  return (
    <div
      css={{
        width: "100%",
        fontSize: "12px",
        fontWeight: 400,
        color: palette.gray200,
      }}
    >
      {children}
    </div>
  );
};

export default SubText;
