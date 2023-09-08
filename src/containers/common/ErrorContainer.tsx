import RefresIcon from "@assets/refresh_icon.svg";
import { Card, Icon } from "@components/common";
import { palette } from "@utils/palette";

interface Props {
  refetch?: () => void;
}

const ErrorContainer = ({ refetch = () => {} }: Props) => {
  return (
    <Card>
      <span
        css={{
          fontSize: "14px",
          fontWeight: "700",
          color: palette.gray600,
        }}
      ></span>

      <span
        css={{
          color: palette.gray200,
          fontSize: "12px",
          fontWeight: "400",
        }}
      >
        요청중 문제가 발생했습니다!
      </span>
      <div
        css={{
          display: "flex",
          alignItems: "center",
          opacity: "10%",
          transition: ".2s",
          "&:hover": {
            opacity: "40%",
          },
        }}
        onClick={refetch}
      >
        <Icon src={RefresIcon} size="large" alt="refresh"></Icon>
      </div>
    </Card>
  );
};

export default ErrorContainer;
