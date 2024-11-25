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
        <CardTitle>Generador de citas academicas</CardTitle>
        <CardDescription>
          Llena el siguiente formulario para generar una cita academica en APA,
          MLA o Chicago
        </CardDescription>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent className="grid gap-4 py-4">
          <Label className="flex flex-col gap-2">
            <span>Nombre del autor</span>
            <Input placeholder="Jorge Luis" name="nameAuthor" required />
          </Label>
          <Label className="flex flex-col gap-2">
            <span>Apellido del autor</span>
            <Input placeholder="Borges" name="lastNameAuthor" required />
          </Label>
          <Label className="flex flex-col gap-2">
            <span>Titulo del texto</span>
            <Input
              className="w-full"
              placeholder="Historia Universal de la Infamia"
              name="title"
              required
            />
          </Label>
          <Label className="flex flex-col gap-2">
            <span>Año de publicacion</span>
            <Input
              className="w-full"
              placeholder="1998"
              name="year"
              type="number"
              required
            />
          </Label>
          <Label className="flex flex-col gap-2">
            <span>Editorial</span>
            <Input
              className="w-full"
              placeholder="Alianza Editorial"
              name="publisher"
              required
            />
          </Label>
          <Label className="flex flex-col gap-2">
            <span>Desde la pagina:</span>
            <Input
              className="w-full"
              placeholder="17"
              name="pageFrom"
              type="number"
            />
            <pre className="text-xs text-destructive">Opcional</pre>
          </Label>
          <Label className="flex flex-col gap-2">
            <span>Hasta la pagina:</span>
            <Input
              className="w-full"
              placeholder="25"
              name="pageTo"
              type="number"
            />
            <pre className="text-xs text-destructive">Opcional</pre>
          </Label>
        </CardContent>
        <CardFooter>
          <Button type="submit">Generar cita</Button>
        </CardFooter>
      </form>
    </Card>
  );
};

export default CitationForm;
