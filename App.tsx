
import React, { useState } from 'react';
import { FloatingHearts } from './components/FloatingHearts';
import { RosePetals } from './components/RosePetals';
import { HeroSection } from './components/HeroSection';
import { QuizSection } from './components/QuizSection';
import { ProposalSection } from './components/ProposalSection';
import { PromiseSection } from './components/PromiseSection';
import { LoveWall } from './components/LoveWall';
import { LoveStory } from './components/LoveStory';
import { MusicPlayer } from './components/MusicPlayer';

export enum AppState {
  INITIAL,
  QUIZ,
  PROPOSAL,
  PROMISES,
  LOVE_WALL,
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
      AppState.PROMISES,
      AppState.LOVE_WALL,
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
      <div className="fixed inset-0 bg-black flex flex-col items-center justify-center text-center p-8">
        <div className="animate-heart-beat text-8xl mb-12">💝</div>
        <h1 className="text-5xl md:text-8xl font-cursive rose-gold-gradient glow-text mb-6">Saif & Fiza</h1>
        <p className="text-pink-100 font-serif text-xl mb-12 max-w-lg italic opacity-80 leading-relaxed">
          "Fiza, you are not just my fiancée, you are my destiny. Step into our world of love and see the journey of a boy who changed everything for you..."
        </p>
        <button
          onClick={startExperience}
          className="btn-luxury px-12 py-5 rounded-full text-white font-serif text-2xl shadow-2xl tracking-widest"
        >
          ENTER OUR STORY ❤️
        </button>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen w-full bg-transparent selection:bg-pink-500 selection:text-white pb-20">
      <FloatingHearts />
      <RosePetals />
      <MusicPlayer isPlaying={isMusicPlaying} togglePlay={() => setIsMusicPlaying(!isMusicPlaying)} />

      <main className="relative z-20 max-w-6xl mx-auto px-4 pt-10">
        {state === AppState.INITIAL && <HeroSection onProceed={handleNext} />}
        {state === AppState.QUIZ && <QuizSection onComplete={handleNext} />}
        {state === AppState.PROPOSAL && <ProposalSection onComplete={handleNext} />}
        {state === AppState.PROMISES && <PromiseSection onComplete={handleNext} />}
        {state === AppState.LOVE_WALL && <LoveWall onComplete={handleNext} />}
        {state === AppState.STORY && (
          <div className="animate-in fade-in duration-1000 slide-in-from-bottom-10">
             <LoveStory />
             <footer className="py-20 text-center text-pink-300 font-serif mt-20 border-t border-white/10 glass-card mx-4 rounded-t-[3rem]">
                <div className="text-7xl mb-10 animate-heart-beat">💍</div>
                <h3 className="text-4xl font-cursive glow-text mb-8">Our Journey Has Just Begun</h3>
                <div className="max-w-2xl mx-auto space-y-4 text-lg italic opacity-80 mb-12">
                   <p>"No matter what happens… no matter how hard life gets… I will always choose you."</p>
                   <p className="text-rose-gold-gradient font-bold text-xl">From Zero… To Software Engineer… To Your Forever Husband.</p>
                </div>
                <p className="text-sm opacity-50 tracking-[0.4em] uppercase">Made With Infinite Love By Saif ❤️</p>
             </footer>
          </div>
        )}
      </main>
    </div>
  );
};

export default App;
