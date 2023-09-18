export const makeDay = (date: number[] = []) => {
  return new Date(date[0], date[1] - 1, date[2]).getDay();
};

export const makeDate = (d: Date) => {
  return [d.getFullYear(), d.getMonth() + 1, d.getDate()];
};

export const makeDateList = ([y, m]: number[]) => {
  const prevLast = new Date(y, m - 1, 0).getDate();
  const curLast = new Date(y, m, 0).getDate();
  const curDay = new Date(y, m - 1, 1).getDay();
  const lastDay = new Date(y, m, 0).getDay();

  return [
    Array.from({ length: curDay }, (_, i) => prevLast - curDay + i + 1),
    Array.from({ length: curLast }, (_, i) => i + 1),
    Array.from({ length: 6 - lastDay }, (_, i) => i + 1),
  ];
};

export const setDateToText = (date: string) => {
  return date.split("T")[0].split("-").join(".");
};
export const setDateToArray = (date: string) => {
  return date
    .split("T")[0]
    .split("-")
    .map((v) => +v);
};

export const setArrayToText = ([y, m, d]: number[]) => {
  const month = m < 10 ? `0${m}` : m;

  if (d) {
    const date = d < 10 ? `0${d}` : d;
    return `${y}.${month}.${date}`;
  }

  if (m) {
    return `${y}.${month}`;
  }

  return `${y}`;
};

export const setStringToArray = (d: string) => {
  return d
    .split(" ")[0]
    .split("-")
    .map((v) => +v);
};

export const setArrayToPath = ([y, m, d]: number[]) => {
  const month = m < 10 ? `0${m}` : m;
  const date = d < 10 ? `0${d}` : d;
  return `${y}${month}${date} `;
};

export const setPathToArray = (date: string) => {
  const y = parseInt(date.slice(0, 4));
  const m = parseInt(date.slice(4, 6));
  const d = parseInt(date.slice(6));
  return [y, m, d];
};

type TState = "basic" | "selected" | "today";
type TType = "sat" | "sun" | "etc" | "basic";

export const setDateProps = ([y, m, d]: number[], day: number, [sy, sm, sd]: number[]): [TState, TType] => {
  let state: TState = "basic";

  const today = new Date();

  let [ty, tm, td] = [today.getFullYear(), today.getMonth() + 1, today.getDate()];
  if (y === sy && m === sm && d === sd) {
    state = "selected";
  } else if (y === ty && m === tm && d === td) {
    state = "today";
  }

  let type: TType = "basic";

  const temp = (day + (d % 7)) % 7;
  if (temp === 0) {
    type = "sat";
  } else if (temp === 1) {
    type = "sun";
  }

  return [state, type];
};
