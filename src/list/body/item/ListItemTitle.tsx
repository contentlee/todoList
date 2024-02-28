import { HTMLAttributes, MouseEvent } from "react";

import { ResTodo } from "@utils/types/todo";

interface Props extends HTMLAttributes<HTMLDivElement> {
  item: ResTodo;
  selectTodo: (todo: ResTodo) => void;
}
const ListItemTitle = ({ item, selectTodo }: Props) => {
  const handleClickTitle = (e: MouseEvent) => {
    e.preventDefault();
    selectTodo(item);
  };
  return (
    <div
      css={{
        flex: "1",
        display: "flex",
        alignItems: "center",
        height: "100%",
        fontSize: "12px",
        fontWeight: "700",
        cursor: "pointer",
      }}
      onClick={handleClickTitle}
    >
      {item.title}
    </div>
  );
};

export default ListItemTitle;
