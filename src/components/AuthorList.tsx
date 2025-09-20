"use client";

import { useEffect, useState } from "react";
import { AuthorDTO } from "@/types/author";
import { deleteAuthor, listAuthors } from "@/lib/api";
import Link from "next/link";

export default function AuthorList() {
  const [authors, setAuthors] = useState<AuthorDTO[]>([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState<string | null>(null);

  async function load() {
    try {
      setLoading(true);
      setAuthors(await listAuthors());
      setErr(null);
    } catch (e) {
      setErr((e as Error).message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => { void load(); }, []);

  const onDelete = async (id?: number) => {
    if (!id) return;
    if (!confirm("¿Eliminar este autor?")) return;
    // optimista
    const prev = authors;
    setAuthors(a => a.filter(x => x.id !== id));
    try {
      await deleteAuthor(id);
    } catch (e) {
      alert((e as Error).message);
      setAuthors(prev);
    }
  };

  if (loading) return <p>Cargando…</p>;
  if (err) return <p style={{color:"crimson"}}>Error: {err}</p>;
  if (authors.length === 0) return (
    <div>
      <p>No hay autores.</p>
      <Link className="underline" href="/authors/new">Crear autor</Link>
    </div>
  );

  return (
  <div>
    <div style={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
      <h2>Autores</h2>
      <a className="btn primary" href="/authors/new">Crear Autor</a>
    </div>

    <ul className="list">
      {authors.map(a => (
        <li key={a.id} className="card">
          <img className="avatar" src={a.image} alt={a.name} width={180} height={250} />
          <div style={{flex:1, minWidth:0}}>
            <h3>{a.name}</h3>
            <div className="meta">Nacimiento: {a.birthDate}</div>
            <p className="desc">{a.description}</p>
          </div>
          <div className="actions">
            <a className="btn secondary" href={`/authors/${a.id}/edit`}>Editar</a>
            <button onClick={() => onDelete(a.id)} className="btn danger">Eliminar</button>
          </div>
        </li>
      ))}
    </ul>
  </div>
);
}
