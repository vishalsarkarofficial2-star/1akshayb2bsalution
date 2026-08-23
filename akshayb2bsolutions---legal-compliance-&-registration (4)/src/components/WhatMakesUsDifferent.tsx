import React from 'react';
import { Cpu, Users2, Lock, HeartHandshake, CheckCircle } from 'lucide-react';

interface WhatMakesUsDifferentProps {
  onLearnMore?: () => void;
}

export const WhatMakesUsDifferent: React.FC<WhatMakesUsDifferentProps> = ({ onLearnMore }) => {
  const blocks = [
    {
      id: 'diff-ai',
      icon: Cpu,
      title: 'AI-Integrated Solutions',
      paragraph:
        'We harness advanced automation and smart document verification engines to eliminate discrepancies, auto-fill complex MCA/DGFT forms, and expedite approvals at lightning speed.'
    },
    {
      id: 'diff-experts',
      icon: Users2,
      title: 'Experienced Experts',
      paragraph:
        'Our panel of senior Chartered Accountants, Company Secretaries, and Corporate Advocates bring 15+ years of hands-on expertise across direct tax, foreign trade, and trademark litigations.'
    },
    {
      id: 'diff-security',
      icon: Lock,
      title: 'Secure Data Management',
      paragraph:
        'We enforce bank-grade 256-bit SSL encryption, ISO 27001-compliant digital document vaults, and stringent NDAs to guarantee complete privacy and zero data leakage.'
    },
    {
      id: 'diff-client',
      icon: HeartHandshake,
      title: 'Client-Centric Approach',
      paragraph:
        'From dedicated single-point relationship managers to live WhatsApp updates, we strip away all legal jargon and bureaucracy so you can focus entirely on scaling your core business.'
    }
  ];

  return (
    <section id="what-makes-us-different" className="py-16 sm:py-20 bg-slate-50 border-t border-slate-200 text-slate-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Text & 4 Sub-blocks */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-[#0B3D91] text-xs font-bold uppercase tracking-wider border border-blue-100">
              <span>The akshayb2bsolutions Advantage</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0B3D91] tracking-tight leading-tight">
              What Makes Us Different From Traditional Consultancies
            </h2>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              We bridge the gap between complex regulatory mandates and frictionless entrepreneurial execution. By combining artificial intelligence with elite legal professionals, we deliver unbeatable accuracy and speed.
            </p>

            {/* 4 Sub-blocks */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-4">
              {blocks.map((block) => {
                const Icon = block.icon;
                return (
                  <div
                    key={block.id}
                    id={`diff-block-${block.id}`}
                    className="p-4 rounded-xl bg-white border border-slate-200 hover:border-[#0B3D91] shadow-xs hover:shadow-sm transition-all group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-blue-50 border border-blue-100 text-[#0B3D91] flex items-center justify-center mb-3 group-hover:bg-[#0B3D91] group-hover:text-[#F5A623] group-hover:scale-105 transition-all">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-sm font-bold text-slate-900 mb-1.5 group-hover:text-[#0B3D91] transition-colors">
                      {block.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {block.paragraph}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Visual Graphic / Illustration */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-xl p-6 space-y-6">
              <div className="relative h-64 sm:h-72 rounded-xl overflow-hidden border border-slate-200">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop&q=80"
                  alt="Legal and Compliance Team"
                  className="w-full h-full object-cover object-center"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B3D91]/70 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 p-3 bg-white/95 backdrop-blur-md rounded-lg border border-slate-200 shadow-md">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-slate-800">Application Accuracy Rate</span>
                    <span className="font-extrabold text-[#0B3D91]">99.8% First-Time Pass</span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-1.5 mt-2">
                    <div className="bg-[#0B3D91] h-1.5 rounded-full w-[99.8%]"></div>
                  </div>
                </div>
              </div>

              {/* Verified Metrics Badge List */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="p-3 bg-slate-50 rounded-lg border border-slate-200 text-center">
                  <p className="text-xl font-extrabold text-[#0B3D91]">3-5 Days</p>
                  <p className="text-[11px] text-slate-600 font-medium mt-0.5">Average Incorporation TAT</p>
                </div>
                <div className="p-3 bg-slate-50 rounded-lg border border-slate-200 text-center">
                  <p className="text-xl font-extrabold text-[#F5A623]">100%</p>
                  <p className="text-[11px] text-slate-600 font-medium mt-0.5">Paperless Digital Process</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
