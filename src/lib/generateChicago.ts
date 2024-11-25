import { Book } from "./types";

export const generateChicagoCitation = (book: Book) => {
  const reference = `${book.lastNameAuthor}, ${book.nameAuthor}. "${book.title}". ${book.publisher}, ${book.year}.`;
  const footNote =
    book.pageFrom && book.pageTo
      ? `${book.nameAuthor} ${book.lastNameAuthor}, "${book.title}" (${book.publisher}, ${book.year}), ${book.pageFrom} - ${book.pageTo}`
      : !book.pageTo && book.pageFrom
      ? `${book.nameAuthor} ${book.lastNameAuthor}, "${book.title}" (${book.publisher}, ${book.year}), ${book.pageFrom}}`
      : `${book.nameAuthor} ${book.lastNameAuthor}, "${book.title}" (${book.publisher}, ${book.year})`;

  const parentheticalCitation =
    book.pageFrom && book.pageTo
      ? `(${book.lastNameAuthor} ${book.year}, ${book.pageFrom}-${book.pageTo})`
      : !book.pageTo && book.pageFrom
      ? `(${book.lastNameAuthor} ${book.year}, ${book.pageFrom})`
      : `(${book.lastNameAuthor} ${book.year})`;

  const narrativeCitation =
    book.pageFrom && book.pageTo
      ? `${book.lastNameAuthor} (${book.year}, ${book.pageFrom}-${book.pageTo})`
      : !book.pageTo && book.pageFrom
      ? `${book.lastNameAuthor} (${book.year}, ${book.pageFrom})`
      : `${book.lastNameAuthor} (${book.year})`;

  return {
    reference,
    footNote,
    narrativeCitation,
    parentheticalCitation,
  };
};
