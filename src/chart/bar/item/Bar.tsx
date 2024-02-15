import { COLOR } from "../../helpers/constants";

interface Props {
  index: number;
}
const Bar = ({ index }: Props) => {
  return (
    <div
      css={{
        width: " 100%",
        height: "50%",
        background: COLOR[index],
        transform: "scale(100%)",
        transition: ".5s",
      }}
    />
  );
};

export default Bar;
