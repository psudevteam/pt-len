"use client";
import { ControlledFieldText } from "@/components";
import { Prisma } from "@prisma/client";
import { FC, ReactElement } from "react";
import { useForm } from "react-hook-form";

type TReservationCreate = Prisma.ReservationCreateInput;

export const DashboardGuestCreateModule: FC = (): ReactElement => {
  const { control } = useForm<TReservationCreate>();
  return (
    <form className="flex w-full flex-col h-full gap-y-6 border p-4 rounded-lg shadow-sm bg-white">
      <div className="flex flex-col gap-y-4">
        <h1 className="font-medium text-2xl">Data Tamu</h1>
        <div className="px-4 flex flex-col gap-y-4">
          <ControlledFieldText
            name="companyName"
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
      </div>

      <div className="flex flex-col gap-y-4">
        <h1 className="font-medium text-2xl">Data Reservasi</h1>
        <div className="px-4 flex flex-col gap-y-4">
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
      </div>
    </form>
  );
};
