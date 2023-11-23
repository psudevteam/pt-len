import Link from "next/link";
import { FC, ReactElement } from "react";

export const LandingModule: FC = (): ReactElement => {
  return (
    <section className="flex w-full h-full p-10 flex-col gap-y-6">
      <h1 className="text-8xl font-medium text-white">PT Len Industri</h1>
      <div className="flex gap-x-4 cursor-pointer">
        <Link
          href="/auth/login?type=guest"
          className="bg-white shadow-sm rounded-lg w-[120px] h-[120px] items-center flex justify-center"
        >
          <span className="text-sm font-medium">Reservasi Tamu</span>
        </Link>
        <Link
          href="/auth/login?type=meeting"
          className="bg-white shadow-sm rounded-lg w-[120px] h-[120px] items-center flex justify-center"
        >
          <span className="text-sm font-medium">Ruang Meeting</span>
        </Link>
      </div>
    </section>
  );
};
