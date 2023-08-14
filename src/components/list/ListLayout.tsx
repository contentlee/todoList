import { palette } from "../../utils/palette";

interface Props {
  type?: "todo" | "complete" | "hold";
  children?: React.ReactNode;
}

const ListLayout = ({ type = "todo", children }: Props) => {
  return (
    <div
      css={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        minWidth: "100%",
        overflow: "auto",
        boxSizing: "border-box",
      }}
    >
      <div
        css={{
          position: "absolute",
          display: "flex",
          flexShrink: 0,

          justifyContent: "center",
          width: "100%",
          padding: "24px",
          paddingBottom: 0,
          boxSizing: "border-box",
        }}
      >
        <div
          css={{
            width: "100%",
            maxWidth: "300px",
            border: "1px solid",
            boxSizing: "border-box",
            ...TYPE_VARIANTS[type],
          }}
        ></div>
      </div>

      {children}
    </div>
  );
};

const TYPE_VARIANTS = {
  todo: {
    borderColor: palette.gray100,
  },
  complete: {
    borderColor: palette.sub_green,
  },
  hold: {
    borderColor: palette.sub_purple,
  },
};
export default ListLayout;
