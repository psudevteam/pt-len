import { z } from "zod";

export const VSRegister = z.object({
  email: z
    .string({
      required_error: "Email harus diisi",
    })
    .email({ message: "Email tidak valid" }),
  password: z
    .string({
      required_error: "Password harus diisi",
    })
    .min(6, { message: "Password minimal 6 karakter" }),
  fullname: z
    .string({
      required_error: "Fullname harus diisi",
    })
    .min(3, { message: "Fullname minimal 3 karakter" }),
  toc: z.boolean({ required_error: "Anda harus menyetujui syarat dan ketentuan" }),
});

export type TVSRegister = z.infer<typeof VSRegister>;
