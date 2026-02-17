
import React from 'react';

const dreams = [
  "Building our own little sanctuary filled with love and peace. 🏡",
  "Traveling the world, exploring every corner as best friends. ✈️",
  "Growing old together, sharing tea and memories in our balcony. ☕",
  "Seeing our successes celebrated as a single team. 🏆",
  "Raising a family with the same values we cherish today. ❤️",
];

export const FutureDreams: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  return (
    <div className="min-h-screen py-24 flex flex-col items-center justify-center px-4">
      <div className="glass-card p-10 md:p-24 rounded-[4rem] max-w-5xl w-full text-center relative overflow-hidden border-pink-500/10">
        <h2 className="text-5xl md:text-8xl font-cursive rose-gold-gradient mb-12 glow-text">Our Future Dreams</h2>
        
        <div className="space-y-10 mb-16">
          {dreams.map((dream, i) => (
            <div key={i} className="animate-in fade-in slide-in-from-left duration-1000" style={{ animationDelay: `${i * 300}ms` }}>
              <p className="text-2xl md:text-3xl font-serif text-pink-100 italic flex items-center justify-center gap-4">
                <span className="text-pink-500 text-sm">★</span> {dream}
              </p>
            </div>
          ))}
        </div>

        <button
          onClick={onComplete}
          className="btn-luxury px-16 py-6 rounded-full text-white font-serif text-2xl animate-pulse"
        >
          Let's Make Them Real... 💕
        </button>
        
        <div className="absolute top-0 right-0 w-64 h-64 bg-pink-500/5 blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
      </div>
    </div>
  );
};
