import React from "react";
import { Amarante } from "next/font/google";
import Navbar from "@/components/Navbar";
import LandingPage from "@/components/LandingPage";

const amarante = Amarante({
  weight: "400",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div className="w-full h-fit">
      <div className="w-full flex items-center justify-evenly py-5 ">
        <div className={`${amarante.className} text-4xl`}>
          <span className="text-[#20b9f0]">R</span>
          <span>ams</span>
        </div>
        <Navbar />
        <div className="px-5 border-l-2 border-l-[#ff6347]">
          <button className="bg-[#ff6347] rounded-md px-2 py-2.5">
            Download CV
          </button>
        </div>
      </div>
      <LandingPage />
    </div>
  );
}
