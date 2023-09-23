import { useNavigate } from "react-router";

import ReturnIcon from "@assets/redo_icon.svg";
import { Icon, SubText, Title } from "@components/common";

const ChartUserHead = () => {
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
        나의 할 일 통계 <SubText>지금까지 쌓여진 데이터의 통계를 확인합니다.</SubText>
      </Title>
      <Icon src={ReturnIcon} onClick={handleClickReturn}></Icon>
    </div>
  );
};

export default ChartUserHead;
