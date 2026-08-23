import { DueDateItem, ReviewItem, SpecialOfferItem, UpdateAlertItem } from '../types';

export const SPECIAL_OFFERS: SpecialOfferItem[] = [
  {
    id: 'offer-startup-combo',
    title: 'Super Startup Incorporation Combo',
    code: 'STARTUP2026',
    discount: 'Flat ₹3,000 OFF',
    description: 'Complete Pvt Ltd Incorporation + GST Registration + MSME Udyam + 2 Class 3 DSCs with zero Govt fee package.',
    validity: 'Valid till month end',
    servicesIncluded: ['Private Limited Company', 'GST Registration', 'MSME Registration', '2 Digital Signatures'],
    badge: 'Best Seller'
  },
  {
    id: 'offer-export-booster',
    title: 'Global Exporter Fast-Track Bundle',
    code: 'EXPORTBOOST',
    discount: '25% OFF Combo',
    description: 'Instant DGFT IEC Code + AD Code Bank registration + RCMC council filing assistance.',
    validity: 'Limited Time Offer',
    servicesIncluded: ['IEC Registration', 'AD Code Registration', 'RCMC Registration'],
    badge: 'DGFT Special'
  },
  {
    id: 'offer-ip-shield',
    title: 'Brand Protection TM + Copyright Shield',
    code: 'IPSHIELD50',
    discount: 'Save up to 50%',
    description: 'Trademark Search & Filing with 50% MSME rebate support + Custom Logo Copyright registration.',
    validity: 'Only for MSME Entities',
    servicesIncluded: ['Trademark Registration', 'Copyright Registration', 'Free Search Report'],
    badge: 'Exclusive'
  }
];

export const UPDATES_AND_ALERTS: UpdateAlertItem[] = [
  {
    id: 'up-1',
    title: 'Import Export Code (IEC) Annual Renewal Notice',
    date: 'August 18, 2026',
    category: 'DGFT Advisory',
    description: 'Mandatory annual updating of IEC details on the DGFT portal between April and June every financial year to prevent IEC deactivation.',
    urgent: true
  },
  {
    id: 'up-2',
    title: 'MCA V3 Portal: Mandatory Web-Form SPICe+ Updates',
    date: 'August 14, 2026',
    category: 'MCA Notification',
    description: 'Ministry of Corporate Affairs enforces refreshed biometric authentication for newly added resident directors in SPICe+ Part B.',
    urgent: false
  },
  {
    id: 'up-3',
    title: 'GST E-Invoicing Threshold Compliance Advisory',
    date: 'August 10, 2026',
    category: 'GST Advisory',
    description: 'All B2B transactions for registered taxpayers exceeding ₹5 Crore aggregate turnover require real-time IRP clearance before billing.',
    urgent: true
  },
  {
    id: 'up-4',
    title: 'Section 43B(h) MSME 45-Day Payment Rule Enforced',
    date: 'August 06, 2026',
    category: 'Income Tax',
    description: 'Buyers must clear dues of registered Micro & Small Enterprises within 45 days (or agreed 15 days) to claim expenditure deduction.',
    urgent: true
  },
  {
    id: 'up-5',
    title: 'FSSAI FoSCoS Portal Introduces Automated Hygiene Rating',
    date: 'August 01, 2026',
    category: 'Food Safety',
    description: 'Mandatory QR code display of 14-digit FSSAI number on primary food packaging and restaurant invoices across India.',
    urgent: false
  },
  {
    id: 'up-6',
    title: 'Trademark Class 35 & 42 Online Filing Accelerated',
    date: 'July 28, 2026',
    category: 'IP India',
    description: 'Controller General of Patents, Designs and Trademarks rolls out AI-assisted automated examination report queue.',
    urgent: false
  },
  {
    id: 'up-7',
    title: 'CPCB E-Waste & Plastic Packaging Target Submission',
    date: 'July 22, 2026',
    category: 'Environment / EPR',
    description: 'Producers, Importers, and Brand Owners (PIBOs) must submit audited EPR recycling certificates on CPCB portal.',
    urgent: true
  },
  {
    id: 'up-8',
    title: 'GeM Portal: Mandatory Q3 Vendor Assessment Uploads',
    date: 'July 15, 2026',
    category: 'Public Procurement',
    description: 'Government e-Marketplace sellers with OEM catalog listings must update BIS & ISO certificates before upcoming central tenders.',
    urgent: false
  },
  {
    id: 'up-9',
    title: 'POSH Act Internal Committee (IC) Annual Return Filing',
    date: 'July 08, 2026',
    category: 'Labour Compliance',
    description: 'Establishments with 10+ employees are advised to review annual complaints disposal reports with the District Officer.',
    urgent: false
  },
  {
    id: 'up-10',
    title: 'RBI Liberalised Remittance Scheme (LRS) Overseas Setup',
    date: 'July 01, 2026',
    category: 'FDI & Foreign Law',
    description: 'Updated Overseas Direct Investment (ODI) automated reporting guidelines for Indian founders establishing Dubai or US subsidiaries.',
    urgent: false
  }
];

