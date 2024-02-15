import { Route, Routes } from "react-router";
import { Navigate } from "react-router-dom";
import { useRecoilValue } from "recoil";

import { userAtom } from "@atoms/userAtom";

import AddTodoPage from "./add";
import TodoListPage from "./list";
import UserCategoryPage from "./category";
import EditTodoPage from "./edit";
import AlarmPage from "./alarm";
import UserPage from "./user";
import UserChartPage from "./chart";
import UserMapPage from "./map";
import LoginPage from "./login";
import Navigation from "./common/nav";

import { Alert, Overlay } from "@components";
import { Loading } from "./common/state";

function App() {
  const { is_logged_in } = useRecoilValue(userAtom);
  return (
    <Routes>
      {is_logged_in && (
        <>
          <Route index path="/" element={<TodoListPage />} />
          <Route path="/add" element={<AddTodoPage />} />
          <Route path="/edit/:date/:id" element={<EditTodoPage />}></Route>
          <Route path="/alarm" element={<AlarmPage />} />
          <Route path="/mypage" element={<UserPage />} />
          <Route path="/mypage/chart" element={<UserChartPage />} />
          <Route path="/mypage/category" element={<UserCategoryPage />} />
          <Route path="/mypage/map" element={<UserMapPage />} />
          <Route path="*" element={<Navigate replace to="/" />} />
        </>
      )}

      {!is_logged_in && (
        <>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="*" element={<Navigate replace to="/login" />} />
        </>
      )}
    </Routes>
  );
}

export default App;
