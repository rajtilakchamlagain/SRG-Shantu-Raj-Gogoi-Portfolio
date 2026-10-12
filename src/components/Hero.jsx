import { ArrowRight, Mail, MapPin, GraduationCap, CheckCircle2, Download, Building2 } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import avatarImg from '../assets/shantuda.jpeg';
import SRGLogo from './SRGLogo';

export default function Hero() {
  return (
    <section className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 md:pt-44 md:pb-28 border-b border-[#232d46] studio-ambient overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-14 lg:gap-8 items-center">
          
          {/* Left Column: Professional Introduction */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#131826] border border-[#232d46] text-xs font-medium text-slate-300 shadow-designer-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>Available for Mechanical Design & CAD Roles &bull; Class of 2027</span>
            </div>

            {/* Main Headline with high-end designer typographic scale */}
            <h1 className="text-4xl sm:text-5xl lg:text-[4rem] font-extrabold text-white tracking-[-0.03em] leading-[1.12]">
              Engineering Real-World <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-blue-500">
                Mechanical & Hardware
              </span> Systems.
            </h1>

            {/* Candidate Bio Subtext */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Hi, I’m <span className="text-white font-semibold">{personalInfo.name}</span>. Mechanical engineering student with verified industry internships at <strong className="text-white font-semibold">Neodrant Healthcare</strong>, <strong className="text-white font-semibold">Numaligarh Refinery (NRL)</strong>, and <strong className="text-white font-semibold">MSME TRTC Guwahati</strong>. Specialized in SolidWorks 3D CAD modeling, ANSYS Workbench FEA, and production-ready manufacturing designs.
            </p>

            {/* Quick Badges / Credentials */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 sm:gap-3 text-xs text-slate-400 font-mono">
              <div className="flex items-center gap-2 bg-[#131826] px-3 py-1.5 rounded-lg border border-[#232d46]">
                <GraduationCap size={15} className="text-blue-400" />
                <span>BVEC (ASTU) &bull; Class of 2027</span>
              </div>
              <div className="flex items-center gap-2 bg-[#131826] px-3 py-1.5 rounded-lg border border-[#232d46]">
                <MapPin size={15} className="text-emerald-400" />
                <span>Golaghat, Assam</span>
              </div>
            </div>

            {/* Call to Actions: Download Resume & Explore */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-2">
              <a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                download="Shantu_Raj_Gogoi_Resume.pdf"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 active:scale-95 text-white font-semibold text-sm transition-all shadow-designer-sm hover:shadow-designer-glow"
              >
                <Download size={16} />
                <span>Download Resume (PDF)</span>
              </a>

              <a
                href="#projects"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#131826] hover:bg-[#182032] active:scale-95 border border-[#232d46] hover:border-slate-600 text-slate-200 hover:text-white font-semibold text-sm transition-all shadow-designer-sm"
              >
                <span>View Projects & FEA</span>
                <ArrowRight size={16} />
              </a>
            </div>

            {/* Highlighted Key Capabilities Cards */}
            <div className="pt-6 border-t border-[#232d46] grid grid-cols-1 sm:grid-cols-3 gap-3 text-left">
              <div className="flex items-center gap-2.5 bg-[#131826] border border-[#232d46] p-3 rounded-xl shadow-designer-sm">
                <CheckCircle2 size={16} className="text-blue-400 shrink-0" />
                <span className="text-xs text-slate-200 font-medium">SolidWorks & ANSYS FEA</span>
              </div>
              <div className="flex items-center gap-2.5 bg-[#131826] border border-[#232d46] p-3 rounded-xl shadow-designer-sm">
                <CheckCircle2 size={16} className="text-blue-400 shrink-0" />
                <span className="text-xs text-slate-200 font-medium">GD&T & Tolerance Analysis</span>
              </div>
              <div className="flex items-center gap-2.5 bg-[#131826] border border-[#232d46] p-3 rounded-xl shadow-designer-sm">
                <CheckCircle2 size={16} className="text-blue-400 shrink-0" />
                <span className="text-xs text-slate-200 font-medium">Refinery Systems & MSME</span>
              </div>
            </div>

          </div>

          {/* Right Column: Realistic Professional Profile Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm sm:max-w-md">
              
              {/* Main Profile Card Container */}
              <div className="rounded-2xl bg-[#131826] border border-[#232d46] overflow-hidden shadow-designer-lg">
                
                {/* Profile Header Bar */}
                <div className="px-5 py-3.5 bg-[#182032] border-b border-[#232d46] flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <SRGLogo className="w-5 h-5" />
                    <span className="text-xs font-mono text-slate-200 font-semibold tracking-wider">SHANTU RAJ GOGOI</span>
                  </div>
                  <span className="text-[11px] font-mono font-semibold px-2 py-0.5 rounded bg-blue-500/10 text-blue-400 border border-blue-500/20">
                    B.Tech ME &bull; 2027
                  </span>
                </div>

                {/* Real High-Resolution Portrait with subtle top rim vignette */}
                <div className="relative aspect-[4/4.2] overflow-hidden bg-[#0c0f17]">
                  <img
                    src={avatarImg}
                    alt={personalInfo.name}
                    className="w-full h-full object-cover object-top hover:scale-[1.02] transition-transform duration-500 filter contrast-[1.04]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#131826] via-transparent to-transparent opacity-80 pointer-events-none" />

                  {/* Overlaid Badges */}
                  <div className="absolute bottom-3.5 left-3.5 right-3.5 flex items-end justify-between">
                    <div className="bg-[#131826]/90 backdrop-blur-md border border-[#232d46] px-3.5 py-2 rounded-xl shadow-designer-sm">
                      <div className="text-[10px] text-slate-400 font-mono">Specialization</div>
                      <div className="text-xs sm:text-sm font-bold text-white">CAD, FEA & Manufacturing</div>
                    </div>
                    <div className="bg-[#131826]/90 backdrop-blur-md border border-emerald-500/30 text-emerald-300 px-3 py-1.5 rounded-xl text-xs font-medium flex items-center gap-1.5 shadow-designer-sm">
                      <span className="w-2 h-2 rounded-full bg-emerald-400" />
                      Class of 2027
                    </div>
                  </div>
                </div>

                {/* Profile Card Footer Summary with Resume Quick Link */}
                <div className="p-5 space-y-3 bg-[#131826] border-t border-[#232d46] text-xs text-slate-400">
                  <div className="flex items-center justify-between pb-2.5 border-b border-[#232d46]/70">
                    <span>Internships:</span>
                    <span className="font-semibold text-slate-200">Neodrant &bull; NRL &bull; TRTC MSME</span>
                  </div>
                  <div className="flex items-center justify-between pb-2.5 border-b border-[#232d46]/70">
                    <span>Institution:</span>
                    <span className="font-semibold text-slate-200">Barak Valley Eng. College</span>
                  </div>
                  <div className="pt-0.5 flex items-center justify-between">
                    <span>Resume Document:</span>
                    <a 
                      href={personalInfo.resumeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      download="Shantu_Raj_Gogoi_Resume.pdf"
                      className="font-mono text-blue-400 font-semibold hover:text-blue-300 transition-colors flex items-center gap-1"
                    >
                      <Download size={13} />
                      <span>Download PDF</span>
                    </a>
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
