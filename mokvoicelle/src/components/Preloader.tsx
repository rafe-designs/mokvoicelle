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
          className="fixed inset-0 z-[100] bg-[#02040A] flex items-center justify-center overflow-hidden select-none"
        >
          {/* Preloader Video matching your brand introduction */}
          <video
            ref={videoRef}
            autoPlay
            muted
            playsInline
            onEnded={handleVideoEnded}
            className="w-full h-full object-cover"
          >
            {/* Replace with your actual video source path if hosted locally */}
            <source src="/preloader.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Optional fast skip button */}
          <button
            onClick={() => setIsLoading(false)}
            className="absolute bottom-8 right-8 px-4 py-2 rounded-lg bg-slate-900/60 border border-slate-700/50 text-xs font-mono text-slate-400 hover:text-white backdrop-blur-md transition-all z-10"
          >
            SKIP INTRO →
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}