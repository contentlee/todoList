import { palette } from "@utils/palette";

interface Props {
  description: string;
}

const Description = ({ description }: Props) => {
  return (
    <div
      css={{
        color: palette.gray600,
        fontSize: "14px",
        fontWeight: "400",
      }}
    >
      {description}
    </div>
  );
};

export default Description;
