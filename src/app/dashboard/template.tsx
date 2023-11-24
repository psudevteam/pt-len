"use client";
import { Button, Sidebar } from "@/components";
import { NextPage } from "next";
import { useSearchParams } from "next/navigation";
import { PropsWithChildren, ReactElement } from "react";

const DashboardTemplate: NextPage = (props: PropsWithChildren): ReactElement => {
  const searchParams = useSearchParams();
  const title = searchParams.get("title");
  const re = /Tambah|Edit|Ubah|Rubah/gi;
  return (
    <section className="flex bg-gray-50 w-full h-full overflow-x-auto">
      <Sidebar />
      <div className="pr-6 py-12 pl-10 sm:ml-60 w-full bg-gray-50 gap-y-10 flex flex-col overflow-x-auto">
        <div className="flex w-full justify-between items-center">
          <h1 className="text-4xl font-bold">{title}</h1>
          {title?.match(re) && (
            <Button onClick={() => window.history.back()} size="sm" variant="cancel">
              Kembali
            </Button>
          )}
        </div>
        <div className="w-full overflow-x-auto">{props.children}</div>
      </div>
    </section>
  );
};

export default DashboardTemplate;
