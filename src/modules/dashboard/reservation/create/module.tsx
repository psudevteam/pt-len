"use client";
import { ControlledFieldText, Button } from "@/components";
import { Prisma } from "@prisma/client";
import { FC, ReactElement } from "react";
import { useForm } from "react-hook-form";
import { postDataAction } from "./post-data";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

type TReservationCreate = Prisma.ReservationCreateInput;

export const DashboardReservationCreateModule: FC = (): ReactElement => {
  const { data: userData } = useSession();
  const router = useRouter();
  const { control, handleSubmit } = useForm<TReservationCreate>({
    defaultValues: {
      companyName: "",
      phoneNumber: "",
      email: "",
      arrivalDate: "",
      arrivalHour: "",
      destination: "",
    },
  });

  const onSubmit = handleSubmit((data) => {
    postDataAction({
      ...data,
      userId: userData.user?.id,
      userName: userData.user?.fullname,
      reservationDate: new Date(data.reservationDate),
      status: "Menunggu Persetujuan",
    });
    router.push("/dashboard/reservasi?title=Reservasi Tamu");
  });

  return (
    <form
      onSubmit={onSubmit}
      className="flex w-full flex-col h-full gap-y-6 border p-4 rounded-lg shadow-sm bg-white overflow-y-auto"
    >
      <div className="flex flex-col gap-y-4">
        <h1 className="font-medium text-2xl">Data Tamu</h1>
        <div className="px-4 flex flex-col gap-y-4">
          <ControlledFieldText
            size="sm"
            name="companyName"
            control={control}
            label="Perusahaan/Instansi"
            placeholder="Masukkan Nama Perusahaan/Instansi"
          />
          <ControlledFieldText
            size="sm"
            name="phoneNumber"
            control={control}
            type="number"
            pattern="[0-9]*"
            label="No.HP Perwakilan"
            placeholder="Masukkan No.HP Perwakilan"
          />
          <ControlledFieldText
            size="sm"
            name="email"
            type="email"
            control={control}
            label="Email Perwakilan"
            placeholder="Masukkan Email Perwakilan"
          />
          <ControlledFieldText
            size="sm"
            name="guestTotal"
            type="number"
            control={control}
            label="Jumlah Tamu"
            placeholder="Masukkan Jumlah Tamu"
          />
        </div>
      </div>

      <div className="flex flex-col gap-y-4">
        <h1 className="font-medium text-2xl">Data Reservasi</h1>
        <div className="px-4 flex flex-col gap-y-4">
          <ControlledFieldText
            size="sm"
            name="reservationDate"
            control={control}
            type="date"
            label="Tanggal Reservasi"
          />
          <ControlledFieldText
            size="sm"
            name="arrivalHour"
            control={control}
            type="time"
            label="Jam"
          />
          <ControlledFieldText
            size="sm"
            name="destination"
            control={control}
            label="Yang Ditemui"
            placeholder="Masukkan Tujuan"
          />
          <ControlledFieldText
            size="sm"
            name="requirement"
            control={control}
            label="Keperluan"
            placeholder="Masukkan Keperluan"
          />
          <ControlledFieldText
            size="sm"
            name="workUnit"
            control={control}
            type="text"
            label="Unit Kerja"
          />

          <ControlledFieldText
            size="sm"
            name="guestStatus"
            control={control}
            label="Kategori Tamu"
            placeholder="Masukkan Tujuan"
          />
          <div>
            <Button size="sm" variant="success">
              Simpan
            </Button>
          </div>
        </div>
      </div>
    </form>
  );
};
