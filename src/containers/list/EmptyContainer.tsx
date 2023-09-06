import AddIcon from "@assets/add_circle_icon.svg";

import { palette } from "@utils/palette";
import { CONSTANT_STR } from "@utils/constant";

import { Card, Icon } from "@components/common";

interface Props {
  type: "todo" | "complete" | "hold";
  onClick?: () => void;
}

const EmptyContainer = ({ type, onClick = () => {} }: Props) => {
  return (
    <Card type={type}>
      <span
        css={{
          fontSize: "14px",
          fontWeight: "700",
          ...TYPE_VARIANTS[type],
        }}
      >
        {CONSTANT_STR[type].empty}
      </span>

      {type === "todo" && (
        <>
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
            onClick={onClick}
          >
            <Icon src={AddIcon} size="large" alt="add"></Icon>
          </div>
        </>
      )}
    </Card>
  );
};

const TYPE_VARIANTS = {
  todo: {
    color: palette.gray600,
  },
  complete: {
    color: palette.green,
  },
  hold: {
    color: palette.purple,
  },
};

export default EmptyContainer;
