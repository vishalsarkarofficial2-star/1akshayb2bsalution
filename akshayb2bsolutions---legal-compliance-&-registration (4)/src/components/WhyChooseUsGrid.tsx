import React from 'react';
import {
  Compass,
  Timer,
  BadgePercent,
  UserCheck,
  BellRing,
  ShieldCheck,
  Sparkles
} from 'lucide-react';

export const WhyChooseUsGrid: React.FC = () => {
  const cards = [
    {
      id: 'wc-1',
      icon: Compass,
      title: 'Expert Guidance',
      desc: 'Direct one-on-one consultation with senior Chartered Accountants, Company Secretaries, and IP Advocates.'
    },
    {
      id: 'wc-2',
      icon: Timer,
      title: 'Time-Saving Process',
      desc: 'Automated AI document ingestion cuts processing time by 70% with same-day government portal submissions.'
    },
    {
      id: 'wc-3',
      icon: BadgePercent,
      title: 'Affordable Pricing',
      desc: '100% transparent fee structure with zero surprise charges, startup concessions, and free initial advisory.'
    },
    {
      id: 'wc-4',
      icon: UserCheck,
      title: 'Trusted by Thousands',
      desc: 'Over 1,00,000+ businesses registered across India with a certified 99.8% first-attempt statutory pass rate.'
    },
    {
      id: 'wc-5',
      icon: BellRing,
      title: 'Compliance Alerts',
      desc: 'Automated SMS, email, and WhatsApp deadline reminders so you never face hefty late fees or notices.'
    },
    {
      id: 'wc-6',
      icon: ShieldCheck,
      title: 'Secure and Confidential',
      desc: 'Bank-grade 256-bit SSL encryption, strict NDA protocols, and ISO 27001 certified cloud document vaults.'
    }
  ];

  return (
    <section id="why-choose-us-grid" className="py-16 sm:py-20 bg-slate-50 border-t border-slate-200 text-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-[#0B3D91] text-xs font-bold uppercase tracking-wider border border-blue-100">
            <Sparkles className="w-3.5 h-3.5 text-[#F5A623]" />
            <span>Core Strengths</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0B3D91] tracking-tight">
            Why Choose akshayb2bsolutions
          </h2>
          <p className="text-sm text-slate-600">
            Everything your growing enterprise needs to operate with total regulatory confidence.
          </p>
        </div>

        {/* 6-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((c, idx) => {
            const Icon = c.icon;
            return (
              <div
                key={c.id}
                id={`why-card-${idx + 1}`}
                className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-[#0B3D91] transition-all hover:-translate-y-1 hover:shadow-md group shadow-2xs"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 text-[#0B3D91] flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-[#0B3D91] group-hover:text-white transition-all">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-base font-bold text-slate-900 group-hover:text-[#0B3D91] transition-colors mb-2">
                  {c.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {c.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
