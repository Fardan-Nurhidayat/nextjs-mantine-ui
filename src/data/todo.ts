import { tag } from "./tags";
import { categories } from "./category";
import type { todo } from "@/types/todo";
export const todos: todo[] = [
  {
    id: "1",
    date: new Date("2023-10-01"),
    name: "Finish project report",
    status: "On Going",
    category: categories[0],
    tags: [tag[0], tag[2]],
  },
  {
    id: "2",
    date: new Date("2023-10-05"),
    name: "Grocery shopping",
    status: "Plan",
    category: categories[2],
    tags: [tag[3]],
  },
  {
    id: "3",
    date: new Date("2023-09-28"), 
    name: "Doctor appointment",
    status: "Done",
    category: categories[1],
    tags: [tag[1], tag[0]],
  },
];