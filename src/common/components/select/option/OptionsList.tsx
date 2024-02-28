import { ReactNode, useEffect, useRef } from "react";

import { palette } from "@utils/palette";

interface Props {
  isOpened: boolean;
  closeModal: () => void;
  children: ReactNode;
}

const OptionsList = ({ isOpened, closeModal, children }: Props) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const clickOutside = (e: MouseEvent) => {
      if (isOpened && !ref.current?.contains(e.target as Node)) {
        closeModal();
      }
    };
    document.addEventListener("mousedown", clickOutside);

    return () => {
      document.removeEventListener("mousedown", clickOutside);
    };
  }, [isOpened]);
  return (
    isOpened && (
      <div
        ref={ref}
        css={{
          zIndex: "1000",
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
    )
  );
};

export default OptionsList;
