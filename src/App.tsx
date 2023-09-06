import { Route, Routes } from "react-router";
import { Navigate } from "react-router-dom";

import { AddTodoPage, AlarmPage, EditTodoPage, MainPage, TodoListPage } from "./pages";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />}>
        <Route index element={<TodoListPage />}></Route>
        <Route path="/" element={<TodoListPage />}></Route>
        <Route path="/add" element={<AddTodoPage />}></Route>
        <Route path="/edit/:id" element={<EditTodoPage />}></Route>
        <Route path="/alarm" element={<AlarmPage />}></Route>
        <Route path="*" element={<Navigate replace to="/list" />} />
      </Route>
    </Routes>
  );
}

export default App;
