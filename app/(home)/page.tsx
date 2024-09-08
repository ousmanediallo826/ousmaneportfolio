import React from "react";
import Navbar from "./Components/Navbar";
import HeroSection from "./Components/HeroSection";
import AboutMe from "./Components/AboutMe";
import Skills from "./Components/Skills";
import Project from "./Components/project";
import { ShootingStarsAndStarsBackgroundDemo } from "./Components/ShootingStarsAndStarsBackgroundDemo";
import Footer from "./Components/Footer";
import { LinkPreviewDemoSecond } from "./Components/LinkPreviewDemoSecond";


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
      <div className="max-w-7xl mx-auto p-5">
        <Skills/>
      </div>
      <div className="max-w-7xl mx-auto p-5">
        <Project/>
      </div>
      <div className="max-w-7xl mx-auto p-10">
        <ShootingStarsAndStarsBackgroundDemo/>
      </div>
      <div className="max-w-7xl mx-auto p-10">
        <Footer />
      </div>
      <div className="max-w-7xl mx-auto p-10">
        <LinkPreviewDemoSecond />
      </div>
    </div>
  );
}
