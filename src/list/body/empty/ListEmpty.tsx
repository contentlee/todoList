import { ReactNode } from "react";

import { Card } from "@components";

import AddMessage from "./AddMessage";
import AddButton from "./AddButton";
import ListEmptyContent from "./ListEmptyContent";

interface Props {
  type: "todo" | "complete" | "hold";
  children: ReactNode;
}

const ListEmpty = ({ type, children }: Props) => {
  return <Card type={type}>{children}</Card>;
};

ListEmpty.Message = AddMessage;
ListEmpty.Add = AddButton;
ListEmpty.Content = ListEmptyContent;

export default ListEmpty;
