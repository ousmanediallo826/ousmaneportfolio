import React from "react";
import Navbar from "./Components/Navbar";
import HeroSection from "./Components/HeroSection";
import AboutMe from "./Components/AboutMe";
import Skills from "./Components/Skills";


export default function Page() {
  return (
    <div className="min-h-screen bg-black   justify-center overflow-hidden">
      <div className="relative">
      <div className="max-w-7xl mx-auto p-5">
        <Navbar />
      
        <HeroSection/>
      </div>
      </div>
      <div className="max-w-7xl mx-auto p-5">
        <AboutMe/>
      </div>
      <div>
        <Skills/>
      </div>
    </div>
  );
}
