import CheckIcon from "../assets/check_icon.svg";
import ErrorIcon from "../assets/error_icon.svg";
import LocationIcon from "../assets/share_location_icon.svg";
import CalendarIcon from "../assets/calendar_icon.svg";
import ArrowIcon from "../assets/expand_more_icon.svg";
import { Button, Form, Icon, Input, PageLayout, TextArea } from "../components";

const EditTodoPage = () => {
  return (
    <PageLayout>
      <h1>할일 생성하기</h1>
      <Form>
        <Input label="제목"></Input>
        <Input label="장소">
          <Icon src={LocationIcon}></Icon>
        </Input>
        <Input label="날짜">
          <Icon src={CalendarIcon}></Icon>
        </Input>
        <Input label="분류">
          <Icon src={ArrowIcon}></Icon>
        </Input>
        <TextArea label="내용"></TextArea>

        <div css={{ display: "flex", justifyContent: "end", gap: "10px" }}>
          <Button>뒤로가기</Button>
          <Button variant="secondary" type="submit">
            제출
          </Button>
        </div>
      </Form>
    </PageLayout>
  );
};

export default EditTodoPage;
