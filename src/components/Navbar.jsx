import { useState, useEffect } from 'react';
import { Menu, X, Mail, ChevronRight, Home, Wrench, Briefcase, GraduationCap, Send, FileText, Download } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import SRGLogo from './SRGLogo';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('about');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
      
      const sections = ['about', 'expertise', 'projects', 'internships', 'experience', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveTab(section);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about", id: "about", icon: Home },
    { name: "Expertise", href: "#expertise", id: "expertise", icon: Wrench },
    { name: "Internships", href: "#internships", id: "internships", icon: Briefcase },
    { name: "Projects", href: "#projects", id: "projects", icon: Wrench },
    { name: "Credentials", href: "#experience", id: "experience", icon: GraduationCap },
    { name: "Contact", href: "#contact", id: "contact", icon: Send }
  ];

  return (
    <>
      {/* Top Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 pt-safe ${
        scrolled 
          ? 'bg-[#070b14]/90 backdrop-blur-xl border-b border-slate-800/80 py-2.5 sm:py-3 shadow-xl' 
          : 'bg-transparent py-3 sm:py-5'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* SRG Brand Identity */}
            <a href="#" className="flex items-center gap-2.5 sm:gap-3 group active:scale-95 transition-transform">
              <SRGLogo className="w-8 h-8 sm:w-10 sm:h-10 group-hover:scale-105 transition-transform" />
              <div>
                <div className="text-sm sm:text-base font-bold text-white tracking-tight flex items-center gap-1.5 leading-none">
                  <span>{personalInfo.name}</span>
                  <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-blue-500/10 text-blue-400 border border-blue-500/20 font-semibold hidden xs:inline-block">
                    {personalInfo.monogram}
                  </span>
                </div>
                <div className="text-[11px] sm:text-xs text-slate-400 font-mono tracking-wide mt-0.5">
                  Mechanical & Systems Engineer
                </div>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 bg-slate-900/60 p-1.5 rounded-full border border-slate-800">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-3.5 py-1.5 text-xs font-semibold rounded-full transition-all ${
                    activeTab === link.id
                      ? 'bg-blue-600 text-white shadow-sm'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/70'
                  }`}
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Desktop Actions: Resume & Contact */}
            <div className="hidden md:flex items-center gap-2.5">
              <a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                download="Shantu_Raj_Gogoi_Resume.pdf"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700/80 text-slate-200 hover:text-white text-xs font-bold transition-all shadow-sm active:scale-95"
              >
                <FileText size={14} className="text-blue-400" />
                <span>Resume (PDF)</span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold transition-all shadow-lg shadow-blue-600/20 hover:shadow-blue-600/40 active:scale-95"
              >
                <Mail size={14} />
                <span>Get in Touch</span>
              </a>
            </div>

            {/* Mobile Top Actions */}
            <div className="md:hidden flex items-center gap-2">
              <a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                download="Shantu_Raj_Gogoi_Resume.pdf"
                className="px-2.5 py-1.5 rounded-lg bg-slate-850 border border-slate-700 text-blue-400 active:bg-slate-800 text-xs font-bold flex items-center gap-1"
                aria-label="Download Resume"
              >
                <Download size={13} />
                <span>Resume</span>
              </a>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-xl bg-slate-850/90 border border-slate-700/80 text-slate-200 active:scale-90 transition-transform"
                aria-label="Toggle navigation"
              >
                {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Dropdown Sheet */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#070b14]/98 border-b border-slate-800/90 px-4 pt-3 pb-6 space-y-3 backdrop-blur-2xl animate-in slide-in-from-top-3 duration-200 shadow-2xl">
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => {
                const IconComponent = link.icon;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between px-3.5 py-3 rounded-xl text-sm font-medium text-slate-200 active:bg-slate-800/80 transition-colors"
                  >
                    <span className="flex items-center gap-2.5">
                      <IconComponent size={16} className="text-blue-400" />
                      {link.name}
                    </span>
                    <ChevronRight size={14} className="text-slate-500" />
                  </a>
                );
              })}
              <div className="pt-2 border-t border-slate-800/80">
                <a
                  href={personalInfo.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  download="Shantu_Raj_Gogoi_Resume.pdf"
                  className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-blue-600 text-white text-xs font-bold"
                >
                  <Download size={14} />
                  <span>Download Shantu_Raj_Gogoi_Resume.pdf</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Mobile Bottom Navigation Dock */}
      <nav 
        aria-label="Mobile Dock"
        className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#070b14]/90 backdrop-blur-2xl border-t border-slate-800/80 pb-safe shadow-[0_-10px_25px_rgba(0,0,0,0.5)]"
      >
        <div className="grid grid-cols-5 h-16 max-w-md mx-auto items-center px-1">
          {[
            { name: "About", href: "#about", id: "about", icon: Home },
            { name: "Skills", href: "#expertise", id: "expertise", icon: Wrench },
            { name: "Interns", href: "#internships", id: "internships", icon: Briefcase },
            { name: "Projects", href: "#projects", id: "projects", icon: Wrench },
            { name: "Contact", href: "#contact", id: "contact", icon: Send }
          ].map((link) => {
            const IconComponent = link.icon;
            const isActive = activeTab === link.id;
            return (
              <a
                key={link.name}
                href={link.href}
                className="flex flex-col items-center justify-center h-full w-full active:scale-90 transition-all duration-150"
              >
                <div className={`p-1.5 rounded-xl transition-all ${
                  isActive ? 'bg-blue-600/20 text-blue-400' : 'text-slate-400'
                }`}>
                  <IconComponent size={18} className={isActive ? 'stroke-[2.5]' : 'stroke-[1.8]'} />
                </div>
                <span className={`text-[10px] font-medium tracking-tight mt-0.5 ${
                  isActive ? 'text-blue-400 font-bold' : 'text-slate-400'
                }`}>
                  {link.name}
                </span>
              </a>
            );
          })}
        </div>
      </nav>
    </>
  );
}
