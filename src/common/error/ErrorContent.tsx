import { palette } from "@utils/palette";

const ErrorContent = () => {
  return (
    <span
      css={{
        color: palette.gray200,
        fontSize: "12px",
        fontWeight: "400",
      }}
    >
      요청중 문제가 발생했습니다!
    </span>
  );
};

export default ErrorContent;
