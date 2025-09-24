"use client";
import { useEffect, useState } from "react";
import { listBooks } from "@/lib/api-books";
import { BookDTO } from "@/types/book";
import Link from "next/link";

export default function BooksList(){
  const [data, setData] = useState<BookDTO[]>([]);
  const [err, setErr] = useState<string|null>(null);

  useEffect(()=>{ (async()=>{
    try{ setData(await listBooks()); } catch(e){ setErr((e as Error).message); }
  })(); }, []);

  if(err) return <p style={{color:"crimson"}}>Error: {err}</p>;

  return (
    <section>
      <h2 style={{margin:"0 0 14px", fontSize:22, fontWeight:700}}>Libros</h2>
      <ul className="list">
        {data.map(b=>(
          <li key={b.id} className="card">
            <div className="card__media">
              <img src={b.image} alt={b.name} width={800} height={500}/>
            </div>
            <div className="card__body">
              <h3 className="card__name">{b.name}</h3>
              <div className="card__meta">Publicación: {b.publishingDate}</div>
              <p className="card__desc">{b.description}</p>
            </div>
            <div className="card__actions">
              <Link className="btn btn-ghost" href={`/books/${b.id}`}>Ver detalle</Link>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
