import { palette } from "@utils/palette";

interface Props {
  children?: React.ReactNode;
}

const MapLayout = ({ children }: Props) => {
  return (
    <div
      css={{
        zIndex: "1000",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
        minWidth: "280px",
        maxWidth: "320px",
        width: "100%",

        border: "1px solid " + palette.gray100,
        backgroundColor: palette.white,
        gap: "8px",
        userSelect: "none",

        overflow: "hidden",
      }}
    >
      {children}
    </div>
  );
};

export default MapLayout;
