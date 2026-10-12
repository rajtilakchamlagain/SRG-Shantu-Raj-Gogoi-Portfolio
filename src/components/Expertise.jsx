import { skillsCategories } from '../data/portfolioData';
import { Boxes, Cpu, Wrench, CheckCircle } from 'lucide-react';

export default function Expertise() {
  const iconMap = {
    Boxes: Boxes,
    Cpu: Cpu,
    Wrench: Wrench
  };

  return (
    <section id="expertise" className="py-20 sm:py-24 relative bg-[#0c0f17] border-b border-[#232d46]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-500/10 border border-blue-500/20 text-xs font-mono uppercase tracking-widest text-blue-400 font-semibold mb-3">
            <span>02</span>
            <span>&bull;</span>
            <span>Technical Competencies & Toolchain</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
            Industry Skills & Applied Engineering Knowledge
          </h2>
          <p className="text-slate-400 mt-3 text-sm sm:text-base leading-relaxed">
            Acquired through university curriculum coursework, rigorous CAD modeling hours, and practical hardware bench testing.
          </p>
        </div>

        {/* 3 Major Engineering Domain Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {skillsCategories.map((cat) => {
            const IconComp = iconMap[cat.icon] || Boxes;
            return (
              <div 
                key={cat.category}
                className="bg-[#131826] border border-[#232d46] rounded-2xl p-6 sm:p-7 flex flex-col justify-between hover:border-blue-500/50 hover:shadow-designer-glow transition-all shadow-designer-sm"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center mb-6">
                    <IconComp size={20} />
                  </div>
                  
                  <h3 className="text-lg font-bold text-white mb-6 tracking-tight">
                    {cat.category}
                  </h3>

                  <div className="space-y-4">
                    {cat.skills.map((skill) => (
                      <div key={skill.name} className="space-y-1.5">
                        <div className="flex justify-between items-center text-xs">
                          <span className="text-slate-200 font-medium flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                            {skill.name}
                          </span>
                          <span className="text-slate-400 font-mono text-[11px]">
                            {skill.level}%
                          </span>
                        </div>
                        {/* High-end micro progress bar */}
                        <div className="w-full h-1.5 bg-[#1f2940] rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-gradient-to-r from-blue-500 to-sky-400 rounded-full"
                            style={{ width: `${skill.level}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-5 border-t border-[#232d46] flex items-center gap-2 text-xs text-slate-400">
                  <CheckCircle size={14} className="text-emerald-400" />
                  <span>Applied across active engineering designs</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Engineering Tool badges bar */}
        <div className="mt-12 bg-[#131826] border border-[#232d46] rounded-2xl p-6 shadow-designer-sm">
          <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-4 font-semibold text-center sm:text-left">
            Primary Software & Engineering Stack
          </div>
          <div className="flex flex-wrap gap-2.5">
            {[
              "SolidWorks 2023/2024", 
              "ANSYS Workbench (FEA)", 
              "GD&T Principles", 
              "Factor of Safety (FOS)", 
              "AutoCAD (2D Drafting)", 
              "Arduino Microcontroller Firmware", 
              "Python Scripting", 
              "Refinery Systems (NRL)", 
              "MSME Tooling (TRTC)", 
              "MS Office Suite"
            ].map((tool) => (
              <span 
                key={tool}
                className="px-3 py-1.5 rounded-lg bg-[#182032] border border-[#232d46] text-slate-200 text-xs font-mono font-medium hover:border-slate-500 transition-colors"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
