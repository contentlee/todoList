import { palette } from "@utils/palette";

interface Props {
  name: string;
}

const UserName = ({ name }: Props) => {
  return (
    <div
      css={{
        fontSize: "24px",
        color: palette.gray600,
      }}
    >
      <b>{name}</b> 님
    </div>
  );
};

export default UserName;
