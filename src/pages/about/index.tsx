import React from "react";
import Navbar from "@/components/Navbar";

export default function Index() {
  return (
    <div className="w-full h-fit">
      <div className="mx-auto">
        {/* Header */}
        <Navbar />
        <div>
          <p>I am a Front-End Developer</p>
        </div>
        <div>
          <p>
            I enjoy exploring new technologies and environments that enhance my
            growth and efficiency as a programmer.
          </p>
          <p>
            When I&apos;m not coding, you&apos;ll often find me cooking or going
            for a jog — activities that help me recharge and stay focused.
          </p>
        </div>
      </div>
    </div>
  );
}
