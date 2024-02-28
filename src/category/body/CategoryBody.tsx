import { useEffect, useState } from "react";

import { useGetCategories } from "@api/category";

import { Category } from "@utils/types/category";

import CategoryBodyLayout from "./layout";
import CategoryRegister from "./register";
import CategoryList from "./list";

const CategoryBody = () => {
  const { data } = useGetCategories();

  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    if (data) setCategories(data.category);
  }, [data]);

  return (
    <CategoryBodyLayout>
      <CategoryRegister categories={categories} />
      <CategoryList categories={categories} />
    </CategoryBodyLayout>
  );
};

export default CategoryBody;
