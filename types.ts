
// Fix: Import React to provide the React namespace for type definitions like ReactNode.
import React from 'react';

export interface CaseStudy {
  id: string;
  title: string;
  category: string;
  views: string;
  gradientClass: string;
  label: string;
}

export interface Metric {
  label: string;
  value: string;
  description: string;
  icon: React.ReactNode;
}

export interface Mechanic {
  title: string;
  description: string;
  color: string;
}