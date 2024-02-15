import { ReactNode } from "react";

import OptionsAddInput from "./OptionsAddInput";

import AddButton from "./AddButton";
import CloseButton from "./CloseButton";

interface Props {
  children: ReactNode;
}
const OptionsAddForm = ({ children }: Props) => {
  return (
    <div
      css={{
        display: "flex",
        width: "100%",
        height: "40px",
        boxSizing: "border-box",
      }}
    >
      {children}
    </div>
  );
};

OptionsAddForm.Input = OptionsAddInput;
OptionsAddForm.Add = AddButton;
OptionsAddForm.Close = CloseButton;

export default OptionsAddForm;
