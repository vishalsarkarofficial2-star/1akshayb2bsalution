import React from 'react';
import { Calendar, PhoneCall, ShieldCheck, ArrowRight, Clock, Star } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/servicesData';

interface CtaBannerProps {
  onOpenAppointment: () => void;
}

export const CtaBanner: React.FC<CtaBannerProps> = ({ onOpenAppointment }) => {
  return (
    <section
      id="register-confidence-cta"
      className="relative bg-white py-14 px-4 sm:px-6 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="bg-gradient-to-br from-[#0B3D91] via-[#0E4A9C] to-[#1358AB] text-white rounded-2xl p-8 sm:p-12 shadow-xl flex flex-col lg:flex-row lg:items-center justify-between gap-8 border border-blue-900">
          {/* Left Text */}
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-[#F5A623] text-xs font-bold uppercase tracking-wider">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Zero Risk • Guaranteed Compliance</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Register Your Business With Absolute Confidence
            </h2>

            <p className="text-sm sm:text-base text-blue-100 leading-relaxed">
              Don&apos;t let complex paperwork, obscure tax rules, or legal notices stall your entrepreneurial momentum. Connect with our senior corporate advisory panel today and get your registration blueprint ready within 30 minutes.
            </p>

            <div className="flex flex-wrap items-center gap-4 text-xs text-blue-100 pt-1">
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-[#F5A623]" />
                <span className="font-medium">30-Min Free Strategy Call</span>
              </span>
              <span className="text-blue-300">•</span>
              <span className="flex items-center gap-1.5">
                <Star className="w-4 h-4 text-[#F5A623] fill-[#F5A623]" />
                <span className="font-medium">4.9/5 Rated on Google</span>
              </span>
            </div>
          </div>

          {/* Right Action Button & Direct Call */}
          <div className="flex flex-col sm:flex-row lg:flex-col gap-3.5 flex-shrink-0">
            <button
              id="cta-book-appointment-btn"
              onClick={onOpenAppointment}
              className="px-8 py-4 rounded-xl bg-[#F5A623] hover:bg-amber-400 text-slate-900 font-extrabold text-sm sm:text-base shadow-lg hover:shadow-xl flex items-center justify-center gap-2.5 transition-all cursor-pointer group"
            >
              <Calendar className="w-5 h-5 text-slate-900 group-hover:scale-110 transition-transform" />
              <span>Book Free Appointment</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <a
              id="cta-call-direct-btn"
              href={`tel:${COMPANY_DETAILS.phoneClean}`}
              className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs sm:text-sm border border-white/20 hover:border-white/40 flex items-center justify-center gap-2 transition-colors"
            >
              <PhoneCall className="w-4 h-4 text-[#F5A623]" />
              <span>Instant Call: {COMPANY_DETAILS.phone}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
