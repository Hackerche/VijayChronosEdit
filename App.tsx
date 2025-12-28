
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import LivingTimeline from './components/LivingTimeline';
import ProjectTrack from './components/ProjectTrack';
import AboutSection from './components/AboutSection';
import { PROJECTS } from './constants';
import { Instagram } from 'lucide-react';

const App: React.FC = () => {
  const email = "chhimpav835@gmail.com";
  const subject = encodeURIComponent("Let's Collaborate");
  const body = encodeURIComponent("Hello! I'm interested in your video editing services.");
  const mailtoUrl = `mailto:${email}?subject=${subject}&body=${body}`;
  const instagramUrl = "https://www.instagram.com/vijay.o1/";

  return (
    <div className="relative min-h-screen selection:bg-blue-500 selection:text-white">
      {/* Visual background layers */}
      <div className="scanline"></div>
      <LivingTimeline />

      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* About Section - The Editor's Profile */}
      <AboutSection />

      {/* Projects Showcase (Timeline Tracks) */}
      <section id="work" className="relative z-10 pb-40 pt-10">
        <div className="container mx-auto px-6 mb-16">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-6 h-6 bg-blue-600/20 border border-blue-500 flex items-center justify-center">
               <div className="w-1.5 h-1.5 bg-blue-500"></div>
            </div>
            <h2 className="mono text-sm font-bold uppercase tracking-widest">Recent_Edits.capcut</h2>
          </div>
          <div className="w-full h-[1px] bg-gradient-to-r from-blue-500/50 to-transparent"></div>
        </div>

        <div className="space-y-32">
          {PROJECTS.map((project, idx) => (
            <ProjectTrack key={project.id} project={project} index={idx} />
          ))}
        </div>
      </section>

      {/* Simple Philosophy Section */}
      <section id="pipeline" className="relative z-10 py-32 border-t border-white/5 bg-black/40">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-black uppercase tracking-tighter leading-none">Why I Love<br/><span className="text-blue-500">Editing</span></h2>
            <p className="text-white/60 leading-relaxed text-base">
              I believe that great videos don't need a huge budget. With just a smartphone and the right creative touch, you can tell stories that reach millions. My goal is to make every second count.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mono text-[9px] uppercase tracking-widest">
              <div className="p-3 border border-white/5 bg-white/5">
                <h4 className="text-blue-400 mb-1">Rhythm</h4>
                Cutting to the beat of trending sounds.
              </div>
              <div className="p-3 border border-white/5 bg-white/5">
                <h4 className="text-blue-400 mb-1">Impact</h4>
                Text and effects that stand out.
              </div>
            </div>
          </div>
          <div className="relative hidden md:block">
             <div className="aspect-video bg-blue-600/5 border border-white/10 rounded flex items-center justify-center">
                <div className="text-center space-y-2">
                   <div className="mono text-[10px] text-blue-500 uppercase tracking-widest">Project_Export_Done</div>
                   <div className="text-2xl font-black italic">READY TO POST</div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="relative z-10 py-20 px-6 border-t border-white/5 text-center">
        <div className="container mx-auto">
          <h3 className="text-3xl md:text-5xl font-black mb-8 uppercase tracking-tighter">Let's Create Together</h3>
          <div className="flex flex-col md:flex-row items-center justify-center gap-12 mb-20">
            <a href={mailtoUrl} className="text-xl md:text-3xl hover:text-blue-500 transition-colors underline underline-offset-8 decoration-1 decoration-white/20 hover:decoration-blue-500">
              {email}
            </a>
          </div>
          <div className="flex justify-between items-center pt-10 border-t border-white/10">
            <p className="mono text-[9px] opacity-40 uppercase">&copy; 2024 Junior Editor Portfolio.</p>
            <div className="flex items-center gap-4 mono text-[10px] uppercase font-bold text-blue-500">
              <Instagram size={16} />
              <a href={instagramUrl} target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">Instagram</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
