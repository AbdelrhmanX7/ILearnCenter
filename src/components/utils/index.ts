import { twMerge } from "tailwind-merge";

export const classNames = (...props) => {
  return twMerge(...props);
};
