import { z } from "zod";

export const VSRegister = z
  .object({
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
    confirm_password: z.string({
      required_error: "Konfirmasi password harus diisi",
    }),
    fullname: z
      .string({
        required_error: "Fullname harus diisi",
      })
      .min(3, { message: "Fullname minimal 3 karakter" }),
    toc: z.boolean().refine((val) => val === true, {
      message: "Anda harus menyetujui syarat dan ketentuan",
    }),
  })
  .refine((data) => data.password === data.confirm_password, {
    message: "Passwords tidak sama",
    path: ["confirm_password"], // path of error
  });

export type TVSRegister = z.infer<typeof VSRegister>;
