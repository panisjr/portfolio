import Image from "next/image";
import React from "react";
import SlideUp from "./animate/SlideUp";

export interface latestProjectTypes {
  projectName: string;
  description: string;
  image: string;
}
const latestProject: latestProjectTypes[] = [
  {
    projectName: "DRSchecker",
    description:
      "Depression Rating Scale Checker to assess one's stress level and provide advice",
    image: "/assets/images/drsLatest.png",
  },
  {
    projectName: "ATLS",
    description: "Automated Traffic Ligth System to lessen traffic congestion",
    image: "/assets/images/atls.png",
  },
  {
    projectName: "CodePulse",
    description:
      "A learning platform focused on programming languages, specifically Java and Python.",
    image: "/assets/images/codePulse.png",
  },
];
export default function LatestProjectsPage() {
  return (
    <section
      className="w-full h-screen md:px-56 px-10 py-16 bg-gray-200"
      id="showOfMyLatestWork"
    >
      <div className="flex items-center justify-center gap-10 mb-10">
        <div className="border border-slate-400 w-full"></div>
        <p className="text-lg font-semibold text-center text-nowrap text-[#081b2b]">
          SOME OF MY LATEST PROJECTS
        </p>
        <div className="border border-slate-400 w-full"></div>
      </div>
      <div className="w-full flex flex-wrap items-center justify-center gap-6 text-[#081b2b]">
        {latestProject.map((item, index) => (
          <SlideUp key={index} duration={0.5} delay={0.2}>
            <div className="w-[330px] h-[270px] bg-gray-100 shadow-lg rounded-md flex flex-col items-center justify-center p-2.5 gap-2.5 hover:scale-105 transition-transform duration-300 cursor-pointer">
              <div className="relative w-full h-full rounded-md border">
                <Image
                  src={`${item.image}`}
                  alt="Project Image"
                  fill
                  priority
                  sizes="w-full h-full"
                  className="object-cover rounded-md"
                />
              </div>
              <div className="flex flex-col items-start justify-start w-full px-4">
                <p className="text-[18px] font-thin">{item.projectName}</p>
                <p className="font-thin text-[14px]">
                  {item.description.slice(0, 60) + ". . ."}
                </p>
              </div>
            </div>
          </SlideUp>
        ))}
      </div>
    </section>
  );
}
