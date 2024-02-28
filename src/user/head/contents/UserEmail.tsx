import { palette } from "@utils/palette";

interface Props {
  email: string;
}

const UserEmail = ({ email }: Props) => {
  return (
    <div
      css={{
        fontSize: "12px",
        color: palette.gray200,
      }}
    >
      {email}
    </div>
  );
};

export default UserEmail;
