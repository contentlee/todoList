import { useNavigate } from "react-router";

import { Button } from "@components";
import Section from "./Section";

const UserInfo = () => {
  const navigate = useNavigate();

  const handleClickUserChart = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate("/mypage/chart");
  };

  return (
    <Section title="사용자 정보">
      <Button onClick={handleClickUserChart}>사용자 통계</Button>
    </Section>
  );
};

export default UserInfo;
