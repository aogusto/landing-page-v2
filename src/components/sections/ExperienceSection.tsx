import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { TECHNOLOGIES } from '@/constants';
import { Icons, Spotlight } from '@/components/ui';
import type { Experience } from '@/types';

export const ExperienceSection = () => {
  const { t } = useTranslation();
  const [activeExp, setActiveExp] = useState<string | null>(null);

  const experiences = t('experiences', { returnObjects: true }) as Experience[];

  // Filter techs that are used in the active experience
  const getActiveTechs = (expId: string | null) => {
    if (!expId) return [];
    const exp = experiences.find(e => e.id === expId);
    return exp ? exp.technologies : [];
  };

  const activeTechs = getActiveTechs(activeExp);

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto relative z-10" id="experience">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-600 mb-4">
          {t('experience.title')}
        </h2>
        <p className="text-slate-500 max-w-2xl mx-auto">
          {t('experience.description')}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Col: Experience Cards */}
        <div className="lg:col-span-8 space-y-6">
          {experiences.map((exp) => (
            <div 
              key={exp.id}
              onClick={() => setActiveExp(activeExp === exp.id ? null : exp.id)}
              className="cursor-pointer group"
            >
              <Spotlight className={`
                rounded-2xl border transition-all duration-500 
                ${activeExp === exp.id 
                  ? 'bg-white shadow-xl scale-[1.02] border-blue-500/50 ring-4 ring-blue-500/10' 
                  : 'bg-white/60 hover:bg-white shadow-sm hover:shadow-md border-slate-200'}
              `}>
                <div className="p-8 relative z-20">
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4">
                    <div>
                      <h3 className={`text-xl font-bold transition-colors ${activeExp === exp.id ? 'text-blue-600' : 'text-slate-800'}`}>
                        {exp.role}
                      </h3>
                      <p className="text-slate-600 font-medium">{exp.company}</p>
                    </div>
                    <span className="text-xs font-semibold bg-slate-100 text-slate-500 py-1 px-3 rounded-full mt-2 sm:mt-0 uppercase tracking-wide">
                      {exp.period}
                    </span>
                  </div>
                  
                  <div className={`
                    overflow-hidden transition-all duration-500 ease-in-out
                    ${activeExp === exp.id ? 'max-h-96 opacity-100 mt-4' : 'max-h-24 opacity-70'}
                  `}>
                    <p className="text-slate-600 leading-relaxed">
                      {exp.description}
                    </p>
                    
                    {activeExp !== exp.id && (
                      <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-white via-white/80 to-transparent pointer-events-none sm:hidden" />
                    )}
                  </div>

                  <div className={`
                     mt-6 flex flex-wrap gap-2 transition-all duration-500
                     ${activeExp === exp.id ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 h-0 overflow-hidden'}
                  `}>
                     {exp.technologies.map(tech => (
                       <span key={tech} className="text-xs font-medium text-blue-700 bg-blue-50 border border-blue-100 px-2 py-1 rounded-md">
                         {tech}
                       </span>
                     ))}
                  </div>

                  <div className="absolute top-8 right-8 text-slate-300 opacity-0 group-hover:opacity-100 transition-opacity">
                      <Icons.ChevronRight />
                  </div>
                </div>
              </Spotlight>
            </div>
          ))}
        </div>

        {/* Right Col: Dynamic Tech Stack Viz */}
        <div className="lg:col-span-4 relative hidden lg:block">
           <div className="sticky top-24">
             <div className="bg-white/50 backdrop-blur-md rounded-3xl p-8 border border-white/50 shadow-xl">
               <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-6">
                 {t('experience.techTitle')}
               </h3>
               
               <div className="grid grid-cols-2 gap-4">
                 {TECHNOLOGIES.map((tech) => {
                   const isActive = activeExp ? activeTechs.includes(tech.name) : true;
                   
                   return (
                     <div 
                       key={tech.name}
                       className={`
                         flex items-center gap-3 p-3 rounded-xl border transition-all duration-500
                         ${isActive 
                           ? 'bg-white shadow-md opacity-100 scale-100 border-slate-100' 
                           : 'bg-slate-50 opacity-30 scale-95 grayscale border-transparent'}
                       `}
                     >
                       <span className="text-xl">{tech.icon}</span>
                       <span className={`text-sm font-medium ${tech.color}`}>
                         {tech.name}
                       </span>
                     </div>
                   );
                 })}
               </div>

               {activeExp ? (
                  <div className="mt-8 p-4 bg-blue-50/50 rounded-xl border border-blue-100 text-center animate-pulse">
                    <p className="text-xs text-blue-600 font-medium">
                      {t('experience.techDesc')} {experiences.find(e => e.id === activeExp)?.company}
                    </p>
                  </div>
               ) : (
                 <div className="mt-8 text-center">
                   <p className="text-xs text-slate-400">
                     {t('experience.techSelect')}
                   </p>
                 </div>
               )}
             </div>
           </div>
        </div>
      </div>
    </section>
  );
};
