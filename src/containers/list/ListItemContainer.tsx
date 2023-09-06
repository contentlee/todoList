import { useRecoilValue } from "recoil";

import UndoIcon from "@assets/undo_icon.svg";
import EditCalendarIcon from "@assets/edit_calendar_icon.svg";
import DeleteIcon from "@assets/delete_icon.svg";

import { Todo, typeAtom } from "@atoms/todoAtom";

import { Checkbox, Icon } from "@components/common";
import { ListItem } from "@components/list";

interface Props {
  item: Todo;
  handleChangeCheckbox: (id: string) => void;
  handleClickItem: (item: Todo) => void;
  handleClickReturn: (id: string) => void;
  handleClickEdit: (id: string) => void;
  handleClickDelete: (id: string) => void;
}

const ListItemContainer = ({
  item,
  handleChangeCheckbox,
  handleClickItem,
  handleClickReturn,
  handleClickEdit,
  handleClickDelete,
}: Props) => {
  const type = useRecoilValue(typeAtom);

  return (
    <ListItem key={item.id} type={type}>
      {type !== "hold" && (
        <Checkbox
          id={item.id}
          defaultChecked={type === "complete"}
          onChange={() => handleChangeCheckbox(item.id)}
        ></Checkbox>
      )}
      <div
        css={{
          flex: "1",
          display: "flex",
          alignItems: "center",
          height: "100%",
          fontSize: "12px",
          fontWeight: "700",
          cursor: "pointer",
        }}
        onClick={() => handleClickItem(item)}
      >
        {item.title}
      </div>
      <div css={{ display: "flex", gap: "8px" }}>
        {type === "hold" && <Icon src={UndoIcon} alt="undo" onClick={() => handleClickReturn(item.id)}></Icon>}
        <Icon src={EditCalendarIcon} alt="edit" onClick={() => handleClickEdit(item.id)}></Icon>
        <Icon src={DeleteIcon} alt="delete" onClick={() => handleClickDelete(item.id)}></Icon>
      </div>
    </ListItem>
  );
};

export default ListItemContainer;
