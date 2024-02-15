import { HTMLAttributes, ReactNode } from "react";

import { palette } from "@utils/palette";

import ListItemTitle from "./ListItemTitle";
import ListItemCheckbox from "./ListItemCheckbox";
import ListItemButtonLayout from "./ListItemButtonLayout";

interface Props extends HTMLAttributes<HTMLDivElement> {
  type?: "todo" | "complete" | "hold" | "on" | "off";
  children: ReactNode;
}

const ListItem = ({ type = "todo", children, ...props }: Props) => {
  return (
    <div
      css={{
        display: "flex",
        alignItems: "center",
        padding: "0 16px",
        width: "100%",
        maxWidth: "350px",
        minHeight: "40px",
        gap: "32px",
        boxSizing: "border-box",
        border: "1px solid",
        backgroundColor: palette.white,
        userSelect: "none",
        ...TYPE_VARIANTS[type],
      }}
      {...props}
    >
      {children}
    </div>
  );
};

const TYPE_VARIANTS = {
  todo: { color: palette.gray600, borderColor: palette.gray600 },
  complete: { color: palette.green, borderColor: palette.green },
  hold: { color: palette.purple, borderColor: palette.purple },
  on: { color: palette.white, borderColor: palette.gray600, background: palette.gray600 },
  off: { color: palette.gray600, borderColor: palette.gray600 },
};

ListItem.Title = ListItemTitle;
ListItem.ButtonLayout = ListItemButtonLayout;
ListItem.Checkbox = ListItemCheckbox;

export default ListItem;
