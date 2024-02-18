import { z } from "zod";

const phoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

export const signupSchema = z.object({
    name: z.string().min(1, "This field is required"),
    email: z.string().email("This field is required"),
    phone: z.string().regex(phoneRegex, "This field is required"),
})

export type FormFields = z.infer<typeof signupSchema>