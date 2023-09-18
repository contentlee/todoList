import { HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}
const Title = ({ children, ...props }: Props) => {
  return (
    <div
      css={{
        width: "100%",
        fontSize: "24px",
        fontWeight: 600,
        boxSizing: "border-box",
      }}
      {...props}
    >
      {children}
    </div>
  );
};

export default Title;
