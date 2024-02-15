import { Button } from "@components";
import { MouseEvent } from "react";

interface Props {
  handleClose: (e: MouseEvent) => void;
}

const CloseButton = ({ handleClose }: Props) => {
  return (
    <Button
      variant="secondary"
      css={{
        width: "60px",
        height: "100%",
        whiteSpace: "nowrap",
      }}
      onClick={handleClose}
    >
      취소
    </Button>
  );
};

export default CloseButton;
