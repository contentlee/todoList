import { HTMLAttributes } from "react";
import { palette } from "@utils/palette";

interface Props extends HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

const NavLayout = ({ children }: Props) => {
  return (
    <div
      css={{
        zIndex: "100",
        position: "fixed",
        bottom: 0,
        display: "flex",
        justifyContent: "center",
        width: "100%",
        height: "64px",
      }}
    >
      <div
        css={{
          position: "absolute",
          bottom: 0,
          width: "100%",
          height: "48px",
          borderTop: "1px solid #000",
          backgroundColor: palette.white,
        }}
      ></div>
      <div
        css={{
          position: "absolute",
          bottom: 0,
          width: "64px",
          height: "100%",
          boxSizing: "border-box",
          border: "1px solid #000",
          borderRadius: "50px",
          backgroundColor: palette.white,
        }}
      ></div>
      <div
        css={{
          position: "absolute",
          bottom: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",

          width: "100%",
          maxWidth: "390px",
          height: "48px",
          backgroundColor: palette.white,
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default NavLayout;
