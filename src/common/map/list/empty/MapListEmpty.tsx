import { palette } from "@utils/palette";

const MapListEmpty = () => {
  return (
    <div
      css={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "200px",
        fontSize: "12px",
        color: palette.gray200,
      }}
    >
      등록된 장소가 존재하지 않습니다.
    </div>
  );
};

export default MapListEmpty;
