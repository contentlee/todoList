import { HTMLAttributes, useEffect, useState } from "react";
import { useRecoilState } from "recoil";

import { useGetCategories, useRegisterCategory } from "@api/category";

import { alertAtom } from "@atoms/stateAtom";

import { Select } from "@components/common";

interface Props extends HTMLAttributes<typeof Select> {
  value?: string;
}

const CategorySelect = ({ value }: Props) => {
  const [_, setAlert] = useRecoilState(alertAtom);

  const { data } = useGetCategories();

  const { mutate } = useRegisterCategory();

  const [options, setOptions] = useState<string[]>([]);

  const handleAddOption = (e: React.MouseEvent, category: string) => {
    e.preventDefault();
    if (!category) return setAlert({ isOpened: true, type: "warning", children: "이름을 입력해주세요." });
    if (options.includes(category))
      return setAlert({ isOpened: true, type: "warning", children: "중복된 이름이 존재합니다." });

    mutate({ category });
  };

  useEffect(() => {
    if (data) {
      setOptions(data.category.map((v) => v.name));
    }
  }, [data]);

  return <Select type="add" label="분류" value={value} option={options} handleAddOption={handleAddOption}></Select>;
};

export default CategorySelect;
