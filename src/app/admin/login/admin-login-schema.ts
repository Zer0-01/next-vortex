import { z } from "zod";

const emailSchema = z
  .string()
  .trim()
  .superRefine((email, context) => {
    if (email.length === 0) {
      context.addIssue({
        code: "custom",
        message: "Enter your email address.",
      });
      return;
    }

    if (!z.email().safeParse(email).success) {
      context.addIssue({
        code: "custom",
        message: "Enter a valid email address.",
      });
    }
  });

export const adminLoginSchema = z.object({
  email: emailSchema,
  password: z.string().min(1, "Enter your password."),
});

export type AdminLoginValues = z.infer<typeof adminLoginSchema>;
