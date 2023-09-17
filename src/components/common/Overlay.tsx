import { HTMLAttributes } from "react";
import { useRecoilValue, useResetRecoilState } from "recoil";

import { modalAtom } from "@atoms/stateAtom";
import { palette } from "@utils/palette";

interface Props extends HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

const Overlay = ({ children, ...props }: Props) => {
  const { isOpened } = useRecoilValue(modalAtom);
  const resetModal = useResetRecoilState(modalAtom);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    resetModal();
  };

  return isOpened ? (
    <div
      css={{
        zIndex: "500",
        position: "absolute",
        display: "block",
        width: "100%",
        height: "100%",
        background: palette.gray200,
        opacity: "30%",
      }}
      onClick={handleClick}
      {...props}
    ></div>
  ) : (
    <></>
  );
};

export default Overlay;
