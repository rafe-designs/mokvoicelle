// src/components/Portfolio.tsx
'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Play, ExternalLink, Image as ImageIcon, Film, X, Eye, ChevronRight, Briefcase, Compass } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

type Category = 'all' | 'video' | 'design' | 'web';

interface Project {
  id: string;
  title: string;
  category: Category;
  categoryLabel: string;
  type: 'video' | 'image';
  previewUrl: string;
  description: string;
  liveUrl?: string;
  badge?: string;
}

const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Vaceup Digital Academy',
    category: 'web',
    categoryLabel: 'Web Engineering',
    type: 'image',
    previewUrl: '/portfolio/1920w light.png',
    description: 'Interactive educational platform featuring dynamic course navigation, authentication modal flows, and custom student dashboards.',
    liveUrl: 'https://vaceup.netlify.app',
    badge: 'Live Platform',
  },
  {
    id: '2',
    title: 'Luxury Concierge Platform',
    category: 'web',
    categoryLabel: 'Web Engineering & UI',
    type: 'image',
    previewUrl: '/portfolio/Main.png',
    description: 'High-end booking and service management system crafted with modern React and neomorphic interface accents.',
    liveUrl: 'https://sunshineconcierge.netlify.app',
    badge: 'Live Platform',
  },
  {
    id: '3',
    title: 'Healthcare & Hospital Portal',
    category: 'design',
    categoryLabel: 'UI/UX & Systems',
    type: 'image',
    previewUrl: '/portfolio/hospiat.png',
    description: 'Comprehensive patient management UI and digital workflow architecture designed for modern hospital infrastructure.',
    liveUrl: 'https://hospital.netlify.app/',
    badge: 'React Redesign in Progress',
  },
  {
    id: '4',
    title: '3D Cybernetic Showreel',
    category: 'video',
    categoryLabel: '3D Animation',
    type: 'video',
    previewUrl: '/portfolio/portfolio-2.mp4',
    description: 'High-impact 3D animation showcasing immersive visual production.',
  },
  {
    id: '5',
    title: 'Motion Graphics & VFX Spot',
    category: 'video',
    categoryLabel: 'Video Production',
    type: 'video',
    previewUrl: '/portfolio/portfolio-3.mp4',
    description: 'Dynamic promo edit featuring custom transitions and sound design.',
  },
  {
    id: '6',
    title: 'Cinematic Voiceover Feature',
    category: 'video',
    categoryLabel: 'Audio & Media',
    type: 'video',
    previewUrl: '/portfolio/vid.mp4',
    description: 'Studio-grade narration combined with atmospheric background visuals.',
  },
];

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState<Category>('all');
  const [playingVideoUrl, setPlayingVideoUrl] = useState<string | null>(null);
  const [activeImageUrl, setActiveImageUrl] = useState<string | null>(null);

  const filteredProjects = activeTab === 'all' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === activeTab);

  return (
    <section id="portfolio" className="py-32 bg-[#0B1021] text-white relative overflow-hidden border-t border-slate-800/40">
      
      {/* Background Glow Spheres */}
      <div className="absolute top-1/3 left-10 w-[500px] h-[500px] bg-[#1E3DF0]/10 rounded-full blur-[170px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Section matching Services style */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#1E3DF0]/30 bg-[#1E3DF0]/10 text-xs font-semibold text-white mb-4 shadow-inner"
            >
              <span>Featured Works</span>
            </motion.div>

            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-white via-slate-100 to-slate-400 bg-clip-text text-transparent"
            >
              Engineered Case Studies
            </motion.h2>
          </div>

          {/* Action Buttons Hub: See More Portfolio*/}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap items-center gap-4"
          >

            <Link
              href="/portfolio"
              className="inline-flex items-center gap-3 px-6 py-3.5 rounded-2xl bg-[#1E3DF0] hover:bg-[#1832C7] text-white text-sm font-semibold transition-all duration-300 shadow-xl shadow-[#1E3DF0]/30 group"
            >
              <Briefcase className="w-4 h-4 text-white" />
              <span>See More Portfolio</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-2 p-1.5 rounded-2xl bg-[#121A33] border border-slate-800 backdrop-blur-xl w-fit mb-12">
          {(['all', 'web', 'video', 'design'] as Category[]).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2 rounded-xl text-xs font-semibold capitalize transition-all duration-300 ${
                activeTab === tab
                  ? 'bg-[#1E3DF0] text-white shadow-lg shadow-[#1E3DF0]/30'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="group relative bg-[#121A33]/90 border border-slate-800 rounded-2xl overflow-hidden hover:border-[#1E3DF0]/60 transition-all duration-300 shadow-xl hover:shadow-[0_15px_30px_rgba(30,61,240,0.2)] flex flex-col justify-between"
              >
                <div>
                  <div className="relative aspect-video w-full overflow-hidden bg-slate-950 flex items-center justify-center">
                    {project.type === 'video' ? (
                      <div className="relative w-full h-full flex items-center justify-center">
                        <video
                          src={project.previewUrl}
                          autoPlay
                          loop
                          muted
                          playsInline
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-70 group-hover:opacity-90"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#121A33] via-transparent to-black/40" />

                        <button
                          onClick={() => setPlayingVideoUrl(project.previewUrl)}
                          className="absolute z-10 w-12 h-12 rounded-full bg-[#1E3DF0] hover:bg-[#1832C7] text-white flex items-center justify-center shadow-lg shadow-[#1E3DF0]/40 group-hover:scale-110 active:scale-95 transition-all"
                          aria-label="Play Video"
                        >
                          <Play className="w-5 h-5 fill-current ml-0.5" />
                        </button>
                      </div>
                    ) : (
                      <div className="relative w-full h-full">
                        <Image
                          src={project.previewUrl}
                          alt={project.title}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#121A33] via-transparent to-black/30" />
                      </div>
                    )}

                    <div className="absolute top-3 left-3 z-20 px-3 py-1 rounded-lg bg-slate-950/80 border border-white/10 text-[10px] font-bold text-white backdrop-blur-md flex items-center gap-1.5">
                      {project.type === 'video' ? <Film className="w-3 h-3" /> : <ImageIcon className="w-3 h-3" />}
                      <span>{project.categoryLabel}</span>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-lg font-bold text-slate-100 group-hover:text-white transition-colors mb-2 line-clamp-1">
                      {project.title}
                    </h3>
                    <p className="text-slate-400 text-xs leading-relaxed line-clamp-2">
                      {project.description}
                    </p>
                  </div>
                </div>

                <div className="px-6 pt-4 pb-5 flex items-center justify-between border-t border-slate-800/60">
                  {project.badge ? (
                    <span className="inline-flex items-center text-[10px] font-semibold text-slate-300 bg-[#1E3DF0]/10 px-3 py-1 rounded-full border border-[#1E3DF0]/20 shadow-sm">
                      {project.badge}
                    </span>
                  ) : (
                    <span className="text-xs text-slate-500 font-medium">{project.categoryLabel}</span>
                  )}

                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-white hover:text-slate-300 transition-colors py-0.5"
                    >
                      <span>Visit Site</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>

      {/* Video Lightbox Modal */}
      <AnimatePresence>
        {playingVideoUrl && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative w-full max-w-4xl bg-slate-900 border border-[#1E3DF0]/40 rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(30,61,240,0.3)]"
            >
              <button
                onClick={() => setPlayingVideoUrl(null)}
                className="absolute top-4 right-4 z-20 p-2 rounded-full bg-slate-950/80 text-white hover:bg-[#1E3DF0] transition-all"
                aria-label="Close Video"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative aspect-video w-full bg-black">
                <video
                  src={playingVideoUrl}
                  controls
                  autoPlay
                  className="w-full h-full object-contain"
                />
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}