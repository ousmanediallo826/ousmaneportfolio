// components/LenisClient.tsx
'use client';

import { useEffect } from 'react';
import Lenis from 'lenis';

export default function LenisClient() {
  useEffect(() => {
    const lenis = new Lenis();

    lenis.on('scroll', (e: any) => {
      console.log(e);
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return null; // This component doesn't render anything to the DOM
}
