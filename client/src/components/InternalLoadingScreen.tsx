import { useState, useEffect, useMemo } from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

import animatedDashboards from '@/assets/lottie/Animated_Dashboards_1768676433142_1769414854224.lottie';
import audioVoice from '@/assets/lottie/AudioVoice_1768667815796_1769414854231.lottie';
import cctv from '@/assets/lottie/cctv_1768664928017_1769414854232.lottie';
import chatbot from '@/assets/lottie/chatbot_1768729907589.lottie';
import fingerprint from '@/assets/lottie/Fingerprint_Verification_1768665968177_1769414854232.lottie';
import internetConnectivity from '@/assets/lottie/Internet_Connectivity_1768665281102_1769414854233.lottie';
import lockGreenTick from '@/assets/lottie/LOCK_WITH_GREEN_TICK_1768667680109_1769414854233.lottie';
import irisScan from '@/assets/lottie/Object_detection_iris_scan_1768667569280_1769414854234.lottie';
import tech from '@/assets/lottie/tech_1768667293533_1769414854234.lottie';

const lottieAnimations = [
  animatedDashboards,
  audioVoice,
  cctv,
  chatbot,
  fingerprint,
  internetConnectivity,
  lockGreenTick,
  irisScan,
  tech,
];

function getRandomAnimation(): string {
  const randomIndex = Math.floor(Math.random() * lottieAnimations.length);
  return lottieAnimations[randomIndex];
}

interface InternalLoadingScreenProps {
  onComplete: () => void;
}

export function InternalLoadingScreen({ onComplete }: InternalLoadingScreenProps) {
  const [isVisible, setIsVisible] = useState(true);
  
  const randomAnimation = useMemo(() => getRandomAnimation(), []);

  useEffect(() => {
    const hideTimer = setTimeout(() => {
      setIsVisible(false);
    }, 2000);

    const removeTimer = setTimeout(() => {
      onComplete();
    }, 2500);

    return () => {
      clearTimeout(hideTimer);
      clearTimeout(removeTimer);
    };
  }, [onComplete]);

  return (
    <div 
      className="absolute inset-x-0 top-0 z-[100] flex items-center justify-center bg-transparent transition-opacity duration-500 ease-in-out pointer-events-none"
      style={{ 
        opacity: isVisible ? 1 : 0,
        height: 'min(600px, 80vh)'
      }}
    >
      <div className="relative w-full max-w-[100px] aspect-square flex items-center justify-center">
        <DotLottieReact
          src={randomAnimation}
          loop
          autoplay
          speed={2.0}
          style={{ width: '100%', height: '100%' }}
        />
      </div>
    </div>
  );
}
