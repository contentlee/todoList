import LocationIcon from "@assets/share_location_icon.svg";
import DeleteIcon from "@assets/delete_icon.svg";
import HoldIcon from "@assets/hold_icon.svg";
import ReturnIcon from "@assets/undo_icon.svg";
import EditIcon from "@assets/edit_calendar_icon.svg";

import { Todo } from "@atoms/todoAtom";

import { palette } from "@utils/palette";

import { Back, Card, Icon } from "@components/common";

interface Props {
  item?: Todo;
  type: "todo" | "complete" | "hold";
  handleCloseCard: () => void;
  handleClickReturn: (id: string) => void;
  handleClickEdit: (id: string) => void;
  handleClickDelete: (id: string) => void;
  handleClickHold: (id: string) => void;
}

const CardContainer = ({
  item,
  type,
  handleCloseCard,
  handleClickReturn,
  handleClickEdit,
  handleClickHold,
  handleClickDelete,
}: Props) => {
  return (
    <div
      css={{
        position: "absolute",
        zIndex: 100,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%",
      }}
    >
      <Back onClick={handleCloseCard}></Back>
      <Card type={type}>
        {item ? (
          <>
            <div
              css={{
                position: "absolute",
                top: 0,
                right: 0,

                display: "flex",
                alignItems: "center",

                height: "36px",
                padding: "0 16px",

                gap: "8px",

                userSelect: "none",
              }}
            >
              <Icon src={EditIcon} alt="edit" onClick={() => handleClickEdit(item.id)}></Icon>

              {type === "todo" ? (
                <Icon
                  src={HoldIcon}
                  alt="hold"
                  onClick={() => {
                    handleClickHold(item.id);
                    handleCloseCard();
                  }}
                ></Icon>
              ) : (
                <Icon
                  src={ReturnIcon}
                  alt="return"
                  onClick={() => {
                    handleClickReturn(item.id);
                    handleCloseCard();
                  }}
                ></Icon>
              )}

              <Icon
                src={DeleteIcon}
                alt="delete"
                onClick={() => {
                  handleClickDelete(item.id);
                  handleCloseCard();
                }}
              ></Icon>
            </div>
            <span
              css={{
                color: TYPE_VARIANTS[type].sub_color,
                fontSize: "14px",
                fontWeight: "700",
              }}
            >
              {item.date}
            </span>
            <span
              css={{
                color: TYPE_VARIANTS[type].color,
                fontSize: "18px",
                fontWeight: "700",
              }}
            >
              {item.title}
            </span>
            <div
              css={{
                display: "flex",
                alignItems: "center",
                gap: "8px",

                color: TYPE_VARIANTS[type].sub_color,
                fontSize: "12px",
                fontWeight: "400",

                userSelect: "none",
              }}
            >
              <Icon src={LocationIcon} alt="edit"></Icon>

              <span css={{ cursor: "pointer" }}>{item.place.name}</span>
              <span>|</span>
              <span>
                {`<`}
                {item.category}
                {`>`}
              </span>
            </div>
            <span
              css={{
                color: TYPE_VARIANTS[type].sub_color,
                fontSize: "12px",
                fontWeight: "400",
              }}
            >
              {item.content}
            </span>

            <span
              css={{
                marginTop: "10px",
                color: TYPE_VARIANTS[type].sub_color,
                fontSize: "8px",
                fontWeight: "400",
                opacity: "40%",
              }}
            >
              {item.editDate}
            </span>
          </>
        ) : (
          <div>존재하지 않는 할 일입니다.</div>
        )}
      </Card>
    </div>
  );
};

const TYPE_VARIANTS = {
  todo: {
    color: palette.gray600,
    sub_color: palette.gray200,
  },
  complete: {
    color: palette.green,
    sub_color: palette.sub_green,
  },
  hold: {
    color: palette.purple,
    sub_color: palette.sub_purple,
  },
};
export default CardContainer;
