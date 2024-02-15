import LocationIcon from "@assets/share_location_icon.svg";

import { Icon } from "@components";
import { HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLDivElement> {
  value: string;
}

const ListCardLocation = ({ value, ...props }: Props) => {
  return (
    <div
      css={{
        display: "flex",
        alignItems: "center",
        gap: "8px",
        cursor: "pointer",
        "&:hover": {
          filter: "contrast(80%)",
        },
      }}
      {...props}
    >
      <Icon src={LocationIcon} alt="edit"></Icon>
      <span css={{ cursor: "pointer" }}>{value}</span>
    </div>
  );
};

export default ListCardLocation;
