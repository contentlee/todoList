import { ReactNode, useEffect, useRef } from "react";

import { palette } from "@utils/palette";

interface Props {
  isOpened: boolean;
  children: ReactNode;
  resetOptionsOpened: () => void;
}

const OptionsList = ({ isOpened, children, resetOptionsOpened }: Props) => {
  const optionsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const clickOutside = (e: MouseEvent) => {
      if (isOpened && !optionsRef.current?.contains(e.target as Node)) {
        resetOptionsOpened();
      }
    };
    document.addEventListener("mousedown", clickOutside);

    return () => {
      removeEventListener("mousedown", clickOutside);
    };
  }, [isOpened]);

  return (
    <div
      ref={optionsRef}
      css={{
        zIndex: "100",
        position: "absolute",
        top: "100%",
        width: "100%",
        maxHeight: "200px",
        margin: "4px 0",
        fontSize: "12px",
        color: palette.gray600,
        background: "#fff",
        border: "1px solid",
        borderColor: palette.gray200,
        overflow: "auto",
      }}
    >
      {children}
    </div>
  );
};

export default OptionsList;
