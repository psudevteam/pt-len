"use server";
import { prisma } from "@/libs";
import { revalidatePath } from "next/cache";

export async function deleteDataAction(id: string) {
  await prisma.reservation.delete({
    where: {
      id,
    },
  });
  revalidatePath("/dashboard/reservation?title=Reservasi Tamu");
}
