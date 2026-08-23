import React from 'react';
import { GLOBAL_BRANDS_LOGOS } from '../data/updatesData';
import { Building, Award } from 'lucide-react';

export const GlobalBrandsStrip: React.FC = () => {
  return (
    <section id="global-brands-strip" className="bg-white border-y border-slate-200 py-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-6 text-center space-y-2">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-[#0B3D91] text-xs font-bold uppercase tracking-wider border border-blue-100">
          <Award className="w-3.5 h-3.5 text-[#F5A623]" />
          <span>India&apos;s Trusted Corporate Partner</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-extrabold text-[#0B3D91] tracking-tight">
          1 Lakh+ Global Brands &amp; Growing Startups Who Trust Us
        </h2>
        <p className="text-xs text-slate-600">
          From early-stage D2C brands to large industrial conglomerates across 28 states and union territories.
        </p>
      </div>

      {/* Auto-scrolling logo row */}
      <div className="relative w-full overflow-hidden flex items-center">
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

        <div className="flex w-max animate-marquee space-x-6 items-center py-2">
          {[...GLOBAL_BRANDS_LOGOS, ...GLOBAL_BRANDS_LOGOS].map((brand, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3 px-5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 hover:border-[#0B3D91] transition-all group cursor-default shadow-2xs"
            >
              <div className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center text-[#0B3D91] font-black text-xs group-hover:bg-[#0B3D91] group-hover:text-white transition-colors">
                <Building className="w-4 h-4" />
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-xs text-slate-800 group-hover:text-[#0B3D91] transition-colors whitespace-nowrap">
                  {brand.name}
                </span>
                <span className="text-[10px] text-slate-500 group-hover:text-amber-700 font-medium">
                  {brand.tag}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
