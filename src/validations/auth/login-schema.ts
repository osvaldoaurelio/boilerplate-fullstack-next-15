import { NAME, PASSWORD } from "@/constants/auth";
import { z } from "zod";

export const loginSchema = z.object({
  email: z.string()
    .email({ message: 'Errors.invalidEmail' }),
  password: z.string()
    .min(PASSWORD.MIN_LENGTH, { message: 'Errors.minLength' })
    .max(PASSWORD.MAX_LENGTH, { message: 'Errors.maxLength' }),
});

export type LoginInput = z.infer<typeof loginSchema>;
