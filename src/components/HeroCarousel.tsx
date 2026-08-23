import React, { useState, useEffect } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  Zap,
  Award,
  Sparkles,
  ArrowRight,
  Building2,
  Utensils,
  Globe2,
  FileSpreadsheet,
  CheckCircle2,
  Clock,
  ExternalLink,
  Layers
} from 'lucide-react';
import { COMPANY_DETAILS } from '../data/servicesData';

interface HeroCarouselProps {
  onSelectService: (serviceName: string) => void;
  onOpenConsultation: () => void;
}

export const HERO_SLIDES = [
  {
    id: 1,
    serviceKey: 'Private Limited Company',
    tag: 'AI-Powered Compliance Platform',
    title: "India's Fastest Service Provider with AI Technology",
    headlineEmphasis: 'with AI Technology',
    subtitle: 'Registration, Compliances and filings in one unified digital ecosystem.',
    highlight: 'Zero error document automation backed by Senior Chartered Accountants & Advocates.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&auto=format&fit=crop&q=80',
    accentBadge: '100% Online & Paperless',
    stat1: '24-48 Hrs TAT',
    stat2: 'AI Auto-Validated',
    stat3: 'Zero Discrepancy',
    icon: Zap
  },
  {
    id: 2,
    serviceKey: 'Private Limited Company',
    tag: 'Fast-Track Business Incorporation',
    title: 'Launch Your Private Limited Company in 3-5 Days',
    headlineEmphasis: 'in 3-5 Days',
    subtitle: 'Complete SPICe+ filing, Name Approval, 2 DSCs, DIN & Corporate PAN/TAN included.',
    highlight: 'Zero government fee promotion on nominal capital up to ₹15 Lakhs under MCA rules.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&auto=format&fit=crop&q=80',
    accentBadge: 'MCA V3 Compliant',
    stat1: '₹0 Govt MCA Fee',
    stat2: '2 Free DSCs Included',
    stat3: 'Bank A/c Assistance',
    icon: Building2
  },
  {
    id: 3,
    serviceKey: 'IEC Registration',
    tag: 'Global Trade & Export Gateway',
    title: 'Instant DGFT IEC Code & Icegate AD Code Registration',
    headlineEmphasis: 'Instant DGFT IEC',
    subtitle: 'Expand your market worldwide with seamless customs clearance and foreign trade perks.',
    highlight: 'Same day electronic certificate issuance with lifetime validity across all Indian ports.',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&auto=format&fit=crop&q=80',
    accentBadge: 'DGFT Certified Partner',
    stat1: 'Same Day Issuance',
    stat2: 'Lifetime Validity',
    stat3: 'All Indian Ports',
    icon: Globe2
  },
  {
    id: 4,
    serviceKey: 'FSSAI Registration',
    tag: 'Food Safety & FoSCoS Licensing',
    title: 'FSSAI Basic, State & Central License in 24-48 Hours',
    headlineEmphasis: 'in 24-48 Hours',
    subtitle: 'FoSCoS registration for cloud kitchens, restaurants, food manufacturers & exporters.',
    highlight: 'Full regulatory compliance on food packaging labels, hygiene audits & mandatory returns.',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1200&auto=format&fit=crop&q=80',
    accentBadge: 'Food Safety Experts',
    stat1: '1-5 Yrs Validity',
    stat2: 'FoSCoS Compliant',
    stat3: 'Label Guidelines',
    icon: Utensils
  },
  {
    id: 5,
    serviceKey: 'Trademark Registration',
    tag: 'Brand Protection & IP India',
    title: 'Protect Your Brand with Trademark (™) Registration',
    headlineEmphasis: 'Trademark (™) Protection',
    subtitle: 'Secure nationwide brand exclusivity and legally defend against counterfeiters.',
    highlight: 'Claim 50% government fee concession with MSME Udyam certificate registration.',
    image: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?w=1200&auto=format&fit=crop&q=80',
    accentBadge: 'Same-Day TM Filing',
    stat1: '50% MSME Rebate',
    stat2: '10 Yrs Protection',
    stat3: 'Class Search Free',
    icon: ShieldCheck
  }
];

