import { api } from "@/libs";
import { Prisma } from "@prisma/client";

export const reservationRequest = async (): Promise<Prisma.ReservationGetPayload<{}>[]> => {
  const { data } = await api.get<Prisma.ReservationGetPayload<{}>[]>("/reservation");
  return data;
};

export const reservationDeleteRequest = async (
  id: string,
): Promise<Prisma.ReservationGetPayload<{}>> => {
  const { data } = await api.delete<Prisma.ReservationGetPayload<{}>>(`/reservation/${id}`);
  return data;
};
