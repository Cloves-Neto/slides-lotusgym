export type SlideCategory = 
  | 'Estratégia'
  | 'Diagnóstico'
  | 'Pilares'
  | 'Comercial & Mkt'
  | 'Tecnologia & IA'
  | 'Financeiro & ROI';

export interface SlideData {
  id: number;
  title: string;
  subtitle?: string;
  category: SlideCategory;
  presenterNotes: string;
  keyTakeaway: string;
}

export interface PresenterConfig {
  presenterName: string;
  presenterTitle: string;
  year: string;
  contactEmail: string;
  contactPhone: string;
}

export interface GymMetrics {
  activeMembers: number;
  monthlyChurn: number; // percentage, e.g. 8.5
  avgTicket: number; // e.g. 139.90
  monthlyLeads: number;
  conversionRate: number; // percentage, e.g. 12
  npsScore: number;
  unpaidRate: number; // percentage, e.g. 9.2
}

export interface ROISimulation {
  targetMembers: number;
  targetTicket: number;
  targetChurn: number;
  targetConversion: number;
  techInvestmentMonthly: number;
}
