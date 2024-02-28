import { MouseEvent } from "react";
import { useNavigate, useParams } from "react-router";

import EditIcon from "@assets/edit_calendar_icon.svg";

import { Icon } from "@components";

interface Props {
  id: string;
}

const EditButton = ({ id }: Props) => {
  const navigate = useNavigate();
  const { date } = useParams();

  const handleClickEdit = (e: MouseEvent) => {
    e.preventDefault();
    navigate(`edit/${date}/${id}`);
  };

  return <Icon src={EditIcon} alt="edit" onClick={handleClickEdit} />;
};

export default EditButton;
