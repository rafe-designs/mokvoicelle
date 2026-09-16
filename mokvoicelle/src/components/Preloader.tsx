'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const loadingPhases = [
  'INITIALIZING AUDIO ENGINE',
  'CALIBRATING STUDIO FREQUENCIES',
  'LOADING HIGH-DEFINITION ASSETS',
  'SYNCHRONIZING MEDIA PIPELINES',
  'COMPOSING BRAND FRAMEWORK',
  'BRINGING YOUR CONTENT ALIVE',
];

export default function Preloader() {
  const [mounted, setMounted] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [phaseIndex, setPhaseIndex] = useState(0);

  useEffect(() => {
    setMounted(true);

    // Prevent execution during build-time SSR/Prerendering
    if (typeof window === 'undefined') return;

    // Check if user already saw the preloader in this session
    const hasLoaded = sessionStorage.getItem('mok_has_loaded');
    if (hasLoaded) {
      setIsLoading(false);
      return;
    }

    // Extended timer for ~25-second loading sequence (250ms * 100 steps = 25,000ms)
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsLoading(false);
            sessionStorage.setItem('mok_has_loaded', 'true');
          }, 800);
          return 100;
        }

        const nextVal = prev + 1;

        if (nextVal === 15) setPhaseIndex(1);
        if (nextVal === 35) setPhaseIndex(2);
        if (nextVal === 55) setPhaseIndex(3);
        if (nextVal === 75) setPhaseIndex(4);
        if (nextVal === 90) setPhaseIndex(5);

        return nextVal;
      });
    }, 250);

    return () => clearInterval(interval);
  }, []);

  // Do not render anything during static generation or before client hydration
  if (!mounted) return null;

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 1.08,
            filter: 'blur(12px)',
            transition: { duration: 1, ease: [0.76, 0, 0.24, 1] },
          }}
          className="fixed inset-0 z-[100] bg-[#02040A] flex flex-col items-center justify-between py-10 px-6 overflow-hidden select-none"
        >
          {/* 1. Atmospheric Ambient & Grid Background */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#1E3DF0]/20 via-[#060A17]/80 to-[#02040A] pointer-events-none" />
          
          <div className="absolute inset-0 opacity-15 pointer-events-none">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <pattern id="preloader-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#1E3DF0" strokeWidth="0.6" />
              </pattern>
              <rect width="100%" height="100%" fill="url(#preloader-grid)" />
            </svg>
          </div>

          {/* Top Status Header */}
          <div className="w-full max-w-5xl flex justify-between items-center relative z-10 font-mono text-[10px] tracking-widest text-slate-500 uppercase border-b border-slate-900 pb-4">
            <div className="flex items-center gap-2 text-slate-300">
              <span className="w-2 h-2 rounded-full bg-[#1E3DF0] animate-ping" />
              <span>MOK VOICELLE STUDIO ENGINE</span>
            </div>
            <span>SYS.VER 2.4 / LONGRUN</span>
          </div>

          {/* 2. Central Logo Stage */}
          <div className="relative flex flex-col items-center justify-center my-auto z-10">
            
            {/* Sonic Wave Pulse Rings */}
            {[...Array(4)].map((_, i) => (
              <motion.div
                key={i}
                animate={{
                  scale: [0.7, 2.2 + i * 0.4],
                  opacity: [0.5, 0],
                  rotate: [0, 90],
                }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  delay: i * 0.8,
                  ease: 'easeOut',
                }}
                className="absolute w-56 h-56 rounded-full border border-[#1E3DF0]/30 border-dashed pointer-events-none"
              />
            ))}

            {/* Logo Pedestal */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative p-10 rounded-3xl bg-[#060B1E]/60 border border-[#1E3DF0]/30 backdrop-blur-2xl shadow-[0_0_60px_rgba(30,61,240,0.3)] flex flex-col items-center"
            >
              {/* Branded Corner Accents */}
              <div className="absolute top-2 left-2 w-2 h-2 border-t-2 border-l-2 border-[#1E3DF0]" />
              <div className="absolute top-2 right-2 w-2 h-2 border-t-2 border-r-2 border-[#1E3DF0]" />
              <div className="absolute bottom-2 left-2 w-2 h-2 border-b-2 border-l-2 border-[#1E3DF0]" />
              <div className="absolute bottom-2 right-2 w-2 h-2 border-b-2 border-r-2 border-[#1E3DF0]" />

              <Image
                src="/images/team/moklogo.png"
                alt="MOK Voicelle"
                width={280}
                height={90}
                style={{ width: 'auto', height: '90px' }}
                className="object-contain brightness-125 drop-shadow-[0_0_35px_rgba(30,61,240,0.8)]"
                priority
              />

              {/* Shimmer Light Flare Beam */}
              <motion.div
                initial={{ x: '-200%' }}
                animate={{ x: '200%' }}
                transition={{
                  duration: 2.2,
                  repeat: Infinity,
                  repeatDelay: 0.6,
                  ease: 'easeInOut',
                }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 pointer-events-none"
              />
            </motion.div>

            {/* Equalizer Visualizer Bars */}
            <div className="flex items-end gap-1.5 h-10 mt-8">
              {[35, 75, 45, 95, 60, 100, 80, 50, 90, 40, 85, 65, 30, 90, 50].map((height, idx) => (
                <motion.div
                  key={idx}
                  animate={{ height: [`${height * 0.25}%`, `${height}%`, `${height * 0.15}%`] }}
                  transition={{
                    duration: 0.7 + (idx % 4) * 0.15,
                    repeat: Infinity,
                    repeatType: 'reverse',
                    ease: 'easeInOut',
                  }}
                  className="w-1.5 bg-gradient-to-t from-[#1E3DF0] via-indigo-400 to-sky-300 rounded-full shadow-[0_0_10px_#1E3DF0]"
                />
              ))}
            </div>
          </div>

          {/* 3. Progress Bar & Telemetry Status */}
          <div className="w-full max-w-md flex flex-col items-center gap-3 relative z-10">
            <div className="w-full flex justify-between items-center text-xs font-mono">
              <motion.span
                key={phaseIndex}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="text-slate-300 font-semibold tracking-wider text-[11px]"
              >
                {loadingPhases[phaseIndex]}
              </motion.span>
              <span className="text-[#1E3DF0] font-extrabold text-sm font-mono">{progress}%</span>
            </div>

            {/* Progress Track */}
            <div className="w-full h-2 bg-slate-950 border border-slate-800 rounded-full overflow-hidden relative p-0.5">
              <motion.div
                className="h-full bg-gradient-to-r from-[#1E3DF0] via-indigo-500 to-[#1E3DF0] rounded-full shadow-[0_0_18px_#1E3DF0]"
                style={{ width: `${progress}%` }}
                transition={{ ease: 'linear' }}
              />
            </div>

            <p className="text-[10px] font-mono text-slate-500 uppercase tracking-widest mt-1">
              HIGH-IMPACT WEB • VOICEOVER • MEDIA PRODUCTION
            </p>
          </div>

        </motion.div>
      )}
    </AnimatePresence>
  );
}