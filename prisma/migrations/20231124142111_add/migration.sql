/*
  Warnings:

  - A unique constraint covering the columns `[reservationId]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Made the column `reservationId` on table `User` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_reservationId_fkey";

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "reservationId" SET NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "User_reservationId_key" ON "User"("reservationId");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_reservationId_fkey" FOREIGN KEY ("reservationId") REFERENCES "Reservation"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
