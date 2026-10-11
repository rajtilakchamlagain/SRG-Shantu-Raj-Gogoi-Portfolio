import { personalInfo } from '../data/portfolioData';
import { ArrowUp, Mail, Instagram, ExternalLink, Heart } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050811] border-t border-slate-800/80 py-12 text-slate-400 text-xs sm:text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Left Brand info */}
          <div className="text-center md:text-left space-y-1">
            <div className="font-bold text-white text-base">
              {personalInfo.name}
            </div>
            <p className="text-slate-400 text-xs">
              B.Tech Mechanical Engineering &bull; Class of 2026 &bull; Barak Valley Engineering College
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a 
              href={`mailto:${personalInfo.email}`}
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 transition-colors"
              aria-label="Email Shantu"
            >
              <Mail size={16} />
            </a>
            <a 
              href={personalInfo.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 transition-colors"
              aria-label="Instagram Profile"
            >
              <Instagram size={16} />
            </a>
            <button 
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 transition-colors ml-2"
              aria-label="Scroll to top"
            >
              <ArrowUp size={16} />
            </button>
          </div>

        </div>

        <div className="mt-8 pt-8 border-t border-slate-800/60 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <div>
            &copy; {new Date().getFullYear()} {personalInfo.name}. All engineering rights reserved.
          </div>
          <div className="font-mono text-[11px] text-slate-400">
            Portfolio System Version 2.0 (Industrial Standard Edition)
          </div>
        </div>

      </div>
    </footer>
  );
}
