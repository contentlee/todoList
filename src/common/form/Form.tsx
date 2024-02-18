import { HTMLAttributes } from "react";
import { useNavigate } from "react-router";

import { CategorySelect } from "@/category";
import { TextArea } from "@components";

import InputTitle from "./InputTitle";
import { ButtonLayout, ResetButton, SubmitButton } from "./button";
import { FormDate } from "../calendar";
import { InputMap } from "@/map";

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
Form.Date = FormDate;
Form.Map = InputMap;
Form.Category = CategorySelect;
Form.TextArea = TextArea;
Form.ButtonLayout = ButtonLayout;
Form.Reset = ResetButton;
Form.Submit = SubmitButton;

export default Form;
