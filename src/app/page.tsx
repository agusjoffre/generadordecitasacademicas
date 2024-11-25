"use client";
import CitationForm from "@/components/citation-form";
import CitationList from "@/components/citation-list";
import { useBook } from "@/components/useBook";
import { generateAPACitation } from "@/lib/generateAPA";
import { generateChicagoCitation } from "@/lib/generateChicago";
import { generateMLACitation } from "@/lib/generateMLA";
import { Book } from "@/lib/types.d";

export default function Home() {
  const { book: contextBook } = useBook();

  if (!contextBook) {
    return (
      <div className="w-full grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 sm:px-14 md:px-20 lg:px-32 xl:px-48 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col gap-14 row-start-2 items-center sm:items-start w-full xl:w-[800px]">
          <CitationForm />
        </main>
      </div>
    );
  }

  const book: Book = contextBook;

  const {
    narrativeCitation: apaNarrativeCitation,
    reference: apaReference,
    parentheticalCitation: apaParentheticalCitation,
  } = generateAPACitation(book);

  const {
    parentheticalCitation: mlaParentheticalCitation,
    reference: mlaReference,
    narrativeCitation: mlaNarrativeCitation,
  } = generateMLACitation(book);

  const {
    footNote: chicagoFootNote,
    reference: chicagoReference,
    narrativeCitation: chicagoNarrativeCitation,
    parentheticalCitation: chicagoParentheticalCitation,
  } = generateChicagoCitation(book);

  return (
    <div className="w-full grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 sm:px-14 md:px-20 lg:px-32 xl:px-48 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div className="flex items-center justify-center gap-2">
        <h1 className="font-bold italic text-3xl">Bandi Citador</h1>
        <span className="text-3xl">👨‍🎓👩‍🎓</span>
      </div>

      <main className="flex flex-col gap-14 row-start-2 items-center sm:items-start w-full xl:w-[800px]">
        <CitationForm />
        <section className="flex flex-col gap-16">
          <CitationList
            citationStyle={"APA"}
            narrativeCitation={apaNarrativeCitation}
            reference={apaReference}
            parentheticalCitation={apaParentheticalCitation}
          />
          <CitationList
            citationStyle={"Chicago"}
            narrativeCitation={chicagoNarrativeCitation}
            reference={chicagoReference}
            parentheticalCitation={chicagoParentheticalCitation}
            footNote={chicagoFootNote}
          />
          <CitationList
            citationStyle={"MLA"}
            narrativeCitation={mlaNarrativeCitation}
            reference={mlaReference}
            parentheticalCitation={mlaParentheticalCitation}
          />
        </section>
      </main>
    </div>
  );
}
