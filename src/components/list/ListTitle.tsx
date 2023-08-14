import { HTMLAttributes } from "react";
import { palette } from "../../utils/palette";

interface Props extends HTMLAttributes<HTMLDivElement> {
  type?: "todo" | "complete" | "hold";
  children?: React.ReactNode;
}

const ListTitle = ({ type = "todo", children, ...props }: Props) => {
  return (
    <div
      css={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "8px 16px",
        textAlign: "center",
        backgroundColor: palette.white,

        ...TYPE_VARIANTS[type],
      }}
      {...props}
    >
      {children}
    </div>
  );
};

const TYPE_VARIANTS = {
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

export default ListTitle;
