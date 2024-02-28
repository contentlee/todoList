import { CONSTANT_STR } from "../../helpers/constant";
import { palette } from "@utils/palette";

interface Props {
  type: "todo" | "complete" | "hold";
}

const ListEmptyContent = ({ type }: Props) => {
  return (
    <span
      css={{
        fontSize: "14px",
        fontWeight: "700",
        ...TYPE_VARIANTS[type],
      }}
    >
      {CONSTANT_STR[type].empty}
    </span>
  );
};

const TYPE_VARIANTS = {
  todo: {
    color: palette.gray600,
  },
  complete: {
    color: palette.green,
  },
  hold: {
    color: palette.purple,
  },
};

export default ListEmptyContent;
