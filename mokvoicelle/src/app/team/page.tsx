// src/app/team/page.tsx
'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, X, Code, Briefcase, Award, CheckCircle2 } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface ExtendedTeamMember {
  id: string;
  name: string;
  role: string;
  department: 'Leadership & Strategy' | 'Engineering & Development' | 'Creative & Media' | 'Content & Marketing';
  bio: string;
  detailedExpertise: string[];
  tools: string[];
  image: string;
}

const DETAILED_TEAM: ExtendedTeamMember[] = [
  {
    id: "1",
    name: "Omojola Kanyinsola",
    role: "CEO & Strategic Lead",
    department: "Leadership & Strategy",
    bio: "Leading innovative digital agency initiatives, driving global recognition, client relations, and transformative brand growth across multi-disciplinary sectors.",
    detailedExpertise: [
      "Executive Business Operations & Strategy",
      "Client Relationship & Account Management",
      "Cross-functional Creative Direction",
      "Digital Agency Scaling & Resource Optimization"
    ],
    tools: ["Notion", "Slack", "Asana", "Google Workspace"],
    image: "/images/team/kanyin.jpg",
  },
  {
    id: "2",
    name: "Aminu Abubakar",
    role: "Lead Software & Web Developer",
    department: "Engineering & Development",
    bio: "Architecting high-performance web applications, modern responsive interfaces, and robust backend integrations with a strong focus on security, SEO optimization, and exceptional user experience.",
    detailedExpertise: [
      "Full-Stack Web Engineering (React, Next.js, Node.js)",
      "Database Architecture (MongoDB, PostgreSQL)",
      "Technical SEO & Performance Audits",
      "Virtualization & Cybersecurity Protocols"
    ],
    tools: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js", "Python", "MongoDB", "Git"],
    image: "/images/team/peter.jpg",
  },
  {
    id: "3",
    name: "Osho Oluwajomiloju",
    role: "3D Animator",
    department: "Creative & Media",
    bio: "Crafting immersive 3D animation, complex character rigging, and dynamic visual storytelling experiences that bring abstract brand concepts to vivid life.",
    detailedExpertise: [
      "3D Modeling, Texturing & Lighting",
      "Character Rigging & Skeletal Animation",
      "Motion Graphics & Visual Effects (VFX)",
      "Cinematic Scene Composition"
    ],
    tools: ["Blender", "Cinema 4D", "After Effects", "Substance Painter"],
    image: "/images/team/jomiloju.jpg",
  },
  {
    id: "4",
    name: "Oyeniyi Olayinka",
    role: "Voiceover Artist",
    department: "Creative & Media",
    bio: "Delivering captivating voiceovers, commercial narrations, IVR prompts, and studio-grade audio branding tailored for impactful corporate and media campaigns.",
    detailedExpertise: [
      "Commercial & Corporate Narration",
      "Interactive Voice Response (IVR) Systems",
      "Audio Engineering, Mixing & Mastering",
      "Character & Audiobook Voice Acting"
    ],
    tools: ["Pro Tools", "Adobe Audition", "Neumann Microphones", "Focusrite Scarlett"],
    image: "/images/team/niyi.jpg",
  },
  {
    id: "5",
    name: "Ariyo David",
    role: "Graphics Designer & Video Editor",
    department: "Creative & Media",
    bio: "Specializing in striking visual identities, high-converting promotional e-flyers, and cinematic post-production video editing that engages and retains audiences.",
    detailedExpertise: [
      "Brand Identity & Logo Design Systems",
      "Digital Marketing Collateral & E-Flyers",
      "Professional Video Editing & Color Grading",
      "Social Media Motion Assets"
    ],
    tools: ["Adobe Photoshop", "Illustrator", "Premiere Pro", "After Effects"],
    image: "/images/team/david.jpg",
  },
  {
    id: "6",
    name: "Alade Omotayo",
    role: "Social Media Manager",
    department: "Content & Marketing",
    bio: "Driving brand engagement, strategic content calendar planning, and digital community growth across multiple social media networks.",
    detailedExpertise: [
      "Social Media Growth Strategy",
      "Content Calendar Planning & Execution",
      "Analytics Tracking & Performance Reporting",
      "Community Management & Audience Engagement"
    ],
    tools: ["Meta Business Suite", "Buffer", "Hootsuite", "Google Analytics", "Canva"],
    image: "/images/team/alade.jpeg",
  },
  {
    id: "7",
    name: "Demilade Mogbojuri",
    role: "Content Creator & Creative Writer",
    department: "Content & Marketing",
    bio: "Crafting compelling narratives, high-conversion copywriting, and brand voice strategies that deeply resonate with target audiences.",
    detailedExpertise: [
      "Copywriting & Brand Messaging",
      "Scriptwriting for Commercials & Video",
      "Long-form Blog & Article Writing",
      "Content Strategy & Editorial Planning"
    ],
    tools: ["Grammarly", "Google Docs", "Notion", "Copy.ai"],
    image: "/images/team/audrey.jpg",
  },
  {
    id: "8",
    name: "Nifemi Oluwalana",
    role: "Music Producer",
    department: "Creative & Media",
    bio: "Engineering custom soundscapes, sonic branding, and professional beat production that elevate media productions and unforgettable brand experiences.",
    detailedExpertise: [
      "Custom Sound Design & Scoring",
      "Music Production & Arrangement",
      "Vocal Tuning & Audio Restoration",
      "Sonic Branding & Jingle Creation"
    ],
    tools: ["FL Studio", "Ableton Live", "Logic Pro", "Waves Plugins"],
    image: "/images/team/nifemi.heic",
  },
  {
    id: "9",
    name: "Israel Uzibor",
    role: "Poet & Video Editor",
    department: "Creative & Media",
    bio: "Blending rhythmic lyrical expression with cinematic post-production editing to create emotive, story-driven visual masterpieces.",
    detailedExpertise: [
      "Spoken Word Poetry & Lyrical Direction",
      "Cinematic Montage Editing",
      "Emotional Audio-Visual Synchronization",
      "Creative Concept Development"
    ],
    tools: ["Adobe Premiere Pro", "DaVinci Resolve", "Audacity"],
    image: "/images/team/israel.jpg",
  },
  {
    id: "10",
    name: "Abiobun Timileyin",
    role: "Content Creator & Videographer",
    department: "Content & Marketing",
    bio: "Capturing striking visual moments, directing on-site shoots, and producing high-converting dynamic video content for modern digital brands.",
    detailedExpertise: [
      "On-Location Videography & Directing",
      "Reel & TikTok Content Production",
      "Lighting & Camera Operation",
      "Raw Footage Cuttings & Rough Edits"
    ],
    tools: ["Sony Mirrorless Cameras", "DJI Gimbals", "Premiere Pro", "CapCut Pro"],
    image: "/images/team/timi.jpg",
  },
];

