import { palette } from "@utils/palette";
import { CONSTANT_STR } from "@utils/constant";
import { useEffect, useState } from "react";

interface Props {
  type: "todo" | "complete" | "hold";
  selectedType: "todo" | "complete" | "hold";
  handleClickType: (type: Props["selectedType"]) => void;
}

const ListTabItem = ({ type, selectedType, handleClickType }: Props) => {
  const [checked, setChecked] = useState<boolean>(false);
  const selectType = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const value = e.currentTarget.value as Props["type"];
    handleClickType(value);
  };

  useEffect(() => {
    setChecked(type === selectedType);
  }, [selectedType]);
  return (
    <label
      htmlFor={type}
      css={{
        padding: "4px 8px",
        border: "solid 1px",
        cursor: "pointer",
        userSelect: "none",

        ...TYPE_VARIANTS[type],
      }}
    >
      <div>{CONSTANT_STR[type].tab}</div>
      <input
        type="radio"
        id={type}
        name="list_tab"
        value={type}
        checked={checked}
        onChange={selectType}
        css={{ display: "none" }}
      />
    </label>
  );
};

const TYPE_VARIANTS = {
  todo: {
    color: palette.gray600,
    borderColor: palette.gray600,
    "&:has(input[type='radio']:checked)": {
      backgroundColor: palette.gray600,
      color: palette.white,
    },
  },
  complete: {
    color: palette.green,
    borderColor: palette.green,
    "&:has(input[type='radio']:checked)": {
      backgroundColor: palette.green,
      color: palette.white,
    },
  },
  hold: {
    color: palette.purple,
    borderColor: palette.purple,
    "&:has(input[type='radio']:checked)": {
      backgroundColor: palette.purple,
      color: palette.white,
    },
  },
};

export default ListTabItem;
