import CalendarIcon from "../assets/calendar_icon.svg";
import { Icon, Input, PageLayout, TextArea } from "../components";
import NavContainer from "../containers/NavContainer";

const AddTodoPage = () => {
  return (
    <PageLayout>
      <Input label="제목">
        <Icon src={CalendarIcon}></Icon>
      </Input>

      <TextArea label="제목"></TextArea>

      <NavContainer></NavContainer>
    </PageLayout>
  );
};
