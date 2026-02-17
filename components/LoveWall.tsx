
import React, { useState } from 'react';

const reasons = [
  "Your kindness 🌸",
  "Your beautiful eyes ✨",
  "The way you care 💓",
  "Your pure soul 🙏",
  "Your magical smile 😊",
  "The peace you bring 🌊",
  "Our future together 💍",
  "Your strength 💪",
  "Your lovely voice 🎶",
  "How you complete me 🧩",
  "Your intelligence 🧠",
  "You're my destiny 🌙"
];

export const LoveWall: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [revealed, setRevealed] = useState<number[]>([]);

  const toggleReason = (idx: number) => {
    if (!revealed.includes(idx)) setRevealed([...revealed, idx]);
  };

  return (
    <div className="min-h-screen py-20 px-4 flex flex-col items-center">
      <h2 className="text-5xl md:text-7xl font-cursive rose-gold-gradient text-center mb-6 glow-text">Why I Love You, Fiza</h2>
      <p className="text-pink-200 font-serif italic text-center mb-16 opacity-80">Tap each heart to reveal a reason...</p>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl w-full mb-16">
        {reasons.map((reason, i) => (
          <div 
            key={i}
            onClick={() => toggleReason(i)}
            className={`h-32 md:h-40 glass-card rounded-2xl flex items-center justify-center p-4 text-center cursor-pointer transition-all duration-500 transform ${revealed.includes(i) ? 'rotate-0 bg-pink-900/30' : 'hover:scale-105 active:scale-95'}`}
          >
            {revealed.includes(i) ? (
              <span className="text-xl md:text-2xl font-serif text-white animate-in zoom-in">{reason}</span>
            ) : (
              <span className="text-4xl animate-heart-beat">❤️</span>
            )}
          </div>
        ))}
      </div>

      {revealed.length >= reasons.length && (
        <button
          onClick={onComplete}
          className="btn-luxury px-12 py-4 rounded-full text-white font-serif text-xl animate-bounce shadow-2xl"
        >
          And a Million More Reasons... 💕
        </button>
      )}
    </div>
  );
};
