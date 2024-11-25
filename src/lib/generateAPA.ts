import { Book } from "@/lib/types.d";

export const generateAPACitation = (book: Book) => {
  const formattedAuthor = `${book.lastNameAuthor}, ${book.nameAuthor
    .split(" ")
    .map((name) => name.charAt(0).toUpperCase() + ".")
    .join(" ")}`;

  const reference = `${formattedAuthor}. (${book.year}). "${book.title}". ${book.publisher}.`;
  const narrativeCitation =
    book.pageFrom && book.pageTo
      ? `${book.lastNameAuthor} (${book.year}, pp. ${book.pageFrom}-${book.pageTo})`
      : !book.pageTo && book.pageFrom
      ? `${book.lastNameAuthor} (${book.year}, p. ${book.pageFrom})`
      : `${book.lastNameAuthor} (${book.year})`;

  const parentheticalCitation =
    book.pageFrom && book.pageTo
      ? `(${book.lastNameAuthor}, ${book.year}, pp. ${book.pageFrom}-${book.pageTo})`
      : !book.pageTo && book.pageFrom
      ? `(${book.lastNameAuthor}, ${book.year}, p. ${book.pageFrom})`
      : `(${book.lastNameAuthor}, ${book.year})`;

  return {
    reference,
    narrativeCitation,
    parentheticalCitation,
  };
};
