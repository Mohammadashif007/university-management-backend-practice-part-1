import { z } from "zod";

const createUserValidationSchema = z.object({
  password: z
    .string()
    .min(6, "Password must be at least 6 characters long")
    .optional(),
});

export const UserValidationSchema = {
  createUserValidationSchema,
};
