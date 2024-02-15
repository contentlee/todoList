import { ReactNode } from "react";
import LIstTabItem from "./ListTabItem";

interface Props {
  children: ReactNode;
}

const ListTab = ({ children }: Props) => {
  return (
    <fieldset
      css={{
        display: "flex",
        justifyContent: "center",
        gap: "4px",
        margin: "4px",
      }}
    >
      {children}
    </fieldset>
  );
};

ListTab.Item = LIstTabItem;

export default ListTab;
