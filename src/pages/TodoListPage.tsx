import { useEffect, useRef, useState } from "react";

import Logo from "../assets/logo.svg";
import ArrowIcon from "../assets/arrow_icon.svg";

import { PageLayout, ListLayout, ListTitle, ListContent, Icon } from "../components";

import EmptyContainer from "../containers/EmptyContainer";
import NavContainer from "../containers/NavContainer";
import CardContainer from "../containers/CardContainer";
import ListContainer from "../containers/ListContainer";
import DatePicker from "../containers/DatePicker";

import { data } from "../utils/mock";
import { makeDate } from "../utils/datepiacker";
import { palette } from "../utils/palette";

interface Data {
  id: string;
  date: string;
  title: string;
  content: string;
  place: {
    marker: string;
    name: string;
    lat: number;
    lng: number;
  };
  category: string;
  isCompleted: boolean;
  isHeld: boolean;
}

const now = makeDate(new Date());

const TodoListPage = () => {
  const [dateArray, setDateArray] = useState<number[]>();

  const [todo, setTodo] = useState<Data[]>([]);
  const [complete, setComplete] = useState<Data[]>([]);
  const [hold, setHold] = useState<Data[]>([]);

  const wrapRef = useRef<HTMLDivElement>(null);
  const handleChangePage = (e: React.MouseEvent, v: number) => {
    if (wrapRef.current) {
      const curTranslateX = Number(wrapRef.current.style.transform.split("(")[1].split("px")[0]);
      const width = wrapRef.current.clientWidth;
      console.log(width);
      if (curTranslateX - 20 + width * v <= 0 && curTranslateX - 20 + width * v > -1110) {
        wrapRef.current.style.transform = `translate(${curTranslateX + (width + 20) * v}px)`;
      }
    }
  };

  useEffect(() => {
    setDateArray(now);

    if (data) {
      setTodo(data.filter(({ isCompleted }) => !isCompleted).filter(({ isHeld }) => !isHeld));
      setComplete(data.filter(({ isCompleted }) => isCompleted));
      setHold(data.filter(({ isHeld }) => isHeld));
    }
  }, []);
  return (
    <PageLayout css={{ gap: "20px" }}>
      <Icon size="logo_b" src={Logo}></Icon>
      <div
        css={{
          position: "relative",
          display: "flex",
          width: "100%",
          overflow: "hidden",
        }}
      >
        <div
          ref={wrapRef}
          style={{ transform: "translateX(0px)" }}
          css={{
            display: "flex",
            flex: 1,
            width: "100%",
            gap: "20px",
            transition: ".2s",
          }}
        >
          <ListLayout>
            <ListTitle>
              <DatePicker date={dateArray}></DatePicker>
              <span
                css={{
                  fontSize: "12px",
                  fontWeight: 400,
                }}
              >
                오늘 내가 해야할 일은 총 {todo.length}건
              </span>
            </ListTitle>
            <ListContent>
              {todo.length !== 0 ? (
                todo.map(() => {
                  return <ListContainer id="1" title="할일"></ListContainer>;
                })
              ) : (
                <EmptyContainer></EmptyContainer>
              )}
            </ListContent>
          </ListLayout>

          <ListLayout type="hold">
            <ListTitle type="hold" css={{ top: "10px" }}>
              <span
                css={{
                  fontSize: "12px",
                  fontWeight: 400,
                }}
              >
                보류 중인 할일은 총 8건
              </span>
            </ListTitle>
            <ListContent>
              <ListContainer id="1" title="할일" type="hold"></ListContainer>
              <ListContainer id="2" title="할일" type="hold"></ListContainer>
              <ListContainer id="3" title="할일" type="hold"></ListContainer>
            </ListContent>
          </ListLayout>

          <ListLayout type="complete">
            <ListTitle type="complete" css={{ top: "10px" }}>
              <span
                css={{
                  fontSize: "12px",
                  fontWeight: 400,
                }}
              >
                오늘 내가 완료한 할 일은 총 3건
              </span>
            </ListTitle>
            <ListContent>
              <ListContainer id="1" title="할일" type="complete"></ListContainer>
              <ListContainer id="2" title="할일" type="complete"></ListContainer>
              <ListContainer id="3" title="할일" type="complete"></ListContainer>
              <ListContainer id="3" title="할일" type="complete"></ListContainer>
              <ListContainer id="3" title="할일" type="complete"></ListContainer>
              <ListContainer id="3" title="할일" type="complete"></ListContainer>
              <ListContainer id="3" title="할일" type="complete"></ListContainer>
              <ListContainer id="1" title="할일" type="complete"></ListContainer>
              <ListContainer id="2" title="할일" type="complete"></ListContainer>
              <ListContainer id="3" title="할일" type="complete"></ListContainer>
              <ListContainer id="3" title="할일" type="complete"></ListContainer>
              <ListContainer id="3" title="할일" type="complete"></ListContainer>
              <ListContainer id="3" title="할일" type="complete"></ListContainer>
              <ListContainer id="3" title="할일" type="complete"></ListContainer>
              <ListContainer id="1" title="할일" type="complete"></ListContainer>
              <ListContainer id="2" title="할일" type="complete"></ListContainer>
              <ListContainer id="3" title="할일" type="complete"></ListContainer>
              <ListContainer id="3" title="할일" type="complete"></ListContainer>
              <ListContainer id="3" title="할일" type="complete"></ListContainer>
              <ListContainer id="3" title="할일" type="complete"></ListContainer>
              <ListContainer id="3" title="할일" type="complete"></ListContainer>

              <CardContainer id="4" title="할일" type="complete"></CardContainer>
            </ListContent>
          </ListLayout>
        </div>
      </div>

      <div
        css={{
          position: "absolute",
          left: 0,
        }}
      >
        <Icon
          src={ArrowIcon}
          css={{
            opacity: "30%",
            transition: ".2s",
            transform: "rotate(180deg)",
            "&:hover": {
              opacity: "100%",
              transform: "rotate(180deg) scale(150%)",
            },
          }}
          onClick={(e) => handleChangePage(e, 1)}
        ></Icon>
      </div>
      <div
        css={{
          position: "absolute",
          right: 0,
        }}
      >
        <Icon
          src={ArrowIcon}
          css={{
            opacity: "30%",
            transition: ".2s",
            "&:hover": {
              opacity: "100%",
              transform: "scale(150%)",
            },
          }}
          onClick={(e) => handleChangePage(e, -1)}
        ></Icon>
      </div>

      <NavContainer></NavContainer>
    </PageLayout>
  );
};

export default TodoListPage;
