interface Props {
  value: string;
}
const SelectInput = ({ value }: Props) => {
  return <input css={{ display: "none" }} value={value} readOnly />;
};

export default SelectInput;
