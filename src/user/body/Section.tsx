import { ReactNode } from "react";
import { palette } from "@utils/palette";

interface Props {
  title: string;
  children: ReactNode;
}

const Section = ({ title, children }: Props) => {
  return (
    <div
      css={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
      }}
    >
      <span
        css={{
          paddingLeft: "4px",
          marginBottom: "4px",
          fontSize: "12px",
          color: palette.gray200,
        }}
      >
        {title}
      </span>
      {children}
    </div>
  );
};

export default Section;
