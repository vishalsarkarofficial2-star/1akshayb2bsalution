import React, { useState } from 'react';
import {
  Building2,
  Users,
  User,
  UserCheck,
  Handshake,
  HeartHandshake,
  Utensils,
  ChefHat,
  Globe2,
  Anchor,
  FileSpreadsheet,
  Receipt,
  ShieldCheck,
  Gavel,
  Award,
  CheckCircle2,
  Lock,
  ShoppingBag,
  Rocket,
  Landmark,
  PlaneTakeoff,
  Building,
  Sparkles,
  ShieldAlert,
  Recycle,
  FileCheck,
  Calculator,
  Search,
  ArrowRight,
  Clock,
  Check,
  Eye,
  Filter
} from 'lucide-react';
import { DETAILED_SERVICES, SERVICE_CATEGORIES } from '../data/servicesData';
import { ServiceItem } from '../types';

interface ServicesShowcaseProps {
  onSelectServiceDetail?: (service: ServiceItem) => void;
  onSelectService?: (service: ServiceItem) => void;
  onApplyForService?: (serviceName: string) => void;
  onApplyService?: (serviceName: string) => void;
}

// Icon mapper for dynamic icon rendering
const iconMap: Record<string, React.ElementType> = {
  Building2,
  Users,
  User,
  UserCheck,
  Handshake,
  HeartHandshake,
  Utensils,
  ChefHat,
  Globe2,
  Anchor,
  FileSpreadsheet,
  Receipt,
  ShieldCheck,
  Gavel,
  Award,
  CheckCircle2,
  Lock,
  ShoppingBag,
  Rocket,
  Landmark,
  PlaneTakeoff,
  Building,
  Sparkles,
  ShieldAlert,
  Recycle,
  FileCheck,
  Calculator
};

