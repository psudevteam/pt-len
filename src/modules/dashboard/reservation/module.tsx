"use client";
import { DataTable, Button } from "@/components";
import { ChangeEvent, ChangeEventHandler, FC, useEffect, useMemo, useState } from "react";
import { ColumnDef } from "@tanstack/react-table";
import { Prisma } from "@prisma/client";
import { FaCheck, FaPencilAlt, FaRegTrashAlt } from "react-icons/fa";
import { deleteDataAction } from "./delete-data";
import { completeDataAction } from "./complete-data";
import { useSession } from "next-auth/react";
import { searchDataAction } from "./search-data";
import { useDebounce } from "./hook";

type TReservation = { data: Prisma.ReservationGetPayload<{}>[] };

export const DashboardReservationModule: FC<TReservation> = async ({ data }) => {
  const { data: sessionData } = useSession();
  const column = useMemo<ColumnDef<Prisma.ReservationGetPayload<{}>>[]>(
    () => [
      {
        header: "Aksi",
        accessorKey: "id",
        cell: ({ row }) => (
          <div className="flex gap-x-2">
            <Button
              href={`/dashboard/reservasi/edit/${row.original.id}`}
              size="sm"
              variant="success"
            >
              <FaPencilAlt />
            </Button>
            {sessionData?.user?.role?.name?.toLowerCase() === "admin" && (
              <Button
                onClick={() => completeDataAction(row.original.id)}
                size="sm"
                variant="success"
              >
                <FaCheck />
              </Button>
            )}
            <Button onClick={() => deleteDataAction(row.original.id)} size="sm" variant="error">
              <FaRegTrashAlt />
            </Button>
          </div>
        ),
      },
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

  const [search, setSearch] = useState("");
  const [debounceValue, setDebounceValue] = useState<string>("");

  const handleSearch = (e: ChangeEvent<HTMLInputElement>): void => {
    setDebounceValue(e.target.value);
  };

  const createLink = "/dashboard/reservasi/create?title=Tambah Data Reservasi";
  return (
    <section className="flex flex-col gap-y-4">
      <Button href={createLink} size="sm" variant="cancel">
        Tambah Data +
      </Button>
      <DataTable columns={column} data={data?.filter((x) => !x.isCompleted) || []} />
    </section>
  );
};
