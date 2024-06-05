import Image from "next/image";
import Navbar from "@/components/navbar/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/ui/Features";
import PartnerShip from "@/components/PartnerShip";
import FeaturesComponent from "@/components/FeaturesComponent";

export default function Home() {
  return (
    <main className="flex flex-col w-full px-10">
      <Navbar/>
      <Hero/>
      <Features/>
      <PartnerShip/>
      <FeaturesComponent/>
    </main>
  );
}
