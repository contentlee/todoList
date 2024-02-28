import { ReactNode } from "react";
import { palette } from "@utils/palette";

interface Props {
  children: ReactNode;
}
const AlarmContent = ({ children }: Props) => {
  return (
    <div
      css={{
        color: palette.gray600,
      }}
    >
      {children}
    </div>
  );
};

export default AlarmContent;
