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
    <section id="projects" className="py-16 sm:py-20 relative bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header & Category Filters */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="text-xs font-mono uppercase tracking-widest text-blue-600 font-semibold mb-2">
              04. Engineering Portfolio & Work Artifacts
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
              Physical Prototypes, CAD Models & FEA Case Studies
            </h2>
            <p className="text-slate-600 mt-2 text-sm sm:text-base">
              Detailed engineering analyses covering parametric SolidWorks assemblies, ANSYS structural simulations, and mechatronic prototypes.
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                  filter === cat
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'bg-slate-100 text-slate-600 hover:text-slate-900 border border-slate-200 hover:border-slate-300'
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
                className="bg-white border border-slate-200 rounded-xl overflow-hidden hover:border-slate-300 hover:shadow-md transition-all cursor-pointer flex flex-col justify-between group shadow-sm"
              >
                <div>
                  {/* Media / Video Preview */}
                  <div className="relative aspect-[16/10] bg-slate-100 overflow-hidden border-b border-slate-200">
                    {hasVideo ? (
                      <div className="w-full h-full relative">
                        <video
                          src={project.video}
                          autoPlay
                          loop
                          muted
                          playsInline
                          preload="metadata"
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute top-3 left-3 px-2 py-1 rounded bg-white/95 border border-slate-200 text-[11px] font-mono text-blue-700 flex items-center gap-1.5 shadow-sm">
                          <Play size={11} className="fill-blue-600 text-blue-600" />
                          <span>CAD Motion</span>
                        </div>
                      </div>
                    ) : (
                      <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-slate-50">
                        <FileText size={32} className="text-blue-600 mb-2" />
                        <span className="text-xs font-mono text-slate-500">Technical Report & Analysis</span>
                      </div>
                    )}

                    {/* Category Tag overlay */}
                    <div className="absolute top-3 right-3 px-2 py-0.5 rounded bg-white/95 border border-slate-200 text-[10px] font-medium text-slate-700 shadow-sm">
                      {project.category}
                    </div>
                  </div>

                  {/* Card Content Body */}
                  <div className="p-5 sm:p-6">
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors leading-snug">
                      {project.title}
                    </h3>
                    
                    <p className="text-xs text-blue-700 font-medium mt-1 font-mono">
                      {project.subtitle}
                    </p>

                    <p className="text-slate-600 text-xs sm:text-sm mt-3 line-clamp-3 leading-relaxed">
                      {project.summary}
                    </p>

                    {/* Mini Spec preview if present */}
                    {project.specifications && (
                      <div className="mt-4 pt-3 border-t border-slate-100 space-y-1">
                        <div className="text-[11px] font-mono text-slate-500 flex justify-between">
                          <span>{project.specifications[0].key}:</span>
                          <span className="text-slate-900 font-semibold">{project.specifications[0].val}</span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Card Footer Action */}
                <div className="px-5 sm:px-6 py-3.5 bg-slate-50 border-t border-slate-200 flex items-center justify-between">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.slice(0, 2).map((t) => (
                      <span key={t} className="text-[10px] font-mono text-slate-600 bg-white px-2 py-0.5 rounded border border-slate-200">
                        {t}
                      </span>
                    ))}
                    {project.tags.length > 2 && (
                      <span className="text-[10px] font-mono text-slate-500 bg-white px-1.5 py-0.5 rounded border border-slate-200">
                        +{project.tags.length - 2}
                      </span>
                    )}
                  </div>

                  <span className="inline-flex items-center gap-1 text-xs font-semibold text-blue-600 group-hover:text-blue-700 transition-colors">
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
