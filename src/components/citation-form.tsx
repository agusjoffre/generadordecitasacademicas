"use client";

import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { getData } from "@/lib/actions";
import { useBook } from "./useBook";

const CitationForm = () => {
  const { setBook } = useBook();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.target as HTMLFormElement);

    console.log(formData);

    const newBook = getData(formData);

    setBook(newBook);
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Generate citation</CardTitle>
        <CardDescription>
          Fill the form with the information of the book you want to cite
        </CardDescription>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent className="grid gap-4 py-4">
          <Label className="flex flex-col gap-2">
            <span>Name of the author</span>
            <Input placeholder="Jorge Luis" name="nameAuthor" required />
          </Label>
          <Label className="flex flex-col gap-2">
            <span>Last name of the author</span>
            <Input placeholder="Borges" name="lastNameAuthor" required />
          </Label>
          <Label className="flex flex-col gap-2">
            <span>Title</span>
            <Input
              className="w-full"
              placeholder="Historia Universal de la Infamia"
              name="title"
              required
            />
          </Label>
          <Label className="flex flex-col gap-2">
            <span>Year of publication</span>
            <Input
              className="w-full"
              placeholder="1998"
              name="year"
              type="number"
              required
            />
          </Label>
          <Label className="flex flex-col gap-2">
            <span>Publisher</span>
            <Input
              className="w-full"
              placeholder="Alianza Editorial"
              name="publisher"
              required
            />
          </Label>
          <Label className="flex flex-col gap-2">
            <span>Page from:</span>
            <Input
              className="w-full"
              placeholder="17"
              name="pageFrom"
              type="number"
            />
            <pre className="text-xs text-destructive">Optional</pre>
          </Label>
          <Label className="flex flex-col gap-2">
            <span>Page to:</span>
            <Input
              className="w-full"
              placeholder="25"
              name="pageTo"
              type="number"
            />
            <pre className="text-xs text-destructive">Optional</pre>
          </Label>
        </CardContent>
        <CardFooter>
          <Button type="submit">Generate</Button>
        </CardFooter>
      </form>
    </Card>
  );
};

export default CitationForm;
