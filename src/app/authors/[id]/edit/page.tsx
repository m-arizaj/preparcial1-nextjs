"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import AuthorForm from "@/components/AuthorForm";
import { AuthorDTO } from "@/types/author";
import { getAuthor, updateAuthor } from "@/lib/api";

export default function EditAuthorPage() {
  const { id } = useParams<{ id: string }>();
  const router = useRouter();
  const [author, setAuthor] = useState<AuthorDTO | null>(null);
  const [err, setErr] = useState<string | null>(null);

  useEffect(() => {
  (async () => {
    try {
      const a = await getAuthor(Number(id));
      if (a.birthDate && a.birthDate.length > 10) a.birthDate = a.birthDate.slice(0, 10);
      setAuthor(a);
    } catch (e) {
      setErr((e as Error).message);
    }
    })();
  }, [id]);

  const onSubmit = async (values: AuthorDTO) => {
    await updateAuthor(Number(id), values);
    router.push("/authors");
  };

  if (err) return <p style={{color:"crimson"}}>Error: {err}</p>;
  if (!author) return <p>Cargando…</p>;

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Editar autor</h2>
      <AuthorForm initial={author} onSubmit={onSubmit} submitLabel="Guardar cambios" />
    </div>
  );
}
