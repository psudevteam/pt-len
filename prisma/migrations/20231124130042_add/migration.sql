-- AlterTable
ALTER TABLE "Guest" ALTER COLUMN "fullname" DROP NOT NULL,
ALTER COLUMN "companyName" DROP NOT NULL,
ALTER COLUMN "phoneNumber" DROP NOT NULL,
ALTER COLUMN "email" DROP NOT NULL,
ALTER COLUMN "guestTotal" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Reservation" ALTER COLUMN "guestId" DROP NOT NULL,
ALTER COLUMN "status" DROP NOT NULL,
ALTER COLUMN "companyName" DROP NOT NULL,
ALTER COLUMN "arrivalDate" DROP NOT NULL,
ALTER COLUMN "arrivalHour" DROP NOT NULL,
ALTER COLUMN "departureDate" DROP NOT NULL,
ALTER COLUMN "reservationDate" DROP NOT NULL,
ALTER COLUMN "destination" DROP NOT NULL,
ALTER COLUMN "workUnit" DROP NOT NULL,
ALTER COLUMN "requirement" DROP NOT NULL,
ALTER COLUMN "document" DROP NOT NULL,
ALTER COLUMN "guestStatus" DROP NOT NULL,
ALTER COLUMN "checkInStatus" DROP NOT NULL,
ALTER COLUMN "code" DROP NOT NULL;
