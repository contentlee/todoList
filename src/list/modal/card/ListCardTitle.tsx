import { palette } from "@utils/palette";

interface Props {
  type: "todo" | "complete" | "hold";
  value: string;
}

const ListCardTitle = ({ type, value }: Props) => {
  return (
    <span
      css={{
        color: TYPE_VARIANTS[type].color,
        fontSize: "18px",
        fontWeight: "700",
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

export default ListCardTitle;
