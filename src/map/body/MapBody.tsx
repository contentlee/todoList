import { ButtonLayout, CancelButton, SetMapButton } from "./button";

interface Props {
  children: React.ReactNode;
}
const MapBody = ({ children }: Props) => {
  return (
    <div
      css={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        marginTop: "8px",
        paddingBottom: "24px",
        gap: "10px",
        WebkitScrollSnapType: "y",
      }}
    >
      {children}
    </div>
  );
};

MapBody.ButtonLayout = ButtonLayout;
MapBody.Cancel = CancelButton;
MapBody.SetMap = SetMapButton;

export default MapBody;
