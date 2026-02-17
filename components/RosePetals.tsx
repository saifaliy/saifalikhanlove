
import React, { useMemo } from 'react';

export const RosePetals: React.FC = () => {
  const petals = useMemo(() => {
    return Array.from({ length: 15 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      size: `${Math.random() * 15 + 10}px`,
      duration: `${Math.random() * 20 + 15}s`,
      delay: `${Math.random() * 5}s`,
    }));
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {petals.map((p) => (
        <div
          key={p.id}
          className="absolute text-red-400 opacity-20"
          style={{
            left: p.left,
            top: '-20px',
            fontSize: p.size,
            animation: `fall ${p.duration} linear infinite`,
            animationDelay: p.delay,
          }}
        >
          🌸
        </div>
      ))}
      <style>{`
        @keyframes fall {
          0% { transform: translateY(0) rotate(0deg); opacity: 0; }
          10% { opacity: 0.3; }
          90% { opacity: 0.3; }
          100% { transform: translateY(110vh) rotate(720deg); opacity: 0; }
        }
      `}</style>
    </div>
  );
};
