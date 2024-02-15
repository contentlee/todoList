import { HTMLAttributes } from "react";

import RegisterForm from "./form";
import RegisterButton from "./button";

import { Category } from "@utils/types/category";

interface Props extends HTMLAttributes<HTMLFormElement> {
  categories: Category[];
}

const CategoryRegister = ({ categories, ...props }: Props) => {
  return (
    <RegisterForm categories={categories} {...props}>
      <RegisterForm.Title />
      <RegisterForm.Input />
      <RegisterButton>
        <RegisterButton.Submit />
        <RegisterButton.Reset />
      </RegisterButton>
    </RegisterForm>
  );
};

export default CategoryRegister;
