import { z } from "zod";

export const DateYYYYMMDD = z
  .string()
  .regex(/^\d{4}-\d{2}-\d{2}$/, "Usa el formato YYYY-MM-DD")
  .refine((s) => {
    const [y, m, d] = s.split("-").map(Number);
    const dt = new Date(Date.UTC(y, m - 1, d));
    return (
      dt.getUTCFullYear() === y &&
      dt.getUTCMonth() === m - 1 &&
      dt.getUTCDate() === d
    );
  }, "Fecha inválida")
  .refine((s) => {
    const inputDate = new Date(s + "T00:00:00Z");
    const today = new Date();
    const todayUTC = new Date(Date.UTC(today.getFullYear(), today.getMonth(), today.getDate()));
    return inputDate <= todayUTC;
  }, "La fecha no puede ser mayor a la actual");

export const AuthorCreateSchema = z.object({
  name: z.string().min(2, "Mínimo 2 caracteres"),
  birthDate: DateYYYYMMDD,
  image: z.string().url("Debe ser una URL válida"),
  description: z.string().min(10, "Mínimo 10 caracteres"),
});

export const AuthorUpdateSchema = AuthorCreateSchema.extend({
  id: z.number().int().positive().optional(),
});

export type AuthorCreateInput = z.infer<typeof AuthorCreateSchema>;
export type AuthorUpdateInput = z.infer<typeof AuthorUpdateSchema>;
