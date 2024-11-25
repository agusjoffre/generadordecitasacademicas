"use client";

import React, { createContext, useState } from "react";
import { Book } from "@/lib/types.d";

export interface BookContextProps {
  book: Book | null;
  setBook: (book: Book) => void;
}

export const BookContext = createContext<BookContextProps | undefined>(
  undefined
);

export const BookProvider = ({ children }: { children: React.ReactNode }) => {
  const [book, setBook] = useState<Book | null>(null);

  return (
    <BookContext.Provider value={{ book, setBook }}>
      {children}
    </BookContext.Provider>
  );
};