export const ServicesShowcase: React.FC<ServicesShowcaseProps> = ({
  onSelectServiceDetail,
  onSelectService,
  onApplyForService,
  onApplyService
}) => {
  const handleSelect = (service: ServiceItem) => {
    if (onSelectService) onSelectService(service);
    if (onSelectServiceDetail) onSelectServiceDetail(service);
  };

  const handleApply = (serviceName: string) => {
    if (onApplyService) onApplyService(serviceName);
    if (onApplyForService) onApplyForService(serviceName);
  };

  const [activeCategory, setActiveCategory] = useState('All Services');
  const [searchTerm, setSearchTerm] = useState('');

  // Filter services by category and search
  const filteredServices = DETAILED_SERVICES.filter((service) => {
    const matchesCategory =
      activeCategory === 'All Services' ||
      service.category === activeCategory ||
      service.subCategory === activeCategory;

    const matchesSearch =
      service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.shortDesc.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.features.some(f => f.toLowerCase().includes(searchTerm.toLowerCase()));

    return matchesCategory && matchesSearch;
  });

  return (
    <section id="our-services-section" className="py-16 sm:py-20 bg-white text-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-6 border-b border-slate-200 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-[#0B3D91] text-xs font-bold uppercase tracking-wider mb-2 border border-blue-100">
              <Sparkles className="w-3.5 h-3.5 text-[#F5A623]" />
              <span>Full Compliance Spectrum</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0B3D91] tracking-tight">
              Our Comprehensive Services
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-1 max-w-2xl">
              End-to-end company incorporation, mandatory licensing, tax return filings, and IP rights protection with guaranteed fast turnaround times.
            </p>
          </div>

          {/* Quick Search */}
          <div className="relative w-full md:w-72">
            <input
              id="services-filter-search"
              type="text"
              placeholder="Filter 30+ services..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 pl-9 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#0B3D91] focus:ring-1 focus:ring-[#0B3D91]"
            />
            <Search className="w-4 h-4 text-slate-400 absolute left-2.5 top-2.5" />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="text-slate-400 hover:text-slate-700 text-xs absolute right-2.5 top-2.5"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Main 2-Column Layout: Left Vertical Sidebar Filter + Right Tabbed Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Vertical Sidebar (Desktop) */}
          <div className="hidden lg:block lg:col-span-3 space-y-2">
            <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl sticky top-28 shadow-xs">
              <div className="flex items-center gap-2 px-2 py-2 mb-2 text-xs font-bold uppercase tracking-wider text-[#0B3D91] border-b border-slate-200">
                <Filter className="w-3.5 h-3.5 text-[#F5A623]" />
                <span>Categories</span>
              </div>
              <div className="space-y-1">
                {SERVICE_CATEGORIES.map((cat) => {
                  const isActive = activeCategory === cat;
                  const count =
                    cat === 'All Services'
                      ? DETAILED_SERVICES.length
                      : DETAILED_SERVICES.filter(
                          (s) => s.category === cat || s.subCategory === cat
                        ).length;

                  return (
                    <button
                      key={cat}
                      id={`sidebar-cat-${cat.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                      onClick={() => setActiveCategory(cat)}
                      className={`w-full text-left px-3 py-2 rounded-lg text-xs font-bold flex items-center justify-between transition-all cursor-pointer ${
                        isActive
                          ? 'bg-[#0B3D91] text-white shadow-sm'
                          : 'text-slate-700 hover:bg-slate-100 hover:text-[#0B3D91]'
                      }`}
                    >
                      <span className="truncate">{cat}</span>
                      <span
                        className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                          isActive
                            ? 'bg-white/20 text-white font-extrabold'
                            : 'bg-slate-200 text-slate-600'
                        }`}
                      >
                        {count}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Main Grid Section */}
          <div className="lg:col-span-9 space-y-6">
            {/* Horizontal Filter Tabs (Responsive for mobile & quick desktop switching) */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-thin">
              {SERVICE_CATEGORIES.map((cat) => {
                const isActive = activeCategory === cat;
                return (
                  <button
                    key={cat}
                    id={`tab-cat-${cat.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition-all cursor-pointer border ${
                      isActive
                        ? 'bg-[#0B3D91] text-white border-[#0B3D91] shadow-xs'
                        : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300 hover:text-[#0B3D91]'
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>

            {/* Service Cards Responsive Grid */}
            {filteredServices.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
                {filteredServices.map((service) => {
                  const Icon = iconMap[service.iconName] || Building2;
                  return (
                    <div
                      key={service.id}
                      id={`service-card-${service.id}`}
                      className="group bg-white border border-slate-200 hover:border-[#0B3D91] rounded-xl p-5 flex flex-col justify-between transition-all duration-300 hover:shadow-md hover:-translate-y-1 relative overflow-hidden"
                    >
                      {/* Top Accent & Badges */}
                      <div className="flex items-start justify-between gap-2 mb-3">
                        <div className="w-10 h-10 rounded-lg bg-blue-50 group-hover:bg-[#0B3D91] border border-blue-100 flex items-center justify-center text-[#0B3D91] group-hover:text-[#F5A623] group-hover:scale-105 transition-all">
                          <Icon className="w-5 h-5" />
                        </div>
                        {service.badge && (
                          <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-amber-50 text-amber-800 border border-amber-200">
                            {service.badge}
                          </span>
                        )}
                      </div>

                      {/* Content */}
                      <div className="space-y-2 flex-1">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block">
                          {service.category}
                        </span>
                        <h3 className="text-base font-bold text-slate-900 group-hover:text-[#0B3D91] transition-colors line-clamp-1">
                          {service.name}
                        </h3>
                        <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                          {service.shortDesc}
                        </p>

                        {/* Turnaround Time & Govt Fee Indicator */}
                        <div className="pt-2 flex items-center justify-between text-[11px] text-slate-500 border-t border-slate-100">
                          <span className="flex items-center gap-1 font-medium">
                            <Clock className="w-3.5 h-3.5 text-[#0B3D91]" />
                            <span>{service.tat}</span>
                          </span>
                          <span className="text-slate-700 font-bold truncate max-w-[130px]">
                            {service.govtFee}
                          </span>
                        </div>

                        {/* Key Features Preview */}
                        <div className="pt-1 space-y-1">
                          {service.features.slice(0, 2).map((feat, fIdx) => (
                            <div key={fIdx} className="flex items-center gap-1.5 text-[11px] text-slate-600">
                              <Check className="w-3 h-3 text-emerald-600 flex-shrink-0" />
                              <span className="truncate">{feat}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Actions: View More & Apply Now */}
                      <div className="pt-4 mt-4 border-t border-slate-100 flex items-center gap-2">
                        <button
                          id={`service-view-btn-${service.id}`}
                          onClick={() => handleSelect(service)}
                          className="flex-1 py-2 px-3 rounded-lg bg-slate-50 hover:bg-slate-100 text-slate-700 hover:text-[#0B3D91] text-xs font-bold border border-slate-200 flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                        >
                          <Eye className="w-3.5 h-3.5 text-[#0B3D91]" />
                          <span>View More</span>
                        </button>
                        <button
                          id={`service-apply-btn-${service.id}`}
                          onClick={() => handleApply(service.name)}
                          className="py-2 px-3 rounded-lg bg-[#0B3D91] hover:bg-blue-900 text-white text-xs font-bold flex items-center justify-center gap-1 transition-colors shadow-xs cursor-pointer"
                        >
                          <span>Apply</span>
                          <ArrowRight className="w-3 h-3 text-[#F5A623]" />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="p-12 text-center bg-slate-50 border border-slate-200 rounded-xl">
                <Search className="w-8 h-8 text-slate-400 mx-auto mb-2" />
                <h4 className="text-base font-bold text-slate-900">No services found</h4>
                <p className="text-xs text-slate-500 mt-1">Try clearing your search query or selecting a different category.</p>
                <button
                  onClick={() => {
                    setActiveCategory('All Services');
                    setSearchTerm('');
                  }}
                  className="mt-4 px-4 py-2 bg-[#0B3D91] text-white text-xs font-bold rounded-lg shadow-sm"
                >
                  Reset Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
