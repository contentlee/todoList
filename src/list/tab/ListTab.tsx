import LIstTabItem from "./ListTabItem";
import ListTabLayout from "./ListTabLayout";

import { TYPE_STR } from "../helpers/constant";

import { TodoState } from "@utils/types/todo";

interface Props {
  selectedType: TodoState;
  handleClickType: (type: TodoState) => void;
}

const ListTab = ({ selectedType, handleClickType }: Props) => {
  return (
    <ListTabLayout>
      {TYPE_STR.map((t) => {
        return <LIstTabItem key={`${t}_key`} type={t} selectedType={selectedType} handleClickType={handleClickType} />;
      })}
    </ListTabLayout>
  );
};

export default ListTab;
