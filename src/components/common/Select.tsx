import { useState, useEffect, HTMLAttributes } from "react";

import ArrowIcon from "@assets/expand_more_icon.svg";
import { palette } from "@utils/palette";
import { Icon } from ".";

interface Props extends HTMLAttributes<HTMLInputElement> {
  label?: string;
  value?: string;
  option: string[];
  handleClickOption?: (e: React.MouseEvent, item: string) => void;
  children?: React.ReactNode;
}

const Select = ({ label, value, option, handleClickOption, children, ...props }: Props) => {
  const [isOpened, setOpened] = useState(false);
  const [curValue, setCurValue] = useState("");

  useEffect(() => {
    if (value) {
      setCurValue(value);
    }
  }, []);
  return (
    <div
      css={{
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
      <input css={{ display: "none" }} value={curValue} readOnly {...props}></input>

      <label
        css={{
          fontSize: "12px",
          fontWeight: 700,
          color: palette.gray600,
        }}
      >
        {label}
      </label>
      <div
        css={{
          position: "relative",

          flex: 1,
          display: "flex",
          width: "100%",
          height: "100%",
          cursor: "pointer",
          gap: "20px",

          "&:focus": {
            background: "#000",
          },
        }}
      >
        <div
          css={{
            flex: 1,
            display: "flex",
            alignItems: "center",
            width: "100%",
            height: "100%",
            fontSize: "12px",
            color: palette.gray600,
          }}
          onClick={(e) => {
            e.preventDefault();
            setOpened(!isOpened);
          }}
        >
          <div
            css={{
              flex: 1,
            }}
          >
            {curValue}
          </div>
          <Icon src={ArrowIcon}></Icon>
        </div>

        {isOpened && (
          <div
            css={{
              zIndex: "100",
              position: "absolute",
              top: "100%",
              width: "100%",
              margin: "4px 0",
              fontSize: "12px",
              color: palette.gray600,
              background: "#fff",
              border: "1px solid",
              borderColor: palette.gray200,
            }}
          >
            {option.map((item) => (
              <div
                key={item}
                css={{
                  display: "flex",
                  alignItems: "center",
                  height: "40px",
                  padding: "0 16px",
                }}
                onClick={(e) => {
                  setCurValue(item);
                  setOpened(!isOpened);
                  if (handleClickOption) handleClickOption(e, item);
                }}
              >
                {item}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
export default Select;
