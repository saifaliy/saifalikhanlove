
import React, { useState, useEffect } from 'react';
import { FloatingHearts } from './components/FloatingHearts';
import { RosePetals } from './components/RosePetals';
import { HeroSection } from './components/HeroSection';
import { QuizSection } from './components/QuizSection';
import { ProposalSection } from './components/ProposalSection';
import { PromiseSection } from './components/PromiseSection';
import { LoveWall } from './components/LoveWall';
import { LoveStory } from './components/LoveStory';
import { GallerySection } from './components/GallerySection';
import { FutureDreams } from './components/FutureDreams';
import { MusicPlayer } from './components/MusicPlayer';

export enum AppState {
  INITIAL,
  QUIZ,
  PROPOSAL,
  GALLERY,
  PROMISES,
  LOVE_WALL,
  DREAMS,
  STORY
}

const App: React.FC = () => {
  const [state, setState] = useState<AppState>(AppState.INITIAL);
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  const startExperience = () => {
    setHasStarted(true);
    setIsMusicPlaying(true);
  };

  const handleNext = () => {
    const sequence = [
      AppState.INITIAL,
      AppState.QUIZ,
      AppState.PROPOSAL,
      AppState.GALLERY,
      AppState.PROMISES,
      AppState.LOVE_WALL,
      AppState.DREAMS,
      AppState.STORY
    ];
    const currentIndex = sequence.indexOf(state);
    if (currentIndex < sequence.length - 1) {
      setState(sequence[currentIndex + 1]);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  if (!hasStarted) {
    return (
      <div className="fixed inset-0 bg-black flex flex-col items-center justify-center text-center p-8 overflow-hidden">
        <div className="relative z-10 animate-in fade-in zoom-in duration-1000">
          <div className="text-8xl md:text-9xl mb-12 animate-float drop-shadow-[0_0_30px_rgba(255,182,197,0.5)]">💝</div>
          <h1 className="text-6xl md:text-[9rem] font-cursive rose-gold-gradient glow-text mb-6">Saif & Fiza</h1>
          <p className="text-pink-100 font-serif text-xl md:text-2xl mb-16 max-w-2xl mx-auto italic opacity-80 leading-relaxed">
            "Fiza, my fiancée, you are my greatest achievement. Witness the transformation your love created..."
          </p>
          <button
            onClick={startExperience}
            className="btn-luxury px-16 py-6 rounded-full text-white font-serif text-2xl shadow-2xl tracking-[0.2em] relative overflow-hidden group"
          >
            <span className="relative z-10">ENTER OUR MAGIC ❤️</span>
            <div className="absolute inset-0 bg-white/10 -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
          </button>
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(183,110,121,0.2),transparent)] opacity-50"></div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen w-full bg-transparent selection:bg-pink-500 selection:text-white pb-10">
      <FloatingHearts />
      <RosePetals />
      <MusicPlayer isPlaying={isMusicPlaying} togglePlay={() => setIsMusicPlaying(!isMusicPlaying)} />

      <main className="relative z-20 max-w-7xl mx-auto px-4 pt-10 perspective-1000">
        {state === AppState.INITIAL && <HeroSection onProceed={handleNext} />}
        {state === AppState.QUIZ && <QuizSection onComplete={handleNext} />}
        {state === AppState.PROPOSAL && <ProposalSection onComplete={handleNext} />}
        {state === AppState.GALLERY && <GallerySection onComplete={handleNext} />}
        {state === AppState.PROMISES && <PromiseSection onComplete={handleNext} />}
        {state === AppState.LOVE_WALL && <LoveWall onComplete={handleNext} />}
        {state === AppState.DREAMS && <FutureDreams onComplete={handleNext} />}
        {state === AppState.STORY && (
          <div className="animate-in fade-in duration-1000 slide-in-from-bottom-10">
             <LoveStory />
             <footer className="py-24 text-center text-pink-300 font-serif mt-20 border-t border-white/5 glass-card mx-4 rounded-t-[4rem]">
                <div className="text-8xl mb-12 animate-float">💍</div>
                <h3 className="text-5xl font-cursive glow-text mb-10">Humesha Ke Liye... Forever</h3>
                <div className="max-w-3xl mx-auto space-y-6 text-xl italic opacity-80 mb-16 px-6 leading-relaxed">
                   <p>"No matter how hard life gets... I will always choose you. Every single time."</p>
                   <p className="text-rose-gold-gradient font-bold text-2xl">From a Boy in 8th Class... To your Software Engineer Husband.</p>
                </div>
                <p className="text-sm opacity-40 tracking-[0.6em] uppercase">Made With Eternal Love By Saif ❤️</p>
             </footer>
          </div>
        )}
      </main>
    </div>
  );
};

export default App;
