import { useTranslation } from 'react-i18next';
import { SOCIALS } from '@/constants';

export const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="py-12 border-t border-slate-200 bg-white/40 backdrop-blur-sm mt-20">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-slate-400 text-sm">
          {t('footer.copyright')}
        </div>
        <div className="flex gap-6">
          {SOCIALS.map(social => (
            <a 
              key={social.name} 
              href={social.url}
              target="_blank"
              rel="noreferrer" 
              className="text-slate-400 hover:text-blue-600 transition transform hover:scale-110"
              aria-label={social.name}
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};
