import { HTMLAttributes, MouseEvent } from "react";
import { useRecoilState } from "recoil";

import { modalAtom } from "@atoms/modalAtom";
import { selectedTodoAtom } from "@atoms/todoAtom";

import { ResTodo } from "@utils/types/todo";

interface Props extends HTMLAttributes<HTMLDivElement> {
  item: ResTodo;
}
const ListItemTitle = ({ item }: Props) => {
  const [_, setTodo] = useRecoilState(selectedTodoAtom);
  const [__, setModal] = useRecoilState(modalAtom);
  const handleClickTitle = (e: MouseEvent) => {
    e.preventDefault();
    setTodo(item);
    setModal({ isOpened: true, type: "card" });
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
