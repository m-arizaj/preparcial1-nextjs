"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { createAuthor } from "@/lib/api";
import { createBook } from "@/lib/api-books";
import {
  createPrize,
  attachBookToAuthor,
  attachPrizeToAuthor,
} from "@/lib/api-relations";
import AuthorForm from "@/components/AuthorForm";
import { AuthorDTO } from "@/types/author";
import { BookDTO, PrizeDTO } from "@/types/book";

const today = new Date().toISOString().slice(0, 10);

export default function NewAuthorPage() {
  const router = useRouter();
  const [bookValues, setBookValues] = useState<BookDTO>({
    name: "",
    isbn: "",
    image: "",
    publishingDate: today,
    description: "",
    editorial: { name: "" },
  });

  const [prizeValues, setPrizeValues] = useState<PrizeDTO>({
    name: "",
    description: "",
    premiationDate: today,
    organization: { name: "" },
  });

  const onSubmit = async (author: AuthorDTO) => {
    if (
      !bookValues.name ||
      !bookValues.isbn ||
      !bookValues.image ||
      !bookValues.publishingDate ||
      !bookValues.description
    ) {
      alert("Completa los campos del Libro antes de crear el autor.");
      return;
    }
    if (!prizeValues.name || !prizeValues.description || !prizeValues.premiationDate) {
      alert("Completa los campos del Premio antes de crear el autor.");
      return;
    }
    const created = await createAuthor(author);
    const book = await createBook(bookValues);
    await attachBookToAuthor(Number(created.id), Number(book.id));
    const prize = await createPrize(prizeValues);
    await attachPrizeToAuthor(Number(prize.id), Number(created.id));

    router.push("/authors");
  };

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold">Crear autor (con libro y premio)</h2>

      <AuthorForm onSubmit={onSubmit} submitLabel="Crear" />

      <div className="form-card" style={{ marginTop: 8 }}>
        <h3 style={{ margin: "0 0 10px" }}>Libro</h3>

        <div className="field">
          <label>Nombre</label>
          <input
            className="input"
            value={bookValues.name}
            onChange={(e) => setBookValues((v) => ({ ...v, name: e.target.value }))}
          />
        </div>

        <div className="field">
          <label>ISBN</label>
          <input
            className="input"
            value={bookValues.isbn}
            onChange={(e) => setBookValues((v) => ({ ...v, isbn: e.target.value }))}
          />
        </div>

        <div className="field">
          <label>Imagen (URL)</label>
          <input
            className="input"
            value={bookValues.image}
            onChange={(e) => setBookValues((v) => ({ ...v, image: e.target.value }))}
          />
        </div>

        <div className="field">
          <label>Fecha de publicación</label>
          <input
            className="input"
            type="date"
            value={bookValues.publishingDate}
            onChange={(e) =>
              setBookValues((v) => ({ ...v, publishingDate: e.target.value }))
            }
          />
        </div>

        <div className="field">
          <label>Descripción</label>
          <textarea
            className="textarea"
            rows={3}
            value={bookValues.description}
            onChange={(e) =>
              setBookValues((v) => ({ ...v, description: e.target.value }))
            }
          />
        </div>

        <div className="field">
          <label>Editorial (opcional)</label>
          <input
            className="input"
            value={bookValues.editorial?.name ?? ""}
            onChange={(e) =>
              setBookValues((v) => ({ ...v, editorial: { name: e.target.value } }))
            }
          />
        </div>
      </div>

      <div className="form-card">
        <h3 style={{ margin: "0 0 10px" }}>Premio</h3>

        <div className="field">
          <label>Nombre</label>
          <input
            className="input"
            value={prizeValues.name}
            onChange={(e) => setPrizeValues((v) => ({ ...v, name: e.target.value }))}
          />
        </div>

        <div className="field">
          <label>Descripción</label>
          <textarea
            className="textarea"
            rows={3}
            value={prizeValues.description}
            onChange={(e) =>
              setPrizeValues((v) => ({ ...v, description: e.target.value }))
            }
          />
        </div>

        <div className="field">
          <label>Fecha de premiación</label>
          <input
            className="input"
            type="date"
            value={prizeValues.premiationDate}
            onChange={(e) =>
              setPrizeValues((v) => ({ ...v, premiationDate: e.target.value }))
            }
          />
        </div>

        <div className="field">
          <label>Organización (opcional)</label>
          <input
            className="input"
            value={prizeValues.organization?.name ?? ""}
            onChange={(e) =>
              setPrizeValues((v) => ({ ...v, organization: { name: e.target.value } }))
            }
          />
        </div>
      </div>
    </div>
  );
}
