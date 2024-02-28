import { Alarm } from "../helpers/type";
import AlarmItem from "./item";

interface Props {
  alarms: Alarm[];
}

const AlarmBody = ({ alarms }: Props) => {
  return alarms ? (
    alarms.map(({ content, date }, i) => {
      return (
        <AlarmItem key={i}>
          <AlarmItem.Content>{content}</AlarmItem.Content>
          <AlarmItem.Date date={date} />
        </AlarmItem>
      );
    })
  ) : (
    <></>
  );
};

export default AlarmBody;
