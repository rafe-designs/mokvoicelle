'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const BRAND_COLOR = '#1E3DF0';

const loadingPhases = [
  'INITIALIZING AUDIO ENGINE',
  'CALIBRATING STUDIO FREQUENCIES',
  'LOADING HIGH-DEFINITION ASSETS',
  'SYNCHRONIZING MEDIA PIPELINES',
  'BRINGING BRAND ALIVE',
];

// --- Animation Variants for Text and Mic ---

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.05, // Faster stagger for 2s timing
      delayChildren: 0.1,
    },
  },
};

const letterVariants = {
  hidden: { opacity: 0, y: 15, filter: 'blur(4px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] },
  },
};

const micIconVariants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: {
      delay: 0.7, // Draws faster to fit the 2s timeline
      duration: 1.0,
      ease: 'easeInOut',
    },
  },
};

export default function Preloader() {
  const [mounted, setMounted] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [phaseIndex, setPhaseIndex] = useState(0);

  useEffect(() => {
    setMounted(true);
    if (typeof window === 'undefined') return;

    // --- 2 Seconds Loading Sequence ---
    // Total duration: 2000ms. 100 steps total.
    // Step interval = 2000 / 100 = 20ms
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 99) {
          clearInterval(interval);
          setTimeout(() => {
            setIsLoading(false);
          }, 300); 
          return 100;
        }

        const nextVal = prev + 1;
        
        // Phase timings scaled for 2 seconds
        if (nextVal === 25) setPhaseIndex(1);
        if (nextVal === 50) setPhaseIndex(2);
        if (nextVal === 75) setPhaseIndex(3);
        if (nextVal === 90) setPhaseIndex(4);

        return nextVal;
      });
    }, 20); // 20ms * 100 steps = 2 seconds

    return () => clearInterval(interval);
  }, []);

  if (!mounted) return null;

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 1.05,
            filter: 'blur(10px)',
            transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] },
          }}
          className="fixed inset-0 z-[100] bg-[#02040A] flex flex-col items-center justify-between py-10 px-6 overflow-hidden select-none"
        >
          {/* 1. Atmospheric Ambient & Grid Background */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#1E3DF0]/15 via-[#060A17]/50 to-[#02040A] pointer-events-none" />
          
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <pattern id="preloader-grid-small" width="30" height="30" patternUnits="userSpaceOnUse">
                <path d="M 30 0 L 0 0 0 30" fill="none" stroke={BRAND_COLOR} strokeWidth="0.5" />
              </pattern>
              <rect width="100%" height="100%" fill="url(#preloader-grid-small)" />
            </svg>
          </div>

          {/* Top Status Header */}
          <div className="w-full max-w-5xl flex justify-between items-center relative z-10 font-mono text-[10px] tracking-widest text-slate-500 uppercase border-b border-slate-900/50 pb-4">
            <div className="flex items-center gap-2 text-slate-400">
              <span className="w-2 h-2 rounded-full bg-[#1E3DF0] animate-pulse" />
              <span>MOK VOICELLE STUDIO ENGINE</span>
            </div>
            <span>BUILD V3.1 / FAST</span>
          </div>

          {/* 2. Central Animated Logo Stage */}
          <div className="relative flex flex-col items-center justify-center my-auto z-10">
            
            {/* Animated Text Container */}
            <motion.div
              className="flex items-center text-6xl md:text-7xl font-bold tracking-tighter"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {/* "Mok" (White) */}
              {['M', 'o', 'k'].map((letter, index) => (
                <motion.span key={index} variants={letterVariants} className="text-white">
                  {letter}
                </motion.span>
              ))}

              {/* Animated Microphone Icon */}
              <motion.svg
                className="w-10 h-10 md:w-12 md:h-12 mx-3 overflow-visible"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                initial="hidden"
                animate="visible"
              >
                <motion.path
                  d="M12 1A3 3 0 0 0 9 4V11A3 3 0 0 0 15 11V4A3 3 0 0 0 12 1Z"
                  stroke={BRAND_COLOR}
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  variants={micIconVariants}
                />
                <motion.path
                  d="M19 11V12C19 15.866 15.866 19 12 19C8.13401 19 5 15.866 5 12V11"
                  stroke={BRAND_COLOR}
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  variants={micIconVariants}
                />
                <motion.path
                  d="M12 19V23"
                  stroke={BRAND_COLOR}
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  variants={micIconVariants}
                />
              </motion.svg>

              {/* "Voicelle" (Branded Color) */}
              {['V', 'o', 'i', 'c', 'e', 'l', 'l', 'e'].map((letter, index) => (
                <motion.span 
                  key={`v-${index}`} 
                  variants={letterVariants} 
                  style={{ color: BRAND_COLOR }}
                  className="inline-block"
                >
                  {letter}
                </motion.span>
              ))}
            </motion.div>

            {/* Subtle Glowing Subtitle */}
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4, duration: 0.5 }}
              className="text-sm font-mono text-slate-600 uppercase tracking-[0.2em] mt-6"
            >
              TURNING VISION INTO DOMINANCE
            </motion.p>
          </div>

          {/* 3. Progress Bar & Telemetry Status */}
          <div className="w-full max-w-md flex flex-col items-center gap-3 relative z-10">
            <div className="w-full flex justify-between items-center text-xs font-mono h-6">
              <AnimatePresence mode="wait">
                <motion.span
                  key={phaseIndex}
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 5 }}
                  transition={{ duration: 0.15 }}
                  className="text-slate-400 font-medium tracking-wider text-[11px]"
                >
                  {loadingPhases[phaseIndex]}
                </motion.span>
              </AnimatePresence>
              <span style={{ color: BRAND_COLOR }} className="font-extrabold text-sm font-mono tabular-nums">{progress}%</span>
            </div>

            {/* Progress Track */}
            <div className="w-full h-1.5 bg-slate-900 rounded-full overflow-hidden relative">
              <motion.div
                className="h-full rounded-full shadow-[0_0_10px_#1E3DF0]"
                style={{ 
                    width: `${progress}%`,
                    backgroundColor: BRAND_COLOR
                }}
                transition={{ ease: 'linear', duration: 0.02 }}
              />
            </div>
          </div>

        </motion.div>
      )}
    </AnimatePresence>
  );
}