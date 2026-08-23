export interface ServiceItem {
  id: string;
  name: string;
  category: string;
  subCategory: string;
  shortDesc: string;
  fullDesc: string;
  tat: string; // Turn around time e.g. "3-5 Working Days"
  govtFee: string;
  docsRequired: string[];
  features: string[];
  popular?: boolean;
  badge?: string;
  iconName: string;
}

export interface MegaCategory {
  id: string;
  title: string;
  columns: {
    columnName: string;
    items: string[];
  }[];
  promo: {
    title: string;
    description: string;
    badge: string;
    ctaText: string;
    ctaAction: string;
    image: string;
  };
}

export interface UpdateAlertItem {
  id: string;
  title: string;
  date: string;
  category: string;
  description: string;
  urgent?: boolean;
  linkText?: string;
}

export interface DueDateItem {
  id: string;
  title: string;
  dueDate: string;
  frequency: string;
  category: string;
  description: string;
  isUrgent?: boolean;
}

export interface SpecialOfferItem {
  id: string;
  title: string;
  code: string;
  discount: string;
  description: string;
  validity: string;
  servicesIncluded: string[];
  badge: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  category: string;
  author: string;
  authorRole: string;
  publishDate: string;
  readTime: string;
  summary: string;
  image: string;
  content: string[];
  tags: string[];
}

export interface ReviewItem {
  id: string;
  name: string;
  company: string;
  city: string;
  rating: number;
  date: string;
  text: string;
  platform: 'Google' | 'Trustpilot' | 'AmbitionBox';
  serviceUsed: string;
}

export interface LeadFormData {
  state: string;
  businessType: string;
  businessActivity: string;
  servicesRequired: string[];
  fullName: string;
  phone: string;
  email: string;
  panNumber: string;
  notes?: string;
}
