import React, { useState, useEffect } from 'react';
import {
  ShieldCheck,
  CheckCircle2,
  Clock,
  Zap,
  Award,
  Star,
  Users,
  Building2,
  Phone,
  Mail,
  FileDown,
  ArrowRight,
  ArrowLeft,
  RefreshCw,
  HelpCircle,
  ChevronDown,
  ChevronUp,
  Share2,
  Lock,
  Headphones,
  Check,
  X,
  ExternalLink,
  ChevronRight,
  Sparkles,
  Layers,
  FileText,
  CreditCard,
  UserCheck,
  Download,
  Flame,
  Tag,
  Shield,
  Smartphone,
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  Send
} from 'lucide-react';
import { TopUtilityBar } from '../components/TopUtilityBar';
import { HeaderMegaMenu } from '../components/HeaderMegaMenu';
import { Footer } from '../components/Footer';
import { AuthModal } from '../components/AuthModal';
import {
  COMPANY_DETAILS,
  INDIAN_STATES_AND_UTS,
  BUSINESS_TYPES,
  BUSINESS_ACTIVITIES,
  SERVICES_DATA
} from '../data/servicesData';
import { ServiceItem } from '../types';
import { sendLeadEmail } from '../lib/emailService';

interface PrivateLimitedLandingProps {
  onBackToHome: () => void;
  onSelectService: (serviceName: string) => void;
  onOpenBrochure: () => void;
  onOpenAppointment: () => void;
}

// 5 FAQs
const FAQ_ITEMS = [
  {
    q: 'How many persons are required to register a Private Limited Company?',
    a: 'Under the Companies Act 2013, a minimum of 2 shareholders (maximum 200) and a minimum of 2 directors (maximum 15) are required. One person can act as both a director and a shareholder, meaning a minimum of 2 individuals is sufficient to register the company.'
  },
  {
    q: 'Is commercial office space mandatory for company registration?',
    a: 'No, commercial office space is not mandatory. You can register your company with a residential address (even your home or rented apartment) as the official registered office, provided you provide an electricity bill (less than 2 months old) along with a No Objection Certificate (NOC) from the property owner.'
  },
  {
    q: 'What is the government fee for incorporating a Private Limited Company?',
    a: 'Under the Ministry of Corporate Affairs (MCA) SPICe+ scheme, the government incorporation fee on nominal authorized capital up to ₹15,00,000 is ₹0 (Zero). Nominal state stamp duty and PAN/TAN processing fees apply depending on the state of registration.'
  },
  {
    q: 'How long does the complete registration process take?',
    a: 'With our AI-validated document workflow and Senior CA guidance, the complete incorporation process is usually completed in 4 to 5 working days, subject to MCA portal processing speeds and document clearance.'
  },
  {
    q: 'Can a foreign national or NRI be a director in an Indian Private Limited Company?',
    a: 'Yes, NRIs and foreign nationals can become directors and shareholders in an Indian Private Limited Company. The only statutory requirement is that at least one director must be a resident of India (having stayed in India for at least 182 days in the previous financial year).'
  }
];

// Related services carousel items
const RELATED_SERVICES = [
  {
    title: 'Limited Liability Partnership (LLP)',
    desc: 'Low compliance legal entity ideal for professional partnerships.',
    img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&auto=format&fit=crop&q=80',
    price: '₹2,999'
  },
  {
    title: 'One Person Company (OPC)',
    desc: 'Sole founder company with limited liability protection.',
    img: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600&auto=format&fit=crop&q=80',
    price: '₹2,499'
  },
  {
    title: 'Section 8 Company (NGO)',
    desc: 'Non-profit corporate structure with 12A & 80G tax exemptions.',
    img: 'https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=600&auto=format&fit=crop&q=80',
    price: '₹9,999'
  },
  {
    title: 'GST Registration & Return',
    desc: 'Goods & Services Tax registration with ARN approval.',
    img: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600&auto=format&fit=crop&q=80',
    price: '₹999'
  },
  {
    title: 'Trademark (™) Registration',
    desc: 'Nationwide brand & logo protection with IP India filing.',
    img: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?w=600&auto=format&fit=crop&q=80',
    price: '₹1,499'
  },
  {
    title: 'FSSAI Food License',
    desc: 'FoSCoS basic, state and central food safety licenses.',
    img: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&auto=format&fit=crop&q=80',
    price: '₹1,999'
  },
  {
    title: 'Import Export Code (IEC)',
    desc: 'DGFT lifetime valid IEC code for worldwide trade.',
    img: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&auto=format&fit=crop&q=80',
    price: '₹1,999'
  },
  {
    title: 'ISO 9001:2015 Certification',
    desc: 'International quality standard certification for tenders.',
    img: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&auto=format&fit=crop&q=80',
    price: '₹2,499'
  }
];

