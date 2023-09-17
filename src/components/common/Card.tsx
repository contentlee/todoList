import { HTMLAttributes } from "react";
import { palette } from "@utils/palette";

interface Props extends HTMLAttributes<HTMLDivElement> {
  type?: "todo" | "complete" | "hold";
  children: React.ReactNode;
}

const Card = ({ type = "todo", children, ...props }: Props) => {
  return (
    <div
      css={{
        zIndex: 1000,
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "24px",
        width: "100%",
        maxWidth: "350px",
        gap: "4px",
        border: "1px solid",
        boxSizing: "border-box",
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
    borderColor: palette.gray600,
  },
  complete: {
    borderColor: palette.green,
  },
  hold: {
    borderColor: palette.purple,
  },
};
export default Card;
