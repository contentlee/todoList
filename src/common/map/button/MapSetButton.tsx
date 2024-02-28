import { ReactNode } from "react";
import CancelButton from "./CancelButton";
import SubmitButton from "./SubmitButton";

interface Props {
  children: ReactNode;
}

const MapSetButton = ({ children }: Props) => {
  return (
    <div
      css={{
        display: "flex",
        flexDirection: "column",
        gap: "8px",
        padding: "8px 20px",
        width: "100%",
        minWidth: "280px",
        maxWidth: "320px",
      }}
    >
      {children}
    </div>
  );
};

MapSetButton.Cancel = CancelButton;
MapSetButton.Submit = SubmitButton;

export default MapSetButton;
