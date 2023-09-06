import { Outlet } from "react-router-dom";
import { useQuery } from "react-query";

import { PageLayout } from "@components/common";
import { NavContainer } from "@containers/common";
import { getTodos } from "@api/todo";

const MainPage = () => {
  const todo = useQuery("todos", getTodos);
  console.log(todo);
  return (
    <PageLayout css={{ gap: "10px" }}>
      <Outlet />
      <NavContainer></NavContainer>
    </PageLayout>
  );
};

export default MainPage;
