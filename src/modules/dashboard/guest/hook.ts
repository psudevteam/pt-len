import { TMetaErrorResponse } from "@/entities";
import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { guestRequest } from "./api";
import { Prisma } from "@prisma/client";

export const useGuest = (): UseQueryResult<Prisma.GuestGetPayload<{}>[], TMetaErrorResponse> =>
  useQuery({
    queryKey: ["guest"],
    queryFn: async () => await guestRequest(),
  });
