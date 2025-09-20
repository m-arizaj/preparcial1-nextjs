"use client";

import { useRouter } from "next/navigation";
import AuthorForm from "@/components/AuthorForm";
import { createAuthor } from "@/lib/api";
import { AuthorDTO } from "@/types/author";

export default function NewAuthorPage() {
  const router = useRouter();

  const onSubmit = async (values: AuthorDTO) => {
    await createAuthor(values);
    router.push("/authors");
  };

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Crear autor</h2>
      <AuthorForm onSubmit={onSubmit} submitLabel="Crear" />
    </div>
  );
}
