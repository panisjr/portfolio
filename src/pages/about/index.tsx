import React from "react";
import Navbar from "@/components/Navbar";
import ZoomInOnLoad from "@/components/animate/ZoomInOnLoad";
import Image from "next/image";
import GalleryCards from "@/components/cards/GalleryCards";
import { Amarante } from "next/font/google";

const amarante = Amarante({ weight: "400", subsets: ["latin"] });
export default function Index() {
  return (
    <div className="w-full">
      <div className="mx-auto">
        {/* Header */}
        <Navbar />
        <div className="w-full flex items-center justify-center gap-5 px-10">
          <div className="w-[500px] h-52 text-[18px] font-thin text-[#081b2b]">
            <p>I am a Front-End Developer.</p>
            <p>
              I enjoy exploring new technologies and environments that enhance
              my growth and efficiency as a programmer.
            </p>
            <p>
              When I&apos;m not coding, you&apos;ll often find me cooking or
              going for a jog and activities that help me recharge and stay
              focused.
            </p>
          </div>
          <ZoomInOnLoad>
            <div className="relative w-[500px] md:w-[400px] h-[600px] rounded-md">
              <Image
                src={"/assets/images/gallery/g1.jpg"}
                alt="Graduation picture"
                fill
                sizes="w-[500px] h-[600px]"
                className="object-cover rounded-md"
                priority
              />
            </div>
          </ZoomInOnLoad>
        </div>
        <div className="w-full h-fit flex flex-col items-center justify-center gap-5 p-10 ">
          <div>
            <p className={`${amarante.className} text-3xl`}>Gallery</p>
          </div>
          <div className="w-[900px] overflow-x-auto">
            <GalleryCards />
          </div>
        </div>
      </div>
    </div>
  );
}
