import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { useNavigate } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import { useMutation, useQuery } from "react-query";

import { calendarAtomFamily } from "@atoms/calendarAtom";
import { Todo, typeAtom } from "@atoms/todoAtom";

import { CONSTANT_STR } from "@utils/constant";
import { setArrayToPath } from "@utils/datepiacker";

import { changeTodoState, deleteTodo, getTodos } from "@api/todo";

import { ListContent, ListLayout, ListTitle } from "@components/list";

import EmptyContainer from "./EmptyContainer";
import ListItemContainer from "./ListItemContainer";
import CardContainer from "./CardContainer";
import { produce } from "immer";
import { ErrorContainer } from "@containers/common";
import { alertAtom } from "@atoms/stateAtom";

const ListContainer = () => {
  const navigate = useNavigate();

  const type = useRecoilValue(typeAtom);
  const selectedDate = useRecoilValue(calendarAtomFamily("todoList"));
  const [_, setAlert] = useRecoilState(alertAtom);

  const { data, isError, isSuccess, refetch } = useQuery(["todo", "getList"], () =>
    getTodos(setArrayToPath([selectedDate.year, selectedDate.month, selectedDate.day]))
  );

  const { mutate: changeStateMutate } = useMutation(changeTodoState);
  const { mutate: deleteMutate } = useMutation(deleteTodo);

  const [showModal, setShowModal] = useState(false);

  const [store, setStore] = useState<Todo[]>([]);
  const [curItem, setCurItem] = useState<Todo>();

  const list = (() => {
    if (type === "todo") {
      return store.filter(({ is_completed }) => !is_completed).filter(({ is_held }) => !is_held);
    } else if (type === "complete") {
      return store.filter(({ is_completed }) => is_completed);
    } else if (type === "hold") {
      return store.filter(({ is_held }) => is_held);
    } else return [];
  })();

  const handleClickItem = (item: Todo) => {
    setShowModal(true);
    setCurItem(item);
  };
  const handleCloseCard = () => setShowModal(false);

  const handleClickAdd = () => navigate("add");

  const handleClickEdit = (id: string) =>
    navigate(`edit/${setArrayToPath([selectedDate.year, selectedDate.month, selectedDate.day])}/${id}`);

  const handleChangeState = (id: string, type: "todo" | "hold" | "complete", val: boolean) => {
    changeStateMutate(
      { id, type, val },
      {
        onSuccess: () => {
          setStore((prev: Todo[]) =>
            produce(prev, (draft) => {
              const index = draft.findIndex((item) => item.id === id);
              if (type === "hold") draft[index].is_held = val;
              if (type === "complete") draft[index].is_completed = val;
              return draft;
            })
          );
          setAlert({ isOpened: true, type: "error", children: "데이터 변경에 성공하였습니다." });
        },
        onError: () => {
          setAlert({ isOpened: true, type: "error", children: "데이터 변경에 실패하였습니다." });
        },
      }
    );
  };

  const handleClickDelete = (id: string) =>
    deleteMutate(id, {
      onSuccess: () => {
        setStore((prev: Todo[]) =>
          produce(prev, (draft) => {
            const index = draft.findIndex((item) => item.id === id);
            draft.splice(index, 1);
            return draft;
          })
        );
        setAlert({ isOpened: true, type: "success", children: "데이터 삭제에 성공하였습니다." });
      },
      onError: () => {
        setAlert({ isOpened: true, type: "error", children: "데이터 삭제에 실패하였습니다." });
      },
    });

  useEffect(() => {
    if (data) {
      setStore(data.data);
    }
  }, [data]);

  useEffect(() => {
    refetch();
  }, [selectedDate]);

  return (
    <ListLayout>
      {isError && <ErrorContainer refetch={refetch}></ErrorContainer>}
      {isSuccess &&
        (list.length !== 0 ? (
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
                  handleClickEdit={handleClickEdit}
                  handleClickDelete={handleClickDelete}
                  handleChangeState={handleChangeState}
                ></ListItemContainer>
              ))}
            </ListContent>
            {showModal &&
              createPortal(
                <CardContainer
                  item={curItem}
                  type={type}
                  handleCloseCard={handleCloseCard}
                  handleClickEdit={handleClickEdit}
                  handleClickDelete={handleClickDelete}
                  handleChangeState={handleChangeState}
                ></CardContainer>,
                document.body,
                "todo_card"
              )}
          </>
        ) : (
          <EmptyContainer type={type} handleClickAdd={handleClickAdd}></EmptyContainer>
        ))}
    </ListLayout>
  );
};

export default ListContainer;
