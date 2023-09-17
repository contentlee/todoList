import { palette } from "@utils/palette";

interface Props {
  date?: string;
  children?: React.ReactNode;
}

const AlarmListContainer = ({ date, children }: Props) => {
  return (
    <div
      css={{
        position: "relative",
        padding: "20px",
        width: "100%",
        maxWidth: "350px",
        minHeight: "96px",
        borderBottom: `1px solid ${palette.gray100}`,
        boxSizing: "border-box",
        "&:hover": {
          backgroundColor: palette.gray50,
        },
      }}
    >
      <div
        css={{
          color: palette.gray600,
        }}
      >
        {children}
      </div>
      <div
        css={{
          position: "absolute",
          bottom: "10px",
          right: "10px",
          fontSize: "12px",
          color: palette.gray100,
        }}
      >
        {date}
      </div>
    </div>
  );
};

export default AlarmListContainer;
