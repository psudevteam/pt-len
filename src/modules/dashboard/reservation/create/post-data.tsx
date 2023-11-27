"use server";
import { Prisma } from "@prisma/client";
import { prisma } from "@/libs";

export async function postDataAction(formData: Prisma.ReservationCreateInput) {
  console.log("data", formData);
  await prisma.reservation.create({
    data: {
      userId: formData.userId,
      userName: formData.userName,
      requirement: formData.requirement,
      companyName: formData.companyName,
      reservationDate: formData.reservationDate,
      arrivalHour: formData.arrivalHour,
      destination: formData.destination,
      guestStatus: formData.guestStatus,
      workUnit: formData.workUnit,
      status: formData.status,
      isCompleted: false,
    },
  });
}
