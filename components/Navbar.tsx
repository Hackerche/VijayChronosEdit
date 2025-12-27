
import React from 'react';
import { Monitor, Cpu, History, Mail, User } from 'lucide-react';

const Navbar: React.FC = () => {
  const email = "chhimpav835@gmail.com";
  const subject = encodeURIComponent("Project Inquiry - Video Editing");
  const body = encodeURIComponent("Hi! I saw your portfolio and would like to discuss a video project with you.");
  const mailtoUrl = `mailto:${email}?subject=${subject}&body=${body}`;

  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-6 py-6 flex justify-between items-center pointer-events-none">
      <div className="pointer-events-auto">
        <h1 className="text-2xl font-black tracking-tighter kinetic-shadow">
          CHRONOS<span className="text-blue-500">EDIT</span>
        </h1>
      </div>

      <div className="hidden md:flex gap-8 pointer-events-auto bg-black/40 backdrop-blur-xl border border-white/10 px-6 py-3 rounded-full">
        <a href="#about" className="mono text-[11px] uppercase tracking-widest hover:text-blue-400 transition-colors flex items-center gap-2">
          <User size={14} /> Profile
        </a>
        <a href="#work" className="mono text-[11px] uppercase tracking-widest hover:text-blue-400 transition-colors flex items-center gap-2">
          <Monitor size={14} /> Projects
        </a>
        <a href="#pipeline" className="mono text-[11px] uppercase tracking-widest hover:text-blue-400 transition-colors flex items-center gap-2">
          <Cpu size={14} /> Pipeline
        </a>
        <a href="#contact" className="mono text-[11px] uppercase tracking-widest hover:text-blue-400 transition-colors flex items-center gap-2">
          <Mail size={14} /> Contact
        </a>
      </div>

      <a 
        href={mailtoUrl}
        className="pointer-events-auto bg-blue-600 px-4 py-2 rounded-sm text-[10px] mono font-bold hover:bg-blue-500 cursor-pointer transition-colors shadow-[0_0_20px_rgba(37,99,235,0.3)] no-underline text-white block"
      >
        HIRE ME
      </a>
    </nav>
  );
};

export default Navbar;
