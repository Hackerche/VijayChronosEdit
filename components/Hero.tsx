
import React, { useEffect, useState } from 'react';

const Hero: React.FC = () => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    let frameId: number;
    const animate = () => {
      setOffset(prev => prev + 0.5);
      frameId = requestAnimationFrame(animate);
    };
    animate();
    return () => cancelAnimationFrame(frameId);
  }, []);

  return (
    <section className="relative w-full h-[90vh] flex flex-col items-center justify-center overflow-hidden">
      {/* Background kinetic text */}
      <div className="absolute inset-0 flex flex-col justify-center pointer-events-none select-none overflow-hidden opacity-5">
        <div 
          className="whitespace-nowrap text-[15vw] font-black leading-none"
          style={{ transform: `translateX(${-offset % 100}%)` }}
        >
          CUT TREND REEL TIKTOK CAPCUT EDIT POST VIRAL CUT TREND REEL TIKTOK CAPCUT EDIT POST VIRAL
        </div>
        <div 
          className="whitespace-nowrap text-[15vw] font-black leading-none"
          style={{ transform: `translateX(${(offset * 0.8) % 100}%)` }}
        >
          MUSIC SYNC TEXT OVERLAY SMOOTH TRANSITION MUSIC SYNC TEXT OVERLAY SMOOTH TRANSITION
        </div>
      </div>

      <div className="relative z-10 text-center space-y-6 px-6">
        <div className="flex items-center justify-center gap-2 mono text-[10px] text-blue-400 tracking-[0.4em] uppercase mb-2">
          Content Creator & Editor
        </div>
        <h1 className="text-5xl md:text-8xl font-black leading-tight kinetic-shadow mb-4">
          MAKING VIDEOS<br />
          <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-400 font-serif">THAT TREND</span>
        </h1>
        <div className="flex flex-col items-center justify-center gap-6 pt-4">
          <p className="max-w-md text-white/50 text-sm leading-relaxed mono">
            Fresh perspective on video editing. Specializing in CapCut for short-form content that grabs attention in the first second.
          </p>
          <button className="group relative bg-blue-600 text-white font-bold py-3 px-8 rounded-sm overflow-hidden transition-all hover:bg-blue-500">
            <span className="relative z-10 uppercase tracking-widest text-xs">See My Work</span>
          </button>
        </div>
      </div>

      {/* Simplified Playhead */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30">
        <div className="w-[1px] h-12 bg-white"></div>
        <span className="mono text-[8px] uppercase tracking-widest">Scroll</span>
      </div>
    </section>
  );
};

export default Hero;
