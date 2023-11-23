import { NextPage } from "next";
import { PropsWithChildren, ReactElement } from "react";

const AuthTemplete: NextPage = (props: PropsWithChildren): ReactElement => {
  return (
    <section className="flex w-full h-screen bg-gray-100 items-center justify-between">
      <div className="w-1/2 h-full bg-blue-400 items-center justify-center md:flex hidden">
        <div className="flex flex-col items-center gap-y-4"></div>
      </div>
      {props.children}
    </section>
  );
};

export default AuthTemplete;
