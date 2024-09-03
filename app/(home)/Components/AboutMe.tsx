'use client'
import React from 'react';
import { BentoGridThirdDemo } from './BentoGridThirdDemo';
import FadeInSection from './FadeInSection';

export default function AboutMe() {
  return (
    <FadeInSection>
      <div className='text-center justify-center'>
        <h1 className='text-4xl bg-clip-text -rotate-2 underline underline-offset-8 decoration-blue-500 py-10'>
          About me 👤
        </h1>
        <BentoGridThirdDemo />
      </div>
    </FadeInSection>
  );
}