export const PrivateLimitedLanding: React.FC<PrivateLimitedLandingProps> = ({
  onBackToHome,
  onSelectService,
  onOpenBrochure,
  onOpenAppointment
}) => {
  // Navigation tabs state
  const [activeNavTab, setActiveNavTab] = useState('packages');

  // Auth modal state
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [authTab, setAuthTab] = useState<'signin' | 'signup' | 'forgot'>('signin');

  // Lead capture form states
  const [formStep, setFormStep] = useState<1 | 2 | 3>(1);
  const [stateName, setStateName] = useState(INDIAN_STATES_AND_UTS[0]);
  const [fullName, setFullName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [businessType, setBusinessType] = useState('Private Limited Company (Pvt Ltd)');
  const [businessActivity, setBusinessActivity] = useState(BUSINESS_ACTIVITIES[0]);
  const [panNumber, setPanNumber] = useState('');
  const [selectedPackage, setSelectedPackage] = useState('Standard (₹9,999)');
  const [captchaInput, setCaptchaInput] = useState('');
  const [captchaCode, setCaptchaCode] = useState('7K9P2');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submissionRef, setSubmissionRef] = useState('');

  // Accordion FAQ state
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  // Animated stat counters
  const [counterClients, setCounterClients] = useState(0);
  const [counterCertificates, setCounterCertificates] = useState(0);
  const [counterProfessionals, setCounterProfessionals] = useState(0);

  // Scroll to section helper
  const scrollToSection = (sectionId: string) => {
    setActiveNavTab(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      const yOffset = -120;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  // Generate random captcha
  const refreshCaptcha = () => {
    const chars = '23456789ABCDEFGHJKLMNPQRSTUVWXYZ';
    let code = '';
    for (let i = 0; i < 5; i++) {
      code += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setCaptchaCode(code);
  };

  // Run animated stat counter on mount
  useEffect(() => {
    refreshCaptcha();

    const duration = 2000;
    const steps = 60;
    const intervalTime = duration / steps;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      setCounterClients(Math.floor(progress * 100000));
      setCounterCertificates(Math.floor(progress * 45000));
      setCounterProfessionals(Math.floor(progress * 150));

      if (step >= steps) {
        setCounterClients(100000);
        setCounterCertificates(45000);
        setCounterProfessionals(150);
        clearInterval(timer);
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, []);

  const handleFormNext = (e: React.FormEvent) => {
    e.preventDefault();
    if (formStep === 1) {
      if (!fullName || !mobileNumber || !emailAddress) {
        alert('Please enter your Name, Mobile Number, and Email Address to proceed.');
        return;
      }
      setFormStep(2);
    } else if (formStep === 2) {
      setFormStep(3);
    } else {
      if (captchaInput.toUpperCase() !== captchaCode.toUpperCase()) {
        alert('Captcha verification code does not match. Please try again.');
        refreshCaptcha();
        setCaptchaInput('');
        return;
      }
      setIsSubmitting(true);
      const ref = 'PVT-' + Math.floor(100000 + Math.random() * 900000);
      
      // Dispatch data to EmailJS
      sendLeadEmail({
        sourceForm: 'Private Limited Landing Page Form',
        fullName,
        phone: mobileNumber,
        email: emailAddress,
        state: stateName,
        businessType,
        businessActivity,
        selectedPackage,
        panNumber,
        submissionRef: ref
      }).then(() => {
        setIsSubmitting(false);
        setSubmissionRef(ref);
        setSubmitSuccess(true);
      }).catch(() => {
        setIsSubmitting(false);
        setSubmissionRef(ref);
        setSubmitSuccess(true);
      });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-amber-500 selection:text-white flex flex-col antialiased">
      
      {/* 1. HEADER / TOP BAR */}
      <TopUtilityBar onOpenBrochure={onOpenBrochure} />
      
      <HeaderMegaMenu
        onSelectService={(serviceName) => {
          if (serviceName.toLowerCase().includes('private limited')) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          } else {
            onSelectService(serviceName);
          }
        }}
        onOpenConsultation={onOpenAppointment}
      />

      {/* BREADCRUMB BAR */}
      <div className="bg-slate-100 border-b border-slate-200 py-2.5 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-xs text-slate-600">
          <div className="flex items-center gap-2">
            <button
              onClick={onBackToHome}
              className="text-[#0B3D91] hover:underline font-semibold flex items-center gap-1 cursor-pointer"
            >
              <span>Home</span>
            </button>
            <span className="text-slate-400">»</span>
            <span className="text-slate-500 font-medium">Business Startup</span>
            <span className="text-slate-400">»</span>
            <span className="text-slate-900 font-bold">Private Limited Company</span>
          </div>

          <button
            onClick={() => {
              setAuthTab('signin');
              setIsAuthOpen(true);
            }}
            className="text-[11px] font-bold text-[#0B3D91] hover:underline flex items-center gap-1 cursor-pointer"
          >
            <UserCheck className="w-3.5 h-3.5 text-[#F5A623]" />
            <span>Track Existing Application</span>
          </button>
        </div>
      </div>

      <main className="flex-grow">
        {/* 2. HERO SECTION */}
        <section
          id="hero-section"
          className="relative bg-gradient-to-br from-[#0B3D91] via-[#0D47A1] to-[#082a66] text-white pt-10 pb-16 overflow-hidden border-b border-slate-200"
        >
          {/* Subtle geometric backdrop */}
          <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
            <div className="absolute top-0 right-0 w-96 h-96 bg-amber-400 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-400 rounded-full blur-3xl"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              
              {/* Left Column: Hero Content & Animated Stats */}
              <div className="lg:col-span-7 space-y-6">
                
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F5A623] text-[#0B3D91] text-xs font-black uppercase tracking-wider shadow-sm">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>MCA SPICe+ V3 Digital Incorporation</span>
                </div>

                {/* H1 Title */}
                <div>
                  <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
                    Private Limited Company
                  </h1>
                  <p className="mt-2 text-lg sm:text-2xl font-bold text-amber-300">
                    Get registration starting at <span className="underline decoration-[#F5A623] font-black text-white">₹1999/- only!</span>
                  </p>
                </div>

                {/* 2-3 Line Description */}
                <p className="text-sm sm:text-base text-blue-100 font-normal leading-relaxed">
                  Incorporate your dream business with complete legal protection, limited liability shelter, and statutory MCA approvals. Backed by Senior Chartered Accountants, Company Secretaries, and zero-error AI document automation.
                </p>

                {/* Row of 5-6 Feature Badges */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-1">
                  <div className="flex items-center gap-2 p-2 rounded-xl bg-white/10 border border-white/15 backdrop-blur-xs text-xs font-semibold text-white">
                    <Clock className="w-4 h-4 text-[#F5A623] flex-shrink-0" />
                    <span>4 to 5 Working Days</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 rounded-xl bg-white/10 border border-white/15 backdrop-blur-xs text-xs font-semibold text-white">
                    <FileText className="w-4 h-4 text-[#F5A623] flex-shrink-0" />
                    <span>PAN &amp; TAN Included</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 rounded-xl bg-white/10 border border-white/15 backdrop-blur-xs text-xs font-semibold text-white">
                    <CreditCard className="w-4 h-4 text-[#F5A623] flex-shrink-0" />
                    <span>2 DIN &amp; 2 DSCs</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 rounded-xl bg-white/10 border border-white/15 backdrop-blur-xs text-xs font-semibold text-white">
                    <Zap className="w-4 h-4 text-[#F5A623] flex-shrink-0" />
                    <span>Fast-Track Process</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 rounded-xl bg-white/10 border border-white/15 backdrop-blur-xs text-xs font-semibold text-white">
                    <Award className="w-4 h-4 text-[#F5A623] flex-shrink-0" />
                    <span>Dedicated CA Advisor</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 rounded-xl bg-white/10 border border-white/15 backdrop-blur-xs text-xs font-semibold text-white">
                    <ShieldCheck className="w-4 h-4 text-[#F5A623] flex-shrink-0" />
                    <span>100% Online &amp; Paperless</span>
                  </div>
                </div>

                {/* 3 Animated Stat Counters */}
                <div className="grid grid-cols-3 gap-3 pt-3">
                  <div className="p-3.5 rounded-2xl bg-white/10 border border-white/20 text-center backdrop-blur-xs">
                    <div className="text-xl sm:text-3xl font-black text-amber-300 font-mono">
                      {counterClients.toLocaleString()}+
                    </div>
                    <div className="text-[11px] sm:text-xs font-semibold text-blue-100 uppercase tracking-wider mt-0.5">
                      Happy Clients
                    </div>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-white/10 border border-white/20 text-center backdrop-blur-xs">
                    <div className="text-xl sm:text-3xl font-black text-white font-mono">
                      {counterCertificates.toLocaleString()}+
                    </div>
                    <div className="text-[11px] sm:text-xs font-semibold text-blue-100 uppercase tracking-wider mt-0.5">
                      Certificates Issued
                    </div>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-white/10 border border-white/20 text-center backdrop-blur-xs">
                    <div className="text-xl sm:text-3xl font-black text-amber-300 font-mono">
                      {counterProfessionals}+
                    </div>
                    <div className="text-[11px] sm:text-xs font-semibold text-blue-100 uppercase tracking-wider mt-0.5">
                      CA / CS Professionals
                    </div>
                  </div>
                </div>

                {/* Trust Badges Row */}
                <div className="pt-3 border-t border-white/15 flex flex-wrap items-center gap-4">
                  <div className="text-xs text-blue-200 font-bold uppercase tracking-wider">
                    Verified Ratings:
                  </div>

                  <a
                    href="https://google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/15 hover:bg-white/25 text-white border border-white/20 text-xs font-bold transition-colors"
                  >
                    <div className="w-4 h-4 rounded-full bg-white text-blue-700 flex items-center justify-center font-black text-[10px]">
                      G
                    </div>
                    <span>Google Reviews</span>
                    <span className="text-[#F5A623] flex items-center">4.9 ★</span>
                  </a>

                  <a
                    href="https://ambitionbox.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/15 hover:bg-white/25 text-white border border-white/20 text-xs font-bold transition-colors"
                  >
                    <span className="font-mono text-emerald-400 font-black">AB</span>
                    <span>AmbitionBox</span>
                    <span className="text-[#F5A623] flex items-center">4.8 ★</span>
                  </a>

                  <a
                    href="https://trustpilot.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/15 hover:bg-white/25 text-white border border-white/20 text-xs font-bold transition-colors"
                  >
                    <Star className="w-3.5 h-3.5 text-emerald-400 fill-emerald-400" />
                    <span>Trustpilot</span>
                    <span className="text-[#F5A623] flex items-center">4.9 ★</span>
                  </a>
                </div>
              </div>

              {/* 3. LEAD CAPTURE FORM (Sticky / Sidebar Widget) */}
              <div className="lg:col-span-5">
                <div
                  id="lead-capture-widget"
                  className="bg-white rounded-2xl shadow-2xl border-2 border-amber-400 p-5 sm:p-6 text-slate-900 sticky top-24"
                >
                  {submitSuccess ? (
                    <div className="text-center py-8 space-y-4 animate-in fade-in">
                      <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
                        <CheckCircle2 className="w-10 h-10" />
                      </div>
                      <h3 className="text-xl font-bold text-slate-900">Application Initiated!</h3>
                      <p className="text-xs text-slate-600 max-w-sm mx-auto">
                        Thank you <span className="font-bold text-slate-900">{fullName}</span>. Your Private Limited Registration dossier reference is:
                      </p>
                      <div className="inline-block px-4 py-2 bg-blue-50 border border-blue-200 rounded-xl font-mono font-black text-sm text-[#0B3D91]">
                        {submissionRef}
                      </div>
                      <p className="text-xs text-slate-500">
                        Our Senior Chartered Accountant will call you at <span className="font-semibold text-slate-800">{mobileNumber}</span> within 15 minutes to verify your proposed company name and draft the SPICe+ paperwork.
                      </p>
                      <button
                        onClick={() => {
                          setSubmitSuccess(false);
                          setFormStep(1);
                          setFullName('');
                          setMobileNumber('');
                          setEmailAddress('');
                          setPanNumber('');
                        }}
                        className="px-6 py-2.5 bg-[#0B3D91] hover:bg-blue-900 text-white text-xs font-bold rounded-xl shadow-md transition-all cursor-pointer"
                      >
                        Submit Another Application
                      </button>
                    </div>
                  ) : (
                    <>
                      {/* Form Header */}
                      <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-4">
                        <div>
                          <div className="flex items-center gap-1.5">
                            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                            <span className="text-[10px] font-black uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full">
                              Instant CA Assignment
                            </span>
                          </div>
                          <h3 className="text-lg font-extrabold text-slate-900 mt-1">
                            Register Your Company
                          </h3>
                        </div>
                        <span className="text-xs font-bold text-[#0B3D91] bg-blue-50 px-2.5 py-1 rounded-lg border border-blue-100">
                          Step {formStep} of 3
                        </span>
                      </div>

                      {/* Step Progress Indicators */}
                      <div className="grid grid-cols-3 gap-1.5 mb-5">
                        <div className={`h-1.5 rounded-full ${formStep >= 1 ? 'bg-[#0B3D91]' : 'bg-slate-200'}`}></div>
                        <div className={`h-1.5 rounded-full ${formStep >= 2 ? 'bg-[#0B3D91]' : 'bg-slate-200'}`}></div>
                        <div className={`h-1.5 rounded-full ${formStep >= 3 ? 'bg-[#0B3D91]' : 'bg-slate-200'}`}></div>
                      </div>

                      <form onSubmit={handleFormNext} className="space-y-3.5">
                        {/* STEP 1: State & Contact Info */}
                        {formStep === 1 && (
                          <div className="space-y-3 animate-in fade-in">
                            <div>
                              <label className="block text-xs font-bold text-slate-700 mb-1">
                                Select State of Incorporation *
                              </label>
                              <select
                                value={stateName}
                                onChange={(e) => setStateName(e.target.value)}
                                className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2 text-xs font-medium text-slate-900 focus:outline-none focus:border-[#0B3D91]"
                              >
                                {INDIAN_STATES_AND_UTS.map((s, idx) => (
                                  <option key={idx} value={s}>{s}</option>
                                ))}
                              </select>
                            </div>

                            <div>
                              <label className="block text-xs font-bold text-slate-700 mb-1">
                                Full Name of Director / Applicant *
                              </label>
                              <input
                                type="text"
                                required
                                placeholder="e.g. Ramesh Kumar"
                                value={fullName}
                                onChange={(e) => setFullName(e.target.value)}
                                className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2 text-xs font-medium text-slate-900 focus:outline-none focus:border-[#0B3D91]"
                              />
                            </div>

                            <div>
                              <label className="block text-xs font-bold text-slate-700 mb-1">
                                Mobile Number (WhatsApp Updates) *
                              </label>
                              <input
                                type="tel"
                                required
                                placeholder="10-digit mobile number"
                                value={mobileNumber}
                                onChange={(e) => setMobileNumber(e.target.value)}
                                className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2 text-xs font-medium text-slate-900 focus:outline-none focus:border-[#0B3D91]"
                              />
                            </div>

                            <div>
                              <label className="block text-xs font-bold text-slate-700 mb-1">
                                Email Address (Official Filing Receipt) *
                              </label>
                              <input
                                type="email"
                                required
                                placeholder="name@company.com"
                                value={emailAddress}
                                onChange={(e) => setEmailAddress(e.target.value)}
                                className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2 text-xs font-medium text-slate-900 focus:outline-none focus:border-[#0B3D91]"
                              />
                            </div>
                          </div>
                        )}

                        {/* STEP 2: Business Type & Activity */}
                        {formStep === 2 && (
                          <div className="space-y-3 animate-in fade-in">
                            <div>
                              <label className="block text-xs font-bold text-slate-700 mb-1">
                                Business Structure Type *
                              </label>
                              <select
                                value={businessType}
                                onChange={(e) => setBusinessType(e.target.value)}
                                className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2 text-xs font-medium text-slate-900 focus:outline-none focus:border-[#0B3D91]"
                              >
                                <option value="Private Limited Company (Pvt Ltd)">Private Limited Company (Pvt Ltd)</option>
                                <option value="One Person Company (OPC)">One Person Company (OPC)</option>
                                <option value="Limited Liability Partnership (LLP)">Limited Liability Partnership (LLP)</option>
                                <option value="Sole Proprietorship">Sole Proprietorship</option>
                                <option value="Partnership Firm">Partnership Firm</option>
                                <option value="Public Limited Company">Public Limited Company</option>
                                <option value="Others">Others</option>
                              </select>
                            </div>

                            <div>
                              <label className="block text-xs font-bold text-slate-700 mb-1">
                                Primary Business Activity *
                              </label>
                              <select
                                value={businessActivity}
                                onChange={(e) => setBusinessActivity(e.target.value)}
                                className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2 text-xs font-medium text-slate-900 focus:outline-none focus:border-[#0B3D91]"
                              >
                                <option value="Services & IT / Consulting">Services &amp; IT / Consulting</option>
                                <option value="Trading & Wholesale">Trading &amp; Wholesale</option>
                                <option value="Manufacturing & Production">Manufacturing &amp; Production</option>
                                <option value="E-Commerce & Digital Goods">E-Commerce &amp; Digital Goods</option>
                                <option value="Import & Export">Import &amp; Export</option>
                                <option value="Food & Restaurant / Hospitality">Food &amp; Restaurant / Hospitality</option>
                                <option value="Healthcare & Pharma">Healthcare &amp; Pharma</option>
                                <option value="Construction & Real Estate">Construction &amp; Real Estate</option>
                                <option value="Other Commercial Activities">Other Commercial Activities</option>
                              </select>
                            </div>

                            <div className="p-3 bg-blue-50 border border-blue-100 rounded-xl text-[11px] text-blue-900 space-y-1">
                              <p className="font-bold flex items-center gap-1 text-[#0B3D91]">
                                <Sparkles className="w-3.5 h-3.5 text-[#F5A623]" />
                                Free Proposed Name Validation Included
                              </p>
                              <p className="text-slate-600">
                                Our legal team will run an automated MCA &amp; Trademark search to prevent rejection.
                              </p>
                            </div>
                          </div>
                        )}

                        {/* STEP 3: PAN Number, Package Selector & Captcha */}
                        {formStep === 3 && (
                          <div className="space-y-3 animate-in fade-in">
                            <div>
                              <label className="block text-xs font-bold text-slate-700 mb-1">
                                Director PAN Card Number *
                              </label>
                              <input
                                type="text"
                                required
                                maxLength={10}
                                placeholder="ABCDE1234F"
                                value={panNumber}
                                onChange={(e) => setPanNumber(e.target.value.toUpperCase())}
                                className="w-full uppercase font-mono bg-white border border-slate-300 rounded-lg px-3 py-2 text-xs font-bold text-slate-900 focus:outline-none focus:border-[#0B3D91]"
                              />
                            </div>

                            <div>
                              <label className="block text-xs font-bold text-slate-700 mb-1">
                                Choose Incorporation Package *
                              </label>
                              <select
                                value={selectedPackage}
                                onChange={(e) => setSelectedPackage(e.target.value)}
                                className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2 text-xs font-bold text-slate-900 focus:outline-none focus:border-[#0B3D91]"
                              >
                                <option value="Basic (₹4,999)">Basic Package — ₹4,999 (COI + PAN/TAN + 2 DSC/DIN)</option>
                                <option value="Standard (₹9,999)">Standard Package — ₹9,999 (+ GST + MSME + 3M Returns)</option>
                                <option value="Premium (₹19,999)">Premium All-in-One — ₹19,999 (+ Website, TM, 1Y GST)</option>
                              </select>
                            </div>

                            {/* Captcha with reload icon */}
                            <div>
                              <label className="block text-xs font-bold text-slate-700 mb-1">
                                Verification Captcha *
                              </label>
                              <div className="flex items-center gap-2">
                                <div className="bg-slate-900 text-amber-300 font-mono font-black text-sm px-4 py-2 rounded-lg tracking-widest select-none flex items-center justify-center border border-slate-800 shadow-inner">
                                  {captchaCode}
                                </div>
                                <button
                                  type="button"
                                  onClick={refreshCaptcha}
                                  className="p-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg border border-slate-300 cursor-pointer"
                                  title="Reload Captcha"
                                >
                                  <RefreshCw className="w-4 h-4" />
                                </button>
                                <input
                                  type="text"
                                  required
                                  maxLength={5}
                                  placeholder="Enter Code"
                                  value={captchaInput}
                                  onChange={(e) => setCaptchaInput(e.target.value.toUpperCase())}
                                  className="flex-1 uppercase font-mono bg-white border border-slate-300 rounded-lg px-3 py-2 text-xs font-bold text-slate-900 focus:outline-none focus:border-[#0B3D91]"
                                />
                              </div>
                            </div>
                          </div>
                        )}

                        {/* Navigation Buttons */}
                        <div className="flex items-center gap-2 pt-2">
                          {formStep > 1 && (
                            <button
                              type="button"
                              onClick={() => setFormStep((prev) => (prev - 1) as 1 | 2)}
                              className="px-4 py-2.5 rounded-xl border border-slate-300 hover:bg-slate-100 text-slate-700 text-xs font-bold flex items-center gap-1 transition-colors cursor-pointer"
                            >
                              <ArrowLeft className="w-3.5 h-3.5" />
                              <span>Back</span>
                            </button>
                          )}

                          <button
                            type="submit"
                            disabled={isSubmitting}
                            className="flex-1 py-2.5 rounded-xl bg-[#F5A623] hover:bg-amber-400 text-[#0B3D91] font-black text-xs sm:text-sm shadow-md hover:shadow-lg flex items-center justify-center gap-2 transition-all cursor-pointer"
                          >
                            <span>
                              {isSubmitting
                                ? 'Verifying...'
                                : formStep === 3
                                ? 'Submit Incorporation Dossier'
                                : 'Next Step'}
                            </span>
                            <ArrowRight className="w-4 h-4" />
                          </button>
                        </div>
                      </form>

                      {/* Micro trust note */}
                      <div className="mt-3 pt-3 border-t border-slate-100 flex items-center justify-between text-[10px] text-slate-400">
                        <span className="flex items-center gap-1">
                          <Lock className="w-3 h-3 text-emerald-600" />
                          <span>Strict Privacy &amp; Data Security</span>
                        </span>
                        <span>Zero Spam Guarantee</span>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. STICKY IN-PAGE NAVIGATION (Anchor Tabs) */}
        <div className="sticky top-0 z-40 bg-white border-b border-slate-200 shadow-xs backdrop-blur-md bg-white/95">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="flex items-center gap-1 sm:gap-2 overflow-x-auto py-2.5 no-scrollbar text-xs font-bold text-slate-600">
              {[
                { id: 'packages', label: 'Packages' },
                { id: 'overview', label: 'Overview' },
                { id: 'what-is-pvt', label: 'What is PVT?' },
                { id: 'key-features', label: 'Key Features' },
                { id: 'benefits', label: 'Benefits' },
                { id: 'adv-disadv', label: 'Adv vs Disadv' },
                { id: 'difference', label: 'Difference' },
                { id: 'documents', label: 'Documents' },
                { id: 'steps', label: 'Steps' },
                { id: 'compliances', label: 'Compliances' },
                { id: 'why-us', label: 'Why Us' },
                { id: 'faqs', label: "FAQ's" }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => scrollToSection(tab.id)}
                  className={`px-3 py-1.5 rounded-lg whitespace-nowrap transition-all cursor-pointer ${
                    activeNavTab === tab.id
                      ? 'bg-[#0B3D91] text-white shadow-xs'
                      : 'hover:bg-slate-100 text-slate-700'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* 5. PRICING PACKAGES (3-tier cards) */}
        <section id="packages" className="py-14 bg-slate-50 border-b border-slate-200 scroll-mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <span className="text-xs font-black uppercase tracking-wider text-[#0B3D91] bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                Transparent Pricing
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 mt-2">
                Choose Your Private Limited Incorporation Package
              </h2>
              <p className="text-sm text-slate-600 mt-2">
                All-inclusive statutory packages with zero hidden fees. Select the perfect tier for your venture.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
              {/* Basic Package */}
              <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-md hover:shadow-xl transition-all flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-bold text-slate-900">Basic Package</h3>
                    <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 text-[10px] font-black uppercase">
                      50% Off
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 mb-4">
                    Essential incorporation for founders ready to register.
                  </p>

                  <div className="mb-4 pb-4 border-b border-slate-100">
                    <div className="flex items-baseline gap-2">
                      <span className="text-xs text-slate-400 line-through">₹9,999</span>
                      <span className="text-3xl font-extrabold text-[#0B3D91]">₹4,999</span>
                    </div>
                    <span className="text-[11px] text-slate-500 font-medium block mt-0.5">
                      + Govt. Fee (paid later as per state stamp duty)
                    </span>
                  </div>

                  {/* Trust Micro-copy */}
                  <div className="space-y-1.5 mb-6 text-xs text-slate-600 bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                    <div className="flex items-center gap-1.5 text-emerald-700 font-semibold">
                      <Tag className="w-3.5 h-3.5 flex-shrink-0" />
                      <span>Lowest cost first time ever</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-blue-700 font-semibold">
                      <Clock className="w-3.5 h-3.5 flex-shrink-0" />
                      <span>Instant ₹5,000 less - available 24 hours</span>
                    </div>
                  </div>

                  {/* Inclusions Checklist */}
                  <div className="space-y-2.5 mb-6">
                    <p className="text-xs font-bold text-slate-900 uppercase tracking-wider">Package Inclusions:</p>
                    {[
                      'Name Approval (RUN / SPICe+ Part A)',
                      'Certificate of Incorporation (COI)',
                      'Company PAN Card Allocation',
                      'Company TAN Number Generation',
                      '2 Director Identification Numbers (DIN)',
                      '2 Class-3 Digital Signature Certificates (DSC)',
                      'Drafting of eMOA & eAOA',
                      'EPFO & ESIC Registration',
                      'Current Bank Account Opening Assistance'
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => {
                    setSelectedPackage('Basic (₹4,999)');
                    scrollToSection('lead-capture-widget');
                  }}
                  className="w-full py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs shadow-md transition-all cursor-pointer"
                >
                  Get Started with Basic
                </button>
              </div>

              {/* Standard Package (POPULAR) */}
              <div className="bg-white rounded-2xl border-2 border-[#0B3D91] p-6 shadow-xl relative flex flex-col justify-between transform md:-translate-y-2">
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#F5A623] text-[#0B3D91] text-xs font-black uppercase tracking-wider shadow-md">
                  Most Popular Choice
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2 mt-1">
                    <h3 className="text-lg font-bold text-slate-900">Standard Package</h3>
                    <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 text-[10px] font-black uppercase">
                      50% Off
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 mb-4">
                    Complete startup kit with tax registration &amp; return filings.
                  </p>

                  <div className="mb-4 pb-4 border-b border-slate-100">
                    <div className="flex items-baseline gap-2">
                      <span className="text-xs text-slate-400 line-through">₹19,999</span>
                      <span className="text-3xl font-black text-[#0B3D91]">₹9,999</span>
                    </div>
                    <span className="text-[11px] text-slate-500 font-medium block mt-0.5">
                      + Govt. Fee (paid later as per state stamp duty)
                    </span>
                  </div>

                  {/* Trust Micro-copy */}
                  <div className="space-y-1.5 mb-6 text-xs text-slate-600 bg-amber-50/60 p-2.5 rounded-xl border border-amber-200">
                    <div className="flex items-center gap-1.5 text-emerald-800 font-semibold">
                      <Tag className="w-3.5 h-3.5 flex-shrink-0" />
                      <span>Lowest cost first time ever</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-[#0B3D91] font-semibold">
                      <Flame className="w-3.5 h-3.5 text-[#F5A623] flex-shrink-0" />
                      <span>Instant ₹10,000 less - available 24 hours</span>
                    </div>
                  </div>

                  {/* Inclusions Checklist */}
                  <div className="space-y-2.5 mb-6">
                    <p className="text-xs font-bold text-slate-900 uppercase tracking-wider">Package Inclusions:</p>
                    {[
                      'Everything in Basic Package',
                      'MSME / Udyam Registration Certificate',
                      'GST Registration Certificate & ARN',
                      '3 Months Complete GST Return Filing (GSTR-1 & 3B)',
                      'ISO 9001:2015 Quality Standard Certificate',
                      'INC-20A Commencement of Business Filing',
                      'Priority Support via Dedicated CA'
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs font-medium text-slate-800">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => {
                    setSelectedPackage('Standard (₹9,999)');
                    scrollToSection('lead-capture-widget');
                  }}
                  className="w-full py-3 rounded-xl bg-[#0B3D91] hover:bg-blue-900 text-white font-extrabold text-xs shadow-lg transition-all cursor-pointer"
                >
                  Get Started with Standard
                </button>
              </div>

              {/* Premium Package */}
              <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-md hover:shadow-xl transition-all flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-bold text-slate-900">Premium Package</h3>
                    <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 text-[10px] font-black uppercase">
                      50% Off
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 mb-4">
                    Complete 360° corporate umbrella with trademark, website &amp; 1-year tax.
                  </p>

                  <div className="mb-4 pb-4 border-b border-slate-100">
                    <div className="flex items-baseline gap-2">
                      <span className="text-xs text-slate-400 line-through">₹39,999</span>
                      <span className="text-3xl font-extrabold text-[#0B3D91]">₹19,999</span>
                    </div>
                    <span className="text-[11px] text-slate-500 font-medium block mt-0.5">
                      + Govt. Fee (paid later as per state stamp duty)
                    </span>
                  </div>

                  {/* Trust Micro-copy */}
                  <div className="space-y-1.5 mb-6 text-xs text-slate-600 bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                    <div className="flex items-center gap-1.5 text-emerald-700 font-semibold">
                      <Tag className="w-3.5 h-3.5 flex-shrink-0" />
                      <span>Lowest cost first time ever</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-blue-700 font-semibold">
                      <Clock className="w-3.5 h-3.5 flex-shrink-0" />
                      <span>Instant ₹20,000 less - available 24 hours</span>
                    </div>
                  </div>

                  {/* Inclusions Checklist */}
                  <div className="space-y-2.5 mb-6">
                    <p className="text-xs font-bold text-slate-900 uppercase tracking-wider">Package Inclusions:</p>
                    {[
                      'Everything in Standard Package',
                      '1 Full Year Complete GST Returns',
                      'Professional Corporate Website + Cloud Server',
                      'Trademark (™) Registration Filing (1 Class)',
                      'Brand Name & Vector Logo Design Kit',
                      '1 Year Cloud GST Invoicing Software License',
                      'Payment Gateway Integration Assistance',
                      'Physical Corporate Documentation Kit & Seal',
                      'First Auditor Appointment (Form ADT-1)',
                      '24x7 VIP Support with Senior Partner CA'
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => {
                    setSelectedPackage('Premium (₹19,999)');
                    scrollToSection('lead-capture-widget');
                  }}
                  className="w-full py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs shadow-md transition-all cursor-pointer"
                >
                  Get Started with Premium
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* 6. OVERVIEW SECTION */}
        <section id="overview" className="py-14 bg-white border-b border-slate-200 scroll-mt-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-6">
            <div className="text-center mb-8">
              <span className="text-xs font-black uppercase tracking-wider text-[#0B3D91] bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                Statutory Insight
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">
                Private Limited Company Registration Overview
              </h2>
            </div>

            <div className="prose prose-slate max-w-none text-slate-700 space-y-4 text-sm sm:text-base leading-relaxed">
              <p>
                A <strong>Private Limited Company (Pvt Ltd)</strong> is the most prestigious and widely recognized corporate business structure in India, regulated under the Companies Act, 2013 and governed by the Ministry of Corporate Affairs (MCA). Recognized as an independent legal entity separate from its shareholders and directors, a Private Limited Company provides ironclad limited liability protection—ensuring that personal assets such as homes, savings, and investments of founders remain completely insulated from commercial liabilities and business debts. This corporate vehicle is the quintessential choice for high-growth tech startups, manufacturing units, and service businesses aiming to build scalable operations, hire elite talent through ESOPs, and raise equity capital from angel investors and venture capital firms.
              </p>
              <p>
                At <strong>akshayb2bsolutions</strong>, we simplify the entire incorporation lifecycle into an effortless, paperless digital experience. Our seasoned panel of Senior Chartered Accountants, Company Secretaries, and Corporate Advocates handle every statutory requirement end-to-end: from generating Class-3 Digital Signature Certificates (DSC) and Director Identification Numbers (DIN), securing RUN name approvals, drafting customized e-MOA and e-AOA charters, to filing SPICe+ Part B forms, obtaining MCA Certificate of Incorporation (COI), and acquiring corporate PAN, TAN, EPFO, ESIC, and zero-balance bank accounts. We ensure 100% compliance accuracy with zero physical visits or bureaucratic delays.
              </p>
            </div>
          </div>
        </section>

        {/* 7. "WHAT IS [ENTITY]?" SECTION */}
        <section id="what-is-pvt" className="py-14 bg-slate-50 border-b border-slate-200 scroll-mt-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-8">
              <span className="text-xs font-black uppercase tracking-wider text-[#0B3D91] bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                Definition &amp; Legal Character
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">
                What is a Private Limited Company?
              </h2>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-md space-y-6">
              <p className="text-base sm:text-lg font-bold text-[#0B3D91] leading-snug border-l-4 border-[#F5A623] pl-4">
                A Private Limited Company (Pvt Ltd) is a privately held corporate legal entity established under the Companies Act, 2013, characterized by limited liability, restricted share transfers, and perpetual succession.
              </p>

              <div className="space-y-3.5">
                {[
                  {
                    title: 'Governing Law & Legal Basis',
                    desc: 'Administered under the Companies Act, 2013 and Company Incorporation Rules by the Ministry of Corporate Affairs (MCA), Government of India.'
                  },
                  {
                    title: 'Limited Liability Protection',
                    desc: "Shareholders' financial liability is strictly restricted to the unpaid nominal value of shares subscribed; personal assets are legally sheltered."
                  },
                  {
                    title: 'Members & Directors Limits',
                    desc: 'Requires a minimum of 2 shareholders (up to 200) and a minimum of 2 directors (up to 15), with at least one director being an Indian resident.'
                  },
                  {
                    title: 'Restricted Share Transfers',
                    desc: 'Shares cannot be freely traded or offered to the general public, preserving private management control within the founding group via the Articles of Association.'
                  },
                  {
                    title: 'Perpetual Succession',
                    desc: 'The corporate identity remains unaffected by the death, retirement, insolvency, or mental incapacity of any shareholder or director.'
                  },
                  {
                    title: 'Capital & Statutory Ease',
                    desc: 'No minimum paid-up capital mandate (authorized capital can start at ₹1,00,000 with ₹0 government MCA incorporation fee up to ₹15 Lakhs).'
                  },
                  {
                    title: 'Primary Use-Cases',
                    desc: 'Preferred structure for funded startups, software & IT ventures, export-import houses, manufacturing plants, and high-growth commercial enterprises.'
                  }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-sm text-slate-700">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-900">{item.title}: </strong>
                      <span>{item.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 8. KEY FEATURES SECTION */}
        <section id="key-features" className="py-14 bg-white border-b border-slate-200 scroll-mt-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-10">
              <span className="text-xs font-black uppercase tracking-wider text-[#0B3D91] bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                Core Architectural Pillars
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">
                Key Features of a Private Limited Company
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: '1. Separate Legal Identity & Corporate Veil',
                  desc: 'A Private Limited Company is an independent juristic person in the eyes of law, capable of owning property, incurring debt, suing, and being sued in its own corporate name, distinct from its founders.'
                },
                {
                  title: '2. Complete Limited Liability Shelter',
                  desc: 'The individual financial exposure of directors and shareholders is strictly capped at their uncalled share capital, protecting personal savings, property, and wealth from business insolvency.'
                },
                {
                  title: '3. Ownership, Shares & Flexible Equity Structuring',
                  desc: 'Capital is divided into equity or preference shares, allowing founders to issue Employee Stock Ownership Plans (ESOPs) to attract top talent and structure diverse voting rights.'
                },
                {
                  title: '4. High Market Credibility & VC Fundraising',
                  desc: 'Pvt Ltd companies enjoy superior trust among commercial banks, NBFCs, government agencies, and venture capital funds, making external equity funding and bank credit readily accessible.'
                },
                {
                  title: '5. Robust Statutory Governance & CA Advisory',
                  desc: 'Stringent compliance frameworks under MCA, including statutory audits, annual returns, and transparent board governance, guarantee long-term corporate standing and vendor confidence.'
                }
              ].map((feat, idx) => (
                <div
                  key={idx}
                  className={`p-6 rounded-2xl border border-slate-200 bg-slate-50 hover:bg-white hover:border-[#0B3D91] hover:shadow-lg transition-all ${
                    idx === 4 ? 'md:col-span-2' : ''
                  }`}
                >
                  <h4 className="text-base font-bold text-[#0B3D91] mb-2">{feat.title}</h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{feat.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 9. BENEFITS SECTION */}
        <section id="benefits" className="py-14 bg-slate-50 border-b border-slate-200 scroll-mt-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-8">
              <span className="text-xs font-black uppercase tracking-wider text-[#0B3D91] bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                Founder Advantages
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">
                Benefits of Incorporating a Private Limited Company
              </h2>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-md space-y-5">
              <p className="text-sm sm:text-base font-bold text-slate-900">
                Incorporate your enterprise as a Private Limited Company to unlock tremendous legal, operational, and fiscal advantages:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  {
                    label: 'Shielded Personal Wealth',
                    text: 'Your personal assets cannot be attached by creditors or courts in the event of corporate loss or commercial dispute.'
                  },
                  {
                    label: 'Distinct Corporate Personality',
                    text: 'Own registered trademarks, commercial real estate, motor vehicles, and bank accounts under the official company name.'
                  },
                  {
                    label: 'Seamless Equity Financing',
                    text: 'Easily issue equity shares to angel investors, venture capitalists, and private equity funds to raise growth capital.'
                  },
                  {
                    label: 'Unbroken Perpetual Existence',
                    text: 'The enterprise endures perpetually across generations, facilitating smooth inheritance, merger, or corporate sale.'
                  },
                  {
                    label: 'Global B2B & Vendor Trust',
                    text: 'MNCs, government departments, and institutional clients prefer awarding high-value contracts to registered Pvt Ltd entities.'
                  },
                  {
                    label: 'Startup India & Tax Incentives',
                    text: 'Eligible for 3-year Section 80-IAC tax holidays, angel tax exemptions, and fast-track 80% rebate on trademark/patent filings.'
                  }
                ].map((b, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-slate-50 border border-slate-100 flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-xs font-bold text-slate-900 block">{b.label}</strong>
                      <span className="text-xs text-slate-600 mt-0.5 block leading-relaxed">{b.text}</span>
                    </div>
                  </div>
                ))}
              </div>

              <p className="text-xs text-slate-500 italic pt-2 border-t border-slate-100">
                In summary, incorporating a Private Limited Company elevates your business from an informal proprietorship to a globally recognized, investor-grade corporate institution.
              </p>
            </div>
          </div>
        </section>

        {/* 10. ADVANTAGES vs DISADVANTAGES TABLE */}
        <section id="adv-disadv" className="py-14 bg-white border-b border-slate-200 scroll-mt-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-8">
              <span className="text-xs font-black uppercase tracking-wider text-[#0B3D91] bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                Objective Evaluation
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">
                Advantages vs Disadvantages of a Private Limited Company
              </h2>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-md">
              <table className="w-full text-left border-collapse text-xs sm:text-sm">
                <thead>
                  <tr className="bg-slate-900 text-white font-bold">
                    <th className="p-4 border-r border-slate-700 w-1/2 flex-1">
                      <div className="flex items-center gap-2 text-emerald-400">
                        <CheckCircle2 className="w-4 h-4" />
                        <span>Key Advantages</span>
                      </div>
                    </th>
                    <th className="p-4 w-1/2 flex-1">
                      <div className="flex items-center gap-2 text-amber-400">
                        <HelpCircle className="w-4 h-4" />
                        <span>Considerations &amp; Disadvantages</span>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 bg-white">
                  <tr className="hover:bg-slate-50">
                    <td className="p-4 border-r border-slate-200 align-top">
                      <strong className="text-slate-900 block mb-1">1. Absolute Limited Liability Protection</strong>
                      <span className="text-slate-600">Shareholder risk is strictly confined to unpaid share value; personal assets are 100% safeguarded.</span>
                    </td>
                    <td className="p-4 align-top">
                      <strong className="text-slate-900 block mb-1">1. Mandatory Statutory Compliances</strong>
                      <span className="text-slate-600">Requires annual audits by a practicing CA, filing Form AOC-4 and MGT-7, and holding quarterly board meetings.</span>
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="p-4 border-r border-slate-200 align-top">
                      <strong className="text-slate-900 block mb-1">2. Separate Juristic Legal Identity</strong>
                      <span className="text-slate-600">Can hold assets, sign contracts, and open banking facilities independently of the directors.</span>
                    </td>
                    <td className="p-4 align-top">
                      <strong className="text-slate-900 block mb-1">2. Prohibition on Public Share Offerings</strong>
                      <span className="text-slate-600">Cannot issue shares to the public or list on stock exchanges without converting to a Public Limited Company.</span>
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="p-4 border-r border-slate-200 align-top">
                      <strong className="text-slate-900 block mb-1">3. Supreme Investor &amp; Bank Credibility</strong>
                      <span className="text-slate-600">Eligible for Venture Capital, Angel investments, institutional debt, and government Startup India grants.</span>
                    </td>
                    <td className="p-4 align-top">
                      <strong className="text-slate-900 block mb-1">3. Higher Incorporation &amp; Maintenance Costs</strong>
                      <span className="text-slate-600">Initial registration and annual professional secretarial fees are higher compared to proprietorships.</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* 11. COMPARISON TABLE (vs other entity types) */}
        <section id="difference" className="py-14 bg-slate-50 border-b border-slate-200 scroll-mt-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-8">
              <span className="text-xs font-black uppercase tracking-wider text-[#0B3D91] bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                Entity Matrix
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">
                Comparative Analysis Across Entity Types
              </h2>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-md">
              <table className="w-full text-left border-collapse text-xs">
                <thead>
                  <tr className="bg-[#0B3D91] text-white font-bold">
                    <th className="p-3.5 border-r border-blue-800">Key Parameters</th>
                    <th className="p-3.5 border-r border-blue-800 bg-[#0D47A1] text-amber-300">
                      Private Limited (Pvt Ltd)
                    </th>
                    <th className="p-3.5 border-r border-blue-800">
                      LLP (Limited Liability Partnership)
                    </th>
                    <th className="p-3.5 border-r border-blue-800">
                      OPC (One Person Company)
                    </th>
                    <th className="p-3.5">
                      Sole Proprietorship
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 bg-white">
                  {[
                    {
                      param: '1. Legal Identity',
                      pvt: 'Separate Juristic Legal Entity',
                      llp: 'Separate Juristic Legal Entity',
                      opc: 'Separate Juristic Legal Entity',
                      prop: 'No Separate Identity (Linked to Owner)'
                    },
                    {
                      param: '2. Liability of Founders',
                      pvt: 'Limited to Unpaid Share Capital',
                      llp: 'Limited to Agreed Contribution',
                      opc: 'Limited to Share Subscription',
                      prop: 'Unlimited (Personal Assets at Risk)'
                    },
                    {
                      param: '3. Ownership & Control',
                      pvt: 'Min 2, Max 200 Shareholders',
                      llp: 'Min 2 Partners, No Upper Cap',
                      opc: '1 Shareholder + 1 Nominee',
                      prop: '1 Individual Owner'
                    },
                    {
                      param: '4. Annual Compliance',
                      pvt: 'Moderate-High (Audit + AOC-4/MGT-7)',
                      llp: 'Moderate (Form 8 & Form 11)',
                      opc: 'Low-Moderate (Simplified Audit)',
                      prop: 'Minimal (Only ITR-3/4)'
                    },
                    {
                      param: '5. VC & Angel Fundraising',
                      pvt: 'High (Preferred by all VCs/Angels)',
                      llp: 'Low (Equity cannot be issued)',
                      opc: 'Low (Limited to 1 shareholder)',
                      prop: 'None (Debt/Loans only)'
                    },
                    {
                      param: '6. Market Credibility',
                      pvt: 'Highest in Industry',
                      llp: 'High among Services',
                      opc: 'Moderate-High',
                      prop: 'Basic/Local'
                    },
                    {
                      param: '7. Best Suited For',
                      pvt: 'Scalable Startups & High Growth Firms',
                      llp: 'Professional Services & Consulting',
                      opc: 'Solo Entrepreneurs & Creators',
                      prop: 'Small Local Shops & Freelancers'
                    }
                  ].map((row, idx) => (
                    <tr key={idx} className={idx % 2 === 0 ? 'bg-slate-50' : 'bg-white'}>
                      <td className="p-3 font-bold text-slate-900 border-r border-slate-200">{row.param}</td>
                      <td className="p-3 font-semibold text-[#0B3D91] bg-blue-50/50 border-r border-slate-200">{row.pvt}</td>
                      <td className="p-3 text-slate-700 border-r border-slate-200">{row.llp}</td>
                      <td className="p-3 text-slate-700 border-r border-slate-200">{row.opc}</td>
                      <td className="p-3 text-slate-600">{row.prop}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* 12. DOCUMENTS REQUIRED TABLE */}
        <section id="documents" className="py-14 bg-white border-b border-slate-200 scroll-mt-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-8">
              <span className="text-xs font-black uppercase tracking-wider text-[#0B3D91] bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                Checklist
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">
                Documents Required for Private Limited Company Registration
              </h2>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-md">
              <table className="w-full text-left border-collapse text-xs sm:text-sm">
                <thead>
                  <tr className="bg-slate-900 text-white font-bold">
                    <th className="p-3.5 border-r border-slate-700 w-1/4">Document Type</th>
                    <th className="p-3.5 border-r border-slate-700 w-1/2">Details &amp; Accepted Examples</th>
                    <th className="p-3.5 w-1/4">Important Notes</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 bg-white">
                  {[
                    {
                      type: '1. Identity Proof',
                      details: 'PAN Card of all Indian Directors & Shareholders (Passport for Foreign Nationals).',
                      notes: 'Name and DOB must match across all documents.'
                    },
                    {
                      type: '2. Address Proof',
                      details: 'Voter ID, Driving License, or Passport OR Bank Statement / Electricity Bill (< 2 months old).',
                      notes: 'Must clearly show residential address and active transactions.'
                    },
                    {
                      type: '3. Photographs',
                      details: 'Passport size digital photographs of all proposed Directors.',
                      notes: 'Clear color photo with white background.'
                    },
                    {
                      type: '4. Registered Office Proof',
                      details: 'Electricity Bill / Water Bill / Gas Bill of the office premises (< 2 months old).',
                      notes: 'Can be commercial or residential owned/rented premises.'
                    },
                    {
                      type: '5. Landlord Consent',
                      details: 'NOC (No Objection Certificate) signed by the registered property owner + Rent Agreement / Sale Deed.',
                      notes: 'Format prepared and drafted by our CA team.'
                    },
                    {
                      type: '6. Proposed Company Info',
                      details: '2 to 3 unique proposed business names + brief description of main business activities.',
                      notes: 'Must not conflict with registered trademarks.'
                    },
                    {
                      type: '7. Legal Declarations',
                      details: 'Form INC-9 (Declaration by Directors) and DIR-2 (Consent to act as Director).',
                      notes: 'Auto-generated and electronically signed via DSC.'
                    }
                  ].map((doc, idx) => (
                    <tr key={idx} className="hover:bg-slate-50">
                      <td className="p-3.5 font-bold text-slate-900 border-r border-slate-200">{doc.type}</td>
                      <td className="p-3.5 text-slate-700 border-r border-slate-200">{doc.details}</td>
                      <td className="p-3.5 text-slate-500">{doc.notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* 13. STEP-BY-STEP REGISTRATION PROCESS */}
        <section id="steps" className="py-14 bg-slate-50 border-b border-slate-200 scroll-mt-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-10">
              <span className="text-xs font-black uppercase tracking-wider text-[#0B3D91] bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                Fast-Track Workflow
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">
                Step-by-Step Company Registration Process
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                Completed seamlessly in 4 to 5 working days through our AI-accelerated compliance platform.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                {
                  step: 'Step 01',
                  title: 'DSC & DIN Allocation',
                  desc: 'We procure Class-3 Digital Signature Certificates (DSC) with encryption tokens and apply for Director Identification Numbers (DIN) for all proposed directors.'
                },
                {
                  step: 'Step 02',
                  title: 'Name Reservation (RUN / SPICe+ Part A)',
                  desc: 'We conduct rigorous MCA and IP India Trademark conflict checks and submit your preferred company names for Central Registration Centre (CRC) approval.'
                },
                {
                  step: 'Step 03',
                  title: 'Drafting eMOA & eAOA Charters',
                  desc: 'Our Corporate Lawyers draft tailored electronic Memorandum of Association (eMOA) defining business objects and Articles of Association (eAOA) for internal governance.'
                },
                {
                  step: 'Step 04',
                  title: 'SPICe+ Part B & AGILE-PRO-S Filing',
                  desc: 'We submit the comprehensive statutory filing covering Company Incorporation, PAN, TAN, EPFO, ESIC, Professional Tax, and GST registration simultaneously.'
                },
                {
                  step: 'Step 05',
                  title: 'CRC Approval & COI Issuance',
                  desc: 'The Registrar of Companies (ROC) reviews the application and issues the digitally signed Certificate of Incorporation (COI) containing your Corporate Identity Number (CIN).'
                },
                {
                  step: 'Step 06',
                  title: 'Bank Account & INC-20A Commencement',
                  desc: 'We assist with opening your corporate current bank account, deposit of share capital, and submit Form INC-20A for Commencement of Business within 180 days.'
                }
              ].map((s, idx) => (
                <div
                  key={idx}
                  className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all space-y-2 relative overflow-hidden"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black text-[#F5A623] font-mono uppercase tracking-wider bg-amber-50 px-2.5 py-1 rounded-lg border border-amber-100">
                      {s.step}
                    </span>
                    <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 pt-1">{s.title}</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 14. MANDATORY COMPLIANCE TABLE */}
        <section id="compliances" className="py-14 bg-white border-b border-slate-200 scroll-mt-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-8">
              <span className="text-xs font-black uppercase tracking-wider text-[#0B3D91] bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                Post-Incorporation Calendar
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">
                Mandatory Annual Compliances for a Private Limited Company
              </h2>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-md">
              <table className="w-full text-left border-collapse text-xs sm:text-sm">
                <thead>
                  <tr className="bg-slate-900 text-white font-bold">
                    <th className="p-3.5 border-r border-slate-700 w-1/3">Compliance Requirement</th>
                    <th className="p-3.5 border-r border-slate-700 w-1/3">Statutory Form / Filing</th>
                    <th className="p-3.5 w-1/3">Statutory Due Date / Frequency</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 bg-white">
                  {[
                    {
                      req: '1. Appointment of First Statutory Auditor',
                      form: 'Form ADT-1',
                      date: 'Within 30 days of Incorporation'
                    },
                    {
                      req: '2. Declaration of Commencement of Business',
                      form: 'Form INC-20A',
                      date: 'Within 180 days of Incorporation'
                    },
                    {
                      req: '3. Annual Director KYC Verification',
                      form: 'Form DIR-3 KYC / Web KYC',
                      date: 'Annually on or before 30th September'
                    },
                    {
                      req: '4. Filing of Annual Financial Statements',
                      form: 'Form AOC-4 (with Balance Sheet & P&L)',
                      date: 'Within 30 days of Annual General Meeting (AGM)'
                    },
                    {
                      req: '5. Filing of Annual Return',
                      form: 'Form MGT-7 / MGT-7A',
                      date: 'Within 60 days of Annual General Meeting (AGM)'
                    },
                    {
                      req: '6. Conducting Board Meetings',
                      form: 'Board Minutes & Secretarial Records',
                      date: 'Minimum 4 meetings/year (1 per quarter)'
                    },
                    {
                      req: '7. Holding Annual General Meeting (AGM)',
                      form: 'Shareholder AGM Minutes',
                      date: 'Within 6 months from close of Financial Year'
                    },
                    {
                      req: '8. Corporate Income Tax Return (ITR)',
                      form: 'Form ITR-6 (with Tax Audit Report)',
                      date: 'Annually on or before 31st October'
                    }
                  ].map((c, idx) => (
                    <tr key={idx} className="hover:bg-slate-50">
                      <td className="p-3.5 font-bold text-slate-900 border-r border-slate-200">{c.req}</td>
                      <td className="p-3.5 text-[#0B3D91] font-semibold border-r border-slate-200">{c.form}</td>
                      <td className="p-3.5 text-slate-600">{c.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* 15. "WHY CHOOSE US" SECTION (Narrative) */}
        <section id="why-us" className="py-14 bg-slate-50 border-b border-slate-200 scroll-mt-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-6">
            <div className="text-center mb-8">
              <span className="text-xs font-black uppercase tracking-wider text-[#0B3D91] bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                The akshayb2bsolutions Advantage
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">
                Why Choose akshayb2bsolutions for Your Company Registration?
              </h2>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-md space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed">
              <p className="font-bold text-slate-900 text-sm sm:text-base">
                When you partner with akshayb2bsolutions, you gain more than an incorporation service—you secure a lifelong legal and compliance partner dedicated to your growth:
              </p>

              <div className="space-y-3">
                {[
                  {
                    title: 'Senior Chartered Accountant Leadership',
                    desc: 'Every filing is personally reviewed and supervised by seasoned Chartered Accountants, Company Secretaries, and Corporate Lawyers.'
                  },
                  {
                    title: 'Zero-Error AI Automation',
                    desc: 'Our proprietary digital validation algorithms cross-reference director KYC, MOA clauses, and MCA database requirements to eliminate resubmissions and rejections.'
                  },
                  {
                    title: 'All-Inclusive Transparent Pricing',
                    desc: 'We provide transparent packages with zero hidden fees, covering DSCs, DINs, government drafting, and stamp duty assistance.'
                  },
                  {
                    title: 'Turnkey Post-Incorporation Support',
                    desc: 'From zero-balance bank accounts to GST registration, MSME Udyam certificates, and trademark filings, we manage your complete enterprise launch.'
                  },
                  {
                    title: 'Automated 24/7 Compliance Vault & Reminders',
                    desc: 'Never miss an MCA or GST deadline with our automated SMS, WhatsApp, and email alerts, backed by our encrypted digital document storage.'
                  }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-900">{item.title}: </strong>
                      <span>{item.desc}</span>
                    </div>
                  </div>
                ))}
              </div>

              <p className="text-xs text-slate-500 italic pt-3 border-t border-slate-100">
                Join over 1,00,000 businesses that trust akshayb2bsolutions to build, manage, and scale their corporate ventures nationwide with unwavering confidence.
              </p>
            </div>
          </div>
        </section>

        {/* 16. SOCIAL SHARE ROW */}
        <section className="py-6 bg-white border-b border-slate-200">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs font-bold text-slate-700">
              <Share2 className="w-4 h-4 text-[#0B3D91]" />
              <span>Share this legal guide with founders:</span>
            </div>

            <div className="flex items-center gap-2">
              <a
                href="https://facebook.com/sharer/sharer.php?u=https://akshayb2bsolutions.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-blue-50 text-blue-700 hover:bg-blue-100 transition-colors"
                title="Share on Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com/intent/tweet?text=Register%20Private%20Limited%20Company%20in%204%20Days%20with%20akshayb2bsolutions"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-slate-100 text-slate-800 hover:bg-slate-200 transition-colors"
                title="Share on X"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="https://linkedin.com/shareArticle?mini=true&url=https://akshayb2bsolutions.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-blue-50 text-blue-800 hover:bg-blue-100 transition-colors"
                title="Share on LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://api.whatsapp.com/send?text=Register%20your%20Private%20Limited%20Company%20online%20with%20akshayb2bsolutions:%20https://akshayb2bsolutions.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-emerald-50 text-emerald-700 hover:bg-emerald-100 transition-colors"
                title="Share on WhatsApp"
              >
                <Send className="w-4 h-4" />
              </a>
              <a
                href="mailto:?subject=Private%20Limited%20Company%20Registration%20Services&body=Check%20out%20akshayb2bsolutions%20for%20fast-track%20Pvt%20Ltd%20incorporation."
                className="p-2 rounded-lg bg-red-50 text-red-700 hover:bg-red-100 transition-colors"
                title="Share via Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>
        </section>

        {/* 17. "WHY CHOOSE US" (Icon-Grid, Visual Variant) */}
        <section className="py-14 bg-slate-50 border-b border-slate-200">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-10">
              <span className="text-xs font-black uppercase tracking-wider text-[#0B3D91] bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                Service Benchmark
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">
                Built for Founders, Powered by Legal Experts
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: UserCheck,
                  title: 'Expert CA Guidance',
                  desc: 'Direct consultation and continuous statutory advisory from senior Chartered Accountants & corporate advocates.'
                },
                {
                  icon: Zap,
                  title: 'Time-Saving Process',
                  desc: 'Fast-track 4-5 working days turnaround powered by zero-error AI document formatting.'
                },
                {
                  icon: Tag,
                  title: 'Affordable & Transparent',
                  desc: 'Flat, transparent pricing packages with no hidden costs, consultation surcharges, or post-filing surprises.'
                },
                {
                  icon: Users,
                  title: 'Trusted by 1,00,000+',
                  desc: 'Over a decade of successful corporate incorporations across all 36 Indian states and Union Territories.'
                },
                {
                  icon: Clock,
                  title: 'Automated Compliance Alerts',
                  desc: 'Instant WhatsApp and SMS reminders for all ROC, GST, Income Tax, and annual AGM due dates.'
                },
                {
                  icon: Lock,
                  title: 'Bank-Grade Confidentiality',
                  desc: '256-bit encrypted digital legal vault safeguarding all director identity proofs and statutory filings.'
                }
              ].map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-lg transition-all space-y-3"
                  >
                    <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#0B3D91] border border-blue-100 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-[#F5A623]" />
                    </div>
                    <h4 className="text-base font-bold text-slate-900">{item.title}</h4>
                    <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* FAQ ACCORDION SECTION */}
        <section id="faqs" className="py-14 bg-white border-b border-slate-200 scroll-mt-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-10">
              <span className="text-xs font-black uppercase tracking-wider text-[#0B3D91] bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                Frequently Asked Questions
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">
                Got Questions About Private Limited Company Registration?
              </h2>
            </div>

            <div className="space-y-3">
              {FAQ_ITEMS.map((faq, idx) => {
                const isOpen = openFaqIndex === idx;
                return (
                  <div
                    key={idx}
                    className="border border-slate-200 rounded-2xl overflow-hidden shadow-xs transition-all"
                  >
                    <button
                      onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                      className="w-full p-4 sm:p-5 text-left bg-slate-50 hover:bg-slate-100 flex items-center justify-between gap-4 transition-colors cursor-pointer"
                    >
                      <span className="text-xs sm:text-sm font-bold text-slate-900">{faq.q}</span>
                      {isOpen ? (
                        <ChevronUp className="w-4 h-4 text-[#0B3D91] flex-shrink-0" />
                      ) : (
                        <ChevronDown className="w-4 h-4 text-slate-400 flex-shrink-0" />
                      )}
                    </button>
                    {isOpen && (
                      <div className="p-4 sm:p-5 bg-white text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 animate-in fade-in">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 18. CTA BANNER */}
        <section className="py-12 bg-gradient-to-r from-[#0B3D91] to-[#082a66] text-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="bg-white/10 border border-white/20 rounded-3xl p-6 sm:p-10 backdrop-blur-md flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="space-y-3 max-w-xl text-center md:text-left">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F5A623] text-[#0B3D91] text-xs font-black uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Free Initial Consultation</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
                  Launch Your Private Limited Company Today
                </h3>
                <p className="text-xs sm:text-sm text-blue-100">
                  Connect with our Senior CA &amp; CS advisory team. We evaluate your business name, verify documents, and file with MCA instantly.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-3 flex-shrink-0">
                <button
                  onClick={onOpenAppointment}
                  className="px-6 py-3.5 rounded-xl bg-[#F5A623] hover:bg-amber-400 text-[#0B3D91] font-extrabold text-xs sm:text-sm shadow-lg hover:shadow-xl transition-all cursor-pointer flex items-center gap-2"
                >
                  <span>Book Free Appointment</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <a
                  href={`tel:${COMPANY_DETAILS.phoneClean}`}
                  className="px-5 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs sm:text-sm border border-white/30 transition-all flex items-center gap-2 cursor-pointer"
                >
                  <Phone className="w-4 h-4 text-[#F5A623]" />
                  <span>Call {COMPANY_DETAILS.phone}</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* 19. RELATED PRODUCTS CAROUSEL */}
        <section className="py-14 bg-slate-50 border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="flex items-center justify-between mb-8">
              <div>
                <span className="text-xs font-black uppercase tracking-wider text-[#0B3D91] bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                  Explore More Filings
                </span>
                <h2 className="text-xl sm:text-3xl font-extrabold text-slate-900 mt-2">
                  Related Corporate &amp; Legal Services
                </h2>
              </div>
              <button
                onClick={onBackToHome}
                className="hidden sm:flex items-center gap-1.5 text-xs font-bold text-[#0B3D91] hover:underline cursor-pointer"
              >
                <span>View All 50+ Services</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {RELATED_SERVICES.map((item, idx) => (
                <div
                  key={idx}
                  onClick={() => onSelectService(item.title)}
                  className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-lg transition-all cursor-pointer group flex flex-col justify-between"
                >
                  <div>
                    <div className="h-36 overflow-hidden bg-slate-100 relative">
                      <img
                        src={item.img}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute top-2.5 right-2.5 bg-slate-900/80 backdrop-blur-xs text-amber-300 text-[10px] font-black px-2 py-0.5 rounded-full border border-white/20">
                        From {item.price}
                      </div>
                    </div>
                    <div className="p-4 space-y-1.5">
                      <h4 className="text-sm font-bold text-slate-900 group-hover:text-[#0B3D91] transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                  <div className="px-4 pb-4 pt-1 flex items-center justify-between border-t border-slate-100 mt-2 text-xs font-bold text-[#0B3D91]">
                    <span>Apply Online</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 20. APP DOWNLOAD BANNER */}
        <section className="py-12 bg-white border-b border-slate-200">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="bg-gradient-to-br from-slate-900 to-blue-950 text-white rounded-3xl p-6 sm:p-10 shadow-xl flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="space-y-3 text-center md:text-left max-w-lg">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-black uppercase tracking-wider border border-blue-400/30">
                  <Smartphone className="w-3.5 h-3.5 text-[#F5A623]" />
                  <span>Mobile Compliance Companion</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                  Download the akshayb2bsolutions App
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Track your Private Limited Company incorporation status, store digital DSCs, access statutory COI files, and receive live MCA due date reminders right on your smartphone.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-3">
                <a
                  href="https://play.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 bg-white hover:bg-slate-100 text-slate-900 px-5 py-3 rounded-2xl shadow-md transition-all"
                >
                  <svg className="w-6 h-6 text-emerald-600" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L18.66,16.19C19.5,16.68 19.5,17.47 18.66,17.96L15.11,20L14.4,12.71L16.81,15.12M14.4,11.28L15.11,4L18.66,6.04C19.5,6.53 19.5,7.32 18.66,7.81L16.81,8.88L14.4,11.28M4.7,2.85L13.69,11.84L14.4,12L13.69,12.16L4.7,21.15C4.6,21.05 4.54,20.91 4.54,20.73V3.27C4.54,3.09 4.6,2.95 4.7,2.85Z" />
                  </svg>
                  <div className="text-left">
                    <span className="text-[10px] uppercase font-bold text-slate-500 block leading-none">Get it on</span>
                    <span className="text-xs font-black text-slate-900 leading-tight">Google Play</span>
                  </div>
                </a>

                <button
                  onClick={onOpenAppointment}
                  className="px-5 py-3 rounded-2xl bg-amber-400 hover:bg-amber-300 text-[#0B3D91] font-black text-xs shadow-md transition-all cursor-pointer"
                >
                  Request SMS App Link
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* 21. FOOTER */}
      <Footer onSelectService={onSelectService} />

      {/* 22. LOGIN / SIGNUP MODAL */}
      <AuthModal
        isOpen={isAuthOpen}
        onClose={() => setIsAuthOpen(false)}
        initialTab={authTab}
      />

      {/* MOBILE STICKY BOTTOM "GET STARTED" CTA BAR */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 p-3 shadow-2xl flex items-center justify-between gap-3">
        <div>
          <span className="text-[10px] uppercase font-bold text-slate-500 block">Registration from</span>
          <span className="text-base font-black text-[#0B3D91] leading-none">₹1,999/-</span>
        </div>
        <div className="flex items-center gap-2">
          <a
            href={`tel:${COMPANY_DETAILS.phoneClean}`}
            className="p-2.5 rounded-xl bg-blue-50 text-[#0B3D91] border border-blue-200"
            title="Call Expert"
          >
            <Phone className="w-4 h-4" />
          </a>
          <button
            onClick={() => scrollToSection('lead-capture-widget')}
            className="px-5 py-2.5 rounded-xl bg-[#F5A623] hover:bg-amber-400 text-[#0B3D91] font-black text-xs shadow-md cursor-pointer flex items-center gap-1.5"
          >
            <span>Get Started</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
