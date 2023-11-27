import { prisma } from "@/libs";
import { DashboardGuestModule } from "@/modules";
import { NextPage } from "next";

const DashboardGuestPage: NextPage = async () => {
  const data = await prisma.reservation.findMany({
    orderBy: {
      createdAt: "desc",
    },
    include: {
      user: true,
    },
  });
  return <DashboardGuestModule data={data} />;
};

export default DashboardGuestPage;
