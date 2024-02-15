import { useNavigate } from "react-router";

import { Button } from "@components";
import Section from "./Section";

const UserSetting = () => {
  const navigate = useNavigate();

  const handleClickUserCategory = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate("/mypage/category");
  };

  const handleClickUserMap = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate("/mypage/map");
  };

  return (
    <Section title="사용자 설정">
      <Button onClick={handleClickUserCategory}>카테고리 설정</Button>
      <Button onClick={handleClickUserMap}>나의 장소 설정</Button>
    </Section>
  );
};

export default UserSetting;
