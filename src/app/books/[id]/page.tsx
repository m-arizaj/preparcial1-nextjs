"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { addReview, getBook } from "@/lib/api-books";
import type { BookDTO, ReviewDTO } from "@/types/book";

export default function BookDetailPage(){
  const { id } = useParams<{id: string}>();
  const [book, setBook] = useState<(BookDTO & { reviews?: ReviewDTO[] }) | null>(null);
  const [err, setErr] = useState<string|null>(null);

  const [rev, setRev] = useState<ReviewDTO>({ name:"", source:"", description:"" });

  useEffect(()=>{ (async()=>{
    try{ setBook(await getBook(Number(id))); }
    catch(e){ setErr((e as Error).message); }
  })(); }, [id]);

  const submitReview = async (e: React.FormEvent) => {
    e.preventDefault();
    try{
      const created = await addReview(Number(id), rev);
      setBook(prev => prev ? ({ ...prev, reviews: [ ...(prev.reviews ?? []), created ] }) : prev);
      setRev({ name:"", source:"", description:"" });
    }catch(e){ alert((e as Error).message); }
  };

  if(err) return <p style={{color:"crimson"}}>Error: {err}</p>;
  if(!book) return <p>Cargando…</p>;

  return (
    <section>
      <article className="card" style={{marginBottom:18}}>
        <div className="card__media"><img src={book.image} alt={book.name} /></div>
        <div className="card__body">
          <h2 className="card__name">{book.name}</h2>
          <div className="card__meta">ISBN: {book.isbn} · Publicación: {book.publishingDate}</div>
          <p className="card__desc" style={{WebkitLineClamp: "unset"}}>{book.description}</p>
        </div>
      </article>

      <h3 style={{margin:"18px 0 10px"}}>Reviews</h3>
      <ul className="list">
        {(book.reviews ?? []).map(r => (
          <li key={r.id} className="card"><div className="card__body">
            <strong>{r.name}</strong> — <span className="card__meta">{r.source}</span>
            <p className="card__desc" style={{WebkitLineClamp: "unset"}}>{r.description}</p>
          </div></li>
        ))}
        {(book.reviews ?? []).length === 0 && <p className="card__meta">Aún no hay reviews.</p>}
      </ul>

      <div className="form-card" style={{marginTop:16}}>
        <h4 style={{margin:"0 0 10px"}}>Agregar review</h4>
        <form onSubmit={submitReview} className="form">
          <div className="field">
            <label>Nombre</label>
            <input className="input" value={rev.name} onChange={e=>setRev(v=>({...v, name:e.target.value}))}/>
          </div>
          <div className="field">
            <label>Fuente</label>
            <input className="input" value={rev.source} onChange={e=>setRev(v=>({...v, source:e.target.value}))}/>
          </div>
          <div className="field">
            <label>Descripción</label>
            <textarea className="textarea" rows={3} value={rev.description} onChange={e=>setRev(v=>({...v, description:e.target.value}))}/>
          </div>
          <button className="btn btn-primary" type="submit">Guardar review</button>
        </form>
      </div>
    </section>
  );
}
