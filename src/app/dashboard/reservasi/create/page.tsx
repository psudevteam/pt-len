import { DashboardReservationCreateModule } from "@/modules";
import { NextPage } from "next";
import { ReactElement, Suspense } from "react";

const DashboardReservationCreatePage: NextPage = (): ReactElement => {
  return <DashboardReservationCreateModule />;
};

export default DashboardReservationCreatePage;
