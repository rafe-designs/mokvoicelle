// src/app/services/[slug]/page.tsx
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { services } from '@/data/services';
import { ArrowLeft, CheckCircle2, Sparkles, MessageSquare } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return {
      title: 'Service Not Found | MOK Voicelle',
    };
  }

  return {
    title: `${service.title} | MOK Voicelle Digital Solutions`,
    description: service.desc,
    openGraph: {
      title: `${service.title} | MOK Voicelle`,
      description: service.desc,
      url: `https://mokvoicelle.com/services/${slug}`,
      siteName: 'MOK Voicelle',
      type: 'website',
    },
  };
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  const IconComponent = service.icon;

  return (
    <main className="min-h-screen bg-[#0B0F19] text-white">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-36 pb-20 px-6 md:px-12 overflow-hidden border-b border-slate-800/60">
        <div className="absolute top-1/4 left-1/3 w-[600px] h-[600px] bg-[#1E3DF0]/10 rounded-full blur-[170px] pointer-events-none" />

        <div className="max-w-4xl mx-auto relative z-10">
          <Link
            href="/#services"
            className="inline-flex items-center gap-2 text-xs font-semibold text-slate-400 hover:text-white transition-colors mb-8 bg-slate-900/80 px-4 py-2 rounded-full border border-slate-800"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Overview</span>
          </Link>

          <div className="flex items-center gap-4 mb-6">
            <div className={`p-4 rounded-2xl bg-gradient-to-br ${service.accent} text-white shadow-lg shadow-[#1E3DF0]/30`}>
              <IconComponent className="w-8 h-8" />
            </div>
            <span className="text-xs font-mono uppercase tracking-widest px-3 py-1 rounded-full bg-[#1E3DF0]/10 border border-[#1E3DF0]/20 text-white inline-block">
              Specialized Service
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 text-white">
            {service.title}
          </h1>

          <p className="text-lg md:text-xl text-slate-300 leading-relaxed font-normal mb-8">
            {service.desc}
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-[#1E3DF0] hover:bg-[#1832C7] text-white font-semibold shadow-xl shadow-[#1E3DF0]/30 transition-all"
            >
              <Sparkles className="w-4 h-4" />
              <span>Initiate Project Consultation</span>
            </a>
          </div>
        </div>
      </section>

      {/* Deep Dive Specifications */}
      <section className="py-24 px-6 md:px-12">
        <div className="max-w-4xl mx-auto space-y-16">
          <div className="p-8 md:p-12 rounded-3xl bg-[#0F1423] border border-white/5 [box-shadow:8px_8px_20px_#05070c,-8px_-8px_20px_rgba(255,255,255,0.03)]">
            <h2 className="text-2xl font-bold mb-6 text-white">What This Execution Involves</h2>
            <p className="text-slate-400 leading-relaxed mb-8">
              We deploy absolute rigor, high-performance architectural standards, and creative mastery into every project phase. Our tailored workflows are structured to meet global milestones with zero friction.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "Comprehensive Discovery & Requirements Audit",
                "Advanced Prototyping & Workflow Alignment",
                "Rigorous Quality Assurance & Performance Tuning",
                "Seamless Production Deployment & Handoff",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 p-4 rounded-2xl bg-slate-950/40 border border-white/5">
                  <CheckCircle2 className="w-5 h-5 text-[#1E3DF0] shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-300 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Box */}
          <div className="p-8 md:p-12 rounded-3xl bg-gradient-to-br from-[#121A33] to-[#0B0F19] border border-[#1E3DF0]/30 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#1E3DF0]/20 rounded-full blur-3xl pointer-events-none" />
            
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to scale your digital presence with {service.title}?</h3>
            <p className="text-slate-400 max-w-xl mx-auto text-sm mb-8">
              Partner with our elite engineering and creative teams to transform your conceptual roadmap into market-leading reality.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white text-slate-950 font-bold hover:bg-slate-200 transition-colors shadow-lg"
            >
              <MessageSquare className="w-4 h-4 text-[#1E3DF0]" />
              <span>Book a Strategy Call</span>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}