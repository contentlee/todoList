import { ReactNode, useEffect, useRef } from "react";
import { createPortal } from "react-dom";

interface Props {
  id?: string;
  isOpened: boolean;
  closeModal: () => void;
  children: ReactNode;
}

const Modal = ({ id = "", isOpened, closeModal, children }: Props) => {
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
    isOpened &&
    createPortal(
      <div ref={ref} css={{ zIndex: 1000 }}>
        {children}
      </div>,
      document.body,
      id
    )
  );
};

export default Modal;
