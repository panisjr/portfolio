"use client";
import Image from "next/image";
import React, { useState } from "react";
import SlideUp from "./animate/SlideUp";
import { ViewProjectsDialog } from "./ViewProjectsDialog";
import { useRouter } from "next/navigation";

export interface latestProjectTypes {
  projectName: string;
  date: string;
  description: string;
  image: string;
}
const latestProject: latestProjectTypes[] = [
  // {
  //   projectName: "New Portfolio!",
  //   date: "2025-PRESENT",
  //   description:
  //     "Currently working on my new portofolio from Page Router to App Router",
  //   image: "/assets/images/newportfolio.png",
  // },
  {
    projectName: "DRSchecker - nextjs, gemini api",
    date: "2024-2025",
    description:
      "Depression Rating Scale Checker to assess one's stress level and provide advice",
    image: "/assets/images/drsLatest.png",
  },
  {
    projectName: "ATLS",
    date: "2024-2025",
    description: "Automated Traffic Ligth System to lessen traffic congestion",
    image: "/assets/images/atls.png",
  },
  {
    projectName: "CodePulse - react, nodejs",
    date: "2022-2023",
    description:
      "A learning platform focused on programming languages, specifically Java and Python.",
    image: "/assets/images/codePulse.png",
  },
  {
    projectName: "AutoGuardian",
    date: "2023-2024",
    description:
      "AutoGuardian is a comprehensive web-based car management and rental platform",
    image: "/assets/images/projects/car/car2.png",
  },
];
export default function LatestProjectsPage() {
  const [open, setOpen] = useState<boolean>(false);
  const [projectView, setProjectView] = useState<string>("");
  const router = useRouter();
  return (
    <>
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
          <SlideUp duration={0.5} delay={0.2}>
            <div
              onClick={() =>
                router.push("https://rams-portfolio-next.vercel.app")
              }
              className="w-[430px] md:w-[330px] h-[340px] md:h-[270px] bg-gray-100 shadow-lg rounded-md flex flex-col items-center justify-center p-2.5 gap-2.5 hover:scale-105 transition-transform duration-300 cursor-pointer"
            >
              <div className="relative w-full h-full rounded-md">
                <Image
                  src={`/assets/images/newportfolio.png`}
                  alt="Project Image"
                  fill
                  priority
                  sizes="w-full h-full"
                  className="object-cover rounded-md"
                />
              </div>
              <div className="flex flex-col items-start justify-start w-full px-4">
                <p className="text-[18px] font-thin">New Portfolio!</p>
                <p className="font-thin text-[14px]">
                  Currently working on my new portofolio from Page Router to Ap.
                  . .
                </p>
                <p className="text-[10px]">2025-PRESENT</p>
              </div>
            </div>
          </SlideUp>
          {latestProject.map((item, index) => (
            <SlideUp key={index} duration={0.5} delay={0.2}>
              <div
                onClick={() => {
                  setOpen(true);
                  setProjectView(item.projectName);
                }}
                className="w-[430px] md:w-[330px] h-[340px] md:h-[270px] bg-gray-100 shadow-lg rounded-md flex flex-col items-center justify-center p-2.5 gap-2.5 hover:scale-105 transition-transform duration-300 cursor-pointer"
              >
                <div className="relative w-full h-full rounded-md">
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
                  <p className="text-[10px]">{item.date}</p>
                </div>
              </div>
            </SlideUp>
          ))}
        </div>
      </section>
      <ViewProjectsDialog
        open={open}
        setOpen={setOpen}
        projectView={projectView}
      />
    </>
  );
}
