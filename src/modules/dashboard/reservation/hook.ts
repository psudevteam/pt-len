import { TMetaErrorResponse } from "@/entities";
import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { reservationRequest } from "./api";
import { Prisma } from "@prisma/client";

export const useReservation = (): UseQueryResult<
  Prisma.ReservationGetPayload<{}>[],
  TMetaErrorResponse
> =>
  useQuery({
    queryKey: ["reservation"],
    queryFn: async () => await reservationRequest(),
  });