function TeamContent() {
  const searchParams = useSearchParams();
  const memberQuery = searchParams.get('member');

  const [selectedMember, setSelectedMember] = useState<ExtendedTeamMember | null>(null);
  const [activeDepartment, setActiveDepartment] = useState<string>('All');

  // Automatically open modal if URL contains ?member=Name
  useEffect(() => {
    if (memberQuery) {
      const found = DETAILED_TEAM.find(
        (m) => m.name.toLowerCase() === decodeURIComponent(memberQuery).toLowerCase()
      );
      if (found) {
        setSelectedMember(found);
      }
    }
  }, [memberQuery]);

  const departments = ['All', 'Leadership & Strategy', 'Engineering & Development', 'Creative & Media', 'Content & Marketing'];

  const filteredMembers = activeDepartment === 'All'
    ? DETAILED_TEAM
    : DETAILED_TEAM.filter((m) => m.department === activeDepartment);

  return (
    <main className="min-h-screen bg-[#0B0F19] text-white">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-36 pb-20 px-6 md:px-12 border-b border-slate-800/60 overflow-hidden">
        <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-[#1E3DF0]/10 rounded-full blur-[170px] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-semibold text-slate-400 hover:text-white transition-colors mb-8 bg-slate-900/80 px-4 py-2 rounded-full border border-slate-800"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>

          <div className="max-w-3xl">
            <span className="text-xs font-mono uppercase tracking-widest px-3 py-1 rounded-full bg-[#1E3DF0]/10 border border-[#1E3DF0]/20 text-white mb-4 inline-block">
              World-Class Collective
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
              The Minds Behind MOK Voicelle
            </h1>
            <p className="text-slate-400 text-lg leading-relaxed">
              Meet our multidisciplinary team of engineers, creative directors, voiceover artists, and media experts dedicated to elevating your brand to global standards.
            </p>
          </div>

          {/* Department Filter Tabs */}
          <div className="flex flex-wrap gap-2.5 mt-12 p-2 rounded-2xl bg-[#121A33] border border-slate-800 backdrop-blur-xl">
            {departments.map((dept) => (
              <button
                key={dept}
                onClick={() => setActiveDepartment(dept)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-300 ${
                  activeDepartment === dept
                    ? 'bg-[#1E3DF0] text-white shadow-lg shadow-[#1E3DF0]/30'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                {dept}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Team Grid Section */}
      <section className="py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
              {filteredMembers.map((member) => (
                <motion.div
                  key={member.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => setSelectedMember(member)}
                  className="bg-[#121A33]/90 border border-slate-800 hover:border-[#1E3DF0]/60 rounded-3xl overflow-hidden group hover:shadow-[0_15px_40px_rgba(30,61,240,0.2)] transition-all duration-300 flex flex-col justify-between cursor-pointer"
                >
                  <div className="relative h-72 w-full overflow-hidden bg-slate-800">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#121A33] via-transparent to-transparent opacity-90" />
                    <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-slate-900/80 backdrop-blur-md text-[10px] font-mono text-white border border-slate-800">
                      {member.department}
                    </span>
                  </div>

                  <div className="p-6 flex flex-col justify-between flex-grow">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                      <p className="text-white text-xs font-semibold mb-3">{member.role}</p>
                      <p className="text-slate-400 text-xs leading-relaxed line-clamp-3 mb-4">
                        {member.bio}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                      <span className="text-[11px] text-slate-400 font-medium">Click to view competency</span>
                      <span className="text-xs font-semibold text-white group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                        Full Profile &rarr;
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Detailed Bio & Competency Modal */}
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
                  <span className="text-xs font-mono px-3 py-1 rounded-full bg-[#1E3DF0]/10 text-white border border-[#1E3DF0]/20 inline-block mb-2">
                    {selectedMember.department}
                  </span>
                  <h2 className="text-2xl md:text-3xl font-bold">{selectedMember.name}</h2>
                  <p className="text-white text-sm font-semibold mt-1">{selectedMember.role}</p>
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
                    {selectedMember.detailedExpertise.map((item, idx) => (
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
                    {selectedMember.tools.map((tool, idx) => (
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

      <Footer />
    </main>
  );
}

export default function TeamHubPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#0B0F19] text-white flex items-center justify-center">Loading...</div>}>
      <TeamContent />
    </Suspense>
  );
}