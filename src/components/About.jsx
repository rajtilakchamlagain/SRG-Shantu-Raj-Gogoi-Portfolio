import { stats } from '../data/portfolioData';
import { Target, Compass, Award, Layers } from 'lucide-react';

export default function About() {
  const icons = [Layers, Target, Award, Compass];

  return (
    <section id="about" className="py-16 sm:py-20 relative bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-10 sm:mb-12">
          <div className="text-xs font-mono uppercase tracking-widest text-blue-600 font-semibold mb-2">
            01. Professional Profile & Background
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            Bridging Fundamental Mechanics with Smart Hardware Prototyping
          </h2>
        </div>

        {/* Top 4 Impact Stat Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-12 sm:mb-16">
          {stats.map((stat, idx) => {
            const IconComponent = icons[idx % icons.length];
            return (
              <div 
                key={stat.label}
                className="bg-white border border-slate-200 rounded-xl p-4 sm:p-5 hover:border-slate-300 transition-colors shadow-sm"
              >
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-blue-50 border border-blue-100 text-blue-600 flex items-center justify-center mb-2.5 sm:mb-3">
                  <IconComponent size={16} />
                </div>
                <div className="text-base sm:text-xl font-bold text-slate-900 tracking-tight">
                  {stat.value}
                </div>
                <div className="text-[11px] sm:text-xs text-slate-500 mt-1 font-medium">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>

        {/* Narrative & Engineering Philosophy */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          <div className="lg:col-span-7 space-y-4 sm:space-y-5 text-slate-700 text-sm sm:text-base leading-relaxed">
            <p>
              I am a Mechanical Engineering undergraduate at <strong>Barak Valley Engineering College (ASTU)</strong>, graduating in <strong>2027</strong>. My engineering work is oriented toward practical problem-solving: taking abstract mechanical and aerodynamic concepts and translating them into tangible, functional hardware.
            </p>
            <p>
              Throughout my degree and industry internships at <strong>Neodrant Healthcare Solutions</strong>, <strong>Numaligarh Refinery (NRL)</strong>, and <strong>TRTC MSME Guwahati</strong>, I have worked directly with 3D CAD modeling, FEA structural simulations, and refinery mechanical equipment.
            </p>
            <p>
              I focus on mechanical design, CAD modeling, robotics, and hardware engineering opportunities where I can apply rigorous analytical thinking, fast learning, and dedication to real-world industrial projects.
            </p>
          </div>

          <div className="lg:col-span-5 bg-white border border-slate-200 rounded-xl p-5 sm:p-7 space-y-5 sm:space-y-6 shadow-sm">
            <h3 className="text-sm sm:text-base font-bold text-slate-900 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-600" />
              Core Engineering Values & Strengths
            </h3>

            <div className="space-y-3.5 sm:space-y-4 text-xs sm:text-sm">
              <div className="border-l-2 border-blue-500 pl-3.5 space-y-1">
                <div className="font-semibold text-slate-900">Design for Manufacturability (DFM)</div>
                <div className="text-slate-600 leading-normal">
                  Creating CAD models keeping actual fabrication constraints, tooling clearance, and material costs in focus.
                </div>
              </div>

              <div className="border-l-2 border-indigo-500 pl-3.5 space-y-1">
                <div className="font-semibold text-slate-900">Structural Validation (FEA)</div>
                <div className="text-slate-600 leading-normal">
                  Validating factor of safety and stress distribution in ANSYS Workbench before physical prototyping.
                </div>
              </div>

              <div className="border-l-2 border-emerald-500 pl-3.5 space-y-1">
                <div className="font-semibold text-slate-900">Industrial Practicum Experience</div>
                <div className="text-slate-600 leading-normal">
                  Direct hands-on refinery operations exposure and MSME precision tool room component design.
                </div>
              </div>
            </div>

            <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-mono">
              <span>B.Tech ME (Class of 2027)</span>
              <span className="text-emerald-600 font-semibold">&bull; Ready to Relocate</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
