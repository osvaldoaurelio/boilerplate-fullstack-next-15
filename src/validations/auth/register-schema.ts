import { NAME, PASSWORD } from "@/constants/auth";
import { z } from "zod";

export const registerSchema = z.object({
  name: z.string()
    .min(NAME.MIN_LENGTH, { message: 'Errors.minLength' })
    .max(NAME.MAX_LENGTH, { message: 'Errors.maxLength' }),
  email: z.string()
    .email({ message: 'Errors.invalidEmail' }),
  password: z.string()
    .min(PASSWORD.MIN_LENGTH, { message: 'Errors.minLength' })
    .max(PASSWORD.MAX_LENGTH, { message: 'Errors.maxLength' }),
});

export type RegisterInput = z.infer<typeof registerSchema>;
