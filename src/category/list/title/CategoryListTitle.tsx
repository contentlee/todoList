import { palette } from "@utils/palette";

const CategoryListTitle = () => {
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
      키테고리 목록
    </div>
  );
};

export default CategoryListTitle;
