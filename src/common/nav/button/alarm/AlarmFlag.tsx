import { palette } from "@/utils/palette";

const AlarmFlag = () => {
  return (
    <div
      css={{
        position: "absolute",
        top: 0,
        right: 0,
        width: "12px",
        height: "12px",
        borderRadius: "50px",
        backgroundColor: palette.sub_red,
      }}
    />
  );
};

export default AlarmFlag;
