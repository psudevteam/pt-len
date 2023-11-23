"use client";
import { Button } from "@/components";
import { useEffect } from "react";

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
    <div className="flex flex-col items-center justify-center w-full h-full">
      <h2 className="text-3xl font-bold text-red-500">Something went wrong! {error?.message}</h2>
      <Button variant="error" onClick={() => reset()}>
        Try again
      </Button>
    </div>
  );
}
