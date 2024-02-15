import { useEffect, useState } from "react";

import { useGetCategories } from "@api/category";
import { PageLayout } from "@components";

import CategoryHead from "./head";
import CategoryBody from "./body";

import { Category } from "@utils/types/category";

const UserCategoryPage = () => {
  const { data } = useGetCategories();

  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    if (data) setCategories(data.category);
  }, [data]);

  return (
    <PageLayout css={{ gap: "10px" }}>
      <CategoryHead>
        <CategoryHead.Title />
        <CategoryHead.Back />
      </CategoryHead>
      <CategoryBody>
        <CategoryBody.Register categories={categories} />
        <CategoryBody.List categories={categories} />
      </CategoryBody>
    </PageLayout>
  );
};

export default UserCategoryPage;
