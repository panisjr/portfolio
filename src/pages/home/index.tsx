import React from "react";
import { Amarante } from "next/font/google";
import Navbar from "@/components/Navbar";
import LandingPage from "@/components/LandingPage";
import LatestWorkPage from "@/components/LatestProjectsPage";
import SlideDownOnLoad from "@/components/animate/SlideDownOnLoad";
import FrameworksList from "@/components/FrameworksList";

const amarante = Amarante({
  weight: "400",
  subsets: ["latin"],
});
export default function Home() {
  return (
    <div className="w-full h-fit">
      <div className="max-w-screen-2xl mx-auto px-4">
        {/* Header */}
        <SlideDownOnLoad>
          <div className="flex flex-wrap items-center justify-evenly py-5 gap-4">
            <div className={`${amarante.className} text-4xl`}>
              <span className="text-[#20b9f0]">R</span>
              <span>ams</span>
            </div>
            <Navbar />
            <div className="border-l-2 border-l-[#ff6347] ps-4">
              <a
                href="/assets/files/resume.pdf"
                download
                className="bg-[#ff6347] rounded-md px-3 py-2.5 whitespace-nowrap text-white"
              >
                Download CV
              </a>
            </div>
          </div>
        </SlideDownOnLoad>

        {/* Main sections */}
        <LandingPage />
        <FrameworksList />
        <LatestWorkPage />
      </div>
    </div>
  );
}
