import { TMetaErrorResponse } from "@/entities";
import { UseMutationResult, UseQueryResult, useMutation, useQuery } from "@tanstack/react-query";
import { reservationDeleteRequest, reservationRequest } from "./api";
import { Prisma } from "@prisma/client";
import { useEffect, useState } from "react";

export const useReservation = (): UseQueryResult<
  Prisma.ReservationGetPayload<{}>[],
  TMetaErrorResponse
> =>
  useQuery({
    queryKey: ["reservation"],
    queryFn: async () => await reservationRequest(),
  });

export const useDeleteReservation = (): UseMutationResult<
  Prisma.ReservationGetPayload<{}>,
  TMetaErrorResponse,
  string,
  unknown
> => {
  return useMutation({
    mutationKey: ["deleteReservation"],
    mutationFn: async (id) => await reservationDeleteRequest(id),
  });
};

export const useDebounce = <T>(value: T, delay: number): T => {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
    return () => {
      clearTimeout(handler);
    };
  });

  return debouncedValue;
};
