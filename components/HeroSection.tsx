
import React, { useState, useEffect } from 'react';

interface HeroProps {
  onProceed: () => void;
}

export const HeroSection: React.FC<HeroProps> = ({ onProceed }) => {
  const [showCard, setShowCard] = useState(false);
  const [shake, setShake] = useState(false);
  const [msg, setMsg] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => setShowCard(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  const handleYes = () => {
    setShake(true);
    setMsg("Aww meri jaan… itna bhi gussa theek nahi hota ❤️");
    setTimeout(() => setShake(false), 500);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center">
      <div className="mb-16 animate-in fade-in duration-1000 slide-in-from-top-10">
        <h1 className="text-7xl md:text-[10rem] font-cursive rose-gold-gradient glow-text mb-4 leading-none">Saif & Fiza</h1>
        <div className="h-px w-32 bg-pink-500/50 mx-auto mb-6"></div>
        <p className="text-pink-300 font-serif text-xl md:text-2xl tracking-[0.3em] uppercase opacity-80">A Love That Changed Destiny</p>
      </div>

      {showCard && (
        <div className={`glass-card p-10 md:p-16 rounded-[3rem] max-w-2xl w-full transform transition-all duration-1000 animate-in zoom-in-95 slide-in-from-bottom-20 ${shake ? 'animate-bounce' : ''}`}>
          <div className="text-6xl mb-8">🥺❤️</div>
          <h2 className="text-3xl md:text-4xl font-serif text-white mb-8 leading-tight">
            Are you still angry, meri jaan?
          </h2>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button
              onClick={handleYes}
              className="bg-black/40 hover:bg-black/60 px-10 py-4 rounded-full text-pink-200 font-serif border border-pink-900/30 transition-all min-w-[140px]"
            >
              YES 😔
            </button>
            <button
              onClick={onProceed}
              className="btn-luxury px-14 py-4 rounded-full text-white font-serif text-2xl shadow-2xl group overflow-hidden relative min-w-[200px]"
            >
              <span className="relative z-10">NO 💕</span>
            </button>
          </div>
          
          {msg && (
            <p className="mt-8 text-pink-400 font-cursive text-3xl animate-pulse glow-text">{msg}</p>
          )}
        </div>
      )}
    </div>
  );
};
