import React from 'react';
import { FileText, CreditCard, UserCheck, MailCheck, ArrowRight } from 'lucide-react';

export const WorkingProcess: React.FC = () => {
  const steps = [
    {
      step: '01',
      title: 'Fill Up Application',
      desc: 'Submit your basic business details and upload simple KYC documents via our secured AI portal in under 5 minutes.',
      icon: FileText,
      tag: '5 Mins Online'
    },
    {
      step: '02',
      title: 'Make Online Payment',
      desc: 'Pay transparent govt & professional charges via encrypted UPI, Net Banking, or Credit Cards with zero hidden fees.',
      icon: CreditCard,
      tag: '100% Secure'
    },
    {
      step: '03',
      title: 'Executive Will Process Application',
      desc: 'Dedicated Senior CA/CS draft documentation, execute DSCs, and file official forms with MCA, DGFT, or FSSAI portals.',
      icon: UserCheck,
      tag: 'CA/CS Supervised'
    },
    {
      step: '04',
      title: 'Get Confirmation on Email',
      desc: 'Receive official government certificates, PAN/TAN, incorporation deeds, and compliance kits directly in your inbox.',
      icon: MailCheck,
      tag: 'Instant Delivery'
    }
  ];

  return (
    <section id="our-working-progress" className="py-16 sm:py-20 bg-white text-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-[#0B3D91] text-xs font-bold uppercase tracking-wider border border-blue-100">
            <span>Seamless Workflow</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0B3D91] tracking-tight">
            Our Working Progress
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            A frictionless, transparent 4-step execution path designed to save your time and eliminate bureaucratic stress.
          </p>
        </div>

        {/* 4-Step Flow */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                id={`process-step-${idx + 1}`}
                className="relative bg-slate-50 border border-slate-200 hover:border-[#0B3D91] rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 hover:shadow-md group"
              >
                {/* Number Badge & Connecting Line indicator */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 text-[#0B3D91] flex items-center justify-center font-black text-lg group-hover:scale-105 group-hover:bg-[#0B3D91] group-hover:text-white transition-all shadow-xs">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-2xl font-black text-slate-300 group-hover:text-[#0B3D91]/40 transition-colors">
                    {item.step}
                  </span>
                </div>

                <div className="space-y-2 flex-1">
                  <span className="text-[10px] font-extrabold uppercase tracking-widest px-2 py-0.5 rounded bg-white border border-slate-200 text-[#0B3D91] inline-block">
                    {item.tag}
                  </span>
                  <h3 className="text-base font-bold text-slate-900 group-hover:text-[#0B3D91] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                {/* Arrow Connector for larger screens */}
                {idx < steps.length - 1 && (
                  <div className="hidden lg:flex absolute -right-3 top-1/2 -translate-y-1/2 z-20 w-6 h-6 rounded-full bg-white border border-slate-200 items-center justify-center text-[#0B3D91] shadow-xs">
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
