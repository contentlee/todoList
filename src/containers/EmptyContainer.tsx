import AddIcon from "../assets/add_circle_icon.svg";
import { palette } from "../utils/palette";
import { Card, Icon } from "../components";

interface Props {}

const EmptyContainer = ({}: Props) => {
  return (
    <Card>
      <span
        css={{
          color: palette.gray600,
          fontSize: "14px",
          fontWeight: "700",
        }}
      >
        오늘 계획된 할 일이 존재하지 않습니다.
      </span>
      <span
        css={{
          color: palette.gray200,
          fontSize: "12px",
          fontWeight: "400",
        }}
      >
        해야할 일을 추가해보세요!
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
      >
        <Icon src={AddIcon} size="large" alt="add"></Icon>
      </div>
    </Card>
  );
};

export default EmptyContainer;
