import Image from "next/image";
import Navbar from "@/components/Navbar";
import HeroSection  from "@/components/HeroSection";
import { WhatItDoes } from "@/components/WhatItDoes";
import { Footer } from "@/components/Footer";
import { CallToAction } from "@/components/CallToAction";

export default function Home() {
  return (
    <div>
      {/* <Navbar /> */}
      <HeroSection />
      <WhatItDoes/>
      <CallToAction/>
      <Footer/>
    </div>
  );
}
