import { Icon, NavLayout } from "../components";
import ListIcon from "../assets/list_icon.svg";
import AddIcon from "../assets/add_circle_icon.svg";
import AlramIcon from "../assets/notifications_icon.svg";
import ProfileIcon from "../assets/account_icon.svg";
import { palette } from "../utils/palette";

const NavContainer = () => {
  return (
    <NavLayout>
      <Icon src={ListIcon} size="medium" alt="list"></Icon>
      <div css={{ width: "24px" }}></div>

      <Icon src={AddIcon} size="add" alt="list" css={{ marginBottom: "16px" }}></Icon>

      <div css={{ position: "relative" }}>
        <Icon src={AlramIcon} size="medium" alt="list" css={{ position: "relative" }}></Icon>
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
      <Icon src={ProfileIcon} size="medium" alt="list"></Icon>
    </NavLayout>
  );
};

export default NavContainer;
