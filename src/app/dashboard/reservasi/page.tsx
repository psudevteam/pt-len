import { prisma } from "@/libs";
import { DashboardReservationModule } from "@/modules";
import { NextPage } from "next";

const DashboardReservationPage: NextPage = async () => {
  const data = await prisma.reservation.findMany({
    orderBy: {
      createdAt: "desc",
    },
    include: {
      user: true,
    },
  });
  return <DashboardReservationModule data={data} />;
};

export default DashboardReservationPage;
