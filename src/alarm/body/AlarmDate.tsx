import { palette } from "@utils/palette";

interface Props {
  date: string;
}
const AlarmDate = ({ date }: Props) => {
  return (
    <div
      css={{
        position: "absolute",
        bottom: "10px",
        right: "10px",
        fontSize: "12px",
        color: palette.gray100,
      }}
    >
      {date}
    </div>
  );
};

export default AlarmDate;
