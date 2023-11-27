"use server";
import { prisma } from "@/libs";
import { revalidatePath } from "next/cache";

export async function completeDataAction(id: string) {
  const data = await prisma.reservation.findUnique({
    where: {
      id,
    },
  });

  await prisma.reservation.update({
    where: {
      id,
    },
    data: {
      ...data,
      isCompleted: true,
    },
  });
  revalidatePath("/dashboard/reservation?title=Reservasi Tamu");
}
