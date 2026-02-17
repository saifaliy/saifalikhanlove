
import React, { useState, useEffect } from 'react';

interface HeroProps {
  onProceed: () => void;
}

export const HeroSection: React.FC<HeroProps> = ({ onProceed }) => {
  const [showCard, setShowCard] = useState(false);
  const [shake, setShake] = useState(false);
  const [msg, setMsg] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => setShowCard(true), 1200);
    return () => clearTimeout(timer);
  }, []);

  const handleYes = () => {
    setShake(true);
    setMsg("Aww meri jaan… itna bhi gussa theek nahi hota ❤️");
    setTimeout(() => setShake(false), 500);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center">
      <div className="mb-20 animate-in fade-in duration-1000 slide-in-from-top-12">
        <h1 className="text-8xl md:text-[12rem] font-cursive rose-gold-gradient glow-text mb-6 leading-none select-none">
          Saif & Fiza
        </h1>
        <div className="h-0.5 w-48 bg-gradient-to-r from-transparent via-pink-500 to-transparent mx-auto mb-8"></div>
        <p className="text-pink-200 font-serif text-xl md:text-3xl tracking-[0.4em] uppercase opacity-70 italic">
          "The Union of Two Souls"
        </p>
      </div>

      {showCard && (
        <div className={`preserve-3d card-3d glass-card p-10 md:p-20 rounded-[4rem] max-w-2xl w-full transform transition-all duration-1000 animate-in zoom-in-95 slide-in-from-bottom-20 ${shake ? 'animate-bounce' : ''}`}>
          <div className="text-7xl mb-10 animate-float">🥺❤️</div>
          <h2 className="text-4xl md:text-5xl font-serif text-white mb-10 leading-tight italic">
            Are you still angry, meri jaan?
          </h2>
          
          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
            <button
              onClick={handleYes}
              className="bg-black/30 hover:bg-black/50 px-12 py-5 rounded-full text-pink-200 font-serif border border-pink-900/40 transition-all min-w-[160px] text-xl"
            >
              YES 😔
            </button>
            <button
              onClick={onProceed}
              className="btn-luxury px-16 py-5 rounded-full text-white font-serif text-2xl shadow-2xl relative overflow-hidden min-w-[220px]"
            >
              <span className="relative z-10">NO 💕</span>
            </button>
          </div>
          
          {msg && (
            <p className="mt-10 text-pink-400 font-cursive text-4xl animate-pulse glow-text">{msg}</p>
          )}
        </div>
      )}
    </div>
  );
};
