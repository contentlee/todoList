import { ReactNode } from "react";
import OptionsValue from "./OptionsValue";
import OptionsList from "./OptionsList";
import OptionsListItem from "./OptionsListItem";
import OptionsAdd from "./OptionsAdd";

interface Props {
  children: ReactNode;
}

const Options = ({ children }: Props) => {
  return (
    <div
      css={{
        position: "relative",

        flex: 1,
        display: "flex",
        width: "100%",
        height: "100%",
        paddingRight: "16px",
        cursor: "pointer",
        gap: "20px",

        "&:focus": {
          background: "#000",
        },
      }}
    >
      {children}
    </div>
  );
};

Options.Value = OptionsValue;
Options.List = OptionsList;
Options.Item = OptionsListItem;
Options.Add = OptionsAdd;

export default Options;
