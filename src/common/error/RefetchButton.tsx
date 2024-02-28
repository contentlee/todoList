import RefresIcon from "@assets/refresh_icon.svg";

import { Icon } from "@components";
import { MouseEvent } from "react";

interface Props {
  refetch: () => void;
}

const RefetchButton = ({ refetch }: Props) => {
  const handleClickRefetch = (e: MouseEvent) => {
    e.preventDefault();
    refetch();
  };
  return (
    <div
      css={{
        display: "flex",
        alignItems: "center",
        opacity: "10%",
        transition: ".2s",
        "&:hover": {
          opacity: "40%",
        },
      }}
      onClick={handleClickRefetch}
    >
      <Icon src={RefresIcon} size="large" alt="refresh"></Icon>
    </div>
  );
};

export default RefetchButton;
