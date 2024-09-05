"use client";
import { TextGenerateEffect } from "../ui/text-generate-effect";

const words = `"Rest at the end, not in the middle" is a powerful reminder to stay dedicated and push through challenges until you reach your goals. By focusing your energy on finishing what you start and saving your rest as a reward for achieving your objectives, you not only maximize your productivity but also ensure a sense of accomplishment. Embrace this mindset, and you’ll find yourself achieving more and feeling more fulfilled. It’s an invitation to return, keep striving, and experience the rewards of your perseverance.`;

export function TextGenerateEffectDemo() {
  return (
    <TextGenerateEffect
      words={words}
      className=" w-[70%] text-center justify-center text-sm text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500"
    />
  );
}
