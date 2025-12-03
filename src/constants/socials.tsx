import { Icons } from '@/components/ui/Icons';
import type { SocialLink } from '@/types';

export const SOCIALS: SocialLink[] = [
  { 
    name: 'GitHub', 
    url: 'https://github.com/aogusto', 
    icon: <Icons.Github /> 
  },
  { 
    name: 'LinkedIn', 
    url: 'https://www.linkedin.com/in/augusto--ribeiro/', 
    icon: <Icons.Linkedin /> 
  },
  { 
    name: 'Resume', 
    url: 'https://drive.google.com/file/d/1_loEp-VJ73PqWN0N22fnajRDTPAyC8-N/view?usp=sharing', 
    icon: <Icons.FileText /> 
  },
];
