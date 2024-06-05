import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import AppleIcon from "@/public/icons/AppleIcon";
import Playstore from "@/public/icons/Playstore";

const Hero = () => {
  return (
    <div className="flex flex-col w-full justify-center items-center py-10">
      <h1 className="text-4xl lg:text-[70px] lg:leading-[84px] text-center font-bold lg:px-[500px]">
        Easy and Affordable{" "}
        <span className="text-[#23A323]">credit solutions</span> you can trust.
      </h1>
      <p className="text-center lg:px-[500px] my-5">
        Experience the power of a seamless credit platform where your needs are
        made a priority.
      </p>
      <div className="flex w-full space-x-4 lg:space-x-8 justify-center">
        <Button size={"lg"} className="flex p-7 lg:p-8 space-x-2 rounded-full">
            <AppleIcon size={30}/>
            <span className="flex flex-col justify-start">
                <p className="text-sm font-light">Coming soon on</p>
                <p className="text-base">App Store</p>
            </span>
        </Button>
        <Button variant={"outline"} size={"lg"} className="flex p-7 lg:p-8 space-x-2 border-black rounded-full">
            <Playstore size={30}/>
            <span className="flex flex-col justify-start">
                <p className="text-sm font-light">Coming soon on</p>
                <p className="text-base">PlayStore</p>
            </span>
        </Button>
      </div>
      <div className="flex py-10">
        <Image
          src={"/images/Hero.png"}
          width={100}
          height={100}
          alt="HeroImage"
          className="w-full h-screen"
        />
      </div>
    </div>
  );
};

export default Hero;
