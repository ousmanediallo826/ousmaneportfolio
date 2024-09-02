import React from "react";
import { BackgroundBeamsWithCollision } from "../ui/background-beams-with-collision";
import Link from "next/link";

export default function HeroSection() {
    return (
        <div>
            <BackgroundBeamsWithCollision>
                <div className="text-center">
                    <h1 className="text-7xl font-bold mb-4">
                        Nice to meet you! 👋 <br />
                        <span className="text-5xl">{"I am Ousmane Diallo"}</span>
                    </h1>
                    <p className="w-1/2 mx-auto mb-4">
                        🌟 Based in New York City, I'm a passionate Computer Systems student with a keen interest in AI and Full Stack Development. Excited to explore new opportunities and make an impact in these cutting-edge fields! 🌟
                    </p>
                    <Link href="mailto:ousmane@speakhire.org">
                        <div className="flex items-center justify-center cursor-pointer bg-blue-500 text-white py-2 px-4 rounded max-w-max mx-auto">
                            <h1 className="text-xl">Contact Me 📬</h1>
                        </div>
                    </Link>
                </div>
            </BackgroundBeamsWithCollision>
        </div>
    );
}
