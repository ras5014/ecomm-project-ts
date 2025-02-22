import { z } from "zod";

export const createProductSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters long"),
  description: z
    .string()
    .min(2, "Description must be at least 2 characters long"),
  price: z.number().min(1, "Price must be at least 1"),
});

export const updateProductSchema = createProductSchema.partial();

export type CreateProductSchema = z.infer<typeof createProductSchema>;
export type UpdateProductSchema = z.infer<typeof updateProductSchema>;
