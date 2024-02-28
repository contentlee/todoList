import { palette } from "@utils/palette";

const CategoryListEmpty = () => {
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
      카테고리가 존재하지 않습니다.
    </div>
  );
};

export default CategoryListEmpty;
