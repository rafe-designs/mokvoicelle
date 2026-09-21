// src/components/TeamSlider.tsx
'use client';

import React, { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Sparkles, ArrowRight, ExternalLink, X, Briefcase, Award, Code, CheckCircle2 } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { TEAM_MEMBERS, TeamMember } from '../data/team';

export default function TeamSlider() {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);

  // Manual & Automated Scroll Handling
  const scroll = useCallback((direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const cardWidth = 300; 
      const maxScrollLeft = carouselRef.current.scrollWidth - carouselRef.current.clientWidth;
      const currentScroll = carouselRef.current.scrollLeft;

      if (direction === 'right') {
        if (currentScroll >= maxScrollLeft - 10) {
          carouselRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          carouselRef.current.scrollBy({ left: cardWidth, behavior: 'smooth' });
        }
      } else {
        if (currentScroll <= 10) {
          carouselRef.current.scrollTo({ left: maxScrollLeft, behavior: 'smooth' });
        } else {
          carouselRef.current.scrollBy({ left: -cardWidth, behavior: 'smooth' });
        }
      }
    }
  }, []);

  // Automatic Slider Interval (3.5 Seconds)
  useEffect(() => {
    if (isHovered || selectedMember) return;

    const autoSlideInterval = setInterval(() => {
      scroll('right');
    }, 3500);

    return () => clearInterval(autoSlideInterval);
  }, [isHovered, selectedMember, scroll]);

  return (
    <section id="team" className="py-24 bg-slate-950 text-white relative overflow-hidden border-t border-slate-800/40">
      
      {/* Background Brand Lighting Accent */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[600px] h-[400px] bg-[#1E3DF0]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header & Control Buttons */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#1E3DF0]/40 bg-[#1E3DF0]/10 text-xs font-semibold text-white mb-3 shadow-sm shadow-[#1E3DF0]/20">
              <Sparkles className="w-3.5 h-3.5" />
              <span>World-Class Talent</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4">Meet the Minds Behind MOK</h2>
            
            {/* Button that takes you directly to the team page */}
            <Link
              href="/team"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#1E3DF0]/10 hover:bg-[#1E3DF0]/20 border border-[#1E3DF0]/40 text-xs font-semibold text-white hover:text-white transition-all shadow-md group"
            >
              <span>Explore Full Team Hub</span>
              <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>

          {/* Active Navigation Controls */}
          <div className="flex gap-3">
            <button
              onClick={() => scroll('left')}
              className="p-3 rounded-xl bg-slate-900 border border-slate-800 hover:bg-[#1E3DF0] hover:border-[#1E3DF0] transition-all text-slate-300 hover:text-white shadow-md active:scale-95"
              aria-label="Previous Slide"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="p-3 rounded-xl bg-slate-900 border border-slate-800 hover:bg-[#1E3DF0] hover:border-[#1E3DF0] transition-all text-slate-300 hover:text-white shadow-md active:scale-95"
              aria-label="Next Slide"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Carousel Container */}
        <div 
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="relative"
        >
          <div
            ref={carouselRef}
            className="flex gap-6 overflow-x-auto scrollbar-none scroll-smooth pb-8 pt-2 cursor-grab active:cursor-grabbing"
          >
            {TEAM_MEMBERS.map((member) => (
              <motion.div
                key={member.id}
                onClick={() => setSelectedMember(member)}
                whileHover={{ y: -6 }}
                transition={{ type: 'spring', stiffness: 300, damping: 22 }}
                className="w-[260px] sm:w-[280px] bg-slate-900/80 border border-slate-800 rounded-2xl overflow-hidden group hover:border-[#1E3DF0]/60 hover:shadow-[0_12px_30px_rgba(30,61,240,0.25)] transition-all duration-300 flex-shrink-0 cursor-pointer"
              >
                {/* Image Container with Top Object Position for Face Visibility */}
                <div className="relative h-64 w-full overflow-hidden bg-slate-800">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="(max-width: 640px) 260px, 280px"
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80" />
                </div>

                {/* Card Content Details */}
                <div className="p-5 flex flex-col justify-between">
                  <div>
                    <span className="text-[11px] font-bold text-white uppercase tracking-wider block mb-1">
                      {member.role}
                    </span>
                    <h3 className="text-lg font-bold text-white mb-2 line-clamp-1">{member.name}</h3>
                    <p className="text-slate-400 text-xs line-clamp-2 leading-relaxed">
                      {member.bio}
                    </p>
                  </div>

                  <button className="mt-4 text-xs font-semibold text-slate-300 group-hover:text-[#1E3DF0] transition-colors flex items-center gap-1.5">
                    <span>Read Full Bio</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>

      {/* Expanded Detailed Profile Modal (Matches Team Page Style) */}
      <AnimatePresence>
        {selectedMember && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-2xl bg-[#121A33] border border-[#1E3DF0]/40 rounded-3xl p-6 md:p-10 text-white shadow-[0_25px_60px_rgba(30,61,240,0.35)] my-8"
            >
              <button
                onClick={() => setSelectedMember(null)}
                className="absolute top-6 right-6 p-2.5 rounded-full bg-slate-800/80 text-slate-300 hover:text-white hover:bg-[#1E3DF0] transition-all"
                aria-label="Close Modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 mb-8 pb-6 border-b border-slate-800">
                <div className="relative w-24 h-24 rounded-2xl overflow-hidden border-2 border-[#1E3DF0] flex-shrink-0 shadow-lg">
                  <Image
                    src={selectedMember.image}
                    alt={selectedMember.name}
                    fill
                    sizes="96px"
                    className="object-cover object-top"
                  />
                </div>
                <div className="text-center sm:text-left">
                  <span className="text-xs font-mono px-3 py-1 rounded-full bg-[#1E3DF0]/10 text-[#1E3DF0] border border-[#1E3DF0]/20 inline-block mb-2">
                    Team Profile
                  </span>
                  <h3 className="text-2xl md:text-3xl font-bold">{selectedMember.name}</h3>
                  <p className="text-[#1E3DF0] text-sm font-semibold mt-1">{selectedMember.role}</p>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-2">
                    <Briefcase className="w-4 h-4 text-[#1E3DF0]" />
                    <span>Professional Overview</span>
                  </h4>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    {selectedMember.bio}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
                    <Award className="w-4 h-4 text-[#1E3DF0]" />
                    <span>Core Competencies & Expertise</span>
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {[
                      "Full-Stack Web Engineering & UI Architecture",
                      "Technical SEO, Performance & Optimization",
                      "Database & Cloud Systems Integration",
                      "Cybersecurity & Security Protocols"
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 bg-slate-900/80 p-3 rounded-xl border border-slate-800/80">
                        <CheckCircle2 className="w-4 h-4 text-[#1E3DF0] shrink-0 mt-0.5" />
                        <span className="text-xs text-slate-200">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
                    <Code className="w-4 h-4 text-[#1E3DF0]" />
                    <span>Technical Tools & Stack</span>
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {["React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js", "Python", "MongoDB", "Git"].map((tool, idx) => (
                      <span key={idx} className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs font-mono text-slate-300">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-800 flex justify-end">
                <button
                  onClick={() => setSelectedMember(null)}
                  className="px-6 py-2.5 rounded-xl bg-[#1E3DF0] hover:bg-[#1832C7] text-white text-xs font-semibold shadow-md transition-all"
                >
                  Close Profile
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}