import { ChangeEvent } from "react";

interface Props {
  handleChangeValue: (e: ChangeEvent) => void;
}

const OptionsAddInput = ({ handleChangeValue }: Props) => {
  return (
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
        onChange={handleChangeValue}
      />
    </div>
  );
};

export default OptionsAddInput;
