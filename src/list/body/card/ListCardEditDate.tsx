import { palette } from "@utils/palette";

interface Props {
  type: "todo" | "complete" | "hold";
  value: string;
}

const ListCardEditDate = ({ type, value }: Props) => {
  return (
    <span
      css={{
        marginTop: "10px",
        color: TYPE_VARIANTS[type].sub_color,
        fontSize: "8px",
        fontWeight: "400",
        opacity: "40%",
      }}
    >
      {value}
    </span>
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

export default ListCardEditDate;
