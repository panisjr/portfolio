import React from "react";
import Navbar from "@/components/Navbar";
import LandingPage from "@/components/LandingPage";
import LatestWorkPage from "@/components/LatestProjectsPage";
import FrameworksList from "@/components/FrameworksList";

export default function Home() {
  return (
    <div className="w-[700px] md:w-full h-fit">
      <div className="mx-auto">
        {/* Header */}
        <Navbar />
        {/* Main sections */}
        <LandingPage />
        <FrameworksList />
        <LatestWorkPage />
      </div>
    </div>
  );
}
