
import React, { useEffect, useState } from 'react';
import { Project, GeminiStory } from '../types';
import { getProjectStory } from '../services/geminiService';
import { Play, Maximize2, Layers, AudioLines } from 'lucide-react';

interface Props {
  project: Project;
  index: number;
}

const ProjectTrack: React.FC<Props> = ({ project, index }) => {
  const [story, setStory] = useState<GeminiStory | null>(null);
  const [loading, setLoading] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    getProjectStory(project).then((data) => {
      setStory(data);
      setLoading(false);
    });
  }, [project]);

  return (
    <div 
      className="relative w-full min-h-[60vh] flex flex-col md:flex-row items-center gap-12 py-20 px-6 md:px-20 group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background Track Number */}
      <div className="absolute left-4 md:left-10 top-1/2 -translate-y-1/2 mono text-8xl md:text-[12rem] font-bold text-white/5 select-none z-[-1]">
        V{index + 1}
      </div>

      {/* Preview Section */}
      <div className="relative w-full md:w-3/5 aspect-video bg-neutral-900 overflow-hidden rounded-sm border border-white/10 shadow-2xl transition-transform duration-700 hover:scale-[1.02]">
        <img 
          src={project.thumbnail} 
          alt={project.title}
          className={`w-full h-full object-cover transition-all duration-[2s] ${isHovered ? 'scale-110 filter brightness-110' : 'scale-100 filter grayscale'}`}
        />
        
        {/* Playback Overlay */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4 z-20">
           {project.videoUrl ? (
             <a 
               href={project.videoUrl} 
               target="_blank" 
               rel="noopener noreferrer"
               className="absolute inset-0 flex items-center justify-center pointer-events-auto"
             >
                <div className="bg-blue-600 hover:bg-blue-500 text-white p-4 rounded-full transition-transform hover:scale-110 flex items-center justify-center shadow-lg">
                   <Play fill="white" size={24} />
                </div>
             </a>
           ) : (
             <button className="bg-blue-600 hover:bg-blue-500 text-white p-4 rounded-full transition-transform hover:scale-110">
                <Play fill="white" size={24} />
             </button>
           )}
           <button className="absolute bottom-4 right-4 bg-white/20 hover:bg-white/30 backdrop-blur-md text-white p-3 rounded-full transition-transform hover:scale-110 z-30 pointer-events-auto">
              <Maximize2 size={18} />
           </button>
        </div>

        {/* Timecode Box */}
        <div className="absolute bottom-4 left-4 mono text-xs bg-black/60 backdrop-blur-sm border border-white/10 px-2 py-1 text-blue-400 z-10">
          {project.duration} / 00:00:00:00
        </div>
      </div>

      {/* Info Section */}
      <div className="w-full md:w-2/5 flex flex-col justify-center space-y-6">
        <div className="space-y-2">
          <p className="mono text-xs text-blue-500 font-bold uppercase tracking-widest">{project.category}</p>
          <h2 className="text-4xl md:text-6xl font-bold kinetic-shadow leading-none">{project.title}</h2>
          <p className="mono text-sm text-white/40 italic">Client: {project.client}</p>
        </div>

        {loading ? (
          <div className="h-20 flex items-center gap-2">
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"></div>
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce [animation-delay:-.3s]"></div>
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce [animation-delay:-.5s]"></div>
            <span className="mono text-[10px] uppercase opacity-50 ml-2 tracking-widest">Generating Insight...</span>
          </div>
        ) : (
          <div className="space-y-4 animate-in fade-in slide-in-from-right duration-700">
            <p className="text-lg text-white/80 border-l-2 border-blue-500 pl-4 py-1 italic">
              "{story?.hook}"
            </p>
            <p className="text-white/60 text-sm leading-relaxed">
              {story?.editorNote}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map(tag => (
                <span key={tag} className="mono text-[10px] bg-white/5 border border-white/10 px-2 py-1 rounded">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Action Controls */}
        <div className="flex gap-6 pt-4">
          <div className="flex flex-col items-center gap-1 opacity-40 hover:opacity-100 transition-opacity cursor-pointer group/icon">
            <Layers size={18} className="group-hover/icon:text-blue-500" />
            <span className="mono text-[8px] uppercase">Composition</span>
          </div>
          <div className="flex flex-col items-center gap-1 opacity-40 hover:opacity-100 transition-opacity cursor-pointer group/icon">
            <AudioLines size={18} className="group-hover/icon:text-blue-500" />
            <span className="mono text-[8px] uppercase">Mixer</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectTrack;
