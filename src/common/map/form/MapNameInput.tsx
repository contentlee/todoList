import { Input } from "@components";

interface Props {
  name?: string;
}
const MapNameInput = ({ name = "" }: Props) => {
  return <Input label="이름" defaultValue={name} />;
};

export default MapNameInput;
