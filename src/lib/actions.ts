import { Book } from "./types";

export const getData = (data: FormData) => {
  const nameAuthor = data.get("nameAuthor") as string;
  const lastNameAuthor = data.get("lastNameAuthor") as string;
  const title = data.get("title") as string;
  const publisher = data.get("publisher") as string;
  const year = data.get("year") as string;
  const pageFrom = data.get("pageFrom") as string | null;
  const pageTo = data.get("pageTo") as string | null;

  const newBook: Book = {
    nameAuthor,
    lastNameAuthor,
    title,
    publisher,
    year: Number(year),
    pageFrom: pageFrom ? Number(pageFrom) : undefined,
    pageTo: pageTo ? Number(pageTo) : undefined,
  };

  return newBook;
};
