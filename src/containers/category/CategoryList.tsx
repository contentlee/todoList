import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";

import DeleteIcon from "@assets/delete_icon.svg";

import { ResCategory, useDeleteCategory, useGetCategories, useRegisterCategory } from "@api/category";

import { alertAtom } from "@atoms/stateAtom";

import { palette } from "@utils/palette";

import { Icon } from "@components/common";
import { ListContent, ListItem, ListLayout } from "@components/list";
import CategoryRegister from "./CategoryRegister";

const CategoryList = () => {
  const [_, setAlert] = useRecoilState(alertAtom);

  const { data } = useGetCategories();
  const { mutate: resisterMutate } = useRegisterCategory();
  const { mutate: deleteMutate } = useDeleteCategory();

  const [categories, setCategories] = useState<ResCategory[]>([]);

  const handleAddCategory = (e: React.MouseEvent<HTMLFormElement>) => {
    e.preventDefault();
    const category = (e.currentTarget[0] as HTMLInputElement).value;
    if (!category) return setAlert({ isOpened: true, type: "warning", children: "이름을 입력해주세요." });
    if (categories.some((v) => v.name === category))
      return setAlert({ isOpened: true, type: "warning", children: "중복된 이름이 존재합니다." });

    resisterMutate({ category });
  };

  const handleClickDelete = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    deleteMutate(id);
  };

  useEffect(() => {
    if (data) setCategories(data.category);
  }, [data]);

  return (
    <ListLayout>
      <CategoryRegister handleAddCategory={handleAddCategory} />

      <hr
        css={{
          width: "100%",
          boxSizing: "border-box",
        }}
      ></hr>

      <ListContent>
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

        {categories.length === 0 && (
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
        )}

        {categories.map((item) => {
          return (
            <ListItem key={item.id}>
              <div
                css={{
                  flex: "1",
                  display: "flex",
                  alignItems: "center",
                  height: "100%",
                  fontSize: "12px",
                  fontWeight: "700",
                }}
              >
                {item.name}
              </div>
              <div css={{ display: "flex", gap: "8px" }}>
                <Icon src={DeleteIcon} alt="delete" onClick={(e) => handleClickDelete(e, item.id)}></Icon>
              </div>
            </ListItem>
          );
        })}
      </ListContent>
    </ListLayout>
  );
};

export default CategoryList;
