import React, { useEffect, useState, useRef } from 'react';
import { STATS_DATA } from '../data/updatesData';
import { Trophy, TrendingUp, Users, Award, ShieldCheck, Globe } from 'lucide-react';

export const StatsCounter: React.FC = () => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const [counts, setCounts] = useState<number[]>([0, 0, 0, 0]);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          const duration = 2000; // 2 seconds
          const steps = 60;
          const stepTime = duration / steps;

          let step = 0;
          const timer = setInterval(() => {
            step++;
            const progress = step / steps;
            // Ease out quad
            const easeProgress = 1 - (1 - progress) * (1 - progress);

            setCounts(
              STATS_DATA.map((item) => Math.floor(item.value * easeProgress))
            );

            if (step >= steps) {
              clearInterval(timer);
              setCounts(STATS_DATA.map((item) => item.value));
            }
          }, stepTime);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  const icons = [Users, Award, ShieldCheck, Globe];

  return (
    <section
      ref={sectionRef}
      id="our-journey-in-numbers"
      className="py-16 sm:py-20 bg-white text-slate-900 relative border-t border-slate-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-[#0B3D91] text-xs font-bold uppercase tracking-wider border border-blue-100">
            <Trophy className="w-3.5 h-3.5 text-[#F5A623]" />
            <span>Proven Track Record</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0B3D91] tracking-tight">
            Our Journey in Numbers
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            Empowering Indian and global businesses with world-class regulatory execution.
          </p>
        </div>

        {/* 4 Counter Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {STATS_DATA.map((stat, idx) => {
            const Icon = icons[idx] || TrendingUp;
            const displayVal = hasAnimated ? counts[idx].toLocaleString('en-IN') : '0';

            return (
              <div
                key={stat.id}
                id={`stat-box-${idx + 1}`}
                className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-[#0B3D91] transition-all text-center space-y-3 relative overflow-hidden group shadow-2xs"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 text-[#0B3D91] flex items-center justify-center mx-auto group-hover:scale-110 group-hover:bg-[#0B3D91] group-hover:text-white transition-all">
                  <Icon className="w-6 h-6" />
                </div>

                <div className="space-y-1">
                  <p className="text-3xl sm:text-4xl font-black text-[#0B3D91]">
                    {displayVal}
                    {stat.suffix}
                  </p>
                  <h3 className="text-sm font-bold text-slate-900 tracking-wide uppercase">
                    {stat.label}
                  </h3>
                </div>

                <p className="text-[11px] text-slate-600 leading-snug">
                  {stat.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
