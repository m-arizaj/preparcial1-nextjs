import { BookDTO, ReviewDTO } from "@/types/book";

const BASE = process.env.NEXT_PUBLIC_API_BASE ?? "http://127.0.0.1:8080";
async function handle<T>(res: Response){ if(!res.ok) throw new Error(await res.text()); return res.json() as Promise<T>; }

export async function listBooks(): Promise<BookDTO[]> {
  const r = await fetch(`${BASE}/books`, { cache: "no-store" });
  return handle<BookDTO[]>(r);
}

export async function createBook(data: BookDTO): Promise<BookDTO> {
  const r = await fetch(`${BASE}/books`, { method:"POST", headers:{ "Content-Type":"application/json" }, body: JSON.stringify(data) });
  return handle<BookDTO>(r);
}

export async function getBook(id: number): Promise<BookDTO & { reviews?: ReviewDTO[] }> {
  const r = await fetch(`${BASE}/books/${id}`, { cache:"no-store" });
  return handle<BookDTO & { reviews?: ReviewDTO[] }>(r);
}

export async function addReview(bookId: number, data: ReviewDTO): Promise<ReviewDTO> {
  const r = await fetch(`${BASE}/books/${bookId}/reviews`, { method:"POST", headers:{ "Content-Type":"application/json" }, body: JSON.stringify(data) });
  return handle<ReviewDTO>(r);
}
