"use client";
import { Button, ControlledFieldCheckbox, ControlledFieldText } from "@/components";
import { FC, ReactElement, useState } from "react";
import { useForm } from "react-hook-form";
import { TVSLogin, VSLogin } from "./schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";

export const AuthLoginModule: FC = (): ReactElement => {
  const searchParams = useSearchParams();
  const type = searchParams.get("type");
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const router = useRouter();

  const {
    control,
    handleSubmit,
    formState: { isValid, errors },
  } = useForm<TVSLogin>({
    mode: "all",
    resolver: zodResolver(VSLogin),
    defaultValues: {
      email: "",
      password: "",
      remember: false,
    },
  });

  const onSubmit = handleSubmit(async (data) => {
    setIsLoading(true);
    try {
      const response = await signIn("login", {
        redirect: false,
        email: data?.email,
        password: data?.password,
      });
      if (response?.error) {
        setErrorMessage(response.error);
      } else {
        router.push("/dashboard?title=Dashboard");
      }
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  });

  return (
    <form
      onSubmit={onSubmit}
      className="md:w-1/2 w-full border h-full gap-y-4 justify-center flex flex-col md:px-12 px-6 rounded-lg"
    >
      <div className="flex flex-col gap-y-2 mb-10">
        <h1 className="text-4xl text-gray-700 font-medium">Masuk</h1>
        <p className="text-gray-400">Selamat datang kembali, silahkan masuk</p>
      </div>
      {errorMessage && (
        <div className="flex flex-col gap-y-2 bg-red-50 p-4 rounded-lg border-red-500 border">
          <p className="text-red-500">{errorMessage}</p>
        </div>
      )}

      <ControlledFieldText
        required
        size="sm"
        type="email"
        control={control}
        name="email"
        label="Email"
        placeholder="Masukkan Email"
        status={errors.email ? "error" : "none"}
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
        status={errors.password ? "error" : "none"}
        message={errors.password?.message}
      />
      <ControlledFieldCheckbox size="sm" control={control} name="remember" text="Remember Me" />
      <Button disabled={!isValid} size="md" type="submit">
        Masuk
      </Button>
      <div className="w-full flex justify-between">
        <p>
          Belum punya akun?{" "}
          <Link className="text-blue-600" href={`/auth/register?type=${type}`}>
            Daftar disini
          </Link>
        </p>
      </div>
    </form>
  );
};
