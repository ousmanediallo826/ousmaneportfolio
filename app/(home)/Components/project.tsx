'use client';

import { cn } from '@/lib/utils';
import Link from 'next/link';
import React from 'react';
import {
    SiGit,
    SiJavascript,
    SiNodedotjs,
    SiReact,
    SiPython,
    SiNextdotjs,
    SiVercel,
    SiAppwrite,
    SiOpenai,
    SiIbmwatson,
    SiTailwindcss,
    SiTensorflow,
    SiIbmcloud
} from "react-icons/si";
import { DirectionAwareHover } from '../ui/direction-aware-hover';
import FadeInSection from './FadeInSection';

export default function Project() {
    const projects = [
        {
            title: "The City Tech GDG Club",
            tech: [SiNextdotjs, SiNodedotjs, SiGit, SiVercel, SiAppwrite, SiTailwindcss],
            link: "",
            cover: "/project1.jpg",
            background: "bg-indigo-500"
        },
        {
            title: "Harnessing the Finding of ParkingLot Availability Using AI",
            tech: [SiNextdotjs, SiAppwrite, SiNodedotjs, SiPython, SiOpenai, SiVercel, SiTailwindcss],
            link: "",
            cover: "/pklot.webp",
            background: "bg-orange-500"
        },
        {
            title: "AI-Powered Mainframe Performance Monitoring Dashboard",
            tech: [SiIbmwatson, SiNextdotjs, SiGit, SiAppwrite, SiNodedotjs, SiOpenai, SiTailwindcss, SiVercel],
            link: "",
            cover: "/dashboard.avif",
            background: "bg-violet-500"
        },
        {
            title: "AI-Powered Study Group Finder",
            tech: [SiNextdotjs, SiNodedotjs, SiTensorflow, SiIbmcloud, SiIbmwatson, SiAppwrite, SiTailwindcss],
            link: "",
            cover: "/matching.png",
            background: "bg-pink-500"
        }
    ];

    return (
        <div className='py-10 p-5 sm:p-0'>
            <h1 className='text-4xl text-center justify-center py-5 -rotate-6 bg-clip-text underline underline-offset-8 decoration-blue-500 py-10'>
              Projects 🎨</h1>
            <span className="w-[50%] text-1xl text-center block mx-auto py-10  ">
                "Explore My Latest Project: Dive into the details of my most recent work and see how I'm leveraging AI and mainframe technology to drive innovation."
            </span>
            <div className='grid grid-cols-1 sm:grid-cols-2 pt-20 gap-10'>
                {projects.map((project, index) => (
                    <FadeInSection key={index} threshold={0.1} animationClass={`delay-${index * 200}`}>
                        <Link href={project.link}>
                            <div className={cn("p-5 rounded-md", project.background)}>
                                <DirectionAwareHover imageUrl={project.cover} className='w-full h-50 object-cover rounded-md'>
                                    <h1 className='text-2xl'>{project.title}</h1>
                                    <div className='flex flex-wrap gap-2 mt-4'>
                                        {project.tech.map((TechIcon, i) => (
                                            <TechIcon key={i} className='w-6 h-6' />
                                        ))}
                                    </div>
                                </DirectionAwareHover>
                            </div>
                        </Link>
                    </FadeInSection>
                ))}
            </div>
        </div>
    );
}
