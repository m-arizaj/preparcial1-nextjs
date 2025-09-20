"use client";

import { useEffect, useMemo, useState } from "react";
import { AuthorDTO } from "@/types/author";
import {
  AuthorCreateSchema,
  AuthorUpdateSchema,
  AuthorCreateInput,
  AuthorUpdateInput,
} from "@/lib/validation";

type Props = {
  initial?: AuthorDTO;            
  onSubmit: (values: AuthorDTO) => Promise<void>;
  submitLabel?: string;
};

type FieldErrors = Partial<Record<keyof AuthorDTO, string>>;

export default function AuthorForm({ initial, onSubmit, submitLabel = "Guardar" }: Props) {
  const [values, setValues] = useState<AuthorDTO>(
    initial ?? { name: "", description: "", image: "", birthDate: "" }
  );
  const [errors, setErrors] = useState<FieldErrors>({});
  const [loading, setLoading] = useState(false);
  const [apiErr, setApiErr] = useState<string | null>(null);
  const schema = useMemo(() => (initial ? AuthorUpdateSchema : AuthorCreateSchema), [initial]);

  const validateField = (k: keyof AuthorDTO, v: string) => {
    const single =
      k === "id"
        ? AuthorUpdateSchema.pick({ id: true })
        : AuthorCreateSchema.pick({ [k]: true } as never);
    const parsed = single.safeParse({ [k]: v });
    setErrors((prev) => ({ ...prev, [k]: parsed.success ? "" : parsed.error.issues[0].message }));
  };

  const change =
    (k: keyof AuthorDTO) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const v = e.target.value;
      setValues((old) => ({ ...old, [k]: v }));
      validateField(k, v);
    };

  useEffect(() => {
    if (initial?.birthDate && initial.birthDate.length > 10) {
      setValues((old) => ({ ...old, birthDate: initial.birthDate.slice(0, 10) }));
    }
  }, [initial]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setApiErr(null);
    const parsed = schema.safeParse(values as AuthorCreateInput | AuthorUpdateInput);
    if (!parsed.success) {
      const fieldErrs: FieldErrors = {};
      for (const issue of parsed.error.issues) {
        const path = issue.path[0] as keyof AuthorDTO;
        fieldErrs[path] = issue.message;
      }
      setErrors(fieldErrs);
      const first = Object.keys(fieldErrs)[0];
      if (first) {
        const el = document.querySelector(`[name="${first}"]`) as HTMLElement | null;
        el?.focus();
      }
      return;
    }

    try {
      setLoading(true);
      await onSubmit(values);
    } catch (e) {
      setApiErr((e as Error).message);
    } finally {
      setLoading(false);
    }
  };

  const hasErrors = Object.values(errors).some(Boolean);

  return (
  <form onSubmit={handleSubmit} className="form">
    <fieldset style={{ marginBottom: "20px", display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
      <label style={{ marginBottom: "8px", fontWeight: 600 }}>Nombre</label>
      <input
        name="name"
        required
        value={values.name}
        onChange={change("name")}
        type="text"
      />
      {errors.name && <p className="error">{errors.name}</p>}
    </fieldset>

    <fieldset style={{ marginBottom: "20px", display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
      <label style={{ marginBottom: "8px", fontWeight: 600 }}>Fecha de nacimiento (YYYY-MM-DD)</label>
      <input
        name="birthDate"
        required
        type="date"
        value={values.birthDate}
        onChange={change("birthDate")}
      />
      {errors.birthDate && <p className="error">{errors.birthDate}</p>}
    </fieldset>

    <fieldset style={{ marginBottom: "20px", display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
      <label style={{ marginBottom: "8px", fontWeight: 600 }}>Imagen (URL)</label>
      <input
        name="image"
        required
        value={values.image}
        onChange={change("image")}
        type="text"
      />
      {errors.image && <p className="error">{errors.image}</p>}
    </fieldset>

    <fieldset style={{ marginBottom: "20px", display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
      <label style={{ marginBottom: "8px", fontWeight: 600 }}>Descripción</label>
      <textarea
        name="description"
        required
        value={values.description}
        onChange={change("description")}
        rows={3}
      />
      {errors.description && <p className="error">{errors.description}</p>}
    </fieldset>

    {apiErr && <p className="error">Error: {apiErr}</p>}

    <button disabled={loading || hasErrors} className="btn">
      {loading ? "Enviando…" : submitLabel}
    </button>
  </form>
);

}
