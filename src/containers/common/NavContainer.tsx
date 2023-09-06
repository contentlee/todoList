import { useNavigate, useLocation } from "react-router-dom";

import ListIcon from "@assets/list_icon.svg";
import AddIcon from "@assets/add_circle_icon.svg";
import AlramIcon from "@assets/notifications_icon.svg";
import ProfileIcon from "@assets/account_icon.svg";

import { Icon } from "@components/common";
import { NavLayout } from "@components/nav";

import { palette } from "@utils/palette";

const NavContainer = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const handleIconClick = (e: React.MouseEvent<HTMLImageElement>) => {
    e.preventDefault();
    const path = e.currentTarget.alt;

    if (`/${path}` !== location.pathname) {
      navigate(path === "list" ? "/" : path);
    }
  };

  return (
    <NavLayout>
      <Icon src={ListIcon} size="medium" alt="list" onClick={handleIconClick}></Icon>
      <div css={{ width: "24px" }}></div>

      <Icon src={AddIcon} size="add" alt="add" onClick={handleIconClick} css={{ marginBottom: "16px" }}></Icon>

      <div css={{ position: "relative" }}>
        <Icon src={AlramIcon} size="medium" alt="alarm" onClick={handleIconClick} css={{ position: "relative" }}></Icon>
        <div
          css={{
            position: "absolute",
            top: 0,
            right: 0,
            width: "12px",
            height: "12px",
            borderRadius: "50px",
            backgroundColor: palette.sub_red,
          }}
        ></div>
      </div>
      <Icon src={ProfileIcon} size="medium" alt="profile"></Icon>
    </NavLayout>
  );
};

export default NavContainer;
