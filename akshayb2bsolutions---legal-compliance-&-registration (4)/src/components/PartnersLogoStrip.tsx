import React from 'react';
import { PARTNER_LOGOS } from '../data/updatesData';
import { Shield, CheckCircle } from 'lucide-react';

export const PartnersLogoStrip: React.FC = () => {
  return (
    <section id="associates-partner-strip" className="bg-slate-50 border-y border-slate-200 py-6 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-3 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <Shield className="w-4 h-4 text-[#0B3D91]" />
          <h3 className="text-xs uppercase font-bold tracking-widest text-slate-600">
            Trusted Associates &amp; Regulatory Alliances
          </h3>
        </div>
        <div className="flex items-center gap-2 text-[11px] text-slate-500 font-medium">
          <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
          <span>Authorized E-Filing &amp; Corporate Banking Integration</span>
        </div>
      </div>

      {/* Infinite scrolling marquee strip */}
      <div className="relative w-full overflow-hidden flex items-center">
        {/* Left and Right Fade Gradients */}
        <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none"></div>

        <div className="flex w-max animate-marquee space-x-8 items-center py-2">
          {/* Repeat twice for seamless continuous loop */}
          {[...PARTNER_LOGOS, ...PARTNER_LOGOS].map((partner, idx) => (
            <div
              key={idx}
              className="flex items-center gap-2.5 px-4 py-2 rounded-lg bg-white border border-slate-200 hover:border-[#0B3D91] hover:shadow-xs transition-all group cursor-default"
            >
              <div className="w-2 h-2 rounded-full bg-[#0B3D91] group-hover:bg-[#F5A623] group-hover:scale-125 transition-all"></div>
              <div className="flex flex-col">
                <span className="font-extrabold text-xs tracking-wider text-slate-800 group-hover:text-[#0B3D91] transition-colors">
                  {partner.logoText}
                </span>
                <span className="text-[9px] text-slate-500 group-hover:text-[#0B3D91] transition-colors uppercase font-bold">
                  {partner.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
