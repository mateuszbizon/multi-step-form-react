import { z } from "zod";

const phoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

export const signupSchema = z.object({
    name: z.string().min(1, "Field is required"),
    email: z.string().email("Field is required"),
    phone: z.string().regex(phoneRegex, "Field is required"),
}).partial()

export type SignupFields = z.infer<typeof signupSchema>