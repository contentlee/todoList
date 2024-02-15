import { ReactNode } from "react";
import AlarmIcon from "./AlarmIcon";
import AlarmFlag from "./AlarmFlag";

interface Props {
  changePath: (path: string) => void;
}

const AlarmButton = ({ changePath }: Props) => {
  return (
    <div css={{ position: "relative" }}>
      <AlarmIcon changePath={changePath} />
      <AlarmFlag />
    </div>
  );
};

export default AlarmButton;
