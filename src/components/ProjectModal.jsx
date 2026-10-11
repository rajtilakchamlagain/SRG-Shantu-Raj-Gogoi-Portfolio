import { useState } from 'react';
import { X, Play, FileText, Wrench } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 md:p-6 bg-slate-900/50 backdrop-blur-sm animate-in fade-in duration-150"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-4xl h-[92vh] sm:h-auto sm:max-h-[90vh] bg-white border-t sm:border border-slate-200 rounded-t-2xl sm:rounded-xl shadow-2xl overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Mobile Drag Indicator */}
        <div className="w-12 h-1.5 bg-slate-300 rounded-full mx-auto my-2 sm:hidden shrink-0" />

        {/* Modal Top Navigation Bar */}
        <div className="px-5 sm:px-6 py-3.5 bg-slate-50 border-b border-slate-200 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2.5">
            <span className="px-2.5 py-0.5 rounded-md bg-blue-50 border border-blue-200 text-blue-700 text-[11px] sm:text-xs font-mono font-medium">
              {project.category}
            </span>
            <span className="text-xs text-slate-500 font-mono hidden sm:inline">
              Project Case Dossier
            </span>
          </div>
          <button 
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-500 hover:text-slate-900 hover:bg-slate-200 active:scale-90 transition-all"
            aria-label="Close modal"
          >
            <X size={18} />
          </button>
        </div>

        {/* Modal Body - Scrollable */}
        <div className="overflow-y-auto p-5 sm:p-8 space-y-6 sm:space-y-7 flex-grow">
          
          {/* Header Title */}
          <div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight leading-snug">
              {project.title}
            </h2>
            <p className="text-xs sm:text-sm text-blue-700 font-medium mt-1">
              {project.subtitle}
            </p>
          </div>

          {/* Media Player if video exists */}
          {project.video && (
            <div className="rounded-lg overflow-hidden bg-slate-900 border border-slate-200 aspect-video relative group">
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
          <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 sm:p-5 text-xs sm:text-sm text-slate-700 leading-relaxed">
            <h4 className="text-[11px] font-mono uppercase tracking-wider text-slate-500 font-semibold mb-1.5">
              Executive Abstract
            </h4>
            <p>{project.summary}</p>
          </div>

          {/* Technical Specifications Grid */}
          {project.specifications && (
            <div>
              <h3 className="text-xs sm:text-sm font-bold text-slate-900 uppercase tracking-wider font-mono mb-3 flex items-center gap-2">
                <Wrench size={15} className="text-blue-600" />
                Technical Specifications & Design Parameters
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {project.specifications.map((spec, i) => (
                  <div key={i} className="bg-slate-50 border border-slate-200 rounded-lg p-3 text-xs">
                    <span className="text-slate-500 block font-mono text-[11px]">{spec.key}</span>
                    <span className="text-slate-900 font-semibold text-xs sm:text-sm mt-0.5 block">{spec.val}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* In-depth Detailed Engineering Sections */}
          {project.detailedSections && (
            <div className="space-y-5 pt-2 border-t border-slate-200">
              {project.detailedSections.map((sec, i) => (
                <div key={i} className="space-y-1.5">
                  <h4 className="text-sm sm:text-base font-bold text-slate-900 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                    {sec.heading}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-3 border-l-2 border-slate-200">
                    {sec.content}
                  </p>
                </div>
              ))}
            </div>
          )}

          {/* Tech Tags */}
          <div className="pt-4 border-t border-slate-200 flex flex-wrap gap-1.5 sm:gap-2">
            {project.tags.map((tag) => (
              <span 
                key={tag}
                className="px-2.5 py-1 rounded bg-slate-100 text-slate-700 text-[11px] font-mono border border-slate-200"
              >
                #{tag}
              </span>
            ))}
          </div>

        </div>

        {/* Modal Footer */}
        <div className="px-5 sm:px-6 py-3.5 bg-slate-50 border-t border-slate-200 flex items-center justify-between shrink-0">
          <div className="text-[11px] sm:text-xs text-slate-500 font-mono">
            {personalInfo.name} &bull; {personalInfo.degree}
          </div>
          <button
            onClick={onClose}
            className="px-3.5 py-1.5 rounded-lg bg-white hover:bg-slate-100 active:scale-95 text-slate-800 text-xs font-semibold transition-colors border border-slate-200 shadow-2xs"
          >
            Close Report
          </button>
        </div>

      </div>
    </div>
  );
}
