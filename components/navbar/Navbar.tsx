import Image from "next/image";
import React from "react";
import { NAV_ROUTES } from "@/constants";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <div className="flex w-full justify-between items-center py-4">
      <Image src={"/images/StackIvylogo.png"} width={100} height={20} alt="logo" className="object-contain" priority />
      <ul className="flex space-x-5">
        {NAV_ROUTES.map((route, index) => (
          <li key={index} className="text-sm ">{route}</li>
        ))}
      </ul>
      <Button className="bg-[#23A323] p-6 rounded-full hover:bg-[#4bc54b]">Get Started</Button>
    </div>
  );
};

export default Navbar;
