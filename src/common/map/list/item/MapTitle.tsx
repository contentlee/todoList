import { MouseEvent } from "react";

interface Props {
  name: string;
  handleClickItem: (e: MouseEvent) => void;
}

const MapTitle = ({ name, handleClickItem }: Props) => {
  return (
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
      onClick={handleClickItem}
    >
      {name}
    </div>
  );
};

export default MapTitle;
