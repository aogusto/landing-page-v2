interface LanguageSelectorProps {
  lang: 'pt' | 'en';
  setLang: (lang: 'pt' | 'en') => void;
}

export const LanguageSelector = ({ lang, setLang }: LanguageSelectorProps) => (
  <div className="flex items-center gap-2 bg-slate-100/80 rounded-full p-1 border border-slate-200 shadow-inner relative overflow-hidden w-20 h-7 cursor-pointer select-none">
    <div 
      className={`absolute top-1 bottom-1 w-[calc(50%-4px)] bg-white rounded-full shadow-sm transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${lang === 'pt' ? 'left-1' : 'left-[calc(50%)]'}`}
    />
    <button 
      onClick={() => setLang('pt')} 
      className={`relative z-10 w-1/2 text-center text-[10px] font-bold transition-colors duration-300 ${lang === 'pt' ? 'text-blue-600' : 'text-slate-400 hover:text-slate-600'}`}
    >
      PT
    </button>
    <button 
      onClick={() => setLang('en')} 
      className={`relative z-10 w-1/2 text-center text-[10px] font-bold transition-colors duration-300 ${lang === 'en' ? 'text-blue-600' : 'text-slate-400 hover:text-slate-600'}`}
    >
      EN
    </button>
  </div>
);
