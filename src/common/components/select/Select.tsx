import { HTMLAttributes, useState } from "react";
import SelectLabel from "./SelectLabel";
import SelectLayout from "./SelectLayout";
import SelectInput from "./SelectInput";
import Options from "./option";

interface Props extends HTMLAttributes<HTMLInputElement> {
  type?: "basic" | "add";
  label?: string;
  value?: string;
  options: string[];
  handleClickOption?: (item: string) => void;
  handleAddOption?: (category: string) => void;
  children?: React.ReactNode;
}

const Select = ({
  type = "basic",
  label,
  value = "",
  options = [],
  handleClickOption,
  handleAddOption = () => {},
  children,
  ...props
}: Props) => {
  const [isOpened, setOpened] = useState(false);
  const [curValue, setCurValue] = useState(value);

  const [list, setList] = useState<string[]>(options);
  const [isOpenedAdd, setOpenedAdd] = useState(false);

  const resetOptionsOpened = () => {
    setOpened(false);
    setOpenedAdd(false);
  };

  const toggleOptionsOpened = () => {
    setOpened(!isOpened);
  };

  const toggleAddOptionsOpened = () => {
    setOpenedAdd(!isOpenedAdd);
  };

  const createOption = (option: string) => {
    setList([...list, option]);
    if (handleAddOption) handleAddOption(option);
  };

  const selectOption = (option: string) => {
    setCurValue(option);
    setOpened(!isOpened);
    setOpenedAdd(false);
    if (handleClickOption) handleClickOption(option);
  };

  return (
    <SelectLayout>
      <SelectInput value={curValue} {...props} />
      <SelectLabel label={label} />

      <Options>
        <Options.Value value={curValue} toggleOptionsOpened={toggleOptionsOpened} />
        {isOpened && (
          <Options.List isOpened={isOpened} resetOptionsOpened={resetOptionsOpened}>
            {list.map((option) => {
              return <Options.Item key={option} value={option} selectOption={selectOption} />;
            })}
            <Options.Add
              isOpenedAdd={isOpenedAdd}
              createOption={createOption}
              toggleAddOptionsOpened={toggleAddOptionsOpened}
            />
          </Options.List>
        )}
      </Options>
    </SelectLayout>
  );
};

export default Select;
