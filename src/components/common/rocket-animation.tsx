'use client';
import Lottie, { LottieRefCurrentProps } from 'lottie-react';
import { useRef } from 'react';
import RocketAnimationData from '@/animations/rocket.json';

const RocketAnimation: React.FC = () => {
  const lottieRef = useRef<LottieRefCurrentProps | null>(null);

  return (
    <Lottie
      animationData={RocketAnimationData}
      lottieRef={lottieRef}
      loop
      autoplay
    />
  );
};

export default RocketAnimation;
