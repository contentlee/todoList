import { HTMLAttributes } from "react";
import { useNavigate } from "react-router";

import { TextArea } from "@components";

import { ButtonLayout, ResetButton, SubmitButton } from "./button";
import InputTitle from "./InputTitle";
import InputDate from "./InputDate";
import SelectCategory from "./SelectCategory";
import InputMap from "./InputMap";

interface Props extends HTMLAttributes<HTMLFormElement> {
  children?: React.ReactNode;
}

const Form = ({ children, ...props }: Props) => {
  const navigate = useNavigate();

  const handleClickReturn = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <form
      onReset={handleClickReturn}
      css={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        gap: "10px",
      }}
      {...props}
    >
      {children}
    </form>
  );
};

Form.Title = InputTitle;
Form.Date = InputDate;
Form.Map = InputMap;
Form.Category = SelectCategory;
Form.TextArea = TextArea;
Form.ButtonLayout = ButtonLayout;
Form.Reset = ResetButton;
Form.Submit = SubmitButton;

export default Form;
