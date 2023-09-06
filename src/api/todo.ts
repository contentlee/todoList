import { http } from "@lib/api";

export const getTodos = async () =>
  await http.get("todo/20230831/0").then((data) => {
    console.log(data);
    return data;
  });
