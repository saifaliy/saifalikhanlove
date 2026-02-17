
import React from 'react';

const moments = [
  { icon: "🌅", title: "Morning Dreams", desc: "Every dawn reminds me of your radiance." },
  { icon: "💻", title: "Shared Ambitions", desc: "You are the code to my success." },
  { icon: "🌸", title: "Soft Whispers", desc: "Our conversations are my favorite music." },
  { icon: "🛤️", title: "The Long Road", desc: "From the village to the city, hand in hand." },
];

export const GallerySection: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  return (
    <div className="min-h-screen py-24 flex flex-col items-center justify-center px-4">
      <h2 className="text-5xl md:text-8xl font-cursive rose-gold-gradient text-center mb-6 glow-text">A Glimpse into Our World</h2>
      <p className="text-pink-200 font-serif text-xl italic mb-16 opacity-70 text-center">Every moment with you is a masterpiece...</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl w-full mb-20">
        {moments.map((m, i) => (
          <div key={i} className="preserve-3d card-3d group">
            <div className="glass-card p-10 rounded-[3rem] text-center border-pink-500/20 transform transition-transform group-hover:translate-z-10 shadow-2xl h-full flex flex-col items-center justify-center">
              <div className="text-7xl mb-6 group-hover:scale-125 transition-transform duration-500">{m.icon}</div>
              <h3 className="text-2xl font-serif text-pink-300 mb-4">{m.title}</h3>
              <p className="text-pink-100/70 font-serif italic">{m.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={onComplete}
        className="btn-luxury px-16 py-5 rounded-full text-white font-serif text-2xl shadow-2xl"
      >
        Continue Our Journey ✨
      </button>
    </div>
  );
};
