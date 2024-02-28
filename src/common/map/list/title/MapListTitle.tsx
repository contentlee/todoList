import { palette } from "@utils/palette";

const MapListTitle = () => {
  return (
    <div
      css={{
        width: "100%",
        paddingLeft: "4px",

        fontSize: "12px",
        color: palette.gray200,
        boxSizing: "border-box",
      }}
    >
      나의 장소
    </div>
  );
};

export default MapListTitle;
