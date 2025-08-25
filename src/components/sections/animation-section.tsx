'use client';

import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const AnimationSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const grid: [number, number] = [6, 12];

  const createBoxes = (): React.ReactElement[] => {
    return Array.from({ length: grid[0] * grid[1] }).map((_, index) => (
      <div key={index} className="box w-5 h-5 bg-main rounded-md"></div>
    ));
  };

  useGSAP(
    () => {
      const tl = gsap.timeline({ repeat: -1, repeatDelay: 0.5 });

      const animateBoxes = (
        from: 'start' | 'center' | 'edges' | number,
        axis: 'x' | 'y' | null,
        ease: string,
      ) => {
        tl.to('.box', {
          duration: 1,
          scale: 0.1,
          y: 60,
          yoyo: true,
          repeat: 1,
          ease: 'power1.inOut',
          stagger: {
            amount: 1.5,
            grid: grid,
            axis: axis ?? undefined,
            ease: ease,
            from: from,
          },
        });
      };

      // Example animations
      animateBoxes('start', 'x', 'power1.inOut');
      animateBoxes('center', 'y', 'sine.inOut');
      animateBoxes('edges', null, 'power2.inOut');
      animateBoxes(0, null, 'power3.inOut');
    },
    { scope: containerRef },
  );

  return (
    <div ref={containerRef} className="w-full mx-auto py-10">
      <div className="grid gap-2 grid-cols-12 grid-rows-6">{createBoxes()}</div>
    </div>
  );
};

export default AnimationSection;
