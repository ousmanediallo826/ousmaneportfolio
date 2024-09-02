import React from "react";
import Navbar from "./Components/Navbar";
import HeroSection from "./Components/HeroSection";

export default function Page() {
  return (
    <div className="min-h-screen bg-black flex  justify-center">
      <div className="max-w-7xl w-full px-4 sm:px-6 lg:px-8">
        <Navbar />
      
        <HeroSection/>
      </div>
    </div>
  );
}