export const DUE_DATES_LIST: DueDateItem[] = [
  {
    id: 'due-1',
    title: 'GSTR-3B Monthly Return Filing (July 2026)',
    dueDate: '20th August 2026',
    frequency: 'Monthly',
    category: 'GST Compliance',
    description: 'Summary return of inward and outward supplies with input tax credit settlement for regular taxpayers.',
    isUrgent: true
  },
  {
    id: 'due-2',
    title: 'TDS / TCS Deposit Challan (ITNS 281)',
    dueDate: '7th September 2026',
    frequency: 'Monthly',
    category: 'Direct Tax',
    description: 'Deposit of Tax Deducted at Source for the previous month under sections 194C, 194J, 194I, etc.',
    isUrgent: false
  },
  {
    id: 'due-3',
    title: 'GSTR-1 Monthly Return (August 2026)',
    dueDate: '11th September 2026',
    frequency: 'Monthly',
    category: 'GST Compliance',
    description: 'Filing of outward supplies details of goods and services by normal registered taxpayers.',
    isUrgent: false
  },
  {
    id: 'due-4',
    title: 'Advance Tax 2nd Installment (FY 2026-27)',
    dueDate: '15th September 2026',
    frequency: 'Quarterly',
    category: 'Income Tax',
    description: 'Payment of 45% of total estimated income tax liability for corporate and non-corporate entities.',
    isUrgent: true
  },
  {
    id: 'due-5',
    title: 'ROC Annual Filing - Form DIR-3 KYC',
    dueDate: '30th September 2026',
    frequency: 'Annual',
    category: 'MCA Compliance',
    description: 'Mandatory annual KYC verification for all active Director Identification Number (DIN) holders to avoid ₹5,000 penalty.',
    isUrgent: true
  },
  {
    id: 'due-6',
    title: 'Income Tax Return (Non-Audit Cases)',
    dueDate: '31st July / Extended Window',
    frequency: 'Annual',
    category: 'Income Tax',
    description: 'Filing of ITR-1, ITR-2, ITR-3, and ITR-4 for individuals, HUFs, and un-audited businesses.',
    isUrgent: false
  },
  {
    id: 'due-7',
    title: 'Tax Audit Report (Form 3CA / 3CB & 3CD)',
    dueDate: '30th September 2026',
    frequency: 'Annual',
    category: 'Statutory Audit',
    description: 'Submission of statutory tax audit report by Chartered Accountant for business turnover exceeding ₹10 Crore (cash < 5%).',
    isUrgent: true
  },
  {
    id: 'due-8',
    title: 'MCA Form AOC-4 (Financial Statements Filing)',
    dueDate: '29th October 2026',
    frequency: 'Annual',
    category: 'MCA ROC Filing',
    description: 'Filing of audited balance sheet, profit & loss statement, and directors report within 30 days of AGM.',
    isUrgent: false
  }
];

export const STATS_DATA = [
  {
    id: 'stat-customers',
    value: 100000,
    prefix: '',
    suffix: '+',
    label: 'Happy Customers',
    description: 'Entrepreneurs, startups & global enterprises'
  },
  {
    id: 'stat-certificates',
    value: 250000,
    prefix: '',
    suffix: '+',
    label: 'Certificates Issued',
    description: 'Incorporations, licenses, GSTINs & trademarks'
  },
  {
    id: 'stat-services',
    value: 150,
    prefix: '',
    suffix: '+',
    label: 'Service Delivering',
    description: 'Comprehensive 360° compliance catalogue'
  },
  {
    id: 'stat-countries',
    value: 45,
    prefix: '',
    suffix: '+',
    label: 'Countries Served',
    description: 'Cross-border incorporation & trade support'
  }
];

