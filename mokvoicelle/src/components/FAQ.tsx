'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

const faqs: FAQItem[] = [
  {
    category: 'Web Development',
    question: 'How long does a web development project take?',
    answer: 'Most custom websites take between 2 to 4 weeks depending on feature complexity, dynamic functions, and content readiness.',
  },
  {
    category: 'Mobile Development',
    question: 'How long does a mobile development project take?',
    answer: 'Most custom mobile apps take between 3 to 8 weeks depending on feature complexity, platform requirements, and content readiness.',
  },
  {
    category: 'Voiceover & Audio',
    question: 'What types of voiceover projects do you record?',
    answer: 'We deliver commercial voiceovers, corporate narrations, podcasts, e-learning modules, and promotional spots with professional studio audio engineering.',
  },
  {
    category: 'Media Production',
    question: 'Can you handle end-to-end content production?',
    answer: 'Yes! From scriptwriting and audio direction to visual asset design and video editing, we provide full digital content packages tailored to your brand.',
  },
  {
    category: 'General & Billing',
    question: 'How do project revisions and client updates work?',
    answer: 'Every project milestone includes dedicated revision rounds to ensure the final output aligns perfectly with your brand vision before final delivery.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-[#080C1A] text-white relative overflow-hidden">
      {/* Glow Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-[#1E3DF0]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-12 space-y-3">
          <p className="text-[#1E3DF0] text-xs font-bold uppercase tracking-widest">
            Got Questions?
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
            Frequently Asked Questions
          </h2>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="border border-slate-800/80 bg-[#10172D]/60 rounded-2xl overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-5 text-left text-sm md:text-base font-semibold text-slate-100 hover:text-[#1E3DF0] transition-colors gap-4"
                >
                  <div className="flex items-center gap-3 flex-wrap">
                    <span>{faq.question}</span>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#1E3DF0] bg-[#1E3DF0]/10 border border-[#1E3DF0]/30 px-2.5 py-0.5 rounded-full">
                      {faq.category}
                    </span>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-[#1E3DF0] shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 text-xs md:text-sm text-slate-300 leading-relaxed border-t border-slate-800/40 pt-4">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}