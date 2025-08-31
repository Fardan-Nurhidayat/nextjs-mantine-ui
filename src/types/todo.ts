import type { category } from "./category";
import type { tags } from "./tags";
export type todo = {
  id: string;
  date: Date;
  name: string;
  status: "Plan" | "On Going" | "Done";
  category: category;
  tags: tags[];
};
