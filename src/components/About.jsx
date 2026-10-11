import { stats } from '../data/portfolioData';
import { Target, Compass, Award, Layers } from 'lucide-react';

export default function About() {
  const icons = [Layers, Target, Award, Compass];

  return (
    <section id="about" className="py-20 relative bg-[#090e1a] border-y border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-mono uppercase tracking-widest text-blue-400 font-semibold mb-2">
            01. Professional Profile & Background
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Bridging Fundamental Mechanics with Smart Hardware Prototyping
          </h2>
        </div>

        {/* Top 4 Impact Stat Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {stats.map((stat, idx) => {
            const IconComponent = icons[idx % icons.length];
            return (
              <div 
                key={stat.label}
                className="bg-slate-900/70 border border-slate-800 rounded-xl p-5 hover:border-slate-700 transition-colors"
              >
                <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center mb-3">
                  <IconComponent size={18} />
                </div>
                <div className="text-lg sm:text-xl font-bold text-white tracking-tight">
                  {stat.value}
                </div>
                <div className="text-xs text-slate-400 mt-1 font-medium">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>

        {/* Narrative & Engineering Philosophy */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          <div className="lg:col-span-7 space-y-5 text-slate-300 text-sm sm:text-base leading-relaxed">
            <p>
              I am a final-year Mechanical Engineering undergraduate at <strong>Barak Valley Engineering College (ASTU)</strong>. My engineering journey is driven by practical problem-solving: taking abstract mechanical and aerodynamic concepts and translating them into tangible, functional hardware.
            </p>
            <p>
              Throughout my degree, I have prioritized hands-on engineering over theoretical memorization. I spend significant time inside <strong>SolidWorks</strong>, engineering parametric assemblies with dynamic mating, tolerance stack-ups, and motion analyses. Beyond pure mechanical components, I integrate <strong>electronic speed controllers, microcontrollers (Arduino), servo linkages, and telemetry modules</strong> to create multi-disciplinary mechatronic assemblies.
            </p>
            <p>
              As I step into my final semester and transition into industry, I am looking for full-time mechanical, CAD, robotics, or hardware engineering roles where I can apply rigorous analytical thinking, fast learning, and dedication to real-world industrial projects.
            </p>
          </div>

          <div className="lg:col-span-5 bg-slate-900/90 border border-slate-800 rounded-2xl p-6 sm:p-7 space-y-6">
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-400" />
              Core Engineering Values & Strengths
            </h3>

            <div className="space-y-4 text-xs sm:text-sm">
              <div className="border-l-2 border-blue-500 pl-3.5 space-y-1">
                <div className="font-semibold text-slate-100">Design for Manufacturability (DFM)</div>
                <div className="text-slate-400 leading-normal">
                  Creating CAD models keeping actual fabrication constraints, tooling clearance, and material costs in focus.
                </div>
              </div>

              <div className="border-l-2 border-indigo-500 pl-3.5 space-y-1">
                <div className="font-semibold text-slate-100">Cross-Disciplinary Integration</div>
                <div className="text-slate-400 leading-normal">
                  Uniting mechanical linkages, actuators, power distribution, and PWM firmware into coherent robotic assemblies.
                </div>
              </div>

              <div className="border-l-2 border-emerald-500 pl-3.5 space-y-1">
                <div className="font-semibold text-slate-100">Rapid Iterative Prototyping</div>
                <div className="text-slate-400 leading-normal">
                  Failing fast on test benches to optimize thrust-to-weight ratios, eliminate vibration harmonics, and verify tolerances.
                </div>
              </div>
            </div>

            <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400 font-mono">
              <span>Class of 2026</span>
              <span className="text-emerald-400 font-semibold">&bull; Ready to Relocate / Join</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
