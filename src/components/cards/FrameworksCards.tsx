import { Amarante } from "next/font/google";
import Image from "next/image";
import React from "react";

const icons: { name: string; icon: string }[] = [
  {
    name: "Nextjs",
    icon: "/assets/images/nextjs.png",
  },
  {
    name: "Angular",
    icon: "/assets/images/angular.png",
  },
  {
    name: "React",
    icon: "/assets/images/react.png",
  },
  {
    name: "Laravel",
    icon: "/assets/images/laravel.svg",
  },
];
const amarante = Amarante({
  weight: "400",
  subsets: ["latin"],
});
export default function FrameworksCards() {
  return (
    <>
      {icons.map((item, index) => (
        <div
          key={index}
          className="w-[350px] h-[250px] flex items-center justify-center gap-2.5"
        >
          <div className="flex flex-col items-center justify-center gap-3">
            <div className="relative w-[150px] h-[150px] rounded-full">
              <Image
                src={`${item.icon}`}
                alt="Project Image"
                fill
                priority
                sizes="w-full h-full"
                className="object-contain rounded-full"
              />
            </div>
            <p className={`${amarante.className} text-4xl text-center`}>
              {item.name}
            </p>
          </div>
        </div>
      ))}
    </>
  );
}
