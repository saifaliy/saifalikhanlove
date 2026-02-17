
import React, { useState } from 'react';

const promises = [
  "I promise to be your biggest strength and your softest place to land. ❤️",
  "I promise to love you more with every sunrise, even on the difficult days. 🌅",
  "I promise to listen to your silence and understand your unsaid words. 🤫",
  "I promise to build a home with you filled with laughter, prayers, and peace. 🏡",
  "I promise to grow old with you, hand in hand, heart to heart. 👵👴",
  "I promise that my love for you will always be as pure as the first day we met. ✨",
  "I promise to protect your smile like it's the most precious treasure on earth. 💎"
];

export const PromiseSection: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [current, setCurrent] = useState(0);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-20 px-6">
      <h2 className="text-5xl md:text-7xl font-cursive rose-gold-gradient mb-16 text-center glow-text">My 7 Promises To My Fiancée 💍</h2>
      
      <div className="glass-card p-10 md:p-20 rounded-[3rem] max-w-3xl w-full text-center relative">
        <div className="absolute top-8 left-1/2 -translate-x-1/2 text-pink-400 font-serif text-sm tracking-widest uppercase">
          Vow {current + 1} of 7
        </div>
        
        <div className="py-12 animate-in fade-in zoom-in duration-700" key={current}>
          <p className="text-3xl md:text-5xl font-serif text-white italic leading-relaxed">
            "{promises[current]}"
          </p>
        </div>

        <button
          onClick={() => {
            if (current < promises.length - 1) setCurrent(current + 1);
            else onComplete();
          }}
          className="btn-luxury px-12 py-4 rounded-full text-white font-serif text-xl"
        >
          {current === promises.length - 1 ? "I Promise Forever ❤️" : "Next Vow 🌹"}
        </button>
      </div>
    </div>
  );
};
