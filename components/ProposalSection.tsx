
import React, { useState } from 'react';

export const ProposalSection: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [accepted, setAccepted] = useState(false);

  if (accepted) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center animate-in fade-in duration-1000">
        <div className="text-9xl mb-12 animate-heart-beat">💍</div>
        <h1 className="text-6xl md:text-[8rem] font-cursive rose-gold-gradient glow-text mb-8">Yes, To Eternity!</h1>
        <p className="text-white font-serif text-2xl md:text-3xl max-w-4xl mb-12 leading-relaxed italic">
          "Fiza, no matter what happens, no matter how hard life gets... I will always choose you. From the village boy who had nothing, to the Software Engineer I am today, I am yours forever."
        </p>
        <button 
          onClick={onComplete}
          className="btn-luxury px-16 py-5 rounded-full text-white font-serif text-2xl animate-pulse shadow-[0_0_30px_rgba(183,110,121,0.5)]"
        >
          See Our Eternal Story ✨
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-20 px-4 flex flex-col items-center justify-center">
      <div className="max-w-5xl w-full text-center space-y-12">
        <h2 className="text-6xl md:text-[7rem] font-cursive rose-gold-gradient glow-text mb-4">Fiza, You Are My Everything ❤️</h2>
        
        <div className="glass-card p-8 md:p-20 rounded-[4rem] text-left relative overflow-hidden shadow-2xl border-pink-500/30">
          <div className="absolute top-0 right-0 w-96 h-96 bg-pink-500/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-[100px]"></div>
          
          <div className="space-y-8 text-pink-50 font-serif text-xl md:text-2xl leading-relaxed italic relative z-10">
            <p>
              "You are my peace, my strength, my motivation, and my greatest dream. You are the reason I transformed myself from an ordinary village boy into a man who can now stand tall as a Software Engineer."
            </p>
            <p>
              "I know I am not perfect. I have made mistakes, but my love for you is the purest thing in my life. Every breath I take feels heavy when I think of a life without you. When you mention that our marriage might not happen, it feels like my soul is leaving my body."
            </p>
            <p>
              "I promise to never argue to hurt you. I will never go against your wishes. I want to build a world where your smile is my only priority. Succeeding, winning, and growing old... it only matters if it's with you."
            </p>
            <p className="text-pink-300 font-bold glow-text text-2xl md:text-3xl mt-12 block text-center">
              "Fiza, will you be the queen of my home and the heartbeat of my soul forever?"
            </p>
          </div>

          <div className="mt-20 flex flex-col items-center">
            <div className="mb-10 text-8xl animate-bounce">💍</div>
            <h3 className="text-4xl md:text-7xl font-cursive rose-gold-gradient mb-12 text-center">
              Fiza, Will You Marry Me?
            </h3>
            
            <div className="flex flex-col sm:flex-row gap-8 w-full max-w-2xl">
              <button
                onClick={() => setAccepted(true)}
                className="btn-luxury flex-1 py-6 rounded-full text-white font-serif text-2xl shadow-2xl transition-all hover:scale-110 active:scale-95"
              >
                YES, MY LIFE 💕
              </button>
              <button
                onClick={() => setAccepted(true)}
                className="bg-white/5 hover:bg-white/10 border border-white/20 flex-1 py-6 rounded-full text-white font-serif text-2xl transition-all hover:scale-110"
              >
                FOREVER YES 💍
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
