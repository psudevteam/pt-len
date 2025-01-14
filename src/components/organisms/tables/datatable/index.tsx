"use client";
import {
  useReactTable,
  getCoreRowModel,
  getSortedRowModel,
  SortingState,
} from "@tanstack/react-table";
import { ReactElement, useState } from "react";
import { TDataTable } from "./type";
import { TableHead, TableBody, Table } from "@/components";

export const DataTable = <T extends Record<string, unknown>>(
  props: TDataTable<T>,
): ReactElement => {
  const [sorting, setSorting] = useState<SortingState>([]);

  const table = useReactTable({
    data: props.data,
    columns: props.columns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    state: {
      sorting,
    },
    onSortingChange: setSorting,
  });

  return (
    <Table {...props}>
      <TableHead tableHead={table.getHeaderGroups()} />
      <TableBody tableBody={table.getRowModel()} />
    </Table>
  );
};
