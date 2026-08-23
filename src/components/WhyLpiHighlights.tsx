import React from 'react';
import {
  Sparkles,
  Headphones,
  CheckCircle2,
  Users,
  ShieldCheck,
  Zap,
  Star,
  FileCheck2,
  Lock
} from 'lucide-react';

export const WhyLpiHighlights: React.FC = () => {
  const highlights = [
    {
      id: 'highlight-why-choose',
      title: 'Why Choose Us: Cutting-Edge AI-Based Efficiency',
      subtitle: 'Smart document classification and automated MCA/DGFT error validation.',
      description:
        'Traditional registration firms waste days reviewing paper forms manually. Our proprietary intelligent verification engine scans applicant credentials, verifies PAN/Aadhaar biometric databases, and drafts SPICe+ and DGFT forms with 99.8% precision, cutting turnaround time by more than 70%.',
      bullets: [
        'Automated name availability check with MCA & IP India databases',
        'Instant digital signature certificate (DSC) mapping & e-sign',
        'Real-time status tracking via unified dashboard & WhatsApp'
      ],
      image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800&auto=format&fit=crop&q=80',
      imageLeft: false,
      tag: 'AI Technology'
    },
    {
      id: 'highlight-support',
      title: 'Reliable 24x7 Support & Dedicated Relationship Desk',
      subtitle: 'Always accessible CA, CS and legal consultants for your business questions.',
      description:
        'Compliance never sleeps. Whether you have an urgent custom clearance issue at 11 PM or need a rapid GST invoice amendment before a major client audit, our dedicated account managers and senior legal desk are available on priority call, live chat, and email.',
      bullets: [
        'Direct phone line to assigned Chartered Accountant / Advocate',
        'Multi-lingual assistance across English, Hindi, and regional languages',
        'Prompt responses to all regulatory show-cause notices'
      ],
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&auto=format&fit=crop&q=80',
      imageLeft: true,
      tag: '24/7 Support'
    },
    {
      id: 'highlight-simplification',
      title: 'Where Compliance Meets Extreme Simplification',
      subtitle: 'One unified platform for 80+ regulatory registrations & tax filings.',
      description:
        'Stop juggling multiple freelance agents, accounting shops, and local brokers. From your initial Private Limited incorporation and FSSAI hygiene license to international trademark protection and annual ROC filings, we centralize your entire legal stack under a single digital vault.',
      bullets: [
        'Lifetime digital storage for all government licenses and tax returns',
        'Automated compliance calendar alerts before due dates',
        'Zero jargon explanations: clean, transparent pricing with no hidden charges'
      ],
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&auto=format&fit=crop&q=80',
      imageLeft: false,
      tag: 'Unified Platform'
    },
    {
      id: 'highlight-trusted',
      title: 'Trusted by Thousands of Ambitious Entrepreneurs',
      subtitle: 'Over 1,00,000+ satisfied businesses and 2,000+ verified 5-star reviews.',
      description:
        'From high-growth bootstrapped startups in Bengaluru and Delhi to traditional manufacturing hubs in Kanpur, Ahmedabad, and Chennai, our track record speaks for itself. We have helped entrepreneurs secure millions in government subsidies, collateral-free MSME loans, and global trade contracts.',
      bullets: [
        '1,00,000+ successful business registrations completed',
        '2,50,000+ statutory certificates & licenses issued',
        '4.9/5 average rating across Google, Trustpilot & AmbitionBox'
      ],
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop&q=80',
      imageLeft: true,
      tag: '100K+ Clients'
    }
  ];

  return (
    <section id="why-choose-lpi" className="py-16 sm:py-20 bg-white text-slate-900 border-t border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-20">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-[#0B3D91] text-xs font-bold uppercase tracking-wider border border-blue-100">
            <Sparkles className="w-3.5 h-3.5 text-[#F5A623]" />
            <span>Excellence in Execution</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0B3D91] tracking-tight">
            Why India&apos;s Smartest Founders Partner With Us
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            A comprehensive look at our technology-first methodology, dedicated advisory network, and enterprise-grade reliability.
          </p>
        </div>

        {/* Alternating 4 Rows (Zigzag) */}
        <div className="space-y-16 lg:space-y-24">
          {highlights.map((row, idx) => {
            return (
              <div
                key={row.id}
                id={`zigzag-row-${idx + 1}`}
                className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center"
              >
                {/* Text Content */}
                <div
                  className={`lg:col-span-6 space-y-5 ${
                    row.imageLeft ? 'lg:order-2' : 'lg:order-1'
                  }`}
                >
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-[#0B3D91] text-xs font-bold uppercase tracking-wider">
                    <span>{row.tag}</span>
                  </div>

                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-slate-900 leading-tight">
                    {row.title}
                  </h3>

                  <p className="text-sm font-semibold text-amber-700">
                    {row.subtitle}
                  </p>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {row.description}
                  </p>

                  <div className="space-y-2.5 pt-2">
                    {row.bullets.map((b, bIdx) => (
                      <div key={bIdx} className="flex items-start gap-2.5 text-xs text-slate-700 font-medium">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Image Visual Card */}
                <div
                  className={`lg:col-span-6 ${
                    row.imageLeft ? 'lg:order-1' : 'lg:order-2'
                  }`}
                >
                  <div className="relative rounded-2xl overflow-hidden border border-slate-200 bg-slate-100 shadow-sm group">
                    <img
                      src={row.image}
                      alt={row.title}
                      className="w-full h-72 sm:h-80 object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-80"></div>
                    <div className="absolute bottom-4 left-4 right-4 p-3 bg-white/95 backdrop-blur-md rounded-xl border border-slate-200/80 flex items-center justify-between shadow-xs">
                      <div className="flex items-center gap-2">
                        <ShieldCheck className="w-5 h-5 text-emerald-600" />
                        <span className="text-xs font-bold text-slate-900">Verified Legal Compliance</span>
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-amber-800 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                        Guaranteed
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
