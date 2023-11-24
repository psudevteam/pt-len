"use client";
import { Button } from "@/components";
import { useSession, signOut } from "next-auth/react";
import { FC, ReactElement } from "react";

export const DashboardModule: FC = (): ReactElement => {
  const { data } = useSession();
  return (
    <section className="flex flex-col gap-y-3 items-center w-full h-full justify-center">
      <h1 className="text-4xl font-bold text-black">{data?.user?.fullname}</h1>
      <Button variant="cancel" onClick={() => signOut()}>
        Logout
      </Button>
    </section>
  );
};
