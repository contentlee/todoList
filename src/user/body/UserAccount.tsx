import { useLogout, useRemoveUser } from "@api/user";

import { Button } from "@components";
import Section from "./Section";

const UserAccount = () => {
  const { mutate: logoutMutate } = useLogout();
  const { mutate: removeUserMutate } = useRemoveUser();

  const handleClickRemoveUser = (e: React.MouseEvent) => {
    e.preventDefault();
    removeUserMutate();
  };

  const handleClickLogout = (e: React.MouseEvent) => {
    e.preventDefault();
    logoutMutate();
  };

  return (
    <Section title="계정관리">
      <Button onClick={handleClickLogout}>로그아웃</Button>
      <Button onClick={handleClickRemoveUser}>사용자 정보 삭제(탈퇴)</Button>
    </Section>
  );
};

export default UserAccount;
