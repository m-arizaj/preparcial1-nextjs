import { AuthorDTO } from "@/types/author";

const BASE = process.env.NEXT_PUBLIC_API_BASE ?? "http://127.0.0.1:8080";

async function handle<T>(res: Response): Promise<T> {
  if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw new Error(`${res.status} ${res.statusText} - ${text}`);
  }
  return (await res.json()) as T;
}

export async function listAuthors(): Promise<AuthorDTO[]> {
  const res = await fetch(`${BASE}/api/authors`, { cache: "no-store" });
  return handle<AuthorDTO[]>(res);
}

export async function getAuthor(id: number): Promise<AuthorDTO> {
  const res = await fetch(`${BASE}/api/authors/${id}`, { cache: "no-store" });
  return handle<AuthorDTO>(res);
}

export async function createAuthor(data: AuthorDTO): Promise<AuthorDTO> {
  const res = await fetch(`${BASE}/api/authors`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return handle<AuthorDTO>(res);
}

export async function updateAuthor(id: number, data: AuthorDTO): Promise<AuthorDTO> {
  const res = await fetch(`${BASE}/api/authors/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ...data, id }),
  });
  return handle<AuthorDTO>(res);
}

export async function deleteAuthor(id: number): Promise<void> {
  const res = await fetch(`${BASE}/api/authors/${id}`, { method: "DELETE" });
  if (!res.ok) throw new Error(`${res.status} ${res.statusText}`);
}
