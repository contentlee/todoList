import { useState } from "react";
import { createPortal } from "react-dom";
import { useNavigate } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";

import {
  Todo,
  completeTodo,
  deleteTodo,
  holdTodo,
  listAtom,
  listSelector,
  returnTodo,
  typeAtom,
} from "@atoms/todoAtom";

import { CONSTANT_STR } from "@utils/constant";

import { ListContent, ListLayout, ListTitle } from "@components/list";

import EmptyContainer from "./EmptyContainer";
import ListItemContainer from "./ListItemContainer";
import CardContainer from "./CardContainer";

const ListContainer = () => {
  const navigate = useNavigate();

  const [_, setStore] = useRecoilState(listAtom);
  const list = useRecoilValue(listSelector);
  const type = useRecoilValue(typeAtom);

  const [showModal, setShowModal] = useState(false);
  const [curItem, setCurItem] = useState<Todo>();

  const handleCloseCard = () => setShowModal(false);

  const handleClickItem = (item: Todo) => {
    setShowModal(true);
    setCurItem(item);
  };

  const handleClickReturn = (id: string) => setStore(returnTodo(id));

  const handleClickEdit = (id: string) => navigate(`edit/${id}`);

  const handleClickDelete = (id: string) => setStore(deleteTodo(id));

  const handleClickHold = (id: string) => setStore(holdTodo(id));

  const handleChangeCheckbox = (id: string) => setStore(completeTodo(id));

  return (
    <ListLayout>
      {list.length !== 0 ? (
        <>
          <ListTitle type={type}>
            <span
              css={{
                fontSize: "12px",
                fontWeight: 400,
              }}
            >
              {CONSTANT_STR[type].title} 총 {list.length}건
            </span>
          </ListTitle>
          <ListContent>
            {list.map((item) => (
              <ListItemContainer
                key={item.id}
                item={item}
                handleClickItem={handleClickItem}
                handleClickReturn={handleClickReturn}
                handleClickEdit={handleClickEdit}
                handleClickDelete={handleClickDelete}
                handleChangeCheckbox={handleChangeCheckbox}
              ></ListItemContainer>
            ))}
          </ListContent>

          {showModal &&
            createPortal(
              <CardContainer
                item={curItem}
                type={type}
                handleCloseCard={handleCloseCard}
                handleClickReturn={handleClickReturn}
                handleClickEdit={handleClickEdit}
                handleClickHold={handleClickHold}
                handleClickDelete={handleClickDelete}
              ></CardContainer>,
              document.body,
              "todo_card"
            )}
        </>
      ) : (
        <EmptyContainer type={type}></EmptyContainer>
      )}
    </ListLayout>
  );
};

export default ListContainer;
