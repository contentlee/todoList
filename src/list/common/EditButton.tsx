import { MouseEvent } from "react";
import { useNavigate } from "react-router";
import { useRecoilValue, useResetRecoilState } from "recoil";

import { setArrayToPath } from "@utils/datepiacker";

import EditIcon from "@assets/edit_calendar_icon.svg";

import { modalAtom } from "@atoms/modalAtom";
import { calendarAtomFamily } from "@atoms/calendarAtom";

import { Icon } from "@components";

interface Props {
  id: string;
}

const EditButton = ({ id }: Props) => {
  const navigate = useNavigate();

  const selectedDate = useRecoilValue(calendarAtomFamily("todoList"));
  const resetModal = useResetRecoilState(modalAtom);
  const handleClickEdit = (e: MouseEvent) => {
    e.preventDefault();
    navigate(`edit/${setArrayToPath(selectedDate)}/${id}`);
    resetModal();
  };

  return <Icon src={EditIcon} alt="edit" onClick={handleClickEdit} />;
};

export default EditButton;
