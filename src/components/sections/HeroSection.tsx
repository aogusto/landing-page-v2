import { useTranslation } from 'react-i18next';

export const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <section className="min-h-[85vh] flex flex-col justify-center items-center text-center px-4 pt-32 pb-20">
      <div className="space-y-8 max-w-4xl mx-auto">
        <div className="inline-block px-4 py-1.5 rounded-full border border-blue-100 bg-blue-50 text-blue-700 text-xs font-semibold tracking-wide uppercase shadow-sm">
          {t('hero.role')}
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight text-slate-900 leading-[1.1]">
          {t('hero.greeting')} <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500">
            Augusto
          </span>
        </h1>
        
        <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed">
          {t('hero.description')}
        </p>
      </div>
    </section>
  );
};
