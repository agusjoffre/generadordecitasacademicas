import { Book } from "./types";

export const generateMLACitation = (book: Book) => {
  const reference = `${book.nameAuthor} ${book.lastNameAuthor}. "${book.title}". ${book.publisher}. ${book.year}.`;
  const narrativeCitation =
    book.pageFrom && book.pageTo
      ? `${book.lastNameAuthor} (${book.pageFrom} - ${book.pageTo})`
      : !book.pageTo && book.pageFrom
      ? `${book.lastNameAuthor} (${book.pageFrom})`
      : `${book.lastNameAuthor}`;
  const parentheticalCitation = `(${book.lastNameAuthor} ${
    book.pageTo && book.pageFrom
      ? `${book.pageFrom}-${book.pageTo})`
      : (book.pageFrom && `${book.pageFrom})`) || `)`
  }`;

  return {
    reference,
    narrativeCitation,
    parentheticalCitation,
  };
};
