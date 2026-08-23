import React from 'react';
import {
  Cpu,
  Users2,
  Lock,
  SlidersHorizontal,
  BadgeCheck,
  HeartHandshake,
  Lightbulb,
  Sparkles,
  CheckCircle
} from 'lucide-react';

export const AiComplianceSection: React.FC = () => {
  const points = [
    {
      id: 'pt-1',
      icon: Cpu,
      label: 'AI-Powered Efficiency',
      description:
        'Proprietary machine learning models pre-scan documents, extract data from Aadhaar/PAN cards, detect mismatches in seconds, and automatically generate Ministry-ready application packets.'
    },
    {
      id: 'pt-2',
      icon: Users2,
      label: 'Expert Team',
      description:
        'A dedicated network of accredited Chartered Accountants, Company Secretaries, IP Attorneys, and Tax Specialists with over 15 years of industry excellence cross-verifying every single filing.'
    },
    {
      id: 'pt-3',
      icon: Lock,
      label: 'Secure Data Management',
      description:
        '256-bit AES cryptographic encryption, zero-retention biometric policies, and ISO/IEC 27001 certified cloud servers ensure maximum data confidentiality and defense against cyber risks.'
    },
    {
      id: 'pt-4',
      icon: SlidersHorizontal,
      label: 'Tailored Solutions',
      description:
        'Customized compliance roadmaps adapted for every industry stage—from solo boot-strappers needing simple MSME registration to multinational conglomerates expanding across UAE, Singapore, and USA.'
    },
    {
      id: 'pt-5',
      icon: BadgeCheck,
      label: 'Quality Assurance',
      description:
        'Multi-tiered manual and algorithmic quality audits ensuring zero form rejections, no penalty notices, and flawless compliance with MCA V3, FoSCoS, and DGFT standards.'
    },
    {
      id: 'pt-6',
      icon: HeartHandshake,
      label: 'Client-Centric Approach',
      description:
        'Transparent flat pricing, zero hidden charges, real-time WhatsApp milestone updates, and personal relationship managers who genuinely care about the value of your time.'
    },
    {
      id: 'pt-7',
      icon: Lightbulb,
      label: 'Innovation-Driven',
      description:
        'Constantly evolving regulatory intelligence tools, automated statutory due date alerts, and one-click cloud vaults that keep your enterprise ahead of evolving tax gazettes.'
    }
  ];

  return (
    <section id="ai-compliance-section" className="py-16 sm:py-20 bg-slate-50 border-t border-slate-200 text-slate-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header Block */}
        <div className="max-w-3xl mb-12 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-[#0B3D91] text-xs font-bold uppercase tracking-wider border border-blue-100">
            <Sparkles className="w-3.5 h-3.5 text-[#F5A623]" />
            <span>Intelligent Automation</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0B3D91] tracking-tight leading-tight">
            Simplifying Compliance Through Artificial Intelligence &amp; Elite Legal Counsel
          </h2>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            By harmonizing advanced AI automation algorithms with experienced Chartered Accountants, Advocates, and Company Secretaries, akshayb2bsolutions transforms convoluted Indian compliance mandates into a seamless, rapid, and error-proof experience.
          </p>
        </div>

        {/* 7-Point Bullet List with Bold Labels */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {points.map((pt, idx) => {
            const Icon = pt.icon;
            return (
              <div
                key={pt.id}
                id={`ai-point-${idx + 1}`}
                className="p-5 rounded-xl bg-white border border-slate-200 hover:border-[#0B3D91] transition-all hover:shadow-md flex flex-col justify-between group shadow-2xs"
              >
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-blue-50 border border-blue-100 text-[#0B3D91] flex items-center justify-center group-hover:scale-110 group-hover:bg-[#0B3D91] group-hover:text-white transition-all">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-mono font-bold text-slate-400 group-hover:text-[#0B3D91]">
                      0{idx + 1}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 group-hover:text-[#0B3D91] transition-colors mb-2">
                    {pt.label}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {pt.description}
                  </p>
                </div>

                <div className="pt-3 mt-3 border-t border-slate-100 flex items-center gap-1.5 text-[11px] text-[#0B3D91] font-semibold">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Enterprise Standard</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
