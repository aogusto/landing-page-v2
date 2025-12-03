import '@/i18n';
import { Navbar, Footer } from '@/components/layout';
import { HeroSection, ExperienceSection, EducationSection } from '@/components/sections';

function App() {
  return (
    <div className="min-h-screen relative overflow-x-hidden text-slate-900 bg-slate-50/50">
      
      {/* Background Mesh Gradients */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-blob"></div>
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-blob-reverse animation-delay-2000"></div>
        <div className="absolute bottom-[-10%] left-[20%] w-[550px] h-[550px] bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-blob animation-delay-4000"></div>
        <div className="absolute top-[40%] right-[10%] w-[400px] h-[400px] bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob-reverse"></div>
      </div>

      <main className="relative z-10">
        <Navbar />
        <HeroSection />
        <ExperienceSection />
        <EducationSection />
        <Footer />
      </main>
    </div>
  );
}

export default App;
