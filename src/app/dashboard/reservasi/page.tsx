import { DashboardReservationModule } from "@/modules";
import { NextPage } from "next";
import { ReactElement, Suspense } from "react";

const DashboardReservationPage: NextPage = (): ReactElement => {
  return (
    <Suspense fallback="Loading...">
      <DashboardReservationModule />
    </Suspense>
  );
};

export default DashboardReservationPage;
