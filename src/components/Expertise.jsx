import { skillsCategories } from '../data/portfolioData';
import { Boxes, Cpu, Wrench, CheckCircle } from 'lucide-react';

export default function Expertise() {
  const iconMap = {
    Boxes: Boxes,
    Cpu: Cpu,
    Wrench: Wrench
  };

  return (
    <section id="expertise" className="py-16 sm:py-20 relative bg-[#0b0f19] border-b border-[#1f293d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-14">
          <div className="text-xs font-mono uppercase tracking-widest text-blue-400 font-semibold mb-2">
            02. Technical Competencies & Toolchain
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
            Industry Skills & Applied Engineering Knowledge
          </h2>
          <p className="text-slate-400 mt-2 text-sm sm:text-base leading-relaxed">
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
                className="bg-[#111827] border border-[#1f293d] rounded-xl p-6 sm:p-7 flex flex-col justify-between hover:border-[#334155] transition-colors"
              >
                <div>
                  <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center mb-5">
                    <IconComp size={20} />
                  </div>
                  
                  <h3 className="text-base sm:text-lg font-bold text-white mb-6 tracking-tight">
                    {cat.category}
                  </h3>

                  <div className="space-y-4">
                    {cat.skills.map((skill) => (
                      <div key={skill.name} className="space-y-1.5">
                        <div className="flex justify-between items-center text-xs">
                          <span className="text-slate-200 font-medium flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                            {skill.name}
                          </span>
                          <span className="text-slate-400 font-mono text-[11px]">
                            {skill.level}%
                          </span>
                        </div>
                        {/* Clean progress bar */}
                        <div className="w-full h-1.5 bg-[#182234] rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-blue-600 rounded-full"
                            style={{ width: `${skill.level}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-5 border-t border-[#1f293d] flex items-center gap-2 text-xs text-slate-400">
                  <CheckCircle size={14} className="text-emerald-400" />
                  <span>Applied across active engineering designs</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Engineering Tool badges bar */}
        <div className="mt-10 sm:mt-12 bg-[#111827] border border-[#1f293d] rounded-xl p-5 sm:p-6">
          <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-4 font-semibold text-center sm:text-left">
            Primary Software & Engineering Stack
          </div>
          <div className="flex flex-wrap gap-2">
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
                className="px-3 py-1.5 rounded-lg bg-[#182234] border border-[#28354d] text-slate-200 text-xs font-mono font-medium hover:bg-[#1f293d] transition-colors"
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
