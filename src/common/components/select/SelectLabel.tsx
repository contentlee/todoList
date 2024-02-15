import { palette } from "@utils/palette";

interface Props {
  label?: string;
}
const SelectLabel = ({ label }: Props) => {
  if (!label) return <></>;
  return (
    <label
      css={{
        fontSize: "12px",
        fontWeight: 700,
        color: palette.gray600,
      }}
    >
      {label}
    </label>
  );
};

export default SelectLabel;
