import { useNavigate } from "react-router";

import { useLogout, useRemoveUser } from "@api/user";

import { palette } from "@utils/palette";

import { Button } from "@components/common";

const UserBodyContainer = () => {
  const navigate = useNavigate();

  const { mutate: logoutMutate } = useLogout();
  const { mutate: removeUserMutate } = useRemoveUser();

  const handleClickUserChart = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate("/mypage/chart");
  };

  const handleClickUserCategory = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate("/mypage/category");
  };

  const handleClickUserMap = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate("/mypage/map");
  };

  const handleClickRemoveUser = (e: React.MouseEvent) => {
    e.preventDefault();
    removeUserMutate();
  };

  const handleClickLogout = (e: React.MouseEvent) => {
    e.preventDefault();
    logoutMutate();
  };
  return (
    <div
      css={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        gap: "16px",
      }}
    >
      <div
        css={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
        }}
      >
        <span
          css={{
            paddingLeft: "4px",
            marginBottom: "4px",
            fontSize: "12px",
            color: palette.gray200,
          }}
        >
          사용자 정보
        </span>
        <Button onClick={handleClickUserChart}>사용자 통계</Button>
      </div>
      <div
        css={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
        }}
      >
        <span
          css={{
            paddingLeft: "4px",
            marginBottom: "4px",
            fontSize: "12px",
            color: palette.gray200,
          }}
        >
          사용자 설정
        </span>
        <Button onClick={handleClickUserCategory}>카테고리 설정</Button>
        <Button onClick={handleClickUserMap}>나의 장소 설정</Button>
      </div>
      <div
        css={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
        }}
      >
        <span
          css={{
            paddingLeft: "4px",

            marginBottom: "4px",
            fontSize: "12px",
            color: palette.gray200,
          }}
        >
          계정관리
        </span>

        <Button onClick={handleClickLogout}>로그아웃</Button>
        <Button onClick={handleClickRemoveUser}>사용자 정보 삭제(탈퇴)</Button>
      </div>
    </div>
  );
};

export default UserBodyContainer;
