import { Card } from "src/common/components";

import ErrorContent from "./ErrorContent";
import RefetchButton from "./RefetchButton";

interface Props {
  refetch?: () => void;
}

const ErrorCard = ({ refetch }: Props) => {
  return (
    <Card>
      <ErrorContent />
      {refetch && <RefetchButton refetch={refetch} />}
    </Card>
  );
};

export default ErrorCard;
