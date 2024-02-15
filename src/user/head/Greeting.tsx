import { palette } from "@utils/palette";
import { ReactNode } from "react";

interface Props {
  children?: ReactNode;
}

const Greeting = ({ children = "환영합니다" }: Props) => {
  return (
    <div
      css={{
        color: palette.gray400,
      }}
    >
      {children}
    </div>
  );
};

export default Greeting;
