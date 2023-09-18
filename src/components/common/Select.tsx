import { useState, useEffect, HTMLAttributes } from "react";

import ArrowIcon from "@assets/expand_more_icon.svg";
import AddIcon from "@assets/add_icon.svg";

import { palette } from "@utils/palette";
import { Button, Icon } from ".";

interface Props extends HTMLAttributes<HTMLInputElement> {
  type?: "basic" | "add";
  label?: string;
  value?: string;
  option: string[];
  handleClickOption?: (e: React.MouseEvent, item: string) => void;
  handleAddOption?: (e: React.MouseEvent, category: string) => void;
  children?: React.ReactNode;
}

const Select = ({
  type = "basic",
  label,
  value,
  option,
  handleClickOption,
  handleAddOption = () => {},
  children,
  ...props
}: Props) => {
  const [isOpened, setOpened] = useState(false);
  const [curValue, setCurValue] = useState("");

  const [category, setCategory] = useState("");
  const [isOpenedAdd, setOpenedAdd] = useState(false);

  useEffect(() => {
    if (value) {
      setCurValue(value);
    } else {
      setCurValue("");
    }
  }, [value]);
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
              maxHeight: "200px",
              margin: "4px 0",
              fontSize: "12px",
              color: palette.gray600,
              background: "#fff",
              border: "1px solid",
              borderColor: palette.gray200,
              overflow: "auto",
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
                  setOpenedAdd(false);
                  if (handleClickOption) handleClickOption(e, item);
                }}
              >
                {item}
              </div>
            ))}

            {/* 카테고리 항목 추가하기 */}
            {type === "add" &&
              (isOpenedAdd ? (
                <div
                  css={{
                    display: "flex",
                    width: "100%",
                    height: "40px",
                    boxSizing: "border-box",
                  }}
                >
                  <div
                    css={{
                      flex: 1,
                      boxSizing: "border-box",
                    }}
                  >
                    <input
                      type="text"
                      css={{
                        width: "100%",
                        height: "100%",
                        padding: "0 16px",
                        outline: "none",
                        border: "none",
                        boxSizing: "border-box",
                        fontFamily: "pretendard",
                        fontSize: "12px",
                      }}
                      onChange={(e) => setCategory(e.target.value)}
                    />
                  </div>
                  <Button
                    css={{
                      width: "60px",
                      height: "100%",
                      whiteSpace: "nowrap",
                    }}
                    onClick={(e) => {
                      setOpenedAdd(false);
                      handleAddOption(e, category);
                    }}
                  >
                    확인
                  </Button>
                  <Button
                    variant="secondary"
                    css={{
                      width: "60px",
                      height: "100%",
                      whiteSpace: "nowrap",
                    }}
                    onClick={() => setOpenedAdd(false)}
                  >
                    취소
                  </Button>
                </div>
              ) : (
                <div
                  key="add"
                  css={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    height: "40px",
                    padding: "0 16px",
                  }}
                  onClick={() => setOpenedAdd(true)}
                >
                  <div>추가하기</div>
                  <Icon src={AddIcon}></Icon>
                </div>
              ))}
          </div>
        )}
      </div>
    </div>
  );
};
export default Select;
