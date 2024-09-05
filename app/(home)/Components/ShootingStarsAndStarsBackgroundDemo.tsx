"use client";
import React from "react";
import { ShootingStars } from "../ui/shooting-stars";
import { StarsBackground } from "../ui/stars-background";
import { CardStackDemo } from "./CardStackDemo";
import { TextGenerateEffectDemo } from "./TextGenerateEffectDemo";

export function ShootingStarsAndStarsBackgroundDemo() {
  return (
    <div className="relative w-full flex flex-col items-center py-5 px-2 sm:px-0">
      <h1 className="text-4xl text-center mb-4 w-full sm:w-auto">
        "Empowering Innovation Through Campus Advocacy"
      </h1>
      <p className="w-full sm:w-[50%] py-5 text-white text-lg font-thin text-center">
        I enjoy advocating for tech companies on my campus to foster an ecosystem of driven
        individuals who are eager to make an impact through technology. By connecting students
        with opportunities to utilize and grow alongside cutting-edge innovations, we create a
        community that thrives on collaboration, problem-solving, and the desire to evolve. It's
        inspiring to see how much potential we can unlock when passionate people come together
        with a shared vision for the future of tech.
      </p>
     
      <CardStackDemo />
      <TextGenerateEffectDemo/>
      <ShootingStars />
      <StarsBackground />
    </div>
  );
}

