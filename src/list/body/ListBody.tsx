import { MouseEvent, useEffect, useState } from "react";
import { useParams } from "react-router";

import ListBodyLayout from "./layout";
import ListItem from "./item";
import ListEmpty from "./empty";
import ListCard from "./card";
import { ReturnButton, EditButton, DeleteButton } from "./button";
import { Modal } from "@components";

import { ResTodo, TodoState } from "@utils/types/todo";

import { DEFAULT_TODO } from "../helpers/constant";
import { mkListByType, mkTodoType } from "../helpers/list";
import { useGetTodos } from "@api/todo";

/// Item
interface ItemProps {
  item: ResTodo;
  type: TodoState;
  selectTodo: (item: ResTodo) => void;
}

const Item = ({ item, type, selectTodo }: ItemProps) => {
  const { id } = item;
  return (
    <ListItem>
      {type !== "hold" && <ListItem.Checkbox id={`${id}-checkbox`} type={type} />}
      <ListItem.Title item={item} selectTodo={selectTodo} />
      <ListItem.ButtonLayout>
        {type === "hold" && <ReturnButton id={id} />}
        <EditButton id={id} />
        <DeleteButton id={id} />
      </ListItem.ButtonLayout>
    </ListItem>
  );
};

/// Empty
interface EmptyProps {
  type: TodoState;
}

const Empty = ({ type }: EmptyProps) => {
  return (
    <ListEmpty type={type}>
      <ListEmpty.Content type={type} />
      {type === "todo" && <ListEmpty.Message />}
      {type === "todo" && <ListEmpty.Add />}
    </ListEmpty>
  );
};

interface CardProps {
  selectedTodo: ResTodo;
}
// Modal
const Card = ({ selectedTodo }: CardProps) => {
  const { id, date, title, place, category, content, edit_date } = selectedTodo;
  const type = mkTodoType(selectedTodo);

  const [isOpened, setOpened] = useState(false);
  const toggleOpened = (e: MouseEvent) => {
    e.preventDefault();
    setOpened(!isOpened);
  };
  if (!id)
    return (
      <ListCard type={type}>
        <ListCard.Empty />
      </ListCard>
    );
  return (
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
        <ListCard.Location value={place.name} onClick={toggleOpened} />
        <span>|</span>
        <ListCard.Category value={category} />
      </ListCard.Flex>
      {isOpened && <ListCard.Map lat={place.lat} lng={place.lng} />}
      <ListCard.Content type={type} value={content} />
      <ListCard.EditDate type={type} value={edit_date} />
    </ListCard>
  );
};

/// Body
interface Props {
  selectedDate: string;
  selectedType: TodoState;
}

const ListBody = ({ selectedDate, selectedType }: Props) => {
  const [isOpened, setOpened] = useState(false);

  const toggleOpened = () => {
    setOpened(!isOpened);
  };

  const { data, refetch } = useGetTodos(selectedDate);

  const [todos, setTodos] = useState<ResTodo[]>([]);
  const [selectedTodo, setSelectedTodo] = useState<ResTodo>(DEFAULT_TODO);
  const handleClickTodo = (todo: ResTodo) => {
    toggleOpened();
    console.log(todo);
    setSelectedTodo(todo);
  };

  useEffect(() => {
    setTodos(mkListByType(data, selectedType));
  }, [data, selectedType]);

  useEffect(() => {
    refetch();
  }, [selectedDate]);

  return (
    <ListBodyLayout>
      {!todos.length && <Empty type={selectedType} />}
      {todos?.map((item) => {
        return <Item key={item.id} item={item} type={selectedType} selectTodo={handleClickTodo} />;
      })}
      <Modal isOpened={isOpened} closeModal={toggleOpened}>
        <Card selectedTodo={selectedTodo} />
      </Modal>
    </ListBodyLayout>
  );
};

export default ListBody;
