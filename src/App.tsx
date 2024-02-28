import { Route, Routes } from "react-router";
import { Navigate } from "react-router-dom";

import CommonPage from "./common";
import AddTodoPage from "./add";
import TodoListPage from "./list";
import UserCategoryPage from "./category";
import EditTodoPage from "./edit";
import AlarmPage from "./alarm";
import UserPage from "./user";
import UserChartPage from "./chart";
import UserMapPage from "./map";
import LoginPage from "./login";

import { makeDate, setArrayToPath } from "@utils/datepiacker";
import { useEffect, useState } from "react";

const TODAY = makeDate(new Date());
const DEFAULT_PATH = setArrayToPath(TODAY);

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const access_token = localStorage.getItem("access_token");

  useEffect(() => {
    if (access_token) setLoggedIn(true);
    else setLoggedIn(false);
  }, [localStorage]);
  return (
    <Routes>
      <Route element={<CommonPage />}>
        {loggedIn && (
          <>
            <Route path="/todos/:date" element={<TodoListPage />} />
            <Route path="/add" element={<AddTodoPage />} />
            <Route path="/edit/:date/:id" element={<EditTodoPage />}></Route>
            <Route path="/alarm" element={<AlarmPage />} />
            <Route path="/mypage" element={<UserPage />} />
            <Route path="/mypage/chart" element={<UserChartPage />} />
            <Route path="/mypage/category" element={<UserCategoryPage />} />
            <Route path="/mypage/map" element={<UserMapPage />} />
            <Route path="*" element={<Navigate replace to={`/todos/${DEFAULT_PATH}`} />} />
          </>
        )}

        {!loggedIn && (
          <>
            <Route path="/login" element={<LoginPage />}></Route>
            <Route path="*" element={<Navigate replace to="/login" />} />
          </>
        )}
      </Route>
    </Routes>
  );
}

export default App;
