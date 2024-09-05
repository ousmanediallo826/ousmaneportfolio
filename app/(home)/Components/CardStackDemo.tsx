"use client";
import React from "react";
import { CardStack } from "../ui/card-stack";
import { cn } from "@/lib/utils";

export function CardStackDemo() {
  return (
    <div className="flex items-center justify-center w-full py-5">
      <div className="flex flex-col items-center w-full max-w-[95%] md:max-w-[85%] lg:max-w-[75%] overflow-x-auto">
        <CardStack items={CARDS} />
      </div>
    </div>
  );
}

// Small utility to highlight the content of specific section of a testimonial content
export const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <span
      className={cn(
        "font-bold bg-emerald-100 text-emerald-700 dark:bg-emerald-700/[0.2] dark:text-emerald-500 px-2 py-0.5 cursor-pointer",
        className
      )}
    >
      {children}
    </span>
  );
};

const CARDS = [
  {
    id: 0,
    name: "IBM Z",
    designation: "IBM Z Ambassador",
    content: (
      <p>
        As an <Highlight>IBM Z Ambassador</Highlight>, I advocate for IBM's
        powerful enterprise computing systems that handle the core operations
        of industries like banking, finance, and healthcare. IBM Z ensures
        high-level security, scalability, and reliability. 
      </p>
    ),
  },
  {
    id: 1,
    name: "Google Developer Club",
    designation: "Club Advocate",
    content: (
      <p>
        The <Highlight>Google Developer Club</Highlight> on campus unites
        developers passionate about Google technologies. From Android to cloud
        computing, we explore, learn, and innovate together.
      </p>
    ),
  },
  {
    id: 2,
    name: "NYC CEO Job Council",
    designation: "Council Advocate",
    content: (
      <p>
        As a <Highlight>NYC CEO Job Council</Highlight> advocate, I help
        students connect with top companies in NYC, creating opportunities for
        mentorship, internships, and career advancement.
      </p>
    ),
  },
  {
    id: 3,
    name: "HelloHive",
    designation: "Platform Advocate",
    content: (
      <p>
        <Highlight>HelloHive</Highlight> connects students with career
        opportunities, emphasizing diversity and inclusion. I help guide
        students toward tools that help them navigate the job market.
      </p>
    ),
  },
];
