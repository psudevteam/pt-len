import { api } from "@/libs";
import { Prisma } from "@prisma/client";

export const reservationRequest = async (): Promise<Prisma.ReservationGetPayload<{}>[]> => {
  const { data } = await api.get<Prisma.ReservationGetPayload<{}>[]>("/reservation");
  return data;
};
