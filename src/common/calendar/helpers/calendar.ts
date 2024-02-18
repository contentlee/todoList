export const makeDate = (d: Date) => {
  return [d.getFullYear(), d.getMonth() + 1, d.getDate()];
};

export const makeDates = ([y, m]: number[]) => {
  let [py, pm] = [y, m - 1];
  if (pm < 0) [py, pm] = [y - 1, 11];

  let [ny, nm] = [y, m + 1];
  if (nm > 12) [ny, nm] = [y + 1, 1];

  const prevLast = new Date(py, pm, 0).getDate();
  const curLast = new Date(y, m, 0).getDate();

  const firstDay = new Date(y, m - 1, 1).getDay();
  const lastDay = new Date(y, m, 0).getDay();

  return [
    ...Array.from({ length: firstDay }, (_, i) => [py, pm, prevLast - firstDay + 1 + i]),
    ...Array.from({ length: curLast }, (_, i) => [y, m, i + 1]),
    ...Array.from({ length: 6 - lastDay }, (_, i) => [ny, nm, i + 1]),
  ];
};

export const makeDateState = (date: number[], selected: number[]) => {
  const today = new Date();
  const todayArray = [today.getFullYear(), today.getMonth() + 1, today.getDate()];

  if (_isEqualDate(date, selected)) return "selected";
  if (_isEqualDate(date, todayArray)) return "today";

  return "basic";
};

export const makeDateType = (value: number[], view: number[]) => {
  const [y, m, d] = value;
  const [_, vm] = view;
  if (m !== vm) return "etc";

  const day = new Date(y, m - 1, d).getDay();
  if (day === 0) return "sun";
  if (day === 6) return "sat";

  return "basic";
};

export const makeMonthState = (date: number[], view: number[]) => {
  const today = new Date();
  const todayArray = [today.getFullYear(), today.getMonth() + 1, today.getDate()];

  if (_isEqualDate(date, view)) return "selected";
  if (_isEqualDate(date, todayArray)) return "current";
  return "non_selected";
};

const _isEqualDate = (date1: number[], date2: number[]) => {
  return date1.every((d, i) => d === date2[i]);
};

export const calculateMonth = (date: number[], plus: number) => {
  const month = date[1] + plus;
  if (month <= 0) return [date[0] - 1, 12];
  if (month > 12) return [date[0] + 1, 1];
  return [date[0], month];
};

export const changeArrayToText = ([y, m, d]: number[]) => {
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
