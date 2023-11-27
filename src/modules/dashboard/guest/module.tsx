"use client";
import { DataTable } from "@/components";
import { FC, useMemo } from "react";
import { ColumnDef } from "@tanstack/react-table";
import { Prisma } from "@prisma/client";
import { useSession } from "next-auth/react";

type TReservation = { data: Prisma.ReservationGetPayload<{}>[] };

export const DashboardGuestModule: FC<TReservation> = async ({ data }) => {
  const { data: sessionData } = useSession();
  console.log(sessionData?.user?.role?.name?.toLowerCase());
  const column = useMemo<ColumnDef<Prisma.ReservationGetPayload<{}>>[]>(
    () => [
      {
        header: "Nama Perusahaan",
        accessorKey: "companyName",
      },
      {
        header: "User",
        accessorKey: "userName",
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
        cell: ({ cell }) => cell.getValue<Date>().toLocaleDateString("id-ID"),
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

  return (
    <section className="flex flex-col gap-y-4">
      <DataTable columns={column} data={data?.filter((x) => x.isCompleted) || []} />
    </section>
  );
};
