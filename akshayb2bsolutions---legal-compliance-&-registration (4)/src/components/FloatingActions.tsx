import React, { useState, useEffect } from 'react';
import { PhoneCall, MessageCircle, ChevronUp } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/servicesData';

export const FloatingActions: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div id="floating-action-controls" className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 pointer-events-none">
      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          id="btn-scroll-to-top"
          onClick={scrollToTop}
          className="pointer-events-auto p-3 rounded-full bg-white hover:bg-slate-50 text-[#0B3D91] border border-slate-200 shadow-xl transition-all hover:scale-110 cursor-pointer animate-in fade-in"
          aria-label="Scroll to top"
          title="Back to Top"
        >
          <ChevronUp className="w-5 h-5 text-[#0B3D91]" />
        </button>
      )}

      {/* Floating Call Now Button */}
      <a
        id="floating-call-btn"
        href={`tel:${COMPANY_DETAILS.phoneClean}`}
        className="pointer-events-auto flex items-center gap-2 px-4 py-2.5 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold text-xs shadow-xl hover:shadow-blue-500/25 transition-all hover:scale-105 group"
        aria-label="Call akshayb2bsolutions"
      >
        <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
          <PhoneCall className="w-3.5 h-3.5 text-white animate-bounce" />
        </div>
        <span className="hidden sm:inline">Call Now: {COMPANY_DETAILS.phone}</span>
        <span className="sm:hidden">Call Now</span>
      </a>

      {/* Floating WhatsApp Chat Button */}
      <a
        id="floating-whatsapp-btn"
        href={COMPANY_DETAILS.social.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className="pointer-events-auto flex items-center gap-2 px-4 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-xl hover:shadow-emerald-600/30 transition-all hover:scale-105 group"
        aria-label="Chat on WhatsApp"
      >
        <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
          <MessageCircle className="w-4 h-4 text-white" />
        </div>
        <span>WhatsApp Chat</span>
        <span className="w-2 h-2 rounded-full bg-emerald-300 animate-pulse"></span>
      </a>
    </div>
  );
};
