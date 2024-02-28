import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const TextContent = ({ children }: Props) => {
  return (
    <div
      css={{
        display: "flex",
        justifyContent: "space-around",
        width: "100%",
        margin: "16px 0",
      }}
    >
      {children}
    </div>
  );
};

export default TextContent;
