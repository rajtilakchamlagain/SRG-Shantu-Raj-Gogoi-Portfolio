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
          ? 'bg-[#0b0f19]/95 backdrop-blur-md border-b border-[#1f293d] py-2.5 sm:py-3 shadow-md' 
          : 'bg-transparent py-3 sm:py-5'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* SRG Brand Identity */}
            <a href="#" className="flex items-center gap-2.5 sm:gap-3 group active:scale-95 transition-transform">
              <SRGLogo className="w-8 h-8 sm:w-9 sm:h-9" />
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
            <nav className="hidden lg:flex items-center gap-1 bg-[#111827] px-2 py-1.5 rounded-xl border border-[#1f293d]">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
                    activeTab === link.id
                      ? 'bg-blue-600 text-white shadow-sm'
                      : 'text-slate-300 hover:text-white hover:bg-[#182234]'
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
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-[#111827] hover:bg-[#182234] border border-[#1f293d] text-slate-200 hover:text-white text-xs font-semibold transition-all active:scale-95"
              >
                <FileText size={14} className="text-blue-400" />
                <span>Resume (PDF)</span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold transition-all shadow-sm active:scale-95"
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
                className="px-2.5 py-1.5 rounded-lg bg-[#111827] border border-[#1f293d] text-blue-400 active:bg-[#182234] text-xs font-semibold flex items-center gap-1"
                aria-label="Download Resume"
              >
                <Download size={13} />
                <span>Resume</span>
              </a>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg bg-[#111827] border border-[#1f293d] text-slate-200 active:scale-90 transition-transform"
                aria-label="Toggle navigation"
              >
                {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Dropdown Sheet */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#0b0f19] border-b border-[#1f293d] px-4 pt-3 pb-6 space-y-3 animate-in slide-in-from-top-2 duration-150 shadow-xl">
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => {
                const IconComponent = link.icon;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between px-3.5 py-3 rounded-lg text-sm font-medium text-slate-200 active:bg-[#182234] transition-colors"
                  >
                    <span className="flex items-center gap-2.5">
                      <IconComponent size={16} className="text-blue-400" />
                      {link.name}
                    </span>
                    <ChevronRight size={14} className="text-slate-500" />
                  </a>
                );
              })}
              <div className="pt-2 border-t border-[#1f293d]">
                <a
                  href={personalInfo.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  download="Shantu_Raj_Gogoi_Resume.pdf"
                  className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg bg-blue-600 text-white text-xs font-semibold"
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
        className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#0b0f19]/95 backdrop-blur-md border-t border-[#1f293d] pb-safe shadow-lg"
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
                  isActive ? 'bg-blue-600/15 text-blue-400' : 'text-slate-400'
                }`}>
                  <IconComponent size={17} className={isActive ? 'stroke-[2.5]' : 'stroke-[1.8]'} />
                </div>
                <span className={`text-[10px] font-medium tracking-tight mt-0.5 ${
                  isActive ? 'text-blue-400 font-semibold' : 'text-slate-400'
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
