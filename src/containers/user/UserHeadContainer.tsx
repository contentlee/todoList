import { useRecoilValue } from "recoil";

import { userAtom } from "@atoms/userAtom";

import { palette } from "@utils/palette";

const UserHeadContainer = () => {
  const { email, name } = useRecoilValue(userAtom);

  return (
    <div
      css={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        width: "100%",
        gap: "10px",
      }}
    >
      <div
        css={{
          display: "flex",
          flexDirection: "column",
          gap: "4px",
        }}
      >
        <div
          css={{
            color: palette.gray400,
          }}
        >
          환영합니다!
        </div>
        <div>
          <div
            css={{
              fontSize: "24px",
              color: palette.gray600,
            }}
          >
            <b>{name}</b> 님
          </div>
          <div
            css={{
              fontSize: "12px",
              color: palette.gray200,
            }}
          >
            {email}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserHeadContainer;
