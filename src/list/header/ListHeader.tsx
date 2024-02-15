import { HTMLAttributes } from "react";
import { palette } from "@utils/palette";

interface Props extends HTMLAttributes<HTMLDivElement> {
  type?: "todo" | "complete" | "hold";
  children?: React.ReactNode;
}

const ListHeader = ({ type = "todo", children, ...props }: Props) => {
  return (
    <div
      css={{
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        padding: "8px 16px",
        textAlign: "center",
        backgroundColor: palette.white,
        boxSizing: "border-box",
        ":before, :after": {
          content: "''",
          flexGrow: 1,
          margin: "0 16px",
          height: "1px",
          ...TYPE_LINE_VARIANTS[type],
        },
        ...TYPE_COLOR_VARIANTS[type],
      }}
      {...props}
    >
      {children}
    </div>
  );
};

const TYPE_COLOR_VARIANTS = {
  todo: {
    color: palette.gray200,
  },
  complete: {
    color: palette.sub_green,
  },
  hold: {
    color: palette.sub_purple,
  },
};

const TYPE_LINE_VARIANTS = {
  todo: {
    background: palette.gray200,
  },
  complete: {
    background: palette.sub_green,
  },
  hold: {
    background: palette.sub_purple,
  },
};

export default ListHeader;
