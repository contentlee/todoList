import { useState, useEffect } from "react";
import { useRecoilState } from "recoil";

import { typeAtom } from "@atoms/todoAtom";

import { palette } from "@utils/palette";
import { CONSTANT_STR } from "@utils/constant";

interface Props {
  id: string;
  type?: "todo" | "complete" | "hold";
  name: string;
}

const ListTabContainer = ({ id, type = "todo", name }: Props) => {
  const [selected, setSelected] = useRecoilState(typeAtom);
  const [checked, setChecked] = useState<boolean>(false);

  const handleChangeChecked = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const value = e.currentTarget.value as "todo" | "complete" | "hold";
    setSelected(value);
  };

  useEffect(() => {
    setChecked(selected === type);
  }, [selected]);

  return (
    <label
      htmlFor={id}
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
        id={id}
        name={`${name}_tab`}
        value={type}
        checked={checked}
        onChange={handleChangeChecked}
        css={{ display: "none" }}
      ></input>
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

export default ListTabContainer;
