import { MegaCategory, ServiceItem } from '../types';

export const COMPANY_DETAILS = {
  name: 'akshayb2bsolutions',
  tagline: 'make paper work',
  phone: '+91 97180 04839',
  phoneClean: '+919718004839',
  email: 'info@akshayb2bsolutions.com',
  address: 'Kesav Puram, Awas Vikas 1, Kalyanpur, Kanpur Nagar, Uttar Pradesh',
  workingHours: 'Monday to Saturday, 10:00 AM to 06:30 PM',
  social: {
    facebook: 'https://facebook.com/akshayb2bsolutions',
    instagram: 'https://instagram.com/akshayb2bsolutions',
    youtube: 'https://youtube.com/@akshayb2bsolutions',
    linkedin: 'https://linkedin.com/company/akshayb2bsolutions',
    whatsapp: 'https://wa.me/919718004839?text=Hello%20akshayb2bsolutions,%20I%20need%20assistance%20with%20business%20registration%20and%20compliance.'
  }
};

export const INDIAN_STATES_AND_UTS = [
  'Andhra Pradesh',
  'Arunachal Pradesh',
  'Assam',
  'Bihar',
  'Chhattisgarh',
  'Goa',
  'Gujarat',
  'Haryana',
  'Himachal Pradesh',
  'Jharkhand',
  'Karnataka',
  'Kerala',
  'Madhya Pradesh',
  'Maharashtra',
  'Manipur',
  'Meghalaya',
  'Mizoram',
  'Nagaland',
  'Odisha',
  'Punjab',
  'Rajasthan',
  'Sikkim',
  'Tamil Nadu',
  'Telangana',
  'Tripura',
  'Uttar Pradesh',
  'Uttarakhand',
  'West Bengal',
  'Andaman and Nicobar Islands',
  'Chandigarh',
  'Dadra and Nagar Haveli and Daman and Diu',
  'Delhi (NCT)',
  'Jammu and Kashmir',
  'Ladakh',
  'Lakshadweep',
  'Puducherry'
];

export const BUSINESS_TYPES = [
  'Sole Proprietorship',
  'Partnership Firm',
  'Limited Liability Partnership (LLP)',
  'One Person Company (OPC)',
  'Private Limited Company (Pvt Ltd)',
  'Public Limited Company',
  'Section 8 / NGO / Trust',
  'Others'
];

export const BUSINESS_ACTIVITIES = [
  'Trading & Wholesale',
  'Manufacturing & Production',
  'Services & IT / Consulting',
  'E-Commerce & Digital Goods',
  'Import & Export',
  'Food & Restaurant / Hospitality',
  'Healthcare & Pharma',
  'Construction & Real Estate',
  'Other Commercial Activities'
];

