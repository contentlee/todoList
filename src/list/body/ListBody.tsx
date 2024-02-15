import { HTMLAttributes } from "react";
import { useRecoilValue } from "recoil";

import { typeListAtom } from "@atoms/todoAtom";

import ListItem from "./item";
import ListEmpty from "./empty";
import { ReturnButton, EditButton, DeleteButton } from "../common";

import { ResTodo } from "@utils/types/todo";

/// Item
interface ItemProps {
  item: ResTodo;
}

const Item = ({ item }: ItemProps) => {
  const { id } = item;
  const type = useRecoilValue(typeListAtom);
  return (
    <ListItem>
      {type !== "hold" && <ListItem.Checkbox id={`${id}-checkbox`} type={type} />}
      <ListItem.Title item={item} />
      <ListItem.ButtonLayout>
        {type === "hold" && <ReturnButton id={id} />}
        <EditButton id={id} />
        <DeleteButton id={id} />
      </ListItem.ButtonLayout>
    </ListItem>
  );
};

/// Empty
const Empty = () => {
  const type = useRecoilValue(typeListAtom);
  return (
    <ListEmpty type={type}>
      <ListEmpty.Content type={type} />
      {type === "todo" && <ListEmpty.Message />}
      {type === "todo" && <ListEmpty.Add />}
    </ListEmpty>
  );
};

/// Body
interface Props extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const ListBody = ({ children, ...props }: Props) => {
  return (
    <div
      css={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        marginTop: "8px",
        paddingBottom: "24px",
        gap: "10px",
        WebkitScrollSnapType: "y",
      }}
      {...props}
    >
      {children}
    </div>
  );
};

ListBody.Item = Item;
ListBody.Empty = Empty;

export default ListBody;
