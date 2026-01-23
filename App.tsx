import React from 'react';
import { HeroCanvas } from './components/HeroCanvas';
import { MissionSection } from './components/MissionSection';
import { AdoptionCenter } from './components/AdoptionCenter';
import { StickyNav } from './components/StickyNav';

const App: React.FC = () => {
  return (
    <div className="min-h-screen w-full bg-slate-50 font-sans text-slate-800 selection:bg-sky-200 selection:text-sky-900 overflow-x-hidden">
      <HeroCanvas />
      <MissionSection />
      <AdoptionCenter />
      <StickyNav />
    </div>
  );
};

export default App;