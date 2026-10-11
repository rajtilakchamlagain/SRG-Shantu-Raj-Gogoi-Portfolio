import { educationAndTimeline, certificationsAndAchievements } from '../data/portfolioData';
import { GraduationCap, Briefcase, Award, Calendar, MapPin, CheckCircle } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="py-20 relative bg-[#070b14]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-mono uppercase tracking-widest text-blue-400 font-semibold mb-2">
            04. Academic Roadmap & Practical Experience
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Education, Fieldwork & Credentials
          </h2>
          <p className="text-slate-400 mt-2 text-sm sm:text-base">
            Verified academic trajectory at Assam Science and Technology University and hands-on community fieldwork.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Education & Experience Timeline */}
          <div className="lg:col-span-8 space-y-8">
            <h3 className="text-lg font-bold text-white flex items-center gap-2 mb-6">
              <GraduationCap size={20} className="text-blue-400" />
              Chronological Milestones
            </h3>

            <div className="relative border-l-2 border-slate-800 ml-4 space-y-10 pl-6 sm:pl-8">
              {educationAndTimeline.map((item, idx) => {
                const isEdu = item.type === 'education';
                return (
                  <div key={idx} className="relative group">
                    {/* Timeline Node Point */}
                    <div className="absolute -left-[31px] sm:-left-[39px] top-1 w-4 h-4 rounded-full bg-slate-900 border-2 border-blue-500 group-hover:scale-125 transition-transform" />

                    <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-6 hover:border-slate-700 transition-colors">
                      {/* Top Meta info */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                        <span className="inline-flex items-center gap-1.5 text-xs font-mono text-blue-400 font-medium bg-blue-500/10 px-2.5 py-1 rounded">
                          <Calendar size={13} />
                          {item.period}
                        </span>
                        <span className="text-xs font-mono text-slate-400 flex items-center gap-1">
                          <MapPin size={13} />
                          {item.location}
                        </span>
                      </div>

                      <h4 className="text-lg font-bold text-white mt-2">
                        {item.role}
                      </h4>
                      <h5 className="text-sm font-medium text-slate-300 mb-3">
                        {item.organization}
                      </h5>

                      <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                        {item.description}
                      </p>

                      {item.bulletPoints && (
                        <ul className="mt-4 space-y-2 text-xs sm:text-sm text-slate-300">
                          {item.bulletPoints.map((point, pIdx) => (
                            <li key={pIdx} className="flex items-start gap-2">
                              <CheckCircle size={15} className="text-blue-400 shrink-0 mt-0.5" />
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Key Focus Areas & Certifications */}
          <div className="lg:col-span-4 space-y-8">
            <h3 className="text-lg font-bold text-white flex items-center gap-2 mb-6">
              <Award size={20} className="text-indigo-400" />
              Focus Recognitions & Projects
            </h3>

            <div className="space-y-4">
              {certificationsAndAchievements.map((cert, idx) => (
                <div key={idx} className="bg-slate-900/80 border border-slate-800 rounded-xl p-5 hover:border-indigo-500/40 transition-colors">
                  <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-2">
                    <span className="text-indigo-400 font-semibold px-2 py-0.5 rounded bg-indigo-500/10 border border-indigo-500/20">
                      {cert.badge}
                    </span>
                    <span>{cert.date}</span>
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

            {/* Quick Senior Degree Summary Card */}
            <div className="bg-gradient-to-br from-blue-900/20 to-indigo-900/20 border border-blue-500/30 rounded-2xl p-6 text-xs text-slate-300 space-y-3">
              <div className="font-bold text-sm text-white flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Graduate Employment Readiness
              </div>
              <p className="leading-relaxed">
                Completed core mandatory mechanical curriculum laboratories including Fluid Machinery, IC Engines, Dynamics of Machines, and Metrology. Ready to integrate into mechanical engineering teams, product design studios, or manufacturing units.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
