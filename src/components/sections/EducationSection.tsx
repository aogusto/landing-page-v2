import { useTranslation } from 'react-i18next';
import { Icons } from '@/components/ui';
import { Spotlight } from '@/components/ui';
import type { Education } from '@/types';

export const EducationSection = () => {
  const { t } = useTranslation();
  
  const education = t('educationData', { returnObjects: true }) as Education[];

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto relative z-10" id="education">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-600 mb-4">
          {t('education.title')}
        </h2>
        <p className="text-slate-500 max-w-2xl mx-auto">
          {t('education.description')}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {education.map((edu) => (
          <div key={edu.id} className="h-full">
            <Spotlight className="h-full rounded-2xl border border-slate-200 bg-white/60 hover:bg-white shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="p-8 h-full flex flex-col relative z-20">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-blue-50 text-blue-600 rounded-xl">
                    <Icons.GraduationCap />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-800 leading-tight">
                      {edu.institution}
                    </h3>
                    <p className="text-blue-600 font-medium text-sm mt-1">{edu.course}</p>
                  </div>
                </div>

                <div className="flex-grow">
                  <p className="text-slate-600 leading-relaxed text-sm">
                    {edu.description}
                  </p>
                </div>

                <div className="mt-6 pt-6 border-t border-slate-100 flex justify-between items-center">
                  <span className="text-xs font-semibold bg-slate-100 text-slate-500 py-1 px-3 rounded-full uppercase tracking-wide">
                    {edu.period}
                  </span>
                </div>
              </div>
            </Spotlight>
          </div>
        ))}
      </div>
    </section>
  );
};
