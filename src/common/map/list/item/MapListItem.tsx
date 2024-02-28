import { ReactNode } from "react";

import { palette } from "@utils/palette";

import MapTitle from "./MapTitle";
import DeleteButton from "./DeleteButton";

interface Props {
  children: ReactNode;
}

const MapListItem = ({ children }: Props) => {
  return (
    <div
      css={{
        display: "flex",
        alignItems: "center",
        padding: "0 16px",
        width: "100%",
        maxWidth: "350px",
        minHeight: "40px",
        gap: "32px",
        boxSizing: "border-box",
        border: "1px solid",
        backgroundColor: palette.white,
        userSelect: "none",
        color: palette.gray600,
        borderColor: palette.gray600,
      }}
    >
      {children}
    </div>
  );
};

MapListItem.Title = MapTitle;
MapListItem.Delete = DeleteButton;

export default MapListItem;
