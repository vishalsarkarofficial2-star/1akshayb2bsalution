import React from 'react';
import { Mail, Phone, FileDown, Facebook, Instagram, Youtube, Linkedin } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/servicesData';

interface TopUtilityBarProps {
  onOpenBrochure: () => void;
}

export const TopUtilityBar: React.FC<TopUtilityBarProps> = ({ onOpenBrochure }) => {
  return (
    <div id="top-utility-bar" className="bg-[#0B3D91] text-white text-xs py-2 px-4 border-b border-white/10 z-50 relative">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
        {/* Left: Email & Support Hours */}
        <div className="flex items-center gap-4">
          <a
            id="top-email-link"
            href={`mailto:${COMPANY_DETAILS.email}`}
            className="flex items-center gap-1.5 text-blue-100 hover:text-[#F5A623] transition-colors font-medium"
          >
            <Mail className="w-3.5 h-3.5 text-[#F5A623]" />
            <span>{COMPANY_DETAILS.email}</span>
          </a>
          <span className="hidden md:inline text-white/30">|</span>
          <span className="hidden md:inline text-blue-200">
            Support: {COMPANY_DETAILS.workingHours}
          </span>
        </div>

        {/* Right: Phone, Brochure, Socials */}
        <div className="flex items-center flex-wrap justify-center gap-3 sm:gap-4">
          {/* Phone */}
          <a
            id="top-phone-link"
            href={`tel:${COMPANY_DETAILS.phoneClean}`}
            className="flex items-center gap-1.5 text-white hover:text-[#F5A623] transition-colors font-bold"
          >
            <Phone className="w-3.5 h-3.5 text-[#F5A623]" />
            <span>{COMPANY_DETAILS.phone}</span>
          </a>

          <span className="text-white/30">|</span>

          {/* Brochure Download */}
          <button
            id="top-brochure-btn"
            onClick={onOpenBrochure}
            className="flex items-center gap-1 text-blue-100 hover:text-white transition-colors cursor-pointer font-medium"
            title="Download Corporate Brochure"
          >
            <FileDown className="w-3.5 h-3.5 text-[#F5A623]" />
            <span>Company Brochure</span>
          </button>

          <span className="hidden lg:inline text-white/30">|</span>

          {/* Social Links */}
          <div className="hidden lg:flex items-center gap-2 text-white/80">
            <a
              id="top-social-fb"
              href={COMPANY_DETAILS.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/80 hover:text-white transition-colors p-1"
              aria-label="Facebook"
            >
              <Facebook className="w-3.5 h-3.5" />
            </a>
            <a
              id="top-social-insta"
              href={COMPANY_DETAILS.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/80 hover:text-white transition-colors p-1"
              aria-label="Instagram"
            >
              <Instagram className="w-3.5 h-3.5" />
            </a>
            <a
              id="top-social-yt"
              href={COMPANY_DETAILS.social.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/80 hover:text-white transition-colors p-1"
              aria-label="YouTube"
            >
              <Youtube className="w-3.5 h-3.5" />
            </a>
            <a
              id="top-social-in"
              href={COMPANY_DETAILS.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/80 hover:text-white transition-colors p-1"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
