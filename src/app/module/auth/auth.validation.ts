import z, { email } from "zod";

const PatientRegistrationZodSchema = z.object({
  name: z
    .string("Name is required")
    .min(3, "Name must be at least 3 characters")
    .max(20, "Name must not exceed 20 characters"),

  email: z.email("Please enter a valid email address"),

  password: z
    .string("Password is required")
    .min(8, "Password must be at least 8 characters")
    .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
    .regex(/[a-z]/, "Password must contain at least one lowercase letter")
    .regex(/[0-9]/, "Password must contain at least one number")
    .regex(
      /[^A-Za-z0-9]/,
      "Password must contain at least one special character",
    ),

  patient: z
    .object({
      contactNumber: z
        .string()
        .min(11, "Contact number must be at least 11 characters")
        .max(15, "Contact number must not exceed 15 characters")
        .optional(),
    })
    .optional(),
});

export const PatientValidation = {
  PatientRegistrationZodSchema,
};
