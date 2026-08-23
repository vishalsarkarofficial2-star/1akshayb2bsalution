import React, { useState } from 'react';
import {
  X,
  FileDown,
  Calendar,
  Clock,
  CheckCircle2,
  ShieldCheck,
  Building2,
  Lock,
  Mail,
  Phone,
  User,
  Sparkles,
  ArrowRight,
  ExternalLink
} from 'lucide-react';
import { ServiceItem, BlogPost, LeadFormData } from '../types';
import { COMPANY_DETAILS } from '../data/servicesData';
import { sendLeadEmail } from '../lib/emailService';

interface BrochureModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BrochureModal: React.FC<BrochureModalProps> = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [downloaded, setDownloaded] = useState(false);

  if (!isOpen) return null;

  const handleDownload = (e: React.FormEvent) => {
    e.preventDefault();
    setDownloaded(true);
    
    // Dispatch to EmailJS
    sendLeadEmail({
      sourceForm: 'Brochure Download Request',
      email,
      notes: 'User requested 2026 Corporate Service Directory PDF'
    });

    setTimeout(() => {
      // Simulate file download
      const element = document.createElement('a');
      const file = new Blob([
        `akshayb2bsolutions - Corporate Brochure 2026\n\nLegal Compliance, Registration & Filing Services.\nPhone: ${COMPANY_DETAILS.phone}\nEmail: ${COMPANY_DETAILS.email}\nAddress: ${COMPANY_DETAILS.address}\n\nServices Included:\n- Business Startup (Pvt Ltd, LLP, OPC, NGO)\n- Food Licensing (FSSAI)\n- Import Export (IEC, AD Code, DGFT)\n- Tax & Compliance (GST, ITR, TDS)\n- Trademark & IP Rights (TM, Copyright)\n- ISO Quality Standards (9001, 27001)`
      ], { type: 'text/plain' });
      element.href = URL.createObjectURL(file);
      element.download = 'akshayb2bsolutions_Brochure_2026.txt';
      document.body.appendChild(element);
      element.click();
      document.body.removeChild(element);
    }, 800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in">
      <div className="bg-white border border-slate-200 rounded-2xl max-w-md w-full p-6 shadow-2xl relative text-slate-900">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-700 p-1 rounded-lg hover:bg-slate-100 cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0B3D91] border border-blue-100 flex items-center justify-center">
            <FileDown className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-base font-bold text-slate-900">Download Company Brochure</h3>
            <p className="text-xs text-slate-500">Complete 2026 Statutory Guide &amp; Fee Sheet</p>
          </div>
        </div>

        {downloaded ? (
          <div className="text-center py-6 space-y-3 animate-in zoom-in">
            <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
            <h4 className="text-base font-bold text-slate-900">Brochure Download Initiated!</h4>
            <p className="text-xs text-slate-600">
              A copy of our comprehensive compliance directory has also been sent to your email.
            </p>
            <button
              onClick={onClose}
              className="mt-4 px-6 py-2 bg-[#0B3D91] text-white font-bold text-xs rounded-lg hover:bg-blue-900 cursor-pointer"
            >
              Close Window
            </button>
          </div>
        ) : (
          <form onSubmit={handleDownload} className="space-y-4">
            <p className="text-xs text-slate-600 leading-relaxed">
              Enter your work email to receive our high-resolution 32-page corporate prospectus detailing service workflows, government fees, and fast-track incorporation guidelines.
            </p>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Your Email Address *
              </label>
              <input
                type="email"
                required
                placeholder="name@business.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2 text-sm text-slate-900 focus:outline-none focus:border-[#0B3D91]"
              />
            </div>

            <button
              type="submit"
              className="w-full py-2.5 bg-[#0B3D91] hover:bg-blue-900 text-white font-bold text-xs rounded-lg shadow-md flex items-center justify-center gap-2 cursor-pointer"
            >
              <FileDown className="w-4 h-4 text-[#F5A623]" />
              <span>Download PDF Brochure (Instant)</span>
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AppointmentModal: React.FC<AppointmentModalProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');
  const [timeSlot, setTimeSlot] = useState('11:00 AM - 12:00 PM');
  const [topic, setTopic] = useState('Company Incorporation Advisory');
  const [booked, setBooked] = useState(false);

  if (!isOpen) return null;

  const handleBook = (e: React.FormEvent) => {
    e.preventDefault();
    setBooked(true);

    // Dispatch to EmailJS
    sendLeadEmail({
      sourceForm: '30-Min Strategy Call Modal',
      fullName: name,
      phone,
      date,
      timeSlot,
      topic,
      notes: `Appointment booked for ${date} at ${timeSlot} regarding ${topic}`
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in">
      <div className="bg-white border border-slate-200 rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative text-slate-900">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-700 p-1 rounded-lg hover:bg-slate-100 cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0B3D91] border border-blue-100 flex items-center justify-center">
            <Calendar className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-slate-900">Book Free 30-Min Strategy Call</h3>
            <p className="text-xs text-slate-500">One-on-one session with Senior CA / Advocate</p>
          </div>
        </div>

        {booked ? (
          <div className="text-center py-6 space-y-3 animate-in zoom-in">
            <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
            <h4 className="text-lg font-bold text-slate-900">Consultation Confirmed!</h4>
            <p className="text-xs text-slate-600">
              Your appointment on <strong className="text-[#0B3D91]">{date || 'Upcoming Business Day'}</strong> at <strong className="text-[#0B3D91]">{timeSlot}</strong> is scheduled.
            </p>
            <p className="text-[11px] text-slate-500">
              Our relationship desk will send the Google Meet / phone link to your contact details.
            </p>
            <button
              onClick={onClose}
              className="mt-4 px-6 py-2.5 bg-[#0B3D91] text-white font-bold text-xs rounded-lg hover:bg-blue-900 cursor-pointer"
            >
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={handleBook} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2 text-sm text-slate-900 focus:outline-none focus:border-[#0B3D91]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="10-digit mobile"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2 text-sm text-slate-900 focus:outline-none focus:border-[#0B3D91]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Preferred Date *
                </label>
                <input
                  type="date"
                  required
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2 text-sm text-slate-900 focus:outline-none focus:border-[#0B3D91]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Time Slot *
                </label>
                <select
                  value={timeSlot}
                  onChange={(e) => setTimeSlot(e.target.value)}
                  className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2 text-sm text-slate-900 focus:outline-none focus:border-[#0B3D91]"
                >
                  <option>10:30 AM - 11:30 AM</option>
                  <option>11:30 AM - 12:30 PM</option>
                  <option>02:00 PM - 03:00 PM</option>
                  <option>04:00 PM - 05:00 PM</option>
                  <option>05:30 PM - 06:30 PM</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Consultation Topic *
              </label>
              <select
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2 text-sm text-slate-900 focus:outline-none focus:border-[#0B3D91]"
              >
                <option>Company Incorporation Advisory (Pvt Ltd / LLP / OPC)</option>
                <option>FSSAI Food License &amp; Hygiene Standards</option>
                <option>Export / Import Licensing (DGFT IEC &amp; AD Code)</option>
                <option>GST Notice / Return Reconciliation</option>
                <option>Trademark Search &amp; IP Protection</option>
                <option>ISO 9001 / ISO 27001 Certification Strategy</option>
                <option>Overseas Company Formation (Dubai / USA)</option>
              </select>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-[#0B3D91] hover:bg-blue-900 text-white font-extrabold text-xs uppercase tracking-wider rounded-lg shadow-md transition-all cursor-pointer"
            >
              Confirm Strategy Appointment
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

interface ServiceDetailModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onApply: (serviceName: string) => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  onClose,
  onApply
}) => {
  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in">
      <div className="bg-white border border-slate-200 rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative text-slate-900 max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-700 p-1 rounded-lg hover:bg-slate-100 cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="space-y-2 mb-6">
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-blue-50 text-[#0B3D91] border border-blue-200">
              {service.category}
            </span>
            <span className="text-xs text-slate-500">• {service.subCategory}</span>
          </div>

          <h3 className="text-2xl font-extrabold text-[#0B3D91]">
            {service.name}
          </h3>

          <p className="text-xs text-slate-600 leading-relaxed">
            {service.fullDesc}
          </p>
        </div>

        {/* Specs Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200 mb-6">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
              Turnaround Time (TAT)
            </span>
            <p className="text-sm font-bold text-[#0B3D91] flex items-center gap-1.5 mt-0.5">
              <Clock className="w-4 h-4 text-[#F5A623]" />
              <span>{service.tat}</span>
            </p>
          </div>

          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
              Statutory Government Fee
            </span>
            <p className="text-sm font-bold text-slate-900 mt-0.5">
              {service.govtFee}
            </p>
          </div>
        </div>

        {/* Features Checklist */}
        <div className="space-y-3 mb-6">
          <h4 className="text-xs font-bold uppercase tracking-wider text-[#0B3D91]">
            Package Deliverables &amp; Inclusions
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {service.features.map((feat, idx) => (
              <div key={idx} className="flex items-center gap-2 text-xs text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>{feat}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Required Documents */}
        <div className="space-y-3 mb-6">
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
            Documents Required for Application
          </h4>
          <ul className="list-disc list-inside space-y-1 text-xs text-slate-600 pl-1">
            {service.docsRequired.map((doc, idx) => (
              <li key={idx}>{doc}</li>
            ))}
          </ul>
        </div>

        {/* Action Footer */}
        <div className="pt-4 border-t border-slate-200 flex items-center justify-between gap-4">
          <button
            onClick={onClose}
            className="px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold rounded-lg cursor-pointer"
          >
            Close Details
          </button>

          <button
            onClick={() => {
              onClose();
              onApply(service.name);
            }}
            className="px-6 py-2.5 bg-[#0B3D91] hover:bg-blue-900 text-white font-extrabold text-xs uppercase tracking-wider rounded-lg shadow-md flex items-center gap-2 cursor-pointer"
          >
            <span>Proceed to Registration</span>
            <ArrowRight className="w-4 h-4 text-[#F5A623]" />
          </button>
        </div>
      </div>
    </div>
  );
};

interface BlogArticleModalProps {
  article: BlogPost | null;
  onClose: () => void;
}

export const BlogArticleModal: React.FC<BlogArticleModalProps> = ({ article, onClose }) => {
  if (!article) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in">
      <div className="bg-white border border-slate-200 rounded-2xl max-w-3xl w-full p-6 sm:p-8 shadow-2xl relative text-slate-900 max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-700 p-1 rounded-lg hover:bg-slate-100 cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="relative h-60 rounded-xl overflow-hidden mb-6">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
          <div className="absolute bottom-4 left-4">
            <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 bg-amber-400 text-slate-950 rounded-full font-bold shadow-xs">
              {article.category}
            </span>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between text-xs text-slate-500 border-b border-slate-100 pb-3">
            <div>
              <span className="font-bold text-slate-900">{article.author}</span>
              <span className="text-slate-500"> ({article.authorRole})</span>
            </div>
            <div>
              <span>{article.publishDate} • {article.readTime}</span>
            </div>
          </div>

          <h2 className="text-2xl font-extrabold text-[#0B3D91] leading-tight">
            {article.title}
          </h2>

          <div className="space-y-3 text-sm text-slate-700 leading-relaxed">
            {article.content.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}
          </div>

          {/* Tags */}
          <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center gap-2">
            <span className="text-xs text-slate-500 font-semibold">Tags:</span>
            {article.tags.map((tag) => (
              <span key={tag} className="text-xs bg-slate-50 text-[#0B3D91] font-semibold px-2.5 py-1 rounded-lg border border-slate-200">
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

interface SuccessModalProps {
  lead: LeadFormData | null;
  onClose: () => void;
}

export const SuccessModal: React.FC<SuccessModalProps> = ({ lead, onClose }) => {
  if (!lead) return null;

  const refCode = `AKB-${Math.floor(100000 + Math.random() * 900000)}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in">
      <div className="bg-white border border-slate-200 rounded-2xl max-w-md w-full p-6 sm:p-8 shadow-2xl relative text-slate-900 text-center space-y-4">
        <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-10 h-10" />
        </div>

        <h3 className="text-xl font-extrabold text-[#0B3D91]">
          Consultation Request Registered!
        </h3>

        <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl space-y-1">
          <span className="text-[10px] uppercase font-bold text-slate-500">Application Reference ID:</span>
          <p className="text-lg font-mono font-bold text-[#0B3D91]">{refCode}</p>
        </div>

        <p className="text-xs text-slate-600 leading-relaxed">
          Thank you, <strong className="text-slate-900">{lead.fullName}</strong>. An authorized legal executive from {COMPANY_DETAILS.name} has been assigned to your profile in <strong className="text-[#0B3D91]">{lead.state}</strong>.
        </p>

        <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg text-left text-xs text-slate-700 space-y-1">
          <p><strong>Phone:</strong> {lead.phone}</p>
          <p><strong>Email:</strong> {lead.email}</p>
          <p><strong>Services:</strong> {lead.servicesRequired.join(', ')}</p>
        </div>

        <button
          onClick={onClose}
          className="w-full py-3 bg-[#0B3D91] hover:bg-blue-900 text-white font-bold text-xs uppercase tracking-wider rounded-lg shadow-md cursor-pointer"
        >
          Return to Website
        </button>
      </div>
    </div>
  );
};
