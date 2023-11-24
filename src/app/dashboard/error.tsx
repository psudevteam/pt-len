"use client";
import { Button } from "@/components";
import { useEffect } from "react";
import Image from "next/image";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center w-full h-full gap-y-4 bg-gray-100">
      <Image src="/error.png" alt="error" width={200} height={200} />
      <h2 className="text-3xl font-bold text-red-500">{error?.message}</h2>
      <Button variant="error" onClick={() => reset()}>
        Try again
      </Button>
    </div>
  );
}
