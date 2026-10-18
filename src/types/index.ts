export interface NavItem {
  label: string;
  href: string;
}

export interface Treatment {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  image: string;
  category: 'core' | 'secondary';
  symptoms: string[];
  interventions: string[];
  expectedOutcomes: string[];
  slug: string;
}

export interface StatMetric {
  value: string;
  label: string;
  sublabel?: string;
}

export interface BenefitItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category?: string;
}

export interface AppointmentFormData {
  fullName: string;
  phone: string;
  treatment: string;
  preferredDate: string;
  preferredTime: string;
  symptomsNote: string;
}

export interface PatientStory {
  id: string;
  patientName: string;
  treatmentType: string;
  rating: number;
  quote: string;
  fullStory: string;
  duration?: string;
  isVerified: boolean;
}
