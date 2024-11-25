import { useContext } from "react";
import { BookContext, BookContextProps } from "./context";

export const useBook = (): BookContextProps => {
  const context = useContext(BookContext);
  if (!context) {
    throw new Error("useBook must be used within a BookProvider");
  }
  return context;
};
