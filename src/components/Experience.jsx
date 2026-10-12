import { educationAndTimeline, certifications, personalInfo } from '../data/portfolioData';
import { GraduationCap, Award, Calendar, MapPin, CheckCircle, FileText, Download } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="py-20 sm:py-24 relative bg-[#0e121d] border-b border-[#232d46]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14 sm:mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-500/10 border border-blue-500/20 text-xs font-mono uppercase tracking-widest text-blue-400 font-semibold mb-3">
              <span>05</span>
              <span>&bull;</span>
              <span>Academic Roadmap & Certifications</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Degree Standing & Technical Credentials
            </h2>
          </div>

          {/* Quick Resume Download Pill */}
          <a
            href={personalInfo.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            download="Shantu_Raj_Gogoi_Resume.pdf"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#131826] border border-[#232d46] hover:border-slate-500 text-slate-200 hover:text-white transition-all text-xs font-semibold active:scale-95 shadow-designer-sm"
          >
            <Download size={14} className="text-blue-400" />
            <span>Download Official Resume (PDF)</span>
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Left Column: Academic Progression */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-base sm:text-lg font-bold text-white flex items-center gap-2 mb-4">
              <GraduationCap size={18} className="text-blue-400" />
              Undergraduate Degree
            </h3>

            {educationAndTimeline.map((item, idx) => (
              <div key={idx} className="bg-[#131826] border border-[#232d46] rounded-2xl p-6 sm:p-7 space-y-4 shadow-designer-sm">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="inline-flex items-center gap-1.5 text-xs font-mono text-blue-400 font-medium bg-blue-500/10 px-2.5 py-1 rounded-md border border-blue-500/20">
                    <Calendar size={12} />
                    {item.period}
                  </span>
                  <span className="text-xs font-mono text-slate-400 flex items-center gap-1">
                    <MapPin size={12} />
                    {item.location}
                  </span>
                </div>

                <div>
                  <h4 className="text-lg font-bold text-white">
                    {item.role}
                  </h4>
                  <h5 className="text-sm font-medium text-slate-300 mt-0.5">
                    {item.organization}
                  </h5>
                </div>

                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {item.description}
                </p>

                {item.bulletPoints && (
                  <ul className="space-y-2 pt-3 border-t border-[#232d46] text-xs sm:text-sm text-slate-300">
                    {item.bulletPoints.map((point, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2">
                        <CheckCircle size={14} className="text-blue-400 shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>

          {/* Right Column: Industry Certifications */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-base sm:text-lg font-bold text-white flex items-center gap-2 mb-4">
              <Award size={18} className="text-indigo-400" />
              Certifications & Training
            </h3>

            <div className="space-y-3.5">
              {certifications.map((cert, idx) => (
                <div key={idx} className="bg-[#131826] border border-[#232d46] rounded-2xl p-4 sm:p-5 hover:border-slate-500 transition-colors shadow-designer-sm">
                  <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-1.5">
                    <span className="text-blue-400 font-semibold px-2 py-0.5 rounded bg-blue-500/10 border border-blue-500/20">
                      {cert.badge}
                    </span>
                    <span>{cert.year}</span>
                  </div>
                  <h4 className="text-sm font-bold text-white leading-snug">
                    {cert.title}
                  </h4>
                  <p className="text-xs text-slate-400 mt-1 font-mono">
                    {cert.issuer}
                  </p>
                </div>
              ))}
            </div>

            {/* Resume Callout Card */}
            <div className="bg-[#131826] border border-[#232d46] rounded-2xl p-6 text-xs text-slate-300 space-y-3 shadow-designer-sm">
              <div className="font-bold text-sm text-white flex items-center gap-2">
                <FileText size={16} className="text-blue-400" />
                Verified Resume Available
              </div>
              <p className="leading-relaxed text-slate-400">
                Contains complete academic scores, training certificates from TRTC MSME, and verifiable recommendations from Numaligarh Refinery Limited.
              </p>
              <a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                download="Shantu_Raj_Gogoi_Resume.pdf"
                className="inline-flex items-center gap-1.5 text-blue-400 font-semibold hover:underline"
              >
                <span>Download Shantu_Raj_Gogoi_Resume.pdf</span>
                <Download size={13} />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
