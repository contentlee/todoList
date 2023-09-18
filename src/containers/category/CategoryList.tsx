import { ResCategory, deleteCategory, getCategories, resisterCategory } from "@api/category";
import { alertAtom } from "@atoms/stateAtom";
import { Button, Icon, Input } from "@components/common";
import { ListContent, ListItem, ListLayout } from "@components/list";
import { palette } from "@utils/palette";
import { useEffect, useState } from "react";
import { useMutation, useQuery } from "react-query";
import { useRecoilState } from "recoil";
import DeleteIcon from "@assets/delete_icon.svg";

const CategoryList = () => {
  const [_, setAlert] = useRecoilState(alertAtom);

  const { data, refetch } = useQuery("category", () => getCategories());
  const { mutate: resisterMutate } = useMutation(resisterCategory);
  const { mutate: deleteMutate } = useMutation(deleteCategory);
  const [categories, setCategories] = useState<ResCategory[]>([]);

  const handleAddCategory = (e: React.MouseEvent<HTMLFormElement>) => {
    e.preventDefault();
    const category = (e.currentTarget[0] as HTMLInputElement).value;
    if (!category) return setAlert({ isOpened: true, type: "warning", children: "이름을 입력해주세요." });
    if (categories.findIndex((v) => v.name === category) >= 0)
      return setAlert({ isOpened: true, type: "warning", children: "중복된 이름이 존재합니다." });

    resisterMutate(
      { category },
      {
        onSuccess: () => {
          setAlert({ isOpened: true, type: "success", children: "데이터를 추가하는데 성공하였습니다." });
          refetch();
        },
        onError: () => {
          setAlert({ isOpened: true, type: "error", children: "데이터를 추가하는데 실패하였습니다." });
        },
      }
    );
  };

  const handleClickDelete = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    deleteMutate(id, {
      onSuccess: () => {
        setAlert({ isOpened: true, type: "success", children: "데이터를 삭제하는데 성공하였습니다." });
        refetch();
      },
      onError: () => {
        setAlert({ isOpened: true, type: "error", children: "데이터를 삭제하는데 실패하였습니다." });
      },
    });
  };

  useEffect(() => {
    if (data) {
      setCategories(data.category);
    }
  }, [data]);
  return (
    <ListLayout>
      <form
        onSubmit={handleAddCategory}
        css={{ display: "flex", flexDirection: "column", width: "100%", margin: "8px 0", gap: "8px" }}
      >
        <div
          css={{
            paddingLeft: "4px",

            fontSize: "12px",
            color: palette.gray200,
          }}
        >
          키테고리 등록
        </div>
        <Input label="이름"></Input>
        <div
          css={{
            display: "flex",
            justifyContent: "flex-end",
            gap: "4px",
          }}
        >
          <Button type="submit">확인</Button>
          <Button type="reset" variant="secondary">
            취소
          </Button>
        </div>
      </form>

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
