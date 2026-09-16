'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, MessageSquare, CheckCircle2 } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'native',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg('');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: '882eddb8-c4b6-428b-814e-20fda3679a59',
          subject: `New Inquiry from ${formData.name}`,
          from_name: 'MOK Voicelle Web Form',
          name: formData.name,
          email: formData.email,
          phone: formData.phone || 'Not Provided',
          service_requested: formData.service,
          message: formData.message,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitted(true);
      } else {
        setErrorMsg('Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Web3Forms Error:', error);
      setErrorMsg('An unexpected error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-6 md:px-12 bg-[#080C1A] text-white relative overflow-hidden border-t border-slate-800/40">
      
      {/* Background Glow Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#1E3DF0]/10 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#1E3DF0]/40 bg-[#1E3DF0]/10 text-xs font-semibold text-white mb-4 shadow-sm">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Get In Touch</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4">
            Let&apos;s Build Something Iconic
          </h2>
          <p className="text-slate-400 text-sm md:text-base leading-relaxed">
            Fill out the form below to start your project consultation. All inquiries receive a detailed roadmap within 24 hours.
          </p>
        </div>

        {/* 3D Neomorphic Contact Form */}
        <div className="bg-[#10172D] rounded-3xl p-8 md:p-12 border border-slate-800/80 shadow-[12px_12px_35px_rgba(4,7,17,0.85),-8px_-8px_25px_rgba(255,255,255,0.02)]">
          
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-12 space-y-4"
            >
              <div className="w-16 h-16 rounded-full bg-[#1E3DF0]/20 border border-[#1E3DF0]/40 text-[#1E3DF0] flex items-center justify-center mx-auto shadow-lg shadow-[#1E3DF0]/20">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-white">Message Received!</h3>
              <p className="text-slate-400 text-xs md:text-sm max-w-md mx-auto leading-relaxed">
                Thank you for reaching out. Our technical team is reviewing your project requirements and will respond shortly.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-4 px-6 py-2.5 rounded-xl bg-slate-800 text-xs font-semibold text-slate-300 hover:text-white transition-all"
              >
                Send Another Message
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Error Message Notice */}
              {errorMsg && (
                <div className="p-3.5 rounded-xl bg-red-500/10 border border-red-500/30 text-xs text-red-400 text-center">
                  {errorMsg}
                </div>
              )}

              {/* Name & Email Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-2">Full Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="John Doe"
                    className="w-full bg-[#080C1A] border border-slate-800 rounded-xl px-4 py-3.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#1E3DF0] transition-all shadow-inner"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-2">Email Address *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="john@example.com"
                    className="w-full bg-[#080C1A] border border-slate-800 rounded-xl px-4 py-3.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#1E3DF0] transition-all shadow-inner"
                  />
                </div>
              </div>

              {/* Phone & Service Selector */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-2">Phone / WhatsApp</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+234..."
                    className="w-full bg-[#080C1A] border border-slate-800 rounded-xl px-4 py-3.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#1E3DF0] transition-all shadow-inner"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-2">Service Required</label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full bg-[#080C1A] border border-slate-800 rounded-xl px-4 py-3.5 text-xs text-white focus:outline-none focus:border-[#1E3DF0] transition-all shadow-inner cursor-pointer"
                  >
                    <option value="Native Build (₦600k)">Brand New Website (Native Build - ₦600k)</option>
                    <option value="WordPress Build (₦450k)">Brand New Website (WordPress - ₦450k)</option>
                    <option value="Website Revamping (₦250k)">Website Revamping (₦250k)</option>
                    <option value="Voiceover & Media">Voiceover & Media Production</option>
                    <option value="Graphic Design & Socials">Graphic Design & Social Media</option>
                    <option value="Custom Retainer">Custom Retainer / Other</option>
                  </select>
                </div>
              </div>

              {/* Message Field */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-2">Project Details *</label>
                <textarea
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us about your brand goals, scope, or specific features needed..."
                  className="w-full bg-[#080C1A] border border-slate-800 rounded-xl p-4 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#1E3DF0] transition-all shadow-inner resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 px-8 rounded-xl bg-[#1E3DF0] hover:bg-[#1832C7] text-white text-xs font-bold tracking-wide uppercase flex items-center justify-center gap-2 transition-all shadow-lg shadow-[#1E3DF0]/40 active:scale-[0.99] disabled:opacity-50"
              >
                {loading ? (
                  <span>Sending Message...</span>
                ) : (
                  <>
                    <span>Submit Project Inquiry</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>

            </form>
          )}

        </div>

      </div>
    </section>
  );
}