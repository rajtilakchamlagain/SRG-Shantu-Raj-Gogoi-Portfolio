import { educationAndTimeline, certifications, personalInfo } from '../data/portfolioData';
import { GraduationCap, Award, Calendar, MapPin, CheckCircle, FileText, Download } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="py-16 sm:py-20 relative bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="text-xs font-mono uppercase tracking-widest text-blue-600 font-semibold mb-2">
              05. Academic Standing & Certifications
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
              Degree Roadmap & Technical Credentials
            </h2>
          </div>

          {/* Quick Resume Download Pill */}
          <a
            href={personalInfo.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            download="Shantu_Raj_Gogoi_Resume.pdf"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-white border border-slate-200 hover:border-slate-300 text-slate-700 hover:text-slate-900 transition-colors text-xs font-semibold active:scale-95 shadow-sm"
          >
            <Download size={14} className="text-blue-600" />
            <span>Download Official Resume (PDF)</span>
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Left Column: Academic Progression */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2 mb-4">
              <GraduationCap size={18} className="text-blue-600" />
              Undergraduate Degree
            </h3>

            {educationAndTimeline.map((item, idx) => (
              <div key={idx} className="bg-white border border-slate-200 rounded-xl p-6 sm:p-7 space-y-4 shadow-sm">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="inline-flex items-center gap-1.5 text-xs font-mono text-blue-700 font-medium bg-blue-50 px-2.5 py-1 rounded border border-blue-200">
                    <Calendar size={12} />
                    {item.period}
                  </span>
                  <span className="text-xs font-mono text-slate-500 flex items-center gap-1">
                    <MapPin size={12} />
                    {item.location}
                  </span>
                </div>

                <div>
                  <h4 className="text-base sm:text-lg font-bold text-slate-900">
                    {item.role}
                  </h4>
                  <h5 className="text-sm font-medium text-slate-600 mt-0.5">
                    {item.organization}
                  </h5>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>

                {item.bulletPoints && (
                  <ul className="space-y-2 pt-2 border-t border-slate-100 text-xs sm:text-sm text-slate-700">
                    {item.bulletPoints.map((point, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2">
                        <CheckCircle size={14} className="text-blue-600 shrink-0 mt-0.5" />
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
            <h3 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2 mb-4">
              <Award size={18} className="text-indigo-600" />
              Certifications & Training
            </h3>

            <div className="space-y-3">
              {certifications.map((cert, idx) => (
                <div key={idx} className="bg-white border border-slate-200 rounded-xl p-4 sm:p-5 hover:border-slate-300 transition-colors shadow-sm">
                  <div className="flex items-center justify-between text-xs font-mono text-slate-500 mb-1.5">
                    <span className="text-blue-700 font-semibold px-2 py-0.5 rounded bg-blue-50 border border-blue-200">
                      {cert.badge}
                    </span>
                    <span>{cert.year}</span>
                  </div>
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900 leading-snug">
                    {cert.title}
                  </h4>
                  <p className="text-[11px] sm:text-xs text-slate-500 mt-1 font-mono">
                    {cert.issuer}
                  </p>
                </div>
              ))}
            </div>

            {/* Resume Callout Card */}
            <div className="bg-white border border-slate-200 rounded-xl p-5 sm:p-6 text-xs text-slate-700 space-y-3 shadow-sm">
              <div className="font-bold text-sm text-slate-900 flex items-center gap-2">
                <FileText size={16} className="text-blue-600" />
                Verified Resume Available
              </div>
              <p className="leading-relaxed text-slate-600">
                Contains complete academic scores, training certificates from TRTC MSME, and verifiable recommendations from Numaligarh Refinery Limited.
              </p>
              <a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                download="Shantu_Raj_Gogoi_Resume.pdf"
                className="inline-flex items-center gap-1.5 text-blue-600 font-semibold hover:underline"
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
