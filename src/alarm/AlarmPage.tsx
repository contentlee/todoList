import { useEffect, useState } from "react";

import AlarmHead from "./head";
import AlarmBody from "./body";

import { Alarm } from "./helpers/type";
import { PageLayout } from "@components";

const DEFAULT_LIST = [
  { content: "오늘의 할일을 무사히 끝내셨네요!", date: "2023-09-12" },
  { content: "오늘의 할일을 무사히 끝내셨네요!", date: "2023-09-12" },
];

const AlarmPage = () => {
  const [alarms, setAlarms] = useState<Alarm[]>([]);

  useEffect(() => {
    setAlarms(DEFAULT_LIST);
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
      <AlarmBody alarms={alarms} />
    </PageLayout>
  );
};

export default AlarmPage;
