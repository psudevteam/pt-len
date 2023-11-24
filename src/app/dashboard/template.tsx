import { NextPage } from "next";
import { PropsWithChildren, ReactElement } from "react";

const DashboardTemplate: NextPage = (props: PropsWithChildren): ReactElement => {
  return (
    <section className="flex w-full h-screen bg-gray-100 items-center justify-between">
      {props.children}
    </section>
  );
};

export default DashboardTemplate;
