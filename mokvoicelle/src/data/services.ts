// src/data/services.ts
import { Mic, Code, Video, Palette, Share2, Layers, type LucideIcon } from "lucide-react";

export interface ServiceItem {
  slug: string;
  icon: LucideIcon;
  title: string;
  desc: string;
  accent: string;
}

export const services: ServiceItem[] = [
  { 
    slug: "voiceover-audio-production",
    icon: Mic, 
    title: "Voiceover & Audio Production", 
    desc: "Studio-grade voice talent, custom audio engineering, sound design, and pristine voice production tailored for media campaigns.",
    accent: "from-[#1E3DF0] to-blue-500"
  },
  { 
    slug: "web-software-development",
    icon: Code, 
    title: "Web & Software Development", 
    desc: "High-performance React/Next.js platforms, robust API architectures, and scalable full-stack web applications.",
    accent: "from-[#1E3DF0] to-indigo-500"
  },
  { 
    slug: "video-3d-animation",
    icon: Video, 
    title: "Video & 3D Animation", 
    desc: "Captivating 3D volumetric character renders, motion graphics, high-impact promo edits, and visual effects.",
    accent: "from-blue-600 to-[#1E3DF0]"
  },
  { 
    slug: "brand-identity-design",
    icon: Palette, 
    title: "Brand Identity & Design", 
    desc: "Neomorphic UI systems, high-converting digital design assets, custom typography, and cohesive brand guidelines.",
    accent: "from-[#1E3DF0] to-sky-400"
  },
  { 
    slug: "social-media-strategy",
    icon: Share2, 
    title: "Social Media Strategy", 
    desc: "Data-backed audience growth engines, content architecture, viral marketing pipelines, and active channel management.",
    accent: "from-indigo-500 to-[#1E3DF0]"
  },
  { 
    slug: "end-to-end-digital-management",
    icon: Layers, 
    title: "End-to-End Digital Management", 
    desc: "Comprehensive platform maintenance, technical SEO audits, digital operations, and continuous infrastructure care.",
    accent: "from-[#1E3DF0] to-blue-400"
  },
];