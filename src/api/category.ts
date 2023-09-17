import { http } from "./api";

export interface ResCategory {
  id: string;
  name: string;
}

export interface ReqpCategory {
  category: string;
}

export interface ResCategories {
  email: string;
  category: ResCategory[];
}

export const getCategories = async (): Promise<ResCategories> => await http.get("category/");
export const resisterCategory = async (category: ReqpCategory) => await http.post("category/add", category);
export const deleteCategory = async (id: number) => await http.delete(`category/delete/${id}`);
