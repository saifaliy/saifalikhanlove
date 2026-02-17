
import React, { useEffect, useRef } from 'react';

interface MusicPlayerProps {
  isPlaying: boolean;
  togglePlay: () => void;
}

export const MusicPlayer: React.FC<MusicPlayerProps> = ({ isPlaying, togglePlay }) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // High-quality romantic Indian instrumental piano medley
  const AUDIO_URL = "https://cdn.pixabay.com/audio/2023/11/01/audio_a16d860d70.mp3"; // Soulful Piano Journey

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.5;
      if (isPlaying) {
        const playPromise = audioRef.current.play();
        if (playPromise !== undefined) {
          playPromise.catch(() => console.log("User interaction required for audio"));
        }
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying]);

  return (
    <div className="fixed top-6 right-6 z-[1000] flex items-center gap-4 group">
      <div className="hidden md:flex flex-col items-end opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <span className="text-pink-300 font-serif text-xs tracking-widest uppercase">Saif & Fiza</span>
        <span className="text-white text-sm font-serif italic">Our Romantic Melody... 🎶</span>
      </div>
      <audio ref={audioRef} loop src={AUDIO_URL} />
      <button 
        onClick={togglePlay}
        className="w-16 h-16 rounded-full glass-card flex items-center justify-center text-white shadow-3xl transition-all hover:scale-110 active:scale-90 border-pink-500/50 hover:bg-pink-900/30"
      >
        {isPlaying ? (
          <div className="flex gap-1 items-end h-6">
            <div className="w-1 bg-pink-400 animate-[bar_1s_infinite_0.1s]"></div>
            <div className="w-1 bg-pink-300 animate-[bar_1s_infinite_0.3s]"></div>
            <div className="w-1 bg-pink-500 animate-[bar_1s_infinite_0.5s]"></div>
          </div>
        ) : (
          <span className="text-2xl ml-1">▶️</span>
        )}
      </button>
      <style>{`
        @keyframes bar {
          0%, 100% { height: 10px; }
          50% { height: 24px; }
        }
      `}</style>
    </div>
  );
};
