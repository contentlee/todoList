export const DAY_OF_WEEK = ["일", "월", "화", "수", "목", "금", "토"];

export const TYPE_STR: ("todo" | "complete" | "hold")[] = ["todo", "complete", "hold"];

export const CONSTANT_STR = {
  todo: {
    type: "todo",
    empty: "오늘 계획된 할 일이 존재하지 않습니다.",
    tab: "TO DO",
    title: "오늘 내가 해야할 일은",
  },
  complete: {
    type: "complete",
    empty: "오늘 완료된 일이 존재하지 않습니다.",
    tab: "COMPELTE",
    title: "오늘 내가 완료한 할 일은",
  },
  hold: {
    type: "hold",
    empty: "보류 중인 일이 존재하지 않습니다.",
    tab: "HOLD",
    title: "보류 중인 할일은",
  },
};

export const CATEGORY = ["일상", "과제"];
