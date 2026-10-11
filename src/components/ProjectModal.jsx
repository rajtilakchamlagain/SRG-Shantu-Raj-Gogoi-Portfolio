import { useState } from 'react';
import { X, Play, FileText, CheckCircle2, Layers, Cpu, Wrench, Shield, ChevronRight } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 md:p-6 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-4xl h-[92vh] sm:h-auto sm:max-h-[90vh] bg-slate-900 border-t sm:border border-slate-700/80 rounded-t-3xl sm:rounded-2xl shadow-2xl overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* iOS / Mobile Sheet Drag Indicator */}
        <div className="w-12 h-1.5 bg-slate-700 rounded-full mx-auto my-2 sm:hidden shrink-0" />

        {/* Modal Top Navigation Bar */}
        <div className="px-5 sm:px-6 py-3.5 bg-slate-850 border-b border-slate-800 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2.5">
            <span className="px-2.5 py-0.5 rounded-md bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[11px] sm:text-xs font-mono font-medium">
              {project.category}
            </span>
            <span className="text-xs text-slate-400 font-mono hidden sm:inline">
              Project Case Dossier
            </span>
          </div>
          <button 
            onClick={onClose}
            className="p-1.5 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 active:scale-90 transition-all"
            aria-label="Close modal"
          >
            <X size={20} />
          </button>
        </div>

        {/* Modal Body - Scrollable */}
        <div className="overflow-y-auto p-5 sm:p-8 space-y-6 sm:space-y-8 flex-grow">
          
          {/* Header Title */}
          <div>
            <h2 className="text-xl sm:text-3xl font-extrabold text-white tracking-tight leading-snug">
              {project.title}
            </h2>
            <p className="text-xs sm:text-base text-blue-300 font-medium mt-1">
              {project.subtitle}
            </p>
          </div>

          {/* Media Player if video exists */}
          {project.video && (
            <div className="rounded-xl overflow-hidden bg-slate-950 border border-slate-800 aspect-video relative group">
              <video 
                src={project.video}
                controls
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              />
            </div>
          )}

          {/* Summary */}
          <div className="bg-slate-800/40 border border-slate-700/60 rounded-xl p-4 sm:p-5 text-xs sm:text-base text-slate-300 leading-relaxed">
            <h4 className="text-[11px] sm:text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold mb-1.5 sm:mb-2">
              Executive Abstract
            </h4>
            <p>{project.summary}</p>
          </div>

          {/* Technical Specifications Grid */}
          {project.specifications && (
            <div>
              <h3 className="text-xs sm:text-sm font-bold text-white uppercase tracking-wider font-mono mb-3 flex items-center gap-2">
                <Wrench size={15} className="text-blue-400" />
                Technical Specifications & Design Parameters
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
                {project.specifications.map((spec, i) => (
                  <div key={i} className="bg-slate-950/60 border border-slate-800/80 rounded-lg p-3 text-xs">
                    <span className="text-slate-400 block font-mono text-[11px]">{spec.key}</span>
                    <span className="text-slate-100 font-semibold text-xs sm:text-sm mt-0.5 block">{spec.val}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* In-depth Detailed Engineering Sections */}
          {project.detailedSections && (
            <div className="space-y-5 sm:space-y-6 pt-2 border-t border-slate-800">
              {project.detailedSections.map((sec, i) => (
                <div key={i} className="space-y-1.5 sm:space-y-2">
                  <h4 className="text-sm sm:text-base font-bold text-white flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                    {sec.heading}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pl-3 border-l border-slate-800">
                    {sec.content}
                  </p>
                </div>
              ))}
            </div>
          )}

          {/* Tech Tags */}
          <div className="pt-4 border-t border-slate-800 flex flex-wrap gap-1.5 sm:gap-2">
            {project.tags.map((tag) => (
              <span 
                key={tag}
                className="px-2.5 py-1 rounded-md bg-slate-800 text-slate-300 text-[11px] font-mono"
              >
                #{tag}
              </span>
            ))}
          </div>

        </div>

        {/* Modal Footer */}
        <div className="px-5 sm:px-6 py-3.5 bg-slate-850 border-t border-slate-800 flex items-center justify-between shrink-0">
          <div className="text-[11px] sm:text-xs text-slate-400 font-mono">
            {personalInfo.name} &bull; {personalInfo.degree}
          </div>
          <button
            onClick={onClose}
            className="px-3.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 active:scale-95 text-white text-xs font-semibold transition-colors"
          >
            Close Report
          </button>
        </div>

      </div>
    </div>
  );
}
