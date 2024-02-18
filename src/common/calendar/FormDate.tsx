import { useState } from "react";

import { makeDate } from "@utils/datepiacker";

import { Calendar } from ".";
import { FormDateInput } from "./input";

interface Props {
  date?: number[];
}

const TODAY = makeDate(new Date());

const FormDate = ({ date = TODAY }: Props) => {
  const [isOpened, setOpened] = useState<boolean>(false);
  const toggleOpened = () => {
    setOpened(!isOpened);
  };

  const [selected, setSelected] = useState(date);
  const selectDate = (date: number[]) => {
    setSelected(date);
    setOpened(!isOpened);
  };

  return (
    <div>
      <FormDateInput selected={selected} toggleOpened={toggleOpened} />
      {isOpened && <Calendar selected={selected} selectDate={selectDate} toggleOpened={toggleOpened} />}
    </div>
  );
};

export default FormDate;
