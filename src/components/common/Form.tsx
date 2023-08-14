import { HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLFormElement> {
  children?: React.ReactNode;
}

const Form = ({ children, ...props }: Props) => {
  return (
    <form
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

export default Form;
