"use server";
import { prisma } from "@/libs";
import { revalidatePath } from "next/cache";

export async function searchDataAction(val: string) {
  await prisma.reservation.findMany({
    where: {
      companyName: val,
    },
  });
  revalidatePath("/dashboard/reservation?title=Reservasi Tamu");
}
