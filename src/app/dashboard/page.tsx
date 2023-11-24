import { DashboardModule } from "@/modules";
import { NextPage } from "next";
import { ReactElement, Suspense } from "react";

const DashboardPage: NextPage = (): ReactElement => {
  return (
    <Suspense fallback="Loading...">
      <DashboardModule />
    </Suspense>
  );
};

export default DashboardPage;
