// src/components/Preloader.tsx
'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Check if preloader has already played in this session
    const hasPlayed = sessionStorage.getItem('mok_preloader_played');
    
    if (!hasPlayed) {
      setIsLoading(true);
      sessionStorage.setItem('mok_preloader_played', 'true');
    }
  }, []);

  const handleVideoEnded = () => {
    setIsLoading(false);
  };

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 1.02,
            filter: 'blur(10px)',
            transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] },
          }}
          className="fixed inset-0 z-[100] bg-[#02040A] flex items-center justify-center overflow-hidden select-none w-screen h-screen"
        >
          {/* Mobile-optimized responsive video container */}
          <div className="absolute inset-0 w-full h-full overflow-hidden flex items-center justify-center bg-black">
            <video
              ref={videoRef}
              autoPlay
              muted
              playsInline
              preload="auto"
              onEnded={handleVideoEnded}
              className="w-full h-full object-cover object-center absolute inset-0"
            >
              <source src="/preloader.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          {/* Skip Intro Button optimized for mobile taps */}
          <button
            onClick={() => setIsLoading(false)}
            className="absolute bottom-6 right-6 md:bottom-8 md:right-8 px-4 py-2 rounded-xl bg-slate-900/80 border border-slate-700/60 text-xs font-mono text-slate-300 hover:text-white backdrop-blur-md transition-all z-20 shadow-lg active:scale-95"
          >
            SKIP INTRO →
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}