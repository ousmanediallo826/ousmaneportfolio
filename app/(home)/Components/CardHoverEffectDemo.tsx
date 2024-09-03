'use client'
import { HoverEffect } from "../ui/card-hover-effect";
import {
    SiGit,
    SiJavascript,
    SiNodedotjs,
    SiReact,
    SiPython,
    SiNextdotjs

} from "react-icons/si"
export function CardHoverEffectDemo() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "Next",
    Icon: SiNextdotjs,
   
   
    link: "https://nextjs.org",
  },
  {
    title: "JavaScript",
     Icon: SiJavascript,

    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    title: "Git",
    Icon: SiGit,
   
   
    link: "https://git-scm.com",
  },
  {
    title: "Python",
   
   Icon: SiPython,
    link: "https://www.python.org",
  },
  {
    title: "NodeJs",
    Icon: SiNodedotjs,
 
    link: "https://nodejs.org/en",
  },
  {
    title: "React",
    Icon: SiReact,
    link: "https://react.dev",
  },
];
