import { ArrowRight, Mail, MapPin, GraduationCap, CheckCircle2, ChevronRight, Award, Compass } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import avatarImg from '../assets/shantuda.jpeg';
import SRGLogo from './SRGLogo';

export default function Hero() {
  return (
    <section className="relative pt-24 pb-16 sm:pt-32 sm:pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Subtle ambient lighting & engineering grid */}
      <div className="absolute inset-0 subtle-grid pointer-events-none opacity-60" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[700px] h-[350px] bg-blue-600/15 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Professional Introduction */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-6 text-center lg:text-left">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-3.5 sm:py-1.5 rounded-full bg-slate-900/90 border border-slate-700/80 text-[11px] sm:text-xs font-medium text-slate-300 shadow-sm backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Open to Technical Trainee & CAD Roles &bull; Class of 2027</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15]">
              Engineering Real-World <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-indigo-300">
                Mechanical & Hardware
              </span> Systems.
            </h1>

            {/* Candidate Bio Subtext */}
            <p className="text-sm sm:text-base md:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Hi, I’m <span className="text-white font-semibold">{personalInfo.name}</span>. I design parametric 3D CAD assemblies, simulate kinematic robotics, calibrate UAV avionics, and engineer physical prototypes combining solid mechanics with embedded electronics.
            </p>

            {/* Quick Badges / Credentials */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 sm:gap-3 text-xs text-slate-400 font-mono">
              <div className="flex items-center gap-1.5 bg-slate-900/80 px-2.5 py-1.5 rounded-lg border border-slate-800">
                <GraduationCap size={14} className="text-blue-400" />
                <span>BVEC (ASTU) &bull; Class of 2027</span>
              </div>
              <div className="flex items-center gap-1.5 bg-slate-900/80 px-2.5 py-1.5 rounded-lg border border-slate-800">
                <MapPin size={14} className="text-emerald-400" />
                <span>Assam, India</span>
              </div>
            </div>

            {/* Call to Actions (Touch-Friendly Native Touch Targets on Mobile) */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-2 sm:pt-4">
              <a
                href="#projects"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 active:scale-95 text-white font-semibold text-sm transition-all shadow-lg shadow-blue-600/25"
              >
                <span>Explore Projects</span>
                <ArrowRight size={16} />
              </a>

              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 active:scale-95 border border-slate-700/80 text-slate-200 hover:text-white font-semibold text-sm transition-all"
              >
                <Mail size={16} />
                <span>Contact Direct</span>
              </a>
            </div>

            {/* Highlighted Key Capabilities */}
            <div className="pt-5 sm:pt-6 border-t border-slate-800/80 grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3 text-left">
              <div className="flex items-center sm:items-start gap-2 bg-slate-900/40 sm:bg-transparent p-2.5 sm:p-0 rounded-lg">
                <CheckCircle2 size={16} className="text-blue-400 shrink-0" />
                <span className="text-xs text-slate-300">SolidWorks 3D CAD & Motion</span>
              </div>
              <div className="flex items-center sm:items-start gap-2 bg-slate-900/40 sm:bg-transparent p-2.5 sm:p-0 rounded-lg">
                <CheckCircle2 size={16} className="text-blue-400 shrink-0" />
                <span className="text-xs text-slate-300">F450 UAV Avionics & PID</span>
              </div>
              <div className="flex items-center sm:items-start gap-2 bg-slate-900/40 sm:bg-transparent p-2.5 sm:p-0 rounded-lg">
                <CheckCircle2 size={16} className="text-blue-400 shrink-0" />
                <span className="text-xs text-slate-300">Kinematics & Microcontrollers</span>
              </div>
            </div>

          </div>

          {/* Right Column: Realistic Professional Profile Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm sm:max-w-md">
              
              {/* Backing Ambient Accent */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl blur-lg opacity-30 pointer-events-none" />
              
              {/* Main Profile Card Container */}
              <div className="relative rounded-2xl bg-slate-900/90 border border-slate-800 overflow-hidden shadow-2xl backdrop-blur-xl">
                
                {/* Profile Header Bar */}
                <div className="px-4 sm:px-5 py-3 bg-slate-850 border-b border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <SRGLogo className="w-5 h-5" />
                    <span className="text-xs font-mono text-slate-300 font-semibold tracking-wide">SRG // CAD_PROFILE</span>
                  </div>
                  <span className="text-[11px] font-mono font-semibold px-2 py-0.5 rounded bg-blue-500/10 text-blue-400 border border-blue-500/20">
                    B.Tech ME &bull; 2027
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
                  <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 flex items-end justify-between">
                    <div className="bg-slate-900/90 backdrop-blur-md border border-slate-800 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-xl">
                      <div className="text-[10px] sm:text-xs text-slate-400 font-mono">Specialization</div>
                      <div className="text-xs sm:text-sm font-bold text-white">CAD, Robotics & UAVs</div>
                    </div>
                    <div className="bg-emerald-950/90 border border-emerald-500/30 text-emerald-300 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-lg text-[11px] sm:text-xs font-medium backdrop-blur-md flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      Class of 2027
                    </div>
                  </div>
                </div>

                {/* Profile Card Footer Summary */}
                <div className="p-4 sm:p-5 space-y-2.5 sm:space-y-3 bg-slate-900/95 border-t border-slate-800 text-xs text-slate-400">
                  <div className="flex items-center justify-between pb-2 border-b border-slate-800/80">
                    <span>Degree & Batch:</span>
                    <span className="font-semibold text-slate-200">B.Tech ME (2023 - 2027)</span>
                  </div>
                  <div className="flex items-center justify-between pb-2 border-b border-slate-800/80">
                    <span>Institution:</span>
                    <span className="font-semibold text-slate-200">Barak Valley Eng. College</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Core Stack:</span>
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
