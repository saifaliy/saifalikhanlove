
import React, { useMemo } from 'react';

export const FloatingHearts: React.FC = () => {
  const hearts = useMemo(() => {
    return Array.from({ length: 25 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      size: `${Math.random() * 20 + 10}px`,
      duration: `${Math.random() * 15 + 10}s`,
      delay: `${Math.random() * 10}s`,
    }));
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {hearts.map((h) => (
        <span
          key={h.id}
          className="floating-heart"
          style={{
            '--left': h.left,
            '--size': h.size,
            '--duration': h.duration,
            animationDelay: h.delay,
          } as React.CSSProperties}
        >
          ❤️
        </span>
      ))}
    </div>
  );
};
