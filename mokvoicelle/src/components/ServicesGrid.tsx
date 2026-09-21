// src/components/ServicesGrid.tsx
'use client';

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, ChevronRight, Compass } from "lucide-react";
import { services } from "@/data/services";

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
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div>
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
              className="text-3xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-white via-slate-100 to-slate-400 bg-clip-text text-transparent"
            >
              Engineered for High-Impact Brands
            </motion.h2>
          </div>

          {/* Explore All Services Hub Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Link
              href="/services"
              className="inline-flex items-center gap-3 px-6 py-3.5 rounded-2xl bg-[#121A33] hover:bg-[#1E3DF0] text-white text-sm font-semibold border border-slate-800 hover:border-[#1E3DF0] transition-all duration-300 shadow-xl group"
            >
              <Compass className="w-4 h-4 text-[#1E3DF0] group-hover:text-white transition-colors" />
              <span>Explore All Services</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        {/* 3D Neomorphic Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
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
                  border border-white/5 hover:border-[#1E3DF0]/40 flex flex-col justify-between overflow-hidden"
              >
                {/* Subtle Brand Light Beam on Hover */}
                <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#1E3DF0]/20 rounded-full blur-2xl group-hover:bg-[#1E3DF0]/40 transition-all duration-500 pointer-events-none" />

                <div>
                  {/* 3D Neomorphic Icon Container */}
                  <div className="relative w-16 h-16 rounded-2xl bg-[#0B0F19] flex items-center justify-center mb-8 
                    [box-shadow:inset_4px_4px_8px_#05070c,inset_-4px_-4px_8px_rgba(255,255,255,0.04)] 
                    border border-white/5 group-hover:border-[#1E3DF0]/50 transition-all duration-300"
                  >
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${service.accent} text-white shadow-md shadow-[#1E3DF0]/30 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                  </div>

                  {/* Card Title */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#1E3DF0] transition-colors duration-300 flex items-center justify-between">
                    <span>{service.title}</span>
                    <ArrowUpRight className="w-5 h-5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-[#1E3DF0]" />
                  </h3>

                  {/* Card Description */}
                  <p className="text-slate-400 text-sm leading-relaxed font-normal mb-8">
                    {service.desc}
                  </p>
                </div>

                {/* Read More Button tying directly into individual service page */}
                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center gap-2 text-xs font-semibold text-white group-hover:text-[#1E3DF0] transition-colors"
                  >
                    <span>Read More</span>
                    <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <span className="text-[10px] text-slate-500 uppercase tracking-widest font-mono">Service 0{index + 1}</span>
                </div>

                {/* Subtle Bottom Accent Line */}
                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#1E3DF0]/0 to-transparent group-hover:via-[#1E3DF0] transition-all duration-500" />
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}