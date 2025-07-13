import React from "react";
import Navbar from "@/components/Navbar";
import ZoomInOnLoad from "@/components/animate/ZoomInOnLoad";
import Image from "next/image";
import GalleryCards from "@/components/cards/GalleryCards";
import { Amarante, Lexend } from "next/font/google";

const amarante = Amarante({ weight: "400", subsets: ["latin"] });
const lexend = Lexend({
  weight: ["100", "300", "400", "700"],
  subsets: ["latin"],
});
export default function Index() {
  return (
    <div className={`w-full ${lexend.className}`}>
      <div className="mx-auto">
        {/* Header */}
        <Navbar />
        <div className="w-full flex items-center justify-center gap-5 px-10">
          <div className="w-[500px] h-52 text-[18px] font-light text-[#081b2b]">
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
          <div className="w-[1000px] overflow-x-auto">
            <GalleryCards />
          </div>
        </div>
        <div className="border-2 border-gray-300 bg-gray-100 shadow-md">
          <div className="flex items-start p-10 justify-evenly">
            <div className="flex flex-col gap-10">
              <p className={`${amarante.className} text-3xl`}>
                <span className="text-[#20b9f0]">P</span>art Designe
                <span className="text-[#ff6347]">r</span>
              </p>
              <ul className="font-light text-lg">
                <li>UI/UX design</li>
                <li>Interaction design</li>
              </ul>
            </div>
            <div></div>
            <div className="flex flex-col gap-10">
              <p className={`${amarante.className} text-3xl`}>Part Coder</p>
              <ul className="font-light text-lg">
                <li>Front-End Development</li>
                <li>HTML / CSS / Tailwindcss</li>
                <li>JavaScript</li>
                <li>Curly Tops fav</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
