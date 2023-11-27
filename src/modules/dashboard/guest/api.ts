import { api } from "@/libs";
import { Prisma } from "@prisma/client";

export const guestRequest = async (): Promise<Prisma.GuestGetPayload<{}>[]> => {
  const { data } = await api.get<Prisma.GuestGetPayload<{}>[]>("/guest");
  return data;
};
