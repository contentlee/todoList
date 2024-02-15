import { ChangeEvent, MouseEvent, useState } from "react";
import OptionsAddForm from "./add/OptionsAddForm";
import OptionsAddItem from "./add/OptionsAddItem";

interface Props {
  isOpenedAdd: boolean;
  createOption: (category: string) => void;
  toggleAddOptionsOpened: () => void;
}

const OptionsAdd = ({ isOpenedAdd, createOption, toggleAddOptionsOpened }: Props) => {
  const [value, setValue] = useState("");

  const handleAddClick = (e: MouseEvent) => {
    e.preventDefault();
    toggleAddOptionsOpened();
    createOption(value);
  };

  const handleClose = (e: MouseEvent) => {
    e.preventDefault();
    toggleAddOptionsOpened();
  };

  const handleChangeValue = (e: ChangeEvent) => {
    e.preventDefault();
    const value = (e.target as HTMLInputElement).value;
    setValue(value);
  };

  if (isOpenedAdd) return <OptionsAddItem toggleAddOptionsOpened={toggleAddOptionsOpened} />;

  return (
    <OptionsAddForm>
      <OptionsAddForm.Input handleChangeValue={handleChangeValue} />
      <OptionsAddForm.Add handleAddClick={handleAddClick} />
      <OptionsAddForm.Close handleClose={handleClose} />
    </OptionsAddForm>
  );
};

export default OptionsAdd;
