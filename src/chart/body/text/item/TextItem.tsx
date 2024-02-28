import { ReactNode } from "react";
import Description from "./Description";
import Value from "./Value";

interface Props {
  children: ReactNode;
}

const TextItem = ({ children }: Props) => {
  return (
    <div
      css={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {children}
    </div>
  );
};

TextItem.Description = Description;
TextItem.Value = Value;

export default TextItem;
