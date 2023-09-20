import { Route, Routes } from "react-router";
import { Navigate } from "react-router-dom";
import { useRecoilValue } from "recoil";

import { userAtom } from "@atoms/userAtom";

import {
  AddTodoPage,
  AlarmPage,
  CommonPage,
  UserCategoryPage,
  EditTodoPage,
  LoginPage,
  TodoListPage,
  UserPage,
  UserMapPage,
} from "@pages";

function App() {
  const { is_logged_in } = useRecoilValue(userAtom);

  return (
    <Routes>
      <Route element={<CommonPage />}>
        {is_logged_in && (
          <>
            <Route index element={<TodoListPage />}></Route>
            <Route path="/" element={<TodoListPage />}></Route>
            <Route path="/add" element={<AddTodoPage />}></Route>
            <Route path="/edit/:date/:id" element={<EditTodoPage />}></Route>
            <Route path="/alarm" element={<AlarmPage />}></Route>
            <Route path="/mypage" element={<UserPage></UserPage>} />
            <Route path="/mypage/category" element={<UserCategoryPage></UserCategoryPage>} />
            <Route path="/mypage/map" element={<UserMapPage></UserMapPage>} />
            <Route path="*" element={<Navigate replace to="/" />} />
          </>
        )}

        {!is_logged_in && (
          <>
            <Route path="/login" element={<LoginPage></LoginPage>}></Route>
            <Route path="*" element={<Navigate replace to="/login" />} />
          </>
        )}
      </Route>
    </Routes>
  );
}

export default App;
