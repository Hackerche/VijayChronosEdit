
import React from 'react';
import { Sparkles, Smartphone, Mic2 } from 'lucide-react';

const AboutSection: React.FC = () => {
  const editorImageUrl = "https://files.catbox.moe/q6rrtd.jpg";

  const stack = [
    { name: 'CapCut Desktop & Mobile', level: '100%', time: 'Expert' },
    { name: 'Adobe Premiere Pro', level: '60%', time: 'Learning' },
    { name: 'Canva Design', level: '85%', time: 'Intermediate' },
    { name: 'Color Grading (Mobile)', level: '75%', time: 'Skill' },
  ];

  const milestones = [
    { year: '2022', event: 'First Edit Posted', desc: 'Started making short clips for fun on TikTok.' },
    { year: '2023', event: 'CapCut Certification', desc: 'Mastered advanced keyframing and layering.' },
    { year: '2023', event: 'First Viral Hit', desc: 'A travel reel reached 100k+ views.' },
    { year: '2024', event: 'Freelance Journey', desc: 'Helping brands tell simple, effective stories.' },
  ];

  return (
    <section id="about" className="relative z-10 py-24 px-6 overflow-hidden">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          
          {/* Left: Simple Bio & Image */}
          <div className="lg:w-1/2 space-y-8">
            <div className="relative">
              <span className="mono text-xs text-blue-500 uppercase tracking-[0.3em] block mb-2">Editor_Profile</span>
              <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none kinetic-shadow">
                FRESH<br />EYES ON<br /><span className="text-blue-500">EVERY</span><br />FRAME
              </h2>
            </div>

            <div className="flex flex-col md:flex-row gap-8 items-center lg:items-start">
              <div className="relative group shrink-0">
                <div className="absolute -inset-1 bg-blue-500 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
                <div className="relative w-48 h-48 rounded-lg overflow-hidden border border-white/10 bg-neutral-900 shadow-xl">
                  <img 
                    src={editorImageUrl} 
                    alt="Editor Visual" 
                    className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 bg-blue-600 p-2 rounded-sm z-10 shadow-lg">
                  <Mic2 size={16} />
                </div>
              </div>

              <div className="space-y-6 text-white/70 text-base leading-relaxed">
                <p>
                  Hi! I'm a Junior Video Editor with a passion for creating high-energy content that people love to share. I specialize in <strong>CapCut</strong> to turn raw footage into viral-ready videos.
                </p>
                <p>
                  I believe that good editing shouldn't be complicated—it should be clear, fun, and fast. I focus on the basics: great timing, clean cuts, and the perfect music choice.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6 pt-4">
              <div className="flex flex-col gap-1">
                <span className="mono text-[10px] text-white/30 uppercase">Favorite Tool</span>
                <span className="mono text-sm flex items-center gap-2">
                  <Smartphone size={14} className="text-blue-500" /> CapCut Pro
                </span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="mono text-[10px] text-white/30 uppercase">Style</span>
                <span className="mono text-sm flex items-center gap-2">
                  <Sparkles size={14} className="text-blue-500" /> High Energy
                </span>
              </div>
            </div>
          </div>

          {/* Right: Skills & Path */}
          <div className="lg:w-1/2 space-y-12 w-full">
            
            {/* Simple Progress Bars */}
            <div className="space-y-4">
              <h3 className="mono text-xs uppercase tracking-widest text-white/40 border-b border-white/5 pb-2">My_Toolkit</h3>
              <div className="space-y-3">
                {stack.map((tool, i) => (
                  <div key={i} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="mono text-[11px] font-bold">{tool.name}</span>
                      <span className="mono text-[9px] text-blue-400">{tool.time}</span>
                    </div>
                    <div className="w-full h-[3px] bg-white/5 relative">
                      <div 
                        className="absolute h-full bg-blue-500" 
                        style={{ width: tool.level }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Simple Timeline */}
            <div className="space-y-4">
              <h3 className="mono text-xs uppercase tracking-widest text-white/40 border-b border-white/5 pb-2">Recent_Steps</h3>
              <div className="space-y-6">
                {milestones.map((m, i) => (
                  <div key={i} className="flex gap-4">
                    <span className="mono text-[10px] text-blue-500 font-bold min-w-[30px]">{m.year}</span>
                    <div className="space-y-1">
                      <h4 className="font-bold text-sm uppercase">{m.event}</h4>
                      <p className="text-white/40 text-xs">{m.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
