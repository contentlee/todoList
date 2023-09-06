import { HTMLAttributes } from "react";
import { palette } from "@utils/palette";

interface Props extends HTMLAttributes<HTMLDivElement> {
  type: "success" | "error" | "warning" | "alarm";
  children?: React.ReactNode;
}

const Alert = ({ type, children, ...props }: Props) => {
  return (
    <div
      css={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        maxWidth: "350px",
        height: "2.5em",
        gap: "1.25em",
        ...TYPE_VARIANTS[type],
      }}
      {...props}
    >
      {children}
    </div>
  );
};

const TYPE_VARIANTS = {
  success: {
    backgroundColor: palette.green,
  },
  error: {
    backgroundColor: palette.sub_red,
  },
  warning: {
    backgroundColor: palette.purple,
  },
  alarm: {
    border: `1px solid ${palette.gray600}`,
    color: palette.gray600,
    backgroundColor: palette.white,
  },
};

export default Alert;
