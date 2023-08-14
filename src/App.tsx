import { RecoilRoot } from "recoil";
import AlarmPage from "./pages/AlarmPage";
import EditTodoPage from "./pages/EditTodoPage";
import TodoListPage from "./pages/TodoListPage";

function App() {
  return (
    <RecoilRoot>
      <TodoListPage></TodoListPage>
    </RecoilRoot>
  );
}

export default App;
