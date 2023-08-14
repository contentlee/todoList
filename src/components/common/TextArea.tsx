import { ChangeEvent, HTMLAttributes, useRef } from "react";
import { palette } from "../../utils/palette";

interface Props extends HTMLAttributes<HTMLTextAreaElement> {
  label?: string;
}

const TextArea = ({ label, ...props }: Props) => {
  const textarea = useRef<HTMLTextAreaElement>(null);
  const handleResize = (e: ChangeEvent) => {
    e.preventDefault();
    if (textarea.current) {
      textarea.current.style.height = "auto";
      textarea.current.style.height = textarea.current.scrollHeight + "px";
      console.log(textarea.current.style.height);
    }
  };
  return (
    <div
      css={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",

        width: "100%",
        maxWidth: "350px",
        boxSizing: "border-box",
        border: "1px solid",
        backgroundColor: palette.white,
      }}
    >
      <label
        css={{
          display: "flex",
          alignItems: "center",
          padding: "0 16px",
          height: "40px",
          fontSize: "12px",
          fontWeight: 700,
          color: palette.gray600,
        }}
      >
        {label}
      </label>
      <textarea
        ref={textarea}
        rows={1}
        css={{
          minHeight: "40px",
          padding: "0 16px",
          paddingBottom: "16px",
          outline: "none",
          border: "none",
          boxSizing: "border-box",

          fontFamily: "pretendard",
          fontSize: "12px",
          color: palette.gray600,

          resize: "none",
        }}
        {...props}
        onChange={handleResize}
      ></textarea>
    </div>
  );
};

export default TextArea;
