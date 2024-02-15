import { Input } from "@components";

interface Props {
  title?: string;
}
const InputTitle = ({ title = "" }: Props) => {
  return <Input label="제목" defaultValue={title}></Input>;
};

export default InputTitle;
