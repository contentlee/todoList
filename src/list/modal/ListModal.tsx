import { createPortal } from "react-dom";
import { useRecoilValue } from "recoil";

import { modalAtom } from "@atoms/modalAtom";
import { selectedTodoAtom, typeListAtom } from "@atoms/todoAtom";

import ListCard from "./card";

const ListModal = () => {
  const { id, date, title, place, category, content, edit_date } = useRecoilValue(selectedTodoAtom);

  const type = useRecoilValue(typeListAtom);

  const modal = useRecoilValue(modalAtom);

  return (
    modal.isOpened &&
    modal.type === "card" &&
    createPortal(
      <ListCard type={type}>
        <ListCard.ButtonLayout>
          <ListCard.Edit id={id} />
          <ListCard.Hold id={id} />
          <ListCard.Return id={id} />
          <ListCard.Delete id={id} />
        </ListCard.ButtonLayout>
        <ListCard.Date type={type} value={date} />
        <ListCard.Title type={type} value={title} />
        <ListCard.Flex type={type}>
          <ListCard.Location value={place.name} />
          <span>|</span>
          <ListCard.Category value={category} />
        </ListCard.Flex>
        <ListCard.Map lat={place.lat} lng={place.lng} />
        <ListCard.Content type={type} value={content} />
        <ListCard.EditDate type={type} value={edit_date} />
        <ListCard.Empty />
      </ListCard>,
      document.body,
      "todo_card"
    )
  );
};

export default ListModal;
