import React from "react";
import { BackgroundBeamsWithCollision } from "../ui/background-beams-with-collision";
import Link from "next/link";
import { ShimmerButtonDemo } from "./ShimmerButtonDemo";
import FadeInSection from './FadeInSection';
import { LinkPreviewDemoSecond } from "./LinkPreviewDemoSecond";

export default function HeroSection() {
    return (
        <div>
            <FadeInSection>
            <BackgroundBeamsWithCollision>
                <div className="text-center">
                    <h1 className="text-4xl sm:text-7xl font-bold mb-4">
                        Nice to meet you! 👋 <br />
                        <LinkPreviewDemoSecond  />
                    </h1>
                    <p className="w-11/12 sm:w-1/2 mx-auto mb-6">
                        🌟 Based in New York City, I'm a passionate Computer Systems student with a keen interest in AI and Full Stack Development. Excited to explore new opportunities and make an impact in these cutting-edge fields! 🌟
                    </p>
                    <Link href="mailto:ousmane@speakhire.org" passHref>
                        <ShimmerButtonDemo />
                    </Link>
                </div>
            </BackgroundBeamsWithCollision>
            </FadeInSection>
        </div>
    );
}
