import React from 'react';
import { Smartphone, Download, CheckCircle, Bell, Shield, MessageCircle } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/servicesData';

export const MobileAppBanner: React.FC = () => {
  return (
    <section id="mobile-app-banner-section" className="py-14 bg-gradient-to-r from-[#0B3D91] via-[#0D47A1] to-[#1565C0] text-white relative overflow-hidden">
      {/* Background Graphic Accents */}
      <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-white/5 skew-x-12 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Text and Features */}
          <div className="lg:col-span-8 space-y-4">
            <span className="inline-block px-3 py-1 bg-amber-400 text-slate-950 text-xs font-black uppercase tracking-wider rounded-full shadow-xs">
              Mobile App Release
            </span>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-white leading-tight">
              NOW YOUR COMPLIANCE PARTNER ONE CLICK AWAY WITH {COMPANY_DETAILS.name.toUpperCase()} APP!
            </h2>

            <p className="text-sm sm:text-base text-blue-100 font-normal leading-relaxed max-w-2xl">
              Track live MCA status, receive instant WhatsApp &amp; SMS due-date alerts, download government registration certificates directly into your device vault, and connect with assigned legal executives on 24x7 priority chat.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div className="flex items-center gap-2 text-xs font-bold text-white bg-white/10 p-2.5 rounded-lg border border-white/10">
                <Bell className="w-4 h-4 text-amber-300" />
                <span>Live Status Alerts</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-bold text-white bg-white/10 p-2.5 rounded-lg border border-white/10">
                <Shield className="w-4 h-4 text-amber-300" />
                <span>Encrypted Vault</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-bold text-white bg-white/10 p-2.5 rounded-lg border border-white/10">
                <MessageCircle className="w-4 h-4 text-amber-300" />
                <span>1-Tap CA Support</span>
              </div>
            </div>

            {/* App Store / Play Store Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-4">
              <button
                onClick={() => alert('The akshayb2bsolutions Android app will begin downloading or link to Google Play Store.')}
                className="px-5 py-3 rounded-xl bg-slate-950 hover:bg-slate-900 text-white font-bold text-xs sm:text-sm flex items-center gap-2.5 shadow-xl transition-all cursor-pointer border border-slate-700"
              >
                <Download className="w-4 h-4 text-amber-400" />
                <div className="text-left leading-none">
                  <span className="text-[9px] uppercase tracking-wider text-slate-400 block">Get it on</span>
                  <span className="font-extrabold text-xs">Google Play Store</span>
                </div>
              </button>

              <button
                onClick={() => alert('The akshayb2bsolutions iOS app is currently in TestFlight Beta. You will receive notification on email.')}
                className="px-5 py-3 rounded-xl bg-white text-[#0B3D91] hover:bg-blue-50 font-bold text-xs sm:text-sm flex items-center gap-2.5 shadow-xl transition-all cursor-pointer"
              >
                <Smartphone className="w-4 h-4 text-[#0B3D91]" />
                <div className="text-left leading-none">
                  <span className="text-[9px] uppercase tracking-wider text-slate-500 block">Download on</span>
                  <span className="font-extrabold text-xs">Apple App Store</span>
                </div>
              </button>
            </div>
          </div>

          {/* Right Phone Mockup Card */}
          <div className="lg:col-span-4 flex justify-center">
            <div className="w-64 bg-slate-950 rounded-3xl p-3 shadow-2xl border-4 border-slate-800 relative">
              <div className="w-20 h-4 bg-slate-800 rounded-b-xl mx-auto mb-3"></div>
              
              <div className="bg-slate-900 rounded-2xl p-4 space-y-3 text-white">
                <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                  <span className="text-[10px] font-bold text-amber-400">akshayb2b app</span>
                  <span className="text-[9px] bg-emerald-500/20 text-emerald-300 px-1.5 py-0.5 rounded">Active</span>
                </div>

                <div className="p-2.5 bg-slate-950 rounded-xl space-y-1">
                  <span className="text-[9px] uppercase font-bold text-slate-400">Current Filing:</span>
                  <p className="text-xs font-bold text-amber-300">Pvt Ltd Company (SPICe+)</p>
                  <div className="w-full bg-slate-800 rounded-full h-1 mt-1.5">
                    <div className="bg-amber-400 h-1 rounded-full w-3/4"></div>
                  </div>
                  <span className="text-[9px] text-slate-400 block pt-1">Step 3: Name Approval Granted</span>
                </div>

                <div className="p-2.5 bg-slate-950 rounded-xl space-y-1 text-[10px]">
                  <div className="flex items-center justify-between text-slate-300">
                    <span>GSTIN Issued</span>
                    <CheckCircle className="w-3 h-3 text-emerald-400" />
                  </div>
                  <div className="flex items-center justify-between text-slate-300">
                    <span>IEC Code Active</span>
                    <CheckCircle className="w-3 h-3 text-emerald-400" />
                  </div>
                </div>

                <div className="pt-1">
                  <div className="w-full py-1.5 bg-amber-400 text-slate-950 font-bold text-[10px] rounded-lg text-center shadow-xs">
                    Talk to Assigned CA
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
