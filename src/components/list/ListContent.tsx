import { HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

const ListContent = ({ children, ...props }: Props) => {
  return (
    <div
      css={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        marginTop: "8px",
        paddingBottom: "24px",
        gap: "10px",
        overflow: "auto",
        WebkitScrollSnapType: "y",
      }}
      {...props}
    >
      {children}
    </div>
  );
};

export default ListContent;