const QUICK_ACCESS_PILLS = [
  { name: 'Private Limited Company', icon: Building2 },
  { name: 'FSSAI Registration', icon: Utensils },
  { name: 'IEC Registration', icon: Globe2 },
  { name: 'GST Registration', icon: FileSpreadsheet }
];

export const HeroCarousel: React.FC<HeroCarouselProps> = ({
  onSelectService,
  onOpenConsultation
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6500);
    return () => clearInterval(interval);
  }, [isPaused]);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  const slide = HERO_SLIDES[currentSlide];
  const CurrentIcon = slide.icon;

  return (
    <section
      id="hero-section"
      className="relative bg-gradient-to-br from-[#0B3D91] via-[#0D47A1] to-[#082a66] text-white overflow-hidden flex flex-col justify-between border-b border-slate-200 pt-8 pb-10"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Dynamic Background Image with Vibrant Atmospheric Lighting */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <img
          key={`bg-img-${slide.id}`}
          src={slide.image}
          alt={slide.title}
          className="w-full h-full object-cover object-center opacity-30 scale-105 transition-all duration-1000 ease-out filter brightness-90 saturate-125"
          referrerPolicy="no-referrer"
        />
        {/* Soft gradient wash to maintain crisp text contrast while keeping image visible */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B3D91] via-[#0B3D91]/85 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#082a66] via-transparent to-[#0B3D91]/60"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-400/10 rounded-full blur-3xl pointer-events-none"></div>
      </div>

      {/* Main Hero Grid Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full pt-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Dynamic Hero Content for Active Slide */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Tag Badge */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F5A623] text-[#0B3D91] text-xs font-black tracking-wide uppercase shadow-sm">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{slide.tag}</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 text-blue-100 text-xs font-bold border border-white/20 backdrop-blur-xs">
                <ShieldCheck className="w-3.5 h-3.5 text-[#F5A623]" />
                <span>{slide.accentBadge}</span>
              </span>
            </div>

            {/* Main Headline for Active Slide */}
            <h1
              id="hero-main-heading"
              className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight"
            >
              {slide.title}
            </h1>

            {/* Tagline Sub-line */}
            <div className="space-y-2">
              <p className="text-sm sm:text-base text-blue-100 font-normal leading-relaxed">
                {slide.subtitle}
              </p>
              
              <div className="p-3 rounded-xl bg-white/10 border border-white/15 backdrop-blur-xs flex items-start gap-2.5 text-xs sm:text-sm text-amber-200">
                <Zap className="w-4 h-4 text-[#F5A623] flex-shrink-0 mt-0.5" />
                <span className="font-medium text-white">{slide.highlight}</span>
              </div>
            </div>

            {/* Popular Quick Access Services */}
            <div className="space-y-2 pt-1">
              <p className="text-[11px] uppercase font-bold tracking-wider text-blue-200">
                Popular Quick Access Filings:
              </p>
              <div className="flex flex-wrap gap-2">
                {QUICK_ACCESS_PILLS.map((pill, idx) => {
                  const Icon = pill.icon;
                  return (
                    <button
                      key={idx}
                      id={`hero-pill-${idx}`}
                      onClick={() => onSelectService(pill.name)}
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white border border-white/20 hover:border-[#F5A623] text-xs font-semibold transition-all shadow-xs hover:scale-[1.02] cursor-pointer group backdrop-blur-xs"
                    >
                      <Icon className="w-3.5 h-3.5 text-[#F5A623] group-hover:scale-110 transition-transform" />
                      <span>{pill.name}</span>
                      <ArrowRight className="w-3 h-3 text-blue-200 group-hover:text-[#F5A623] group-hover:translate-x-0.5 transition-all" />
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Action CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <button
                id="hero-book-consultation-btn"
                onClick={onOpenConsultation}
                className="px-6 py-3.5 rounded-xl bg-[#F5A623] hover:bg-amber-400 text-[#0B3D91] font-extrabold text-sm sm:text-base shadow-lg hover:shadow-xl flex items-center gap-2 transition-all cursor-pointer"
              >
                <span>Book Free Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                id="hero-apply-service-btn"
                onClick={() => onSelectService(slide.serviceKey)}
                className="px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-sm sm:text-base border border-white/30 transition-all flex items-center gap-2 backdrop-blur-xs cursor-pointer"
              >
                <span>Apply for {slide.serviceKey}</span>
              </button>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap items-center gap-5 pt-3 text-xs text-blue-100 border-t border-white/15">
              <div className="flex items-center gap-1.5 font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#F5A623]" />
                <span>1,00,000+ Registered</span>
              </div>
              <div className="flex items-center gap-1.5 font-medium">
                <ShieldCheck className="w-4 h-4 text-[#F5A623]" />
                <span>ISO 9001:2015 &amp; 27001</span>
              </div>
              <div className="flex items-center gap-1.5 font-medium">
                <Clock className="w-4 h-4 text-[#F5A623]" />
                <span>{COMPANY_DETAILS.tagline}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Prominent, High-Visibility Hero Banner Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div
              id="hero-active-banner-card"
              className="w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden border-2 border-white/40 group hover:border-[#F5A623] transition-all duration-300"
            >
              {/* High-Resolution Visible Banner Image Frame */}
              <div className="relative h-56 sm:h-64 overflow-hidden bg-slate-900">
                <img
                  key={`card-img-${slide.id}`}
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 filter brightness-95 contrast-105"
                  referrerPolicy="no-referrer"
                />
                
                {/* Gradient vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-black/30"></div>
                
                {/* Top Badge on Banner Image */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full bg-[#0B3D91]/90 backdrop-blur-md text-[#F5A623] text-xs font-black uppercase tracking-wider border border-white/20 shadow-md">
                    Banner {slide.id} of {HERO_SLIDES.length}
                  </span>
                  <span className="px-2.5 py-1 rounded-full bg-emerald-600/90 text-white text-[11px] font-bold shadow-md flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" />
                    <span>Active 2026</span>
                  </span>
                </div>

                {/* Bottom Overlay Info on Image */}
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <div className="flex items-center gap-2 mb-1">
                    <CurrentIcon className="w-4 h-4 text-[#F5A623]" />
                    <span className="text-xs font-bold text-amber-300 uppercase tracking-wider">
                      {slide.tag}
                    </span>
                  </div>
                  <h4 className="text-sm font-bold text-white line-clamp-1">
                    {slide.title}
                  </h4>
                </div>
              </div>

              {/* Banner Details Body */}
              <div className="p-5 text-slate-900 bg-white space-y-4">
                {/* 3 Key Stats Badges */}
                <div className="grid grid-cols-3 gap-2 text-center">
                  <div className="p-2 rounded-xl bg-blue-50 border border-blue-100">
                    <span className="text-[10px] uppercase font-bold text-slate-500 block">Speed</span>
                    <span className="text-xs font-extrabold text-[#0B3D91] block truncate">{slide.stat1}</span>
                  </div>
                  <div className="p-2 rounded-xl bg-amber-50 border border-amber-100">
                    <span className="text-[10px] uppercase font-bold text-slate-500 block">Standard</span>
                    <span className="text-xs font-extrabold text-amber-800 block truncate">{slide.stat2}</span>
                  </div>
                  <div className="p-2 rounded-xl bg-emerald-50 border border-emerald-100">
                    <span className="text-[10px] uppercase font-bold text-slate-500 block">Guarantee</span>
                    <span className="text-xs font-extrabold text-emerald-800 block truncate">{slide.stat3}</span>
                  </div>
                </div>

                {/* Banner Action Footer */}
                <div className="flex items-center justify-between pt-1 border-t border-slate-100">
                  <div>
                    <span className="text-[11px] text-slate-500 block">Assigned Support</span>
                    <span className="text-xs font-bold text-[#0B3D91]">Senior CA / CS Advisory</span>
                  </div>
                  <button
                    onClick={() => onSelectService(slide.serviceKey)}
                    className="px-4 py-2 bg-[#0B3D91] hover:bg-blue-900 text-white text-xs font-extrabold rounded-lg shadow-sm flex items-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <span>Instant Filing</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#F5A623]" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ALL BANNERS VISIBLE STRIP & SELECTOR BAR */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full mt-10">
        <div className="bg-slate-950/60 backdrop-blur-md rounded-2xl p-3 sm:p-4 border border-white/20 shadow-xl">
          <div className="flex items-center justify-between mb-3 px-1">
            <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-amber-300">
              <Layers className="w-4 h-4 text-[#F5A623]" />
              <span>Visible Compliance Banners (Click Any Banner to View):</span>
            </div>
            
            {/* Slide Arrows & Dots */}
            <div className="flex items-center gap-2">
              <button
                id="hero-prev-btn"
                onClick={prevSlide}
                className="p-1.5 rounded-lg bg-white/10 hover:bg-white/25 text-white border border-white/20 transition-colors cursor-pointer"
                aria-label="Previous Banner"
                title="Previous Banner"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <span className="text-xs font-bold font-mono text-white/80 px-1">
                {currentSlide + 1} / {HERO_SLIDES.length}
              </span>
              <button
                id="hero-next-btn"
                onClick={nextSlide}
                className="p-1.5 rounded-lg bg-white/10 hover:bg-white/25 text-white border border-white/20 transition-colors cursor-pointer"
                aria-label="Next Banner"
                title="Next Banner"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* 5 Visible Banner Thumbnails Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5">
            {HERO_SLIDES.map((s, idx) => {
              const isActive = currentSlide === idx;
              const Icon = s.icon;
              return (
                <button
                  key={s.id}
                  id={`all-banner-thumb-${idx}`}
                  onClick={() => setCurrentSlide(idx)}
                  className={`group relative rounded-xl overflow-hidden p-2 text-left transition-all duration-300 cursor-pointer border flex flex-col justify-between h-24 ${
                    isActive
                      ? 'bg-gradient-to-r from-amber-400 to-yellow-500 text-slate-950 border-amber-300 ring-2 ring-amber-400 ring-offset-1 ring-offset-slate-950 shadow-lg scale-[1.02]'
                      : 'bg-white/10 hover:bg-white/15 text-white border-white/15 hover:border-white/40'
                  }`}
                >
                  {/* Background Thumbnail Image with overlay */}
                  <div className="absolute inset-0 z-0">
                    <img
                      src={s.image}
                      alt={s.tag}
                      className={`w-full h-full object-cover transition-opacity duration-300 ${
                        isActive ? 'opacity-20' : 'opacity-30 group-hover:opacity-40'
                      }`}
                      referrerPolicy="no-referrer"
                    />
                    <div
                      className={`absolute inset-0 ${
                        isActive ? 'bg-amber-400/80' : 'bg-slate-950/70'
                      }`}
                    ></div>
                  </div>

                  {/* Content over thumbnail */}
                  <div className="relative z-10 flex items-center justify-between w-full">
                    <span
                      className={`text-[9px] font-black uppercase tracking-wider px-1.5 py-0.5 rounded ${
                        isActive
                          ? 'bg-slate-950 text-amber-300'
                          : 'bg-white/20 text-white'
                      }`}
                    >
                      Banner {s.id}
                    </span>
                    <Icon
                      className={`w-3.5 h-3.5 ${
                        isActive ? 'text-slate-950' : 'text-[#F5A623]'
                      }`}
                    />
                  </div>

                  <div className="relative z-10 mt-1">
                    <p
                      className={`text-[11px] font-bold leading-tight line-clamp-2 ${
                        isActive ? 'text-slate-950' : 'text-slate-100 group-hover:text-white'
                      }`}
                    >
                      {s.tag}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
