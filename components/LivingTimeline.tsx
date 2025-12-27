
import React, { useEffect, useState } from 'react';
import { TIMELINE_MARKERS } from '../constants';

const LivingTimeline: React.FC = () => {
  const [scrollPos, setScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPos(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 opacity-20">
      {/* Horizontal Ruler Top */}
      <div className="absolute top-0 left-0 w-full h-12 border-b border-white/10 flex items-end px-4 mono text-[10px] overflow-hidden">
        <div 
          className="flex gap-20 transition-transform duration-100 ease-out"
          style={{ transform: `translateX(${-scrollPos * 0.2}px)` }}
        >
          {Array.from({ length: 50 }).map((_, i) => (
            <div key={i} className="flex flex-col items-center flex-shrink-0">
              <span className="mb-1 text-white/40">{TIMELINE_MARKERS[i % TIMELINE_MARKERS.length]}</span>
              <div className="w-[1px] h-3 bg-white/20"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Grid Lines */}
      <div className="absolute inset-0 flex">
        {Array.from({ length: 12 }).map((_, i) => (
          <div 
            key={i} 
            className="flex-1 border-r border-white/5 h-full transition-all duration-1000"
            style={{ 
              transform: `translateY(${Math.sin(scrollPos * 0.001 + i) * 10}px)`,
              opacity: 0.3 + Math.sin(scrollPos * 0.002 + i) * 0.2
            }}
          ></div>
        ))}
      </div>

      {/* Vertical Side Info */}
      <div className="absolute top-1/2 -left-12 -rotate-90 origin-left opacity-30 pointer-events-none">
        <span className="mono text-sm tracking-widest uppercase">Chronos_Sequence_Main_v04.prproj</span>
      </div>
    </div>
  );
};

export default LivingTimeline;