export const REVIEWS_DATA: ReviewItem[] = [
  {
    id: 'rev-1',
    name: 'Vikramaditya Sharma',
    company: 'Apex Logistics & Freight India Pvt Ltd',
    city: 'Kanpur, UP',
    rating: 5,
    date: '2 weeks ago',
    text: 'akshayb2bsolutions completed our Private Limited incorporation and IEC within 4 days! Outstanding clarity and zero running around government offices. Their AI tracker kept us updated at every step.',
    platform: 'Google',
    serviceUsed: 'Pvt Ltd + IEC + GST Combo'
  },
  {
    id: 'rev-2',
    name: 'Pooja Agarwal',
    company: 'Saffron Greens Organic Kitchen',
    city: 'Lucknow, UP',
    rating: 5,
    date: '1 month ago',
    text: 'Our FSSAI Central License and Trademark registration were handled with total professionalism. Their team answered our queries even late in the evening. Truly the best compliance team in Uttar Pradesh!',
    platform: 'Trustpilot',
    serviceUsed: 'FSSAI License & TM Filing'
  },
  {
    id: 'rev-3',
    name: 'Rajesh Nair',
    company: 'NextGen Cloud Dynamics LLP',
    city: 'Bengaluru, Karnataka',
    rating: 5,
    date: '3 weeks ago',
    text: 'Seamless experience registering our Delaware LLC and Indian subsidiary. The digital KYC and CA consultations were top notch. Transparent pricing with no hidden charges whatsoever.',
    platform: 'AmbitionBox',
    serviceUsed: 'International Incorporation & ISO 27001'
  },
  {
    id: 'rev-4',
    name: 'Amitabh Sen',
    company: 'Eastern Crafts & Weaves Exporters',
    city: 'Kolkata, West Bengal',
    rating: 5,
    date: '1 month ago',
    text: 'We got our DGFT RCMC council registration and AD code setup in record time. Because of their team, our first export consignment to Hamburg cleared customs smoothly without a single hitch.',
    platform: 'Google',
    serviceUsed: 'Export Council & DGFT RCMC'
  }
];

export const PARTNER_LOGOS = [
  { name: 'HDFC Bank', category: 'Banking Partner', logoText: 'HDFC BANK' },
  { name: 'ICICI Bank', category: 'Corporate Banking', logoText: 'ICICI Bank' },
  { name: 'State Bank of India', category: 'Public Sector Banking', logoText: 'SBI' },
  { name: 'Razorpay', category: 'Payment Gateway', logoText: 'Razorpay' },
  { name: 'Ministry of Corporate Affairs', category: 'Govt Portal', logoText: 'MCA Govt' },
  { name: 'Startup India', category: 'Govt Initiative', logoText: 'Startup India' },
  { name: 'Digital India', category: 'Govt Initiative', logoText: 'Digital India' },
  { name: 'DGFT', category: 'Foreign Trade', logoText: 'DGFT India' },
  { name: 'FSSAI', category: 'Food Safety', logoText: 'FSSAI' },
  { name: 'IP India', category: 'Trademark & Patents', logoText: 'IP India' },
  { name: 'Amazon Web Services', category: 'Cloud Infrastructure', logoText: 'AWS' },
  { name: 'Google Cloud', category: 'Cloud Infrastructure', logoText: 'Google Cloud' }
];

export const GLOBAL_BRANDS_LOGOS = [
  { name: 'Tata Steel Sub-vendors', tag: 'Manufacturing' },
  { name: 'UrbanClap Vendors Network', tag: 'Services' },
  { name: 'Zepto Dark Store Suppliers', tag: 'Retail' },
  { name: 'Haldirams Supply Network', tag: 'FMCG' },
  { name: 'Zomato Cloud Kitchens', tag: 'Hospitality' },
  { name: 'Amazon Global Sellers', tag: 'E-Commerce' },
  { name: 'Flipkart Platinum Sellers', tag: 'E-Commerce' },
  { name: 'Paytm Merchant Alliances', tag: 'Fintech' },
  { name: 'L&T Infra Associates', tag: 'Construction' },
  { name: 'Sun Pharma Distributors', tag: 'Pharma' }
];