export const MEGA_CATEGORIES: MegaCategory[] = [
  {
    id: 'business-startup',
    title: 'Business Startup',
    columns: [
      {
        columnName: 'Domestic',
        items: [
          'Sole Proprietorship Firm',
          'Partnership Firm',
          'Limited Liability Partnership',
          'One Person Company',
          'Private Limited Company',
          'Producer Company Registration',
          'Nidhi Company',
          'Section 8 Company'
        ]
      },
      {
        columnName: 'International',
        items: [
          'Company Incorporation in Dubai/UAE',
          'Company Incorporation in Singapore',
          'Company Incorporation in Hong Kong',
          'Company Incorporation in UK',
          'Company Incorporation in USA',
          'Company Incorporation in Netherlands'
        ]
      },
      {
        columnName: 'NGO',
        items: [
          'NGO Registration',
          'Society Registration',
          'Darpan Registration',
          'Trust Registration',
          '12A & 80G Registration',
          'CSR 1 Registration',
          'FCRA Registration'
        ]
      }
    ],
    promo: {
      title: 'Pvt Ltd Incorporation Package',
      description: 'Zero Govt fee promotion + Free 2 DSC, DIN, MOA & AOA drafting with PAN & TAN.',
      badge: 'Most Popular',
      ctaText: 'Start Incorporation',
      ctaAction: 'Private Limited Company',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&auto=format&fit=crop&q=80'
    }
  },
  {
    id: 'registration-license',
    title: 'Registration & License',
    columns: [
      {
        columnName: 'Food Business',
        items: [
          'FSSAI Registration',
          'FSSAI State License',
          'FSSAI Central License',
          'FSSAI Returns',
          'FSSAI Renewal'
        ]
      },
      {
        columnName: 'Labour Department',
        items: [
          'Shop and Establishment Certificate',
          'Trade License',
          'Employee Provident Fund Registration',
          'ESI Registration'
        ]
      },
      {
        columnName: 'Initial Registration',
        items: [
          'Digital Signature Certificate',
          'MSME Registration',
          'Startup India Registration',
          'Make In India Registration',
          'NSIC Registration',
          'BIS Registration',
          'Barcode Registration',
          'ISBN Registration'
        ]
      },
      {
        columnName: 'License',
        items: [
          'RERA Registration',
          'POSH Compliance'
        ]
      }
    ],
    promo: {
      title: 'FSSAI Food License Express',
      description: 'Get your 14-digit FSSAI license expedited within 24-48 hours with legal vetting.',
      badge: 'Express Service',
      ctaText: 'Get FSSAI License',
      ctaAction: 'FSSAI Registration',
      image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&auto=format&fit=crop&q=80'
    }
  },
  {
    id: 'import-export',
    title: 'Import & Export',
    columns: [
      {
        columnName: 'Import Export',
        items: [
          'IEC Registration',
          'ICEGATE Registration',
          'AD Code Registration',
          'LUT Registration',
          'WPC Certificate',
          'LMPC Registration',
          'IEC Renewal'
        ]
      },
      {
        columnName: 'RCMC',
        items: [
          'AEPC',
          'APEDA',
          'CAPEXIL',
          'CHEMEXCIL',
          'Engineering Export Promotion Council',
          'Pharmaceutical Export Promotion Council',
          'Plastic Export Promotion Council',
          'Spice Board',
          'Coffee Board',
          'FIEO Registration',
          'MPEDA Registration'
        ]
      },
      {
        columnName: 'RCMC 2',
        items: [
          'Cashew Export Promotion Council',
          'Coconut Export Promotion Council',
          'Council of Leather Exports',
          'Electronics & Computer Software Export Promotion Council',
          'Gem & Jewellery Export Promotion Council (GJEPC)',
          'Handloom Export Promotion Council (HEPC)',
          'Services Export Promotion Council (SEPC)',
          'Tea Board Export Promotion Council',
          'Export Promotion Council for Handicraft'
        ]
      },
      {
        columnName: 'Trade Agreement & EPR',
        items: [
          'EFTA Trade Agreement',
          'EPR Battery Waste',
          'EPR E-Waste',
          'EPR Plastic Waste',
          'EPR Registration',
          'South Asian Free Trade Agreement',
          'South Asian Preferential Trading Arrangement',
          'Asia Pacific Trade Agreement',
          'Certification of Origin'
        ]
      }
    ],
    promo: {
      title: 'Global Export Gateway',
      description: 'IEC code generated same-day with DGFT + AD Code registration assistance at custom ports.',
      badge: 'DGFT Certified',
      ctaText: 'Apply for IEC',
      ctaAction: 'IEC Registration',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&auto=format&fit=crop&q=80'
    }
  },
  {
    id: 'tax-compliance',
    title: 'Tax & Compliance',
    columns: [
      {
        columnName: 'GST & TAX',
        items: [
          'Corporate Tax',
          'GST Registration',
          'GST Registration for Foreigners',
          'GST Modification',
          'GST Cancellation & Surrender',
          'Professional Tax Registration',
          'TAN Registration'
        ]
      },
      {
        columnName: 'Filing',
        items: [
          'GST Return',
          'TDS Returns',
          'Income Tax Return Filing'
        ]
      },
      {
        columnName: 'Company Compliances',
        items: [
          'Accounting and Bookkeeping',
          'LLP Firm Annual Compliance',
          'Pvt Ltd Company Compliances'
        ]
      },
      {
        columnName: 'Modification in Company',
        items: [
          'Virtual Chief Financial Officer',
          'Company Address Change',
          'Removal of Director',
          'Strike off Company',
          'Winding Up Pvt Ltd'
        ]
      }
    ],
    promo: {
      title: 'Annual ROC & GST Combo',
      description: 'End-to-end accounting, GST returns & MCA Form AOC-4 / MGT-7 filings managed by Senior CAs.',
      badge: 'Complete Peace of Mind',
      ctaText: 'Explore Compliance',
      ctaAction: 'GST Registration',
      image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600&auto=format&fit=crop&q=80'
    }
  },
  {
    id: 'trademark-ip',
    title: 'Trademark & IP',
    columns: [
      {
        columnName: 'Trademark',
        items: [
          'Brand Name Registration',
          'Trademark Registration',
          'Trademark Objection',
          'Trademark Hearing',
          'Trademark Opposition',
          'Trademark Renewal'
        ]
      },
      {
        columnName: 'Intellectual Property',
        items: [
          'Brand Name Suggestion',
          'Logo Design',
          'Copyright Registration'
        ]
      }
    ],
    promo: {
      title: 'Trademark Protection (TM)',
      description: 'Defend your brand identity. Apply for TM symbol within 24 hours with free preliminary conflict search.',
      badge: 'IP India Verified',
      ctaText: 'File Trademark',
      ctaAction: 'Trademark Registration',
      image: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?w=600&auto=format&fit=crop&q=80'
    }
  },
  {
    id: 'iso',
    title: 'ISO & Quality',
    columns: [
      {
        columnName: 'ISO Standard',
        items: [
          'ISO 9001',
          'ISO 14001',
          'ISO 45001',
          'ISO 22000',
          'ISO 27001',
          'ISO Certificate'
        ]
      },
      {
        columnName: 'Product Compliance',
        items: [
          'US FDA Certificate',
          'Halal Certificate',
          'CE Certificate'
        ]
      }
    ],
    promo: {
      title: 'ISO 9001:2015 Certification',
      description: 'International quality management standard certification with audit preparation & documentation.',
      badge: 'IAF Accredited',
      ctaText: 'Get Certified',
      ctaAction: 'ISO 9001',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&auto=format&fit=crop&q=80'
    }
  },
  {
    id: 'gem-other',
    title: 'GEM & Other',
    columns: [
      {
        columnName: 'Government E-Marketplace',
        items: [
          'GEM Registration',
          'Brand Registration on GEM',
          'Deemed OEM',
          'GEM Vendor Assessment'
        ]
      },
      {
        columnName: 'Other Services',
        items: [
          'Legal Drafting & Agreements',
          'NDA & Founder Agreements',
          'Import Quality Control',
          'Tax Assessment Assistance'
        ]
      }
    ],
    promo: {
      title: 'GeM Portal Vendor Enrollment',
      description: 'Sell products & services directly to Indian government ministries, PSUs, and departments.',
      badge: 'Govt Vendor Portal',
      ctaText: 'Enroll on GeM',
      ctaAction: 'GEM Registration',
      image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=600&auto=format&fit=crop&q=80'
    }
  }
];

