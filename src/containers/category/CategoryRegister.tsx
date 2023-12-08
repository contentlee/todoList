import { MouseEvent } from "react";

import { Button, Input } from "@components/common";

import { palette } from "@utils/palette";

interface Props {
  handleAddCategory: (e: MouseEvent<HTMLFormElement>) => void;
}

const CategoryRegister = ({ handleAddCategory }: Props) => {
  return (
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
  );
};

export default CategoryRegister;
