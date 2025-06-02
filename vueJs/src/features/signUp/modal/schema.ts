import { z } from "zod";

const signUpSchema = z.object({
  firstName: z
    .string()
    .min(1, "First name is required")
    .min(6, "First name must be at least 6 characters"),
  lastName: z
    .string()
    .min(1, "Last name is required")
    .min(6, "Last name must be at least 6 characters"),
  email: z
    .string()
    .min(1, "Email is required")
    .email("Please enter a valid email"),
  password: z
    .string()
    .min(1, "Password is required")
    .min(8, "Password must be at least 8 characters"),
});

export { signUpSchema };
