import { personalInfo, creatorInfo } from '../data/portfolioData';
import { ArrowUp, Mail, Instagram, Github, Linkedin, Code2 } from 'lucide-react';
import SRGLogo from './SRGLogo';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#080c14] border-t border-[#1f293d] pt-12 pb-24 md:pb-12 text-slate-400 text-xs sm:text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-[#1f293d]">
          
          {/* Left Brand info with SRG Symbol */}
          <div className="flex items-center gap-3.5 text-center md:text-left">
            <SRGLogo className="w-9 h-9 shrink-0" />
            <div className="space-y-0.5">
              <div className="font-bold text-white text-base tracking-tight flex items-center gap-2 justify-center md:justify-start">
                <span>{personalInfo.name}</span>
                <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-blue-500/10 text-blue-400 border border-blue-500/20 font-semibold">
                  SRG
                </span>
              </div>
              <p className="text-slate-400 text-xs">
                Mechanical & Hardware Systems &bull; Barak Valley Engineering College (ASTU)
              </p>
            </div>
          </div>

          {/* Social Links & Back to Top */}
          <div className="flex items-center gap-3">
            <a 
              href={`mailto:${personalInfo.email}`}
              className="p-2.5 rounded-lg bg-[#111827] border border-[#1f293d] text-slate-300 hover:text-white hover:border-[#334155] active:scale-95 transition-all"
              aria-label="Email Shantu Raj Gogoi"
            >
              <Mail size={15} />
            </a>
            <a 
              href={personalInfo.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg bg-[#111827] border border-[#1f293d] text-slate-300 hover:text-white hover:border-[#334155] active:scale-95 transition-all"
              aria-label="Instagram Handle"
            >
              <Instagram size={15} />
            </a>
            <button 
              onClick={scrollToTop}
              className="p-2.5 rounded-lg bg-[#111827] border border-[#1f293d] text-slate-300 hover:text-white hover:border-[#334155] active:scale-95 transition-all ml-1"
              aria-label="Scroll to top"
            >
              <ArrowUp size={15} />
            </button>
          </div>

        </div>

        {/* Bottom Sub-Footer: Copyright + Rajtilak Chamlagain Developer Attribution */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          
          <div>
            &copy; {new Date().getFullYear()} <strong className="text-slate-200">{personalInfo.name}</strong>. All engineering rights reserved.
          </div>

          {/* Developer Attribution Card */}
          <div className="flex flex-wrap items-center justify-center gap-2 bg-[#111827] px-3.5 py-2 rounded-lg border border-[#1f293d] text-[11px] font-mono">
            <span className="text-slate-400 flex items-center gap-1.5">
              <Code2 size={13} className="text-blue-400" />
              Engineered & Developed by
            </span>
            <span className="text-white font-bold">{creatorInfo.name}</span>
            <span className="text-slate-600">&bull;</span>
            <div className="flex items-center gap-2">
              <a 
                href={creatorInfo.github} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-slate-300 hover:text-white transition-colors flex items-center gap-1"
                title="Rajtilak GitHub"
              >
                <Github size={13} />
              </a>
              <a 
                href={creatorInfo.linkedin} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-1"
                title="Rajtilak LinkedIn"
              >
                <Linkedin size={13} />
              </a>
              <a 
                href={`mailto:${creatorInfo.email}`} 
                className="text-emerald-400 hover:text-emerald-300 transition-colors flex items-center gap-1"
                title="Email Rajtilak"
              >
                <Mail size={13} />
              </a>
            </div>
          </div>

        </div>

      </div>
    </footer>
  );
}
