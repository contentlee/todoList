import AddIcon from "@assets/add_icon.svg";
import Icon from "../../../Icon";
import { MouseEvent } from "react";

interface Props {
  toggleAddOptionsOpened: () => void;
}

const OptionsAddItem = ({ toggleAddOptionsOpened }: Props) => {
  const handleClickOpenAdd = (e: MouseEvent) => {
    e.preventDefault();
    toggleAddOptionsOpened();
  };
  return (
    <div
      key="add"
      css={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        height: "40px",
        padding: "0 16px",
      }}
      onClick={handleClickOpenAdd}
    >
      <div>추가하기</div>
      <Icon src={AddIcon}></Icon>
    </div>
  );
};

export default OptionsAddItem;
