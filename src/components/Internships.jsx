import { internships, leadership } from '../data/portfolioData';
import { Briefcase, Building2, Calendar, MapPin, CheckCircle, Users } from 'lucide-react';

export default function Internships() {
  return (
    <section id="internships" className="py-16 sm:py-20 relative bg-[#090e1a] border-y border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-mono uppercase tracking-widest text-blue-400 font-semibold mb-2">
            02. Verified Industrial Experience
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
            Industry Internships & Engineering Practicums
          </h2>
          <p className="text-slate-400 mt-2 text-sm sm:text-base">
            Direct operational and engineering experience across commercial healthcare product design, oil refinery infrastructure, and precision MSME tool room fabrication.
          </p>
        </div>

        {/* 3 Prominent Internship Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {internships.map((intern, idx) => (
            <div 
              key={idx}
              className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 sm:p-7 flex flex-col justify-between hover:border-blue-500/40 transition-all hover:shadow-xl hover:shadow-blue-500/5 group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="px-2.5 py-1 rounded-md bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono font-semibold">
                    {intern.badge}
                  </span>
                  <span className="text-xs text-slate-400 font-mono flex items-center gap-1">
                    <Calendar size={12} />
                    {intern.period}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-blue-300 transition-colors leading-snug">
                  {intern.role}
                </h3>
                <h4 className="text-sm font-semibold text-slate-300 mt-1 mb-4 flex items-center gap-1.5">
                  <Building2 size={15} className="text-blue-400" />
                  <span>{intern.company}</span>
                </h4>

                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {intern.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400 font-mono">
                <span className="flex items-center gap-1">
                  <MapPin size={12} />
                  {intern.location}
                </span>
                <span className="text-emerald-400 flex items-center gap-1">
                  <CheckCircle size={12} />
                  Verified
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Leadership & Academic Department Positions */}
        <div className="bg-slate-900/50 border border-slate-800/90 rounded-2xl p-6 sm:p-8">
          <h3 className="text-base sm:text-lg font-bold text-white mb-6 flex items-center gap-2">
            <Users size={18} className="text-blue-400" />
            Engineering Club Leadership & Roles
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {leadership.map((item, idx) => (
              <div key={idx} className="bg-slate-950/60 border border-slate-800/80 rounded-xl p-5 space-y-2">
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
