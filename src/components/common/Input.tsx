import { InputHTMLAttributes } from "react";
import { palette } from "@utils/palette";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  required?: boolean;
  handleOnClick?: (e: React.MouseEvent) => void;
  children?: React.ReactNode;
}

const Input = ({ label, children, handleOnClick = (_) => {}, ...props }: Props) => {
  return (
    <div
      onClick={handleOnClick}
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
        type="text"
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
