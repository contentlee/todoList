import { palette } from "@utils/palette";
import { ReactNode } from "react";

interface Props {
  type: "todo" | "complete" | "hold";
  children: ReactNode;
}

const ListCardFlex = ({ type, children }: Props) => {
  return (
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
      {children}
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

export default ListCardFlex;
