import { useNavigate } from "react-router";
import { useMutation } from "react-query";
import { useRecoilState, useResetRecoilState } from "recoil";

import { logout, removeUser } from "@api/user";

import { userAtom } from "@atoms/userAtom";
import { alertAtom } from "@atoms/stateAtom";

import { palette } from "@utils/palette";

import { Button } from "@components/common";

const UserBodyContainer = () => {
  const navigate = useNavigate();

  const [_, setAlert] = useRecoilState(alertAtom);
  const resetUser = useResetRecoilState(userAtom);

  const { mutate: logoutMutate } = useMutation(logout);
  const { mutate: removeUserMutate } = useMutation(removeUser);

  const handleClickEditCategory = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate("/mypage/category");
  };

  const handleClickRemoveUser = (e: React.MouseEvent) => {
    e.preventDefault();
    removeUserMutate("", {
      onSuccess: () => {
        resetUser();
        navigate("/");
        setAlert({ isOpened: true, type: "success", children: "사용자의 정보가 모두 삭제되었습니다." });
      },
      onError: () => {
        setAlert({ isOpened: true, type: "error", children: "요청이 실패하였습니다." });
      },
    });
  };

  const handleClickLogout = (e: React.MouseEvent) => {
    e.preventDefault();
    logoutMutate("", {
      onSuccess: () => {
        resetUser();
        navigate("/");
        setAlert({ isOpened: true, type: "success", children: "로그아웃에 성공하였습니다." });
      },
      onError: () => {
        setAlert({ isOpened: true, type: "success", children: "로그아웃에 실패하였습니다." });
      },
    });
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
        <Button>사용자 통계</Button>
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
        <Button onClick={handleClickEditCategory}>카테고리 설정</Button>
        <Button>나의 장소 설정</Button>
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
