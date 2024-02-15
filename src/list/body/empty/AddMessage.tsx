import { palette } from "@utils/palette";

const AddMessage = () => {
  return (
    <span
      css={{
        color: palette.gray200,
        fontSize: "12px",
        fontWeight: "400",
      }}
    >
      해야할 일을 추가해보세요!
    </span>
  );
};

export default AddMessage;
