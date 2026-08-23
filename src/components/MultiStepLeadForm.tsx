import React, { useState } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  CheckCircle2,
  ChevronRight,
  ChevronLeft,
  RefreshCw,
  Sparkles,
  ShieldCheck,
  Send,
  HelpCircle,
  X,
  Search,
  Loader2
} from 'lucide-react';
import {
  COMPANY_DETAILS,
  INDIAN_STATES_AND_UTS,
  BUSINESS_TYPES,
  BUSINESS_ACTIVITIES,
  ALL_SERVICES_LIST
} from '../data/servicesData';
import { LeadFormData } from '../types';
import { sendLeadEmail } from '../lib/emailService';

interface MultiStepLeadFormProps {
  initialService?: string;
  onSuccess: (lead: LeadFormData) => void;
}

export const MultiStepLeadForm: React.FC<MultiStepLeadFormProps> = ({
  initialService,
  onSuccess
}) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<LeadFormData>({
    state: '',
    businessType: '',
    businessActivity: '',
    servicesRequired: initialService ? [initialService] : [],
    fullName: '',
    phone: '',
    email: '',
    panNumber: '',
    notes: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [serviceSearch, setServiceSearch] = useState('');

  // Simple dynamic mathematical Captcha generator
  const [captchaNum1, setCaptchaNum1] = useState(7);
  const [captchaNum2, setCaptchaNum2] = useState(5);
  const [captchaInput, setCaptchaInput] = useState('');

  const reloadCaptcha = () => {
    setCaptchaNum1(Math.floor(Math.random() * 9) + 2);
    setCaptchaNum2(Math.floor(Math.random() * 8) + 1);
    setCaptchaInput('');
  };

  const validateStep = (step: number): boolean => {
    const newErrors: Record<string, string> = {};

    if (step === 1) {
      if (!formData.state) {
        newErrors.state = 'Please select your operating state or union territory.';
      }
    } else if (step === 2) {
      if (!formData.businessType) {
        newErrors.businessType = 'Please select your business entity type.';
      }
      if (!formData.businessActivity) {
        newErrors.businessActivity = 'Please select your primary business activity.';
      }
    } else if (step === 3) {
      if (formData.servicesRequired.length === 0) {
        newErrors.services = 'Please select at least one required service.';
      }
    } else if (step === 4) {
      if (!formData.fullName.trim()) {
        newErrors.fullName = 'Full Name is required.';
      }
      if (!formData.phone.trim() || !/^[6-9]\d{9}$/.test(formData.phone.replace(/[^0-9]/g, ''))) {
        newErrors.phone = 'Please enter a valid 10-digit Indian mobile number.';
      }
      if (!formData.email.trim() || !/^\S+@\S+\.\S+$/.test(formData.email)) {
        newErrors.email = 'Please enter a valid email address.';
      }
      if (formData.panNumber.trim() && !/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(formData.panNumber.toUpperCase())) {
        newErrors.panNumber = 'Invalid PAN format (Example: ABCDE1234F).';
      }
      if (parseInt(captchaInput) !== captchaNum1 + captchaNum2) {
        newErrors.captcha = 'Incorrect captcha solution. Please try again.';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCurrentStep((prev) => Math.min(prev + 1, 4));
    }
  };

  const handleBack = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  const handleToggleService = (service: string) => {
    setFormData((prev) => {
      const exists = prev.servicesRequired.includes(service);
      return {
        ...prev,
        servicesRequired: exists
          ? prev.servicesRequired.filter((s) => s !== service)
          : [...prev.servicesRequired, service]
      };
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validateStep(4)) {
      setIsSubmitting(true);
      // Dispatch email through EmailJS
      await sendLeadEmail({
        sourceForm: 'Home Consultation Wizard',
        fullName: formData.fullName,
        phone: formData.phone,
        email: formData.email,
        state: formData.state,
        businessType: formData.businessType,
        businessActivity: formData.businessActivity,
        servicesRequired: formData.servicesRequired,
        panNumber: formData.panNumber,
        notes: formData.notes
      });
      setIsSubmitting(false);
      onSuccess(formData);
    }
  };

  // Filter service suggestions
  const filteredServices = ALL_SERVICES_LIST.filter((s) =>
    s.toLowerCase().includes(serviceSearch.toLowerCase())
  );

  return (
    <section id="contact-consultation-section" className="py-16 sm:py-20 bg-white text-slate-900 relative border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Side: Contact Info Blocks */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-[#0B3D91] text-xs font-bold uppercase tracking-wider border border-blue-100">
              <Sparkles className="w-3.5 h-3.5 text-[#F5A623]" />
              <span>Get In Touch</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0B3D91] tracking-tight leading-tight">
              We&apos;re Here to Guide Your Legal Journey
            </h2>

            <p className="text-sm text-slate-600 leading-relaxed">
              Have questions about foreign direct investment, ROC compliance audits, or FSSAI state licensing? Contact our advisory desk or submit the consultation wizard on the right.
            </p>

            {/* Contact Details Grid */}
            <div className="space-y-4 pt-2">
              {/* Email */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-4 shadow-2xs">
                <div className="w-10 h-10 rounded-lg bg-blue-50 border border-blue-100 text-[#0B3D91] flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase text-slate-500">Email Address</h4>
                  <a
                    href={`mailto:${COMPANY_DETAILS.email}`}
                    className="text-sm font-semibold text-slate-900 hover:text-[#0B3D91] transition-colors"
                  >
                    {COMPANY_DETAILS.email}
                  </a>
                  <p className="text-[11px] text-slate-500 mt-0.5">Average reply time: under 15 minutes</p>
                </div>
              </div>

              {/* Phone */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-4 shadow-2xs">
                <div className="w-10 h-10 rounded-lg bg-blue-50 border border-blue-100 text-[#0B3D91] flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase text-slate-500">Direct Phone Line</h4>
                  <a
                    href={`tel:${COMPANY_DETAILS.phoneClean}`}
                    className="text-sm font-semibold text-[#0B3D91] hover:text-blue-900 transition-colors"
                  >
                    {COMPANY_DETAILS.phone}
                  </a>
                  <p className="text-[11px] text-slate-500 mt-0.5">Toll-free advisory for registered clients</p>
                </div>
              </div>

              {/* Address */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-4 shadow-2xs">
                <div className="w-10 h-10 rounded-lg bg-blue-50 border border-blue-100 text-[#0B3D91] flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase text-slate-500">Registered Office</h4>
                  <p className="text-xs font-semibold text-slate-800 leading-relaxed">
                    {COMPANY_DETAILS.address}
                  </p>
                  <p className="text-[11px] text-slate-500 mt-0.5">Kanpur Nagar, Uttar Pradesh, India</p>
                </div>
              </div>

              {/* Working Hours */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-4 shadow-2xs">
                <div className="w-10 h-10 rounded-lg bg-blue-50 border border-blue-100 text-[#0B3D91] flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase text-slate-500">Working Hours</h4>
                  <p className="text-xs font-semibold text-slate-800">
                    {COMPANY_DETAILS.workingHours}
                  </p>
                  <p className="text-[11px] text-slate-500 mt-0.5">Sunday: Closed (Emergency email support active)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Multi-Step Lead Form */}
          <div className="lg:col-span-7">
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-md relative">
              {/* Header */}
              <div className="flex items-center justify-between border-b border-slate-200 pb-4 mb-6">
                <div>
                  <h3 className="text-xl font-extrabold text-[#0B3D91]">Get Expert Consultation</h3>
                  <p className="text-xs text-slate-600">Fill in details for personalized statutory guidance</p>
                </div>
                <div className="text-right">
                  <span className="text-xs font-mono font-bold text-[#0B3D91]">
                    Step {currentStep} of 4
                  </span>
                  <p className="text-[10px] text-slate-500 uppercase font-semibold">
                    {currentStep === 1 && 'Location'}
                    {currentStep === 2 && 'Business Profile'}
                    {currentStep === 3 && 'Services'}
                    {currentStep === 4 && 'Contact & Submit'}
                  </p>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="w-full bg-slate-200 rounded-full h-1.5 mb-6">
                <div
                  className="bg-[#0B3D91] h-1.5 rounded-full transition-all duration-300"
                  style={{ width: `${(currentStep / 4) * 100}%` }}
                ></div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* STEP 1: Select State (All 36 Indian States/UTs) */}
                {currentStep === 1 && (
                  <div className="space-y-4 animate-in fade-in">
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                      Step 1: Select Your State / Union Territory *
                    </label>

                    <select
                      id="lead-select-state"
                      value={formData.state}
                      onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                      className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:border-[#0B3D91] focus:ring-1 focus:ring-[#0B3D91]"
                    >
                      <option value="">-- Choose State / UT --</option>
                      {INDIAN_STATES_AND_UTS.map((st) => (
                        <option key={st} value={st}>
                          {st}
                        </option>
                      ))}
                    </select>

                    {errors.state && (
                      <p className="text-xs text-red-600 font-medium">{errors.state}</p>
                    )}

                    <p className="text-xs text-slate-500">
                      We customize stamp duty calculations and state-specific licensing (Shop &amp; Establishment, Trade License, Professional Tax) based on your registered jurisdiction.
                    </p>
                  </div>
                )}

                {/* STEP 2: Business Type + Business Activity */}
                {currentStep === 2 && (
                  <div className="space-y-5 animate-in fade-in">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                        Step 2A: Select Business Entity Structure *
                      </label>
                      <select
                        id="lead-select-business-type"
                        value={formData.businessType}
                        onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
                        className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:border-[#0B3D91] focus:ring-1 focus:ring-[#0B3D91]"
                      >
                        <option value="">-- Choose Entity Type --</option>
                        {BUSINESS_TYPES.map((bt) => (
                          <option key={bt} value={bt}>
                            {bt}
                          </option>
                        ))}
                      </select>
                      {errors.businessType && (
                        <p className="text-xs text-red-600 font-medium mt-1">{errors.businessType}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                        Step 2B: Select Primary Business Activity *
                      </label>
                      <select
                        id="lead-select-business-activity"
                        value={formData.businessActivity}
                        onChange={(e) => setFormData({ ...formData, businessActivity: e.target.value })}
                        className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:border-[#0B3D91] focus:ring-1 focus:ring-[#0B3D91]"
                      >
                        <option value="">-- Choose Activity --</option>
                        {BUSINESS_ACTIVITIES.map((ba) => (
                          <option key={ba} value={ba}>
                            {ba}
                          </option>
                        ))}
                      </select>
                      {errors.businessActivity && (
                        <p className="text-xs text-red-600 font-medium mt-1">{errors.businessActivity}</p>
                      )}
                    </div>
                  </div>
                )}

                {/* STEP 3: Multi-Select Services Required (All ~80 services) */}
                {currentStep === 3 && (
                  <div className="space-y-4 animate-in fade-in">
                    <div className="flex items-center justify-between">
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                        Step 3: Select Required Services ({formData.servicesRequired.length} selected) *
                      </label>
                      {formData.servicesRequired.length > 0 && (
                        <button
                          type="button"
                          onClick={() => setFormData({ ...formData, servicesRequired: [] })}
                          className="text-[11px] text-[#0B3D91] font-bold hover:underline cursor-pointer"
                        >
                          Clear Selection
                        </button>
                      )}
                    </div>

                    {/* Search inside services */}
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="Search among 80+ compliance services..."
                        value={serviceSearch}
                        onChange={(e) => setServiceSearch(e.target.value)}
                        className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2 pl-9 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#0B3D91]"
                      />
                      <Search className="w-4 h-4 text-slate-400 absolute left-2.5 top-2.5" />
                    </div>

                    {errors.services && (
                      <p className="text-xs text-red-600 font-medium">{errors.services}</p>
                    )}

                    {/* Selected Chips */}
                    {formData.servicesRequired.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 max-h-20 overflow-y-auto p-2 bg-white rounded-lg border border-slate-200">
                        {formData.servicesRequired.map((srv) => (
                          <span
                            key={srv}
                            className="inline-flex items-center gap-1 text-[11px] font-semibold bg-blue-50 text-[#0B3D91] border border-blue-200 px-2 py-0.5 rounded-full"
                          >
                            <span>{srv}</span>
                            <button
                              type="button"
                              onClick={() => handleToggleService(srv)}
                              className="hover:text-blue-900 cursor-pointer"
                            >
                              <X className="w-3 h-3" />
                            </button>
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Services Checklist Grid */}
                    <div className="max-h-56 overflow-y-auto border border-slate-200 bg-white rounded-xl p-3 divide-y divide-slate-100 scrollbar-thin">
                      {filteredServices.slice(0, 40).map((srv, idx) => {
                        const isSelected = formData.servicesRequired.includes(srv);
                        return (
                          <label
                            key={idx}
                            className={`flex items-center justify-between py-2 px-2 rounded-lg cursor-pointer transition-colors text-xs ${
                              isSelected ? 'bg-blue-50 text-[#0B3D91] font-bold' : 'text-slate-700 hover:bg-slate-50'
                            }`}
                          >
                            <span>{srv}</span>
                            <input
                              type="checkbox"
                              checked={isSelected}
                              onChange={() => handleToggleService(srv)}
                              className="w-4 h-4 rounded text-[#0B3D91] focus:ring-[#0B3D91] bg-white border-slate-300"
                            />
                          </label>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* STEP 4: Name, Phone, Email, PAN, Captcha + Reload */}
                {currentStep === 4 && (
                  <div className="space-y-4 animate-in fade-in">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Name */}
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                          Full Name *
                        </label>
                        <input
                          id="lead-full-name"
                          type="text"
                          placeholder="e.g. Rajesh Sharma"
                          value={formData.fullName}
                          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                          className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2 text-sm text-slate-900 focus:outline-none focus:border-[#0B3D91]"
                        />
                        {errors.fullName && <p className="text-xs text-red-600 mt-1">{errors.fullName}</p>}
                      </div>

                      {/* Phone */}
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                          Mobile Number (+91) *
                        </label>
                        <input
                          id="lead-phone"
                          type="tel"
                          placeholder="10-digit mobile number"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2 text-sm text-slate-900 focus:outline-none focus:border-[#0B3D91]"
                        />
                        {errors.phone && <p className="text-xs text-red-600 mt-1">{errors.phone}</p>}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Email */}
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                          Email Address *
                        </label>
                        <input
                          id="lead-email"
                          type="email"
                          placeholder="name@company.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2 text-sm text-slate-900 focus:outline-none focus:border-[#0B3D91]"
                        />
                        {errors.email && <p className="text-xs text-red-600 mt-1">{errors.email}</p>}
                      </div>

                      {/* PAN Number */}
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                          PAN Number <span className="text-slate-500 font-normal">(Optional)</span>
                        </label>
                        <input
                          id="lead-pan"
                          type="text"
                          maxLength={10}
                          placeholder="ABCDE1234F"
                          value={formData.panNumber}
                          onChange={(e) => setFormData({ ...formData, panNumber: e.target.value.toUpperCase() })}
                          className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2 text-sm text-slate-900 font-mono uppercase focus:outline-none focus:border-[#0B3D91]"
                        />
                        {errors.panNumber && <p className="text-xs text-red-600 mt-1">{errors.panNumber}</p>}
                      </div>
                    </div>

                    {/* Captcha Box */}
                    <div className="p-3 bg-white border border-slate-300 rounded-xl flex items-center justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <div className="px-3 py-1.5 bg-blue-50 border border-blue-200 rounded text-[#0B3D91] font-mono font-bold text-sm tracking-wider">
                          {captchaNum1} + {captchaNum2} = ?
                        </div>
                        <button
                          type="button"
                          onClick={reloadCaptcha}
                          className="p-1.5 rounded text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition-colors cursor-pointer"
                          title="Reload Captcha"
                        >
                          <RefreshCw className="w-4 h-4" />
                        </button>
                      </div>

                      <div className="flex-1 max-w-[140px]">
                        <input
                          id="lead-captcha-input"
                          type="number"
                          placeholder="Answer"
                          value={captchaInput}
                          onChange={(e) => setCaptchaInput(e.target.value)}
                          className="w-full bg-white border border-slate-300 rounded px-2.5 py-1.5 text-xs text-slate-900 text-center font-bold focus:outline-none focus:border-[#0B3D91]"
                        />
                      </div>
                    </div>
                    {errors.captcha && <p className="text-xs text-red-600">{errors.captcha}</p>}

                    <div className="flex items-center gap-2 text-[11px] text-slate-500 pt-1 font-medium">
                      <ShieldCheck className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                      <span>We respect your privacy. No spam. 100% confidential statutory advisory.</span>
                    </div>
                  </div>
                )}

                {/* Form Buttons Navigation */}
                <div className="flex items-center justify-between pt-4 border-t border-slate-200">
                  {currentStep > 1 ? (
                    <button
                      type="button"
                      id="form-btn-back"
                      onClick={handleBack}
                      className="px-4 py-2.5 rounded-lg bg-white border border-slate-300 hover:bg-slate-100 text-slate-700 text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer"
                    >
                      <ChevronLeft className="w-4 h-4" />
                      <span>Back</span>
                    </button>
                  ) : (
                    <div></div>
                  )}

                  {currentStep < 4 ? (
                    <button
                      type="button"
                      id="form-btn-next"
                      onClick={handleNext}
                      className="px-6 py-2.5 rounded-lg bg-[#0B3D91] hover:bg-blue-900 text-white text-xs font-extrabold flex items-center gap-1.5 transition-all shadow-xs cursor-pointer"
                    >
                      <span>Continue</span>
                      <ChevronRight className="w-4 h-4 text-[#F5A623]" />
                    </button>
                  ) : (
                    <button
                      type="submit"
                      id="form-btn-submit"
                      disabled={isSubmitting}
                      className="px-6 py-3 rounded-lg bg-[#0B3D91] hover:bg-blue-900 disabled:opacity-70 text-white text-xs font-black uppercase tracking-wider flex items-center gap-2 transition-all shadow-md cursor-pointer"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 text-[#F5A623] animate-spin" />
                          <span>Sending Inquiry...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4 text-[#F5A623]" />
                          <span>Submit Consultation Request</span>
                        </>
                      )}
                    </button>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
