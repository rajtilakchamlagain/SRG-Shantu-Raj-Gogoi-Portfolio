import { ArrowRight, Download, Mail, ExternalLink, ShieldCheck, MapPin, GraduationCap, CheckCircle2 } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import avatarImg from '../assets/shantuda.jpeg';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Subtle ambient lighting & engineering grid */}
      <div className="absolute inset-0 subtle-grid pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-blue-600/15 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 -right-20 w-[400px] h-[300px] bg-indigo-600/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Professional Introduction */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-700/80 text-xs font-medium text-slate-300 shadow-sm backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Available for Hire &bull; Final Year B.Tech ME (Class of 2026)</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15]">
              Engineering Real-World <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-indigo-300">
                Mechanical & Hardware
              </span> Solutions.
            </h1>

            {/* Senior Intro Subtext */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Hi, I’m <span className="text-white font-semibold">{personalInfo.name}</span>. I design parametric 3D CAD assemblies, simulate kinematic robotics, calibrate UAV avionics, and engineer physical prototypes combining solid mechanics with embedded electronics.
            </p>

            {/* Quick Badges / Credentials */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-1 text-xs text-slate-400 font-mono">
              <div className="flex items-center gap-1.5 bg-slate-900/60 px-3 py-1.5 rounded-md border border-slate-800">
                <GraduationCap size={15} className="text-blue-400" />
                <span>Barak Valley Engineering College</span>
              </div>
              <div className="flex items-center gap-1.5 bg-slate-900/60 px-3 py-1.5 rounded-md border border-slate-800">
                <MapPin size={15} className="text-emerald-400" />
                <span>Assam, India</span>
              </div>
            </div>

            {/* Call to Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <a
                href="#projects"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm transition-all shadow-lg shadow-blue-600/25 hover:shadow-blue-600/40 hover:-translate-y-0.5"
              >
                <span>Explore Engineering Projects</span>
                <ArrowRight size={16} />
              </a>

              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700/80 text-slate-200 hover:text-white font-semibold text-sm transition-all hover:-translate-y-0.5"
              >
                <Mail size={16} />
                <span>Contact for Opportunities</span>
              </a>
            </div>

            {/* Highlighted Key Capabilities */}
            <div className="pt-6 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-3 gap-3 text-left">
              <div className="flex items-start gap-2">
                <CheckCircle2 size={16} className="text-blue-400 shrink-0 mt-0.5" />
                <span className="text-xs text-slate-300">SolidWorks 3D CAD & Motion</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 size={16} className="text-blue-400 shrink-0 mt-0.5" />
                <span className="text-xs text-slate-300">F450 UAV Avionics & PID</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 size={16} className="text-blue-400 shrink-0 mt-0.5" />
                <span className="text-xs text-slate-300">Kinematics & Microcontrollers</span>
              </div>
            </div>

          </div>

          {/* Right Column: Realistic Professional Profile Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md">
              
              {/* Backing Ambient Accent */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl blur-lg opacity-30 transition duration-1000 group-hover:opacity-60" />
              
              {/* Main Profile Card Container */}
              <div className="relative rounded-2xl bg-slate-900/90 border border-slate-800 overflow-hidden shadow-2xl backdrop-blur-xl">
                
                {/* Profile Header Bar */}
                <div className="px-5 py-3.5 bg-slate-850 border-b border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-700" />
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-700" />
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-700" />
                    <span className="text-xs font-mono text-slate-400 ml-1">candidate_profile.cad</span>
                  </div>
                  <span className="text-[11px] font-mono font-semibold px-2 py-0.5 rounded bg-blue-500/10 text-blue-400 border border-blue-500/20">
                    B.Tech Mechanical
                  </span>
                </div>

                {/* Real High-Resolution Portrait */}
                <div className="relative aspect-[4/4.2] overflow-hidden bg-slate-950">
                  <img
                    src={avatarImg}
                    alt={personalInfo.name}
                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700 filter contrast-[1.05]"
                  />
                  
                  {/* Subtle clean gradient overlay at bottom of photo */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent pointer-events-none" />

                  {/* Overlaid Badges */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                    <div className="bg-slate-900/90 backdrop-blur-md border border-slate-800 px-3.5 py-2 rounded-xl">
                      <div className="text-xs text-slate-400 font-mono">Specialization</div>
                      <div className="text-sm font-bold text-white">CAD, Robotics & UAVs</div>
                    </div>
                    <div className="bg-emerald-950/80 border border-emerald-500/30 text-emerald-300 px-3 py-1.5 rounded-lg text-xs font-medium backdrop-blur-md flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      Job Ready
                    </div>
                  </div>
                </div>

                {/* Profile Card Footer Summary */}
                <div className="p-5 space-y-3 bg-slate-900/95 border-t border-slate-800">
                  <div className="flex items-center justify-between text-xs text-slate-400 pb-2 border-b border-slate-800/80">
                    <span>Degree Progress:</span>
                    <span className="font-semibold text-slate-200">Final Year (8th Sem)</span>
                  </div>
                  <div className="flex items-center justify-between text-xs text-slate-400 pb-2 border-b border-slate-800/80">
                    <span>Institution:</span>
                    <span className="font-semibold text-slate-200">BVEC (ASTU)</span>
                  </div>
                  <div className="flex items-center justify-between text-xs text-slate-400">
                    <span>Core Toolset:</span>
                    <span className="font-mono text-blue-400 font-medium">SolidWorks &bull; Arduino &bull; Python</span>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
