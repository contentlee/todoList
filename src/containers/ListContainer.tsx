import UndoIcon from "../assets/undo_icon.svg";
import EditCalendarIcon from "../assets/edit_calendar_icon.svg";
import DeleteIcon from "../assets/delete_icon.svg";

import { Checkbox, Icon, List } from "../components";

interface Props {
  id: string;
  title: string;
  type?: "todo" | "complete" | "hold";
}

const ListContainer = ({ id, title, type }: Props) => {
  return (
    <List type={type}>
      <Checkbox id={id}></Checkbox>
      <span
        css={{
          flex: "1",
          fontSize: "12px",
          fontWeight: "700",
        }}
      >
        {title}
      </span>
      <div css={{ display: "flex", gap: "8px" }}>
        {!type || (type !== "todo" && <Icon src={UndoIcon} alt="undo"></Icon>)}

        <Icon src={EditCalendarIcon} alt="edit"></Icon>
        <Icon src={DeleteIcon} alt="delete"></Icon>
      </div>
    </List>
  );
};

export default ListContainer;
