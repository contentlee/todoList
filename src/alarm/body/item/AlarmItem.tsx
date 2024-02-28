import { ReactNode } from "react";

import { palette } from "@utils/palette";

import AlarmContent from "./AlarmContent";
import AlarmDate from "./AlarmDate";

interface Props {
  children: ReactNode;
}

const AlarmItem = ({ children }: Props) => {
  return (
    <div
      css={{
        position: "relative",
        padding: "20px",
        width: "100%",
        minHeight: "96px",
        borderBottom: `1px solid ${palette.gray100}`,
        boxSizing: "border-box",
        "&:hover": {
          backgroundColor: palette.gray50,
        },
      }}
    >
      {children}
    </div>
  );
};

AlarmItem.Content = AlarmContent;
AlarmItem.Date = AlarmDate;

export default AlarmItem;
