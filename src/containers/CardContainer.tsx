import LocationIcon from "../assets/share_location_icon.svg";
import DeleteIcon from "../assets/delete_icon.svg";
import EditIcon from "../assets/edit_calendar_icon.svg";
import { palette } from "../utils/palette";
import { Card, Icon } from "../components";

interface Props {
  id: string;
  title: string;
  type?: "todo" | "complete" | "hold";
}

const CardContainer = ({ id, type = "todo", title }: Props) => {
  return (
    <Card type={type}>
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
        <Icon src={EditIcon} alt="edit"></Icon>
        <Icon src={DeleteIcon} alt="delete"></Icon>
      </div>
      <span
        css={{
          color: TYPE_VARIANTS[type].sub_color,
          fontSize: "14px",
          fontWeight: "700",
        }}
      >
        {title}
      </span>
      <span
        css={{
          color: TYPE_VARIANTS[type].color,
          fontSize: "18px",
          fontWeight: "700",
        }}
      >
        {title}
      </span>
      <div
        css={{
          display: "flex",
          alignItems: "center",
          gap: "8px",

          color: TYPE_VARIANTS[type].sub_color,
          fontSize: "12px",
          fontWeight: "400",
        }}
      >
        <Icon src={LocationIcon} alt="edit"></Icon>

        <span>우리집</span>
        <span>|</span>
        <span>
          {`<`}일상{`>`}
        </span>
      </div>
      <span
        css={{
          color: TYPE_VARIANTS[type].sub_color,
          fontSize: "12px",
          fontWeight: "400",
        }}
      >
        일하기의 내용
      </span>
    </Card>
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
