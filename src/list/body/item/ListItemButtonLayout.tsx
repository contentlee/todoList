import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const ListItemButtonLayout = ({ children }: Props) => {
  return <div css={{ display: "flex", gap: "8px" }}>{children} </div>;
};

export default ListItemButtonLayout;
