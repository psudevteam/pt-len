import { NextPage } from "next";
import { PropsWithChildren, ReactElement } from "react";
import Image from "next/image";

const LandingTemplate: NextPage = (props: PropsWithChildren): ReactElement => {
  return (
    <section className="flex items-center justify-center w-full h-screen">
      <div className="bg-black w-full h-full z-10 absolute bg-opacity-50 backdrop-blur-md" />
      <Image
        className="flex w-full h-full bg-cover z-0 absolute"
        src={"/bg.jpg"}
        alt="Background Image"
        width={1980}
        height={1080}
      />
      <div className="z-20 flex items-center justify-center w-full relative h-full">
        {props.children}
      </div>
    </section>
  );
};

export default LandingTemplate;
