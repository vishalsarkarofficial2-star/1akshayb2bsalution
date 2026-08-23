import React, { useState } from 'react';
import {
  Tag,
  BellRing,
  CalendarClock,
  Sparkles,
  Copy,
  Check,
  ArrowRight,
  AlertTriangle,
  Clock
} from 'lucide-react';
import { SPECIAL_OFFERS, UPDATES_AND_ALERTS, DUE_DATES_LIST } from '../data/updatesData';

interface OffersUpdatesDueDatesProps {
  onApplyOffer: (offerCode: string) => void;
  onOpenConsultation: () => void;
}

export const OffersUpdatesDueDates: React.FC<OffersUpdatesDueDatesProps> = ({
  onApplyOffer,
  onOpenConsultation
}) => {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const handleCopy = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2500);
  };

  return (
    <section id="offers-alerts-duedates" className="py-16 sm:py-20 bg-slate-50 border-t border-slate-200 text-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="mb-10 text-center max-w-2xl mx-auto space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-[#0B3D91] text-xs font-bold uppercase tracking-wider border border-blue-100">
            <Sparkles className="w-3.5 h-3.5 text-[#F5A623]" />
            <span>Real-Time Compliance Hub</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0B3D91] tracking-tight">
            Special Offers, Statutory Alerts &amp; Due Dates
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            Never miss a regulatory deadline with our live compliance radar.
          </p>
        </div>

        {/* 3-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Column 1: Special Offers */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 flex flex-col justify-between shadow-xs">
            <div>
              <div className="flex items-center justify-between border-b border-slate-200 pb-3 mb-4">
                <div className="flex items-center gap-2">
                  <div className="p-2 rounded-lg bg-amber-50 text-[#F5A623]">
                    <Tag className="w-4 h-4" />
                  </div>
                  <h3 className="font-bold text-base text-slate-900">Special Offers</h3>
                </div>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-50 text-amber-800 border border-amber-200">
                  Limited Deals
                </span>
              </div>

              {/* Offer Cards */}
              <div className="space-y-4">
                {SPECIAL_OFFERS.map((offer) => (
                  <div
                    key={offer.id}
                    className="p-4 rounded-xl bg-slate-50 border border-slate-200 hover:border-[#0B3D91] transition-all space-y-2.5 relative overflow-hidden"
                  >
                    <div className="flex items-start justify-between">
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 bg-blue-50 text-[#0B3D91] rounded-md border border-blue-100">
                        {offer.badge}
                      </span>
                      <span className="text-xs font-black text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                        {offer.discount}
                      </span>
                    </div>

                    <h4 className="text-sm font-bold text-slate-900 leading-snug">
                      {offer.title}
                    </h4>
                    <p className="text-xs text-slate-600 line-clamp-2">
                      {offer.description}
                    </p>

                    <div className="flex items-center justify-between pt-2 border-t border-slate-200">
                      <button
                        onClick={() => handleCopy(offer.code)}
                        className="flex items-center gap-1 text-[11px] font-mono font-bold text-[#0B3D91] bg-white border border-slate-200 px-2.5 py-1 rounded hover:bg-blue-50 transition-colors"
                        title="Click to copy coupon code"
                      >
                        {copiedCode === offer.code ? (
                          <>
                            <Check className="w-3 h-3 text-emerald-600" />
                            <span className="text-emerald-600">COPIED!</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3 h-3 text-[#0B3D91]" />
                            <span>{offer.code}</span>
                          </>
                        )}
                      </button>

                      <button
                        onClick={() => onApplyOffer(offer.code)}
                        className="text-xs font-bold text-[#0B3D91] hover:text-blue-900 flex items-center gap-1 cursor-pointer"
                      >
                        <span>Claim Offer</span>
                        <ArrowRight className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 mt-4 border-t border-slate-200 text-center">
              <button
                onClick={onOpenConsultation}
                className="w-full py-2.5 bg-[#0B3D91] hover:bg-blue-900 text-white font-bold text-xs rounded-lg shadow-xs transition-all cursor-pointer"
              >
                Request Custom Startup Bundle
              </button>
            </div>
          </div>

          {/* Column 2: Updates & Alert (~10 items scrollable) */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 flex flex-col justify-between shadow-xs">
            <div>
              <div className="flex items-center justify-between border-b border-slate-200 pb-3 mb-4">
                <div className="flex items-center gap-2">
                  <div className="p-2 rounded-lg bg-blue-50 text-[#0B3D91]">
                    <BellRing className="w-4 h-4" />
                  </div>
                  <h3 className="font-bold text-base text-slate-900">Updates &amp; Alert</h3>
                </div>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-blue-50 text-[#0B3D91] border border-blue-200 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0B3D91] animate-ping"></span>
                  <span>Live Feed</span>
                </span>
              </div>

              {/* Scrollable List of ~10 Items */}
              <div className="space-y-3 max-h-[440px] overflow-y-auto pr-1 scrollbar-thin">
                {UPDATES_AND_ALERTS.map((alert) => (
                  <div
                    key={alert.id}
                    className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 hover:border-slate-300 transition-all space-y-1.5"
                  >
                    <div className="flex items-center justify-between text-[10px]">
                      <span className="font-bold uppercase tracking-wider text-[#0B3D91]">
                        {alert.category}
                      </span>
                      <span className="text-slate-400 font-medium">{alert.date}</span>
                    </div>

                    <h4 className="text-xs font-bold text-slate-800 flex items-start gap-1.5 leading-snug">
                      {alert.urgent && (
                        <AlertTriangle className="w-3.5 h-3.5 text-[#F5A623] flex-shrink-0 mt-0.5" />
                      )}
                      <span>{alert.title}</span>
                    </h4>

                    <p className="text-[11px] text-slate-600 leading-relaxed">
                      {alert.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-3 mt-4 border-t border-slate-200 text-center">
              <span className="text-[11px] text-slate-500 font-medium">
                Updated every 6 hours from MCA, DGFT &amp; GSTIN gazettes.
              </span>
            </div>
          </div>

          {/* Column 3: Due Dates (~8 items scrollable) */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 flex flex-col justify-between shadow-xs">
            <div>
              <div className="flex items-center justify-between border-b border-slate-200 pb-3 mb-4">
                <div className="flex items-center gap-2">
                  <div className="p-2 rounded-lg bg-red-50 text-red-600">
                    <CalendarClock className="w-4 h-4" />
                  </div>
                  <h3 className="font-bold text-base text-slate-900">Statutory Due Dates</h3>
                </div>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-red-50 text-red-700 border border-red-200">
                  Avoid Penalties
                </span>
              </div>

              {/* Scrollable List of ~8 Items */}
              <div className="space-y-3 max-h-[440px] overflow-y-auto pr-1 scrollbar-thin">
                {DUE_DATES_LIST.map((due) => (
                  <div
                    key={due.id}
                    className={`p-3.5 rounded-xl border transition-all space-y-1.5 ${
                      due.isUrgent ? 'border-amber-300 bg-amber-50/60' : 'border-slate-200 bg-slate-50'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                        {due.category}
                      </span>
                      <span
                        className={`text-[10px] font-extrabold px-2 py-0.5 rounded-full flex items-center gap-1 ${
                          due.isUrgent
                            ? 'bg-amber-100 text-amber-900 border border-amber-200'
                            : 'bg-slate-200 text-slate-700'
                        }`}
                      >
                        <Clock className="w-3 h-3" />
                        <span>{due.dueDate}</span>
                      </span>
                    </div>

                    <h4 className="text-xs font-bold text-slate-900 leading-snug">
                      {due.title}
                    </h4>

                    <p className="text-[11px] text-slate-600 leading-relaxed">
                      {due.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-3 mt-4 border-t border-slate-200 text-center">
              <button
                onClick={onOpenConsultation}
                className="text-xs font-bold text-[#0B3D91] hover:text-blue-900 flex items-center justify-center gap-1.5 w-full py-1 cursor-pointer"
              >
                <span>Subscribe to Monthly SMS / WhatsApp Due Date Alerts</span>
                <ArrowRight className="w-3 h-3 text-[#F5A623]" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
