"use client";
import { DataTable } from "@/components";
import { FC, useMemo } from "react";
import { useReservation } from "./hook";
import { ColumnDef } from "@tanstack/react-table";
import { Prisma } from "@prisma/client";

export const DashboardReservationModule: FC = async () => {
  const { data } = useReservation();
  const column = useMemo<ColumnDef<Prisma.ReservationGetPayload<{}>>[]>(
    () => [
      {
        header: "Nama Perusahaan",
        accessorKey: "companyName",
      },
      {
        header: "Tgl. Datang",
        accessorKey: "arrivalDate",
      },
      {
        header: "Jam",
        accessorKey: "arrivalHour",
      },
      {
        header: "Tujuan",
        accessorKey: "destination",
      },
      {
        header: "Status",
        accessorKey: "status",
      },

      {
        header: "Unit Kerja",
        accessorKey: "workUnit",
      },
      {
        header: "Keperluan",
        accessorKey: "requirement",
      },
      {
        header: "Tgl. Reservasi",
        accessorKey: "reservationDate",
      },
      {
        header: "Dokumen",
        accessorKey: "document",
      },
      {
        header: "Status Tamu",
        accessorKey: "guestStatus",
      },
      {
        header: "Kode",
        accessorKey: "code",
      },
    ],
    [],
  );

  const createLink = "/dashboard/reservasi/create?title=Tambah Data Reservasi";
  return <DataTable createLink={createLink} columns={column} data={data || []} />;
};
