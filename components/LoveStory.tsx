
import React from 'react';

export const LoveStory: React.FC = () => {
  return (
    <div className="py-20 px-6 max-w-5xl mx-auto">
      <h2 className="text-5xl md:text-8xl font-cursive rose-gold-gradient text-center mb-10 glow-text">
        From Zero To Forever 💖
      </h2>
      <p className="text-center text-pink-200 font-serif italic mb-20 opacity-70">The Story of a Boy Transformed by Love</p>
      
      <div className="space-y-32 relative">
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-pink-500/30 to-transparent -translate-x-1/2 hidden md:block" />

        <StoryNode 
          title="The Village Boy (8th Class)"
          text="He was just an ordinary boy from a small village. He had no confidence, no recognition, and no big dreams. People didn't really notice him. But in 8th class, he saw Fiza, and his world stood still."
          align="left"
          icon="🏘️"
        />

        <StoryNode 
          title="The Power of Love"
          text="That love changed everything. He didn't just fall in love; he found a reason to become someone. He started dreaming, improving his habits, changing his mindset, and refining his personality day by day."
          align="right"
          icon="✨"
        />

        <StoryNode 
          title="The Transformation"
          text="He worked hard day and night, fueled by the thought of being worthy of her. People who knew the old Saif can't recognize him now. They ask, 'Is this the same boy?' He transformed from zero into a man of vision."
          align="left"
          icon="🚀"
        />

        <StoryNode 
          title="Today's Software Engineer"
          text="Today, he is a confident Software Engineer, respected and ambitious. He is one of the best in his village. And the only reason behind this miraculous journey... was Fiza. He was zero, but her love made him a hero."
          align="right"
          icon="💻"
        />

        <StoryNode 
          title="The Vulnerable Truth"
          text="He admits he is not perfect. He has made mistakes. But his heart beats only for you. When you say 'maybe our marriage won't happen,' he loses his sleep, his breath, and his peace. Please never say that again."
          align="left"
          icon="🥺"
        />

        <StoryNode 
          title="Our Eternal Promise"
          text="He is your Saif. He will never argue to hurt you. He will always choose you. Whatever you say, he will do. He just wants to build a life, succeed, and grow old with his queen, Fiza."
          align="right"
          icon="💍"
          isLast
        />
      </div>

      <div className="mt-40 text-center glass-card p-12 rounded-[3rem] border-pink-500/20">
        <h3 className="text-4xl font-cursive text-pink-300 mb-6">A Final Word from My Heart</h3>
        <p className="text-xl md:text-2xl font-serif text-white italic leading-relaxed">
          "I am not perfect, but I am yours. I have changed my world for you, and I would do it a thousand times over. Forgive my mistakes, and let's win this life together. Our couple is the best—we are real."
        </p>
      </div>
    </div>
  );
};

interface StoryNodeProps {
  title: string;
  text: string;
  align: 'left' | 'right';
  icon: string;
  isLast?: boolean;
}

const StoryNode: React.FC<StoryNodeProps> = ({ title, text, align, icon, isLast }) => {
  return (
    <div className={`flex flex-col md:flex-row items-center justify-between w-full ${align === 'right' ? 'md:flex-row-reverse' : ''}`}>
      <div className="md:w-[45%] mb-8 md:mb-0 transform transition-all hover:scale-105 duration-500">
        <div className="glass-card p-8 rounded-[2rem] border-l-4 border-l-pink-500 shadow-2xl">
          <div className="text-4xl mb-4">{icon}</div>
          <h3 className="text-2xl font-serif text-pink-300 mb-4 glow-text">{title}</h3>
          <p className="text-pink-100 font-serif leading-relaxed italic opacity-90 text-lg">{text}</p>
        </div>
      </div>
      
      <div className="relative z-10 flex items-center justify-center w-16 h-16 rounded-full glass-card border-2 border-pink-500/50 text-2xl shadow-[0_0_20px_rgba(255,182,197,0.3)] bg-pink-950">
        {isLast ? '💍' : '💫'}
      </div>
      
      <div className="hidden md:block md:w-[45%]" />
    </div>
  );
};
