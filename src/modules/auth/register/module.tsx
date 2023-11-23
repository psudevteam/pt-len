"use client";
import { Button, ControlledFieldCheckbox, ControlledFieldText } from "@/components";
import { FC, ReactElement } from "react";
import { useForm } from "react-hook-form";
import { TVSRegister, VSRegister } from "./schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSearchParams } from "next/navigation";
import { useRegister } from "./hook";
import Link from "next/link";

export const AuthRegisterModule: FC = (): ReactElement => {
  const searchParams = useSearchParams();
  const type = searchParams.get("type");

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
      toc: false,
    },
  });

  const { mutate } = useRegister();

  const onSubmit = handleSubmit((data) => {
    mutate(data, {
      onSuccess: () => {
        console.log("Berhasil Login");
      },
      onError: (error) => {
        console.log(error?.response?.data?.message);
      },
    });
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
      <ControlledFieldText
        required
        size="sm"
        type="text"
        control={control}
        name="fullname"
        label="Nama Lengkap"
        placeholder="Masukkan Nama Lengkap"
        status={errors.fullname ? "error" : isValid ? "success" : "none"}
        message={errors.fullname?.message}
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
        message={errors.email?.message}
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
        message={errors.password?.message}
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
