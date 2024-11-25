type Props = {
  citationStyle: "APA" | "Chicago" | "MLA";
  reference: string;
  narrativeCitation: string;
  parentheticalCitation: string;
  footNote?: string;
};

const CitationList = ({
  citationStyle,
  reference,
  narrativeCitation,
  parentheticalCitation,
  footNote,
}: Props) => {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-2xl font-bold text-center">{citationStyle}</h2>
      <ul className="flex flex-col gap-4 w-full">
        <li className="flex flex-col gap-2">
          <strong>Narrative Citation</strong>
          {narrativeCitation}
        </li>
        <li className="flex flex-col gap-2">
          <strong>Reference Citation</strong>
          {reference}
        </li>
        <li className="flex flex-col gap-2">
          <strong>Parenthetical Citation</strong>
          {parentheticalCitation}
        </li>
        {footNote && (
          <li className="flex flex-col gap-2">
            <strong>Footnote Citation</strong>
            {footNote}
          </li>
        )}
      </ul>
    </div>
  );
};

export default CitationList;
