import { PrizeDTO } from "@/types/book";
const BASE = process.env.NEXT_PUBLIC_API_BASE ?? "http://127.0.0.1:8080";
async function ok(res: Response){ if(!res.ok) throw new Error(await res.text()); }

export async function attachBookToAuthor(authorId: number, bookId: number){
  const r = await fetch(`${BASE}/authors/${authorId}/books/${bookId}`, { method:"POST" });
  await ok(r);
}

export async function createPrize(data: PrizeDTO): Promise<PrizeDTO>{
  const r = await fetch(`${BASE}/prizes`, { method:"POST", headers:{ "Content-Type":"application/json" }, body: JSON.stringify(data) });
  if(!r.ok) throw new Error(await r.text());
  return r.json();
}

export async function attachPrizeToAuthor(prizeId: number, authorId: number){
  const r = await fetch(`${BASE}/prizes/${prizeId}/author/${authorId}`, { method:"POST" });
  await ok(r);
}
