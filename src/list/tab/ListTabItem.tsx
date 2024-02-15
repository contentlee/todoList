import { useRecoilState } from "recoil";

import { palette } from "@utils/palette";
import { CONSTANT_STR } from "@utils/constant";

import { typeListAtom } from "@atoms/todoAtom";

interface Props {
  type: "todo" | "complete" | "hold";
  checked: boolean;
}

const ListTabItem = ({ type, checked }: Props) => {
  const [_, setTypeList] = useRecoilState(typeListAtom);

  const handleChangeChecked = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const value = e.currentTarget.value as Props["type"];
    setTypeList(value);
  };

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
        onChange={handleChangeChecked}
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
