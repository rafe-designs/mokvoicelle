// src/components/Preloader.tsx
'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Zap, ShieldCheck } from 'lucide-react';

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Check if preloader has already played in this session
    const hasPlayed = sessionStorage.getItem('mok_preloader_played');
    
    if (!hasPlayed) {
      setIsLoading(true);
      sessionStorage.setItem('mok_preloader_played', 'true');

      // Simulate smooth progress counter from 0 to 100% over 2.2 seconds
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            return 100;
          }
          return prev + 4;
        });
      }, 80);

      // Auto dismiss after 2.5 seconds
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 2600);

      return () => {
        clearInterval(interval);
        clearTimeout(timer);
      };
    }
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 1.05,
            filter: 'blur(12px)',
            transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] },
          }}
          className="fixed inset-0 z-[100] bg-[#0B0F19] flex flex-col items-center justify-center overflow-hidden select-none w-screen h-screen px-6"
        >
          {/* Background Ambient Glow FX */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] md:w-[600px] h-[350px] md:h-[600px] bg-[#1E3DF0]/15 rounded-full blur-[140px] pointer-events-none" />

          <div className="relative z-10 flex flex-col items-center max-w-md w-full text-center">
            
            {/* Animated Brand Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#1E3DF0]/40 bg-[#1E3DF0]/10 text-xs font-semibold text-white mb-6 shadow-lg shadow-[#1E3DF0]/20"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#1E3DF0]" />
              <span className="tracking-wider uppercase font-mono">MOK Voicelle & Digital Hub</span>
            </motion.div>

            {/* Main Brand Title */}
            <motion.h1
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl md:text-6xl font-extrabold tracking-tight text-white mb-3"
            >
              MOK <span className="text-[#1E3DF0]">Voicelle</span>
            </motion.h1>

            {/* Subtitle / Value Prop */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-slate-400 text-xs md:text-sm mb-10 tracking-wide"
            >
              Engineering Digital Excellence, Voiceovers & Immersive Web Apps
            </motion.p>

            {/* Progress Bar Container */}
            <motion.div
              initial={{ opacity: 0, width: '0%' }}
              animate={{ opacity: 1, width: '100%' }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="w-full bg-slate-900 border border-slate-800 rounded-full h-2 p-0.5 overflow-hidden mb-4 relative"
            >
              <div
                className="bg-gradient-to-r from-blue-600 to-[#1E3DF0] h-full rounded-full transition-all duration-100 shadow-[0_0_15px_rgba(30,61,240,0.8)]"
                style={{ width: `${progress}%` }}
              />
            </motion.div>

            {/* Loading Percentage & Status */}
            <div className="w-full flex justify-between items-center text-[11px] font-mono text-slate-400 px-1">
              <span>INITIALIZING SYSTEM</span>
              <span className="text-white font-bold">{progress}%</span>
            </div>

          </div>

          {/* Skip Intro Button */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            onClick={() => setIsLoading(false)}
            className="absolute bottom-8 px-5 py-2 rounded-xl bg-slate-900/80 border border-slate-700/60 text-xs font-mono text-slate-300 hover:text-white backdrop-blur-md transition-all z-20 shadow-lg active:scale-95 hover:border-[#1E3DF0]"
          >
            SKIP INTRO →
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}