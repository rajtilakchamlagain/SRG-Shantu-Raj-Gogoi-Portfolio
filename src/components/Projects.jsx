import { useState } from 'react';
import { projects } from '../data/portfolioData';
import { Play, FileText, ChevronRight } from 'lucide-react';
import ProjectModal from './ProjectModal';

export default function Projects() {
  const [filter, setFilter] = useState('All');
  const [activeProject, setActiveProject] = useState(null);

  const categories = ['All', 'Mechanical Design & CAD', 'Robotics & UAVs', 'Aerospace & Thermal'];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-20 sm:py-24 relative bg-[#0c0f17] border-b border-[#232d46]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header & Category Filters */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14 sm:mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-500/10 border border-blue-500/20 text-xs font-mono uppercase tracking-widest text-blue-400 font-semibold mb-3">
              <span>04</span>
              <span>&bull;</span>
              <span>Engineering Artifacts & FEA</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Physical Prototypes, CAD Models & Case Studies
            </h2>
            <p className="text-slate-400 mt-2 text-sm sm:text-base">
              Detailed engineering analyses covering parametric SolidWorks assemblies, ANSYS structural simulations, and mechatronic prototypes.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                  filter === cat
                    ? 'bg-blue-600 text-white shadow-designer-sm'
                    : 'bg-[#131826] text-slate-300 hover:text-white border border-[#232d46] hover:border-slate-600'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {filteredProjects.map((project) => {
            const hasVideo = !!project.video;

            return (
              <div
                key={project.id}
                onClick={() => setActiveProject(project)}
                className="bg-[#131826] border border-[#232d46] rounded-2xl overflow-hidden hover:border-blue-500/50 hover:shadow-designer-glow transition-all duration-300 cursor-pointer flex flex-col justify-between group shadow-designer-sm"
              >
                <div>
                  {/* Media / Video Preview */}
                  <div className="relative aspect-[16/10] bg-[#0c0f17] overflow-hidden border-b border-[#232d46]">
                    {hasVideo ? (
                      <div className="w-full h-full relative">
                        <video
                          src={project.video}
                          autoPlay
                          loop
                          muted
                          playsInline
                          preload="metadata"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-[#131826]/90 backdrop-blur-md border border-[#232d46] text-[11px] font-mono text-blue-400 flex items-center gap-1.5 shadow-sm">
                          <Play size={11} className="fill-blue-400" />
                          <span>CAD Motion</span>
                        </div>
                      </div>
                    ) : (
                      <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-[#0c0f17]">
                        <FileText size={34} className="text-blue-400/80 mb-2 group-hover:scale-110 transition-transform" />
                        <span className="text-xs font-mono text-slate-400">Technical Report & Analysis</span>
                      </div>
                    )}

                    {/* Category Tag overlay */}
                    <div className="absolute top-3 right-3 px-2.5 py-1 rounded-md bg-[#131826]/90 backdrop-blur-md border border-[#232d46] text-[10px] font-medium text-slate-300 shadow-sm">
                      {project.category}
                    </div>
                  </div>

                  {/* Card Content Body */}
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-white group-hover:text-blue-300 transition-colors leading-snug">
                      {project.title}
                    </h3>
                    
                    <p className="text-xs text-blue-400 font-medium mt-1 font-mono">
                      {project.subtitle}
                    </p>

                    <p className="text-slate-400 text-xs sm:text-sm mt-3 line-clamp-3 leading-relaxed">
                      {project.summary}
                    </p>

                    {/* Mini Spec preview if present */}
                    {project.specifications && (
                      <div className="mt-4 pt-3.5 border-t border-[#232d46] space-y-1">
                        <div className="text-[11px] font-mono text-slate-400 flex justify-between">
                          <span>{project.specifications[0].key}:</span>
                          <span className="text-slate-200 font-semibold">{project.specifications[0].val}</span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Card Footer Action */}
                <div className="px-6 py-4 bg-[#182032] border-t border-[#232d46] flex items-center justify-between">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.slice(0, 2).map((t) => (
                      <span key={t} className="text-[10px] font-mono text-slate-300 bg-[#131826] px-2.5 py-0.5 rounded border border-[#232d46]">
                        {t}
                      </span>
                    ))}
                    {project.tags.length > 2 && (
                      <span className="text-[10px] font-mono text-slate-400 bg-[#131826] px-2 py-0.5 rounded border border-[#232d46]">
                        +{project.tags.length - 2}
                      </span>
                    )}
                  </div>

                  <span className="inline-flex items-center gap-1 text-xs font-semibold text-blue-400 group-hover:text-blue-300 group-hover:translate-x-0.5 transition-all">
                    <span>View Dossier</span>
                    <ChevronRight size={14} />
                  </span>
                </div>

              </div>
            );
          })}
        </div>

      </div>

      {/* Modal View */}
      <ProjectModal 
        project={activeProject} 
        onClose={() => setActiveProject(null)} 
      />
    </section>
  );
}
