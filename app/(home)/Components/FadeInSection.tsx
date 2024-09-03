'use client'
import React, { useEffect, useRef, useState } from 'react';

interface FadeInSectionProps {
  children: React.ReactNode;
  threshold?: number;
  animationClass?: string; // Optional: Additional animation class
}

const FadeInSection: React.FC<FadeInSectionProps> = ({ children, threshold = 0.1, animationClass = '' }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Stop observing once the element is visible
        }
      },
      { threshold }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [threshold]);

  return (
    <div
      ref={sectionRef}
      className={`fade-in ${isVisible ? `visible ${animationClass}` : ''}`}
    >
      {children}
    </div>
  );
};

export default FadeInSection;
