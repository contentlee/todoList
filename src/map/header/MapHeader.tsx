import { ReactNode } from "react";
import MapTitle from "./MapTitle";
import ReturnButton from "./ReturnButton";

interface Props {
  children: ReactNode;
}

const MapHeader = ({ children }: Props) => {
  return (
    <div
      css={{
        display: "flex",
        justifyContent: "space-between",
        width: "100%",
      }}
    >
      {children}
    </div>
  );
};

MapHeader.Title = MapTitle;
MapHeader.Return = ReturnButton;

export default MapHeader;
