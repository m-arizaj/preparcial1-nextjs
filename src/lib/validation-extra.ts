import { z } from "zod";
import { DateYYYYMMDD } from "./validation";

export const BookCreateSchema = z.object({
  name: z.string().min(2),
  isbn: z.string().min(3),
  image: z.string().url(),
  publishingDate: DateYYYYMMDD.refine(s => s <= new Date().toISOString().slice(0,10), "No puede ser futura"),
  description: z.string().min(10),
});

export const PrizeCreateSchema = z.object({
  name: z.string().min(2),
  description: z.string().min(5),
  premiationDate: DateYYYYMMDD,
});
