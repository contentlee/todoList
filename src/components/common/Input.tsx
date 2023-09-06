import { HTMLAttributes } from "react";
import { palette } from "@utils/palette";

interface Props extends HTMLAttributes<HTMLInputElement> {
  label?: string;
  required?: boolean;
  children?: React.ReactNode;
}

const Input = ({ label, children, ...props }: Props) => {
  return (
    <div
      css={{
        position: "relative",
        display: "flex",
        alignItems: "center",
        width: "100%",
        maxWidth: "350px",
        height: "40px",
        padding: "0 16px",
        gap: "16px",
        boxSizing: "border-box",
        border: "1px solid",
        backgroundColor: palette.white,
      }}
    >
      <label
        css={{
          fontSize: "12px",
          fontWeight: 700,
          color: palette.gray600,
        }}
      >
        {label}
      </label>
      <input
        css={{
          flex: 1,
          outline: "none",
          border: "none",
          boxSizing: "border-box",

          fontFamily: "pretendard",
          fontSize: "12px",
          color: palette.gray600,
        }}
        {...props}
      ></input>

      {children}
    </div>
  );
};

export default Input;
