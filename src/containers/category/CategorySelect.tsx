import { useEffect, useState } from "react";
import { Select } from "@components/common";
import { useMutation, useQuery } from "react-query";
import { getCategories, resisterCategory } from "@api/category";
import { useRecoilState } from "recoil";
import { alertAtom } from "@atoms/stateAtom";

interface Props {
  category?: string;
}

const CategorySelect = ({ category = "" }: Props) => {
  const [_, setAlert] = useRecoilState(alertAtom);

  const { data, refetch } = useQuery("category", () => getCategories());

  const { mutate } = useMutation(resisterCategory);

  const [options, setOptions] = useState<string[]>([]);

  const handleAddOption = (e: React.MouseEvent, category: string) => {
    e.preventDefault();
    if (!category) return setAlert({ isOpened: true, type: "warning", children: "이름을 입력해주세요." });
    if (options.includes(category))
      return setAlert({ isOpened: true, type: "warning", children: "중복된 이름이 존재합니다." });

    mutate(
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

  useEffect(() => {
    if (data) {
      setOptions(data.category.map((v) => v.name));
    }
  }, [data]);

  return <Select type="add" label="분류" value={category} option={options} handleAddOption={handleAddOption}></Select>;
};

export default CategorySelect;
