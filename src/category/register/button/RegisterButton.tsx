import { ReactNode } from "react";
import SubmitButton from "./SubmitButton";
import ResetButton from "./ResetButton";

interface Props {
  children: ReactNode;
}
const RegisterButton = ({ children }: Props) => {
  return (
    <div
      css={{
        display: "flex",
        justifyContent: "flex-end",
        gap: "4px",
      }}
    >
      {children}
    </div>
  );
};

RegisterButton.Submit = SubmitButton;
RegisterButton.Reset = ResetButton;

export default RegisterButton;
