import { palette } from "@utils/palette";

interface Props {
  title: string;
}

const TextTitle = ({ title }: Props) => {
  return (
    <div
      css={{
        display: "flex",
        paddingLeft: "16px",
        fontSize: "12px",
        color: palette.gray200,
      }}
    >
      {title}
    </div>
  );
};

export default TextTitle;
