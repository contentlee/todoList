import CategoryListLayout from "./layout";
import CategoryListTitle from "./title";
import CategoryListEmpty from "./empty";
import CategoryItem from "./item";

import { Category } from "@utils/types/category";

interface Props {
  categories: Category[];
}

const CategoryList = ({ categories }: Props) => {
  const isValuable = categories.length > 0 ? true : false;
  return (
    <CategoryListLayout>
      <CategoryListTitle />
      {!isValuable && <CategoryListEmpty />}
      {isValuable &&
        categories.map(({ id, name }) => {
          return (
            <CategoryItem key={name}>
              <CategoryItem.Title name={name} />
              <CategoryItem.Delete id={id} />
            </CategoryItem>
          );
        })}
    </CategoryListLayout>
  );
};

export default CategoryList;
