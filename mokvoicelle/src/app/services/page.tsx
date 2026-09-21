// src/app/services/page.tsx
import Link from 'next/link';
import { services } from '@/data/services';
import { ArrowLeft, ChevronRight } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Our Complete Capabilities & Services | MOK Voicelle',
  description: 'Explore studio-grade voiceover, software engineering, 3D animation, brand design, and end-to-end digital management solutions.',
};

export default function AllServicesHubPage() {
  return (
    <main className="min-h-screen bg-[#0B0F19] text-white">
      <Header />

      <section className="relative pt-36 pb-20 px-6 md:px-12 border-b border-slate-800/60 overflow-hidden">
        <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-[#1E3DF0]/10 rounded-full blur-[170px] pointer-events-none" />

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
              Full Service Matrix
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
              Engineered Excellence Across Every Discipline
            </h1>
            <p className="text-slate-400 text-lg leading-relaxed">
              Discover our core digital capabilities. From high-performance software systems to cinematic audio and brand identity design, we provide everything required to dominate your market.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid Catalog */}
      <section className="py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="relative group p-8 rounded-3xl bg-[#0F1423] border border-white/5 hover:border-[#1E3DF0]/40 transition-all duration-300 [box-shadow:8px_8px_20px_#05070c,-8px_-8px_20px_rgba(255,255,255,0.03)] flex flex-col justify-between"
              >
                <div>
                  <div className="relative w-16 h-16 rounded-2xl bg-[#0B0F19] flex items-center justify-center mb-8 [box-shadow:inset_4px_4px_8px_#05070c,inset_-4px_-4px_8px_rgba(255,255,255,0.04)] border border-white/5">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${service.accent} text-white shadow-md shadow-[#1E3DF0]/30`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#1E3DF0] transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-slate-400 text-sm leading-relaxed mb-8">
                    {service.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center gap-2 text-xs font-semibold text-white group-hover:text-[#1E3DF0] transition-colors"
                  >
                    <span>Explore Service Details</span>
                    <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <span className="text-[10px] text-slate-500 font-mono">0{index + 1}</span>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <Footer />
    </main>
  );
}