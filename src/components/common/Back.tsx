import { HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLDivElement> {}

const Back = ({ ...props }: Props) => {
  return (
    <div
      css={{
        position: "absolute",
        width: "100%",
        height: "100%",
        opacity: "30%",
      }}
      {...props}
    ></div>
  );
};

export default Back;
