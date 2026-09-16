'use client';

import { motion } from "framer-motion";
import { Mic, Code, Video, Palette, Share2, Layers, ArrowUpRight } from "lucide-react";

const services = [
  { 
    icon: Mic, 
    title: "Voiceover & Audio Production", 
    desc: "Studio-grade voice talent, custom audio engineering, sound design, and pristine voice production tailored for media campaigns.",
    accent: "from-[#1E3DF0] to-blue-500"
  },
  { 
    icon: Code, 
    title: "Web & Software Development", 
    desc: "High-performance React/Next.js platforms, robust API architectures, and scalable full-stack web applications.",
    accent: "from-[#1E3DF0] to-indigo-500"
  },
  { 
    icon: Video, 
    title: "Video & 3D Animation", 
    desc: "Captivating 3D volumetric character renders, motion graphics, high-impact promo edits, and visual effects.",
    accent: "from-blue-600 to-[#1E3DF0]"
  },
  { 
    icon: Palette, 
    title: "Brand Identity & Design", 
    desc: "Neomorphic UI systems, high-converting digital design assets, custom typography, and cohesive brand guidelines.",
    accent: "from-[#1E3DF0] to-sky-400"
  },
  { 
    icon: Share2, 
    title: "Social Media Strategy", 
    desc: "Data-backed audience growth engines, content architecture, viral marketing pipelines, and active channel management.",
    accent: "from-indigo-500 to-[#1E3DF0]"
  },
  { 
    icon: Layers, 
    title: "End-to-End Digital Management", 
    desc: "Comprehensive platform maintenance, technical SEO audits, digital operations, and continuous infrastructure care.",
    accent: "from-[#1E3DF0] to-blue-400"
  },
];

export default function ServicesGrid() {
  return (
    <section id="services" className="relative py-32 bg-[#0B0F19] text-white px-6 md:px-12 overflow-hidden">
      
      {/* Subtle Background Glow Spheres for Contrast */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none overflow-hidden">
        <div className="absolute -top-32 left-1/4 w-[500px] h-[500px] bg-[#1E3DF0]/10 rounded-full blur-[140px]" />
        <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-indigo-600/10 rounded-full blur-[130px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#1E3DF0]/30 bg-[#1E3DF0]/10 text-xs font-semibold text-white mb-4 shadow-inner"
          >
            <span>Our Capabilities</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-5xl font-extrabold mb-5 tracking-tight bg-gradient-to-r from-white via-slate-100 to-slate-400 bg-clip-text text-transparent"
          >
            Engineered for High-Impact Brands
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-slate-400 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed"
          >
            Everything you need to dominate your market, built with precision engineering and world-class digital design.
          </motion.p>
        </div>

        {/* 3D Neomorphic Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.25 } }}
              className="relative group p-8 rounded-3xl bg-[#0F1423] transition-all duration-300
                [box-shadow:8px_8px_20px_#05070c,-8px_-8px_20px_rgba(255,255,255,0.03)] 
                hover:[box-shadow:12px_12px_28px_#04060a,-12px_-12px_28px_rgba(30,61,240,0.15)] 
                border border-white/5 hover:border-[#1E3DF0]/40 overflow-hidden"
            >
              {/* Subtle Brand Light Beam on Hover */}
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#1E3DF0]/20 rounded-full blur-2xl group-hover:bg-[#1E3DF0]/40 transition-all duration-500 pointer-events-none" />

              {/* 3D Neomorphic Icon Container */}
              <div className="relative w-16 h-16 rounded-2xl bg-[#0B0F19] flex items-center justify-center mb-8 
                [box-shadow:inset_4px_4px_8px_#05070c,inset_-4px_-4px_8px_rgba(255,255,255,0.04)] 
                border border-white/5 group-hover:border-[#1E3DF0]/50 transition-all duration-300"
              >
                <div className={`p-3 rounded-xl bg-gradient-to-br ${service.accent} text-white shadow-md shadow-[#1E3DF0]/30 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-6 h-6" />
                </div>
              </div>

              {/* Card Title */}
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#1E3DF0] transition-colors duration-300 flex items-center justify-between">
                <span>{service.title}</span>
                <ArrowUpRight className="w-5 h-5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-[#1E3DF0]" />
              </h3>

              {/* Card Description */}
              <p className="text-slate-400 text-sm leading-relaxed font-normal">
                {service.desc}
              </p>

              {/* Subtle Bottom Accent Line */}
              <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#1E3DF0]/0 to-transparent group-hover:via-[#1E3DF0] transition-all duration-500" />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}