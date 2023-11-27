-- DropForeignKey
ALTER TABLE "Reservation" DROP CONSTRAINT "Reservation_userId_fkey";

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "reservationId" TEXT;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_reservationId_fkey" FOREIGN KEY ("reservationId") REFERENCES "Reservation"("id") ON DELETE SET NULL ON UPDATE CASCADE;
