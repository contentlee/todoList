import { useRecoilValue } from "recoil";
import { createPortal } from "react-dom";

import { alertAtom } from "@atoms/alertAtom";

import AlertLayout from "./layout";
import AlertItem from "./item/AlertItem";

const Alert = () => {
  const { type, isOpened, children } = useRecoilValue(alertAtom);

  return (
    isOpened &&
    createPortal(
      <AlertLayout>
        <AlertItem type={type}>
          <AlertItem.Icon type={type} />
          {children}
          <AlertItem.Close />
        </AlertItem>
      </AlertLayout>,
      document.body,
      "alert"
    )
  );
};

export default Alert;
