import { prisma } from "@/libs";
import { DashboardModule } from "@/modules";
import { NextPage } from "next";

const DashboardPage: NextPage = async () => {
  const resComplete = await prisma.reservation.count({
    where: {
      isCompleted: true,
    },
  });

  const resIncomplete = await prisma.reservation.count({
    where: {
      isCompleted: false,
    },
  });

  const data = {
    approve: resComplete,
    pending: resIncomplete,
  };
  return <DashboardModule data={data} />;
};

export default DashboardPage;
