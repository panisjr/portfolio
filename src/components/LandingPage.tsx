import Image from "next/image";
import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { Amarante } from "next/font/google";
import { Facebook, Instagram, Linkedin } from "lucide-react";

const amarante = Amarante({
  weight: "400",
  subsets: ["latin"],
});
export default function LandingPage() {
  return (
    <div className="w-full flex items-center justify-center overflow-x-hidden">
      <div className="w-full max-w-[750px] ps-44 py-16 flex flex-col items-start justify-start">
        <p>Hello, I&apos;m</p>
        <p className={`${amarante.className} text-5xl`}>Ramel Panis</p>
        <h1 className="text-3xl font-bold text-nowrap">
          I am a{" "}
          <span style={{ color: "tomato" }}>
            <Typewriter
              words={["Web Developer", "UI Designer", "Lifelong Learner"]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
        </h1>
        <p className="w-full">
          Fueled by curiosity and a strong desire for growth, I’m passionate
          about honing my technical abilities and staying ahead in the
          ever-evolving world of technology.
        </p>
        <div className="w-full flex items-center justify-start gap-2 py-4">
          <div className="bg-[#20b9f0] p-1 rounded-md">
            <Facebook />
          </div>
          <div className="bg-[#20b9f0] p-1 rounded-md">
            <Linkedin />
          </div>
          <div className="bg-[#20b9f0] p-1 rounded-md">
            <Instagram />
          </div>
        </div>
        <div className="flex items-center justify-start gap-5 py-4">
          <button className="w-[120px] h-[40px] bg-[#20b9f0] rounded-sm text-[#081b2b] font-semibold hover:bg-[#081b2b] hover:text-[#ededed] duration-200 hover:border-[#20b9f0] border-2 border-transparent">
            Hire Me
          </button>
          <button className="w-[120px] h-[40px] border-2 border-[#20b9f0] rounded-sm font-semibold hover:bg-[#20b9f0] hover:text-[#081b2b] duration-200 hover:border-[#20b9f0]">
            Contact Me
          </button>
        </div>
      </div>
      <div className="w-full ps-[150px]">
        <div className="relative w-[400px] h-[600px] rounded-md">
          <Image
            src={"/assets/images/gradPic2.jpg"}
            alt="Graduation picture"
            fill
            sizes="w-[500px] h-[600px]"
            className="object-contain rounded-md"
            priority
          />
        </div>
      </div>
    </div>
  );
}
