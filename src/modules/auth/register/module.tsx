"use client";
import { Button, ControlledFieldCheckbox, ControlledFieldText } from "@/components";
import { FC, ReactElement, useState } from "react";
import { useForm } from "react-hook-form";
import { TVSRegister, VSRegister } from "./schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter, useSearchParams } from "next/navigation";
import { useRegister } from "./hook";
import Link from "next/link";

export const AuthRegisterModule: FC = (): ReactElement => {
  const searchParams = useSearchParams();
  const type = searchParams.get("type");
  const router = useRouter();
  const [errorMessage, setErrorMessage] = useState<string | undefined>("");

  const {
    control,
    handleSubmit,
    formState: { isValid, errors },
  } = useForm<TVSRegister>({
    mode: "all",
    resolver: zodResolver(VSRegister),
    defaultValues: {
      fullname: "",
      email: "",
      password: "",
    },
  });

  const { mutate } = useRegister();

  const onSubmit = handleSubmit((data) => {
    mutate(
      {
        fullname: data.fullname,
        email: data.email,
        password: data.password,
      },
      {
        onSuccess: () => {
          router.push("/auth/login");
        },
        onError: (error) => {
          setErrorMessage(error?.response?.data?.message);
        },
      },
    );
  });

  return (
    <form
      onSubmit={onSubmit}
      className="md:w-1/2 w-full border h-full gap-y-4 justify-center flex flex-col md:px-12 px-6 rounded-lg"
    >
      <div className="flex flex-col gap-y-2 mb-10">
        <h1 className="text-4xl text-blue-600 font-medium">Daftar</h1>
        <p className="text-gray-400">Silahkan isi untuk menyelesaikan pendaftaran</p>
      </div>
      {errorMessage && (
        <div className="flex flex-col gap-y-2 bg-red-50 p-4 rounded-lg border-red-500 border">
          <p className="text-red-500">{errorMessage}</p>
        </div>
      )}

      <ControlledFieldText
        required
        size="sm"
        type="text"
        control={control}
        name="fullname"
        label="Nama Lengkap"
        placeholder="Masukkan Nama Lengkap"
        status={errors.fullname ? "error" : isValid ? "success" : "none"}
        message={errors.fullname?.message || "Nama Lengkap Valid"}
      />
      <ControlledFieldText
        required
        size="sm"
        type="email"
        control={control}
        name="email"
        label="Email"
        placeholder="Masukkan Email"
        status={errors.email ? "error" : isValid ? "success" : "none"}
        message={errors.email?.message || "Email Valid"}
      />
      <ControlledFieldText
        required
        size="sm"
        type="password"
        control={control}
        name="password"
        label="Password"
        placeholder="Masukkan Password"
        status={errors.password ? "error" : isValid ? "success" : "none"}
        message={errors.password?.message || "Password Valid"}
      />
      <ControlledFieldText
        required
        size="sm"
        type="password"
        control={control}
        name="confirm_password"
        label="Konfirmasi Password"
        placeholder="Masukkan Password"
        status={errors.confirm_password ? "error" : isValid ? "success" : "none"}
        message={errors.confirm_password?.message || "Konfirmasi Password Valid"}
      />

      <ControlledFieldCheckbox size="sm" control={control} name="toc" text="Syarat dan ketentuan" />
      <Button disabled={!isValid} size="md" type="submit">
        Daftar
      </Button>
      <div className="w-full flex justify-between">
        <p>
          Sudah punya akun?{" "}
          <Link className="text-blue-600" href={`/auth/login?type=${type}`}>
            Masuk disini
          </Link>
        </p>
      </div>
    </form>
  );
};
