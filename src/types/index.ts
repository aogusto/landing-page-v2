import type { ReactNode } from 'react';

export type Language = 'pt' | 'en';

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
  color: string;
}

export interface Education {
  id: string;
  institution: string;
  course: string;
  period: string;
  description: string;
}

export interface Tech {
  name: string;
  icon: string;
  color: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: ReactNode;
}

export interface NavLink {
  name: string;
  href: string;
}

export interface LanguageInfo {
  name: string;
  level: string;
}
