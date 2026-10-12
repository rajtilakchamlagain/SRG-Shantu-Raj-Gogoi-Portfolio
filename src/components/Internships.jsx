import { internships, leadership } from '../data/portfolioData';
import { Building2, Calendar, MapPin, CheckCircle, Users } from 'lucide-react';

export default function Internships() {
  return (
    <section id="internships" className="py-20 sm:py-24 relative bg-[#0e121d] border-b border-[#232d46]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-500/10 border border-blue-500/20 text-xs font-mono uppercase tracking-widest text-blue-400 font-semibold mb-3">
            <span>03</span>
            <span>&bull;</span>
            <span>Verified Industrial Experience</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
            Industry Internships & Engineering Practicums
          </h2>
          <p className="text-slate-400 mt-3 text-sm sm:text-base leading-relaxed">
            Direct operational and engineering experience across commercial healthcare product design, oil refinery infrastructure, and precision MSME tool room fabrication.
          </p>
        </div>

        {/* 3 Prominent Internship Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7 mb-16">
          {internships.map((intern, idx) => (
            <div 
              key={idx}
              className="bg-[#131826] border border-[#232d46] rounded-2xl p-6 sm:p-7 flex flex-col justify-between hover:border-blue-500/50 hover:shadow-designer-glow transition-all shadow-designer-sm group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="px-2.5 py-1 rounded-md bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono font-semibold">
                    {intern.badge}
                  </span>
                  <span className="text-xs text-slate-400 font-mono flex items-center gap-1.5">
                    <Calendar size={13} />
                    {intern.period}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-blue-300 transition-colors leading-snug">
                  {intern.role}
                </h3>
                <h4 className="text-sm font-semibold text-slate-300 mt-1.5 mb-4 flex items-center gap-2">
                  <Building2 size={16} className="text-blue-400" />
                  <span>{intern.company}</span>
                </h4>

                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {intern.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#232d46] flex items-center justify-between text-xs text-slate-400 font-mono">
                <span className="flex items-center gap-1.5">
                  <MapPin size={13} />
                  {intern.location}
                </span>
                <span className="text-emerald-400 flex items-center gap-1 font-semibold">
                  <CheckCircle size={13} />
                  Verified
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Leadership & Academic Department Positions */}
        <div className="bg-[#131826] border border-[#232d46] rounded-2xl p-6 sm:p-8 shadow-designer-sm">
          <h3 className="text-base sm:text-lg font-bold text-white mb-6 flex items-center gap-2.5">
            <Users size={18} className="text-blue-400" />
            Engineering Club Leadership & Roles
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {leadership.map((item, idx) => (
              <div key={idx} className="bg-[#0c0f17] border border-[#232d46] rounded-xl p-5 space-y-2">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-blue-400 font-bold">{item.org}</span>
                  <span className="text-slate-500">{item.period}</span>
                </div>
                <h4 className="text-base font-bold text-white">
                  {item.role}
                </h4>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
