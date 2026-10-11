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
      
      const sections = ['about', 'expertise', 'internships', 'projects', 'experience', 'contact'];
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
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 pt-safe ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-md border-b border-slate-200 py-2.5 sm:py-3 shadow-sm' 
          : 'bg-transparent py-3 sm:py-5'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* SRG Brand Identity */}
            <a href="#" className="flex items-center gap-2.5 sm:gap-3 group active:scale-95 transition-transform">
              <SRGLogo className="w-8 h-8 sm:w-9 sm:h-9" />
              <div>
                <div className="text-sm sm:text-base font-bold text-slate-900 tracking-tight flex items-center gap-1.5 leading-none">
                  <span>{personalInfo.name}</span>
                  <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-blue-50 text-blue-700 border border-blue-200 font-semibold hidden xs:inline-block">
                    {personalInfo.monogram}
                  </span>
                </div>
                <div className="text-[11px] sm:text-xs text-slate-500 font-mono tracking-wide mt-0.5">
                  Mechanical & Systems Engineer
                </div>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 bg-slate-100 px-2 py-1.5 rounded-xl border border-slate-200">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
                    activeTab === link.id
                      ? 'bg-white text-blue-700 shadow-sm border border-slate-200/80'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
                  }`}
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Desktop Actions */}
            <div className="hidden md:flex items-center gap-2.5">
              <a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                download="Shantu_Raj_Gogoi_Resume.pdf"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 hover:text-slate-900 text-xs font-semibold transition-all shadow-sm active:scale-95"
              >
                <FileText size={14} className="text-blue-600" />
                <span>Resume (PDF)</span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold transition-all shadow-sm active:scale-95"
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
                className="px-2.5 py-1.5 rounded-lg bg-white border border-slate-200 text-blue-600 active:bg-slate-100 text-xs font-semibold flex items-center gap-1 shadow-sm"
                aria-label="Download Resume"
              >
                <Download size={13} />
                <span>Resume</span>
              </a>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg bg-white border border-slate-200 text-slate-700 active:scale-90 transition-transform shadow-sm"
                aria-label="Toggle navigation"
              >
                {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Dropdown Sheet */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-3 animate-in slide-in-from-top-2 duration-150 shadow-lg">
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => {
                const IconComponent = link.icon;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between px-3.5 py-3 rounded-lg text-sm font-medium text-slate-700 active:bg-slate-100 transition-colors"
                  >
                    <span className="flex items-center gap-2.5">
                      <IconComponent size={16} className="text-blue-600" />
                      {link.name}
                    </span>
                    <ChevronRight size={14} className="text-slate-400" />
                  </a>
                );
              })}
              <div className="pt-2 border-t border-slate-200">
                <a
                  href={personalInfo.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  download="Shantu_Raj_Gogoi_Resume.pdf"
                  className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg bg-blue-600 text-white text-xs font-semibold shadow-sm"
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
        className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-t border-slate-200 pb-safe shadow-[0_-4px_12px_rgba(0,0,0,0.05)]"
      >
        <div className="grid grid-cols-5 h-15 max-w-md mx-auto items-center px-1">
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
                className="flex flex-col items-center justify-center h-full w-full active:scale-90 transition-all duration-150 py-1"
              >
                <div className={`p-1.5 rounded-lg transition-colors ${
                  isActive ? 'bg-blue-50 text-blue-700' : 'text-slate-500'
                }`}>
                  <IconComponent size={17} className={isActive ? 'stroke-[2.5]' : 'stroke-[1.8]'} />
                </div>
                <span className={`text-[10px] font-medium tracking-tight mt-0.5 ${
                  isActive ? 'text-blue-700 font-bold' : 'text-slate-500'
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
