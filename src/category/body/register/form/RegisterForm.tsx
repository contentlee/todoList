import { HTMLAttributes, ReactNode } from "react";
import { useRecoilState } from "recoil";

import { useRegisterCategory } from "@api/category";
import { alertAtom } from "@atoms/alertAtom";

import { Category } from "@utils/types/category";

import RegisterTitle from "./RegisterTitle";
import RegisterInput from "./RegisterInput";

interface Props extends HTMLAttributes<HTMLFormElement> {
  categories: Category[];
  children: ReactNode;
}
const RegisterForm = ({ categories, children, ...props }: Props) => {
  const [_, setAlert] = useRecoilState(alertAtom);
  const { mutate: registerMutate } = useRegisterCategory();

  const handleAddCategory = (e: React.MouseEvent<HTMLFormElement>) => {
    e.preventDefault();
    const category = (e.currentTarget[0] as HTMLInputElement).value;
    if (!category) return setAlert({ isOpened: true, type: "warning", children: "이름을 입력해주세요." });
    if (categories.some((v) => v.name === category))
      return setAlert({ isOpened: true, type: "warning", children: "중복된 이름이 존재합니다." });

    registerMutate({ category });
  };

  return (
    <form
      onSubmit={handleAddCategory}
      css={{ display: "flex", flexDirection: "column", width: "100%", margin: "8px 0", gap: "8px" }}
      {...props}
    >
      {children}
    </form>
  );
};

RegisterForm.Title = RegisterTitle;
RegisterForm.Input = RegisterInput;

export default RegisterForm;
