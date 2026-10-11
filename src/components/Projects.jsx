import { useState } from 'react';
import { projects } from '../data/portfolioData';
import { ArrowUpRight, Play, Eye, FileText, CheckCircle2, ChevronRight, Layers } from 'lucide-react';
import ProjectModal from './ProjectModal';

export default function Projects() {
  const [filter, setFilter] = useState('All');
  const [activeProject, setActiveProject] = useState(null);

  const categories = ['All', 'Mechanical Design & CAD', 'Robotics & UAVs', 'Aerospace & Thermal'];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-20 relative bg-[#090e1a] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header & Category Filters */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="text-xs font-mono uppercase tracking-widest text-blue-400 font-semibold mb-2">
              03. Engineering Portfolio & Work Artifacts
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Physical Prototypes, CAD Models & Case Studies
            </h2>
            <p className="text-slate-400 mt-2 text-sm sm:text-base">
              Detailed engineering analyses covering parametric SolidWorks assemblies, UAV flight controllers, and mechatronic kinematics.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  filter === cat
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
                    : 'bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800 hover:border-slate-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project) => {
            const hasVideo = !!project.video;

            return (
              <div
                key={project.id}
                onClick={() => setActiveProject(project)}
                className="group relative bg-slate-900/70 border border-slate-800 rounded-2xl overflow-hidden hover:border-blue-500/40 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/5 cursor-pointer flex flex-col justify-between"
              >
                <div>
                  {/* Media / Video Preview */}
                  <div className="relative aspect-[16/10] bg-slate-950 overflow-hidden border-b border-slate-800">
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
                        <div className="absolute top-3 left-3 px-2 py-1 rounded bg-slate-900/80 backdrop-blur-md border border-slate-700/80 text-[11px] font-mono text-blue-400 flex items-center gap-1.5">
                          <Play size={12} className="fill-blue-400" />
                          <span>3D Animation / Video</span>
                        </div>
                      </div>
                    ) : (
                      <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
                        <FileText size={36} className="text-blue-400/60 mb-2 group-hover:scale-110 transition-transform" />
                        <span className="text-xs font-mono text-slate-400">Technical Report & Schematic</span>
                      </div>
                    )}

                    {/* Category Tag overlay */}
                    <div className="absolute top-3 right-3 px-2.5 py-1 rounded-md bg-slate-900/90 backdrop-blur-md border border-slate-700 text-[11px] font-medium text-slate-300">
                      {project.category}
                    </div>
                  </div>

                  {/* Card Content Body */}
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-white group-hover:text-blue-300 transition-colors leading-snug">
                      {project.title}
                    </h3>
                    
                    <p className="text-xs text-blue-400/90 font-medium mt-1 font-mono">
                      {project.subtitle}
                    </p>

                    <p className="text-slate-400 text-xs sm:text-sm mt-3 line-clamp-3 leading-relaxed">
                      {project.summary}
                    </p>

                    {/* Mini Spec preview if present */}
                    {project.specifications && (
                      <div className="mt-4 pt-3 border-t border-slate-800/80 space-y-1">
                        <div className="text-[11px] font-mono text-slate-400 flex justify-between">
                          <span>{project.specifications[0].key}:</span>
                          <span className="text-slate-200 font-semibold">{project.specifications[0].val}</span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Card Footer Action */}
                <div className="px-6 py-4 bg-slate-850/60 border-t border-slate-800/80 flex items-center justify-between">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.slice(0, 2).map((t) => (
                      <span key={t} className="text-[10px] font-mono text-slate-400 bg-slate-800 px-2 py-0.5 rounded">
                        {t}
                      </span>
                    ))}
                    {project.tags.length > 2 && (
                      <span className="text-[10px] font-mono text-slate-500 bg-slate-800 px-1.5 py-0.5 rounded">
                        +{project.tags.length - 2}
                      </span>
                    )}
                  </div>

                  <span className="inline-flex items-center gap-1 text-xs font-semibold text-blue-400 group-hover:text-blue-300 group-hover:translate-x-1 transition-all">
                    <span>View Dossier</span>
                    <ChevronRight size={15} />
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
