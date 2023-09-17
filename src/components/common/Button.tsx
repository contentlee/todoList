import { ButtonHTMLAttributes } from "react";
import { palette } from "@utils/palette";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  size?: "medium" | "large";
}

const Button = ({ variant = "primary", size = "medium", ...props }: Props) => {
  return (
    <button
      css={{
        outline: "none",
        border: "none",
        cursor: "pointer",

        transition: "background .2s ease,color .1s ease",

        fontFamily: "pretendard",
        fontWeight: 600,

        boxSizing: "border-box",

        ...TYPE_VARIANTS[variant],
        ...SIZE_VARIANTS[size],
      }}
      {...props}
    />
  );
};

const TYPE_VARIANTS = {
  primary: {
    color: palette.white,
    backgroundColor: palette.gray600,
    "&:hover": {
      border: "1px solid transparent",
      color: palette.gray600,
      backgroundColor: palette.white,
      borderColor: palette.gray600,
    },
  },
  secondary: {
    border: "1px solid transparent",
    color: palette.gray600,
    backgroundColor: palette.white,
    borderColor: palette.gray600,
    "&:hover": {
      border: "none",
      color: palette.white,
      backgroundColor: palette.gray600,
    },
  },
};

const SIZE_VARIANTS = {
  medium: {
    fontSize: "12px",
    height: "32px",
    padding: "0 16px",
  },
  large: {
    fontSize: "16px",
    padding: "0 16px",
    height: "42px",
  },
};

export default Button;