// Flat array of all services for multi-select lead form and search
export const ALL_SERVICES_LIST: string[] = MEGA_CATEGORIES.flatMap(cat =>
  cat.columns.flatMap(col => col.items)
);

// Comprehensive list of detailed service items for the interactive showcase grid
export const DETAILED_SERVICES: ServiceItem[] = [
  {
    id: 'pvt-ltd',
    name: 'Private Limited Company',
    category: 'Domestic',
    subCategory: 'Business Startup',
    shortDesc: 'Most popular entity type for startups seeking venture capital and limited liability protection.',
    fullDesc: 'A Private Limited Company is the most popular corporate legal structure in India. It offers limited liability, separate legal identity, higher credibility with banks, and seamless equity funding from investors.',
    tat: '5-7 Working Days',
    govtFee: 'Nil (for authorised capital up to ₹15 Lakhs)',
    docsRequired: ['PAN Card of Directors', 'Aadhaar / Passport / Voter ID', 'Electricity Bill / NOC for Registered Office', 'Passport size photos', 'Bank statement with address'],
    features: ['2 DSCs Included', 'SPICe+ Form Filing', 'DIN for 2 Directors', 'MOA & AOA Drafting', 'PAN & TAN Allotment', 'Bank Account Assistance'],
    popular: true,
    badge: 'Trending',
    iconName: 'Building2'
  },
  {
    id: 'sole-proprietorship',
    name: 'Sole Proprietorship Firm',
    category: 'Domestic',
    subCategory: 'Business Startup',
    shortDesc: 'Simplest unorganized business setup ideal for solo merchants, freelancers, and small local retail.',
    fullDesc: 'A Sole Proprietorship is the easiest business entity to register in India with minimum statutory compliances. Governed by Udyam (MSME) or Shop & Establishment certification.',
    tat: '2-3 Working Days',
    govtFee: 'Minimal / State dependent',
    docsRequired: ['PAN Card of Owner', 'Aadhaar Card', 'Business Place Proof / Rent Agreement', 'Current Bank Account Details'],
    features: ['MSME / Udyam Certificate', 'GST Registration Assistance', 'Current Account Resolution', 'Zero Annual ROC Filing'],
    popular: true,
    badge: 'Quick Setup',
    iconName: 'UserCheck'
  },
  {
    id: 'llp',
    name: 'Limited Liability Partnership',
    category: 'Domestic',
    subCategory: 'Business Startup',
    shortDesc: 'Combines partnership flexibility with corporate limited liability, favored by consultants and agencies.',
    fullDesc: 'An LLP is an alternative corporate business form that gives the benefits of limited liability of a company and the flexibility of a partnership with minimal compliance burdens.',
    tat: '6-8 Working Days',
    govtFee: 'Varies with Contribution',
    docsRequired: ['PAN & Aadhaar of Partners', 'Address Proof of Partners', 'Registered Office Proof & NOC', 'Drafted LLP Agreement'],
    features: ['Name Approval (RUN-LLP)', 'FiLLiP Form Submission', 'LLP Agreement Drafting', 'Form 3 Filing with MCA', 'PAN & TAN Generation'],
    popular: true,
    iconName: 'Users'
  },
  {
    id: 'opc',
    name: 'One Person Company',
    category: 'Domestic',
    subCategory: 'Business Startup',
    shortDesc: 'Corporate structure with limited liability for a single entrepreneur without requiring a second director.',
    fullDesc: 'One Person Company (OPC) is a registered corporate entity formed by a single individual, enjoying separate legal status and corporate brand recognition with one mandatory nominee.',
    tat: '5-7 Working Days',
    govtFee: 'Nil for nominal capital up to ₹15L',
    docsRequired: ['PAN Card of Founder & Nominee', 'ID & Address Proofs', 'Registered Office Proof & NOC', 'Consent letter from Nominee (INC-3)'],
    features: ['1 DSC & 1 DIN', 'SPICe+ Incorporation', 'MOA/AOA with Nominee clause', 'PAN & TAN Issued', 'Corporate Bank Account'],
    iconName: 'User'
  },
  {
    id: 'partnership-firm',
    name: 'Partnership Firm',
    category: 'Domestic',
    subCategory: 'Business Startup',
    shortDesc: 'Traditional partnership setup under Indian Partnership Act 1932 with registered deed.',
    fullDesc: 'Formed by two or more individuals agreeing to share profits of a business. Can be registered with the Registrar of Firms (ROF) for legal enforcement.',
    tat: '3-5 Working Days',
    govtFee: 'State Stamp Duty',
    docsRequired: ['PAN & ID Proofs of all partners', 'Address proof of firm', 'Drafted Partnership Deed on stamp paper'],
    features: ['Partnership Deed Drafting', 'ROF Filing', 'PAN Card of Firm', 'Bank Current Account Setup'],
    iconName: 'Handshake'
  },
  {
    id: 'section-8',
    name: 'Section 8 Company',
    category: 'Domestic',
    subCategory: 'Business Startup',
    shortDesc: 'Non-profit corporate structure for promoting art, science, sports, education, and charity.',
    fullDesc: 'A Section 8 Company is registered under the Companies Act 2013 for charitable objectives. It commands high trust from donors, CSR committees, and foreign funding agencies.',
    tat: '10-15 Working Days',
    govtFee: 'MCA License fee applicable',
    docsRequired: ['PAN & Aadhaar of Promoters', 'Income & Expenditure estimate', 'Detailed Vision Statement & Object Clause', 'Registered Address Proof'],
    features: ['Central Govt Section 8 License', 'MOA & AOA with Charitable Clauses', '12A & 80G Filing Support', 'CSR 1 Eligibility'],
    iconName: 'HeartHandshake'
  },
  {
    id: 'fssai-reg',
    name: 'FSSAI Registration',
    category: 'Food Business',
    subCategory: 'Registration & License',
    shortDesc: 'Mandatory 14-digit food safety registration for cloud kitchens, restaurants, food manufacturers, and retailers.',
    fullDesc: 'FSSAI (Food Safety and Standards Authority of India) registration is compulsory for all Food Business Operators (FBOs) in India to ensure hygienic and compliant food preparation.',
    tat: '2-4 Working Days',
    govtFee: '₹100/yr (Basic)',
    docsRequired: ['Photo of Food Business Operator', 'Govt ID Proof (Aadhaar / Voter ID)', 'Business Address Proof', 'List of Food Categories Handled'],
    features: ['14-Digit FSSAI License Number', 'FoSCoS Portal Filing', 'Food Category Consultation', 'Instant Digital Certificate'],
    popular: true,
    badge: 'Instant Filing',
    iconName: 'Utensils'
  },
  {
    id: 'fssai-state-license',
    name: 'FSSAI State License',
    category: 'Food Business',
    subCategory: 'Registration & License',
    shortDesc: 'For mid-size food manufacturers, hotel chains, and distributors with annual turnover between ₹12L to ₹20Cr.',
    fullDesc: 'State Food License is issued by the state food safety department for medium scale operations with specific machinery capacity and multi-district distribution.',
    tat: '15-20 Working Days',
    govtFee: '₹2,000 - ₹5,000 / yr',
    docsRequired: ['Premises Blueprint / Layout Plan', 'List of Machinery & Capacity', 'Water Test Report from NABL lab', 'Food Safety Management System (FSMS)'],
    features: ['Technical Documentation', 'Food Safety Plan Drafting', 'Nomination of Authorized Person', 'Audit Preparation Assistance'],
    iconName: 'ChefHat'
  },
  {
    id: 'iec-reg',
    name: 'IEC Registration',
    category: 'Import Export',
    subCategory: 'Import & Export',
    shortDesc: '10-digit DGFT Import Export Code mandatory for cross-border international trade and customs clearance.',
    fullDesc: 'An Importer-Exporter Code (IEC) is a key business identification number issued by the Directorate General of Foreign Trade (DGFT), Ministry of Commerce and Industry.',
    tat: 'Same Day / 24 Hours',
    govtFee: '₹500 (Govt statutory fee)',
    docsRequired: ['PAN Card of Business / Proprietor', 'Aadhaar / Passport of Applicant', 'Cancelled Cheque / Bank Certificate', 'Electricity Bill / Rent Agreement'],
    features: ['Same-Day DGFT Submission', 'Digital IEC Certificate', 'Lifetime Validity', 'Customs AD Code Guidance'],
    popular: true,
    badge: 'Fast-Track',
    iconName: 'Globe2'
  },
  {
    id: 'ad-code-reg',
    name: 'AD Code Registration',
    category: 'Import Export',
    subCategory: 'Import & Export',
    shortDesc: 'Authorized Dealer Code registration at custom seaports and air cargo terminals for export clearance.',
    fullDesc: 'An AD Code (Authorized Dealer Code) is a 14-digit numerical code issued by the bank where you maintain a current account, mandatory for Icegate customs clearance.',
    tat: '3-5 Working Days',
    govtFee: 'Nil',
    docsRequired: ['Bank AD Code letter with stamp', 'IEC Certificate', 'PAN of Entity', 'GST Certificate', 'Board Resolution'],
    features: ['Icegate Portal Mapping', 'Port Registration Support', 'Customs Broker Coordination', 'Digital Verification'],
    iconName: 'Anchor'
  },
  {
    id: 'gst-reg',
    name: 'GST Registration',
    category: 'GST & TAX',
    subCategory: 'Tax & Compliance',
    shortDesc: 'New 15-digit GSTIN allotment for businesses exceeding threshold limits or selling on e-commerce platforms.',
    fullDesc: 'Goods and Services Tax (GST) registration gives legal recognition to your business as a supplier of goods or services, allowing you to pass on input tax credit (ITC) and sell across India.',
    tat: '3-5 Working Days',
    govtFee: 'Nil',
    docsRequired: ['PAN Card of Business', 'Aadhaar of Promoters', 'Bank Account Proof (Cancelled Cheque)', 'Electricity Bill & Rent Agreement / NOC of Office'],
    features: ['HSN / SAC Code Classification', 'Aadhaar Biometric Authentication Support', 'Clarification & Query Handling', 'GSTIN Certificate Download'],
    popular: true,
    badge: 'Essential',
    iconName: 'FileSpreadsheet'
  },
  {
    id: 'gst-return-filing',
    name: 'GST Return Filing',
    category: 'GST & TAX',
    subCategory: 'Tax & Compliance',
    shortDesc: 'Monthly and quarterly GSTR-1, GSTR-3B, GSTR-9 annual return computation and accurate reconciliation.',
    fullDesc: 'Ensure 100% compliant and timely filing of GST returns with 2B vs purchase register reconciliation to maximize input tax credit (ITC) and avoid hefty interest and late fees.',
    tat: 'Monthly Retainer',
    govtFee: 'Nil (Late fees if delayed)',
    docsRequired: ['Sales Invoices / Summary', 'Purchase Invoices / 2B Report', 'Bank Statement', 'E-Way Bill summaries'],
    features: ['Automated 2B Input Reconciliation', 'GSTR-1 & 3B Monthly Upload', 'ITC Mismatch Reporting', 'Annual GSTR-9 Audit Prep'],
    iconName: 'Receipt'
  },
  {
    id: 'tm-registration',
    name: 'Trademark Registration',
    category: 'Trademark',
    subCategory: 'Trademark & IP',
    shortDesc: 'Protect your brand name, logo, or slogan from counterfeiters with official TM / R protection across India.',
    fullDesc: 'Registering your trademark provides exclusive rights to use your brand name and prevents competitors from using similar names. Apply and start using the ™ symbol on the same day.',
    tat: 'Same Day Application',
    govtFee: '₹4,500 (Individual/MSME) / ₹9,000 (Others)',
    docsRequired: ['Logo / Brand Name image', 'Applicant ID & Address Proof', 'MSME Certificate (for 50% govt fee rebate)', 'Power of Attorney (TM-48)'],
    features: ['Comprehensive Conflict Search', 'Class 1-45 Consultation', 'TM-A Filing on IP India Portal', 'Examination Report Tracking'],
    popular: true,
    badge: '50% Fee Rebate',
    iconName: 'ShieldCheck'
  },
  {
    id: 'tm-objection',
    name: 'Trademark Objection Reply',
    category: 'Trademark',
    subCategory: 'Trademark & IP',
    shortDesc: 'Drafting professional legal replies for Section 9 (distinctiveness) and Section 11 (similarity) objections.',
    fullDesc: 'When the trademark registrar issues an examination report raising objections, our senior IP advocates draft a well-grounded legal reply citing relevant case laws to secure publication.',
    tat: '3-4 Working Days',
    govtFee: 'Nil',
    docsRequired: ['Examination Report Copy', 'User Affidavit & Invoices proving prior use', 'Affidavit of Distinctiveness'],
    features: ['Detailed Case Law Citations', 'Drafting by Senior IP Advocates', 'MIS MISC Filing with Registry', 'Hearing Representation Advisory'],
    iconName: 'Gavel'
  },
  {
    id: 'msme-reg',
    name: 'MSME / Udyam Registration',
    category: 'Initial Registration',
    subCategory: 'Registration & License',
    shortDesc: 'Government Udyam certificate for collateral-free bank loans, subsidy schemes, and 50% trademark fee discount.',
    fullDesc: 'Udyam Registration is a zero-government-fee certification provided by the Ministry of MSME that unlocks priority sector lending, lower bank interest rates, and protection against delayed payments.',
    tat: '24 Hours',
    govtFee: 'Nil',
    docsRequired: ['Aadhaar Card of Proprietor/Partner', 'PAN Card of Business', 'Bank Account Details', 'Investment & Turnover Numbers'],
    features: ['Instant Udyam Number', 'Priority Lending Eligibility', 'Govt Tender Exemption', 'Protection under MSME Samadhaan'],
    popular: true,
    iconName: 'Award'
  },
  {
    id: 'iso-9001',
    name: 'ISO 9001:2015 Certification',
    category: 'ISO Standard',
    subCategory: 'ISO',
    shortDesc: 'Global quality management benchmark to win international corporate contracts and government tenders.',
    fullDesc: 'ISO 9001 demonstrates that your organization consistently provides products and services that meet customer and regulatory requirements. Includes audit manual and quality framework.',
    tat: '3-5 Working Days',
    govtFee: 'Included in package',
    docsRequired: ['Company Registration Proof', 'Organization Chart', 'Brief Workflow / Process description', 'Office Photos / Site Details'],
    features: ['IAF / Non-IAF Options', 'Quality Manual Documentation', 'Pre-Audit Verification', '3-Year Certificate Validity'],
    popular: true,
    badge: 'Global Trust',
    iconName: 'CheckCircle2'
  },
  {
    id: 'iso-27001',
    name: 'ISO 27001:2022 (ISMS)',
    category: 'ISO Standard',
    subCategory: 'ISO',
    shortDesc: 'Information Security Management System certificate crucial for SaaS, IT, fintech, and data centers.',
    fullDesc: 'ISO 27001 validates your data security posture, encryption practices, risk management, and cybersecurity protocols to global enterprise clients.',
    tat: '7-10 Working Days',
    govtFee: 'Included in package',
    docsRequired: ['Network Architecture', 'Data Privacy Policy', 'Business Profile', 'Asset Inventory list'],
    features: ['Statement of Applicability (SoA)', 'Risk Assessment Template', 'Information Security Policy', 'Audit Support'],
    iconName: 'Lock'
  },
  {
    id: 'gem-reg',
    name: 'GeM Portal Registration',
    category: 'Initial Registration',
    subCategory: 'GEM & Other',
    shortDesc: 'Vendor assessment and OEM brand listing on Government e-Marketplace to sell directly to PSUs and Ministries.',
    fullDesc: 'Government e-Marketplace (GeM) is the dedicated national public procurement portal in India. We handle primary seller registration, catalog upload, and brand approval.',
    tat: '3-5 Working Days',
    govtFee: 'Caution Money (Refundable)',
    docsRequired: ['PAN & Aadhaar of Authorized Signatory', 'GSTIN', 'Cancelled Cheque', 'Audited Balance Sheets (3 yrs)'],
    features: ['Primary & Secondary User Setup', 'OEM Dashboard Activation', 'Product Listing & Catalog Creation', 'L1 Tender Bidding Support'],
    iconName: 'ShoppingBag'
  },
  {
    id: 'startup-india',
    name: 'Startup India DPIIT Recognition',
    category: 'Initial Registration',
    subCategory: 'Registration & License',
    shortDesc: 'DPIIT certificate for Section 80-IAC tax holiday (3 years 100% tax exemption) and angel tax relief.',
    fullDesc: 'Get your entity recognized under the Startup India initiative by the Department for Promotion of Industry and Internal Trade (DPIIT) to access innovation grants, fast-track patents, and tax benefits.',
    tat: '7-12 Working Days',
    govtFee: 'Nil',
    docsRequired: ['Certificate of Incorporation', 'Pitch Deck / Solution Note', 'Website / App Link', 'Innovation Proof & Scalability Model'],
    features: ['DPIIT Recognition Number', '80-IAC Tax Exemption Application', 'Fast-Track Patent Filing Support', 'Govt Procurement Exemptions'],
    iconName: 'Rocket'
  },
  {
    id: 'rera-reg',
    name: 'RERA Registration for Promoters & Agents',
    category: 'Initial Registration',
    subCategory: 'Registration & License',
    shortDesc: 'Real Estate Regulatory Authority compliance for real estate developers, brokers, and channel partners.',
    fullDesc: 'Mandatory registration for real estate agents and project promoters to legally market and sell commercial or residential properties under RERA state authorities.',
    tat: '10-15 Working Days',
    govtFee: 'State Specific',
    docsRequired: ['PAN & ID Proofs', 'ITR of last 3 years', 'Office Address Proof', 'Project Approvals / Land Title (for builders)'],
    features: ['State Authority Application', 'Legal Vetting of Documents', 'Certificate Issuance', 'Quarterly Compliance Guidance'],
    iconName: 'Landmark'
  },
  {
    id: 'company-dubai',
    name: 'Company Incorporation in Dubai/UAE',
    category: 'International',
    subCategory: 'Business Startup',
    shortDesc: '100% foreign ownership in Dubai Mainland or Free Zones (IFZA, Meydan, DMCC) with 0% corporate tax benefits.',
    fullDesc: 'Expand to the Middle East with seamless company formation in the UAE. Includes trade license, investor visa processing, corporate bank account assistance, and registered office address.',
    tat: '5-7 Working Days',
    govtFee: 'Varies by Freezone',
    docsRequired: ['Passport copy of shareholders', 'Passport size photo (white background)', '3 Proposed company names', 'Entry stamp / Visit visa copy'],
    features: ['Freezone / Mainland License', 'MoA & AoA in English & Arabic', 'Investor Residency Visa', 'UAE Corporate Bank Account'],
    iconName: 'PlaneTakeoff'
  },
  {
    id: 'company-usa',
    name: 'Company Incorporation in USA (Delaware/Wyoming)',
    category: 'International',
    subCategory: 'Business Startup',
    shortDesc: 'Form Delaware / Wyoming LLC or C-Corp with EIN and US Mercury / Brex bank account remotely from India.',
    fullDesc: 'Ideal for tech startups, SaaS companies, and Amazon global sellers. Form your US entity with zero physical presence required.',
    tat: '4-6 Working Days',
    govtFee: 'State filing fee applicable',
    docsRequired: ['Passport copy of Founder', 'Address proof in India', 'Entity Name choice'],
    features: ['Certificate of Formation', 'Registered Agent for 1 Year', 'Federal EIN (Tax ID) from IRS', 'US Bank Account Setup Support'],
    iconName: 'Building'
  },
  {
    id: 'ngo-darpan',
    name: 'NGO Darpan & 12A/80G Registration',
    category: 'Domestic',
    subCategory: 'Business Startup',
    shortDesc: 'NITI Aayog Darpan portal listing & Income Tax exemptions to receive tax-free donations and CSR funding.',
    fullDesc: 'Get your Trust, Society, or Section 8 Company enrolled on NGO Darpan to apply for government grants and enable 50% tax deductions for your donors under Section 80G.',
    tat: '15-20 Working Days',
    govtFee: 'Nil',
    docsRequired: ['Trust Deed / MOA & Bylaws', 'Pan Card of NGO and Trustees', 'Activity Report & Audited Accounts', 'NOC from Landlord'],
    features: ['Unique Darpan ID from NITI Aayog', 'Provisional 12A & 80G Approval', 'CSR-1 Form for Corporate Funds', 'Sub-Clause Verification'],
    iconName: 'Sparkles'
  },
  {
    id: 'epf-esi',
    name: 'EPF & ESI Registration',
    category: 'Initial Registration',
    subCategory: 'Registration & License',
    shortDesc: 'Statutory social security registration with EPFO and ESIC for establishments with 10/20+ employees.',
    fullDesc: 'Mandatory social security registration for employee healthcare benefits (ESI) and retirement provident fund (EPF) to prevent legal notices and penalties.',
    tat: '2-4 Working Days',
    govtFee: 'Nil',
    docsRequired: ['PAN of Organization', 'Specimen Signature Cards', 'List of Employees with Aadhaar & Salary', 'Electricity bill & Rent Deed'],
    features: ['Shram Suvidha Registration', 'EPFO Code Allotment', 'ESIC Sub-Code Allotment', 'Monthly ECR Return Filing Guidance'],
    iconName: 'ShieldAlert'
  },
  {
    id: 'epr-plastic',
    name: 'EPR Registration (Plastic & E-Waste)',
    category: 'Import Export',
    subCategory: 'Import & Export',
    shortDesc: 'Central Pollution Control Board (CPCB) Extended Producer Responsibility license for importers & brand owners.',
    fullDesc: 'Mandatory under Ministry of Environment rules for producers, importers, and brand owners (PIBOs) dealing in plastic packaging, battery waste, and electronics.',
    tat: '12-18 Working Days',
    govtFee: 'CPCB Portal Statutory fee',
    docsRequired: ['IEC Code & GSTIN', 'Product Catalog & Packaging Specifications', 'State Pollution Control Board NOC', 'Annual Plastic Footprint Estimate'],
    features: ['CPCB Central Portal Filing', 'PIBO Category Assessment', 'Waste Management Agreement Vetting', 'Annual Target Fulfillment Advice'],
    iconName: 'Recycle'
  },
  {
    id: 'posh-compliance',
    name: 'POSH Act Compliance Framework',
    category: 'Initial Registration',
    subCategory: 'Registration & License',
    shortDesc: 'Prevention of Sexual Harassment at Workplace (POSH) mandatory Internal Committee (IC) constitution & policy.',
    fullDesc: 'Mandatory for all workplaces with 10 or more employees under the Sexual Harassment of Women at Workplace Act 2013. Includes policy drafting, external member allocation, and employee sensitisation training.',
    tat: '3-5 Working Days',
    govtFee: 'Nil',
    docsRequired: ['Company Employee Roster', 'Authorized Representative Details', 'Company Letterhead'],
    features: ['Custom POSH Policy Drafting', 'Internal Committee (IC) Formation Order', 'External Member Provisioning', 'Annual Compliance Report (Form 1)'],
    iconName: 'FileCheck'
  },
  {
    id: 'accounting-bookkeeping',
    name: 'Accounting & Bookkeeping Retainer',
    category: 'GST & TAX',
    subCategory: 'Tax & Compliance',
    shortDesc: 'End-to-end cloud accounting on Zoho Books / Tally Prime with balance sheet, P&L, and MIS reports.',
    fullDesc: 'Dedicated CA-supervised accountants manage your daily ledger entries, bank reconciliation, vendor bills, invoicing, and month-end financial statements with zero hassle.',
    tat: 'Ongoing Monthly',
    govtFee: 'Nil',
    docsRequired: ['Bank Statements', 'Sales & Purchase Vouchers', 'Expense Receipts', 'Loan & Asset schedules'],
    features: ['Dedicated Account Manager', 'Zoho Books / Tally Setup', 'Monthly Profit & Loss MIS', 'TDS & TCS Deductions Computation'],
    iconName: 'Calculator'
  }
];

export const SERVICE_CATEGORIES = [
  'All Services',
  'Domestic',
  'International',
  'Food Business',
  'Initial Registration',
  'Import Export',
  'GST & TAX',
  'Trademark',
  'ISO Standard'
];

export const SERVICES_DATA = DETAILED_SERVICES;
