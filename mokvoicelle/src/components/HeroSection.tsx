'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Play, TrendingUp, ShieldCheck, Cpu, Sparkles } from 'lucide-react';

const words = [
  'Digital Masterpieces',
  'Voiceover Productions',
  'High-Impact Websites',
  'Scalable Media Engines',
];

export default function HeroSection() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const targetWord = words[currentWordIndex];
    const typingSpeed = isDeleting ? 40 : 80;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setCurrentText(targetWord.slice(0, currentText.length + 1));
        if (currentText === targetWord) {
          setTimeout(() => setIsDeleting(true), 2000); // Pause before backspacing
        }
      } else {
        setCurrentText(targetWord.slice(0, currentText.length - 1));
        if (currentText === '') {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentWordIndex]);

  return (
    <section className="relative min-h-[98vh] flex items-center justify-center bg-slate-950 text-white px-6 md:px-12 overflow-hidden pt-28 pb-16">
      
      {/* 1. Tech Grid Background */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="brand-grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#1E3DF0" strokeWidth="0.8" />
              <circle cx="60" cy="0" r="1.5" fill="#1E3DF0" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#brand-grid)" />
        </svg>
      </div>

      {/* Main Grid Container */}
      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
        
        {/* Left Column: Typing Pitch Copy */}
        <div className="lg:col-span-6 flex flex-col items-start text-left">
          
          <motion.div 
            initial={{ opacity: 0, y: 15 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#1E3DF0]/40 bg-[#1E3DF0]/10 text-xs font-semibold text-white mb-6 shadow-sm shadow-[#1E3DF0]/20"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#1E3DF0]" />
            <span>Digital Experience & Strategic Excellence</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6, delay: 0.1 }} 
            className="text-4xl sm:text-6xl lg:text-6xl font-extrabold tracking-tight leading-[1.08] mb-6 text-white min-h-[160px] sm:min-h-[180px]"
          >
            We Craft{' '}
            <span className="bg-gradient-to-r from-[#1E3DF0] via-blue-400 to-indigo-300 bg-clip-text text-transparent">
              {currentText}
            </span>
            <span className="animate-pulse text-[#1E3DF0]">|</span>
            <br />& Brand Stories
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6, delay: 0.2 }} 
            className="text-slate-400 text-lg sm:text-xl mb-10 leading-relaxed max-w-xl"
          >
            From full-stack web architectures and 3D animations to voiceover production and scalable marketing engines — turning vision into market dominance.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6, delay: 0.3 }} 
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          >
            <a 
              href="#contact" 
              className="flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-[#1E3DF0] hover:bg-[#1832C7] font-semibold text-white transition-all shadow-xl shadow-[#1E3DF0]/30 hover:scale-[1.02] active:scale-95"
            >
              Start a Project <ArrowUpRight className="w-5 h-5" />
            </a>
            <a 
              href="#portfolio" 
              className="flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-slate-900/80 border border-slate-800 hover:bg-slate-800 font-semibold text-slate-300 transition-all backdrop-blur-md hover:scale-[1.02] active:scale-95"
            >
              <Play className="w-4 h-4 fill-current" /> Watch Showreel
            </a>
          </motion.div>
        </div>

        {/* Right Column (Visual) Remains untouched */}
        <div className="lg:col-span-6 relative flex items-center justify-center min-h-[500px]">
          <motion.div 
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="relative w-full max-w-md aspect-square flex items-center justify-center"
          >
            <div className="absolute bottom-4 w-80 h-28 rounded-[100%] bg-gradient-to-b from-[#1E3DF0]/20 via-slate-900/80 to-[#1E3DF0]/40 border border-[#1E3DF0]/40 backdrop-blur-3xl shadow-[0_20px_60px_rgba(30,61,240,0.45)] transform -rotate-3 flex items-center justify-center">
              <div className="w-64 h-16 rounded-[100%] border border-[#1E3DF0]/30 bg-[#1E3DF0]/10" />
            </div>

            <motion.div
              animate={{ y: [0, -18, 0], rotate: [0, 6, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute top-2 left-2 z-30 w-24 h-24 rounded-2xl bg-gradient-to-br from-white/20 via-[#1E3DF0]/20 to-transparent border border-white/40 backdrop-blur-xl shadow-2xl flex items-center justify-center p-3 transform -rotate-12"
            >
              <div className="w-10 h-10 rounded-xl bg-[#1E3DF0] flex items-center justify-center shadow-lg shadow-[#1E3DF0]/50">
                <Cpu className="w-6 h-6 text-white" />
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 20, 0], rotate: [0, -8, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 0.4 }}
              className="absolute top-0 right-4 z-30 w-28 h-28 rounded-3xl bg-gradient-to-bl from-white/20 via-indigo-500/20 to-transparent border border-white/40 backdrop-blur-xl shadow-2xl flex flex-col items-center justify-center gap-1.5 transform rotate-12"
            >
              <div className="w-9 h-9 rounded-full bg-[#1E3DF0]/30 border border-[#1E3DF0]/50 flex items-center justify-center text-white">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-bold text-slate-200">Verified Systems</span>
            </motion.div>

            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
              className="relative z-20 w-48 h-80 rounded-full bg-gradient-to-b from-white/25 via-[#1E3DF0]/10 to-[#1E3DF0]/30 border-2 border-white/40 backdrop-blur-2xl shadow-[0_0_80px_rgba(30,61,240,0.35)] flex flex-col justify-end p-5 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-[#1E3DF0]/50 via-transparent to-transparent opacity-90" />
              
              <div className="flex items-end justify-between gap-3 h-full relative z-10 pb-4 px-1">
                <motion.div 
                  animate={{ height: ['45%', '80%', '45%'] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                  className="w-1/3 bg-gradient-to-t from-[#1E3DF0] to-blue-400 rounded-full shadow-[0_0_18px_#1E3DF0]"
                />
                <motion.div 
                  animate={{ height: ['70%', '95%', '70%'] }}
                  transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                  className="w-1/3 bg-gradient-to-t from-indigo-600 to-[#1E3DF0] rounded-full shadow-[0_0_18px_#6366f1]"
                />
                <motion.div 
                  animate={{ height: ['35%', '65%', '35%'] }}
                  transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                  className="w-1/3 bg-gradient-to-t from-sky-500 to-indigo-400 rounded-full shadow-[0_0_18px_#38bdf8]"
                />
              </div>
            </motion.div>

            <motion.div
              animate={{ x: [0, 10, 0], y: [0, -10, 0] }}
              transition={{ duration: 6.5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute left-[-20px] bottom-12 z-30 bg-slate-900/90 border border-[#1E3DF0]/40 backdrop-blur-2xl p-4 rounded-2xl shadow-2xl w-64"
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#1E3DF0] animate-ping" />
                  <span className="text-xs font-semibold text-white">Client Success Metric</span>
                </div>
                <TrendingUp className="w-4 h-4 text-[#1E3DF0]" />
              </div>
              <div className="text-2xl font-extrabold text-white">$142,900.00</div>
              <div className="text-[10px] text-slate-400 mt-0.5">+240% Engagement Increase</div>
            </motion.div>

            <motion.div
              animate={{ y: [0, -14, 0], scale: [1, 1.08, 1] }}
              transition={{ duration: 4.8, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute right-[-10px] bottom-8 z-30 w-20 h-20 rounded-full bg-gradient-to-tr from-[#1E3DF0]/50 via-white/40 to-indigo-500/20 border border-white/60 backdrop-blur-2xl shadow-2xl flex items-center justify-center"
            >
              <div className="w-8 h-8 rounded-full bg-[#1E3DF0]/70 blur-[3px]" />
            </motion.div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}