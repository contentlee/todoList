import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const ListTabLayout = ({ children }: Props) => {
  return (
    <fieldset
      css={{
        display: "flex",
        justifyContent: "center",
        gap: "4px",
        margin: "4px",
      }}
    >
      {children}
    </fieldset>
  );
};

export default ListTabLayout;
