import { MouseEvent } from "react";

import { Button } from "@components";

interface Props {
  handleAddClick: (e: MouseEvent) => void;
}

const AddButton = ({ handleAddClick }: Props) => {
  return (
    <Button
      css={{
        width: "60px",
        height: "100%",
        whiteSpace: "nowrap",
      }}
      onClick={handleAddClick}
    >
      확인
    </Button>
  );
};

export default AddButton;
