import { palette } from "@utils/palette";

export const COLOR = [palette.gray100, palette.green, palette.purple, palette.red, palette.blue, palette.yellow];

type TBar = ["average_uncompleted", "average_completed", "average_held"];
export const BAR: TBar = ["average_uncompleted", "average_completed", "average_held"];

type TText = ["total_uncompleted", "total_completed", "total_held"];
export const TEXT: TText = ["total_uncompleted", "total_completed", "total_held"];

export const CHART_TYPE = ["미완료된 할 일", "완료된 할 일", "보류된 할 일"];
