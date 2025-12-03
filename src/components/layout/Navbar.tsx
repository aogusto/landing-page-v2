import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Icons } from '@/components/ui';
import { SOCIALS } from '@/constants';
import { LanguageSelector } from './LanguageSelector';

export const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const navLinks = [
    { name: t('nav.experience'), href: '#experience' },
    { name: t('nav.education'), href: '#education' },
  ];

  const currentLang = i18n.language as 'pt' | 'en';
  const setLanguage = (lang: 'pt' | 'en') => {
    i18n.changeLanguage(lang);
  };

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${isScrolled ? 'py-4 bg-white/70 backdrop-blur-xl border-white/20 shadow-sm' : 'py-6 bg-transparent border-transparent'}`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          
          {/* Logo - largura fixa para balancear */}
          <div 
            className="font-bold text-xl tracking-tighter text-slate-800 z-50 relative cursor-pointer md:w-56" 
            onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
          >
            augustoribeiro<span className="text-blue-600">.dev</span>
          </div>

          {/* Desktop Navigation - centralizado */}
          <nav className="hidden md:flex items-center gap-8 bg-white/50 backdrop-blur-md px-6 py-2 rounded-full border border-white/40 shadow-sm">
             {navLinks.map(link => (
               <button 
                 key={link.name} 
                 onClick={() => scrollTo(link.href)}
                 className="text-sm font-medium text-slate-500 hover:text-blue-600 transition-colors cursor-pointer"
               >
                 {link.name}
               </button>
             ))}
          </nav>

          {/* Desktop Right: Language & Socials - largura fixa para balancear */}
          <div className="hidden md:flex items-center gap-4 md:w-56 justify-end">
            <LanguageSelector lang={currentLang} setLang={setLanguage} />
            <div className="h-6 w-px bg-slate-300/50"></div>
            <div className="flex gap-4">
              {SOCIALS.map(social => (
                <div key={social.name} className="relative group">
                  <a 
                    href={social.url} 
                    target="_blank" 
                    rel="noreferrer"
                    className="text-slate-400 hover:text-blue-600 transition-colors block"
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                  {/* Tooltip */}
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 px-2 py-1 bg-slate-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                    {social.name === 'Resume' ? t('social.downloadCV') : social.name}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Controls */}
          <div className="flex md:hidden items-center gap-4 z-50 relative">
             <LanguageSelector lang={currentLang} setLang={setLanguage} />
             <button 
               onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
               className="p-2 text-slate-800 bg-white/50 rounded-lg hover:bg-white transition"
             >
               {mobileMenuOpen ? <Icons.X /> : <Icons.Menu />}
             </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-white/95 backdrop-blur-2xl z-40 flex flex-col justify-center items-center transition-all duration-500 ease-in-out ${mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}
      >
        <div className="flex flex-col gap-8 text-center">
          {navLinks.map(link => (
            <button 
              key={link.name} 
              onClick={() => scrollTo(link.href)}
              className="text-3xl font-bold text-slate-800 hover:text-blue-600 transition-transform hover:scale-110"
            >
              {link.name}
            </button>
          ))}
          
          <div className="h-px w-24 bg-slate-200 mx-auto my-4"></div>

          <div className="flex gap-8 justify-center">
            {SOCIALS.map(social => (
                <a 
                  key={social.name} 
                  href={social.url} 
                  target="_blank" 
                  rel="noreferrer"
                  className="p-4 bg-slate-50 rounded-full text-slate-600 hover:text-blue-600 hover:bg-blue-50 transition-all shadow-sm"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};
