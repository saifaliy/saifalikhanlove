
import React, { useState } from 'react';

interface QuizSectionProps {
  onComplete: () => void;
}

interface Step {
  question: string;
  yesText: string;
  noText: string;
  onNoMessage?: string;
  onYesMessage?: string;
  isRunAway?: boolean;
}

const steps: Step[] = [
  {
    question: "Do you know I changed my entire life just for you? 💖",
    yesText: "YES",
    noText: "NO",
    onNoMessage: "Then let me tell you everything tonight ❤️"
  },
  {
    question: "Do you remember 8th class… when a simple village boy fell in love? 🌸",
    yesText: "YES",
    noText: "NO",
    onNoMessage: "That was the day my destiny started changing 💫"
  },
  {
    question: "Do you think that boy is still the same ordinary boy? 🥺",
    yesText: "YES",
    noText: "NO",
    onYesMessage: "I've tried so hard to grow for you ❤️",
  },
  {
    question: "Do you know why I became a Software Engineer today? 💻✨",
    yesText: "YES",
    noText: "NO",
    onNoMessage: "Because I wanted to be worthy of you, Fiza ❤️"
  },
  {
    question: "Will you promise to never leave me, no matter what? 💍",
    yesText: "YES",
    noText: "NO",
    isRunAway: true
  }
];

export const QuizSection: React.FC<QuizSectionProps> = ({ onComplete }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [message, setMessage] = useState("");
  const [noPos, setNoPos] = useState({ x: 0, y: 0 });

  const step = steps[currentStep];

  const handleNext = () => {
    setMessage("");
    setNoPos({ x: 0, y: 0 });
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      onComplete();
    }
  };

  const handleYes = () => {
    if (step.onYesMessage) {
      setMessage(step.onYesMessage);
      setTimeout(handleNext, 1500);
    } else {
      handleNext();
    }
  };

  const handleNo = () => {
    if (step.isRunAway) {
      const randomX = (Math.random() - 0.5) * 200;
      const randomY = (Math.random() - 0.5) * 200;
      setNoPos({ x: randomX, y: randomY });
      return;
    }

    if (step.onNoMessage) {
      setMessage(step.onNoMessage);
      setTimeout(handleNext, 2000);
    } else {
      handleNext();
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="glass-card p-8 md:p-16 rounded-[2.5rem] max-w-xl w-full text-center relative overflow-hidden transition-all duration-500">
        <div className="absolute top-0 left-0 w-full h-1 bg-pink-900/30">
          <div 
            className="h-full bg-pink-500 transition-all duration-500" 
            style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
          />
        </div>

        <span className="text-pink-400 font-sans text-xs tracking-widest uppercase mb-6 block opacity-70">Step {currentStep + 1} of 5</span>
        
        <h2 className="text-2xl md:text-4xl font-serif text-white mb-12 leading-tight min-h-[120px] flex items-center justify-center italic">
          "{step.question}"
        </h2>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <button
            onClick={handleYes}
            className="btn-luxury px-10 py-4 rounded-full text-white font-serif text-xl shadow-xl min-w-[160px]"
          >
            {step.yesText} 💕
          </button>
          
          <button
            onClick={handleNo}
            style={{ transform: `translate(${noPos.x}px, ${noPos.y}px)` }}
            className={`bg-black/40 hover:bg-black/60 px-10 py-3 rounded-full text-pink-300 font-serif border border-pink-900/30 transition-transform duration-100 min-w-[140px] ${step.isRunAway ? 'cursor-not-allowed' : ''}`}
          >
            {step.noText} 😔
          </button>
        </div>

        {message && (
          <div className="mt-8 animate-in fade-in slide-in-from-bottom-4">
             <p className="text-pink-400 font-cursive text-3xl glow-text">{message}</p>
          </div>
        )}
      </div>
    </div>
  );
};
