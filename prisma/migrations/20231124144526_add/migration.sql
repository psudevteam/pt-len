/*
  Warnings:

  - A unique constraint covering the columns `[reservationId]` on the table `Guest` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Guest_reservationId_key" ON "Guest"("reservationId");
