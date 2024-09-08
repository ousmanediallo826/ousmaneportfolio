"use client";
import React from "react";
import { LinkPreview } from "@/app/(home)/ui/link-preview";

export function LinkPreviewDemoSecond() {
  return (
    <div className="flex justify-center">
         <LinkPreview
          url="https://www.linkedin.com/in/ousmane-diallo-005ab7246/"
         >
         <span className="text-2xl sm:text-4xl bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-4 from-purple-500 via-violet-500 to-pink-500 [text-shadow:0_0_rgba(0,0,0,0.1)]">{"I am Ousmane Diallo"}</span>
         </LinkPreview>
        
    </div>
  );
}
export { LinkPreview };

