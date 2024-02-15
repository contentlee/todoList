import { alertAtom, closeAlertAction } from "@atoms/alertAtom";
import { keyframes } from "@emotion/react";
import { ReactNode, useEffect } from "react";
import { useRecoilState } from "recoil";

const animate = keyframes`
  0%{
    opacity: 0;
    transform: translateY(-10px)
  }
  5%{
    opacity: 1;
    transform: translateY(0)
  }
  95%{
    opacity: 1;
    transform: translateY(0)
  }
  100%{
    opacity: 0;
    transform: translateY(-10px)
  }

`;

interface Props {
  children: ReactNode;
}
const AlertLayout = ({ children }: Props) => {
  const [alert, setAlert] = useRecoilState(alertAtom);

  useEffect(() => {
    if (alert.isOpened) {
      const fadeout = setTimeout(() => {
        setAlert(closeAlertAction);
      }, 5000);
      return () => clearTimeout(fadeout);
    }
  }, [alert]);

  return (
    <div
      css={{
        zIndex: "1000",
        position: "absolute",
        top: "20px",
        display: "flex",
        justifyContent: "center",
        width: "100%",
        animation: `${animate} 4.8s ease-in forwards`,
      }}
    >
      {children}
    </div>
  );
};

export default AlertLayout;
