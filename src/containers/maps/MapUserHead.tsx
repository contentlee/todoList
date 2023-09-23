import { useNavigate } from "react-router";
import ReturnIcon from "@assets/redo_icon.svg";
import { Icon, SubText, Title } from "@components/common";

const MapUserHead = () => {
  const navigate = useNavigate();

  const handleClickReturn = () => {
    navigate(-1);
  };
  return (
    <div
      css={{
        display: "flex",
        justifyContent: "space-between",
        width: "100%",
      }}
    >
      <Title>
        나의 장소 설정 <SubText>등록된 장소를 관리합니다.</SubText>
      </Title>
      <Icon src={ReturnIcon} onClick={handleClickReturn}></Icon>
    </div>
  );
};

export default MapUserHead;
