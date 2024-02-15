import { palette } from "@utils/palette";

interface Props {
  count: number;
}
const BarTitle = ({ count }: Props) => {
  return (
    <div css={{ display: "flex", alignItems: "start", justifyContent: "space-between", color: palette.gray600 }}>
      <span>등록된 할 일은 총</span>
      <div>
        <span css={{ fontSize: "32px", fontWeight: "700" }}>{count}</span>
        <span> 건</span>
      </div>
    </div>
  );
};

export default BarTitle;
