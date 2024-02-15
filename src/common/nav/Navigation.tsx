import { useNavigate } from "react-router";
import { AddButton, AlarmButton, Empty, ListButton, UserButton } from "./button";
import NavLayout from "./layout";

const Navigation = () => {
  const navigate = useNavigate();

  const changePath = (path: string) => {
    navigate(path);
  };
  return (
    <NavLayout>
      <ListButton changePath={changePath} />
      <Empty />
      <AddButton changePath={changePath} />
      <AlarmButton changePath={changePath} />
      <UserButton changePath={changePath} />
    </NavLayout>
  );
};

export default Navigation;
