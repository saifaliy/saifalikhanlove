
import React, { useEffect, useRef } from 'react';

interface MusicPlayerProps {
  isPlaying: boolean;
  togglePlay: () => void;
}

export const MusicPlayer: React.FC<MusicPlayerProps> = ({ isPlaying, togglePlay }) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Link to a beautiful romantic instrumental piano medley of Bollywood themes
  const AUDIO_URL = "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3"; // Placeholder for an even more romantic Indian instrumental

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        const playPromise = audioRef.current.play();
        if (playPromise !== undefined) {
          playPromise.catch(e => console.log("Playback interaction required"));
        }
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying]);

  return (
    <div className="fixed top-6 right-6 z-[100] flex items-center gap-3">
      <div className="hidden sm:block text-pink-300 font-serif text-sm italic opacity-70 bg-black/40 px-3 py-1 rounded-full backdrop-blur-sm">
        {isPlaying ? "Our Song Is Playing... 🎶" : "Music Paused"}
      </div>
      <audio ref={audioRef} loop src={AUDIO_URL} />
      <button 
        onClick={togglePlay}
        className="w-14 h-14 rounded-full glass-card flex items-center justify-center text-white shadow-2xl transition-all hover:scale-110 active:scale-90 border-pink-500/50 hover:bg-pink-900/40"
      >
        {isPlaying ? (
          <span className="text-2xl">⏸️</span>
        ) : (
          <span className="text-2xl">▶️</span>
        )}
      </button>
    </div>
  );
};
