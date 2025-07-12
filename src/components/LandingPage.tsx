import Image from "next/image";
import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { Amarante } from "next/font/google";
import { Facebook, Github, Linkedin } from "lucide-react";
import PopUpOnLoad from "./animate/PopUpOnLoad";
import ZoomInOnLoad from "./animate/ZoomInOnLoad";
import { useRouter } from "next/router";

const amarante = Amarante({
  weight: "400",
  subsets: ["latin"],
});
export default function LandingPage() {
  const router = useRouter();
  const socNav = (a: string) => {
    if (a === "facebook") {
      router.push("https://www.facebook.com/ramel.panis.1/");
      return;
    } else if (a === "linkedin") {
      router.push("https://www.linkedin.com/in/panisjr-ramel/");
      return;
    } else if (a === "github") {
      router.push("https://github.com/panisjr");
      return;
    }
  };
  return (
    <div className="w-full flex md:flex-nowrap flex-wrap items-center justify-center">
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
        <div className="w-full flex items-center justify-start gap-3 py-4">
          <PopUpOnLoad>
            <div
              onClick={() => socNav("facebook")}
              className="bg-[#20b9f0] p-1 rounded-md cursor-pointer hover:-translate-y-1 transition-transform duration-200"
            >
              <Facebook />
            </div>
          </PopUpOnLoad>
          <PopUpOnLoad delay={0.3}>
            <div
              onClick={() => socNav("linkedin")}
              className="bg-[#20b9f0] p-1 rounded-md cursor-pointer hover:-translate-y-1 transition-transform duration-200"
            >
              <Linkedin />
            </div>
          </PopUpOnLoad>
          <PopUpOnLoad delay={0.5}>
            <div
              onClick={() => socNav("github")}
              className="bg-[#20b9f0] p-1 rounded-md cursor-pointer hover:-translate-y-1 transition-transform duration-200"
            >
              <Github />
            </div>
          </PopUpOnLoad>
        </div>
        <div className="flex items-center justify-start gap-5 py-4">
          <PopUpOnLoad>
            <button className="w-[120px] h-[40px] bg-[#20b9f0] rounded-sm text-[#081b2b] font-semibold hover:bg-[#081b2b] hover:text-[#ededed] duration-200 hover:border-[#20b9f0] border-2 border-transparent">
              Hire Me
            </button>
          </PopUpOnLoad>
          <PopUpOnLoad delay={0.3}>
            <button
              onClick={() => router.push("https://mail.google.com/")}
              className="w-[120px] h-[40px] border-2 border-[#20b9f0] rounded-sm font-semibold hover:bg-[#20b9f0] hover:text-[#ededed] duration-200 hover:border-[#20b9f0]"
            >
              Contact Me
            </button>
          </PopUpOnLoad>
        </div>
      </div>
      <div className="w-full ps-[150px]">
        <ZoomInOnLoad>
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
        </ZoomInOnLoad>
      </div>
    </div>
  );
}
