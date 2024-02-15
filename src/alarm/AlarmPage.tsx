import { useEffect, useState } from "react";

import { PageLayout } from "@components";
import AlarmItem from "./body";
import AlarmHead from "./head";

interface Item {
  content: string;
  date: string;
}
const DEFAULT_LIST = [
  { content: "오늘의 할일을 무사히 끝내셨네요!", date: "2023-09-12" },
  { content: "오늘의 할일을 무사히 끝내셨네요!", date: "2023-09-12" },
];

const AlarmPage = () => {
  const [list, setList] = useState<Item[]>();

  useEffect(() => {
    setList(DEFAULT_LIST);
  }, []);

  return (
    <PageLayout
      css={{
        width: "100%",
        padding: 0,
        margin: "0",
      }}
    >
      <AlarmHead />
      {list?.map(({ content, date }) => {
        return (
          <AlarmItem>
            <AlarmItem.Content>{content}</AlarmItem.Content>
            <AlarmItem.Date date={date} />
          </AlarmItem>
        );
      })}
    </PageLayout>
  );
};

export default AlarmPage;
