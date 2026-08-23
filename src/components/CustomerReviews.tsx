import React from 'react';
import { Star, MessageSquareQuote, CheckCircle, ExternalLink, Sparkles } from 'lucide-react';
import { REVIEWS_DATA } from '../data/updatesData';

export const CustomerReviews: React.FC = () => {
  const platforms = [
    {
      name: 'Google Reviews',
      rating: '4.9',
      reviewsCount: '3,850+ Reviews',
      badgeColor: 'bg-blue-50 text-[#0B3D91] border-blue-200',
      stars: 5,
      url: 'https://google.com'
    },
    {
      name: 'Trustpilot',
      rating: '4.8',
      reviewsCount: '1,920+ Reviews',
      badgeColor: 'bg-emerald-50 text-emerald-800 border-emerald-200',
      stars: 5,
      url: 'https://trustpilot.com'
    },
    {
      name: 'AmbitionBox',
      rating: '4.9',
      reviewsCount: '1,450+ Verified Ratings',
      badgeColor: 'bg-amber-50 text-amber-800 border-amber-200',
      stars: 5,
      url: 'https://ambitionbox.com'
    }
  ];

  return (
    <section id="customer-reviews-section" className="py-16 sm:py-20 bg-slate-50 border-t border-slate-200 text-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-[#0B3D91] text-xs font-bold uppercase tracking-wider border border-blue-100">
            <Sparkles className="w-3.5 h-3.5 text-[#F5A623]" />
            <span>Verified Testimonials</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0B3D91] tracking-tight">
            Loved By Entrepreneurs Across India
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            Real feedback from founders who streamlined their business launch and statutory compliance with us.
          </p>
        </div>

        {/* 3 Clickable Review Platform Badge Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {platforms.map((plat, idx) => (
            <a
              key={idx}
              id={`review-badge-${idx + 1}`}
              href={plat.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-[#0B3D91] transition-all hover:-translate-y-1 hover:shadow-md group flex flex-col justify-between shadow-2xs cursor-pointer"
            >
              <div className="flex items-center justify-between">
                <span className={`text-xs font-extrabold px-3 py-1 rounded-full border ${plat.badgeColor}`}>
                  {plat.name}
                </span>
                <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-[#0B3D91] transition-colors" />
              </div>

              <div className="my-4 flex items-baseline gap-2">
                <span className="text-4xl font-black text-slate-900">{plat.rating}</span>
                <span className="text-xs text-slate-500">/ 5.0</span>
                <div className="flex items-center gap-0.5 ml-2">
                  {[...Array(5)].map((_, sIdx) => (
                    <Star key={sIdx} className="w-4 h-4 text-[#F5A623] fill-[#F5A623]" />
                  ))}
                </div>
              </div>

              <p className="text-xs text-slate-600 flex items-center gap-1 font-medium">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                <span>{plat.reviewsCount}</span>
              </p>
            </a>
          ))}
        </div>

        {/* Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {REVIEWS_DATA.map((rev) => (
            <div
              key={rev.id}
              className="p-6 rounded-2xl bg-white border border-slate-200 space-y-4 relative overflow-hidden shadow-2xs"
            >
              <div className="flex items-start justify-between">
                <div className="space-y-1">
                  <h4 className="font-bold text-sm text-slate-900">{rev.name}</h4>
                  <p className="text-xs text-[#0B3D91] font-semibold">{rev.company}</p>
                  <span className="text-[10px] text-slate-500">{rev.city} • Service: {rev.serviceUsed}</span>
                </div>
                <div className="flex items-center gap-0.5">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 text-[#F5A623] fill-[#F5A623]" />
                  ))}
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-700 italic leading-relaxed">
                &ldquo;{rev.text}&rdquo;
              </p>

              <div className="flex items-center justify-between pt-3 border-t border-slate-100 text-[11px] text-slate-500">
                <span className="flex items-center gap-1 text-emerald-600 font-semibold">
                  <CheckCircle className="w-3 h-3" />
                  <span>Verified Client</span>
                </span>
                <span>Reviewed on {rev.platform}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
