import React from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Facebook,
  Instagram,
  Youtube,
  Linkedin,
  ShieldCheck,
  ArrowRight,
  Heart
} from 'lucide-react';
import { COMPANY_DETAILS, MEGA_CATEGORIES } from '../data/servicesData';

interface FooterProps {
  onSelectService: (serviceName: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectService }) => {
  return (
    <footer id="main-footer" className="bg-slate-50 text-slate-700 border-t border-slate-200 pt-16 pb-8 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Top 5-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-12 border-b border-slate-200">
          {/* Column 1: Company Logo + About + Socials (Span 4) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-lg bg-[#0B3D91] flex items-center justify-center shadow-xs">
                <span className="text-white font-black text-xl tracking-tighter">A2B</span>
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-lg sm:text-xl tracking-tight text-[#0B3D91]">
                  akshay<span className="text-[#F5A623]">b2b</span>solutions
                </span>
                <span className="text-[11px] font-bold tracking-widest text-slate-500 uppercase -mt-1">
                  make paper work
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-600 leading-relaxed max-w-sm">
              India&apos;s leading technology-driven Legal Compliance, Company Registration, Tax Filing &amp; IP Protection consultancy. Empowering over 1,00,000+ businesses with frictionless statutory execution.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-2 pt-2">
              <a
                id="footer-social-fb"
                href={COMPANY_DETAILS.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-white border border-slate-200 hover:border-[#0B3D91] hover:bg-blue-50 text-slate-600 hover:text-[#0B3D91] flex items-center justify-center transition-colors shadow-2xs"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                id="footer-social-insta"
                href={COMPANY_DETAILS.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-white border border-slate-200 hover:border-[#0B3D91] hover:bg-blue-50 text-slate-600 hover:text-[#0B3D91] flex items-center justify-center transition-colors shadow-2xs"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                id="footer-social-yt"
                href={COMPANY_DETAILS.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-white border border-slate-200 hover:border-[#0B3D91] hover:bg-blue-50 text-slate-600 hover:text-[#0B3D91] flex items-center justify-center transition-colors shadow-2xs"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                id="footer-social-in"
                href={COMPANY_DETAILS.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-white border border-slate-200 hover:border-[#0B3D91] hover:bg-blue-50 text-slate-600 hover:text-[#0B3D91] flex items-center justify-center transition-colors shadow-2xs"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>

            <div className="flex items-center gap-2 text-[11px] text-slate-500 pt-2 font-medium">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>ISO 9001:2015 &amp; ISO 27001 Certified System</span>
            </div>
          </div>

          {/* Column 2: Business Startup Links (Span 2) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#0B3D91] border-b border-slate-200 pb-1.5">
              Business Startup
            </h4>
            <ul className="space-y-1.5 text-xs">
              {[
                'Private Limited Company',
                'Sole Proprietorship Firm',
                'Limited Liability Partnership',
                'One Person Company',
                'Section 8 Company',
                'Company in Dubai/UAE',
                'Company in USA',
                'NGO Registration'
              ].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => onSelectService(item)}
                    className="text-slate-600 hover:text-[#0B3D91] hover:underline transition-colors text-left cursor-pointer"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Registration & License (Span 2) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#0B3D91] border-b border-slate-200 pb-1.5">
              Registration &amp; License
            </h4>
            <ul className="space-y-1.5 text-xs">
              {[
                'FSSAI Registration',
                'FSSAI State License',
                'MSME Registration',
                'Startup India Registration',
                'Trade License',
                'Shop and Establishment',
                'EPF & ESI Registration',
                'RERA Registration'
              ].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => onSelectService(item)}
                    className="text-slate-600 hover:text-[#0B3D91] hover:underline transition-colors text-left cursor-pointer"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Import/Export & Tax (Span 2) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#0B3D91] border-b border-slate-200 pb-1.5">
              Trade &amp; Taxation
            </h4>
            <ul className="space-y-1.5 text-xs">
              {[
                'IEC Registration',
                'ICEGATE & AD Code',
                'GST Registration',
                'GST Return Filing',
                'Income Tax Return',
                'TDS Returns',
                'Accounting & Bookkeeping',
                'EPR Registration'
              ].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => onSelectService(item)}
                    className="text-slate-600 hover:text-[#0B3D91] hover:underline transition-colors text-left cursor-pointer"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 5: Trademark, ISO & GEM (Span 2) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#0B3D91] border-b border-slate-200 pb-1.5">
              IP &amp; Certifications
            </h4>
            <ul className="space-y-1.5 text-xs">
              {[
                'Trademark Registration',
                'Trademark Objection',
                'Copyright Registration',
                'ISO 9001:2015',
                'ISO 27001 (ISMS)',
                'US FDA Certificate',
                'GEM Registration',
                'POSH Compliance'
              ].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => onSelectService(item)}
                    className="text-slate-600 hover:text-[#0B3D91] hover:underline transition-colors text-left cursor-pointer"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Info Strip */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 py-8 border-b border-slate-200 text-xs">
          <div className="flex items-start gap-2.5">
            <Mail className="w-4 h-4 text-[#0B3D91] flex-shrink-0 mt-0.5" />
            <div>
              <span className="text-slate-500 block font-bold">Email:</span>
              <a href={`mailto:${COMPANY_DETAILS.email}`} className="text-slate-800 hover:text-[#0B3D91] font-semibold">
                {COMPANY_DETAILS.email}
              </a>
            </div>
          </div>

          <div className="flex items-start gap-2.5">
            <Phone className="w-4 h-4 text-[#0B3D91] flex-shrink-0 mt-0.5" />
            <div>
              <span className="text-slate-500 block font-bold">Phone:</span>
              <a href={`tel:${COMPANY_DETAILS.phoneClean}`} className="text-slate-800 hover:text-[#0B3D91] font-semibold">
                {COMPANY_DETAILS.phone}
              </a>
            </div>
          </div>

          <div className="flex items-start gap-2.5">
            <MapPin className="w-4 h-4 text-[#0B3D91] flex-shrink-0 mt-0.5" />
            <div>
              <span className="text-slate-500 block font-bold">Address:</span>
              <span className="text-slate-800 leading-tight">
                {COMPANY_DETAILS.address}
              </span>
            </div>
          </div>

          <div className="flex items-start gap-2.5">
            <Clock className="w-4 h-4 text-[#0B3D91] flex-shrink-0 mt-0.5" />
            <div>
              <span className="text-slate-500 block font-bold">Working Hours:</span>
              <span className="text-slate-800">
                {COMPANY_DETAILS.workingHours}
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-medium">
          <p>
            &copy; {new Date().getFullYear()} <span className="text-slate-800 font-bold">{COMPANY_DETAILS.name}</span>. All Rights Reserved.
          </p>

          <div className="flex items-center gap-4 text-slate-600">
            <a href="#" className="hover:text-[#0B3D91] transition-colors">Privacy Policy</a>
            <span>•</span>
            <a href="#" className="hover:text-[#0B3D91] transition-colors">Terms of Service</a>
            <span>•</span>
            <a href="#" className="hover:text-[#0B3D91] transition-colors">Refund Policy</a>
            <span>•</span>
            <a href="#" className="hover:text-[#0B3D91] transition-colors">Disclaimer</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
