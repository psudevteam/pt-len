"use client";
import { ControlledFieldText } from "@/components";
import { FC, ReactElement } from "react";
import { useForm } from "react-hook-form";

export const DashboardReservationCreateModule: FC = (): ReactElement => {
  const { control } = useForm();
  return (
    <form className="flex w-full flex-col h-full gap-y-6 border p-4 rounded-lg shadow-sm bg-white">
      <h1 className="font-medium text-2xl">Data Reservasi</h1>
      <div className="flex flex-col px-6 gap-y-4">
        <ControlledFieldText
          name="title"
          control={control}
          label="Nama Reservasi"
          placeholder="Masukkan Nama Tamu Reservasi"
        />
        <ControlledFieldText
          name="title"
          control={control}
          label="Nomor Telepon"
          placeholder="Masukkan No Telp Tamu Reservasi"
        />
      </div>
    </form>
  );
};
